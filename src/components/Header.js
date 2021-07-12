import { Link } from 'react-router-dom';
import { Spring } from 'react-spring/renderprops';

export default function Header() {
	return (
		<Spring delay={400} from={{ opacity: 0 }} to={{ opacity: 1 }}>
			{({ opacity }) => (
				<header
					style={{ opacity }}
					className='flex justify-around w-full py-5 px-3'
				>
					<div className='p-1 rounded bg-green-500'>
						<Link
							to='/'
							className='block p-2 text-2xl text-white bg-dark_mode-default'
						>
							KC
						</Link>
					</div>
					<div className='flex text-white'>
						<div>
							<Link
								to='/'
								className='p-3 hover:text-white border-b-2 border-gray-800 hover:border-blue-500'
							>
								HOME
							</Link>
						</div>
						<div>
							<Link
								to='/about'
								className='p-3 hover:text-white border-b-2 border-gray-800 hover:border-green-500'
							>
								ABOUT
							</Link>
						</div>
						
						<div>
							<Link
								to='/contact'
								className='p-3 hover:text-white border-b-2 border-gray-800 hover:border-red-500'
							>
								CONTACT
							</Link>
						</div>
					</div>
				</header>
			)}
		</Spring>
	);
}
