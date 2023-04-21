export default {
  testEnvironment: 'node',
  transform: {
    '^.+\\.(js|mjs)$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'mjs', 'json', 'node'],
};
