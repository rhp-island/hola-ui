module.exports = {
  transform: {
    '^.+\\.(ts|tsx)$': [
      'esbuild-jest',
      {
        jsxFactory: 'h',
        jsxFragment: 'Fragment',
        sourcemap: true,
        target: 'es2020',
      },
    ],
  },
  setupFiles: ['./jest.setup.ts'],
  transformIgnorePatterns: ['/node_modules/(?!@popperjs/.*|lodash.)'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testMatch: ['**/**/*.test.(js|jsx|ts|tsx)'],
}
