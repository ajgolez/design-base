// Import ESLint plugins and parsers
const reactPlugin = require("eslint-plugin-react"); // Adds React-specific linting rules
const reactHooksPlugin = require("eslint-plugin-react-hooks"); // Enforces best practices for React Hooks
const jsxA11yPlugin = require("eslint-plugin-jsx-a11y"); // Linting rules for accessibility in JSX
const tsPlugin = require("@typescript-eslint/eslint-plugin"); // Provides TypeScript-specific linting rules
const prettierPlugin = require("eslint-plugin-prettier"); // Integrates Prettier with ESLint to enforce code formatting
const tsParser = require("@typescript-eslint/parser"); // TypeScript parser for ESLint

// Export the ESLint configuration as an array (Flat Config System)
module.exports = [
  {
    // Apply this configuration to all JavaScript and TypeScript files
    files: ["**/*.{js,jsx,ts,tsx}"],

    // Specify language options for parsing the code
    languageOptions: {
      parser: tsParser, // Use the TypeScript parser
      parserOptions: {
        ecmaVersion: "latest", // Support modern JavaScript features
        sourceType: "module", // Enable ECMAScript Modules
        ecmaFeatures: {
          jsx: true, // Enable JSX syntax for React
        },
      },
    },

    // React-specific settings
    settings: {
      react: {
        version: "detect", // Automatically detect the installed React version
      },
    },

    // Register plugins to enable their linting rules
    plugins: {
      react: reactPlugin, // React-specific linting
      "react-hooks": reactHooksPlugin, // Linting rules for React Hooks
      "jsx-a11y": jsxA11yPlugin, // Accessibility linting for JSX
      "@typescript-eslint": tsPlugin, // TypeScript-specific linting
      prettier: prettierPlugin, // Integrates Prettier with ESLint
    },

    // Linting rules to enforce coding standards and catch errors
    rules: {
      ...reactPlugin.configs.recommended.rules, // Recommended React rules
      ...reactHooksPlugin.configs.recommended.rules, // Recommended React Hooks rules
      ...jsxA11yPlugin.configs.recommended.rules, // Recommended accessibility rules
      ...tsPlugin.configs.recommended.rules, // Recommended TypeScript rules

      // Custom rules
      "react/self-closing-comp": "error", // Enforce self-closing tags where applicable
      "@typescript-eslint/no-explicit-any": "error", // Disallow the use of the `any` type
      "prettier/prettier": "error", // Enforce Prettier formatting rules
      "react/react-in-jsx-scope": "off", // Disable React import requirement (for React 17+)
      "@typescript-eslint/no-require-imports": "off", // Allow `require()` usage for legacy compatibility
    },

    // Files to ignore during linting
    ignores: [
      "dist/**", // Ignore built files in the `dist` folder
      "**/*.d.ts", // Ignore TypeScript declaration files
    ],
  },
];
