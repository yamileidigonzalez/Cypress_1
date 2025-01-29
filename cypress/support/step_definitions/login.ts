import { Given } from "@badeball/cypress-cucumber-preprocessor";

Given("que el usuario está en la página de login", () => {
  cy.visit("https://newfront.lab.solverpay.com/");
});