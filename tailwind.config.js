const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: [ './pages/**/*.{html,js}', './components/**/*.{html,js}' ],
	theme: {
		extend: {
			fontFamily: {
				mukta: [ 'Mukta', 'sans-serif' ]
			},
			colors: {
				'black-pearl': '#1e272e'
			}
		},
		screens: {
			'xs': {'max': '700px'},
			...defaultTheme.screens,
		}
	},
	plugins: []
}
