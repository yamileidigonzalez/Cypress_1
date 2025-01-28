import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Scenario: Consultar el estado de la CPU
Given("que accedo al módulo Información del Sistema", () => {
  // Navegar al módulo Información del Sistema
  cy.visit("/informacion-sistema"); // Ajusta la ruta según tu aplicación
  cy.title().should("eq", "Información del Sistema"); // Validar el título de la página
});

When("consulto el estado de la CPU", () => {
  // Simular la consulta del estado de la CPU
  cy.get("button#btn-consultar-cpu").click(); // Hacer clic en el botón para consultar el estado de la CPU
});

Then("la consulta debe completarse correctamente y mostrar el uso actual de la CPU", () => {
  // Validar que los resultados del estado de la CPU se muestran correctamente
  cy.get("#estado-cpu").should("be.visible"); // Verificar que el contenedor del estado de la CPU aparece
  cy.get("#estado-cpu").within(() => {
    cy.get(".uso-cpu").should("not.be.empty"); // Validar que se muestra el uso actual de la CPU
    cy.get(".uso-cpu").invoke("text").then((usoCpu) => {
      const uso = parseFloat(usoCpu.replace("%", "").trim());
      expect(uso).to.be.gte(0).and.lte(100); // Validar que el uso está entre 0% y 100%
    });
  });
});

// Scenario: Consultar el estado del disco
When("consulto el estado del disco", () => {
  // Simular la consulta del estado del disco
  cy.get("button#btn-consultar-disco").click(); // Hacer clic en el botón para consultar el estado del disco
});

Then("la consulta debe completarse correctamente y mostrar el uso actual del disco", () => {
  // Validar que los resultados del estado del disco se muestran correctamente
  cy.get("#estado-disco").should("be.visible"); // Verificar que el contenedor del estado del disco aparece
  cy.get("#estado-disco").within(() => {
    cy.get(".uso-disco").should("not.be.empty"); // Validar que se muestra el uso actual del disco
    cy.get(".uso-disco").invoke("text").then((usoDisco) => {
      const uso = parseFloat(usoDisco.replace("%", "").trim());
      expect(uso).to.be.gte(0).and.lte(100); // Validar que el uso está entre 0% y 100%
    });
  });
});

