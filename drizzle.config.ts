import type { Config } from 'drizzle-kit';
import 'dotenv/config';

if (!process.env.DATABASE_URL) {
	throw new Error('DATABASE_URL environment variable is not set');
}

export default {
	schema: './src/db/schema',
	driver: 'pg',
	out: './migrations',
	dbCredentials: {
		connectionString: process.env.DATABASE_URL
	}
} satisfies Config;
