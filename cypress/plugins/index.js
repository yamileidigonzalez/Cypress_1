<<<<<<< HEAD
/*const cucumber = require('@badeball/cypress-cucumber-preprocessor').default;
=======
/*const cucumber = require('cypress-cucumber-preprocessor').default;
>>>>>>> 1f42c239d06ca419bb467e5a6bd0934bac7c8655

module.exports = (on, config) => {
  // Configura el preprocesador de Cucumber
  on('file:preprocessor', cucumber());
};*/
<<<<<<< HEAD
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = (on, config) => {
  on('file:preprocessor', cucumber());
=======
// cypress/plugins/index.js
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');

module.exports = (on, config) => {
  addCucumberPreprocessorPlugin(on, config);
  return config;
>>>>>>> 1f42c239d06ca419bb467e5a6bd0934bac7c8655
};

