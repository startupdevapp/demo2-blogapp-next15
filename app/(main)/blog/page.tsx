'use client';

import { getPostsByStatus } from '@/app/(admin)/actions/getPosts';
import { Post } from '@/types';
import React, { use, useEffect, useState } from 'react';
import Featured from './_components/Featured';
import BlogList from './_components/BlogList';
import RightSidebar from './_components/RightSidebar';
import CustomLoader from '@/components/CustomLoader';

const POST_PER_PAGE = 5;

type SearchParams = Promise<{ [key: string]: string | undefined }>;

const BlogPage = (props: { searchParams: SearchParams }) => {
	const searchParams = use(props.searchParams);
	const currentPage = Number(searchParams?.page) || 1;
	const [posts, setPosts] = useState<Post[]>([]);
	const [loading, setLoading] = useState(false);

	const totalPages = Math.ceil(posts.length / POST_PER_PAGE);

	const displayPosts = posts.slice(
		(currentPage - 1) * POST_PER_PAGE,
		currentPage * POST_PER_PAGE
	);

	useEffect(() => {
		setLoading(true);
		const getPosts = async () => {
			const result = await getPostsByStatus('publish');
			if (result) {
				setPosts(result as Post[]);
			}
			setLoading(false);
		};
		getPosts();
	}, []);

	return (
		<div className="flex flex-col">
			<Featured posts={posts} />
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
				{/* Blog List */}
				<div className="col-span-2">
					<BlogList displayPosts={displayPosts} totalPages={totalPages} />
				</div>
				{/* Right sidebar */}
				<div className="col-span-1">
					<RightSidebar posts={posts} />
				</div>
			</div>
			<CustomLoader isLoading={loading} title="Vui lòng chờ..." />
		</div>
	);
};

export default BlogPage;
