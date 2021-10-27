
describe ('Wales Test Ticket ', function() {
    
  it("Open NHS Cost Checker Tool Give Circumstances to get Help", function()
    {
      //To Open Given Test Page (NHS Cost Checker Tool)

    cy.visit('https://services.nhsbsa.nhs.uk/check-for-help-paying-nhs-costs/start')

    //This Assertion is used to See (User has landed on the Desired Page)
    // This assertion is made on the URL i.e the URL should contains (/Start)
    cy.url().should('include', '/start')  
                                         
    cy.contains('Start now').click()

    //This Assertion is used to verify user has navigated to right step of process
    cy.get('#question-heading').contains('Which country do you live in?') 

    cy.contains('Wales').click()

    cy.contains('Next').click()

    //User Navigated to Next Step of Process

    cy.get('#question-heading').contains('What is your date of birth?')

    cy.get('#dob-day').type('17')

    cy.get('#dob-month').type('03')

    cy.get('#dob-year').type('1987')

    cy.contains('Next').click()
 //User Navigated to Next Step of Process
    cy.get('#question-heading').contains('Do you live with a partner?')

    cy.get('#label-yes').click()

    cy.contains('Next').click()
 //User Navigated to Next Step of Process
    cy.get('#question-heading').contains('Do you or your partner claim any benefits or tax credits?')

    cy.get('#label-yes').click()

    cy.contains('Next').click()
 //User Navigated to Next Step of Process
    cy.get('#question-heading').contains('Do you or your partner get paid Universal Credit?')

    cy.contains('Yes, we receive Universal Credit payments').click()

    cy.contains('Next').click()
 //User Navigated to Next Step of Process
    cy.get('#question-heading').contains('As part of your joint Universal Credit, do you have any of these?')

    cy.get('#label-yes').click()

    cy.contains('Next').click()
 //User Navigated to Final Step of Process
    cy.get('#question-heading').contains('Did you and your partner have a combined take-home pay of £935 or less in your last Universal Credit period?')

    cy.get('#label-yes').click()

    cy.contains('Next').click()

    // This assertion is made: To know user has finished the process
    cy.get('.heading-large').contains('You get help with NHS costs') 

    cy.get('#result-reason').contains('Because you and your partner get Universal Credit and your combined take-home pay was less than £935:')


        })
      })
