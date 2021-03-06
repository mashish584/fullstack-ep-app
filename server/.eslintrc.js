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
    "no-tabs": 0,
    "default-case": 0,
    "no-param-reassign": 0,
    "array-callback-return": 0,
    "no-plusplus": 0,
    "no-unused-vars": ["error", { vars: "all", args: "none", ignoreRestSiblings: false }],
    "max-len": 0,
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
