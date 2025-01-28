import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Scenario: Comprobar los filtros en el Histórico de Totales
Given("que accedo al módulo Histórico de Totales", () => {
  // Navegar al módulo de Histórico de Totales
  cy.visit("/historico-totales"); // Ajusta la ruta según tu aplicación
  cy.title().should("eq", "Histórico de Totales"); // Validar el título de la página
});

When("aplico filtros en la lista del histórico", () => {
  // Aplicar filtros en el listado
  cy.get("#filtro-fecha").type("2025-01-01"); // Ejemplo: Filtro por fecha
  cy.get("#filtro-estado").select("Aprobado"); // Ejemplo: Filtro por estado
  cy.get("button#btn-aplicar-filtros").click(); // Hacer clic en el botón para aplicar los filtros
});

Then("los resultados deberían coincidir con los criterios de filtro aplicados", () => {
  // Validar que los resultados coinciden con los filtros aplicados
  cy.get("table#listado-historico tr").each(($row) => {
    cy.wrap($row).within(() => {
      cy.get("td.fecha").invoke("text").should("contain", "2025-01-01");
      cy.get("td.estado").invoke("text").should("contain", "Aprobado");
    });
  });
});

// Scenario: Comprobar el listado del Histórico de Totales
When("visualizo el listado del histórico", () => {
  // Validar que el listado del histórico está visible
  cy.get("table#listado-historico").should("be.visible");
});

Then("debería mostrar todos los totales históricos correctamente", () => {
  // Validar que el listado tiene filas y columnas correctamente
  cy.get("table#listado-historico tr").should("have.length.greaterThan", 1);
  cy.get("table#listado-historico tr").each(($row) => {
    cy.wrap($row).within(() => {
      cy.get("td").should("not.be.empty"); // Validar que las celdas no están vacías
    });
  });
});

// Scenario: Comprobar la exportación a Excel del Histórico de Totales
When("exporto el listado del histórico a Excel", () => {
  // Hacer clic en el botón para exportar a Excel
  cy.get("button#btn-exportar-excel").click();
});

Then("el archivo generado debería contener todos los datos visibles en el listado", () => {
  // Validar que el archivo se descarga correctamente (simulación)
  const filename = "historico-totales.xlsx"; // Nombre esperado del archivo
  cy.readFile(`cypress/downloads/${filename}`).should("exist"); // Verifica que el archivo existe
});

// Scenario: Comprobar la pantalla de visualización de detalle del Histórico de Totales
Given("que selecciono un total del histórico", () => {
  // Seleccionar un total del histórico (ejemplo: la primera fila)
  cy.get("table#listado-historico tr").first().click();
});

When("abro el detalle del total", () => {
  // Validar que se abrió el detalle
  cy.url().should("contain", "/detalle-total"); // Ajustar según la ruta real
});

Then("debería mostrar toda la información relacionada con el total seleccionado", () => {
  // Validar que la información del detalle es visible
  cy.get("#detalle-total").should("be.visible");
  cy.get("#detalle-total").within(() => {
    cy.get(".campo-total").should("not.be.empty"); // Ejemplo de validación de campo
    cy.get(".campo-fecha").should("not.be.empty"); // Ejemplo de validación de campo
  });
});


