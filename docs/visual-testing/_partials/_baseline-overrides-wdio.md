At the global / service level

```js
import { Browser, OperatingSystem } from '@saucelabs/visual';
export const config = {
    // ...
    services: [
        'sauce',
        [
            '@saucelabs/wdio-sauce-visual-service',
            {
                baselineOverride: {
                    browser: Browser.Chrome,
                    device: "Desktop (1024x627)",
                    operatingSystem: OperatingSystem.Windows,
                    operatingSystemVersion: '10',
                },
            },
        ],
    ],
}
```

Or at the snapshot level

```js
import { Browser, OperatingSystem } from '@saucelabs/visual';
// ...
// Passing on a per-snapshot level
await browser.sauceVisualCheck('Inventory Page', {
    baselineOverride: {
        browser: Browser.Chrome,
        device: "Desktop (1024x627)",
        operatingSystem: OperatingSystem.Windows,
        operatingSystemVersion: '10',
    }
});
```
