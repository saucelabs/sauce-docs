At the global / plugin level, through the `saucelabs` attribute of the `e2e` configuration

```js
import { Browser, OperatingSystem } from '@saucelabs/visual';

export default defineConfig({
  e2e: {
    [...]
    saucelabs: {
      baselineOverride: {
        browser: Browser.Chrome,
        device: "Desktop (1024x627)",
        operatingSystem: OperatingSystem.Windows,
        operatingSystemVersion: '10',
      },
    },
    [...]
  }
})
```

Or at the snapshot level

```js
import { Browser, OperatingSystem } from '@saucelabs/visual';
// ...
// Passing on a per-snapshot level
cy.sauceVisualCheck('Inventory Page', {
    baselineOverride: {
        browser: Browser.Chrome,
        device: "Desktop (1024x627)",
        operatingSystem: OperatingSystem.Windows,
        operatingSystemVersion: '10',
    }
});
```
