import {defineConfig} from 'cypress';

const baseConfig: Partial<Cypress.ResolvedConfigOptions> = {
  viewportWidth: 1280,
  viewportHeight: 720,
  setupNodeEvents(on, config) {
    // implement node event listeners here
    return {
      ...config,
      browsers: config.browsers.filter((browser) => browser.family === 'chromium' && browser.name === 'electron'),
    };
  },
};

export default defineConfig({
  e2e: {
    ...baseConfig,
    specPattern: `cypress/tests/${process.env['CYPRESS_SPEC_FOLDER'] ?? ''}/**/*.spec.ts`,
  },
  component: {
    ...baseConfig,
    specPattern: 'cypress/tests/component/**/*.spec.ts',
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
    },
  },
  chromeWebSecurity: false,
  video: false,
});
