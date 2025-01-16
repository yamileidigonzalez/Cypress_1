import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('El usuario está en la página de inicio de sesión', () => {
  cy.visit('/login');
});

When('El usuario ingresa sus credenciales válidas', () => {
  cy.get('input[name="username"]').type('usuario');
  cy.get('input[name="password"]').type('contraseña');
  cy.get('button[type="submit"]').click();
});

Then('El usuario es redirigido al panel principal', () => {
  cy.url().should('include', '/dashboard');
});
