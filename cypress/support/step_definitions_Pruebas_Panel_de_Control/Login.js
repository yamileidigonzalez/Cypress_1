import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
const assert = require('assert');

Given('que el usuario está en la página de login', () => {
  cy.visit("https://newfront.lab.solverpay.com/login"); // Cambia la URL según tu aplicación
});

When('ingresa un nombre de usuario {string} y una contraseña {string}', (username, password) => {
  cy.get('#user').type(username); // Reemplaza con el selector real
  cy.get('#password').type(password);
});
/*
When('no ingresa un nombre de usuario ni contraseña', () => {
  cy.get('#user').clear(); // Asegúrate de que los campos estén vacíos
  cy.get('#password').clear();
});*/

Then('presiona el botón de login', () => {
  cy.get('.mt-2').click(); // Cambia el selector si es necesario
});
/*
Then('el usuario debería ser redirigido al dashboard', () => {
  cy.url().should('include', '/dashboard'); // Cambia '/dashboard' por la ruta del dashboard
});
Then('el usuario debería ver un mensaje de error', () => {
  cy.get('.error-message') // Cambia el selector según el diseño
    .should('be.visible')
    .and('contain', 'Credenciales inválidas'); // Ajusta el mensaje según tu app
});
Then('el usuario debería ver un mensaje de advertencia', () => {
  cy.get('.warning-message') // Cambia el selector según el diseño
    .should('be.visible')
    .and('contain', 'Por favor, complete todos los campos'); // Ajusta el mensaje según tu app
});
*/


