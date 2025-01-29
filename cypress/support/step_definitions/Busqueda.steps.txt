import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

// Simulación de sistema de búsqueda
const sistemaBusqueda = {
  realizarBusqueda: (termino) => {
    if (!termino) {
      return { mensaje: 'Debe ingresar un término para buscar', resultados: [] };
    }
    const baseDeDatos = ['ejemplo', 'prueba', 'tecnología', 'artículos'];
    const resultados = baseDeDatos.filter((item) => item.includes(termino));
    if (resultados.length === 0) {
      return { mensaje: 'No se encontraron resultados', resultados: [] };
    }
    return { mensaje: '', resultados };
  },
};

// Definición de los pasos
Given('que estoy en la página de inicio {string} y {string}', function (username,password) {
    cy.visit("https://newfront.lab.solverpay.com/login");
    cy.get('#user').type(username); 
    cy.get('#password').type(password);
    cy.get('.mt-2').click(); 
    //const pagina = document.getElementById('inicio');
    //assert(pagina !== null, 'La página de inicio no está cargada');
});

When('ingreso el término {string} en el campo de búsqueda', function (termino) {
  document.getElementById('campoBusqueda').value = termino;
});

When('dejo el campo de búsqueda vacío', function () {
  document.getElementById('campoBusqueda').value = '';
});

When('presiono el botón de buscar', function () {
  document.getElementById('btnBuscar').click();
});

Then('debería ver resultados relacionados con {string}', function (terminoEsperado) {
  const resultadosDiv = document.getElementById('resultados').textContent;
  assert(resultadosDiv.includes(terminoEsperado), `El resultado no contiene el término ${terminoEsperado}`);
});

Then('debería ver un mensaje indicando que no hay resultados', function () {
  const mensajeDiv = document.getElementById('mensaje').textContent;
  assert.strictEqual(mensajeDiv, 'No se encontraron resultados');
});

Then('debería ver un mensaje indicando que debo ingresar un término', function () {
  const mensajeDiv = document.getElementById('mensaje').textContent;
  assert.strictEqual(mensajeDiv, 'Debe ingresar un término para buscar');
});
