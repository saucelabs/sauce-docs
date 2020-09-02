/// <reference types="cypress" />
context('Home Page Tree Actions', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    });

    it('Landing Page', () => {
        cy.contains('Welcome')
            .click();
        cy.url()
            .should('include', '/');
    });

    it('Getting Started Page', () => {
        cy.contains('Getting Started')
            .click();
        cy.url()
            .should('include', '/saucelabs-getting-started')
    });

    it('Application Storage Page',() => {
        cy.contains('Application Storage')
            .click();
        cy.url()
            .should('include', '/saucelabs-application-storage');
    })
});