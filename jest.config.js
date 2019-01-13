module.exports = {
  collectCoverage: true,
  coverageDirectory: '<rootDir>/test/results/unit/coverage',
  testMatch: [ '<rootDir>/test/**/*.spec.js' ],
  transform: {
    "^.+\\.js$": "babel-jest",
  },
  moduleFileExtensions: [
    'js',
    'jsx'
  ]
};
