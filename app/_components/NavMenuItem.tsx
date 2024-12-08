import {
	NavigationMenuItem,
	NavigationMenuLink,
	navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';

interface NavMenuItemProps {
	label: string;
	href: string;
}

const NavMenuItem = ({ label, href }: NavMenuItemProps) => {
	return (
		<NavigationMenuItem>
			<Link href={href} legacyBehavior passHref>
				<NavigationMenuLink className={navigationMenuTriggerStyle()}>
					{label}
				</NavigationMenuLink>
			</Link>
		</NavigationMenuItem>
	);
};

export default NavMenuItem;
