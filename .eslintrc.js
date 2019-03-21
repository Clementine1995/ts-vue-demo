module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript'
  ],
  rules: {
    'eqeqeq': ['error', 'always', { null: 'ignore'}],
    'quotes': ['error', 'single'],
    'semi': ['warn', 'never'],
    'indent': ['error', 2, {'SwitchCase': 1}],
    'camelcase': 'warn',
    'comma-dangle': ['error', 'never'],
    "no-inner-declarations": [0, "both"], //不建议在{}代码块内部声明变量或函数
    "no-extra-semi": 'warn',//多余的分号
    "no-empty": 'warn',//空代码块
    "no-const-assign": 'error',//不允许const重新赋值
    // allow async-await
    'generator-star-spacing': 'off',
    'no-tabs': 'off',
    // disallow control characters in regular expressions
    'no-control-regex': 'off',
    // disallow empty character classes in regular expressions
    'no-empty-character-class': 'off',
    //	disallow invalid regular expression strings in RegExp constructors
    'no-invalid-regexp': 'off',
    // disallow multiple spaces in regular expressions
    'no-regex-spaces': 'off',
    // disallow template literal placeholder syntax in regular strings
    'no-template-curly-in-string': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }]
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  }
}
