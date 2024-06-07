/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['roboto', ...defaultTheme.fontFamily.sans],
				serif: ['Lora', ...defaultTheme.fontFamily.serif],
				eurostile: ['eurostile', 'sans-serif']
			},
			colors: {
				'aep-red': {
					50: '#fdf3f3',
					100: '#fde3e4',
					200: '#fcccce',
					300: '#f8a9ac',
					400: '#f2777c',
					500: '#e74c53',
					600: '#d42e35',
					700: '#ac2228',
					800: '#932126',
					900: '#7b2125',
					950: '#420d0f'
				}
			}
		}
	},
	plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')]
};
