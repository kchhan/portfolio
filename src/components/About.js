import Header from './Header';
import Footer from './Footer';

export default function About() {
	return (
		<section className='h-screen flex flex-col items-center justify-between bg-sepia-default text-gray-500'>
			<Header />

			<div>Hello I'm Kevin!</div>

			<Footer />
		</section>
	);
}
