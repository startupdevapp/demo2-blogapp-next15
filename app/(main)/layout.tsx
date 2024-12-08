import Footer from '../_components/Footer';
import Header from '../_components/Header';

export default function MainLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div>
			<Header />
			<div className="mt-10 px-10 md:px-28 lg:px-44">{children}</div>
			<div className=" px-10 md:px-28 lg:px-44 my-20">
				<Footer />
			</div>
		</div>
	);
}
