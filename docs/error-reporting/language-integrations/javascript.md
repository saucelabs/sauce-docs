---
id: javascript
title: JavaScript Integration Guide
sidebar_label: JavaScript
description: Use JavaScript in your Backtrace project.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

Backtrace provides an open source module that you can use to capture uncaught JavaScript errors, as well as manually send reports.

## What You'll Need

- A Backtrace account ([log in](https://backtrace.io/login) or sign up for a [free trial license](https://backtrace.io/sign-up)).
- Your subdomain name (used to connect to your Backtrace instance). For example, `https://example-subdomain.sp.backtrace.io`.
- A Backtrace project and a submission token.

:::tip Generate a Submission Token

1. In the Backtrace Console, go to **Project settings > Error submission > Submission tokens**.
1. Select **+**.

:::

## Download and Documentation

The download of `backtrace-js` module and its full documentation is available at [https://github.com/backtrace-labs/backtrace-js](https://github.com/backtrace-labs/backtrace-js).

## Example Usage

```javascript
// Import backtrace-js with your favorite package manager.
import * as bt from 'backtrace-js';

bt.initialize({
  endpoint: "https://yourcompany.sp.backtrace.io:6098",
  token: "51cc8e69c5b62fa8c72dc963e730f1e8eacbd243aeafc35d08d05ded9a024121"
});

// Later, when you have an error:
bt.report(new Error("something broke"));
```

## Testing

```bash
npm install
./node_modules/.bin/browserify test/app.js --outfile test/out.js
node test/server.js
```
