const { CUSTOM_ELEMENTS_SCHEMA } = require("@angular/core");

describe('template spec', () => {
    it('Coordenadas (x,y)', () => {
      //PAGINA
      cy.visit('https://51.178.137.167/login'); //cy.title().should('eq','Inicio de sesión')
      //LOGIN
      cy.get(':nth-child(1) > .form-control').should("be.visible").should("be.enabled").type('solverpay')
      cy.get('.d-flex > .form-control').should("be.visible").should("be.enabled").type('r7auF23wA.A2l1tZ2Dp4{enter}') //cy.get('.btn').click()
     
      cy.wait(1000)

      cy.get('.navbar-nav > :nth-child(5) > a').should("be.visible").click()
      cy.wait(1000)
      cy.get('.navbar-brand').click(10,10)
      cy.wait(1000)

    })
    it('passes', () => {
         
      cy.visit('https://51.178.137.167/login');async (params) => {
        
      }
      cy.wait(1000)
      cy.get(':nth-child(1) > .form-control').type('solverpay')
      cy.get('.d-flex > .form-control').type('r7auF23wA.A2l1tZ2Dp4')
      cy.get('.btn').click()
      cy.wait(1000)

      //prueba check
      cy.visit('https://51.178.137.167/account/add');
      cy.wait(1000)
      cy.get('#account_allowOfflineInternational').check().should('be.checked').get(4000)
      cy.get('#account_allowOfflineOverEmv').check().should('be.checked').get(4000)
      cy.get('#account_backupForced').check().should('be.checked').get(4000)
      cy.get('#account_allowOfflineInternational').uncheck().should('not.be.checked').get(1000)

      //   codigo útil 
      //  find-eq
      /*cy.get('.producto').find('.imagen.producto').eq(2).click()*/
      //  text-p1
      /*
      cy.get('#producto.editable').then(e)=>(
      cy.log(e.text())
      let estado=e.text()
      cy.log(estado)
      if(estado=="New"){
        cy.log("El vestido es Nuevo")
      }
      )*/
      // text-p2
      /*
      cy.get('#precio').then((e)=>{
        cy.log(e.text())
        let precio=e.text()
        cy.log(precio)
        precio=precio.slice(1,5)
        cy.log(precio)

        if(precio > 30){
          cy.log('Mas del precio')
        }else
          cy.log('Esta en precio')   
        
        if(precio > 50){
          precio=precio-10
          cy.get('direcion').should('be.visible').and('have.class','from-control').clear().type(a)
          cy.contain('boton','get total').click()
        }else
          precio=precio+10
          cy.get('direcion').should('be.visible').and('have.class','from-control').clear().type(a)
          cy.contain('boton','get total').click()
      })
     */
    })
    it.only('url', ()=>{
      
      cy.visit('https://51.178.137.167/login');
      cy.url().should("include", "login")
      cy.wait(1000)
      cy.get(':nth-child(1) > .form-control').type('solverpay')
      cy.get('.d-flex > .form-control').type('r7auF23wA.A2l1tZ2Dp4')
      cy.get('.btn').click()
      cy.wait(1000)
      
      cy.title().should('eq',"Panel de control")
      
    })      
       
  })