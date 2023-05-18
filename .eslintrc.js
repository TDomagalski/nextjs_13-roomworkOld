module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['airbnb'],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		'react/react-in-jsx-scope': 'off',
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
		'react/jsx-indent': 'off',
		'react/jsx-indent-props': 'off',
		'react/jsx-one-expression-per-line': 'off',
		'react/prop-types': 'off',
		indent: [2, 'tab'],
		'no-tabs': 0,
	},
};
