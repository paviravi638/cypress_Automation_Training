describe('Intercept Test Suite',()=>{

    before(() => {
        // Prevent Cypress from failing the test on uncaught exceptions
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false; 
        });
    });

       it('Test 1',()=>{
        cy.intercept('GET', 'https://www.orangehrm.com/en/solutions/people-management/hr-administration').as('getPosts');
        
        cy.visit('https://www.orangehrm.com/');
       
        cy.get("a[href='/en/solutions/people-management/hr-administration']").first().should('exist').click({ force: true });

        cy.wait('@getPosts', { timeout: 120000 }).then((interception) => {
            
            expect(interception.response.statusCode).to.eq(200);
            expect(interception.response.body).to.have.length.greaterThan(0);
            cy.log("Intercepted Response: " + JSON.stringify(interception.response.body));
        });
    });

    
    it('Test 2',()=>{

        cy.visit('https://jsonplaceholder.typicode.com/')
       
        cy.intercept({
          
            path : '/posts'
       }).as('posts')

       cy.get("tbody tr:nth-child(1) td:nth-child(1) a:nth-child(1)").click();
       
       cy.wait('@posts').then(intercept =>{
        cy.log(JSON.stringify(intercept))
        console.log(JSON.stringify(intercept))
        expect(intercept.response.body).to.have.length(100)
        
       })

        it.only('Test 3',()=>{

            cy.visit('https://jsonplaceholder.typicode.com/')
            cy.intercept('GET','/posts', {totalpost:5}).as('posts')
            cy.get("tbody tr:nth-child(1) td:nth-child(1) a:nth-child(1)").click()
            cy.wait('@posts')
   })

       })
    })