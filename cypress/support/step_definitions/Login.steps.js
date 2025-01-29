import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que el usuario está en la página de login", () => {
  console.log("Paso: que el usuario está en la página de login");
  //GivenCommonSteps.loginPage();  // Llamar al paso común
  console.log("He llegado aquí")
  cy.visit("https://newfront.lab.solverpay.com/login");
  console.log("He llegado aquí")
  cy.wait(1000);
  console.log("He llegado aquí")
})

When('ingresa un nombre de usuario {string} y una contraseña {string}', (username, password) => {
  console.log("He llegado aquí")
  cy.get('#user').type(username); // Reemplaza con el selector real
  console.log("He llegado aquí")
  cy.get('#password').type(password);
  console.log("He llegado aquí")

});

Then('presiona el botón de login', () => {
  console.log("He llegado aquí")
  cy.get('.mt-2').click(); // Cambia el selector si es necesario
});
