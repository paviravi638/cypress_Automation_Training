Cypress.on('uncaught:exception', (err, runnable) => {
    // Log the exception
    console.error('Uncaught Exception:', err.message);
    return false;
  });
  
  // Describe the test suite
  describe('Amazon Signup, Login, Search, and Product Listing', () => {
    const baseUrl = 'https://www.amazon.com';
  
    beforeEach(() => {
      cy.visit(baseUrl);
      cy.viewport('macbook-15'); 
    });
  
    it('Sign Up', () => {
    
      cy.get('#nav-link-accountList').click(); 
      cy.contains('Create your Amazon account').click({ force: true });

      cy.get('#ap_customer_name').type('PAvithran');
      cy.get("#ap_phone_number").type('6383995094');
      cy.get('#ap_password').type('Pavi@12345'); 
      cy.get('#continue').click();
  
      cy.url().should('include', '/ap/register');
    });
  
    it('Login', () => {
      // Navigate to the Login page
      cy.get('#nav-link-accountList').click(); // Navigate to account menu
      cy.reload(); // Ensure fresh login page
      cy.wait(2000);
  
      // Fill in the login form
      cy.get("input[name='email']").should('be.visible').type('6383995094');
      cy.get('.a-button-input').click();
      cy.wait(2000);
      cy.get('#ap_password').type('Pavi@12345');
      cy.get('#signInSubmit').click();
  
      // Assertion: Verify successful login
      cy.get('#nav-link-accountList-nav-line-1').should('contain', 'Hello');
    });
  
    it('Search a Product', () => {
      // Enter a search query and perform the search
      cy.get('#twotabsearchtextbox').type('Books');
      cy.get('#nav-search-submit-button').click();
  
      // Assertion: Verify search results are displayed
      cy.url().should('include', 'k=Books');
      cy.get('.s-main-slot').should('exist');
    });
  
    it('Add Product to Cart', () => {
      // Search for a product
      cy.get('#twotabsearchtextbox').type('Handbags');
      cy.get('#nav-search-submit-button').click();
  
      // Select a specific product and add it to the cart
      cy.get('.s-main-slot .s-result-item').first().find('h2 a').click();
      cy.get('#add-to-cart-button').click();
  
      // Assertion: Verify product is added to the cart
      cy.get('#sw-atc-details-single-container')
        .should('be.visible')
        .and('contain', 'Added to Cart');
  
      // Increase product quantity in the cart
      cy.get('[aria-label="Increase quantity by one"] > .a-icon').click();
  
      // Proceed to checkout
      cy.get('#sc-buy-box-ptc-button')
        .should('be.visible')
        .and('contain', 'Buy Amazon items')
        .click();
    });
  });
  