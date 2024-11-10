describe('To verify the test cases of download files', () => {
    it('To verify user is able to download files', () => {
      
      cy.wait(3000)
      cy.get('[href="download/puppy.png"]').click()
    });
    it('To verify the downloadable link should be present', () => {
      
      cy.get('[href="download/selenium-snapshot.png"]').should('exist')
    })
    
  });