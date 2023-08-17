module.exports = {
	content: ['./src/**/*.svelte', './src/**/*.html'], // Ajustez selon vos besoins
	darkMode: 'media',
	theme: {
		extend: {
			colors: {
				'devatopia-footer': '#3f3d56' // Ajout du préfixe #
			}
		}
	},
	plugins: [require('daisyui')]
};
