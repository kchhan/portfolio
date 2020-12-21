import Header from './Header';
import Footer from './Footer';

export default function About() {
	return (
		<section className='h-screen flex flex-col items-center justify-between bg-dark_mode-default text-gray-500'>
			<Header />

			<article className='flex flex-col-reverse md:flex-row items-center justify-items-center '>
				<div className='mx-3 max-w-lg'>
					<p className='my-2 p-2'>
						Hello I'm Kevin! I am passionate about learning and I always want to
						keep improving my skills. If only there was more time! Clear
						communication and trust are things that I emphasize when working
						with others. I am seeking to shift into the web development
						industry.
					</p>

					<p className='my-2 p-2'>
						When I am not programming I usually am tinkering with some tech,
						playing some video games, or drinking some nice hot tea!
					</p>
				</div>

				<img
					src={window.location.origin + '/images/profile.png'}
					className='max-w-xs rounded-full'
				/>
			</article>

			<Footer />
		</section>
	);
}
