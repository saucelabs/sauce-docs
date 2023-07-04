---
id: electron
title: Electron Integration Guide
sidebar_label: Electron
description: Use Electron in your Backtrace project.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

Electron is a popular framework that allows you to build cross-platform desktop applications with JavaScript and HTML. It is used by applications such as Discord and Visual Studio Code. You can find more information about Electron on the [Electron homepage](https://electron.atom.io/).

Backtrace provides first-class support for capturing crash dumps from Electron apps in the form of minidumps. Backtrace also automatically downloads symbols for publicly released versions of Electron, enabling human-readable call stacks when using those versions.

## What You'll Need

- A Backtrace account ([log in](https://backtrace.io/login) or sign up for a [free trial license](https://backtrace.io/sign-up)).
- Your subdomain name (used to connect to your Backtrace instance). For example, `https://example-subdomain.sp.backtrace.io`.
- A Backtrace project and a submission token.

:::tip Generate a Submission Token

1. In the Backtrace Console, go to **Project settings > Error submission > Submission tokens**.
1. Select **+**.

:::

## Requirements Summary

Backtrace enables you to capture both Electron process crashes and uncaught JavaScript errors. The setup process differs depending on whether you're working with the main or renderer Electron processes.

To report Electron crashes:

- In both the main and renderer processes, initialize Electron's crash reporter by calling `crashReporter.start()`.

To report uncaught JavaScript errors:

- In the main process, initialize the `backtrace-node` library.
- In the renderer process, use the `backtrace-js` library.

Detailed instructions for setting up crash reporting and error reporting are provided below.

## Main and Renderer Process - Reporting Electron Crashes

To submit a dump file to Backtrace, you need your endpoint and token. Make sure to call `electron.crashReporter.start()` in your Electron application to automatically route crashes to Backtrace. The `submitURL` needs to point to your Backtrace instance and include the format and token query string parameters.

Here's an example of submitting to a Backtrace-hosted instance:

```javascript
const { crashReporter } = require('electron');

crashReporter.start({
  productName: 'iProduct',
  companyName: 'My Company, Inc.',
  submitURL: 'https://mycompany.sp.backtrace.io:6098/post?format=minidump&token=fff016fe152941145a880720158dbca39c0f1b524c96bbd7c95a896556284076',
  uploadToServer: true
});

process.crash();
```

### Additional Attributes and Parameters

Attributes provide relevant tags that can be used to characterize crash reports. They are helpful for adding context to crashes and allow you to group or search for specific tags later. For example, you may want to tag a crash report with a version. More information on attributes can be found in the Backtrace product guide.

When using Backtrace to handle Electron errors, the following attributes are automatically populated. We recommend adding these attributes to your project:

- `ver` (Electron version)
- `process_type` (main or browser)
- `platform` (operating system)
- `_companyName` (Populated from `package.json`, but can be overridden by `companyName` passed to `crashReporter.start`)
- `_productName` (Populated from `package.json`, but can be overridden by `productName` passed to `crashReporter.start`)
- `_version` (Populated from the `version` field in the application's `package.json` file)

There are two ways to include additional attributes with your crash reports. The first method works on Windows, Linux, and macOS, while the second is available only on macOS.

#### Method 1: Windows/Linux/MacOS - Using the `extra` option on `crashReporter.start()`

When calling `crashReporter.start()`, you can provide an optional extra parameter. The keys of this object represent your attribute names, and their values are passed along accordingly.

If you need to modify or add attributes after the initial `crashReporter.start()` call, you'll need to call it again.

```javascript title="Example Code"
const { crashReporter } = require('electron');

crashReporter.start({
  productName: 'iProduct',
  companyName: 'My Company, Inc.',
  submitURL: 'https://mycompany.sp.backtrace.io:6098/post?format=minidump&token=fff016fe152941145a880720158dbca39c0f1b524c96bbd7c95a896556284076',
  uploadToServer: true,
  extra: {
    "version": "1.0.1",
    "datacenter": "nyc"
  }
});

process.crash();
```

#### Method 2: MacOS - Using `crashReporter.setExtraParameter`

On macOS, you can use [`crashReporter.setExtraParameter`](https://electron.atom.io/docs/api/crash-reporter/#crashreportersetextraparameterkey-value-macos) to add additional attributes to your Electron crash reports.

```javascript title="Example Code"
const { crashReporter } = require('electron');

crashReporter.start({
  productName: 'iProduct',
  companyName: 'My Company, Inc.',
  submitURL: 'https://mycompany.sp.backtrace.io:6098/post?format=minidump&token=fff016fe152941145a880720158dbca39c0f1b524c96bbd7c95a896556284076',
  uploadToServer: true
});

crashReporter.setExtraParameter("version", "1.0.1");
crashReporter.setExtraParameter("datacenter", "nyc");

process.crash();
```

## Main Process - JavaScript Error Reporting

To capture JavaScript errors in the main process, you need to install the [`backtrace-node`](https://github.com/backtrace-labs/backtrace-node) npm package (`npm install backtrace-node`).

Initialize the Backtrace reporting module with your endpoint, token, and any attributes you want to use.

```javascript title="Example Code"
const bt = require('backtrace-node');

bt.initialize({
  endpoint: "https://yourcompany.sp.backtrace.io:6098",
  token: "fffab125f8907f0e70bf5efdf4a7ec78163e055df8d8ddd291e2243515488194aaa",
  attributes: {
    'datacenter': 'nyc',
    'version': '1.0.3'
  }
});

// Backtrace automatically creates reports from uncaught exceptions.
// If you want to manually send a report:

bt.report(new Error("Something failed!"));
```

## Renderer Process - JavaScript Error Reporting

To capture JavaScript errors in the renderer process, you need to install the [`backtrace-js`](https://github.com/backtrace-labs/backtrace-js#readme) npm package (`npm install backtrace-js`).

Initialize the Backtrace reporting module with your endpoint, token, and any attributes you want to use.

```javascript title="Example Code"
const bt = require('backtrace-js');

bt.initialize({
  endpoint: "https://yourcompany.sp.backtrace.io:6098",
  token: "fffab125f8907f0e70bf5efdf4a7ec78163e055df8d8ddd291e2243515488194aaa",
  attributes: {
    'datacenter': 'nyc',
    'version': '1.0.3'
  }
});

// Backtrace automatically creates reports from uncaught exceptions.
// If you want to manually send a report:

bt.report(new Error("Something failed!"));
```

## Additional Symbols

If you require additional symbols, refer to the symbolification section of the Backtrace product guide.

By combining this integration with [our support for Node](https://github.com/backtrace-labs/backtrace-node), you gain visibility into various crashes and exceptions in your application.
