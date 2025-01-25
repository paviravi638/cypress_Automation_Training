describe('Handling New Window', () => {
    beforeEach(() => {
        
        cy.visit('https://demo.automationtesting.in/Windows.html');
        
        // Handle uncaught exceptions 
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
    });

    it('Extract the URL of the new window', () => {
        cy.get('a[target="_blank"]').then((link) => {
            const url = link.prop('href');
            console.log('Extracted URL:', url); 

            cy.visit(url);
        });

        
    });
});