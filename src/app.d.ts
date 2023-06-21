// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types

import type { NeonDatabase } from 'drizzle-orm/neon-serverless';
import * as schema from './db/schema';

declare global {
	declare namespace App {
		interface Locals {
			db: NeonDatabase<typeof schema>;
		}
	}
}
