/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	safelist: [
		{
			pattern:
				/bg-(red|green|blue|yellow|purple|pink|gray|indigo|orange|teal|cyan|lime|emerald|rose|fuchsia|violet|amber|sky|slate|zinc|neutral|stone)-(100|200|300|400|500|600|700|800|900)/
		}
	],
	plugins: []
};
