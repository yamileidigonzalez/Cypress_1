/*const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild');

module.exports = defineConfig({
  projectId: 'pbjwow',
  e2e: {
    setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],// Agregar el plugin de esbuild
        platform: 'node', // Configurar esbuild para usar el entorno de Node.js
      });
      on("file:preprocessor", bundler);
      addCucumberPreprocessorPlugin(on, config);
      return config;
    },*/
    //specPattern: "cypress/e2e/**/*.feature", // Busca solo archivos .feature en la carpeta e2e
    //stepDefinitions: "cypress/support/step_definitions/*.js", // Ruta a los archivos de pasos 
    /*
    experimentalStudio: true
  }
 
});
*/
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
    specPattern: "cypress/e2e/**/*.feature", // Ruta de los archivos .feature
    stepDefinitions: "cypress/support/step_definitions/*.js", // Ruta de los archivos de pasos
    experimentalStudio: true,
  }
});
