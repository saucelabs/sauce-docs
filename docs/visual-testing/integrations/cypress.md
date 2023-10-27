---
sidebar_label: Cypress
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Cypress Integration

This guide requires an existing Cypress setup.
If you want to start from scratch, [check out our examples](../../visual-testing.md#examples).

## How to add visual testing to your setup

- Add plugin to your Cypress project

```sh
npm install --save @saucelabs/cypress-visual-plugin
```

- Add plugin in the project configuration, at the top of the file:
```ts
import { CypressSauceVisual } from '@saucelabs/cypress-visual-plugin';

export default defineConfig({
  e2e: {
    [...]
    setupNodeEvents(on, config) {
      CypressSauceVisual.register(on, config);
    },
  },
})
```

- Register Sauce Visual for Cypress commands. Add the following line in your `cypress/support/e2e.ts`:
```ts
import '@saucelabs/cypress-visual-plugin/commands';
```

- Capture screenshot in one of your tests:

```ts
context('Sauce Demo', () => {
  it('.type() - type into a DOM element', () => {
    cy.visit('https://www.saucedemo.com/')

    cy.visualCheck('visual: my-homepage');
  })
});
```

- Configure with your Sauce credentials from https://app.saucelabs.com/user-settings.

```sh
export SAUCE_USERNAME=__YOUR_SAUCE_USER_NAME__
export SAUCE_ACCESS_KEY=__YOUR_SAUCE_ACCESS_KEY__
```

- Run the test the way you are used to.


## Advanced usage

### Build name

`buildName` can be defined in the `cypress.config.js` configuration file.

Example
```javascript
export default defineConfig({
  e2e: {
    [...]
    saucelabs: {
      buildName: 'SauceDemo - Cypress',
    },
    [...]
  }
}
```

### Sauce Labs Region

By default, visual tests are uploaded to `us-west-1` region. \
This value can be overridden in the `cypress.config.js` configuration file.

Example
```javascript
export default defineConfig({
  e2e: {
    [...]
    saucelabs: {
      regionbuildName: 'eu-central-1',
    },
    [...]
  }
}
```

### Ignored regions

In the case you need to ignore some region when running your tests, Visual Testing provides a way to ignore user-specified areas.

Those ignored regions are specified when requesting a new snapshot.

#### User-specified ignored region

A region is defined by four elements.
- `x`, `y`: The location of the top-left corner of the ignored region
- `width`: The width of the region to ignore
- `height`: The heigh of the region to ignore

*Note: all values are pixels*

Example:
```javascript
    cy.visualCheck('login-page', { ignoredRegions: [
      {
        x: 240,
        y: 800,
        width: 1520,
        height: 408
      }
    ] });
```

#### Component-based ignored region

Alternatively, an ignored region can be a specific element from the page.

If the selectors matches multiple elements, all will be ignored.

Example:
```javascript
    cy.visualCheck('login-page', { ignoredRegions: [
      cy.get('[data-test="username"]'),
    ] });
```

## Limitations

Sauce Visual plugin for Cypress **DOES NOT** support `cypress open`.

Screenshots will be captured and sent to Sauce Labs only when `cypress run` is executed.