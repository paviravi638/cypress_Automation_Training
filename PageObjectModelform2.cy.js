import RegisterFormPage from '../PageObjects/RegisterFormPage.cs'
describe('Test suite', function(){

    it('Valid Register Test', function(){

        const rf=new RegisterFormPage()
        rf.visit()
        rf.fillFirstName('Pavithran')
        rf.fillLastName('Ravi')
        rf.fillGender('Male')
        rf.fillHobbies('Reading')
        rf.fillDepartment('Department of Engineering')
        rf.fillUsername('paviravi638')
        rf.fillPassword('Pavi18@ravi')
        rf.fillConfirmPassword('Pavi8@ravi')
        rf.fillEmail('paviravi638@gmail.com')
        rf.fillContactNo('916383995094')
        rf.submit()
        cy.title().should('be.equal','Bootstrap Template')
        

       
        
        

    })
})