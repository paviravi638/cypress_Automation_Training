describe("Verify Browser Stack Home Page", () => {
    it("Verify Browserstack logo is visible", () => {
      cy.visit("https://www.browserstack.com/");
  
      cy.get("#logo").should("be.visible");
    });
  
    it("Click on Sign In", () => {
      cy.get('a[title="Sign In"]').then(($selectedElement) => {
        debugger;
  
        $selectedElement.get(0).click();
      });
    });
  });