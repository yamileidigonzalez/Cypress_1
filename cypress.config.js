const { defineConfig } = require("cypress");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
//const { createBundler } = require('@badeball/cypress-cucumber-preprocessor/esbuild');
const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild');

module.exports = defineConfig({
  projectId: 'pbjwow',
  e2e: {
    setupNodeEvents(on, config) {
      // Configuración del bundler con esbuild
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });
      // Configuración para usar el bundler
      on("file:preprocessor", bundler);
      // Activación del preprocesador Cucumber
      addCucumberPreprocessorPlugin(on, config);
      return config;
    },
    specPattern: 'cypress/e2e/**/*.feature',
    supportFile: 'cypress/support/e2e.js',
    stepDefinitions: 'cypress/e2e/steps/*',
    experimentalStudio: true,
  },
  
});

