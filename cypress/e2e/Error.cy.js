describe('Error', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/thisIsaBADurl');
  })

  it('should display logo', () => {
    cy.get(".App-logo").should('be.visible')
  });

  it('should have a home button', () => {
    cy.get('button').contains('Home')
  });
 
  it('should return to the home page on click', () => {
    cy.get('button').click()
    cy.url().should('eq', 'http://localhost:3000/')
  });

  it('should display an error with incorrect url', () => {
    cy.contains('404 Movie Not Found')
  });
})  