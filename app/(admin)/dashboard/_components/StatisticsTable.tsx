import { Post } from '@/types';

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { CategoryItems } from '@/contansts';

interface StatisticsTableProps {
	cats: string[];
	posts: Post[];
}

const StatisticsTable = ({ cats, posts }: StatisticsTableProps) => {
	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead className="w-[100px]">Danh mục </TableHead>
					<TableHead className="text-right">Số lượng bài viết</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{cats.map((cat, index) => (
					<TableRow key={index}>
						<TableCell className="font-medium">
							{CategoryItems.filter((item) => item.value === cat)
								.map((item) => item.label)
								.join('')}
						</TableCell>
						<TableCell className="text-right">
							{posts.filter((post) => post.category === cat).length}
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
};

export default StatisticsTable;
