/// <reference types="cypress" />
//TODO Harden Cypress Locators
context('Testrunner Toolkit Page Tree Actions', () => {
    beforeEach(() => {
        cy.visit(`/dev/cli`)
        cy.viewport(1536, 960)
    });

    it('saucectl Usage Page', () => {
        cy.contains(/^saucectl$/);
    });
});
