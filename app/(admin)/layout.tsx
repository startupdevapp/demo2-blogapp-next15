import Header from './_components/Header';
import Sidebar from './_components/Sidebar';

export default function AdminLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div>
			<div className="sticky top-0 w-full z-50">
				<Header />
			</div>
			<div className="hidden lg:block lg:w-64">
				<Sidebar />
			</div>
			<div className="md:ml-64 p-10">{children}</div>
		</div>
	);
}
