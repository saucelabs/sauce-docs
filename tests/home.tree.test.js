/// <reference types="cypress" />
//TODO Harden Cypress Locators
context('Home Page Tree Actions', () => {
    beforeEach(() => {
        cy.visit(`http://${Cypress.env('HOST_ADDR')}/overview`)
    });

    // it('Welcome Page', () => {
    //     cy.contains('Welcome')
    //         .click();
    //     cy.url()
    //         .should('include', '/overview');
    // });

    it('Sauce Labs Overview Page', () => {
        cy.contains('Sauce Labs Basics')
            .click();
        cy.contains('What is Sauce Labs?')
            .click();
        cy.url()
            .should('include', '/sauce-basics')
    });
});