'use client';

import { ColumnDef } from '@tanstack/react-table';

import { Button } from '@/components/ui/button';
import { Post } from '@/types';
import { ArrowUpDown, MoreHorizontal } from 'lucide-react';
import {
	DropdownMenu,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { DropdownMenuContent } from '@radix-ui/react-dropdown-menu';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import NotificationDialog from './NotificationDialog';
import { deletePostBySlug } from '../../actions/deletePost';

export const PostsTableColumns: ColumnDef<Post>[] = [
	{
		accessorKey: 'id',
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Id
					<ArrowUpDown />
				</Button>
			);
		},
	},
	{ accessorKey: 'title', header: 'Tiêu đề' },
	{ accessorKey: 'description', header: 'Mô tả' },
	{ accessorKey: 'category', header: 'Danh mục' },
	{ accessorKey: 'createdBy', header: 'Tạo bởi' },
	{ accessorKey: 'createdAt', header: 'Thời gian tạo' },
	{ accessorKey: 'status', header: 'Trạng thái' },
	{
		accessorKey: 'actions',
		header: 'Chỉnh sửa và xóa',
		cell: ({ row }) => <ActionsCell row={row} />,
	},
];

const ActionsCell = ({ row }: { row: { original: Post } }) => {
	const [alert, setAlert] = useState(false);

	const post = row.original;

	const router = useRouter();

	const handleEditPost = (slug: string) => {
		router.push(`/dashboard/edit-post/${slug}`);
	};

	const handleDeletePost = async (slug: string) => {
		const result = await deletePostBySlug(slug);
		if (!result) return;
		setAlert(false);
		router.refresh();
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<Button variant="ghost" className="h-8 w-8 p-0">
					<span className="sr-only">Open menu</span>
					<MoreHorizontal className="h-4 w-4" />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				align="end"
				className="border rounded-sm p-3 bg-white z-50 "
			>
				<DropdownMenuItem
					className="cursor-pointer"
					onClick={() => {
						handleEditPost(post.slug);
					}}
				>
					Chỉnh sửa
				</DropdownMenuItem>
				<DropdownMenuItem
					className="cursor-pointer"
					onClick={() => {
						setAlert(true);
					}}
				>
					Xóa
				</DropdownMenuItem>
			</DropdownMenuContent>

			<NotificationDialog
				open={alert}
				title="Xóa bài viết"
				postTitle={post.title}
				description="Bạn có chắc chắn muốn xóa bài viết này không?"
				onCancel={() => setAlert(false)}
				onConfirm={() => {
					handleDeletePost(post.slug);
				}}
			/>
		</DropdownMenu>
	);
};
