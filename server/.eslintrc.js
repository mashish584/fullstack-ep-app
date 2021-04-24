module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint", "eslint-plugin-import"],
	extends: ["airbnb-base"],
	rules: {
		quotes: [2, "double", { avoidEscape: true }],
		"import/extensions": "off",
		"import/prefer-default-export": "off",
		"import/order": 2,
		"no-unused-vars": ["error", { vars: "all", args: "none", ignoreRestSiblings: false }],
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
