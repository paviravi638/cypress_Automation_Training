describe('My Test Suite', function (){
    
    it('LoginTest', function(){
        cy.login('paviravi638gmail.com','Pavi')

        //REDIFF REGISTRATION FORM
Cypress.Commands.add("login",(email,password) => {

    cy.visit('http://register.rediff.com/register/register.php?FormName=user_details')
    cy.get('[width="200"] > input').type('Pavithran')
    cy.get('[valign="bottom"] > [type="text"]').should('be.visible').type('xyz')
    cy.get('.btn_checkavail').should('be.visible').click()
    cy.get(':nth-child(1) > [width="20"] > #radio_login').should('be.visible').click()
    cy.get('#newpasswd').should('be.visible').type('Xyz123@')
    cy.get('#newpasswd1').should('be.visible').type('password')
    cy.get(':nth-child(1) > [width="185"] > input').type('paviravi638gmail.com')
    cy.get('.nomargin').should('not.be.checked')
    cy.get('#mobno').type('9876543210')
    cy.get('#tblcrtac > tbody > tr:nth-child(23) > td:nth-child(3) > select:nth-child(1)').select("17")
    cy.get('#tblcrtac > tbody > tr:nth-child(23) > td:nth-child(3) > select:nth-child(2)').select("OCT")
    cy.get('#tblcrtac > tbody > tr:nth-child(23) > td:nth-child(3) > select:nth-child(3)').select("2000")
    cy.get('input[value=m]').should('be.checked')
    cy.get('#country')
    .select('India')
    cy.get('.captcha').type('QEQP')
    cy.get('#Register').click()
    
    })
   
    })

})
