describe('MyTestSuite', function (){

    before(function(){
        cy.fixture('example').then(function(data){
            this.data=data  
        })
    })

    it('FixturesDemoTest', function(){
        cy.visit('http://register.rediff.com/register/register.php?FormName=user_details')
        cy.get('[width="200"] > input').type(this.data.fullname)
        cy.get('[valign="bottom"] > [type="text"]').type(this.data.choosearediffmailiD )
        cy.get('#newpasswd').type(this.data.password)
        cy.get('#newpasswd1').type(this.data.retypepassword)
        cy.get(':nth-child(1) > [width="185"] > input').type(this.data.alternateemailaddress)
        cy.get('#mobno').type(this.data.mobileno)
        cy.get('#tblcrtac > tbody > tr:nth-child(23) > td:nth-child(3) > select:nth-child(1)').select("17")
        cy.get('#tblcrtac > tbody > tr:nth-child(23) > td:nth-child(3) > select:nth-child(2)').select("OCT")
        cy.get('#tblcrtac > tbody > tr:nth-child(23) > td:nth-child(3) > select:nth-child(3)').select("2000")
        cy.get("input[value='m']").click()
        cy.get('#country').select('Belgium')
        cy.wait(10000)
        cy.get('#Register').click()

    
    })
})
        

        
        
        
        