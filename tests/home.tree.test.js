/// <reference types="cypress" />
context('Home Page Tree Actions', () => {
    beforeEach(() => {
        //cy.visit('http://localhost:3000/')
        cy.visit('https://sauce-docs-zc3byb3lfa-uw.a.run.app/')
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