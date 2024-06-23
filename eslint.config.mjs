import globals from "globals";
import tslint from "typescript-eslint";

export default [
  {
    ignores: [
      "**/node_modules/**",
      "**/dist/**",
      "**/build/**",
      "**/coverage/**",
      "**angular**"
    ],
    languageOptions: { 
      globals: globals.browser,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "error",
    },
    ...tslint.configs.recommended,
  }
];