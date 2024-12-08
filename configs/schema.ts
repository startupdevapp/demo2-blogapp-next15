import { pgTable, serial, timestamp, varchar } from 'drizzle-orm/pg-core';

export const PostList = pgTable('PostList', {
	id: serial().primaryKey(),
	postId: varchar('postId').notNull().unique(),
	title: varchar('title').notNull(),
	slug: varchar('slug').notNull().unique(),
	description: varchar('description').notNull().default('No description'),
	category: varchar('category').notNull(),
	tags: varchar('tags').notNull(),
	thumbnail: varchar('thumbnail').notNull().default('/placeholder.png'),
	content: varchar('content').notNull(),
	status: varchar('status').notNull().default('draft'),
	createdAt: timestamp('createdAt').notNull().defaultNow(),
	updatedAt: timestamp('updatedAt'),
	createdBy: varchar('createdBy').notNull(),
	userName: varchar('userName'),
	userProfileImage: varchar('userProfileImage'),
});
