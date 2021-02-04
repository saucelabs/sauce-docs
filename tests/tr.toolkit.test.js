/// <reference types="cypress" />
//TODO Harden Cypress Locators
context('Testrunner Toolkit Page Tree Actions', () => {
    beforeEach(() => {
        cy.visit(`http://${Cypress.env('HOST_ADDR')}/testrunner-toolkit`)
    });

    it('Installation Page', () => {
        cy.get('li:nth-child(9) > ul > li:nth-child(2) > a').click();
        cy.url()
            .should('include', '/testrunner-toolkit/installation');
    });
    //TODO: Fix Cypress locator, use CSS selector instead
    // it('Testrunner Configuration', () => {
    //     cy.get('li:nth-child(9) > ul > li:nth-child(3) > a').click();
    //     cy.contains('Cypress').click();
    //     cy.url()
    //         .should('include', '/testrunner-toolkit/configuration');
    // });

    it('Running tests', () => {
        cy.contains('Running Tests')
            .click();
        cy.url()
            .should('include', '/testrunner-toolkit/running-tests');
    });

    it('Jenkins Page', () => {
        cy.contains('CI Integrations').click();
        cy.contains('Requirements').click();
        cy.url()
            .should('include', '/testrunner-toolkit/integrations');
    });

    //TODO Fix Cypress locator, use CSS selector instead
    // it('Support Page', () => {
    //     cy.contains('Testrunner Support')
    //         .click();
    //     cy.url()
    //         .should('include', '/dev/testrunner-toolkit/stt-support');
    // });

});