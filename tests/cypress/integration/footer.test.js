context('Home Page Tree Actions', () => {
    beforeEach(() => {
        cy.visit(`/`)
        cy.viewport(1536, 960)
    });
    it('Test Footer', () => {
        cy.get('.footer-columns.has-text-white.is-multiline.footer-wrapper > div:nth-child(4) > div > ul > li:nth-child(5) > a > span')
        cy.contains('Security');
    });
    it('Test Social Links', () => {
        cy.get('div.footer-column.social-container > a:nth-child(2)')
            .should('have.attr', 'href','https://www.facebook.com/saucelabs')
    });
});