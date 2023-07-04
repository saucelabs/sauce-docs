---
id: electron
title: Integrating Electron
sidebar_label: Electron
description: Integrate Electron in your Backtrace project.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

Electron is a popular framework that allows you to build cross-platform desktop applications with JavaScript and HTML: Discord, Visual Studio Code, and more use it. The Electron homepage can be found at [https://electron.atom.io/](https://electron.atom.io/).

Backtrace has first-class support for the crash dump format of Electron apps, minidumps. Backtrace also dynamically downloads symbols for publicly released versions of Electron, which means you automatically get human-readable callstacks if you use a publicly released version of Electron.

## What You'll Need

- A Backtrace account ([log in](https://backtrace.io/login) or sign up for a [free trial license](https://backtrace.io/sign-up)).
- Your subdomain name (used to connect to your Backtrace instance). For example, `https://example-subdomain.sp.backtrace.io`.
- A Backtrace project and a submission token.

:::tip Generate a Submission Token

1. In the Backtrace Console, go to **Project settings > Error submission > Submission tokens**.
1. Select **+**.

:::

## Requirements Summary

You can use Backtrace to capture both Electron process crashes, as well as uncaught JavaScript errors. The way to set these up depends on whether you're working in the main or the renderer Electron processes:

1. **Electron Crashes** - In both the main and renderer processes, initialize Electron's crash reporter by calling `crashReporter.start`
1. **Uncaught JavaScript Error**s - Initialize the `backtrace-node` library in the main process. In the renderer process, use the `backtrace-js` library.

More details on setting these up are below.

## Main and Renderer Process - Reporting Electron Crashes

With your endpoint and token, you have everything you need to submit a dump file. Ensure that you call `electron.crashReporter.start` in your application to automatically route crashes to Backtrace. `submitURL` needs to point to your Backtrace instance and include the `format` and `token` query string parameters. See below for a self-contained example of submitting to a Backtrace-hosted instance of Backtrace.

```
const {crashReporter} = require('electron');

crashReporter.start({
  productName: 'iProduct',
  companyName: 'My Company, Inc.',
  submitURL: 'https://mycompany.sp.backtrace.io:6098/post?format=minidump&token=fff016fe152941145a880720158dbca39c0f1b524c96bbd7c95a896556284076',
  uploadToServer: true
});

process.crash();
```

### Additional Attributes and Parameters

Attributes are a way to characterize crash reports with relevant tags. It can be beneficial to embed additional context of the crash and later group or search on these tags. For example, you may want to tag a crash report with a `version`. You can find more information on attributes in the product guide collection.

Electron errors handled by Backtrace will have the following attributes populated. We recommend adding these attributes to your project:

- `ver`: Electron version
- `process_type`: main or browser
- `platform`: OS
- `_companyName`: Populated from package.json, but can be overridden by `companyName` passed to `crashReporter.start`
- `_productName`: Populated from package.json, but can be overridden by `productName` passed to `crashReporter.start`
- `_version`: Populated from version in the application's package.json file

You have two ways to include additional attributes with your crash reports. However, the second method is only available on MacOS presently.

### Windows/Linux/MacOS - Use the Extra Option on `crashReporter.start`

When calling `crashReporter.start`, you can provide an optional parameter `extra`. The keys of this object will be your attribute names, and their values are passed along accordingly.

If you use this method and need to change or add attributes after first calling `crashReporter.start`, you will need to call it again.

```java
const {crashReporter} = require('electron');

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

On macOS, you can also use [crashReporter.setExtraParameter](https://www.electronjs.org/docs/latest/api/crash-reporter/#crashreportersetextraparameterkey-value-macos) to add additional attributes to your Electron crash reports.

```java
const {crashReporter} = require('electron');

crashReporter.start({
    productName: 'iProduct',
    companyName: 'My Company, Inc.',
    submitURL: 'https://mycompany.sp.backtrace.io:6098/post?format=minidump&token=fff016fe152941145a880720158dbca39c0f1b524c96bbd7c95a896556284076',
    uploadToServer: true
});

crashReporter.setExtraParameter("version", "1.0.1")
crashReporter.setExtraParameter("datacenter", "nyc")

process.crash();
```

## Main Process - JavaScript Error Reporting

To capture JavaScript errors in the main process, install our [Node.js](https://github.com/backtrace-labs/backtrace-node) npm package (`npm install backtrace-node`).

Initialize the Backtrace reporting module with your endpoint, token, and any attributes you wish to use.

Example code:

```java
var bt = require('backtrace-node');
bt.initialize({
  endpoint: "https://yourcompany.sp.backtrace.io:6098",
  token: "fffab125f8907f0e70bf5efdf4a7ec78163e055df8d8ddd291e2243515488194aaa",
  attributes: {
      'datacenter': 'nyc',
      'version': '1.0.3'
  }
});

// Backtrace creates reports from your uncaught exceptions automatically.
// If you wish to send a report manually:

bt.report(new Error("Something failed!"));
```

## Renderer Process - JavaScript Error Reporting

To capture JavaScript errors in the renderer process, install our [JavaScript](https://github.com/backtrace-labs/backtrace-js#readme) npm package (`npm install backtrace-js`).

Initialize the Backtrace reporting module with your endpoint, token, and any attributes you wish to use.

Example code:

```js
var bt = require('backtrace-js');
bt.initialize({
  endpoint: "https://yourcompany.sp.backtrace.io:6098",
  token: "fffab125f8907f0e70bf5efdf4a7ec78163e055df8d8ddd291e2243515488194aaa",
  attributes: {
      'datacenter': 'nyc',
      'version': '1.0.3'
  }
});

// Backtrace creates reports from your uncaught exceptions automatically.
// If you wish to send a report manually:

bt.report(new Error("Something failed!"));
```

## Additional Symbols

If you require additional symbols, see the symbolification section of the product guide.

Combine this with [our support for Node](https://github.com/backtrace-labs/backtrace-node) to have visibility into all manners of crashes and exceptions in your application.
