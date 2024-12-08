import HeroIntro from './HeroIntro';
import HeroLogo from './HeroLogo';

const Hero = () => {
	return (
		<section className="mt-10">
			<div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between">
				<HeroIntro />
				<HeroLogo />
			</div>
		</section>
	);
};

export default Hero;
