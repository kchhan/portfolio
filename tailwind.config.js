module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				dark_mode: {
					default: '#081B33',
					light: '#152642',
					gray: '#767D92',
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
