export default function Footer() {
	return (
		<footer className="block w-full">
			<hr></hr>
			<div className='flex justify-center block'>
				<a
					href='https://github.com/kchhan'
					target='_blank'
					rel='noreferrer'
					className='m-2 py-1 hover:text-white border-t-2 border-gray-800 hover:border-purple-500'
				>
					<i className='fab fa-github-square fa-3x'></i>
				</a>
				<a
					href='https://www.linkedin.com/in/kevinchhan/'
					target='_blank'
					rel='noreferrer'
					className='m-2 py-1 hover:text-white border-t-2 border-gray-800 hover:border-yellow-500'
				>
					<i className='fab fa-linkedin fa-3x'></i>
				</a>
			</div>
		</footer>
	);
}
