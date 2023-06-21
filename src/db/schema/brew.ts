import { relations, type InferModel } from 'drizzle-orm';
import { integer, pgTable, text, uuid } from 'drizzle-orm/pg-core';
import { users } from './user';
import { coffees } from './coffee';

export const brews = pgTable('brews', {
	id: uuid('id').defaultRandom().primaryKey(),
	dose: integer('dose').notNull(),
	grindSetting: text('grind_setting'),
	time: integer('time').notNull(),
	pressure: integer('pressure').notNull(),
	yield: integer('yield').notNull(),
	temperature: integer('temperature').notNull(),
	notes: text('notes'),
	filterType: text('filter_type'),
	preInfusion: integer('pre_infusion'),
	bloom: integer('bloom'),
	rating: integer('rating'),
	userId: uuid('user_id').notNull(),
	coffeeId: uuid('coffee_id').notNull()
});

export const brewsRelations = relations(brews, ({ one }) => ({
	user: one(users, { fields: [brews.userId], references: [users.id] }),
	coffee: one(coffees, { fields: [brews.coffeeId], references: [coffees.id] })
}));

export type Brew = InferModel<typeof brews>;
