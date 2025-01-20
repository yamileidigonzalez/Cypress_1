import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const assert = require('assert');

// Simulación de un DOM para pruebas (puedes reemplazar esto con una herramienta como Puppeteer o interactuar con un frontend real)
document.body.innerHTML = `
  <div id="inicio">
    <input type="text" id="campoBusqueda" />
    <button id="btnBuscar">Buscar</button>
    <div id="resultados"></div>
    <div id="mensaje"></div>
  </div>
`;

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

// Función para simular la acción de buscar
function buscar() {
  const campoBusqueda = document.getElementById('campoBusqueda').value;
  const resultadosDiv = document.getElementById('resultados');
  const mensajeDiv = document.getElementById('mensaje');

  const resultado = sistemaBusqueda.realizarBusqueda(campoBusqueda);

  // Actualizar el DOM con los resultados
  resultadosDiv.innerHTML = resultado.resultados.join(', ');
  mensajeDiv.textContent = resultado.mensaje;
}

// Asociar evento al botón (esto se haría normalmente al inicializar la página)
document.getElementById('btnBuscar').addEventListener('click', buscar);

// Definición de los pasos
Given('que estoy en la página de inicio', function () {
  const pagina = document.getElementById('inicio');
  assert(pagina !== null, 'La página de inicio no está cargada');
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
