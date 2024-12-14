require('@4tw/cypress-drag-drop');
describe('Mouse Action', ()=>{

    it('Mouseover',()=>{

        cy.visit("https://demo.opencart.com/");
        cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(1) > .nav-link').should('not.be.visible')     
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click()
        cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(1) > .nav-link').should('be.visible')     
    })

    it('Right click',()=>{

         //Method1
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html");
       
        cy.get('.context-menu-one').trigger('contextmenu');
        cy.get('.context-menu-icon-copy > span').should('be.visible');
        
        //Method2
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html");
        cy.get('.context-menu-one').rightclick();
        cy.get('.context-menu-icon-copy > span').should('be.visible');

    })

    it('Double click',()=>{

        cy.visit("https://demo.guru99.com/test/simple_context_menu.html")
        cy.get("button[ondblclick='myFunction()']").trigger('dblclick')
        cy.on('window:alert',(str)=>{
            expect(str).to.equal('You double clicked me.. Thank You..')
        })
    })

    it('Drag And Drop',()=>{

        cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
        cy.get('#box3').drag('#box107')
    })

    it('Scrolling PAge',()=>{

        cy.visit("https://www.qaoncloud.com/")
        cy.get('.elementor-element-e576e6e > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .attachment-full')
           .scrollIntoView({duration:2000})
           cy.get('.hotspot-content-overlay').scrollIntoView({duration:2000})
           cy.get('.ekit-template-content-footer > .elementor > .elementor-top-section').scrollIntoView({duration:2000})

    
    })
})