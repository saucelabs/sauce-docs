/// <reference types="cypress" />
context('Testrunner Toolkit Page Tree Actions', () => {
    beforeEach(() => {
        //cy.visit('http://localhost:3000/products')
        cy.visit('https://sauce-docs-zc3byb3lfa-uw.a.run.app/products/testrunner-toolkit')
    });

    it('Testrunner Overview Page', () => {
        cy.contains('Overview')
            .click();
        cy.url()
            .should('include', '/products/testrunner-toolkit');
    });

    it('Installation Page', () => {
        cy.contains('Installation')
            .click();
        cy.url()
            .should('include', '/products/testrunner-toolkit/installation');
    });

    it('Test Preparation Page', () => {
        cy.contains('Test Preparation')
            .click();
        cy.url()
            .should('include', '/products/testrunner-toolkit/preparation');
    });

    it('Configuration Page', () => {
        cy.contains('Configuration')
            .click();
        cy.url()
            .should('include', '/products/testrunner-toolkit/configuration');
    });

    it('CLI Reference Page', () => {
        cy.contains('CLI Reference')
            .click();
        cy.url()
            .should('include', '/products/testrunner-toolkit/saucectl');
    });

    it('FAQs Page', () => {
        cy.contains('FAQs')
            .click();
        cy.url()
            .should('include', '/products/testrunner-toolkit/faqs');
    });

});