'use client';

import { getPostsByStatus } from '@/app/(admin)/actions/getPosts';
import { Post } from '@/types';
import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';
import CategoryList from './CategoryList';
import Link from 'next/link';
import { Ellipsis } from 'lucide-react';
import CustomLoader from '@/components/CustomLoader';

const BlogSection = () => {
	const [BlogList, setBlogList] = useState<Post[]>([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const getPublishedPosts = async () => {
			setLoading(true);
			const result = await getPostsByStatus('publish');
			if (result) {
				setBlogList(result as Post[]);
			}
			setLoading(false);
		};
		getPublishedPosts();
	}, []);

	const displayBlogList = BlogList.slice(0, 8);

	return (
		<div className="">
			{/* Info */}
			<div className="flex flex-col gap-10 md:flex-row justify-between">
				<CategoryList cat="" />
				<Link
					href={`/blog`}
					className="flex items-center justify-center bg-myPrimaryBlue hover:opacity-70 text-white p-3 rounded-lg max-h-14"
				>
					<p className="mr-2">Xem thêm</p>
					<Ellipsis size={30} />
				</Link>
			</div>
			{/* Post List */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-20">
				{displayBlogList.map((post, index) => (
					<div key={index}>
						<BlogCard post={post} />
					</div>
				))}
			</div>

			<CustomLoader isLoading={loading} title="Vui lòng chờ" />
		</div>
	);
};

export default BlogSection;
