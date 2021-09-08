describe('Sauce Docs Smoke Test', () => {

    it('should check Sauce Basics Header', async () => {
        await browser.url(`/sauce-basics`);

        const header  = await $('h1');
        await expect(header).toHaveText('What is Sauce Labs?')

    });

    it( 'should detect if error message does NOT exist', async () => {
        await browser.url('/');

        let elem = await $('#docusaurus-base-url-issue-banner');
        let doesNotExist = await elem.waitForExist({timeout: 20000, reverse: true});
        await expect(doesNotExist).toBe(true);
    });
});
