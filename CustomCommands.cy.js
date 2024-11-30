describe('customSuite',function(){
    it('LoginTest',function(){

       cy.login('admin@yourstore.com','admin')
       cy.title().should('be.equal','Dashboard / nopCommerce administration')

       cy.login('admin@yourstore456.com','admin')
       cy.title().should('be.equal','Your store. Login')

       cy.login('admin@yourstore.com','admin876')
       cy.title().should('be.equal','Your store. Login')
    })

    it('Add Customer',function(){

        cy.login('admin@yourstore.com','admin')
        cy.log('Adding customer..........')
    })

    it('Edit Customer',function(){

        cy.login('admin@yourstore.com','admin')
        cy.log('Editing Customer..........')

    })


})