import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<header className='flex justify-around w-full p-3'>
			<div>
				<Link to='/'>KC</Link>
			</div>
			<div className='flex'>
				<div>
					<Link to='/' className='p-3'>
						Home
					</Link>
				</div>
				<div>
					<Link to='/about' className='p-3'>
						About
					</Link>
				</div>
				<div>
					<Link to='/projects' className='p-3'>
						Projects
					</Link>
				</div>
				<div>
					<Link to='/contact' className='p-3'>
						Contact
					</Link>
				</div>
			</div>
		</header>
	);
}
