/// <reference types="cypress" />
//TODO Harden Cypress Locators
context('Testrunner Toolkit Page Tree Actions', () => {
    beforeEach(() => {
        cy.visit(`/testrunner-toolkit`)
        cy.viewport(1536, 960)
    });

    it('Installation Page', () => {
        cy.contains(/^Installation and Setup$/);
    });
});