import { CategoryItems } from '@/contansts';
import { Post } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface BlogCardProps {
	post: Post;
}

const BlogCard = ({ post }: BlogCardProps) => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-10">
			<div className="flex items-center justify-center cursor-pointer overflow-hidden max-h-[240px]">
				<Link href={`/${post?.slug}`}>
					<Image
						src={post?.thumbnail || '/placeholder.png'}
						alt="thumbnail"
						width={1920}
						height={900}
						className="object-cover"
					/>
				</Link>
			</div>
			<div className="flex flex-col gap-6">
				<div>
					<span className="text-gray-500 mr-3">
						{post?.createdAt.toLocaleDateString()}
					</span>
					<span className="text-myPrimaryBlue font-bold">
						{CategoryItems.find((item) => item.value === post?.category)?.label}
					</span>
				</div>
				<div className="flex">
					<Link href={`/${post?.slug}`}>
						<h1 className="text-xl font-bold text-ellipsis overflow-hidden line-clamp-2">
							{post?.title}
						</h1>
					</Link>
				</div>
				<p className="line-clamp-3">{post?.description}</p>
				<Link href={`${post?.slug}`} className="underline font-bold"></Link>
			</div>
		</div>
	);
};

export default BlogCard;
