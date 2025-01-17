const { CUSTOM_ELEMENTS_SCHEMA } = require("@angular/core");
describe('Comandos personalizados', () => { 
    let tiempo= 1000
    before(() => {
        cy.log('Principio de todo')
        cy.visit('https://51.178.137.167/login')
        cy.url().should("include", "login")
        //cy.title().should('eq','Inicio de sesión')
        cy.wait(tiempo)
    })
    beforeEach(() => {
        cy.log('Esto se repite en cada uno de los test muy importantes')
        cy.get(':nth-child(1) > .form-control').type('solverpay')
        cy.get('.d-flex > .form-control').type('r7auF23wA.A2l1tZ2Dp4')
        cy.get('.btn').click()
        cy.wait(tiempo)
    })
    it.only('Demo 1', ()=>{  
        cy.title().should('eq',"Panel de control")        
        //Cuenta 
        cy.get('div.dropdown > .btn').click() 

        //Preferencias 
        cy.get(':nth-child(3) > #link').click()

        //Cambiar idioma de ES --> EN
        cy.Combo('#preferences_preferences_0_value','Inglés', 1000)
        // cy.Combo('#preferences_preferences_0_value','English', 1000)
        
        //Cerrar sesion
        cy.get('#submit-button').click().wait(3000)
        //Cancelar
        cy.get('#modal_save_changes > .modal-dialog > .modal-content > .modal-header > .btn-close').click().wait(3000)
        //Cuenta 
        cy.get('div.dropdown > .btn').click() 
        //Cierre secion
        cy.get(':nth-child(5) > #link').click()

        //Llama las funcion que esta en support/commands.js
        cy.Texto(':nth-child(1) > .form-control',"solverpay",1000)
        cy.Texto('.d-flex > .form-control','r7auF23wA.A2l1tZ2Dp4',1000)
        //Click en guardar
        cy.get('.checkbox-wrap').click()        
        //limpiar
        cy.get(':nth-child(1) > .form-control').should("be.visible").clear()
        cy.Texto(':nth-child(1) > .form-control',"solverpay",1000)

        cy.Click('.btn',1000)
        
        //Comprobar nombre pagina inicio EN
        cy.title().should('eq',"Dashboard")
        //Cuenta 
        cy.get('div.dropdown > .btn').click() 

        //Preferencias 
        cy.get(':nth-child(3) > #link').click()
       
        //Cambiar idioma ES --> EN
        cy.Combo('#preferences_preferences_0_value','Spanish', 1000)
        //cy.Combo('#preferences_preferences_0_value','Español', 1000)
   
        //Cerrar sesion
        cy.get('#submit-button').click().wait(3000)
        //Confirmar cierre
        cy.get('#modal_save_changes > .modal-dialog > .modal-content > .modal-footer > .btn').click().wait(3000)

        //Cuenta 
        cy.get('div.dropdown > .btn').click() 
        //Cierre secion
        cy.get(':nth-child(5) > #link').click()

        //Llama la funcion que esta en support/commands.js
        cy.Texto(':nth-child(1) > .form-control',"solverpay",1000)
        cy.Texto('.d-flex > .form-control','r7auF23wA.A2l1tZ2Dp4',1000)

        //Click en guardar
        cy.get('.checkbox-wrap').click()
        
        //limpiar
        cy.get(':nth-child(1) > .form-control').should("be.visible").clear()
        cy.Texto(':nth-child(1) > .form-control',"solverpay",1000)

        cy.Click('.btn',1000)
            
    })   
      
    afterEach(() => {
        cy.log('Esto se hace al final de todos los test')
        cy.wait(tiempo)
    })
    after(() => {
        cy.log('Ultimo ciclo - Final de todo')
        cy.log('Log de todas las pruebas')
        cy.wait(tiempo)
    })
})