import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';


Given("que accedo al módulo Petición de Totales", () => {
  // Navegar al módulo de Petición de Totales
  cy.visit("/peticion-totales"); // Ajusta la ruta según tu aplicación
  cy.title().should("eq", "Petición de Totales"); // Validar el título de la página
});

When("realizo una petición de totales", () => {
  // Realizar la acción para enviar una petición de totales
  cy.get("#campo-fecha").type("2025-01-01"); // Seleccionar fecha (ajusta el selector)
  cy.get("#campo-estado").select("Aprobado"); // Seleccionar estado (ajusta el selector)
  cy.get("button#btn-enviar-peticion").click(); // Hacer clic en el botón para enviar la petición
});

Then("la petición debería completarse correctamente y mostrar los resultados esperados", () => {
  // Validar que los resultados de la petición son visibles y correctos
  cy.get("#resultados-peticion").should("be.visible"); // Validar que el contenedor de resultados está visible
  cy.get("#resultados-peticion tr").should("have.length.greaterThan", 0); // Validar que hay al menos un resultado
  cy.get("#resultados-peticion tr").each(($row) => {
    cy.wrap($row).within(() => {
      // Validar que las celdas tienen datos (como ejemplo)
      cy.get("td").eq(0).should("not.be.empty"); // Ejemplo: Columna de fecha
      cy.get("td").eq(1).should("not.be.empty"); // Ejemplo: Columna de estado
    });
  });
});


