import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que accedo al módulo Gestión de Sesiones", () => {
  // Navegar al módulo de Gestión de Sesiones
  cy.visit("/gestion-sesiones"); // Ajusta la ruta según tu aplicación
  cy.title().should("eq", "Gestión de Sesiones"); // Validar el título de la página
});

When("visualizo el listado de sesiones abiertas", () => {
  // Validar que el listado de sesiones está visible
  cy.get("table#listado-sesiones").should("be.visible");
});

Then("debería mostrar todas las sesiones abiertas y su estado correctamente", () => {
  // Validar que las sesiones están correctamente listadas
  cy.get("table#listado-sesiones tr").should("have.length.greaterThan", 1); // Validar que hay al menos una fila
  cy.get("table#listado-sesiones tr").each(($row) => {
    cy.wrap($row).within(() => {
      // Validar que cada fila tiene columnas con información
      cy.get("td").eq(1).invoke("text").should("not.be.empty"); // Validar que la columna "Estado" no esté vacía
    });
  });
});

When("realizo una petición de totales desde una sesión", () => {
  // Hacer clic en un botón o realizar la acción para solicitar los totales
  cy.get("button#peticion-totales").click(); // Ajusta el selector según el elemento real
});

Then("la petición debería completarse correctamente y mostrar los resultados esperados", () => {
  // Validar que los resultados de la petición aparecen correctamente
  cy.get("#resultado-totales").should("be.visible"); // Validar que los resultados son visibles
  cy.get("#resultado-totales").invoke("text").should("match", /\d+/); // Validar que contiene un número (como ejemplo)
});


