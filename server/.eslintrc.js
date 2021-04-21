module.exports = {
	root: true,
	plugins: ["eslint-plugin-import"],
	extends: ["airbnb-base"],
	rules: {
		quotes: [2, "double", { avoidEscape: true }],
		"import/extensions": "off",
		"import/prefer-default-export": "off",
		"import/order": 2,
	},
	settings: {
		"import/resolver": {
			node: {
				extensions: [".ts"],
			},
		},
	},
	parserOptions: {
		ecmaVersion: 2018,
	},
};
