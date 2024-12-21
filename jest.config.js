module.exports = {
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // For CSS if needed
      '\\.svg$': '<rootDir>/src/mocks/svgMock.js', // Path to your mock file
    },
  };
  