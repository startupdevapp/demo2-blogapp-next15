import { Post } from '@/types';
import React from 'react';
import Popular from './Popular';
import TagList from '../../_components/TagList';
import { useRouter } from 'next/navigation';

interface RightSidebarProps {
	posts: Post[];
}

const RightSidebar = ({ posts }: RightSidebarProps) => {
	const router = useRouter();

	const handleOnClick = (cat: string) => {
		router.push(`/category/${cat}`);
	};

	return (
		<div className="mt-10">
			<h1 className="font-bold text-xl">Bài viết nổi bật</h1>
			<div>
				<Popular
					posts={posts}
					cat="accounting"
					color="bg-myPrimaryBlue"
					onClick={() => handleOnClick('accounting')}
				/>
				<Popular
					posts={posts}
					cat="finance"
					color="bg-myPrimaryGreen"
					onClick={() => handleOnClick('finance')}
				/>
				<Popular
					posts={posts}
					cat="it"
					color="bg-myPrimaryYellow"
					onClick={() => handleOnClick('it')}
				/>
			</div>
			<div className="mt-10">
				<TagList cat="" />
			</div>
		</div>
	);
};

export default RightSidebar;
