'use client';

import Logo from '@/app/_components/Logo';
import ModeToggle from '@/components/ModeToggle';
import { UserButton } from '@clerk/nextjs';
import { Maximize, Minimize } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import MobileSidebar from './MobileSidebar';

const Header = () => {
	const [isFullScreen, setIsFullScreen] = useState(false);

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
				<MobileSidebar />
			</div>

			<div className="flex items-center justify-between gap-5">
				<UserButton />
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
