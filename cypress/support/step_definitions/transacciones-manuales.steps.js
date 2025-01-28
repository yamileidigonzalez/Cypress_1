import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';


// Scenario: Completar una transacción manual en Virtual POS
Given("que accedo al módulo Transacciones Manuales", () => {
  // Navegar al módulo Transacciones Manuales
  cy.visit("/transacciones-manuales"); // Ajusta la ruta según tu aplicación
  cy.title().should("eq", "Transacciones Manuales"); // Validar el título de la página
});

When("completo una transacción manual en Virtual POS", () => {
  // Simular el ingreso de datos para una transacción manual
  cy.get("#campo-monto").type("100.00"); // Ingresar monto
  cy.get("#campo-moneda").select("USD"); // Seleccionar moneda
  cy.get("#campo-detalles").type("Compra manual en Virtual POS"); // Ingresar detalles
  cy.get("button#btn-confirmar-transaccion").click(); // Confirmar la transacción
});

Then("la transacción debe completarse correctamente sin errores", () => {
  // Validar que la transacción se completó sin errores
  cy.get("#resultado-transaccion").should("be.visible"); // Verificar que el contenedor del resultado aparece
  cy.get("#resultado-transaccion .mensaje-exito").should("contain", "Transacción completada exitosamente"); // Validar mensaje de éxito
});

// Scenario: Comprobar que el ticket corresponde a la transacción
Given("que completo una transacción manual en Virtual POS", () => {
  // Reutilizar el proceso para completar una transacción manual
  cy.visit("/transacciones-manuales"); // Navegar al módulo
  cy.get("#campo-monto").type("100.00"); // Ingresar monto
  cy.get("#campo-moneda").select("USD"); // Seleccionar moneda
  cy.get("#campo-detalles").type("Compra manual en Virtual POS"); // Ingresar detalles
  cy.get("button#btn-confirmar-transaccion").click(); // Confirmar la transacción
  cy.get("#resultado-transaccion .mensaje-exito").should("contain", "Transacción completada exitosamente"); // Validar mensaje de éxito
});

When("imprimo el ticket de la transacción", () => {
  // Simular la impresión del ticket
  cy.get("button#btn-imprimir-ticket").click(); // Hacer clic en el botón para imprimir el ticket
});

Then("el ticket generado debe corresponder con los datos de la transacción realizada", () => {
  // Validar que los datos del ticket corresponden a la transacción
  cy.get("#ticket-impreso").should("be.visible"); // Verificar que el ticket aparece
  cy.get("#ticket-impreso").within(() => {
    cy.get(".monto-ticket").should("contain", "100.00 USD"); // Validar el monto y la moneda
    cy.get(".detalles-ticket").should("contain", "Compra manual en Virtual POS"); // Validar los detalles
  });
});



