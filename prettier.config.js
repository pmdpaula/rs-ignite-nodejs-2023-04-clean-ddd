/** @type {import(prettier).Config} */
const config = {
  trailingComma: "es5",
  // trailingComma: "all",
  tabWidth: 2,
  semi: true,
  useTabs: false,
  singleQuote: false,
  printWidth: 90,
  arrowParens: "always",
  endOfLine: "lf",
  editorconfig: false,
  singleAttributePerLine: true,
  // importOrder: [
  //   "^react$",
  //   "^react-native$",
  //   "^@react-navigation$",
  //   "^@storage/(.*)$",
  //   "^@screens/(.*)$",
  //   "^@components/(.*)$",
  //   "^@assets/(.*)$",
  //   "^[./]"
  // ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true
};

module.exports = {
  config,
  "plugins": ["@trivago/prettier-plugin-sort-imports"],
};

