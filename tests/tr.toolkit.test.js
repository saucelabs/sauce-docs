/// <reference types="cypress" />
//TODO Harden Cypress Locators
context('Testrunner Toolkit Page Tree Actions', () => {
    beforeEach(() => {
        cy.visit(`http://${Cypress.env('HOST_ADDR')}/testrunner-toolkit`)
    });

    it('Installation Page', () => {
        cy.contains('Installation')
            .click();
        cy.url()
            .should('include', '/testrunner-toolkit/installation');
    });
    //TODO: Fix Cypress locator, use CSS selector instead
    // it('Testrunner Configuration', () => {
    //     cy.contains('Configuration')
    //         .click();
    //     cy.url()
    //         .should('include', '/dev/testrunner-toolkit/configuration');
    // });

    it('Running tests', () => {
        cy.contains('Running Tests')
            .click();
        cy.url()
            .should('include', '/testrunner-toolkit/running-tests');
    });

    it('Integrations Page', () => {
        //cy.contains('Integrations')
        cy.get(':nth-child(10) > :nth-child(2) > :nth-child(5) > .menu__list > :nth-child(5) > .menu__link')
            .click();
        cy.url()
            .should('include', '/testrunner-toolkit/integrations');
    });

    it('FAQs Page', () => {
        cy.contains('FAQs')
            .click();
        cy.url()
            .should('include', '/testrunner-toolkit/faqs');
    });

    //TODO Fix Cypress locator, use CSS selector instead
    // it('Support Page', () => {
    //     cy.contains('Testrunner Support')
    //         .click();
    //     cy.url()
    //         .should('include', '/dev/testrunner-toolkit/stt-support');
    // });

});