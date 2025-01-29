Given("que el usuario está en la página de login", () => {
    cy.visit("https://newfront.lab.solverpay.com/login");
})

When('ingresa un nombre de usuario {string} y una contraseña {string}', (username, password) => {
    cy.get('#user').type(username); // Reemplaza con el selector real
    console.log("He llegado aquí")
    cy.get('#password').type(password);
    console.log("He llegado aquí")
});

When('no ingresa un nombre de usuario ni contraseña',  () => {
    cy.get('#user').clear(); // Asegúrate de que los campos estén vacíos
    cy.get('#password').clear(); 
});

Then('presiona el botón de login',  () => {
    cy.get('.mt-2').click();  
});


