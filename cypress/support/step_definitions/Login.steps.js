import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
//import { Given as GivenLogin } from './Common_steps';

//GivenLogin();

Given('que el usuario está en la página de login', () => {
  console.log("Paso: que el usuario está en la página de login");
  cy.visit("https://newfront.lab.solverpay.com/login"); // Cambia la URL según tu aplicación
  /*console.log("He llegado aquí")
  cy.wait(1000);
  console.log("He llegado aquí")*/
});
/*
When('ingresa un nombre de usuario {string} y una contraseña {string}', function (username, password) {
  console.log("He llegado aquí")
  cy.get('#user').type(username); // Reemplaza con el selector real
  console.log("He llegado aquí")
  cy.get('#password').type(password);
  console.log("He llegado aquí")
});

When('no ingresa un nombre de usuario ni contraseña', function () {
  cy.get('#user').clear(); // Asegúrate de que los campos estén vacíos
  cy.get('#password').clear();
});

Then('presiona el botón de login', function () {
  console.log("He llegado aquí")
  cy.get('.mt-2').click(); // Cambia el selector si es necesario
});

Then('el usuario debería ser redirigido al dashboard', function () {
  cy.url().should('include', '/dashboard'); // Cambia '/dashboard' por la ruta del dashboard
});

Then('el usuario debería ver un mensaje de error', function () {
  cy.get('.error-message') // Cambia el selector según el diseño
    .should('be.visible')
    .and('contain', 'Credenciales inválidas'); // Ajusta el mensaje según tu app
});

Then('el usuario debería ver un mensaje de advertencia', function () {
  cy.get('.warning-message') // Cambia el selector según el diseño
    .should('be.visible')
    .and('contain', 'Por favor, complete todos los campos'); // Ajusta el mensaje según tu app
});*/



