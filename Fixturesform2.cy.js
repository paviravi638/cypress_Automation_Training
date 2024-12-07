describe('MyTestSuite', function (){

    before(function(){
        cy.fixture('example').then(function(data){
            this.data=data  
        })
    })



    it('Fixturesform2', function(){

        cy.visit('https://mytestingthoughts.com/Sample/home.html	')
        cy.title().should('be.equal','Bootstrap Template')
        cy.get(':nth-child(3) > .inputGroupContainer > .input-group > .form-control').type(this.data.firstname)
        cy.get(':nth-child(4) > .inputGroupContainer > .input-group > .form-control').type(this.data.lastname)
        cy.get('#inlineRadioMale').click()
        cy.get('#exampleFormControlSelect2 > :nth-child(1)').click()
        cy.get('.selectContainer > .input-group > .form-control').select("Department of Engineering")
        cy.get(':nth-child(8) > .inputGroupContainer > .input-group > .form-control').type(this.data.username)
        cy.get(':nth-child(9) > .inputGroupContainer > .input-group > .form-control').type(this.data.password)
        cy.get(':nth-child(10) > .inputGroupContainer > .input-group > .form-control').type(this.data.confirmpassword)
        cy.get(':nth-child(11) > .inputGroupContainer > .input-group > .form-control').type(this.data.email)
        cy.get(':nth-child(12) > .inputGroupContainer > .input-group > .form-control').type(this.data.contactno)
        cy.get('.btn').click()
        cy.title().should('be.equal','Bootstrap Template')
        
    })

})