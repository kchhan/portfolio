import { Link } from 'react-router-dom';

export default function Hero() {
	return (
		<section className='h-screen flex flex-col items-center justify-between bg-dark_mode-default text-gray-500'>
			<div></div>
			<div>
				<div className='m-2 p-1 bg-green-400 rounded'>
					<h1 className='p-4 text-4xl text-center text-white bg-dark_mode-default'>
						Kevin Chhan
					</h1>
				</div>
				<h2 className='text-xl text-center'>Fullstack Web Developer</h2>
			</div>

			<div className='mb-5'>
				<Link
					to='/about'
					className='m-2 py-3 hover:text-white border-t-2 border-gray-800 hover:border-green-500'
				>
					About
				</Link>
				<Link
					to='/projects'
					className='m-2 py-3 hover:text-white border-t-2 border-gray-800 hover:border-blue-500'
				>
					Projects
				</Link>
				<Link
					to='/contact'
					className='m-2 py-3 hover:text-white border-t-2 border-gray-800 hover:border-red-500'
				>
					Contact
				</Link>
			</div>
		</section>
	);
}
