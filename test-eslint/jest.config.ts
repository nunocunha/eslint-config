import type {Config} from 'jest';
import presets from 'jest-preset-angular/presets';

const coverageThreshold: Readonly<number> = 80;

export default <Config>{
  preset: `jest-preset-angular`,
  transform: {
    '^.+\\.(ts|js|mjs|html|svg)$': [
      `jest-preset-angular`,
      {
        ...presets.defaultTransformerOptions,
        tsconfig: `<rootDir>/jest/tsconfig.json`,
      },
    ],
  },
  setupFilesAfterEnv: [`<rootDir>/jest/setup.ts`],
  testMatch: [`<rootDir>/src/app/**/*.spec.ts`],
  collectCoverage: true,
  collectCoverageFrom: [`<rootDir>/src/app/**/*.ts`],
  coverageDirectory: `coverage`,
  coverageThreshold: {
    global: {
      branches: coverageThreshold,
      functions: coverageThreshold,
      lines: coverageThreshold,
      statements: coverageThreshold,
    },
  },
};
