const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given("que el usuario está en la página de login", () => {
  cy.visit("https://newfront.lab.solverpay.com/login"); // Reemplaza con la URL real
});

When("ingresa un nombre de usuario {string} y una contraseña {string}", (username, password) => {
  cy.get('#user').type(username); // Reemplaza con el selector real
  cy.get('#password').type(password);
});

When("presiona el botón de login", () => {
    cy.get('.mt-2').click(); // Reemplaza con el selector real del botón
});

Then("el sistema debe mostrar un mensaje de bienvenida {string}", (expectedMessage) => {
    cy.get('app-sales-per-hour > .mb-2').should("contain.text", expectedMessage); // Reemplaza con el selector real
});
