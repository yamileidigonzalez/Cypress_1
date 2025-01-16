// Dependencias necesarias:
// npm install @cucumber/cucumber puppeteer

const { Given, When, Then } = require('@cucumber/cucumber');
const puppeteer = require('puppeteer');
const assert = require('assert');

let browser;
let page;

Given('que el usuario está en la página de login', async () => {
  try {
    browser = await puppeteer.launch({ headless: true }); // Cambia a false para modo visible
    page = await browser.newPage();
    await page.goto('https://newfront.lab.solverpay.com/login'); // Reemplaza con tu URL real
    console.log('Página de login cargada');
  } catch (error) {
    console.error('Error al cargar la página de login:', error);
    throw error;
  }
});

When('ingresa un nombre de usuario {string} y una contraseña {string}', async (username, password) => {
  try {
    await page.type('#username', username); // Selector para el campo de usuario
    await page.type('#password', password); // Selector para el campo de contraseña
    console.log('Credenciales ingresadas');
  } catch (error) {
    console.error('Error al ingresar las credenciales:', error);
    throw error;
  }
});

When('presiona el botón de login', async () => {
  try {
    await page.click(
      '.mt-2.bg-blue-400.dark\\:bg-\\#12a4ed.hover\\:bg-blue-500.disabled\\:hover\\:bg-blue-400\\/50' // Reemplaza con tu selector
    );
    await page.waitForNavigation({ waitUntil: 'networkidle0' });
    console.log('Botón de login presionado y navegación completada');
  } catch (error) {
    console.error('Error al presionar el botón de login:', error);
    throw error;
  }
});

Then('el sistema debe mostrar un mensaje de bienvenida {string}', async (expectedMessage) => {
  try {
    await page.waitForSelector('#welcomeMessage', { timeout: 10000 }); // Espera a que el mensaje sea visible
    const welcomeMessage = await page.$eval('#welcomeMessage', el => el.textContent);
    assert.strictEqual(welcomeMessage, expectedMessage);
    console.log('Mensaje de bienvenida verificado:', welcomeMessage);
  } catch (error) {
    console.error('Error al verificar el mensaje de bienvenida:', error);
    throw error;
  } finally {
    await browser.close();
  }
});
