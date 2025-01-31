## Using a Tunnel With Cucumber for Playwright

When using a tunnel with Cucumber for Playwright, you need to explicitly tell Playwright to use it.
Its value is stored in the `HTTP_PROXY` env var.

Example:

```yaml reference
https://github.com/saucelabs/saucectl-playwright-example/blob/8795f0a511e14fd091deaf4f9cdeed6ad31edcb0/examples/cucumber/features/support/steps.ts#L25-L29
```
