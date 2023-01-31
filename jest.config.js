const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  coveragePathIgnorePatterns: ['<rootDir>/src/(.*)/*.graphql'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  modulePaths: ['<rootDir>'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '\\.graphql$': '@graphql-tools/jest-transform',
  },
};

module.exports = createJestConfig(customJestConfig);
