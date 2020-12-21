import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<header className='flex justify-around w-full py-5 px-3'>
			<div className='py-2 border border-green-400 rounded'>
				<Link to='/' className='py-2 px-3 text-2xl text-white bg-dark_mode-default'>
					KC
				</Link>
			</div>
			<div className='flex'>
				<div>
					<Link
						to='/about'
						className='p-3 hover:text-white border-b-2 border-gray-800 hover:border-green-500'
					>
						About
					</Link>
				</div>
				<div>
					<Link
						to='/projects'
						className='p-3 hover:text-white border-b-2 border-gray-800 hover:border-blue-500'
					>
						Projects
					</Link>
				</div>
				<div>
					<Link
						to='/contact'
						className='p-3 hover:text-white border-b-2 border-gray-800 hover:border-red-500'
					>
						Contact
					</Link>
				</div>
			</div>
		</header>
	);
}
