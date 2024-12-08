import Link from 'next/link';
import Image from 'next/image';
import { CategoryItems } from '@/contansts';

const Footer = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-14">
			<div className="grid-cols-1 gap-8 items-center justify-between">
				<div className="flex items-center gap-5">
					<Image src="./logo.svg" alt="logo" width={60} height={60} />
					<h1 className="font-bold text-2xl">
						<strong className="text-myPrimaryRed">STDEV</strong>
						<strong className="text-myPrimaryGreen">BLOG</strong>
					</h1>
				</div>
				<p className="mt-5">
					Nơi chia sẻ những kiến thức về kế toán, tài chính và đặc biệt là lập
					trình bằng Tiếng Việt. Ứng dụng AI vào lĩnh vực kế toán và tài chính
					thông qua các ứng dụng tích hợp AI được viết bằng các ngôn ngữ lập
					trình hiện đại. Giúp bạn có những kiến thức nền tảng ban đầu, tạo tiền
					đề để bạn tiếp tục học tập nâng cao và phát triển hơn nữa trong sự
					nghiệp
				</p>
				<div className="flex gap-5 mt-5">
					<Image src="/facebook.png" alt="facebook" width={18} height={18} />
					<Image src="/instagram.png" alt="instagram" width={18} height={18} />
					<Image src="/tiktok.png" alt="tiktok" width={18} height={18} />
					<Image src="/youtube.png" alt="youtube" width={18} height={18} />
				</div>
			</div>
			<div className="flex justify-center gap-10 md:justify-end">
				<div className="flex flex-col gap-3">
					<span className="font-bold">Links</span>
					<Link href="/">Home</Link>
					<Link href="/blog">Blog</Link>
					<Link href="/about">About</Link>
					<Link href="/contact">Contact</Link>
				</div>
				<div className="flex flex-col gap-3">
					<span className="font-bold">Danh mục</span>
					{CategoryItems?.map((item, index) => (
						<Link href={item.href} key={index}>
							{item.label}
						</Link>
					))}
				</div>
				<div className="flex flex-col gap-3">
					<span className="font-bold">Tài khoản</span>
					<Link href="/">Facebook</Link>
					<Link href="/">Instagram</Link>
					<Link href="/">Tiktok</Link>
					<Link href="https://www.youtube.com/">Youtube</Link>
				</div>
			</div>
		</div>
	);
};

export default Footer;
