const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = (on, config) => {
  // Configura el preprocesador de Cucumber
  on('file:preprocessor', cucumber());
};

