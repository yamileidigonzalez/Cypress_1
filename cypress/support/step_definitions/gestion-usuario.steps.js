import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';


// Scenario: Cambiar la contraseña del usuario
Given("que accedo a la sección de perfil del usuario", () => {
  // Simular que el usuario accede a su perfil
  cy.visit("/perfil"); // Ruta del perfil del usuario
  cy.url().should("include", "/perfil"); // Validar que se está en la página del perfil
});

When("cambio mi contraseña", () => {
  // Simular el cambio de contraseña
  cy.get("input#current-password").type("contraseñaActual123"); // Ingresar la contraseña actual
  cy.get("input#new-password").type("nuevaContraseña123"); // Ingresar la nueva contraseña
  cy.get("input#confirm-password").type("nuevaContraseña123"); // Confirmar la nueva contraseña
  cy.get("button#btn-cambiar-contraseña").click(); // Hacer clic en el botón para cambiar la contraseña
});

Then("la contraseña debe actualizarse correctamente y recibo una confirmación de éxito", () => {
  // Validar que la contraseña se haya actualizado y mostrar mensaje de éxito
  cy.get("#mensaje-exito").should("contain", "Contraseña actualizada exitosamente"); // Validar el mensaje de éxito
});

// Scenario: Cambiar el idioma de las preferencias
Given("que accedo a la sección de preferencias del usuario", () => {
  // Simular que el usuario accede a las preferencias
  cy.visit("/preferencias"); // Ruta de preferencias
  cy.url().should("include", "/preferencias"); // Validar que estamos en la página de preferencias
});

When("cambio el idioma a otro disponible", () => {
  // Simular el cambio de idioma
  cy.get("select#idioma").select("Español"); // Cambiar el idioma a español desde el selector de idiomas
});

Then("el idioma debe actualizarse correctamente en toda la interfaz", () => {
  // Verificar que la interfaz ha cambiado al idioma seleccionado
  cy.get("button#btn-logout").should("contain", "Cerrar sesión"); // Verificar que el texto del botón de cerrar sesión está en español
});


