import { Given } from 'cypress-cucumber-preprocessor/steps';

export const GivenCommonSteps = {
  // Paso común para ir a la página de login
  loginPage: () => {
    cy.visit("https://newfront.lab.solverpay.com/login");
    cy.wait(1000);
  },

  // Puedes agregar otros pasos comunes aquí, por ejemplo:
  navigateToDashboard: () => {
    cy.visit("https://newfront.lab.solverpay.com/dashboard");
    cy.wait(1000);
  },
};
