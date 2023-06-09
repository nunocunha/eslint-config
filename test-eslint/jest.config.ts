import type {Config} from 'jest';
import presets from 'jest-preset-angular/presets';

const COVERAGE_THRESHOLD: Readonly<number> = 80;

const jestConfig: Config = {
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
      branches: COVERAGE_THRESHOLD,
      functions: COVERAGE_THRESHOLD,
      lines: COVERAGE_THRESHOLD,
      statements: COVERAGE_THRESHOLD,
    },
  },
};

export default jestConfig;
