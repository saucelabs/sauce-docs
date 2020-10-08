/// <reference types="cypress" />
context('Home Page Tree Actions', () => {
    beforeEach(() => {
        cy.visit(`https://${Cypress.env('HOST_ADDR')}/overview`)
    });

    it('Welcome Page', () => {
        cy.contains('Welcome')
            .click();
        cy.url()
            .should('include', '/overview');
    });

    it('Getting Started Page', () => {
        cy.contains('Getting Started')
            .click();
        cy.url()
            .should('include', '/getting-started')
    });

    it('Application Storage Page',() => {
        cy.contains('Storage')
            .click();
        cy.url()
            .should('include', '/storage');
    })
});