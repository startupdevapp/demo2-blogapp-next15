'use client';

import { Button } from '@/components/ui/button';
import {
	Sheet,
	SheetContent,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import Link from 'next/link';
import Logo from './Logo';
import { Menu } from 'lucide-react';
import {
	NavigationMenu,
	NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { NavMenuItems } from '@/contansts';
import NavMenuItem from './NavMenuItem';

const SHEET_SIDES = ['left'] as const;

type MobileNavbar = (typeof SHEET_SIDES)[number];

const MobileNavbar = () => {
	return (
		<div className="grid grid-cols-2 gap-2">
			{SHEET_SIDES.map((side) => (
				<Sheet key={side}>
					<SheetTrigger asChild>
						<Button variant="outline">
							<Menu />
						</Button>
					</SheetTrigger>
					<SheetContent side={side} className="max-w-[200px]">
						<SheetTitle>
							<Link href="/">
								<Logo />
							</Link>
						</SheetTitle>
						<hr className="my-3" />
						<div className="h-full fixed">
							<NavigationMenu>
								<NavigationMenuList className="flex flex-col justify-start items-center">
									{NavMenuItems.map((item) => (
										<NavMenuItem
											key={item.value}
											href={item.href}
											label={item.label}
										/>
									))}
								</NavigationMenuList>
							</NavigationMenu>
						</div>
					</SheetContent>
				</Sheet>
			))}
		</div>
	);
};

export default MobileNavbar;
