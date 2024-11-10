describe('Cura Make Appointment', function(){


    it('Visit the URL', function(){
      cy.visit('https://katalon-demo-cura.herokuapp.com')
    })
    it('Click on Make Appointment', function(){
        cy.visit('https://katalon-demo-cura.herokuapp.com')
    
        cy.get('#btn-make-appointment').click();
        cy.get('#txt-username').type('John Doe')
        cy.get('#txt-password').type('ThisIsNotAPassword')
        cy.get('#btn-login').click()
    })
    it('Make Appointment', function(){
        cy.get('#hospital_select').select('Hongkong CURA Healthcare Center')
        cy.get('#chk_hospotal_readmission').click()
        cy.get('#radio_program_medicaid').click()
        cy.get('#txt_visit_date').type('18/11/2024')
        cy.get('#txt_comment').click({force: true})
        cy.get('#txt_comment').type('appointment for a follow-up check')
        cy.get('#btn-book-appointment').click()
      })
    it('Verify Appointment', function(){
        cy.get('h2').contains('Appointment Confirmation')
        cy.get('#comment').contains('appointment for a follow-up check')
    })
  })