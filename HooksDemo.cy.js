describe('MyTestSuite', function(){

    before(function(){
        cy.log('**********THIS IS SETUP BLOCK**********')
    })

    after(function(){
        cy.log('**********THIS IS TEAR DOWN BLOCK**********')
    })

    beforeEach(function(){
        cy.log('**********THIS IS LOGIN BLOCK**********')

    })

    afterEach(function(){
        cy.log('**********THIS IS LOGOUT BLOCK**********')
    })

    it('searching', function(){
        cy.log('**********THIS IS SEARCHING TEST**********')
    })
    it('advanced searching',function(){
        cy.log('**********THIS IS ADVANCED SEARCHING TEST**********')
    })
    it('listing products', function(){
        cy.log('**********THIS IS LISTING PRODUCTS TEST**********')
    })
})