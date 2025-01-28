import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';


Given("que accedo al módulo Herramienta Claves MAC", () => {
  // Navegar al módulo de Herramienta Claves MAC
  cy.visit("https://newfront.lab.solverpay.com/herramienta-claves-mac"); // Ajusta la ruta según tu aplicación
  cy.title().should("eq", "Herramienta Claves MAC"); // Validar el título de la página
});

When("inserto una clave MAC", () => {
  // Llenar el formulario para añadir una clave MAC
  const claveMAC = "AA:BB:CC:DD:EE:FF"; // Ejemplo de clave MAC válida
  cy.get("#campo-clave-mac") // Selector del campo de entrada
    .type(claveMAC)
    .should("have.value", claveMAC); // Validar que el campo contiene la clave ingresada

  // Hacer clic en el botón para añadir la clave
  cy.get("button#btn-agregar-clave").click(); // Ajusta el selector según tu aplicación
});

Then("la clave debería añadirse correctamente y mostrarse en el listado correspondiente", () => {
  // Validar que la clave se ha añadido al listado
  cy.get("table#listado-claves-mac").should("be.visible"); // Validar que el listado está visible
  cy.get("table#listado-claves-mac").contains("AA:BB:CC:DD:EE:FF") // Validar que la clave aparece en el listado
    .should("exist");
});



