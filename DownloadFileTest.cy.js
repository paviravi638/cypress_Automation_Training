/// <reference types="cypress-downloadfile"/>
describe('Download File Test',()=>{

    it('Download Image Test',()=>{
       cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','logo.jpg')
    })
 })
 