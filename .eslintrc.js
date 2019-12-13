module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: ["plugin:vue/essential", "@vue/airbnb", "@vue/prettier", "@vue/typescript"],

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    "import/prefer-default-export": "off",
    quotes: [
      'error',
      'single'
    ],
    semi: [
      'error',
      'never'
    ]
  },

  parserOptions: {
    parser: '@typescript-eslint/parser'
  }
};
