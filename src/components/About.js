import Header from './Header';
import Footer from './Footer';
import { Spring } from 'react-spring/renderprops';

export default function About() {
	return (
		<section className='h-screen flex flex-col items-center justify-between bg-dark_mode-default text-gray-500'>
			<Header />

			<Spring
				delay={1000}
				from={{ opacity: 0, transform: 'translate3d(0, -100px, 0)' }}
				to={{ opacity: 1, transform: 'translate3d(0, 0px, 0)' }}
			>
				{({ opacity, transform }) => (
					<article
						style={{ opacity, transform }}
						className='flex flex-col-reverse md:flex-row items-center justify-items-center '
					>
						<div className='mx-3 max-w-lg text-white text-lg'>
							<p className='my-2 p-2'>
								Hello I'm Kevin! My passion for learning drives me to keep
								improving my skills wherever I find myself. Clear communication
								and trust are things that I emphasize when working with others.
								Currently I am a Development Support Engineer at CloudBees! 
								I use my expertise with Jenkins to help others and to provide them with solutions.
							</p>

							<p className='my-2 p-2'>
								In my spare time I am enjoy going on runs, spending time with my family,
								or just having a nice cup of coffee!
							</p>
						</div>


						<img
							src={window.location.origin + '/images/profile.png'}
							alt="It's a me! Kevin!"
							className='max-w-xs rounded-full'
						/>
					</article>
				)}
			</Spring>

			<Footer />
		</section>
	);
}
