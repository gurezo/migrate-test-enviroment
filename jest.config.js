module.exports = {
  preset: "jest-preset-angular",
  globalSetup: "jest-preset-angular/global-setup",
  setupFilesAfterEnv: ["<rootDir>/src/setup-jest.ts"],
  moduleNameMapper: {
    "^src/(.*)$": "<rootDir>/src/$1",
    "^app/(.*)$": "<rootDir>/src/app/$1",
  },
};
