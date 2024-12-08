'use client';

import React, { useState } from 'react';
import Logo from './Logo';
import NavbarMenu from './NavbarMenu';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ModeToggle from '@/components/ModeToggle';
import { Maximize, Minimize } from 'lucide-react';
import MobileNavbar from './MobileNavbar';
import { UserButton, useUser } from '@clerk/nextjs';

const Header = () => {
	const [isFullScreen, setIsFullScreen] = useState(false);

	const { isSignedIn } = useUser();

	const toggleFullScreen = () => {
		if (!document.fullscreenElement) {
			document.documentElement.requestFullscreen().then(() => {
				setIsFullScreen(true);
			});
		} else {
			if (document.exitFullscreen) {
				document.exitFullscreen().then(() => {
					setIsFullScreen(false);
				});
			}
		}
	};

	return (
		<section className="flex items-center justify-between border-b px-20 py-3 shadow-sm">
			<Link href="/" className="hidden lg:block">
				<Logo />
			</Link>
			<div className="flex lg:hidden">
				<MobileNavbar />
			</div>

			<div className="flex items-center justify-between gap-5">
				<div className="mr-20 hidden lg:block">
					<NavbarMenu />
				</div>

				{isSignedIn ? (
					<div className="flex items-center rounded-full gap-5">
						<Link href={'/dashboard'}>
							<Button className="bg-myPrimaryBlue hover:bg-myPrimaryBlue/80 text-white">
								Dashboard
							</Button>
						</Link>
						<UserButton />
					</div>
				) : (
					<Link href={'/sign-in'}>
						<Button className="bg-myPrimaryBlue hover:bg-myPrimaryBlue/80 text-white">
							Sign In
						</Button>
					</Link>
				)}

				<div>
					<ModeToggle />
				</div>
				<div onClick={toggleFullScreen} className="cursor-pointer">
					{isFullScreen ? <Minimize /> : <Maximize />}
				</div>
			</div>
		</section>
	);
};

export default Header;
