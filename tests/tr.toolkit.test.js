/// <reference types="cypress" />
context('Testrunner Toolkit Page Tree Actions', () => {
    beforeEach(() => {
        cy.visit(`http://${Cypress.env('HOST_ADDR')}/dev/testrunner-toolkit`)
    });

    it('Installation Page', () => {
        cy.contains('Installation')
            .click();
        cy.url()
            .should('include', '/dev/testrunner-toolkit/installation');
    });

    it('Configuration', () => {
        cy.contains('Configuration')
            .click();
        cy.url()
            .should('include', '/dev/testrunner-toolkit/configuration');
    });

    it('Running tests', () => {
        cy.contains('Running Tests')
            .click();
        cy.url()
            .should('include', '/products/testrunner-toolkit/running-tests');
    });

    it('Integrations Page', () => {
        cy.contains('Integrations')
            .click();
        cy.url()
            .should('include', '/dev/testrunner-toolkit/integrations');
    });

    it('FAQs Page', () => {
        cy.contains('FAQs')
            .click();
        cy.url()
            .should('include', '/dev/testrunner-toolkit/faqs');
    });

    it('Support Page', () => {
        cy.contains('Support')
            .click();
        cy.url()
            .should('include', '/dev/testrunner-toolkit/support');
    });

});