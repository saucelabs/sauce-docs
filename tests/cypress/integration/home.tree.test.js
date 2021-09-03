/// <reference types="cypress" />
//TODO Harden Cypress Locators
context('Home Page Tree Actions', () => {
    beforeEach(() => {
        cy.visit(`http://localhost:3000/overview`)
        cy.viewport(1536, 960)
    });

    it('Sauce Labs Overview Page', () => {
        cy.contains('Sauce Labs Basics');
    });
});