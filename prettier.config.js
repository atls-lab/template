/**
 * @type {import('prettier').Options}
 */
module.exports = {
  plugins: [require.resolve('@atls/prettier-plugin')],
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  jsxSingleQuote: true,
  trailingComma: 'es5',
  printWidth: 100,
}
