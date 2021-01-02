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
						<div className='mx-3 max-w-lg'>
							<p className='my-2 p-2'>
								Hello I'm Kevin, a fullstack web developer! My passion for learning drives me to keep
								improving my skills wherever I find myself. I hope to apply my knowledge to create beautiful code. Clear communication
								and trust are things that I emphasize when working with others.
								I am seeking to shift into the web development industry.
							</p>

							<p className='my-2 p-2'>
								When not programming I am usually found tinkering with some
								tech, playing some video games, or drinking some nice hot tea!
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
