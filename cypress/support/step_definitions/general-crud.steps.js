import { Given, When, Then} from 'cypress-cucumber-preprocessor/steps';


Given("que el usuario está en la página de login", () => {
  cy.visit("https://newfront.lab.solverpay.com/login"); // Reemplaza con la URL real
});

When("ingresa un nombre de usuario {string} y una contraseña {string}", (username, password) => {
  cy.get('#user').type(username); // Reemplaza con el selector real
  cy.get('#password').type(password);
});

Then("presiona el botón de login", () => {
    cy.get('.mt-2').click(); // Reemplaza con el selector real del botón
});


