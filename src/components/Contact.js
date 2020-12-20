import Header from './Header';
import Footer from './Footer';

export default function Contact() {
	return (
		<section className='h-screen flex flex-col items-center justify-between bg-sepia-default text-gray-500'>
			<Header />

			<div>
				<h1>Let's Chat!</h1>
				<h2>kvnchhan@gmail.com</h2>
			</div>

			<Footer />
		</section>
	);
}
