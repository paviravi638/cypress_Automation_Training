Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    });
    describe('QAoncloud', ()=> {
    beforeEach('Visit', () => {
    cy.visit("https://qaoncloud.com/")
   });
    
    it('Headers', () =>{
       
        cy.get('.elementskit-menu-hamburger').click();
        cy.get('#menu-item-319 > .ekit-menu-nav-link').should('be.visible').contains('Services')
        cy.get('#menu-item-326 > .ekit-menu-nav-link').should('be.visible').contains('Solutions')
        cy.get('#menu-item-331 > .ekit-menu-nav-link').should('be.visible').contains('Industries')
        cy.get('#menu-item-337 > .ekit-menu-nav-link').should('be.visible').contains('Insights')
        cy.get("button[class='elementskit-menu-close elementskit-menu-toggler']").click()
    });
    
    it('Home screen', () => {
        
        cy.get('.elementor-button-link').click()
        cy.title().should('have.contain', 'Contact us | Software Testing Company | QAonCloud')
        cy.go('back')
        cy.get('.elementor-element-515eabd > .elementor-container > .elementor-column > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-heading-title').contains('SERVICES')           
        cy.get('.elementor-element-7714daf > .elementor-container > .elementor-column > .elementor-widget-wrap > .elementor-element').contains('SOLUTIONS')
        cy.get('.elementor-element-330048a > .elementor-widget-container > .elementor-heading-title').contains('Want To Know More About QAonCloud?')
   
        cy.get('.elementor-element-e98bb3e > .elementor-container > .elementor-column > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-heading-title').should('be.visible').should('have.contain', 'We Love To Help Craft Quality Software')
        
    });
    
    it('Footer', () => {
        cy.get('.elementor-element-6f23676 > .elementor-widget-container > .ekit-wid-con > .elementor-icon-list-items > :nth-child(1) > .elementor-repeater-item-01d06f0 > .ekit_page_list_content > .elementor-icon-list-text > .ekit_page_list_title_title').click()
        cy.url().should('include', 'about-us')
        cy.go('back')
        cy.get('.elementor-element-6f23676 > .elementor-widget-container > .ekit-wid-con > .elementor-icon-list-items > :nth-child(2) > .elementor-repeater-item-324f54e > .ekit_page_list_content > .elementor-icon-list-text > .ekit_page_list_title_title').click()
        cy.url().should('include', '/how-we-work')
        cy.go('back')
        cy.get('.elementor-repeater-item-5245ae1 > .ekit_page_list_content > .elementor-icon-list-text > .ekit_page_list_title_title').click()
        cy.url().should('include', '/why-us')
        cy.go('back')
        cy.get('.elementor-element-e7a4b8a > .elementor-widget-container > .ekit-wid-con > .elementor-icon-list-items > :nth-child(1) > .elementor-repeater-item-01d06f0 > .ekit_page_list_content > .elementor-icon-list-text > .ekit_page_list_title_title').click()
        cy.url().should('include', '/engagement-model')
        cy.go('back')
        cy.get('.elementor-element-e7a4b8a > .elementor-widget-container > .ekit-wid-con > .elementor-icon-list-items > :nth-child(2) > .elementor-repeater-item-324f54e > .ekit_page_list_content > .elementor-icon-list-text > .ekit_page_list_title_title').click()
        cy.url().should('include', '/careers')
        cy.go('back')
        cy.get('.elementor-repeater-item-2dd847a > .ekit_page_list_content > .elementor-icon-list-text > .ekit_page_list_title_title').click()
        cy.url().should('include', '/tools-we-use')
        cy.go('back')
        cy.get('.elementor-element-6a4d426 > .elementor-widget-container > .ekit-wid-con > .elementor-icon-list-items > .elementor-icon-list-item > .elementor-repeater-item-01d06f0 > .ekit_page_list_content > .elementor-icon-list-text > .ekit_page_list_title_title').click()
        cy.url().should('include', 'contact-us')
    }); 
});                                                                                          