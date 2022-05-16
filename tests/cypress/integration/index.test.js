context('Index Page Tree Actions', () => {
    beforeEach(() => {
        cy.visit(`/`)
        cy.viewport(1536, 960)
    });
    it('Test Search Bar Navbar', () => {
        cy.get('#__docusaurus > nav..navbar__items .DocSearch-Button').should(
          'have.class',
          'DocSearch DocSearch-Button'
        );
        //     .click()
        // cy.get('div')
        //     .should('have.class', 'DocSearch-Modal')
        // cy.get('form')
        //     .should('have.class', 'DocSearch-Form')
        // cy.get('#docsearch-input')
        //     .should('have.attr', 'placeholder', 'Search docs')
        // cy.get('body > div:nth-child(1) > div > div > div > div > p')
        //     .should('have.class', 'DocSearch-Help').contains('No recent searches')
    });

});
