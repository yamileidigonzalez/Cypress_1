import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';


// Scenario: Comprobar los filtros en Transacciones
Given("que accedo al módulo Transacciones", () => {
  cy.visit("/transacciones"); // Ajusta la URL según la ruta de tu módulo
});

When("aplico filtros en la lista de transacciones", () => {
  // Aplicando filtros, como fecha de inicio, fecha de fin y estado
  cy.get('input[name="filtro-fecha-inicio"]').type("2025-01-01"); // Filtro por fecha de inicio
  cy.get('input[name="filtro-fecha-fin"]').type("2025-01-31"); // Filtro por fecha de fin
  cy.get('select[name="filtro-estado"]').select("Completada"); // Filtro por estado "Completada"
  cy.get('button[type="submit"]').click(); // Aplicar los filtros
});

Then("los resultados deberían coincidir con los criterios de filtro aplicados", () => {
  // Verifica que los resultados coinciden con los filtros aplicados
  cy.get(".resultado-transacciones").should("contain.text", "2025-01-01").and("contain.text", "2025-01-31");
  cy.get(".resultado-transacciones").each(($el) => {
    cy.wrap($el).should("contain.text", "Completada"); // Verificar que las transacciones están completadas
  });
});

// Scenario: Comprobar el listado de Transacciones
Given("que accedo al módulo Transacciones", () => {
  cy.visit("/transacciones"); // Ajusta la URL según la ruta de tu módulo
});

When("visualizo el listado de transacciones", () => {
  // Verificar que el listado de transacciones se muestra
  cy.get(".lista-transacciones").should("be.visible"); // Asegura que el listado esté visible
});

Then("debería mostrar todas las transacciones según los criterios aplicados", () => {
  // Verifica que las transacciones mostradas coinciden con los criterios aplicados
  cy.get(".lista-transacciones")
    .should("have.length.greaterThan", 0); // Verifica que el listado no está vacío
  cy.get(".lista-transacciones").each(($el) => {
    cy.wrap($el).should("contain.text", "Completada"); // Asegura que todas las transacciones están "Completadas"
  });
});

// Scenario: Comprobar la exportación a Excel del listado de operaciones
Given("que accedo al módulo Transacciones", () => {
  cy.visit("/transacciones"); // Ajusta la URL según la ruta de tu módulo
});

When("exporto el listado de transacciones a Excel", () => {
  // Hacer clic en el botón de exportación
  cy.get(".boton-exportar").click(); 
});

Then("el archivo generado debería contener todos los datos visibles en el listado", () => {
  // Verificar que el archivo de Excel contiene los datos correctos
  cy.readFile("cypress/downloads/transacciones.xlsx").should("exist"); // Verifica que el archivo se haya descargado
  // Puedes usar librerías adicionales para verificar el contenido de archivos Excel si es necesario
});

// Scenario: Comprobar la visualización de detalle de operaciones
Given("que selecciono una transacción del listado", () => {
  cy.visit("/transacciones"); // Ajusta la URL según la ruta de tu módulo
  // Seleccionamos una transacción del listado
  cy.get(".lista-transacciones").first().click(); // O ajusta el selector según el elemento que deseas seleccionar
});

When("abro el detalle de la transacción", () => {
  // Verifica que el detalle de la transacción se muestre
  cy.get(".detalle-transaccion").should("be.visible");
});

Then("debería mostrar toda la información relacionada con la operación seleccionada", () => {
  // Verifica que toda la información esperada esté visible
  cy.get(".detalle-transaccion").should("contain.text", "Fecha");
  cy.get(".detalle-transaccion").should("contain.text", "Estado");
  cy.get(".detalle-transaccion").should("contain.text", "Monto");
  // Añade más validaciones según la estructura de la transacción
});
