import tsParser from "@typescript-eslint/parser";
export default [
  {
    files: ["**/*.tsx","**/*.ts"],
    languageOptions: { parser: tsParser },
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",
    }
  }
];
