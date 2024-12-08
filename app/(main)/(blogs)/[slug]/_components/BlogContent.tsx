import MarkdownDisplay from '@/app/_components/MarkdownDisplay';
import { Post } from '@/types';

interface BlogContentProps {
	blog: Post;
}

const BlogContent = ({ blog }: BlogContentProps) => {
	return (
		<div className="mt-10">
			<MarkdownDisplay>{blog?.content}</MarkdownDisplay>
		</div>
	);
};

export default BlogContent;
