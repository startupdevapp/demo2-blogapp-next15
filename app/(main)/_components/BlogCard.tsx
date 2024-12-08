import CustomIcon from '@/components/CustomIcon';
import { CategoryItems } from '@/contansts';
import { Post } from '@/types';
import { BookOpen } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface BlogCardProps {
	post: Post;
}

const BlogCard = ({ post }: BlogCardProps) => {
	return (
		<div className="shadow-lg rounded-lg flex flex-col border-2 hover:cursor-pointer hover:border-myPrimaryBlue/80 min-h-[380px]">
			<Link href={`/${post?.slug}`}>
				<Image
					src={post?.thumbnail ?? '/placeholder.png'}
					alt="thumbnail"
					height={200}
					width={300}
					className="w-full h-[200px] object-cove rounded-lg"
				/>
			</Link>
			<div className="flex flex-col p-3 gap-2">
				<div className="flex font-medium text-lg items-center justify-between">
					<h2 className="line-clamp-2">{post?.title}</h2>
				</div>
				<p className="flex text-sm text-gray-500 mb-1">
					{post?.createdAt.toLocaleString()}
				</p>

				<h2 className="flex text-center items-center gap-2 p-1 bg-primary/10 text-primary text-sm rounded ">
					<CustomIcon Icon={BookOpen} height={20} width={20} />
					{CategoryItems.find((item) => item.value === post?.category)?.label}
				</h2>

				<div className="flex items-center">
					<Image
						src={`${post?.userProfileImage}`}
						alt="author"
						width={35}
						height={35}
						className="rounded-full mr-3"
					/>
					<h2>{post?.userName}</h2>
				</div>
			</div>
		</div>
	);
};

export default BlogCard;
