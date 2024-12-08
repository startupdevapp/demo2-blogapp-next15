'use server';

import slugify from 'slugify';
import { auth } from '@clerk/nextjs/server';
import { PostProps, Post } from '@/types';
import { db } from '@/configs/db';
import { PostList } from '@/configs/schema';
import { getPostsBySlug } from './getPosts';

export const createPost = async ({
	postId,
	title,
	slug,
	description,
	category,
	content,
	thumbnail,
	tags,
	status,
	createdBy,
	userName,
	userProfileImage,
}: PostProps) => {
	const user = auth();

	if (!user) return;

	// create slug

	const shortSlug = slugify(slug, {
		replacement: '-',
		remove: /[*+~.()'"!:@]/g,
		lower: true,
		strict: true,
		locale: 'vi',
		trim: true,
	});

	// Check if the slug is already taken

	let finalSlug = shortSlug;

	const post = await getPostsBySlug(finalSlug);

	if (post) {
		const randomSlug = `${finalSlug}-${postId}`;
		finalSlug = randomSlug;
	}

	// Insert the post into the database

	await db.insert(PostList).values({
		postId,
		title,
		slug: finalSlug,
		category,
		description,
		content,
		thumbnail,
		tags,
		status,
		createdBy,
		userName,
		userProfileImage,
	} as Post);
};
