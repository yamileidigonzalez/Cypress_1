import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';


// Función general para verificar gráficos
function verificarGrafico(nombreGrafico) {
  cy.get(`.grafico[data-nombre="${nombreGrafico}"]`) // Ajusta el selector según la estructura de tu HTML
    .should("be.visible"); // Verificar que el gráfico sea visible
  cy.get(`.grafico[data-nombre="${nombreGrafico}"]`) // Verificar que no haya errores de renderizado
    .should("not.have.class", "error");
}

function verificarDatosCorrectos(nombreGrafico) {
  cy.get(`.grafico[data-nombre="${nombreGrafico}"]`)
    .should("have.attr", "data-source", "esperada"); // Verificar que el gráfico tiene los datos correctos provenientes de la fuente esperada
}

// Scenario: Visualización del gráfico de ventas últimas horas
Given("que estoy en la página principal", () => {
  cy.visit("/dashboard"); // Ajusta la URL de acuerdo a tu aplicación
});

Then('el gráfico "Ventas últimas horas" debería ser visible', () => {
  verificarGrafico("Ventas últimas horas");
});

Then('debería presentar datos correctos provenientes de la fuente esperada', () => {
  verificarDatosCorrectos("Ventas últimas horas");
});

Then("no debería contener errores de renderizado", () => {
  cy.get('.grafico[data-nombre="Ventas últimas horas"]').should("not.have.class", "error");
});

// Scenario: Visualización del gráfico de denegadas última hora
Then('el gráfico "Denegadas última hora" debería ser visible', () => {
  verificarGrafico("Denegadas última hora");
});

Then('debería presentar datos correctos provenientes de la fuente esperada', () => {
  verificarDatosCorrectos("Denegadas última hora");
});

Then("no debería contener errores de renderizado", () => {
  cy.get('.grafico[data-nombre="Denegadas última hora"]').should("not.have.class", "error");
});

// Scenario: Visualización del gráfico de diferidos última hora
Then('el gráfico "Diferidos última hora" debería ser visible', () => {
  verificarGrafico("Diferidos última hora");
});

Then('debería presentar datos correctos provenientes de la fuente esperada', () => {
  verificarDatosCorrectos("Diferidos última hora");
});

Then("no debería contener errores de renderizado", () => {
  cy.get('.grafico[data-nombre="Diferidos última hora"]').should("not.have.class", "error");
});

// Scenario: Visualización del gráfico de estado del offline forzado
Then('el gráfico "Estado del offline forzado" debería ser visible', () => {
  verificarGrafico("Estado del offline forzado");
});

Then('debería presentar datos correctos provenientes de la fuente esperada', () => {
  verificarDatosCorrectos("Estado del offline forzado");
});

Then("no debería contener errores de renderizado", () => {
  cy.get('.grafico[data-nombre="Estado del offline forzado"]').should("not.have.class", "error");
});

// Scenario: Visualización del gráfico de estado del backup forzado
Then('el gráfico "Estado del backup forzado" debería ser visible', () => {
  verificarGrafico("Estado del backup forzado");
});

Then('debería presentar datos correctos provenientes de la fuente esperada', () => {
  verificarDatosCorrectos("Estado del backup forzado");
});

Then("no debería contener errores de renderizado", () => {
  cy.get('.grafico[data-nombre="Estado del backup forzado"]').should("not.have.class", "error");
});

// Scenario: Visualización del gráfico de estado de las comisiones
Then('el gráfico "Estado de las comisiones" debería ser visible', () => {
  verificarGrafico("Estado de las comisiones");
});

Then('debería presentar datos correctos provenientes de la fuente esperada', () => {
  verificarDatosCorrectos("Estado de las comisiones");
});

Then("no debería contener errores de renderizado", () => {
  cy.get('.grafico[data-nombre="Estado de las comisiones"]').should("not.have.class", "error");
});

// Scenario: Visualización del gráfico de transacciones por tipo
Then('el gráfico "Transacciones por tipo" debería ser visible', () => {
  verificarGrafico("Transacciones por tipo");
});

Then('debería presentar datos correctos provenientes de la fuente esperada', () => {
  verificarDatosCorrectos("Transacciones por tipo");
});

Then("no debería contener errores de renderizado", () => {
  cy.get('.grafico[data-nombre="Transacciones por tipo"]').should("not.have.class", "error");
});

// Scenario: Visualización del gráfico de transacciones por entidad
Then('el gráfico "Transacciones por entidad" debería ser visible', () => {
  verificarGrafico("Transacciones por entidad");
});

Then('debería presentar datos correctos provenientes de la fuente esperada', () => {
  verificarDatosCorrectos("Transacciones por entidad");
});

Then("no debería contener errores de renderizado", () => {
  cy.get('.grafico[data-nombre="Transacciones por entidad"]').should("not.have.class", "error");
});

// Scenario: Visualización del gráfico de transacciones por fechas diario
Then('el gráfico "Transacciones por fechas diario" debería ser visible', () => {
  verificarGrafico("Transacciones por fechas diario");
});

Then('debería presentar datos correctos provenientes de la fuente esperada', () => {
  verificarDatosCorrectos("Transacciones por fechas diario");
});

Then("no debería contener errores de renderizado", () => {
  cy.get('.grafico[data-nombre="Transacciones por fechas diario"]').should("not.have.class", "error");
});

// Scenario: Visualización del gráfico de transacciones por fechas mensual
Then('el gráfico "Transacciones por fechas mensual" debería ser visible', () => {
  verificarGrafico("Transacciones por fechas mensual");
});

Then('debería presentar datos correctos provenientes de la fuente esperada', () => {
  verificarDatosCorrectos("Transacciones por fechas mensual");
});

Then("no debería contener errores de renderizado", () => {
  cy.get('.grafico[data-nombre="Transacciones por fechas mensual"]').should("not.have.class", "error");
});

// Scenario: Visualización del gráfico de importe por fechas diario
Then('el gráfico "Importe por fechas diario" debería ser visible', () => {
  verificarGrafico("Importe por fechas diario");
});

Then('debería presentar datos correctos provenientes de la fuente esperada', () => {
  verificarDatosCorrectos("Importe por fechas diario");
});

Then("no debería contener errores de renderizado", () => {
  cy.get('.grafico[data-nombre="Importe por fechas diario"]').should("not.have.class", "error");
});

// Scenario: Visualización del gráfico de importe por fechas mensual
Then('el gráfico "Importe por fechas mensual" debería ser visible', () => {
  verificarGrafico("Importe por fechas mensual");
});

Then('debería presentar datos correctos provenientes de la fuente esperada', () => {
  verificarDatosCorrectos("Importe por fechas mensual");
});

Then("no debería contener errores de renderizado", () => {
  cy.get('.grafico[data-nombre="Importe por fechas mensual"]').should("not.have.class", "error");
});



