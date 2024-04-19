---
id: storybook-static
title: Testing a Static Storybook Web App
sidebar_label: Storybook Static Testing
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

To run Screener against a static Storybook build, instead of starting the Storybook Dev server, follow these setup instructions.

## What You'll Need

- If you haven't already, follow the steps under the [Quickstart](/visual/component-testing/setup/) to integrate Sauce Labs Visual Component Testing (Screener) with Storybook and [set your Sauce credentials as environment variables](/visual/component-testing/setup/#set-environment-variables).
- An existing [Storybook project](https://storybook.js.org/basics/quick-start-guide/) with some [component stories](https://storybook.js.org/basics/writing-stories/).

## Run a Static Storybook Build

1. Export your Storybook project into a static web app by running:

```bash
npm run build-storybook
```

2. Open your "screener.config.js" file and add the `storybookStaticBuildDir` option with its value set to your own static Storybook folder:

<Tabs
defaultValue="Storybook6.4"
values={[
{label: 'Storybook 6.4 or newer', value: 'Storybook6.4'},
{label: 'Storybook 6.3 or older', value: 'Storybook6.3'},
]}>

<TabItem value="Storybook6.4">

```js
module.exports = {
 projectRepo: 'sb-6.4-test',
 apiKey: process.env.SCREENER_API_KEY,
 resolution: '1024x768',
 storybookStaticBuildDir: 'storybook-static'
}
```

</TabItem>
<TabItem value="Storybook6.3">

```js
module.exports = {
 projectRepo: 'sb-6.1-test',
 storybookConfigDir: '.storybook',
 apiKey: process.env.SCREENER_API_KEY,
 resolution: '1024x768',
 storybookStaticBuildDir: 'storybook-static'
}
```

</TabItem>
</Tabs>

3. Run your test:

```bash
npm run test-storybook
```

## More Information

- [Build Storybook as a Static Web App](https://storybook.js.org/docs/react/sharing/publish-storybook#build-storybook-as-a-static-web-application)
