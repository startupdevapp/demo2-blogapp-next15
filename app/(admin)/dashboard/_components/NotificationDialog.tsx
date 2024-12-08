import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from '@/components/ui/alert-dialog';

interface NotificationDialogProps {
	open: boolean;
	title: string;
	postTitle: string;
	description: string;
	onConfirm: () => void;
	onCancel: () => void;
}

const NotificationDialog = ({
	open,
	title,
	postTitle,
	description,
	onConfirm,
	onCancel,
}: NotificationDialogProps) => {
	return (
		<AlertDialog open={open}>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>{title}</AlertDialogTitle>
					<AlertDialogTitle>{postTitle}</AlertDialogTitle>
					<AlertDialogDescription>{description}</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel onClick={onCancel}>Hủy</AlertDialogCancel>
					<AlertDialogAction onClick={onConfirm}>Tiếp tục</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
};

export default NotificationDialog;
