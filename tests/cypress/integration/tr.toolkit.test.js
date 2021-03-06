/// <reference types="cypress" />
//TODO Harden Cypress Locators
context('Testrunner Toolkit Page Tree Actions', () => {
    beforeEach(() => {
        cy.visit(`/testrunner-toolkit`)
    });

    it('Installation Page', () => {
        cy.contains(/^Installation and Setup$/).click();
        cy.url()
            .should('include', '/testrunner-toolkit/installation');
    });

    it('Running tests', () => {
        cy.contains('Running Tests')
            .click();
        cy.url()
            .should('include', '/testrunner-toolkit/running-tests');
    });

    it('Jenkins Page', () => {
        cy.contains('CI Integrations').click();
        cy.contains(/^Requirements$/).click();
        cy.url()
            .should('include', '/testrunner-toolkit/integrations');
    });

});