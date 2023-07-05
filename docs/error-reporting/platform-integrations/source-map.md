---
id: source-map
title: Source Maps Integration Guide - Using backtrace-sourcemap-tools
sidebar_label: Source Maps
description: Configure your JS application to automatically upload sourcemap files.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

The following steps guide you through configuring your JS application to automatically upload sourcemap files during the project build. Additionally, it explains how to set the appropriate ID in your Backtrace client to match errors with the corresponding sourcemap files.

## What You'll Need

- A Backtrace account ([log in](https://backtrace.io/login) or sign up for a [free trial license](https://backtrace.io/sign-up)).
- Your subdomain name (used to connect to your Backtrace instance). For example, `https://example-subdomain.sp.backtrace.io`.
- A Backtrace project and a submission token.

:::tip Generate a Submission Token

1. In the Backtrace Console, go to **Project settings > Error submission > Submission tokens**.
1. Select **+**.

:::

## Step 1: Generate Source Maps for Your Application

This step is application-specific. Take note of the location of your build folder as you'll need it in step 4.

## Step 2: Install `backtrace-sourcemap-tools` as a Dev Dependency

Use the following command to install backtrace-sourcemap-tools as a dev dependency:

```bash
npm install "git@github.com:backtrace-labs/backtrace-sourcemap-tools.git" --save-dev
```

Alternatively, add the following entry to your package.json file under `devDependencies`:

```json
"devDependencies": {
  "backtrace-sourcemap-tools": "git@github.com:backtrace-labs/backtrace-sourcemap-tools.git"
}
```

## Step 3: Configure Sourcemap Upload URL in `package.json`

Specify the URL, token, and universe where Backtrace sourcemap tools will upload sourcemap files when your project is built. Add the following configuration to your `package.json` file under the top-level key `backtrace`:

```json
"backtrace": {
  "sourcemap": {
    "upload": "https://<universe>.sp.backtrace.io:6098/post?format=sourcemap&token=<token>"
  }
}
```

You need to replace `<universe>` with your universe name, and `<token>` with the symbol upload token generated in your Project Settings under the Symbols section. For on-premise Backtrace servers, replace `<universe>.sp.backtrace.io:6098` with the server and port of your Backtrace instance.

## Step 4: Set Up Automatic Sourcemap Uploads

This method uploads all artifact .map files.

First, append `npm run upload` to the `build` command in your package.json's `scripts` section:

```json
"scripts": {
  "build": "my current build command && npm run upload",
  ...
}
```

Finally, add the action script `upload` to run `backtrace-sourcemap` with `package.json` and the build folder as parameters. In this example, both the `package.json` and the `dist` folder are assumed to be located in the project root directory:

```json
"scripts": {
  "build": "my current build command && npm run upload",
  "upload": "./node_modules/.bin/backtrace-sourcemap upload package.json dist"
}
```

## Step 5: Set Up Automatic UUID Generation in `backtrace-node` or `backtrace-js`

To match a sourcemap file with an error report, a UUID is generated and attached to both the sourcemap file and the outgoing crash report.

In your Backtrace client initialization code, call `client.setSymbolication()` to enable automatic UUID generation:

```javascript
var client = bt.initialize({
  endpoint: '...',
  token: '...'
});

client.setSymbolication(); // This line enables automatic UUID generation
```
