'use client';

import React, { useEffect, useState } from 'react';
import ContentHeader from '../../_components/ContentHeader';
import { PostsTable } from '../_components/PostsTable';
import { PostsTableColumns } from '../_components/PostsTableColumns';
import { Post } from '@/types';
import { getPostsByStatus } from '../../actions/getPosts';

const PublishedPosts = () => {
	const [postList, setPostList] = useState<Post[]>([]);

	useEffect(() => {
		const getPublishedPosts = async () => {
			const result = await getPostsByStatus('publish');
			if (result) {
				setPostList(result as Post[]);
			}
		};
		getPublishedPosts();
	}, []);

	return (
		<div className="flex flex-col">
			<ContentHeader leftsideTitle="Bài viết" rightsideTitle="xuất bản" />
			<div className="mt-10">
				<PostsTable columns={PostsTableColumns} data={postList} />
			</div>
		</div>
	);
};

export default PublishedPosts;
