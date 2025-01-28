const { Given, When, Then, And } = require("cypress-cucumber-preprocessor/steps");

// Scenario 1: Verificar que la URL utiliza HTTPS

Given('que accedo a la página web del sistema', () => {
  // Asegúrate de sustituir la URL con la real de tu sistema
  cy.visit("https://newfront.lab.solverpay.com/login");
});

When('observo la barra de direcciones', () => {
  // Aquí no es necesario hacer nada en particular, se verificará la URL
});

Then('la URL debe comenzar con "https://"', () => {
  // Verifica que la URL comience con "https://"
  cy.url().should('match', /^https:\/\//);
});

And('el icono del candado debe estar presente en la barra de direcciones', () => {
  // Aquí debes comprobar que el candado esté presente en la barra de direcciones
  cy.get('body').should('contain', '🔒'); // Ajusta según el icono real
});

// Scenario 2: Comprobar los detalles del certificado SSL

Given('que accedo a la página web del sistema', () => {
  // Repite la visita a la página
  cy.visit("https://newfront.lab.solverpay.com/login");
});

When('hago clic en el icono del candado cerca de la barra de direcciones', () => {
  // Aquí deberías implementar cómo interactuar con el candado en la barra de direcciones
  // En los navegadores, hacer clic en el candado generalmente abre un cuadro de información
  // Sin embargo, Cypress no puede interactuar directamente con la barra de direcciones del navegador
  // Lo que podrías hacer es comprobar otros elementos visibles después de hacer clic, si es posible

  // Esto puede ser un ejemplo genérico:
  cy.get('address-bar-selector')  // Sustituye por el selector real
    .click();  // Esto asume que el clic abre una ventana o cuadro
});

Then('debo poder visualizar los detalles del certificado SSL, incluyendo su validez y emisor', () => {
  // Aquí necesitarás comprobar los detalles del certificado SSL
  // Normalmente, esto abre un cuadro de diálogo o una nueva ventana
  // Si es posible automatizar este paso con Cypress, hazlo aquí

  // Un ejemplo de cómo podrías verificar un cuadro de diálogo:
  cy.get('.cert-details').should('contain', 'Emisor');  // Ajusta según la estructura de tu página
  cy.get('.cert-details').should('contain', 'Validez'); // Ajusta el selector y contenido según lo que aparece
});
