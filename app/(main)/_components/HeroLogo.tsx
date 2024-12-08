'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const HeroLogo = () => {
	return (
		<div className="flex items-center justify-center lg:justify-end">
			<motion.div
				whileHover={{ scale: [null, 1.5, 1.4] }}
				transition={{ duration: 1 }}
			>
				<Image src="/logo.svg" alt="logo" height={500} width={500} />
			</motion.div>
		</div>
	);
};

export default HeroLogo;
