import Header from './Header';
import Footer from './Footer';

export default function Contact() {
	return (
		<section className='h-screen flex flex-col items-center justify-between bg-dark_mode-default text-gray-500'>
			<Header />

			<div>
				<h1 className='text-xl'>I'm Available! Let's Chat!</h1>
				<h2 className='p-2 text-xl border text-center text-white'>
					<a href='mailto:kvnchhan@gmail.com'
					className="p-2">kvnchhan@gmail.com</a>
				</h2>
			</div>

			<Footer />
		</section>
	);
}
