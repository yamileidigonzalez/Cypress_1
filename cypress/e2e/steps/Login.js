//cy.visit('https://51.178.137.167/login'); //cy.title().should('eq','Inicio de sesión')
//cy.get(':nth-child(1) > .form-control').should("be.visible").should("be.enabled").type('solverpay')
//cy.get('.d-flex > .form-control').should("be.visible").should("be.enabled").type('r7auF23wA.A2l1tZ2Dp4{enter}') //cy.get('.btn').click()

// Dependencias necesarias:
// npm install @cucumber/cucumber puppeteer

const { Given, When, Then } = require('@cucumber/cucumber');
const puppeteer = require('puppeteer');
const assert = require('assert');

let browser;
let page;

Given('que el usuario está en la página de login', async () => {
  browser = await puppeteer.launch({ headless: true }); // Cambia a false para ver el navegador
  page = await browser.newPage();
  await page.goto('https://newfront.lab.solverpay.com'); // Reemplaza con la URL real
});

When('ingresa un nombre de usuario {string} y una contraseña {string}', async (username, password) => {
  await page.type('#username', username); // Asegúrate de que los selectores coincidan
  await page.type('#password', password);
});

When('presiona el botón de login', async () => {
  await page.click('.mt-2 bg-blue-400 dark:bg-[#12a4ed] hover:bg-blue-500 disabled:hover:bg-blue-400/50 disabled:dark:hover:bg-[#12a4ed]/50 disabled:cursor-not-allowed disabled:bg-blue-400/50 disabled:dark:bg-[#12a4ed]/50 text-white text-base font-medium rounded-lg p-2.5 w-3/4'); // Reemplaza con el selector real del botón
  await page.waitForNavigation();
});

Then('el sistema debe mostrar un mensaje de bienvenida {string}', async (expectedMessage) => {
  const welcomeMessage = await page.$eval('#welcomeMessage', el => el.textContent); // Selector del mensaje
  assert.strictEqual(welcomeMessage, expectedMessage);
  await browser.close();
});
