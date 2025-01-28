/*const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = (on, config) => {
  // Configura el preprocesador de Cucumber
  on('file:preprocessor', cucumber());
};*/
// cypress/plugins/index.js
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');

module.exports = (on, config) => {
  addCucumberPreprocessorPlugin(on, config);
  return config;
};

