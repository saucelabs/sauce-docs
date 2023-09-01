---
id: source-map
title: Setting up Source Maps for Backtrace
sidebar_label: Source Maps
description: Configure your JS application to automatically upload sourcemap files.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

The following steps guide you through configuring your JavaScript application to automatically upload sourcemap files during the project build.

## What You'll Need

- A Backtrace account ([log in](https://backtrace.io/login) or sign up for a [free trial license](https://backtrace.io/sign-up)).
- A source map upload URL

## Create a Source Map Upload URL

Refer to [Symbol submission token and URL](/error-reporting/project-setup/submission-url) to create a source map upload URL using this token type and endpoint:

<table>
<tr><td><b>Token type</b></td><td>symbol:post</td></tr>
<tr><td><b>Endpoint</b></td><td>sourcemap</td></tr>
</table>

## Creating and Uploading Source Maps

**Step 1: Enable Source Maps for Your Application**

<Tabs
groupId="applications"
defaultValue="typescript"
values={[
{label: 'Typescript (tsc)', value: 'typescript'},
{label: 'UglifyJS', value: 'uglify'},
]}>

<TabItem value="typescript">

Set `sourceMap` in `compilerOptions` in your `tsconfig.json` to `true`. For example:

```jsonc
{
    "compilerOptions": {
        // other options
        "sourceMap": true
    },
    "include": ["./src"]
}
```

</TabItem>

<TabItem value="uglify">

Pass `--source-map` as parameter to `uglifyjs`:

```bash
uglifyjs main.js -c -m --source-map -o main.min.js
```

</TabItem>
</Tabs>

**Step 2: Configure @backtrace-labs/javascript-cli**

1. Install `@backtrace-labs/javascript-cli` as a dev dependency:

   ```bash
   npm install --save-dev @backtrace-labs/javascript-cli
   ```

2. Add the following scripts to your `package.json` file:

   ```json
   "scripts": {
     "backtrace:process": "backtrace-js process OUTPUT_DIRECTORY",
     "backtrace:upload": "backtrace-js upload OUTPUT_DIRECTORY UPLOAD_OPTIONS"
   }
   ```

You can also use `npx` and skip adding the dependency:

```json
"scripts": {
  "backtrace:process": "npx --package @backtrace-labs/javascript-cli backtrace-js process OUTPUT_DIRECTORY",
  "backtrace:upload": "npx --package @backtrace-labs/javascript-cli backtrace-js upload OUTPUT_DIRECTORY UPLOAD_OPTIONS"
}
```

Replace `OUTPUT_DIRECTORY` with the path to the directory where your transpiled scripts are stored.

Replace `UPLOAD_OPTIONS` with `--url <your upload URL>`, obtained from [the symbol submission URL](#acquire-a-symbol-submission-token-and-url).

### Configuration File

Instead of providing options in script argument lines, you can configure them in the `.backtracejsrc` configuration file:

```jsonc
{
  "path": "OUTPUT_DIRECTORY",
  "upload": {
    "url": "your upload URL"
  }
}
```

For more details, consult `@backtrace-labs/javascript-cli` [README](https://github.com/backtrace-labs/backtrace-javascript/blob/main/tools/cli/README.md).

**Step 3: Set Up Automatic Processing and Upload**

To process and upload your artifacts, you must first run `npm run backtrace:process` and then `npm run backtrace:upload`.

To ensure that this is done automatically, you can add these commands to your production script:

```json
"scripts": {
  "build": "my current build command && npm run backtrace:process && npm run backtrace:upload"
}
```

## Project Bundlers

<Tabs
groupId="project-bundler"
defaultValue="webpack"
values={[
{label: 'Webpack', value: 'webpack'},
{label: 'Rollup', value: 'rollup'},
{label: 'Vite', value: 'vite'},
]}>

<TabItem value="webpack">

If you're using Webpack as your project bundler, you can use `@backtrace-labs/webpack-plugin` to automate working with sourcemaps.

**Step 1: Enable Source Maps for Your Application**

Set `devtool` to `source-map` in your `webpack.config.js`:

```js
module.exports = {
  devtool: 'source-map',
  // other configuration
}
```

If you're using code transpiler plugins (such as Typescript), ensure to enable source-mapping there as well.

**Step 2: Set up `@backtrace-labs/webpack-plugin`**

1. Install `@backtrace-labs/webpack-plugin` as a developer dependency:

   ```bash
   npm install --save-dev @backtrace-labs/webpack-plugin
   ```

2. Add it to your `plugins` array in `webpack.config.js`:

   ```js
   import { BacktracePlugin } from '@backtrace-labs/webpack-plugin';
   // or
   const { BacktracePlugin } = require('@backtrace-labs/webpack-plugin');

   module.exports = {
     // other configuration
     plugins: [new BacktracePlugin({
       // enable upload only on production builds
       uploadUrl: process.env.NODE_ENV === "production" ? "<your upload URL>" : undefined
     })]
   }
   ```

</TabItem>

<TabItem value="rollup">

If you're using Rollup as your project bundler, you can use `@backtrace-labs/rollup-plugin` to automate working with sourcemaps.

**Step 1: Enable Source Maps for Your Application**

Set `sourcemap` in `output` to `true` in your `rollup.config.js`:

```js
module.exports = {
  output: {
    sourcemap: true
  }
}
```

If you're using code transpiler plugins (such as Typescript), ensure to enable source-mapping there as well.

**Step 2: Set up `@backtrace-labs/rollup-plugin`**

1. Install `@backtrace-labs/rollup-plugin` as a developer dependency:

   ```bash
   npm install --save-dev @backtrace-labs/rollup-plugin
   ```

2. Add it to your `plugins` array in `rollup.config.js`:

   ```js
   import { BacktracePlugin } from '@backtrace-labs/rollup-plugin';
   // or
   const { BacktracePlugin } = require('@backtrace-labs/rollup-plugin');

   module.exports = {
     // other configuration
     plugins: [BacktracePlugin({
       // enable upload only on production builds
       uploadUrl: process.env.NODE_ENV === "production" ? "<your upload URL>" : undefined
     })]
   }
   ```

</TabItem>

<TabItem value="vite">

If you're using Vite as your project bundler, you can use `@backtrace-labs/vite-plugin` to automate working with sourcemaps.

**Step 1: Enable Source Maps for Your Application**

Set `sourcemap` in `output` to `true` in your `vite.config.js`:

```js
module.exports = {
  build: {
    sourcemap: true
  }
}
```

If you're using code transpiler plugins (such as Typescript), ensure to enable source-mapping there as well.

**Step 2: Set up `@backtrace-labs/vite-plugin`**

1. Install `@backtrace-labs/vite-plugin` as a developer dependency:

   ```bash
   npm install --save-dev @backtrace-labs/vite-plugin
   ```

2. Add it to your `plugins` array in `vite.config.js`:

   ```js
   import { BacktracePlugin } from '@backtrace-labs/vite-plugin';
   // or
   const { BacktracePlugin } = require('@backtrace-labs/vite-plugin');

   module.exports = {
     // other configuration
     plugins: [BacktracePlugin({
       // enable upload only on production builds
       uploadUrl: process.env.NODE_ENV === "production" ? "<your upload URL>" : undefined
     })]
   }
   ```

</TabItem>
</Tabs>

:::note Don't See Your Tool Described Here?

We are adding support for the most popular tools regularly. You can always use `@backtrace-labs/javascript-cli`; it works with any output JS files.

:::
