import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Scenario: Comprobar los filtros en Transacciones Offline Denegadas
Given("que accedo al módulo Transacciones Offline Denegadas", () => {
  cy.visit("/transacciones-offline-denegadas"); // Ajusta la URL según la ruta de tu módulo
});

When("aplico filtros en la lista de transacciones offline denegadas", () => {
  // Aquí se aplican los filtros
  cy.get('input[name="filtro-fecha-inicio"]').type("2025-01-01"); // Filtro por fecha de inicio
  cy.get('input[name="filtro-fecha-fin"]').type("2025-01-31"); // Filtro por fecha de fin
  cy.get('select[name="filtro-estado"]').select("Denegada"); // Filtro por estado "Denegada"
  cy.get('button[type="submit"]').click(); // Aplicar los filtros
});

Then("los resultados deberían coincidir con los criterios de filtro aplicados", () => {
  // Verificar que los resultados coinciden con los criterios
  cy.get(".resultado-transacciones").should("contain.text", "2025-01-01").and("contain.text", "2025-01-31");
  cy.get(".resultado-transacciones").each(($el) => {
    cy.wrap($el).should("contain.text", "Denegada"); // Asegura que todos los resultados sean denegados
  });
});

// Scenario: Comprobar el listado de Transacciones Offline Denegadas
Given("que accedo al módulo Transacciones Offline Denegadas", () => {
  cy.visit("/transacciones-offline-denegadas"); // Ajusta la URL según la ruta de tu módulo
});

When("visualizo el listado de transacciones offline denegadas", () => {
  // Verificar que el listado de transacciones se muestra
  cy.get(".lista-transacciones").should("be.visible"); // Verificar que el listado está visible
});

Then("debería mostrar todas las transacciones según los criterios aplicados", () => {
  // Verificar que las transacciones son correctas
  cy.get(".lista-transacciones")
    .should("have.length.greaterThan", 0); // Asegura que hay al menos una transacción
  cy.get(".lista-transacciones").each(($el) => {
    cy.wrap($el).should("contain.text", "Denegada"); // Verificar que las transacciones son denegadas
  });
});

// Scenario: Comprobar la exportación a Excel de Transacciones Offline Denegadas
Given("que accedo al módulo Transacciones Offline Denegadas", () => {
  cy.visit("/transacciones-offline-denegadas"); // Ajusta la URL según la ruta de tu módulo
});

When("exporto el listado de transacciones offline denegadas a Excel", () => {
  // Hacer clic en el botón de exportación
  cy.get(".boton-exportar").click();
});

Then("el archivo generado debería contener todos los datos visibles en el listado", () => {
  // Verificar que el archivo de Excel contiene los datos correctos
  cy.readFile("cypress/downloads/transacciones_offline_denegadas.xlsx").should("exist"); // Verificar que el archivo existe
  // Aquí podrías usar un paquete adicional para leer los contenidos del archivo Excel si es necesario
  // Verificar que los datos dentro del archivo Excel corresponden a las transacciones visibles
});

// Scenario: Volver a procesar las operaciones denegadas
Given("que accedo al módulo Transacciones Offline Denegadas", () => {
  cy.visit("/transacciones-offline-denegadas"); // Ajusta la URL según la ruta de tu módulo
});

When("selecciono operaciones para volver a procesar", () => {
  // Seleccionar las operaciones para procesar
  cy.get(".checkbox-seleccionar-todas").check(); // Seleccionar todas las transacciones en la lista
  cy.get('button[name="procesar"]').click(); // Hacer clic en el botón para volver a procesar
});

Then("las operaciones seleccionadas deberían ser procesadas nuevamente sin errores", () => {
  // Verificar que las operaciones fueron procesadas nuevamente
  cy.get(".mensaje-exito").should("be.visible").and("contain.text", "Operaciones procesadas correctamente");
  // Verificar que las transacciones procesadas ya no estén en el listado de "offline denegadas"
  cy.get(".lista-transacciones").should("not.contain.text", "Denegada");
});


