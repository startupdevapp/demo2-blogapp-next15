import AdminProfile from '@/app/_components/AdminProfile';
import React from 'react';
import ContentHeader from '../../_components/ContentHeader';

const AdminProfilePage = () => {
	return (
		<div className="flex flex-col">
			<ContentHeader leftsideTitle="Hồ sơ" rightsideTitle="Admin" />
			<div className="mt-20">
				<AdminProfile />
			</div>
		</div>
	);
};

export default AdminProfilePage;
