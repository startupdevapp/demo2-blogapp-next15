'use client';

import { motion } from 'framer-motion';

const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };
const itemVariants = { hidden: { opacity: 0, y: 10 }, visible };

const HeroIntro = () => {
	return (
		<motion.div>
			<motion.article
				initial="hidden"
				animate="visible"
				exit={{ opacity: 0, transition: { duration: 1 } }}
				variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
			>
				<motion.h2
					variants={{ hidden: { opacity: 0, y: -20 }, visible }}
					className="text-[60px] text-myPrimaryBlue font-extrabold leading-[80px]"
				>
					Bắt đầu sự nghiệp học tập của bạn trong kỷ nguyên {''}
					<strong className="text-myPrimaryRed text-[80px]">A</strong>
					<strong className="text-myPrimaryYellow text-[80px]">I</strong> {''}
					ngay hôm nay
				</motion.h2>
				<motion.p
					variants={itemVariants}
					className="text-primary text-xl mt-10 leading-8 font-light"
				>
					<strong className="text-myPrimaryRed text-2xl font-bold">
						STDEV
					</strong>
					<strong className="text-myPrimaryGreen text-2xl font-bold">
						BLOG
					</strong>{' '}
					- Nơi chia sẻ những kiến thức về kế toán, tài chính và đặc biệt là lập
					trình bằng Tiếng Việt. Ứng dụng AI vào lĩnh vực kế toán và tài chính
					thông qua các ứng dụng tích hợp AI được viết bằng các ngôn ngữ lập
					trình hiện đại, tạo tiền đề để các bạn tiếp tục học tập nâng cao và
					phát triển hơn nữa trong sự nghiệp
				</motion.p>
			</motion.article>
		</motion.div>
	);
};

export default HeroIntro;
