import LoginPage from '../PageObjects/LoginPage.cy'
describe('PageObjectModel', function() {
    it('Create a Rediffmail account', function () {
        
        const lp= new LoginPage()
        lp.visit();
        lp.fillFullName('xyz')
        lp.fillChooseRediffmailID('test')
        lp.clickButton()
        cy.get("div[id='check_availability'] b:nth-child(1)").should('contain', "Sorry, the ID that you are looking for is taken.")
        lp.fillChooseRediffmailID('pomedtest')
        lp.clickButton()
        cy.get("div[id='check_availability'] b:nth-child(1)").should('contain', "Yippie! The ID you've chosen is available.")
        lp.fillPassword('Pavi@123')
        lp.fillRetypePassword('Pavi@123')
        lp.fillAlternateEmailAddress('Pavi@gmail.com')
        lp.fillMobileNo('1234567890')
        lp.selectDate('17')
        lp.selectMonth('10')
        lp.selectYear('2000')
        lp.CheckGender()
        lp.selectCountry('India')
        lp.selectCity('Agra')
        lp.enterText('SDFE') 
        lp.submit()
        cy.get("body > center:nth-child(3) > form:nth-child(1) > div:nth-child(1) > table:nth-child(3) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > font:nth-child(1) > b:nth-child(1)")
        .should('be.visible').should('contain', "The code you've entered does not match with the code in the image")
    });
});