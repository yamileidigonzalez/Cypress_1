/*const cucumber = require('@badeball/cypress-cucumber-preprocessor').default;

module.exports = (on, config) => {
  // Configura el preprocesador de Cucumber
  on('file:preprocessor', cucumber());
};*/
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = (on, config) => {
  on('file:preprocessor', cucumber());
};
