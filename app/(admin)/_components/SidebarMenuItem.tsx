import { LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface SidebarMenuItemProps {
	label: string;
	link: string;
	Icon: LucideIcon;
	pathname?: string;
}

const SidebarMenuItem = ({
	label,
	link,
	Icon,
	pathname,
}: SidebarMenuItemProps) => {
	return (
		<Link href={link}>
			<div
				className={`flex items-center gap-2 p-3 hover:bg-gray-100 hover:text-black rounded-lg mb-3 min-w-[200px] ${
					link === pathname
						? 'bg-myPrimaryBlue text-white hover:text-white hover:bg-myPrimaryBlue/80'
						: ''
				}`}
			>
				<Icon />
				<h2>{label}</h2>
			</div>
		</Link>
	);
};

export default SidebarMenuItem;
