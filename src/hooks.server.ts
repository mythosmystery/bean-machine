import type { Handle } from '@sveltejs/kit';
import ws from 'ws';
import { AUTH_SECRET, DATABASE_URL, GITHUB_ID, GITHUB_SECRET } from '$env/static/private';
import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import * as user from './db/schema/user';
import * as coffee from './db/schema/coffee';
import * as brew from './db/schema/brew';
import * as recipe from './db/schema/recipe';
import { SvelteKitAuth } from '@auth/sveltekit';
import GitHub from '@auth/core/providers/github';
import { sequence } from '@sveltejs/kit/hooks';
import type { Provider } from '@auth/core/providers';

if (process.env.NODE_ENV !== 'production') neonConfig.webSocketConstructor = ws;

export const handleDB: Handle = async ({ event, resolve }) => {
	const pool = new Pool({ connectionString: DATABASE_URL });
	const db = drizzle(pool, { schema: { ...user, ...coffee, ...brew, ...recipe } });
	event.locals.db = db;
	const response = await resolve(event);
	pool.end();
	return response;
};

export const authHandler = SvelteKitAuth({
	providers: [GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET })] as Provider[],
	secret: AUTH_SECRET
});

export const handle: Handle = sequence(authHandler, handleDB);
