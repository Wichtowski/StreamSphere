import globals from "globals";
import tseslint from "typescript-eslint";


export default [
  {languageOptions: { globals: globals.browser }},
  [ ignores: ["*.{ html, }"],
  ...tseslint.configs.recommended,
];