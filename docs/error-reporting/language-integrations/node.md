---
id: node
title: Node.js Integration Guide
sidebar_label: Node.js
description: Use Node in your Backtrace project.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

Backtrace provides an open source module that you can use to capture uncaught JavaScript errors in Node.js and manually send reports.

## What You'll Need

- A Backtrace account ([log in](https://backtrace.io/login) or sign up for a [free trial license](https://backtrace.io/sign-up)).
- Your subdomain name (used to connect to your Backtrace instance). For example, `https://example-subdomain.sp.backtrace.io`.
- A Backtrace project and a submission token.

:::tip Generate a Submission Token

1. In the Backtrace Console, go to **Project settings > Error submission > Submission tokens**.
1. Select **+**.

:::

## Download

You can download the `backtrace-node` module from the npm package with the same name or from [https://github.com/backtrace-labs/backtrace-node](https://github.com/backtrace-labs/backtrace-node).

## Example Usage

```javascript
var bt = require('backtrace-node');
bt.initialize({
  endpoint: "https://yourcompany.sp.backtrace.io:6098",
  token: "51cc8e69c5b62fa8c72dc963e730f1e8eacbd243aeafc35d08d05ded9a024121",
});

// ...

bt.report(new Error("something broke"));
```

## Documentation

For more advanced usage or to learn more about backtrace-node, refer to the official package documentation at [https://github.com/backtrace-labs/backtrace-node#readme](https://github.com/backtrace-labs/backtrace-node#readme).
