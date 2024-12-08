import { z } from 'zod';

export const FormSchema = z.object({
	title: z.string().min(1, {
		message: 'Tiêu đề bài viết phải có ít nhất 1 ký tự',
	}),
	slug: z.string().min(1, {
		message: 'Slug phải có ít nhất 1 ký tự',
	}),
	description: z.string().min(1, {
		message: 'Mô tả bài viết phải có ít nhất 1 ký tự',
	}),
	category: z.string().min(1, {
		message: 'Danh mục bài viết phải được chọn',
	}),
	content: z.string().min(1, {
		message: 'Nội dung bài viết phải có ít nhất 1 ký tự',
	}),
	thumbnail: z.string(),
	tags: z.string().min(1, {
		message: 'Tag bài viết phải được chọn',
	}),
	status: z.string().min(1, {
		message: 'Trạng thái bài viết phải được chọn',
	}),
});

export type PostProps = {
	postId: string;
	title: string;
	slug: string;
	description: string;
	category: string;
	content: string;
	thumbnail: string;
	tags: string;
	status: string;
	createdBy: string | undefined;
	userName: string | null;
	userProfileImage: string;
};

export type Post = {
	id: number;
	postId: string;
	title: string;
	slug: string;
	description: string;
	category: string;
	tags: string;
	thumbnail: string;
	content: string;
	status: string;
	createdAt: Date;
	updatedAt: Date;
	createdBy: string;
	userName: string;
	userProfileImage: string;
};
