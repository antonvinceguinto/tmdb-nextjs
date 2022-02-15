const colors = require('tailwindcss/colors')

module.exports = {
	content: [ './pages/**/*.{html,js}', './components/**/*.{html,js}' ],
	theme: {
		extend: {
			fontFamily: {
				mukta: [ 'Mukta', 'sans-serif' ]
			},
			colors: {
				'black-pearl': '#1e272e',
				'primary': '#202225',
				'gray': colors.trueGray,
				'gray': {
					900: '#202225',
					800: '#2f3136',
					700: '#36393f',
					600: '#4f545c',
					400: '#d4d7dc',
					300: '#e3e5e8',
					200: '#ebedef',
					100: '#f2f3f5',
				}
			}
		},
	},
	plugins: []
}
