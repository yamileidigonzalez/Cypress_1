import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';


// Scenario: Comprobar el formulario con una venta aceptada
Given("que accedo al módulo Transacciones Manuales", () => {
  cy.visit("/transacciones-manuales"); // Ajusta la URL según la ruta de tu módulo de transacciones manuales
});

When("ingreso los datos de una venta aceptada", () => {
  // Aquí se ingresan los datos correspondientes a una venta aceptada
  cy.get('input[name="monto"]').type("1000"); // Ingresar el monto de la venta
  cy.get('input[name="tarjeta"]').type("4111111111111111"); // Número de tarjeta
  cy.get('select[name="estado"]').select("Aceptada"); // Seleccionar el estado "Aceptada"
  cy.get('button[type="submit"]').click(); // Enviar el formulario
});

Then("el formulario debería validar y guardar los datos correctamente", () => {
  // Comprobar que el formulario se validó y guardó correctamente
  cy.get(".mensaje-exito").should("be.visible").and("contain.text", "Venta aceptada guardada correctamente");
  // Verificar que la venta aparece en el listado de transacciones
  cy.get(".lista-transacciones").should("contain.text", "1000").and("contain.text", "Aceptada");
});

// Scenario: Comprobar el formulario con una venta denegada
Given("que accedo al módulo Transacciones Manuales", () => {
  cy.visit("/transacciones-manuales"); // Ajusta la URL según la ruta de tu módulo de transacciones manuales
});

When("ingreso los datos de una venta denegada", () => {
  // Aquí se ingresan los datos correspondientes a una venta denegada
  cy.get('input[name="monto"]').type("500"); // Ingresar el monto de la venta
  cy.get('input[name="tarjeta"]').type("5500000000000000"); // Número de tarjeta
  cy.get('select[name="estado"]').select("Denegada"); // Seleccionar el estado "Denegada"
  cy.get('button[type="submit"]').click(); // Enviar el formulario
});

Then("el formulario debería validar y guardar los datos correctamente", () => {
  // Comprobar que el formulario se validó y guardó correctamente
  cy.get(".mensaje-exito").should("be.visible").and("contain.text", "Venta denegada guardada correctamente");
  // Verificar que la venta aparece en el listado de transacciones
  cy.get(".lista-transacciones").should("contain.text", "500").and("contain.text", "Denegada");
});

// Scenario: Comprobar la visualización de detalle de operaciones
Given("que selecciono una operación manual del listado", () => {
  cy.get(".lista-transacciones").first().click(); // Seleccionar la primera transacción en el listado
});

When("abro el detalle de la operación", () => {
  cy.get(".detalle-operacion").should("be.visible"); // Verificar que el detalle se muestra
});

Then("debería mostrar toda la información relacionada con la operación seleccionada", () => {
  // Verificar que los detalles de la transacción están presentes
  cy.get(".detalle-operacion").should("contain.text", "Monto");
  cy.get(".detalle-operacion").should("contain.text", "Tarjeta");
  cy.get(".detalle-operacion").should("contain.text", "Estado");
});
