import {
	NavigationMenu,
	NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { NavMenuItems } from '@/contansts';
import NavMenuItem from './NavMenuItem';

const NavbarMenu = () => {
	return (
		<NavigationMenu>
			<NavigationMenuList>
				{NavMenuItems.map((item) => (
					<NavMenuItem key={item.value} href={item.href} label={item.label} />
				))}
			</NavigationMenuList>
		</NavigationMenu>
	);
};

export default NavbarMenu;
