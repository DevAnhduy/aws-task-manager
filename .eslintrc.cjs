module.exports = {
	root: true,
	env: { browser: true, es2020: true, node: true },
	extends: [
		'eslint:recommended',
		'plugin:import/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'next/core-web-vitals',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: ['react', 'react-refresh', 'unused-imports', 'simple-import-sort'],
	rules: {
		'prefer-const': 'error',
		'unused-imports/no-unused-imports': 'error',
		'no-use-before-define': 'error',
		'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
		'@typescript-eslint/no-explicit-any': 'off',
		'simple-import-sort/imports': [
			'error',
			{
				groups: [
					// Package next related
					['^next'],
					// Package react related
					['^react'],
					// Package mantine related
					['^@mantine'],
					// Other lib
					['^@?\\w'],
					// Internal package
					['^@(apis)(/.*|$)'],
					['^@(assets)(/.*|$)'],
					['^@(pages)(/.*|$)'],
					['^@(commons)(/.*|$)'],
					['^@(configs)(/.*|$)'],
					['^@(helpers)(/.*|$)'],
					['^@(utils)(/.*|$)'],
					['^@(modules)(/.*|$)'],
					['^@(types)(/.*|$)'],
					['^@(stores)(/.*|$)'],
					['^@(contexts)(/.*|$)'],
					['^@(hooks)(/.*|$)'],
					['^@(/*)(/.*|$)'],
					// Styles import
					['^(@styles)(/.scss|$)'],
					// Parent import
					['^\\.\\.(?!/?$)', '^\\.\\./?$'],
					// Same relative import
					['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
				],
			},
		],
		'simple-import-sort/exports': 'error',
	},
	settings: {
		react: {
			version: 'detect',
		},
		'import/resolver': {
			alias: {
				map: [
					['@', './src'],
					['@commons', './src/commons'],
					['@modules', './src/modules'],
					['@helpers', './src/helpers'],
					['@configs', './src/configs'],
					['@utils', './src/utils'],
					['@apis', './src/apis'],
					['@assets', './src/assets'],
					['@styles', './src/styles'],
					['@hooks', './src/hooks'],
					['@pages', './src/pages'],
					['@types', './src/types'],
					['@stores', './src/stores'],
				],
				extensions: ['.ts', '.tsx', '.js', '.tsx'],
			},
		},
	},
};
