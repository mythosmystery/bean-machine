import { relations, type InferModel } from 'drizzle-orm';
import { date, integer, pgEnum, pgTable, text, uuid } from 'drizzle-orm/pg-core';
import { users } from './user';
import { brews } from './brew';

export const roastLevelEnum = pgEnum('roast_level', ['light', 'medium', 'dark']);

export const coffees = pgTable('coffees', {
	id: uuid('id').defaultRandom().primaryKey(),
	name: text('name').notNull(),
	roastLevel: roastLevelEnum('roast_level').notNull(),
	origin: text('origin'),
	roastDate: date('roast_date'),
	flavorNotes: text('flavor_notes').array(),
	rating: integer('rating'),
	notes: text('notes'),
	userId: uuid('user_id').notNull()
});

export const coffeesRelations = relations(coffees, ({ one, many }) => ({
	user: one(users, { fields: [coffees.userId], references: [users.id] }),
	brews: many(brews)
}));

export type Coffee = InferModel<typeof coffees>;
