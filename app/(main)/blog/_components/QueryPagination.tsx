'use client';

import { usePathname, useSearchParams } from 'next/navigation';

import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from '@/components/ui/pagination';

interface QueryPaginationProps {
	totalPages: number;
}

const QueryPagination = ({ totalPages }: QueryPaginationProps) => {
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const currentPage = Number(searchParams?.get('page')) || 1;
	const prevPage = currentPage - 1;
	const nextPage = currentPage + 1;

	const createPageURL = (page: number) => {
		const params = new URLSearchParams(searchParams);
		params.set('page', page.toString());
		return `${pathname}?${params.toString()}`;
	};

	return (
		<Pagination>
			<PaginationContent>
				{prevPage >= 1 ? (
					<PaginationItem>
						<PaginationPrevious href={createPageURL(prevPage)} />
					</PaginationItem>
				) : null}

				{Array(totalPages)
					.fill('')
					.map((_, index) => (
						<PaginationItem key={index}>
							<PaginationLink href={createPageURL(index + 1)}>
								{index + 1}
							</PaginationLink>
						</PaginationItem>
					))}
				{nextPage <= totalPages ? (
					<PaginationItem>
						<PaginationNext href={createPageURL(nextPage)} />
					</PaginationItem>
				) : null}
			</PaginationContent>
		</Pagination>
	);
};

export default QueryPagination;
