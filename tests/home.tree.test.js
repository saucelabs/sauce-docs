/// <reference types="cypress" />
context('Home Page Tree Actions', () => {
    beforeEach(() => {
        //cy.visit('http://localhost:3000/')
        cy.visit('https://sauce-docs-zc3byb3lfa-uw.a.run.app/overview')
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