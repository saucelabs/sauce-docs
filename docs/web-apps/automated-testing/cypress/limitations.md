---
id: limitations 
title: Limitations for Cypress
sidebar_label: Limitations
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

### Special Characters in Test Names

We recommend that you avoid the use of special characters when naming your tests. If your test name contains any special characters, your test may not run or its artifacts may not be visible in our platform.

### Cypress 11+

A bug impacting Cypress 11+ is causing the Cypress UI to display a browser that is not the one actually used.
Edge is shown on Windows, and Webkit is shown on macOS.

The browser selected in your configuration file is used, and the console log of Cypress is still correct.

The issue has been reported to Cypress.
See: https://github.com/cypress-io/cypress/issues/25755 for more information.

### Firefox 101 on Windows

Cypress does not currently work with Firefox 101 on Windows.

### Firefox 105

Cypress does not currently work with Firefox 105.
See https://github.com/cypress-io/cypress/issues/23897 for more information.

### Microsoft Edge 120+ on Windows

Microsoft Edge 120+ requires an extra launch flag to work properly on Windows. You need to add the `--no-sandbox`
flag in the launch options inside your Cypress configuration file. Add the `setupNodeEvents` function inside your
`e2e` section as shown below:

```javascript
const { defineConfig } = require('cypress')

module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://www.saucedemo.com',
        setupNodeEvents(on, config) {
            on('before:browser:launch', (browser, launchOptions) => {
                if (browser.family === 'chromium' && browser.name === 'edge') {
                    launchOptions.args.push('--no-sandbox')
                }
                return launchOptions
            })
        },
    },
})
```

### WebKit

To enable WebKit support in Cypress, you need to set the `experimentalWebKitSupport` flag in your Cypress configuration
file. Note that on macOS, WebKit only works on macOS 13+.

```javascript
module.exports = defineConfig({
    experimentalWebKitSupport: true,
    // ...
})
```

- Cypress only supports launching Webkit with a fixed resolution of 1280x720.
- Cypress 12.6.0 does not work on Windows with Webkit browser.
- Cypress 12+ does not work on macOS 11 with Webkit browser.
- Cypress 13.10.0+ does not work on macOS 12 with Webkit browser.
