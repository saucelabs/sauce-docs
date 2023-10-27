---
sidebar_label: WebdriverIO
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# WebdriverIO Integration

This guide requires an existing WebdriverIO setup.
If you want to start from scratch, [check out our examples](../../visual-testing.md#examples).

## How to add visual testing to your setup

- Add Sauce Labs Visual dependency

```sh
npm install --save @saucelabs/wdio-sauce-visual-service
```

- Add the SauceVisualService to your `wdio.conf.(js|ts)`:  
   *Build name can be set through the `buildName` attribute.*

```ts
...
export const config: Options.Testrunner = {
...
    services: ['sauce', ['@saucelabs/wdio-sauce-visual-service', {
        buildName: 'Sauce Demo Test',
    }]],
...
}
```

- Add a check to one of your tests:

```ts
    describe('Login Flow', () => {
        it('should login with valid credentials', async () => {
            ...
            await browser.check('My Login Page')
            ...
        });
    })
```

- Configure with your Sauce credentials from https://app.saucelabs.com/user-settings.

```sh
export SAUCE_USERNAME=__YOUR_SAUCE_USER_NAME__
export SAUCE_ACCESS_KEY=__YOUR_SAUCE_ACCESS_KEY__
```

- Run the test the way you are used to.

## Advanced usage

### Build attributes

`buildName`, `branch` and `project` can be defined when adding `SauceVisualService` to you WebdriverIO project, through the `options` parameter.

Example:

```ts
    services: ['sauce', ['@saucelabs/wdio-sauce-visual-service', {
        buildName: 'Sauce Demo Test',
        branch: 'main',
        project: 'WDIO examples'
    }]],
```

### Ignored regions

#### User-specified ignored region

In the case you need to ignore some region when running your tests, Sauce Labs Visual provides a way to ignore user-specified areas.

Those ignored regions are specified when requesting a new snapshot.

A region is defined by four elements.

- `x`, `y`: The location of the top-left corner of the ignored region
- `width`: The width of the region to ignore
- `height`: The heigh of the region to ignore

*Note: all values are pixels*

Example:

```ts
await browser.check('Before Login', {
    ignore: [
        {
            x: 100,
            y: 100,
            width: 200,
            height: 200,
        },
    ],
});
```

#### Component-based ignored region

Alternatively, an ignored region can be a specific element from the page.

Example:

```ts
    await browser.check('Inventory Page', {
        ignore: [
            // addBackPackToCartButton will be ignored
            InventoryPage.addBackPackToCartButton,
        ],
    });

```

[Follow me](https://github.com/saucelabs/visual-examples/blob/main/wdio/src/inventory-ignore-regions.spec.ts) to see complete working example