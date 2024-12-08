import { Button } from '@/components/ui/button';
import { Post } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface FeaturedProps {
	posts: Post[];
}

const Featured = ({ posts }: FeaturedProps) => {
	const latestPost = posts[0];

	return (
		<div className="mt-10 flex items-center justify-center w-full bg-myPrimaryBlue/50 rounded-lg overflow-hidden max-h-[400px]">
			<div className="relative flex items-center justify-between">
				<div className="flex">
					<Link
						href={`/${latestPost?.slug}`}
						className="flex justify-center items-center overflow-hidden"
					>
						<Image
							src={latestPost?.thumbnail || '/placeholder.png'}
							alt="thumbnail"
							width={1920}
							height={900}
							className="object-cover"
						/>
					</Link>
				</div>

				<div className="absolute p-10 bg-myPrimaryBlue/50">
					<div className="flex">
						<Link href={`/${latestPost?.slug}`}>
							<h1 className="text-xl font-bold text-ellipsis overflow-hidden text-white">
								{latestPost?.title}
							</h1>
						</Link>
					</div>
					<p className="line-clamp-3 my-3">{latestPost?.description}</p>
					<Link href={`/${latestPost?.slug}`}>
						<Button className="bg-white text-myPrimaryBlue px-5 py-2 rounded-lg">
							Read More
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Featured;
