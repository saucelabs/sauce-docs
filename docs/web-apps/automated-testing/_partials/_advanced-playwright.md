## Filtering Tests

Playwright supports filtering tests using the [`grep`](/web-apps/automated-testing/playwright/yaml/#grep) and [`grepInvert`](/web-apps/automated-testing/playwright/yaml/#grepinvert) options.

## Reporters

By default, playwright on Sauce Labs runs with these preconfigured reporters:

- [list](https://playwright.dev/docs/test-reporters#list-reporter): Prints results to standard output.
- [junit](https://playwright.dev/docs/test-reporters#junit-reporter): Creates junit.xml files.
- [@saucelabs/playwright-reporter](https://github.com/saucelabs/sauce-playwright-reporter): Sauce Lab's own reporter that routes test results to the [Test Results](/test-results/viewing-test-results/) page.

If you have a custom reporter, simply set it in your _playwright.config.js/ts_ file:

```typescript
const config: PlaywrightTestConfig = {
  reporter: [
    ['./fancy.reporter.ts'],
  ],
};
```

Your reporter runs automatically alongside our reporters.
We do not filter out duplicate reporters, which also means that if you already have a `list` reporter set, you'd see twice the output.

If you'd like a different set of reporters when running on Sauce versus local, check the env variable `SAUCE_VM`. In the following example, if `SAUCE_VM` is set (which it will be when running on a Sauce Labs VM), then _fancy.reporter.ts_ is used, otherwise just the built-in `list` reporter.

```typescript
const config: PlaywrightTestConfig = {
  reporter: process.env.SAUCE_VM ? [
    ['./fancy.reporter.ts'],
  ] : 'list',
};
```

:::caution
A limitation on Sauce Labs exists with playwright 1.27.1 or below, where the user defined reporter is only honored when defined as an array: `reporter: [['./fancy.reporter.ts']]`. Using a string like `reporter: './fancy.reporter.ts'` would therefore always be ignored.
:::

## Emulation

You can use Playwright to test your app on any browser and emulate a real device such as a mobile phone or tablet. See the [Playwright docs](https://playwright.dev/docs/emulation) for more details.

:::note
Playwright is not a real Emulator or Simulator. It just emulates the browser behavior such as `userAgent`, `screenSize`, `viewport` and etc.
:::

## Screenshots

To get trackable screenshots in Sauce Cloud, please refer to the [Playwright Screenshot documentation](https://playwright.dev/docs/screenshots) and implement the following code snippet:

```javascript
test('take a screenshot', async ({ page }, testInfo) => {
  await page.goto('https://playwright.dev/');
  await page.screenshot({ path: 'screen_capture_unique_name.png' });
  await testInfo.attach('screen_capture_unique_name.png', { path: 'screen_capture_unique_name.png', contentType: 'image/png' });
});
```

The captured screenshot will be logged in `sauce-test-report.json`` and can be accessed in the "Screenshots" tab on the Sauce Labs web UI. You can also download the screenshots as artifacts.

:::caution
Please be aware that using the default screenshot setting in the [Playwright Config](https://playwright.dev/docs/test-use-options#recording-options) may result in potential issues on Sauce Labs. By default, Playwright generates screenshot files in the following structure:

```
demo-todo-app-Editing-should-save-edits-on-blur-webkit
demo-todo-app-Editing-should-save-edits-on-blur-webkit/test-finished-1.png
demo-todo-app-Routing-should-allow-me-to-display-all-items-chromium
demo-todo-app-Routing-should-allow-me-to-display-all-items-chromium/test-finished-1.png
```

However, Sauce Labs only supports a flat file hiearchy, which means that `test-finished-1.png` would be uploaded and overwritten, since only one file named `test-finished-1.png` can be stored.
:::
