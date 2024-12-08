'use server';

import { auth } from '@clerk/nextjs/server';
import { db } from '@/configs/db';
import { PostList } from '@/configs/schema';
import { eq } from 'drizzle-orm';

type UpdatePostProps = {
	data: {
		postId: string;
		title: string;
		slug: string;
		category: string;
		description: string;
		content: string;
		tags: string;
		thumbnail: string;
		status: string;
		createdBy: string;
		userName: string;
		userProfileImage: string;
	};
};

export const updatePost = async ({ data }: UpdatePostProps) => {
	try {
		const user = auth();
		if (!user) return;
		await db
			.update(PostList)
			.set({
				...data,
				updatedAt: new Date(),
			})
			.where(eq(PostList.slug, data.slug as string));
	} catch (error) {
		console.error(error);
	}
};
