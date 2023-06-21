import { relations, type InferModel } from 'drizzle-orm';
import { boolean, integer, pgTable, text, uuid } from 'drizzle-orm/pg-core';
import { users } from './user';
import { brews } from './brew';

export const recipes = pgTable('recipes', {
	id: uuid('id').defaultRandom().primaryKey(),
	name: text('name').notNull(),
	description: text('description').notNull(),
	instructions: text('instructions').notNull(),
	milkType: text('milk_type'),
	milkAmount: integer('milk_amount'),
	syrupType: text('syrup_type'),
	syrupAmount: integer('syrup_amount'),
	iced: boolean('iced'),
	toppings: text('toppings').array(),
	coffeeRatio: text('coffee_ratio'),
	rating: integer('rating'),
	notes: text('notes'),
	userId: uuid('user_id').notNull(),
	brewId: uuid('brew_id').notNull()
});

export const recipesRelations = relations(recipes, ({ one }) => ({
	user: one(users, { fields: [recipes.userId], references: [users.id] }),
	brew: one(brews, { fields: [recipes.brewId], references: [brews.id] })
}));

export type Recipe = InferModel<typeof recipes>;
