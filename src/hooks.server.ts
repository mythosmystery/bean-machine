import type { Handle } from '@sveltejs/kit';
import ws from 'ws';
import { DATABASE_URL } from '$env/static/private';
import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import * as schema from './db/schema';
import { SvelteKitAuth } from '@auth/sveltekit';
import GitHub from '@auth/core/providers/github';

if (process.env.NODE_ENV !== 'production') neonConfig.webSocketConstructor = ws;

export const handleDB: Handle = async ({ event, resolve }) => {
	const pool = new Pool({ connectionString: DATABASE_URL });
	const db = drizzle(pool, { schema });
	event.locals.db = db;
	const response = await resolve(event);
	// response.headers.append('set-cookie', event.locals.pb.authStore.exportToCookie());
	pool.end();
	return response;
};

export const handleAuth = SvelteKitAuth({
	providers: [GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET })]
});
