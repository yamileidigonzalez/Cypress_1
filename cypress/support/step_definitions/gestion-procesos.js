import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';


// Scenario: Relanzar procesos
Given("que accedo al módulo Gestión de Procesos", () => {
  // Navegar al módulo Gestión de Procesos
  cy.visit("/gestion-procesos"); // Ajusta la ruta según tu aplicación
  cy.title().should("eq", "Gestión de Procesos"); // Validar el título de la página
});

When("ejecuto el relanzado de procesos", () => {
  // Simular el relanzado de procesos
  cy.get("button#btn-relanzar-procesos").click(); // Hacer clic en el botón para relanzar procesos
});

Then("el relanzado debe completarse correctamente y mostrar los resultados esperados", () => {
  // Validar que el relanzado se completó
  cy.get("#resultado-relanzado").should("be.visible"); // Verificar que el contenedor de resultados aparece
  cy.get("#resultado-relanzado").within(() => {
    cy.get(".mensaje-exito").should("contain", "Procesos relanzados exitosamente"); // Validar mensaje de éxito
  });
});

// Scenario: Consultar el estado de procesos
When("consulto el estado de procesos", () => {
  // Consultar el estado de los procesos
  cy.get("button#btn-consultar-estados").click(); // Hacer clic en el botón para consultar estados
});

Then("la consulta debe completarse correctamente y mostrar el estado actual de los procesos", () => {
  // Validar que la consulta muestra los estados actuales
  cy.get("#listado-estados-procesos").should("be.visible"); // Verificar que el listado de estados aparece
  cy.get("#listado-estados-procesos tr").should("have.length.greaterThan", 0); // Validar que hay resultados
  cy.get("#listado-estados-procesos tr").each(($row) => {
    cy.wrap($row).within(() => {
      cy.get("td").should("not.be.empty"); // Verificar que las celdas no están vacías
    });
  });
});



