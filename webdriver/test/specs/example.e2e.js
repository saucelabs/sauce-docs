describe('Sauce Docs Smoke Test', () => {

    it('should check STT page header', async () => {
        await browser.url(`/testrunner-toolkit`);

        const header  = await $('h1');
        await expect(header).toHaveText('Using Testrunner Toolkit')

    });
});