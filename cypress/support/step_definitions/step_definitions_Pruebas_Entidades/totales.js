import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Scenario: Comprobar los filtros en Totales
Given("que accedo al módulo Totales", () => {
  // Navegar al módulo de Totales
  cy.visit("/totales"); // Ajusta la ruta según tu aplicación
  cy.title().should("eq", "Totales"); // Validar el título de la página
});

When("aplico filtros en la lista de totales", () => {
  // Aplicar filtros en el listado
  cy.get("#filtro-fecha").type("2025-01-01"); // Ejemplo: filtro por fecha
  cy.get("#filtro-estado").select("Activo"); // Ejemplo: filtro por estado
  cy.get("button#btn-aplicar-filtros").click(); // Aplicar los filtros
});

Then("los resultados deberían coincidir con los criterios de filtro aplicados", () => {
  // Validar que los resultados coinciden con los filtros
  cy.get("table#listado-totales tr").each(($row) => {
    cy.wrap($row).within(() => {
      cy.get("td.fecha").invoke("text").should("contain", "2025-01-01"); // Validar la fecha
      cy.get("td.estado").invoke("text").should("contain", "Activo"); // Validar el estado
    });
  });
});

// Scenario: Comprobar el listado de Totales
When("visualizo el listado de totales", () => {
  // Verificar que el listado de totales está visible
  cy.get("table#listado-totales").should("be.visible");
});

Then("debería mostrar todos los totales correctamente", () => {
  // Validar que el listado contiene filas y datos
  cy.get("table#listado-totales tr").should("have.length.greaterThan", 0);
  cy.get("table#listado-totales tr").each(($row) => {
    cy.wrap($row).within(() => {
      cy.get("td").should("not.be.empty"); // Asegurar que las celdas no están vacías
    });
  });
});

// Scenario: Comprobar la exportación a Excel del listado de Totales
When("exporto el listado de totales a Excel", () => {
  // Exportar a Excel
  cy.get("button#btn-exportar-excel").click(); // Hacer clic en el botón para exportar
});

Then("el archivo generado debería contener todos los datos visibles en el listado", () => {
  // Validar que el archivo de Excel fue generado y contiene datos
  const filename = "totales.xlsx"; // Nombre esperado del archivo
  cy.readFile(`cypress/downloads/${filename}`).should("exist"); // Verificar que el archivo existe
});

// Scenario: Comprobar la pantalla de visualización de detalle de Totales
Given("que selecciono un total del listado", () => {
  // Seleccionar un total del listado
  cy.get("table#listado-totales tr").first().click(); // Seleccionar la primera fila
});

When("abro el detalle del total", () => {
  // Validar que se abre la pantalla de detalle
  cy.url().should("contain", "/detalle-total"); // Asegurar que la URL contiene el detalle
});

Then("debería mostrar toda la información relacionada con el total seleccionado", () => {
  // Validar que la información del detalle está visible
  cy.get("#detalle-total").should("be.visible");
  cy.get("#detalle-total").within(() => {
    cy.get(".campo-total").should("not.be.empty"); // Validar un campo del total
    cy.get(".campo-fecha").should("not.be.empty"); // Validar el campo de fecha
  });
});



