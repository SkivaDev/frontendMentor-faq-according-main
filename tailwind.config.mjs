/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundColor: {
				'light-pink': 'hsl(275, 100%, 97%)',
				'grayish-purple': 'hsl(292, 16%, 49%)',
				'dark-purple': 'hsl(292, 42%, 14%)',
				'purple': 'hsl(281, 83%, 54%)',
			},
			colors: {
				'light-pink': 'hsl(275, 100%, 97%)',
				'grayish-purple': 'hsl(292, 16%, 49%)',
				'dark-purple': 'hsl(292, 42%, 14%)',
				'purple': 'hsl(281, 83%, 54%)',
			},
			backgroundImage: {
				'pattern-desktop': "url('/images/background-pattern-desktop.svg')",
				'pattern-mobile': "url('/images/background-pattern-mobile.svg')",
			},
		},
	},
	plugins: [],
}
