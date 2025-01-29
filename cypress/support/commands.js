// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login", (username, password) => {
    cy.visit("/logins");
    cy.get("#user").type(username);
    cy.get("#password").type(password);
    cy.get(".mt-2").click();
  });

Cypress.Commands.add('Texto', (selector, texto, t) => { 
    cy.get(selector).should('be.visible').type(texto)
    cy.wait(t)    
})

Cypress.Commands.add('Click_Botón', (selector, t) => { 
    cy.get(selector).should('be.visible').click({force:true})
    cy.wait(t)
})

Cypress.Commands.add('Combo', (selector, valor, t) => { 
    cy.get(selector).select(valor,{force:true})
    cy.wait(t)
})

Cypress.Commands.add('Añadir', (selector_añadir, t) => {
    //boton anadir
    cy.get(selector_añadir).should("be.visible").click().wait(t)               
})

Cypress.Commands.add('Guardar_Confirmar', (selector_guardar,selector_confirmar, t) => {
    //guardar 
    cy.get(selector_guardar).should("be.visible").click().wait(t)
    //confirmar
    cy.get(selector_confirmar).click().wait(t)  
})

Cypress.Commands.add('Guardar_Cancelar', (selector_guardar,selector_cancel, t) => {
    //guardar 
    cy.get(selector_guardar).should("be.visible").click().wait(t)
    //cancelar
    cy.get(selector_cancel).click().wait(t)
})

Cypress.Commands.add('Volver', (selector_volver, t) => {
    //volver
    cy.get(selector_volver).click().wait(t)            
})

Cypress.Commands.add('Validar_campo', (selector, men, nombre_campo, selector_volver, t) => { 
    cy.get(selector).should('be.visible').should("contain",men).then((val)=>{
        cy.log("El valor de" + nombre_campo + "no es valido")
        //volver
        cy.get(selector_volver).click().wait(t) 
    })   
})

Cypress.Commands.add('Busqueda', (selector, valor, t) => { 
    cy.get(selector).should("be.visible").clear().type(valor).wait(t)
})