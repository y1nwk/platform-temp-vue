/*
 * @Author: Leslie
 * @Date: 2021-12-16 14:47:39
 * @LastEditors: Leslie
 * @LastEditTime: 2021-12-20 15:05:06
 * @FilePath: \platform-temp\.eslintrc.js
 */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/typescript/recommended', '@vue/prettier', '@vue/prettier/@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': 'warn',
    'comma-spacing': [2, { before: false, after: true }],
    'no-console': 2, //禁止使用console
    quotes: [1, 'single'], //引号类型 `` "" ''
    'prettier/prettier': 'off',
  },
};
