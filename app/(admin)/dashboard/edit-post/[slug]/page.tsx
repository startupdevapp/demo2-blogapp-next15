'use client';

import MdEditor from 'react-markdown-editor-lite';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '@/components/ui/input';

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { FormSchema, Post } from '@/types';
import { Textarea } from '@/components/ui/textarea';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import {
	AccountTagsItems,
	CategoryItems,
	FinanceTagsItems,
	ITTagsItems,
	StatusItems,
	TagsItems,
} from '@/contansts';
import Image from 'next/image';
import { CirclePlus } from 'lucide-react';
import MarkdownDisplay from '@/app/_components/MarkdownDisplay';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '@/configs/firebaseConfig';
import { use, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getPostsBySlug } from '@/app/(admin)/actions/getPosts';
import { updatePost } from '@/app/(admin)/actions/updatePost';
import ContentHeader from '@/app/(admin)/_components/ContentHeader';

type Params = Promise<{ slug: string }>;

const EditPostPage = (props: { params: Params }) => {
	const params = use(props.params);

	const router = useRouter();
	// const { user } = useUser();

	const [post, setPost] = useState<Post>();
	const [selectedFile, setSelectedFile] = useState<string>();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const getPost = async () => {
			if (!params) return;
			const result = await getPostsBySlug(params?.slug);
			if (!result) {
				router.push('/dashboard');
			} else {
				setPost(result as Post);
			}
		};
		getPost();
	}, [params, router]);

	const onFileSelected = async (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			// Upload image to firebase storage and download url
			const file = e.target.files[0];
			const fileName = Date.now() + '.png';
			const storageRef = ref(storage, 'demo1-stdev-blog/' + fileName);

			await uploadBytes(storageRef, file)
				.then((snapshot) => {
					console.log('Uploaded a blob or file!', snapshot);
				})
				.then(() => {
					getDownloadURL(storageRef).then(async (downloadUrl) => {
						setSelectedFile(downloadUrl);
					});
				});
		}
	};

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			title: '',
			slug: '',
			description: '',
			category: '',
			content: '',
			thumbnail: '',
			tags: '',
			status: '',
		},
	});

	useEffect(() => {
		if (post) {
			form.reset({
				title: post.title,
				slug: post.slug,
				description: post.description,
				category: post.category,
				content: post.content,
				thumbnail: post.thumbnail,
				tags: post.tags,
				status: post.status,
			});
		}
	}, [post, form]);

	const onSubmit = async (updatedInput: z.infer<typeof FormSchema>) => {
		setLoading(true);

		const thumbnail = selectedFile
			? selectedFile
			: post?.thumbnail || '/placeholder.png';

		const slug = params?.slug as string;

		const data = {
			...post,
			...updatedInput,
			thumbnail,
			slug,
			postId: post?.postId as string,
			createdBy: post?.createdBy as string,
			userName: post?.userName as string,
			userProfileImage: post?.userProfileImage as string,
		};

		await updatePost({ data });

		setLoading(false);
		router.push('/dashboard');
	};

	return (
		<div className="flex flex-col">
			<ContentHeader leftsideTitle="Chỉnh sửa" rightsideTitle="bài viết" />
			{/* Form */}
			<div className="mt-5 rounded-lg p-8">
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
						{/* Title */}
						<FormField
							control={form.control}
							name="title"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="text-lg">Tiêu đề</FormLabel>
									<FormControl className="text-lg p-5">
										<Input placeholder={post?.title} {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						{/* Slug */}
						<FormField
							control={form.control}
							name="slug"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="text-lg">Slug</FormLabel>
									<FormControl className="text-lg p-5">
										<Input disabled placeholder={post?.slug} {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						{/* Description */}
						<FormField
							control={form.control}
							name="description"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="text-lg">Mô tả</FormLabel>
									<FormControl className="text-lg p-5 min-h-40">
										<Textarea placeholder={post?.description} {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						{/* Category */}
						<FormField
							control={form.control}
							name="category"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="text-lg">Danh mục</FormLabel>
									<Select
										onValueChange={field.onChange}
										defaultValue={field.value}
									>
										<FormControl className="text-lg p-5">
											<SelectTrigger>
												<SelectValue
													placeholder={CategoryItems.filter(
														(item) => item.value === post?.category
													).map((item) => item.label)}
												/>
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											<SelectGroup>
												{CategoryItems.map((item) => (
													<SelectItem key={item.value} value={item.value}>
														{item.label}
													</SelectItem>
												))}
											</SelectGroup>
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>

						{/* Tags */}
						<FormField
							control={form.control}
							name="tags"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="text-lg">Chủ đề</FormLabel>
									<Select
										onValueChange={field.onChange}
										defaultValue={field.value}
									>
										<FormControl className="text-lg p-5">
											<SelectTrigger>
												<SelectValue
													placeholder={TagsItems.filter(
														(item) => item.value === post?.tags
													).map((item) => item.label)}
												/>
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											<SelectGroup>
												<SelectLabel>IT</SelectLabel>
												{ITTagsItems.map((item) => (
													<SelectItem key={item.value} value={item.value}>
														{item.label}
													</SelectItem>
												))}
											</SelectGroup>
											<SelectGroup>
												<SelectLabel>Kế toán</SelectLabel>
												{AccountTagsItems.map((item) => (
													<SelectItem key={item.value} value={item.value}>
														{item.label}
													</SelectItem>
												))}
											</SelectGroup>
											<SelectGroup>
												<SelectLabel>Tài chính</SelectLabel>
												{FinanceTagsItems.map((item) => (
													<SelectItem key={item.value} value={item.value}>
														{item.label}
													</SelectItem>
												))}
											</SelectGroup>
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>

						{/* Ảnh đại diện/Thumbnail */}

						<FormField
							control={form.control}
							name="thumbnail"
							render={({}) => (
								<FormItem>
									<FormLabel className="text-lg">Ảnh đại diện</FormLabel>
									<FormControl>
										<div className="flex flex-col">
											<label
												htmlFor="upload-image"
												className="flex flex-col hover:cursor-pointer"
											>
												<div className=" w-[300px] items-center justify-center">
													<Image
														src={
															selectedFile
																? selectedFile
																: post?.thumbnail
																? post?.thumbnail
																: '/placeholder.png'
														}
														alt="thumbnail"
														height={300}
														width={300}
														className="w-full object-cover rounded-lg"
													/>
												</div>
												<div className="flex mt-5">
													<CirclePlus className="mr-2 font-bold" />
													<h2 className="font-bold text-lg">
														{(selectedFile || post?.thumbnail) &&
															'Thay đổi ảnh đại diện'}
													</h2>
												</div>
											</label>
											<input
												type="file"
												id="upload-image"
												className="opacity-0"
												onChange={onFileSelected}
											/>
										</div>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						{/* Content */}
						<FormField
							control={form.control}
							name="content"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="text-lg">Nội dung bài viết</FormLabel>

									<FormControl className="text-lg p-5">
										<MdEditor
											value={field.value}
											onChange={({ text }) => field.onChange(text)}
											style={{ height: '500px', fontSize: '1em' }}
											renderHTML={(text) => (
												<MarkdownDisplay>{text}</MarkdownDisplay>
											)}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						{/* Status */}
						<FormField
							control={form.control}
							name="status"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="text-lg">Trạng thái bài viết</FormLabel>
									<Select
										onValueChange={field.onChange}
										defaultValue={field.value}
									>
										<FormControl className="text-lg p-5">
											<SelectTrigger>
												<SelectValue
													placeholder={StatusItems.filter(
														(item) => item.value === post?.status
													).map((item) => item.label)}
												/>
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											<SelectGroup>
												{StatusItems.map((item) => (
													<SelectItem key={item.value} value={item.value}>
														{item.label}
													</SelectItem>
												))}
											</SelectGroup>
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>

						<Button
							type="submit"
							className="text-lg p-6 text-white bg-myPrimaryBlue hover:bg-myPrimaryBlue/80"
							disabled={loading}
						>
							Cập nhật bài viết
						</Button>
					</form>
				</Form>
			</div>
		</div>
	);
};

export default EditPostPage;
