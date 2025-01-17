/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest", // Ensures TypeScript files are properly handled
  testEnvironment: "node", // Set the environment to Node.js
  moduleFileExtensions: ["ts", "tsx", "js"], // Allow TypeScript files
  transform: {
    "^.+\\.ts$": "ts-jest", // Use ts-jest to transform TypeScript files
  },
};
