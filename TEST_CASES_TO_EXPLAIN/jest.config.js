module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  rootDir: "./",
  transform: {
    "^.+\\.ts$": "ts-jest"
  },
  testMatch: ["**/*.test.ts"],
  setupFiles: ["<rootDir>/jest.setup.js"]
};
