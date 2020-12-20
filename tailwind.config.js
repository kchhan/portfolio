module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				sepia: {
					default: '#e3ceb9',
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
