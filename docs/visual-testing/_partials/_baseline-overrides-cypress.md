At the global / plugin level, through the `saucelabs` attribute of the `e2e` configuration

```js
export default defineConfig({
  e2e: {
    [...]
    saucelabs: {
      baselineOverride: {
        browser: 'CHROME',
        device: "Desktop (1024x627)",
        operatingSystem: 'WINDOWS',
        operatingSystemVersion: '10',
      },
    },
    [...]
  }
})
```

Or at the snapshot level

```js
// Passing on a per-snapshot level
cy.sauceVisualCheck('Inventory Page', {
    baselineOverride: {
        browser: 'CHROME',
        device: "Desktop (1024x627)",
        operatingSystem: 'WINDOWS',
        operatingSystemVersion: '10',
    }
});
```

Cypress specs run in the browser and cannot import runtime values such as the `Browser` and `OperatingSystem` enums, so `browser` and `operatingSystem` accept their string values instead.
