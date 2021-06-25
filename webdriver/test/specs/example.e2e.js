describe('Sauce Docs Smoke Test', () => {

    it('should check Sauce Basics Header', async () => {
        await browser.url(`/sauce-basics`);

        const header  = await $('h1');
        await expect(header).toHaveText('What is Sauce Labs?')

    });
});
