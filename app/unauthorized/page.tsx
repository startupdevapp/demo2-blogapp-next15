import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const UnauthorizedPage = () => {
	return (
		<div className="flex flex-col items-center justify-center gap-3 h-full mt-20">
			<h1 className="text-2xl font-bold text-myPrimaryRed">
				Bạn không có quyền truy cập vào trang này
			</h1>
			<h2 className="font-semibold">Vui lòng quay lại trang chủ</h2>
			<Link href="/">
				<Button className="bg-myPrimaryBlue">Trang chủ</Button>
			</Link>
		</div>
	);
};

export default UnauthorizedPage;
