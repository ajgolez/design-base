# **Design Systems**

A monorepo project designed for building, testing, and maintaining scalable, reusable, and visually appealing UI components. This project leverages:

- **TypeScript**: Ensures type safety and scalability.
- **React**: Builds dynamic, interactive user interfaces.
- **SCSS**: Enables modular, maintainable, and theme-able styling.
- **Storybook**: Documents, develops, and tests UI components in isolation.

---

## **Table of Contents**

1. [Building](#building)
2. [Testing](#testing)
3. [Linting](#linting)
4. [Typechecking](#typechecking)
5. [Updating Dependencies](#updating-dependencies)
6. [Development](#development)
7. [Contribution Guidelines](#contribution-guidelines)

---

## **Building**

**What is Building?**

The process of converting source code (e.g., TypeScript, JSX, SCSS) into production-ready files (e.g., JavaScript, CSS) that can be executed or deployed.

**Commands:**

- **Build the entire monorepo:**

  ```bash
  yarn build

  ```

- **Build a specific component:**
  ```bash
  yarn workspace @your-scope/component-name build
  ```

## **Testing**

**What is Testing?**

The process of verifying the functionality and correctness of the code by running automated tests to ensure components behave as expected.

**Commands:**

- **Test the entire monorepo:**

  ```bash
  yarn test

  ```

- **Test a specific component:**

  ```bash
  yarn workspace @your-scope/component-name test

  Testing is powered by Jest and React Testing Library to ensure comprehensive coverage.
  ```

## **Linting**

**What is Linting?**

Linting analyzes the code for:
• Potential errors.
• Stylistic inconsistencies.
• Deviation from coding standards.

This improves code quality and maintainability.

**Commands:**

- **Lint the entire monorepo:**

  ```bash
  yarn lint

  ```

- **Test a specific component:**

  ```bash
  yarn workspace @your-scope/component-name lint

  ```

- **Manually Format Code with Prettier:**
  ```bach
  yarn prettier --write .
  ```

## **Typechecking**

**What is Typechecking?**

The process of verifying that variables, functions, and expressions adhere to specified type rules. This ensures type safety and reduces runtime errors.

**Commands:**

- **Typecheck the entire monorepo:**

  ```bash
  yarn typecheck

  ```

- **Typecheck a specific component:**
  ```bash
  yarn workspace @your-scope/component-name typecheck
  ```

## **Updating Dependencies**

**Why Update Dependencies?**

Helps keep the project up to date with the latest features, fixes, and security updates across all components in the monorepo.

**Commands:**

- **Upgrade:**
  ```bash
  yarn pkg:upgrade
  ```

Powered by Lerna, this updates dependencies across the monorepo in bulk.

## **Run Component**

**What is Running a component?**

The process of running and testing individual components in isolation for rapid iteration and debugging.

**Commands:**

- **Install dependencies for the dev environment:**
  • For initial setup. Navigate to the dev folder inside the component directory.

  ```bash
  yarn

  ```

- **Start the Vite development server:**
  ```bash
   yarn workspace @your-scope/component-name dev
  ```

## **Watch and Build Component**

**What is it?**

The process of continuously monitoring the source files of a component for changes and automatically rebuilding them into production-ready files. This is primarily used during development of libraries or reusable components to ensure that the output files are always up to date.

**Commands:**

- **Start Tsup in Watch Mode:**
  ```bash
   yarn workspace @your-scope/component-name watch
  ```

## **Style and Build Styles**

**What is it?**

The process of compiling and bundling styles (e.g., SCSS files) into production-ready CSS files. This ensures that components in your design system have consistent and reusable styles available for use.

**Commands:**

- **Build from root:**

  ```bash
   yarn build
  ```

- **Build Styles Once:**

  ```bash
   yarn workspace @your-scope/styles build
  ```

- **Watch and Build Styles:**

  Continuously monitor SCSS files for changes and automatically rebuild them into CSS. This is particularly useful during development to ensure up-to-date styling for components.

  ```bash
   yarn workspace @your-scope/styles watch
  ```

- **Using in other projects:**
  Include in dependency
  ```bash
  "@your-scope/styles": "",
  ```
  Import the css
  ```bash
   import "@your-scope/styles/dist/index.css";
  ```

## **Run Storybook**

**What is it?**

Storybook is a tool for developing and documenting UI components in isolation. It allows you to visually test components, ensuring they work as expected and look great before integrating them into your project.

**Commands:**

- **Start Storybook:**
  ```bash
   yarn workspace @your-scope/library storybook
  ```
