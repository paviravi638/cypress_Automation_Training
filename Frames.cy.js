import 'cypress-iframe'
describe("handling frames",()=>{

    it('method 1',()=>{

        cy.visit("http://the-internet.herokuapp.com/iframe");
        
        

        const iframe=cy.get("#mce_0_ifr")
           .its('0.contentDocument.body')
           .should('be.visible')
           .then(cy.wrap);

           iframe.clear().type("Pavithran {ctrl+a}");
           cy.get("[aria-label='Bold']").click();


    })

    
    it('method 2 - by using custom command',()=>{

        cy.visit("http://the-internet.herokuapp.com/iframe");
        cy.getIframe('#mce_0_ifr').clear().type("Pavithran {ctrl+a}");
        cy.get("[aria-label='Bold']").click();
    })

    it('method 3 - by using cypress-iframe plugin',()=>{

        cy.visit("http://the-internet.herokuapp.com/iframe");
        cy.frameLoaded('#mce_0_ifr');
        cy.iframe('#mce_0_ifr').clear().type("Pavithran {ctrl+a}");
        cy.get("[aria-label='Bold']").click();
    })
})