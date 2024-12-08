import Image from 'next/image';
import Link from 'next/link';

export default function AuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<section className="bg-white">
			<div className="lg:grid lg:min-h-screen lg:grid-cols-12">
				<section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white to-primary">
					<Image
						src="/logo.svg"
						alt="logo"
						height={400}
						width={400}
						className="absolute inset-0 h-full w-full object-cover opacity-80"
					/>
					<div className="hidden lg:relative lg:block lg:p-12">
						<Link href="/">
							<span className="sr-only">Home</span>
							<Image
								src="/logo.svg"
								alt="logo"
								height={80}
								width={80}
								className="rounded-full bg-white p-2"
							/>
						</Link>
						<div className="bg-myPrimaryBlue p-5 mt-3">
							<h2 className="mt-6 text-2xl font-bold text-white">
								Welcome to DEMO2 - STDEV BLOG APP
							</h2>
							<p className="mt-4 leading-relaxed text-white">
								Nơi chia sẻ những kiến thức về kế toán, tài chính và đặc biệt là
								lập trình bằng Tiếng Việt. Ứng dụng AI vào lĩnh vực kế toán và
								tài chính thông qua các ứng dụng tích hợp AI được viết bằng các
								ngôn ngữ lập trình hiện đại, tạo tiền đề để các bạn tiếp tục học
								tập nâng cao và phát triển hơn nữa trong sự nghiệp
							</p>
						</div>
					</div>
				</section>
				<main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
					<div className="max-w-xl lg:max-w-3xl">
						<div className="relative -mt-16 block lg:hidden mb-8">
							<Link
								href="/"
								className="inline-flex size-16 items-center justify-center rounded-full bg-white text-myPrimaryBlue sm:size-20"
							>
								<span className="sr-only">Home</span>
								<Image
									src="/logo.svg"
									alt="logo"
									height={60}
									width={60}
									className="rounded-full bg-white p-2"
								/>
							</Link>
							<h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
								Welcome to DEMO2 - STDEV BLOG APP
							</h1>
							<p className="mt-4 leading-relaxed text-gray-500">
								Nơi chia sẻ những kiến thức về kế toán, tài chính và đặc biệt là
								lập trình bằng Tiếng Việt. Ứng dụng AI vào lĩnh vực kế toán và
								tài chính thông qua các ứng dụng tích hợp AI được viết bằng các
								ngôn ngữ lập trình hiện đại, tạo tiền đề để các bạn tiếp tục học
								tập nâng cao và phát triển hơn nữa trong sự nghiệp
							</p>
						</div>
						{children}
					</div>
				</main>
			</div>
		</section>
	);
}
