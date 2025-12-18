module.exports = {
  testEnvironment: "jsdom",           // important
  moduleFileExtensions: ["js", "jsx"],
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  globals: {
    JSX: true
  }
};
