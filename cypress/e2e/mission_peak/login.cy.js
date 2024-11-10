describe('Open the application', function(){
  it('Visit the URL', function(){
    cy.visit('https://mptestui.missionpeak.us/start')
  })
  it('Clicks the Login Button', function(){
    cy.visit('https://mptestui.missionpeak.us/start')
    cy.get('a.mp-button.mp-button-filled.cursor-pointer.rounded.px-4.py-2', { timeout: 10000 }).should('be.visible').click();
    cy.get('#username').type('prajaktaa609@gmail.com')
    cy.get('#password').type('Test@1234!')
    cy.contains('button', 'Continue').should('be.visible').click()
    cy.get('svg.fa-bars').should('be.visible').click()
    cy.get('.sidenav > :nth-child(2)').click()
    cy.get(':nth-child(2) > .menu-item > .items-center').click()
    cy.get('.fixed > .material-icons').click()
    cy.get(':nth-child(4) > .flex > :nth-child(2) > .ng-untouched > .p-radiobutton > .p-radiobutton-box').click()
  })
})

