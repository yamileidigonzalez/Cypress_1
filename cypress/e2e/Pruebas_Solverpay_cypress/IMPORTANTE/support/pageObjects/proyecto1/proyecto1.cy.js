class Principal{

    visitHome(){ 
        let t= 1000
        beforeEach(() => {
            //cy.visit('https://51.178.137.167/login')
            cy.visit('https://192.168.126.101/login')
            //cy.title().should('be.visible').should("contain",'Inicio de sesión')
            cy.wait(t)
            cy.get(':nth-child(1) > .form-control').should("be.visible").should("be.enabled").type('solverpay')
            //cy.get('.d-flex > .form-control').should("be.visible").should("be.enabled").type('r7auF23wA.A2l1tZ2Dp4{enter}')
            cy.get('.d-flex > .form-control').should("be.visible").should("be.enabled").type('password{enter}') 
        })
    }
    Bancarias(){
        cy.get('.navbar-brand').should("be.visible").click()
        cy.get('div[role="button"][id="navbarDropdown"]').contains('Mantenimientos').click()
        cy.get('ul.dropdown-menu.show').should('be.visible')
        cy.get('ul#banking-submenu').invoke('show').contains('Canales de entidad').click()
    }

    Bancarias_Canal_Entidad(entityId, channelId,transactionNumber,timeDisconnect,host1,host2,host3,port1,port2,port3){
        cy.get('#entity_channel_entityId').should("be.visible",{timeout:5000}).clear().type(entityId)
        cy.get('#entity_channel_transactionNumber').should("be.visible",{timeout:5000}).clear().type(channelId)
        cy.get('#entity_channel_channelId').should("be.visible",{timeout:5000}).clear().type(transactionNumber)
        cy.get('#entity_channel_timeDisconnect').should("be.visible",{timeout:5000}).clear().type(timeDisconnect)
        cy.get('#entity_channel_host1').should("be.visible").clear().type(host1)
        cy.get('#entity_channel_port1').should("be.visible").clear().type(port1)
        cy.get('#entity_channel_host2').should("be.visible").clear().type(host2)
        cy.get('#entity_channel_port2').should("be.visible").click({force: true}).clear().type(port2)
        cy.get('#entity_channel_host3').should("be.visible").clear().type(host3)
        cy.get('#entity_channel_port3').should("be.visible").click({force: true}).clear().type(port3)        
    }
}

export default Principal;