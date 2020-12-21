import { Link } from 'react-router-dom';

export default function Hero() {
	return (
		<section className='h-screen flex flex-col items-center justify-between bg-dark_mode-default text-gray-500'>
			<div></div>
			<div>
				<div>Kevin Chhan</div>
				<div>Fullstack Web Developer</div>
			</div>
			<div className="mb-5">
				<Link to='/about' className='p-3'>
					About
				</Link>
				<Link to='/projects' className='p-3'>
					Projects
				</Link>
				<Link to='/contact' className='p-3'>
					Contact
				</Link>
			</div>
		</section>
	);
}
