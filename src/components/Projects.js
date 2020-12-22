import Header from './Header';
import Footer from './Footer';
import data from '../projects.json';
import { Spring } from 'react-spring/renderprops';

export default function Projects() {
	return (
		<section className='flex flex-col items-center justify-between min-h-screen bg-dark_mode-default text-gray-500'>
			<Header />

			<Spring
				delay={1000}
				from={{ opacity: 0, transform: 'translate3d(0,-100px, 0)' }}
				to={{ opacity: 1, transform: 'translate3d(0, 0px, 0)' }}
			>
				{({ opacity, transform }) => (
					<div style={{ opacity, transform }}>
						<div>
							{data.projects.map((project) => {
								return (
									<article
										key={data.projects.indexOf(project)}
										className='flex flex-col md:flex-row mx-auto my-10  max-w-4xl border border-gray-400 bg-dark_mode-default'
									>
										<img
											src={window.location.origin + project.image}
											alt='Project'
											className='w-full sm:max-w-md'
										/>
										<div className='p-2 sm:max-w-md '>
											<h2 className='m-1 text-center text-xl font-bold text-blue-500'>
												{project.title}
											</h2>
											<div>
												{project.tags.map((tag) => {
													return (
														<span
															key={project.tags.indexOf(tag)}
															className='mx-1 px-1'
														>
															<i className={tag.icon}></i>
															&nbsp;{tag.name}
														</span>
													);
												})}
											</div>
											<p className='text-gray-400'>{project.description}</p>
											<div className='text-center my-1'>
												<a
													href={project.github}
													target='_blank'
													rel='noreferrer'
													className='inline-block mx-2 py-1 px-2 rounded bg-blue-700 text-gray-400 hover:text-white'
												>
													View Code
												</a>
												<a
													href={project.url}
													target='_blank'
													rel='noreferrer'
													className='inline-block mx-2 py-1 px-2 rounded bg-green-700 text-gray-400 hover:text-white'
												>
													Live Demo
												</a>
											</div>
										</div>
									</article>
								);
							})}
						</div>

						<div>
							<a
								href='https://github.com/kchhan?tab=repositories'
								target='_blank'
								rel='noreferrer'
								className='block m-3 p-2 text-center'
							>
								Click here to check out more of my work on GitHub!
							</a>
						</div>
					</div>
				)}
			</Spring>

			<Footer />
		</section>
	);
}
