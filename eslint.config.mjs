import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


export default [
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["src/**/*.ts"],
    ignores: ["**/*.config.js"],
    rules: {
      // "@typescript-eslint/ban-ts-comment": "off",
      indent: ["warn", 2],
      "linebreak-style": ["error", "unix"],
      quotes: ["error", "double"],
      semi: ["error", "always"],
      "@typescript-eslint/no-unused-vars": ["warn", { args: "none" }],

      // 'import/namespace': 0,
      // 'import/no-unresolved': [2, { ignore: ['^@'] }],
    },
  }
];
