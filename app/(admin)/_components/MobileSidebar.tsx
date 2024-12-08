'use client';

import { Button } from '@/components/ui/button';
import {
	Sheet,
	SheetContent,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import {
	NavigationMenu,
	NavigationMenuList,
} from '@/components/ui/navigation-menu';
import Logo from '@/app/_components/Logo';
import SidebarMenuItem from './SidebarMenuItem';
import { SidebarMenuItems } from '@/contansts';
import { usePathname } from 'next/navigation';

const SHEET_SIDES = ['left'] as const;

type MobileSidebar = (typeof SHEET_SIDES)[number];

const MobileSidebar = () => {
	const pathname = usePathname();

	return (
		<div className="grid grid-cols-2 gap-2">
			{SHEET_SIDES.map((side) => (
				<Sheet key={side}>
					<SheetTrigger asChild>
						<Button variant="outline">
							<Menu />
						</Button>
					</SheetTrigger>
					<SheetContent side={side} className="w-80">
						{/* <SheetHeader>
							<div className="flex items-center">
								<Link href="/">
									<Logo />
								</Link>
								<h1 className="font-bold text-2xl text-myPrimaryRed ml-3">
									ADMIN
								</h1>
							</div>
						</SheetHeader> */}
						<SheetTitle>
							<div className="flex items-center">
								<Link href="/">
									<Logo />
								</Link>
								<h1 className="font-bold text-2xl text-myPrimaryRed ml-3">
									ADMIN
								</h1>
							</div>
						</SheetTitle>
						<hr className="my-3" />
						<div className="h-full fixed">
							<NavigationMenu>
								<NavigationMenuList className="flex flex-col justify-start items-center">
									{SidebarMenuItems.map((item, index) => (
										<SidebarMenuItem
											key={index}
											link={item.link}
											label={item.label}
											Icon={item.icon}
											pathname={pathname}
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

export default MobileSidebar;
