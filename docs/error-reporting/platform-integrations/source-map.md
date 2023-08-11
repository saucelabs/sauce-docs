---
id: source-map
title: Source Maps Integration Guide - Using backtrace-sourcemap-tools
sidebar_label: Source Maps
description: Configure your JS application to automatically upload sourcemap files.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

The following steps guide you through configuring your JS application to automatically upload sourcemap files during the project build.

## What You'll Need

- A Backtrace account ([log in](https://backtrace.io/login) or sign up for a [free trial license](https://backtrace.io/sign-up)).
- Your subdomain name (used to connect to your Backtrace instance). For example, `https://example-subdomain.sp.backtrace.io`.
- A Backtrace project, an error submission token and a symbol submission token.

:::tip Generating Tokens
## Generating an Error Submission Token

1. In the Backtrace Console, go to **Project settings > Error submission > Submission tokens**.
1. Select **+**.


## Generating a Symbol Submission Token

1. In the Backtrace Console, go to **Project settings > Symbols > Access tokens**.
1. Select **+**.

:::

## Obtaining Symbol Submission URL

If you're using a hosted instance of Backtrace, you most likely need only to pass the subdomain name. You can resolve your subdomain name from your instance address.

For example, if your instance address is `https://example.sp.backtrace.io`, your subdomain will be `example`.

If, for some reason, you cannot upload sourcemaps using this way, or you're using an on-premise installation, retrieve the whole URL using the following steps.

### Hosted Instance

If your instance is hosted on backtrace.io, you can create the URL using `https://submit.backtrace.io/<your_subdomain>/<submission_token>/sourcemap`.

For example, for subdomain `https://example.sp.backtrace.io` and token `bebbbc8b2bdfac76ad803b03561b25a44039e892ffd3e0beeb71770d08e2c8a7`, the URL will be `https://submit.backtrace.io/example/bebbbc8b2bdfac76ad803b03561b25a44039e892ffd3e0beeb71770d08e2c8a7/sourcemap`.

### On-premise

If your instance is hosted on-premise, you can create the URL using `<your address>:6098//post?format=sourcemap&token=<submission token>`.

For example, for the address `https://backtrace.example.com` and token `bebbbc8b2bdfac76ad803b03561b25a44039e892ffd3e0beeb71770d08e2c8a7`, the URL will be `https://backtrace.example.com:6098//post?format=sourcemap&token=bebbbc8b2bdfac76ad803b03561b25a44039e892ffd3e0beeb71770d08e2c8a7`.

## General Development

### Step 1: Enable Source Maps for Your Application

This step is development tool specific.

#### Typescript (tsc)

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

#### UglifyJS

Pass `--source-map` as parameter to `uglifyjs`:

```
$ uglifyjs main.js -c -m --source-map -o main.min.js
```

### Step 2: Set up `@backtrace/javascript-cli`

1. Install `@backtrace/javascript-cli` as a dev dependency:

```bash
> npm install --save-dev @backtrace/javascript-cli
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
  "backtrace:process": "npx --package @backtrace/javascript-cli backtrace-js process OUTPUT_DIRECTORY",
  "backtrace:upload": "npx --package @backtrace/javascript-cli backtrace-js upload OUTPUT_DIRECTORY UPLOAD_OPTIONS"
}
```

Ensure to replace `OUTPUT_DIRECTORY` with the path to the directory where your transpiled scripts are stored.

Replace `UPLOAD_OPTIONS` with either `--subdomain <your subdomain> --token <your token>` or `--url <your upload URL>`, obtained from [the symbol submission URL](#obtaining-symbol-submission-url).

#### Configuration File
Instead of providing options in script argument lines, you can configure them in the `.backtraceclirc` configuration file:

```jsonc
{
  "path": "OUTPUT_DIRECTORY",
  "upload": {
    "subdomain": "your subdomain",
    "token": "your token",
    // or
    "url": "your upload URL"
  }
}
```

For more details consult `@backtrace/javascript-cli` README.

### Step 3: Set Up Automatic Processing and Upload

To process and upload your artifacts, you must first run `npm run backtrace:process` and then `npm run backtrace:upload`.

To ensure that this is done automatically, you can add these commands to your production script:
```json
"scripts": {
  "build": "my current build command && npm run backtrace:process && npm run backtrace:upload"
}
```

## Webpack

If you're using Webpack as your project bundler, you can use `@backtrace/webpack-plugin` to automate working with sourcemaps.

### Step 1: Enable Source Maps for Your Application

Set `devtool` to `source-map` in your `webpack.config.js`:

```js
module.exports = {
  devtool: 'source-map',
  // other configuration
}
```

If you're using code transpiler plugins (such as Typescript), ensure to enable `source-mapping` there as well.

### Step 2: Set up `@backtrace/webpack-plugin`

1. Install `@backtrace/webpack-plugin` as a developer dependency:

```bash
> npm install --save-dev @backtrace/webpack-plugin
```

2. Add it to your `plugins` array in `webpack.config.js`:

```js
import { BacktracePlugin } from '@backtrace/webpack-plugin';
// or
const { BacktracePlugin } = require('@backtrace/webpack-plugin');

module.exports = {
  // other configuration
  plugins: [new BacktracePlugin({
    // enable upload only on production builds
    uploadUrl: process.env.NODE_ENV === "production" ? "<your upload URL>" : undefined
  })]
}
```

## Rollup

If you're using Rollup as your project bundler, you can use `@backtrace/rollup-plugin` to automate working with sourcemaps.

### Step 1: Enable Source Maps for Your Application

Set `sourcemap` in `output` to `true` in your `rollup.config.js`:

```js
module.exports = {
  output: {
    sourcemap: true
  }
}
```

If you're using code transpiler plugins (such as Typescript), ensure to enable source-mapping there as well.

### Step 2: Set up `@backtrace/rollup-plugin`

1. Install `@backtrace/rollup-plugin` as a devevloper dependency:

```
> npm install --save-dev @backtrace/rollup-plugin
```

2. Add it to your `plugins` array in `rollup.config.js`:

```js
import { BacktracePlugin } from '@backtrace/rollup-plugin';
// or
const { BacktracePlugin } = require('@backtrace/rollup-plugin');

module.exports = {
  // other configuration
  plugins: [BacktracePlugin({
    // enable upload only on production builds
    uploadUrl: process.env.NODE_ENV === "production" ? "<your upload URL>" : undefined
  })]
}
```


## Vite

If you're using Vite as your project bundler, you can use `@backtrace/vite-plugin` to automate working with sourcemaps.

### Step 1: Enable Source Maps for Your Application

Set `sourcemap` in `output` to `true` in your `vite.config.js`:

```js
module.exports = {
  build: {
    sourcemap: true
  }
}
```

If you're using code transpiler plugins (such as Typescript), ensure to enable source-mapping there as well.

### Step 2: Set up `@backtrace/vite-plugin`

1. Install `@backtrace/vite-plugin` as a developer dependency:

```
> npm install --save-dev @backtrace/vite-plugin
```

2. Add it to your `plugins` array in `vite.config.js`:

```js
import { BacktracePlugin } from '@backtrace/vite-plugin';
// or
const { BacktracePlugin } = require('@backtrace/vite-plugin');

module.exports = {
  // other configuration
  plugins: [BacktracePlugin({
    // enable upload only on production builds
    uploadUrl: process.env.NODE_ENV === "production" ? "<your upload URL>" : undefined
  })]
}
```

## Don't See Your Tool Described Here?

We are adding support for the most popular tools regularly. You can always use `@backtrace/javascript-cli`; it works with any output JS files.
