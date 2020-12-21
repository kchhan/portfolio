import Header from './Header';
import Footer from './Footer';

export default function Contact() {
	return (
		<section className='h-screen flex flex-col items-center justify-between bg-dark_mode-default text-gray-500'>
			<Header />

			<div>
				<h1>I'm Available! Let's Chat!</h1>
				<h2>kvnchhan@gmail.com</h2>
			</div>

			<Footer />
		</section>
	);
}
