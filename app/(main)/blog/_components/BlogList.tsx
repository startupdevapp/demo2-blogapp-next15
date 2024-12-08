import { Post } from '@/types';
import React from 'react';
import BlogCard from './BlogCard';
import QueryPagination from './QueryPagination';

interface BlogListProps {
	displayPosts: Post[];
	totalPages: number;
}

const BlogList = ({ displayPosts, totalPages }: BlogListProps) => {
	return (
		<div className="mt-10">
			<h1 className="font-bold text-xl">Bài viết mới nhất</h1>
			<div className="flex gap-10 flex-col mt-10">
				{displayPosts.map((post, index) => (
					<div key={index}>
						<BlogCard post={post} />
					</div>
				))}
			</div>

			<hr className="border-2 w-[30%] my-10 ml-[35%]" />
			<div className="mt-5">
				<QueryPagination totalPages={totalPages} />
			</div>
		</div>
	);
};

export default BlogList;
