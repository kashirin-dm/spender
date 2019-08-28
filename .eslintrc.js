module.exports = {
  root: true,

  env: {
    node: true
  },

  'extends': [
    'plugin:vue/recommended',
    'eslint:recommended'
  ],

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/singleline-html-element-content-newline': 'off'
  },

  parserOptions: {
    parser: 'babel-eslint'
  },

  'globals': {
    '_': true
  },

  globals: {
    _: true
  }
}
