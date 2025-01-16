import Principal from '../../support/pageObjects/proyecto1/proyecto1.cy'
/// <reference types='Cypress' />

describe('Page Objects Models', () => { 

    const obj = new Principal()    
    obj.visitHome()
    let t=1000
    /*
    Cypress.on('uncaught:exception', (err,runnable) => {
        return false //algo de tratamiento de error
    })
    */
    /*
    before(function(){
        cy.fixture("Canales_entidad").then(function(data){
            //this.data=data
            globalThis.data=data //va con el test 5
        })              
    })
    */
    /*
    before(function(){
        cy.fixture("Canales_entidad").as("EntityId") //el alias (va con el test 6)        
    })
    */
    it.only('test 0', () => {
        //Para ingresar un grupo de datos
        cy.fixture("Canales_entidad").then(tesdata=>{
            tesdata.forEach(data => {
                const d_entityId=data.entityId
                const d_transactionNumber=data.transactionNumber
                const d_channelId=data.channelId
                const d_timeDisconnect=data.timeDisconnect
                const d_host1=data.host1
                const d_port1=data.port1

                //Direccion en la Web
                obj.Bancarias()
                cy.get('div[role="button"][id="navbarDropdown"]').contains('Mantenimientos').click()
                cy.get('ul.dropdown-menu.show').should('be.visible')
                cy.get('ul#banking-submenu').invoke('show').contains('Canales de entidad').click()
                cy.Añadir('#add_data', t)
                cy.wait(t)
                //Ingresamos los datos
                cy.get('#entity_channel_entityId').should("be.visible").clear().type(d_entityId)
                cy.get('#entity_channel_transactionNumber').should("be.visible",{timeout:5000}).clear().type(d_transactionNumber)
                cy.get('#entity_channel_channelId').should("be.visible",{timeout:5000}).clear().type(d_channelId)
                cy.get('#entity_channel_timeDisconnect').should("be.visible",{timeout:5000}).clear().type(d_timeDisconnect)
                cy.get('#entity_channel_host1').should("be.visible").clear().type(d_host1)
                cy.get('#entity_channel_port1').should("be.visible").clear().type(d_port1)        
                //Boton de guardar y cancelar confirmacion
                cy.Guardar_Cancelar('#submit-button','#modal_add_ok > .modal-dialog > .modal-content > .modal-header > .btn-close',t)        

            })   
        })
            
     
    })       
    
    it('test 1', () => {
        obj.Bancarias()
        cy.Añadir('#add_data', t)
        obj.Bancarias_Canal_Entidad('10','10','10','10','host11','host12','host13','10','11','12')         
        cy.Click_Botón('#submit-button',t)
        cy.screenshort('click')
        cy.Click_Botón('#modal_add_ok > .modal-dialog > .modal-content > .modal-footer > .btn', t)
        cy.screenshort('click2')
   
    })
    it('test 2', () => {
        obj.Bancarias()
        cy.get('div[role="button"][id="navbarDropdown"]').contains('Mantenimientos').click()
        cy.get('ul.dropdown-menu.show').should('be.visible')
        cy.get('ul#banking-submenu').invoke('show').contains('Canales de entidad').click()
        cy.Añadir('#add_data', t)
        obj.Bancarias_Canal_Entidad('11','11','11','12','host111','host112','host113','110','111','112')         
        cy.Guardar_Confirmar('#submit-button','#modal_add_ok > .modal-dialog > .modal-content > .modal-footer > .btn',t)
    })
    it('test 3', () => {
        obj.Bancarias()
        cy.get('div[role="button"][id="navbarDropdown"]').contains('Mantenimientos').click()
        cy.get('ul.dropdown-menu.show').should('be.visible')
        cy.get('ul#banking-submenu').invoke('show').contains('Canales de entidad').click()
        cy.Añadir('#add_data', t)
        obj.Bancarias_Canal_Entidad('12','12','12','12','host121','host122','host123','120','121','122')         
        cy.Guardar_Cancelar('#submit-button','#modal_add_ok > .modal-dialog > .modal-content > .modal-header > .btn-close',t)
    })
    it('test 4', () => {
        obj.Bancarias()
        cy.get('div[role="button"][id="navbarDropdown"]').contains('Mantenimientos').click()
        cy.get('ul.dropdown-menu.show').should('be.visible')
        cy.get('ul#banking-submenu').invoke('show').contains('Canales de entidad').click()
        cy.Añadir('#add_data', t)
        obj.Bancarias_Canal_Entidad('12','12','12','12','host121','host122','host123','120','121','122')         
        cy.Volver('.mt-3 > :nth-child(2) > .btn',t)

    })
    it('test 5', () => {
        obj.Bancarias()
        cy.get('div[role="button"][id="navbarDropdown"]').contains('Mantenimientos').click()
        cy.get('ul.dropdown-menu.show').should('be.visible')
        cy.get('ul#banking-submenu').invoke('show').contains('Canales de entidad').click()
        cy.Añadir('#add_data', t)
        cy.wait(t)
        cy.get('#entity_channel_entityId').should("be.visible").clear().type(data.entityId)
        cy.get('#entity_channel_transactionNumber').should("be.visible",{timeout:5000}).clear().type(data.transactionNumber)
        cy.get('#entity_channel_channelId').should("be.visible",{timeout:5000}).clear().type(data.channelId)
        cy.get('#entity_channel_timeDisconnect').should("be.visible",{timeout:5000}).clear().type(data.timeDisconnect)
        cy.get('#entity_channel_host1').should("be.visible").clear().type(data.host1)
        cy.get('#entity_channel_port1').should("be.visible").clear().type(data.port1)        
        cy.Guardar_Cancelar('#submit-button','#modal_add_ok > .modal-dialog > .modal-content > .modal-header > .btn-close',t)

    })
    it('test 6', () => {
        obj.Bancarias()
        cy.get('div[role="button"][id="navbarDropdown"]').contains('Mantenimientos').click()
        cy.get('ul.dropdown-menu.show').should('be.visible')
        cy.get('ul#banking-submenu').invoke('show').contains('Canales de entidad').click()
        cy.Añadir('#add_data', t)
        cy.wait(t)
        cy.get("EntityId").then((data)=>{
            cy.get('#entity_channel_entityId').should("be.visible").clear().type(data.entityId)
            cy.get('#entity_channel_transactionNumber').should("be.visible",{timeout:5000}).clear().type(data.transactionNumber)
            cy.get('#entity_channel_channelId').should("be.visible",{timeout:5000}).clear().type(data.channelId)
            cy.get('#entity_channel_timeDisconnect').should("be.visible",{timeout:5000}).clear().type(data.timeDisconnect)
            cy.get('#entity_channel_host1').should("be.visible").clear().type(data.host1)
            cy.get('#entity_channel_port1').should("be.visible").clear().type(data.port1)        
            cy.Guardar_Cancelar('#submit-button','#modal_add_ok > .modal-dialog > .modal-content > .modal-header > .btn-close',t)            
        })
        

    })
})