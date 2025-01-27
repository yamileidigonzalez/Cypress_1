import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Scenario Outline: Probar CRUD para <entidad>
Given("que estoy autenticado como administrador", () => {
  // Simular autenticación como administrador
  cy.visit("/login"); // Ruta de inicio de sesión
  cy.get("#username").type("admin"); // Ingresar usuario
  cy.get("#password").type("admin123"); // Ingresar contraseña
  cy.get("button#btn-login").click(); // Hacer clic en el botón de inicio de sesión
  cy.url().should("eq", "http://localhost:3000/dashboard"); // Validar que se redirige al dashboard
});

When("accedo al módulo Base y selecciono la entidad {string}", (entidad) => {
  // Navegar al módulo Base y seleccionar la entidad
  cy.visit("/base"); // Ruta del módulo Base
  cy.get(`button#btn-${entidad.toLowerCase().replace(/\s+/g, '-')}`).click(); // Hacer clic en la entidad usando un ID dinámico
});

Then("debería poder crear un nuevo registro correctamente", () => {
  // Simular el proceso de creación de un nuevo registro
  cy.get("button#btn-nuevo-registro").click(); // Hacer clic en el botón para crear un nuevo registro
  cy.get("input#campo-nombre").type("Nuevo Registro Base"); // Ingresar un nombre para el nuevo registro
  cy.get("button#btn-guardar").click(); // Guardar el nuevo registro
  cy.get("#mensaje-exito").should("contain", "Registro creado exitosamente"); // Validar mensaje de éxito
});

Then("debería poder visualizar los registros existentes", () => {
  // Verificar que se visualizan los registros existentes
  cy.get("#listado-registros").should("be.visible"); // Verificar que el listado de registros se muestra
  cy.get("#listado-registros tr").should("have.length.greaterThan", 0); // Validar que hay al menos un registro
});

Then("debería poder actualizar un registro correctamente", () => {
  // Simular el proceso de actualización de un registro
  cy.get("button#btn-editar-registro").first().click(); // Hacer clic en el primer registro para editar
  cy.get("input#campo-nombre").clear().type("Registro Actualizado Base"); // Modificar el nombre
  cy.get("button#btn-guardar").click(); // Guardar los cambios
  cy.get("#mensaje-exito").should("contain", "Registro actualizado exitosamente"); // Validar mensaje de éxito
});

Then("debería poder eliminar un registro correctamente", () => {
  // Simular el proceso de eliminación de un registro
  cy.get("button#btn-eliminar-registro").first().click(); // Hacer clic en el primer registro para eliminar
  cy.get("button#btn-confirmar-eliminar").click(); // Confirmar la eliminación
  cy.get("#mensaje-exito").should("contain", "Registro eliminado exitosamente"); // Validar mensaje de éxito
});

