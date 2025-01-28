import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";

// Scenario: Cerrar sesión del usuario
Given("que estoy autenticado en el sistema", () => {
  // Simular autenticación del usuario
  cy.visit("/login"); // Ruta de inicio de sesión
  cy.get("#username").type("usuario"); // Ingresar usuario
  cy.get("#password").type("password123"); // Ingresar contraseña
  cy.get("button#btn-login").click(); // Hacer clic en el botón de inicio de sesión
  cy.url().should("eq", "http://localhost:3000/dashboard"); // Validar que se redirige al dashboard
});

When("hago clic en el botón de cerrar sesión", () => {
  // Simular el clic en el botón de cerrar sesión
  cy.get("button#btn-logout").click(); // Botón de cerrar sesión
});

Then("debo ser redirigido a la página de inicio de sesión", () => {
  // Validar que el usuario es redirigido a la página de inicio de sesión
  cy.url().should("eq", "http://localhost:3000/login"); // URL de la página de login
});

And("mi sesión debe cerrarse correctamente", () => {
  // Verificar que el botón de login se muestra, lo que indica que la sesión se ha cerrado
  cy.get("button#btn-login").should("be.visible"); // Validar que el botón de login es visible, lo que indica que la sesión fue cerrada
});


