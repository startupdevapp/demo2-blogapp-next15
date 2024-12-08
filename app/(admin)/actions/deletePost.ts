'use server';

import { db } from '@/configs/db';
import { PostList } from '@/configs/schema';
import { auth } from '@clerk/nextjs/server';
import { eq } from 'drizzle-orm';

export const deletePostBySlug = async (slug: string) => {
	try {
		const user = auth();
		if (!user) return;
		const post = await db.delete(PostList).where(eq(PostList.slug, slug));
		return post;
	} catch (error) {
		console.error(error);
	}
};
