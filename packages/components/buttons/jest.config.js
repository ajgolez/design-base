module.exports = {
  // Use ts-jest as the testing preset for handling TypeScript files.
  preset: "ts-jest",

  // Set up the testing environment to simulate a browser-like environment for React components.
  testEnvironment: "jest-environment-jsdom", // For React tests

  transform: {
    // Use ts-jest to transform TypeScript files (both `.ts` and `.tsx`) before running tests.
    "^.+\\.tsx?$": "ts-jest",
  },

  // Specify the file extensions that Jest will recognize for test files and modules.
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"], // Recognize TypeScript and JavaScript files

  // Load additional setup files after the testing environment is configured.
  // In this case, it adds custom DOM matchers from @testing-library/jest-dom for better assertions in React tests.
  setupFilesAfterEnv: ["@testing-library/jest-dom/"],
};
