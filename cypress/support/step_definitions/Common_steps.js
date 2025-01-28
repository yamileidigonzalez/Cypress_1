import { Given } from 'cypress-cucumber-preprocessor/steps';

Given('que el usuario está en la página de login', () => {
  console.log("Paso: que el usuario está en la página de login");
  cy.visit("https://newfront.lab.solverpay.com/login"); // Cambia la URL según tu aplicación
  cy.wait(1000);
});
