import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';


// Scenario: Comprobar los filtros en Anulaciones
Given("que accedo al módulo Anulaciones", () => {
  cy.visit("/anulaciones"); // Ajusta la URL según la ruta de tu módulo de anulaciones
});

When("aplico filtros en la lista de anulaciones", () => {
  // Aquí debes incluir la lógica para aplicar filtros en el módulo de anulaciones
  // Ejemplo: si tienes un campo de filtro por fecha
  cy.get('input[name="fecha"]').type("2025-01-01"); // Rellenar un filtro por fecha
  cy.get('button[type="submit"]').click(); // Aplicar los filtros
});

Then("los resultados deberían coincidir con los criterios de filtro aplicados", () => {
  // Verificar que los resultados estén filtrados correctamente
  cy.get(".resultado-anulacion").each((item) => {
    // Aquí deberías comprobar que cada resultado coincida con el filtro
    cy.wrap(item).should("include.text", "2025-01-01"); // Verificar la fecha filtrada
  });
});

// Scenario: Comprobar el listado de Anulaciones
Given("que accedo al módulo Anulaciones", () => {
  cy.visit("/anulaciones"); // Ajusta la URL según la ruta de tu módulo de anulaciones
});

When("visualizo el listado de anulaciones", () => {
  // Aquí solo necesitamos asegurarnos de que la lista se carga correctamente
  cy.get(".lista-anulaciones").should("be.visible"); // Comprobar que el listado es visible
});

Then("debería mostrar todas las anulaciones según los criterios aplicados", () => {
  // Verificar que los resultados en el listado sean correctos según los filtros aplicados
  cy.get(".lista-anulaciones").children().should("have.length.greaterThan", 0); // Asegurarse de que hay anulaciones
});

// Scenario: Comprobar la exportación a Excel del listado de anulaciones
Given("que accedo al módulo Anulaciones", () => {
  cy.visit("/anulaciones"); // Ajusta la URL según la ruta de tu módulo de anulaciones
});

When("exporto el listado de anulaciones a Excel", () => {
  // Aquí se hace clic en el botón de exportación a Excel
  cy.get('button#exportar-excel').click(); // Ajusta el selector del botón de exportar
});

Then("el archivo generado debería contener todos los datos visibles en el listado", () => {
  // Verificar que se haya descargado el archivo
  cy.readFile('cypress/downloads/anulaciones.xlsx').should('exist'); // Verifica que el archivo de Excel existe en la carpeta de descargas
  // Aquí podrías agregar verificaciones adicionales para revisar el contenido del archivo si es necesario
});


