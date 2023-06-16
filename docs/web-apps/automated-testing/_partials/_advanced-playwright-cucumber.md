## Using a Tunnel With Cucumber for Playwright

When using a tunnel with Cucumber for Playwright, you need to explicitly tell Playwright to use it.
Its value is stored in the `HTTP_PROXY` env var.

Example:
```yaml reference
https://github.com/saucelabs/saucectl-playwright-example/blob/main/examples/cucumber/features/support/steps.js#L5-L17
```