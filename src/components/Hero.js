import { Link } from 'react-router-dom';
import { Spring } from 'react-spring/renderprops';
import { useSpring, animated } from 'react-spring';

export default function Hero() {
	const props = useSpring({
		from: {
			background: 'lightgreen',
		},
		to: async (next) => {
			while (1) {
				await next({ background: 'lightblue' });
				await next({ background: 'lightgreen' });
				await next({ background: 'lightgoldenrodyellow' });
				await next({ background: 'lightpink' });
				await next({ background: 'lightsalmon' });
				await next({ background: 'lightcoral' });
				await next({ background: 'lightseagreen' });
				await next({ background: 'lightskyblue' });
			}
		},
	});

	return (
		<section className='h-screen flex flex-col items-center justify-between bg-dark_mode-default text-gray-500'>
			<div></div>

			<Spring delay={500} from={{ opacity: 0 }} to={{ opacity: 1 }}>
				{({ opacity }) => (
					<div style={{ opacity }}>
						<animated.div style={props} className='m-2 p-1 rounded'>
							<h1 className='p-4 text-4xl text-center text-white bg-dark_mode-default'>
								Kevin Chhan
							</h1>
						</animated.div>
						<h2 className='text-xl text-center'>Fullstack Web Developer</h2>
					</div>
				)}
			</Spring>

			<Spring
				delay={1000}
				from={{ opacity: 0, transform: 'translate3d(0, -100px, 0)' }}
				to={{ opacity: 1, transform: 'translate3d(0, 0px, 0)' }}
			>
				{({ opacity, transform }) => (
					<div style={{ opacity, transform }} className='mb-5'>
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
				)}
			</Spring>
		</section>
	);
}
