import AdminProfile from '../_components/AdminProfile';
import BlogSection from './_components/BlogSection';
import Hero from './_components/Hero';

export default function Home() {
	return (
		<div className="flex flex-col">
			<Hero />
			<hr className="border-2 w-[30%] my-20 ml-[35%]" />
			<BlogSection />
			<hr className="border-2 w-[30%] my-20 ml-[35%]" />
			<AdminProfile />
		</div>
	);
}
