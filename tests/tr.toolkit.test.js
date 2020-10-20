/// <reference types="cypress" />
context('Testrunner Toolkit Page Tree Actions', () => {
    beforeEach(() => {
        cy.visit(`http://${Cypress.env('HOST_ADDR')}/products/testrunner-toolkit`)
    });

    it('Installation Page', () => {
        cy.contains('Installation')
            .click();
        cy.url()
            .should('include', '/products/testrunner-toolkit/installation');
    });

    it('Test Preparation Page', () => {
        cy.contains('Test Preparation')
            .click();
        cy.url()
            .should('include', '/products/testrunner-toolkit/preparation');
    });

    it('Configuration Page', () => {
        cy.contains('Configuration')
            .click();
        cy.url()
            .should('include', '/products/testrunner-toolkit/configuration');
    });

    it('CLI Reference Page', () => {
        cy.contains('CLI Reference')
            .click();
        cy.url()
            .should('include', '/products/testrunner-toolkit/saucectl');
    });

    it('FAQs Page', () => {
        cy.contains('FAQs')
            .click();
        cy.url()
            .should('include', '/products/testrunner-toolkit/faqs');
    });

});