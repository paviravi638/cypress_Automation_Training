describe('My First Test', () => {
  it('verify title-positive', () => {
     cy.visit("https://www.youtube.com/")  
     cy.title().should('eq','YouTube')
  })


  it('verify title-Negative', () => {
      cy.visit("https://www.youtube.com")  
      cy.title().should('eq','whatsapp')
   })

})