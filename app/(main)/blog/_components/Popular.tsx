import { Badge } from '@/components/ui/badge';
import { CategoryItems } from '@/contansts';
import { Post } from '@/types';
import React from 'react';

interface PopularProps {
	posts: Post[];
	cat: string;
	color: string;
	onClick?: () => void;
}

const Popular = ({ posts, cat, color, onClick }: PopularProps) => {
	const popularPosts = posts
		.filter((post) => post.category === cat)
		.slice(0, 3);

	return (
		<div className="mt-6">
			<Badge
				className={`${color} text-white min-w-20 min-h-4 p-1 items-center justify-center hover:cursor-pointer`}
				onClick={onClick}
			>
				{CategoryItems.find((item) => item.value === cat)?.label}
			</Badge>
			{popularPosts.map((post, index) => (
				<div key={index} className="flex flex-col gap-1 mt-2">
					<h1 className="font-bold text-sm">{post?.title}</h1>
					<p className="text-sm text-gray-500">
						{post?.createdAt.toLocaleDateString()}
					</p>
				</div>
			))}
		</div>
	);
};

export default Popular;
