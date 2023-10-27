---
sidebar_label: Storybook
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Storybook Integration

This guide requires an existing Storybook setup.
If you want to start from scratch, [check out our examples](../../visual-testing.md#examples).

## Installation

Install this plugin in an existing project:
```sh
npm install @saucelabs/cypress-visual-plugin
```

## Activation

Add plugin in the project configuration, at the top of the file:
```
import sauceVisualPlugin from 'saucelabs-cypress-visual-plugin';
```

and in the `setupNodeEvents()` function body:
```
    setupNodeEvents(on, config) {
      CypressVisualPlugin(on, config);
    },
```

## Configuration

Authentication relies on `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` being available in the environment.


Sauce Labs configuration is contained into `cypress.config.ts`.
Example: 
```
module.exports = defineConfig({
  e2e: {
    saucelabs: {
      buildName: 'SauceDemo - Cypress',
      namePattern: '^visual: .*',
      region: 'us-west-1',
    },
    [...]
    setupNodeEvents(on, config) {
      CypressVisualPlugin(on, config);
    },
  },
})
```

### `buildName`

Optional. Defines which template is used for generating the build name.

### `namePattern`

Optional. By default, plugin uploads all snapshots to the Sauce Labs Visual Testing. `namePattern` permits to fulter which screenshots needs to be uploaded and compared. Filter is applied to its name.


### `region`

Defines which Sauce Labs region should be targeted.

