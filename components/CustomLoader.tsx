import React from 'react';
import {
	AlertDialog,
	AlertDialogContent,
	AlertDialogHeader,
	AlertDialogTitle,
} from './ui/alert-dialog';
import Image from 'next/image';

interface CustomLoaderProps {
	isLoading: boolean;
	title: string;
}

const CustomLoader = ({ isLoading, title }: CustomLoaderProps) => {
	return (
		<AlertDialog open={isLoading}>
			<AlertDialogContent className="flex flex-col items-center justify-center">
				<AlertDialogTitle className="text-center text-2xl font-bold">
					Loading...
				</AlertDialogTitle>
				<AlertDialogHeader>
					<div className="flex flex-col py-10 item-center">
						<Image src={'/loader.gif'} alt="loading" width={100} height={100} />
						<h2>{title}</h2>
					</div>
				</AlertDialogHeader>
			</AlertDialogContent>
		</AlertDialog>
	);
};

export default CustomLoader;
