import CustomIcon from '@/components/CustomIcon';
import { Button } from '@/components/ui/button';
import { TagsItems } from '@/contansts';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

interface TagListProps {
	cat: string;
}

const TagList = ({ cat }: TagListProps) => {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const router = useRouter();

	const currentTag = searchParams.get('tag') || '';

	const createTagURL = (tag: string) => {
		const params = new URLSearchParams(searchParams);
		params.set('tag', tag.toString());
		router.push(`${pathname}?${params.toString()}`);
	};

	return (
		<div className="flex w-full flex-col">
			<h1 className="font-bold text-xl">Chủ đề</h1>
			<div className="flex flex-wrap items-center gap-3 mt-5">
				{TagsItems?.map((item, index) => (
					<Button
						onClick={() => createTagURL(item.value)}
						disabled={item.parentValue !== cat}
						key={index}
						className={`flex flex-row gap-1 items-center p-3 rounded-lg max-w-[160px] text-white text-sm ${
							cat === ''
								? item.bgColor
								: cat === item.parentValue
								? item.bgColor
								: 'bg-slate-400'
						} ${
							item.value !== currentTag && currentTag !== '' && 'opacity-60'
						}`}
					>
						<CustomIcon Icon={item.icon} width={20} height={20} />
						{item.label}
					</Button>
				))}
			</div>
		</div>
	);
};

export default TagList;
