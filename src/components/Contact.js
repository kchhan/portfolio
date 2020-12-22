import Header from './Header';
import Footer from './Footer';
import { Spring } from 'react-spring/renderprops';

export default function Contact() {
	return (
		<section className='h-screen flex flex-col items-center justify-between bg-dark_mode-default text-gray-500'>
			<Header />

			<Spring
				delay={1000}
				from={{ opacity: 0, transform: 'translate3d(0, -100px, 0)' }}
				to={{ opacity: 1, transform: 'translate3d(0, 0px, 0)' }}
			>
				{({opacity, transform}) => (
					<div style={{ opacity, transform }}>
						<h1 className='text-xl'>I'm Available! Let's Chat!</h1>
						<h2 className='p-2 text-xl border text-center text-white'>
							<a href='mailto:kvnchhan@gmail.com' className='p-2'>
								kvnchhan@gmail.com
							</a>
						</h2>
					</div>
				)}
			</Spring>
			
			<Footer />
		</section>
	);
}
