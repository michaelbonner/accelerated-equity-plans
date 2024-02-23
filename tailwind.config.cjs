/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans],
				serif: ['Lora', ...defaultTheme.fontFamily.serif]
			},
			backgroundImage: {
				'slc-night': 'url(/images/slcatnight.jpg)'
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
