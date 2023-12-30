module.exports = {
	root: true,
	env: {
		node: true,
	},
	'extends': [
		'plugin:vue/vue3-essential',
		'eslint:recommended',
		'@vue/eslint-config-prettier/skip-formatting',
		'@vue/eslint-config-typescript'
	],
	parserOptions: {
		ecmaVersion: 'latest'
	},
	overrides: [
		{
			files: ['postcss.config.cjs', 'tailwindcss.config.cjs'],
			env: {
				node: true
			}
		}
	]
}