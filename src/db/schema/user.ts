import type { InferModel } from 'drizzle-orm';
import { pgTable, text, uuid } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
	id: uuid('id').defaultRandom().primaryKey(),
	username: text('username').notNull(),
	email: text('email').notNull(),
	name: text('name').notNull(),
	bio: text('bio').notNull(),
	avatar: text('avatar')
});

export type User = InferModel<typeof users>;
