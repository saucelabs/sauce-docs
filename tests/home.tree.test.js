/// <reference types="cypress" />
context('Home Page Tree Actions', () => {
    beforeEach(() => {
        cy.visit(`http://${Cypress.env('HOST_ADDR')}/overview`)
    });

    it('Welcome Page', () => {
        cy.contains('Welcome')
            .click();
        cy.url()
            .should('include', '/overview');
    });

    it('Getting Started Page', () => {
        cy.contains('Sauce Labs Basics')
            .click();
        cy.url()
            .should('include', '/sauce-basics')
    });
});