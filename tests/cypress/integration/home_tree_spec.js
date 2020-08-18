/// <reference types="cypress" />
context('Home Page Tree Actions', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    });

    it('Why Sauce Labs Page', () => {
        cy.contains('Why Sauce Labs?')
            .click();
        cy.url()
            .should('include', '/');
        cy.get('[href="#cross-browser-cross-device-testing"]')
            .should('contain', '#')
            .click({multiple:true});
        cy.url()
            .should('include', '/#cross-browser-cross-device-testing');

        cy.get('[href="#debugging-and-analytic-tools"]')
            .should('contain', '#')
            .click({multiple:true});
        cy.url()
            .should('include', '/#debugging-and-analytic-tools');
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
        cy.get('.token.assign-left.variable')
            .should('contain','SAUCE_USERNAME' && 'SAUCE_ACCESS_KEY');
        cy.get('.token.operator')
            .should('contain', '=');
        cy.get('.token.string')
            .should('contain', 'valid.username' && 'valid.key');
        cy.get('[href="#updating-webdriver-capabilities"]')
            .should('contain', '#')
            .click({multiple:true});
        cy.url()
            .should('include', '/saucelabs-application-storage#updating-webdriver-capabilities');
    })
});