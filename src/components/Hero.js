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
			<Spring delay={500} from={{ opacity: 0 }} to={{ opacity: 1 }}>
				{({ opacity }) => (
					<div style={{ opacity }}>
						<animated.div style={props} className='m-2 p-1 rounded'>
							<h1 className='text-xl text-center text-white bg-dark_mode-default'>
								Kevin Chhan
							</h1>
						</animated.div>
					</div>
				)}
			</Spring>
		</section>
	);
}
