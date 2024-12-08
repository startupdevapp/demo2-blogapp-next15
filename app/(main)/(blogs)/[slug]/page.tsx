'use client';

import { getPostsBySlug } from '@/app/(admin)/actions/getPosts';
import { Post } from '@/types';
import { useRouter } from 'next/navigation';
import { use, useEffect, useState } from 'react';
import BlogInfo from './_components/BlogInfo';
import BlogContent from './_components/BlogContent';
import CustomLoader from '@/components/CustomLoader';

type Params = Promise<{ slug: string }>;

const BlogDetailPage = (props: { params: Params }) => {
	const params = use(props.params);

	const router = useRouter();

	const slug = params?.slug;

	const [blog, setBlog] = useState<Post>({} as Post);

	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		const getPost = async () => {
			if (!slug) return;
			const result = await getPostsBySlug(slug);
			if (!result) {
				router.push('/');
			} else {
				setBlog(result as Post);
			}
		};
		getPost();
		setLoading(false);
	}, [slug, router]);

	return (
		<div>
			{/* Blog Detail Page */}
			<BlogInfo blog={blog} />
			<BlogContent blog={blog} />
			<CustomLoader isLoading={loading} title="Vui lòng chờ" />
		</div>
	);
};

export default BlogDetailPage;
