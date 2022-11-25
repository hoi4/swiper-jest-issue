/* eslint-disable */
export default {
  displayName: 'swiper-test',
  preset: '../../jest.preset.js',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.(html|svg)$',
    },
  },
  coverageDirectory: '../../coverage/apps/swiper-test',
  transform: {
    '^.+\\.(ts|mjs|js|html)$': 'jest-preset-angular',
  },
  /**
   * The regex is basically a double negation. By default, jest ignores everything in node_modules. If you want to
   * include some module, add it to the negative lookahead (?!...)
   * Swiper: depends on ssr-window and dom7
   */
  transformIgnorePatterns: ['node_modules/(?!(.*\\.mjs$|swiper|ssr-window|dom7))'],

  /**
   * Needed to make swiper/angular work
   * the paths need to be absolute (https://jestjs.io/docs/configuration#modulepaths-arraystring)
   */
  modulePaths: ['<rootDir>/../../node_modules/swiper/angular/'],
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
};
