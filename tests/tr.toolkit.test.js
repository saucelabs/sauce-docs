/// <reference types="cypress" />
context('Testrunner Toolkit Page Tree Actions', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/products')
        cy.contains('Testrunner Toolkit').click();
    });

    it('Testrunner Overview Page', () => {
        cy.contains('Testrunner Overview')
            .click();
        cy.url()
            .should('include', '/testrunner-toolkit-overview');
        cy.get('[href="#how-testrunner-toolkit-works"]')
            .should('contain', '#')
            .click({multiple:true});
        cy.url()
            .should('include', '#how-testrunner-toolkit-works');
        cy.get('[href="#resources"]')
            .should('contain', '#')
            .click({multiple:true});
        cy.url()
            .should('include', '#resources');
    });

    it('Installation Page', () => {
        cy.contains('Installation')
            .click();
        cy.url()
            .should('include', '/testrunner-toolkit-installation');
        cy.get('[href="#what-youll-need"]')
            .should('contain', '#')
            .click({multiple:true});
        cy.url()
            .should('include', '#what-youll-need');
        cy.get('[href="#installing-testrunner-toolkit"]')
            .should('contain', '#')
            .click({multiple:true});
        cy.url()
            .should('include', '#installing-testrunner-toolkit');
        cy.get('[href="#connecting-to-sauce-labs"]')
            .should('contain', '#')
            .click({multiple:true});
        cy.url()
            .should('include', '#connecting-to-sauce-labs');
        cy.get('.token.assign-left.variable')
            .should('contain','SAUCE_USERNAME' && 'SAUCE_ACCESS_KEY');
        cy.get('.token.operator')
            .should('contain', '=');
        cy.get('.token.string')
            .should('contain', 'valid.username' && 'valid.key');
    });

    it('Test Preparation Page', () => {
        cy.contains('Test Preparation')
            .click();
        cy.url()
            .should('include', 'testrunner-toolkit-test-preparation');
    });

    it('Configuration Page', () => {
        cy.contains('Configuration')
            .click();
        cy.url()
            .should('include', 'testrunner-toolkit-configuration');
    });

    it('CLI Reference Page', () => {
        cy.contains('CLI Reference')
            .click();
        cy.url()
            .should('include', 'testrunner-toolkit-cli-reference');
    });

    it('FAQs Page', () => {
        cy.contains('FAQs')
            .click();
        cy.url()
            .should('include', 'testrunner-toolkit-faqs');
    });

});