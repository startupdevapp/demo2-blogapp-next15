'use server';

import { db } from '@/configs/db';
import { PostList } from '@/configs/schema';
import { desc, eq, and } from 'drizzle-orm';

export const getAllPost = async () => {
	try {
		const posts = await db.select().from(PostList);
		return posts;
	} catch (error) {
		console.error(error);
	}
};

export const getPostsByStatus = async (status: string) => {
	try {
		const posts = await db
			.select()
			.from(PostList)
			.where(eq(PostList.status, status))
			.orderBy(desc(PostList.id));
		return posts;
	} catch (error) {
		console.error(error);
	}
};

export const getPostsBySlug = async (slug: string) => {
	try {
		const post = await db
			.select()
			.from(PostList)
			.where(eq(PostList.slug, slug))
			.execute();
		return post[0];
	} catch (error) {
		console.error(error);
	}
};

export const getPostsByCatAndTag = async (catSlug: string, tag: string) => {
	try {
		const posts = await db
			.select()
			.from(PostList)
			.where(
				and(
					eq(PostList.category, catSlug),
					...(tag !== '' ? [eq(PostList.tags, tag)] : [])
				)
			)
			.orderBy(desc(PostList.id));
		return posts;
	} catch (error) {
		console.error(error);
	}
};
