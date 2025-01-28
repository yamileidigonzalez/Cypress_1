import { Given, When, Then, And } from '@badeball/cypress-cucumber-preprocessor';
const assert = require('assert');

Given('que accedo a la página web del sistema', () => {
  cy.visit('https://newfront.lab.solverpay.com/login'); // Cambia esta URL por la URL real de tu sistema
});

When('observo la barra de direcciones', () => {
  // Cypress no tiene un método directo para observar la barra de direcciones,
  // pero podemos verificar la URL de la ventana del navegador.
  cy.url().should('include', 'https://'); // Verifica que la URL comience con 'https://'
});

Then('la URL debe comenzar con "https://"', () => {
  cy.url().should('include', 'https://'); // Asegúrate de que la URL empiece con https
});

When('hago clic en el icono del candado cerca de la barra de direcciones', () => {
  // Aquí estamos simulando el clic en el icono del candado.
  // En la vida real, el icono del candado se encuentra en la barra de direcciones,
  // y no se puede interactuar directamente con él desde Cypress.
  // Sin embargo, si en tu aplicación hay un ícono del candado en la interfaz, puedes interactuar con él:
  cy.get('.lock-icon').click(); // Ajusta el selector al ícono de candado si está presente en la UI de la página
});

Then('debo poder visualizar los detalles del certificado SSL, incluyendo su validez y emisor', () => {
  // En este paso, si tu aplicación permite visualizar detalles del certificado SSL en una ventana emergente o modal,
  // verifica que el modal esté visible y contenga los detalles esperados.
  cy.get('.ssl-cert-details').should('be.visible'); // Cambia el selector si es necesario
  cy.get('.ssl-cert-details').should('contain', 'Validez'); // Verifica que la validez esté visible
  cy.get('.ssl-cert-details').should('contain', 'Emisor'); // Verifica que el emisor esté visible
});
