const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
//const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
//const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild');


module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.feature", // Busca solo archivos .feature en la carpeta e2e
    setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });
      on("file:preprocessor", bundler);
      addCucumberPreprocessorPlugin(on, config);
      return config;
    },
    //baseUrl: "http://localhost:3000", // Cambia según tu configuración local
    /*setupNodeEvents(on, config) {
      // implement node event listeners here
    },*/
  },
});
