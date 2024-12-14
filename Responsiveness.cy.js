describe('Page Responsiveness Test',()=>{

    it('Swiggy Page-Destop',()=>{
        cy.visit('https://www.swiggy.com/')
        cy.get(':nth-child(3) > ._3zoZ8').click()
    })

    it('Swiggy Page-Iphone-xr',()=>{
        cy.viewport('iphone-xr')
        cy.visit('https://www.swiggy.com/')
        cy.get(':nth-child(3) > ._3zoZ8').click()
    })

})