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