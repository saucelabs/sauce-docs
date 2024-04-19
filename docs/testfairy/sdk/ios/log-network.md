---
id: log-network
title: Log Network
sidebar_label: Log Network
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

TestFairy provides a powerful feature that allows you to log all network requests made by your mobile app. This logging capability facilitates the monitoring of network access, enabling you to identify potential issues, such as **slow requests** or HTTP **4xx** error codes.

These issues might be challenging to locate manually but can significantly impact user experience. TestFairy will list all network requests on the session page. Fixing these issues will significantly improve the experience for your users.

<img src={useBaseUrl('/img/testfairy/sdk/logHttp.png')} alt="example issues"/>

:::note
See our [Code Examples](https://docs.saucelabs.com/testfairy/sdk/logging/) for more information.
:::

## Sending NSLog to TestFairy

The TestFairy SDK records your app while used so you can watch recorded sessions to solve problems faster. The SDK can record videos, screenshots, custom events, logs, and device metrics.

:::note
The [Remote Logging method](https://docs.saucelabs.com/testfairy/sdk/remote-logging/) explains how to set iOS apps to send NSLogs to TestFairy (from iOS 10 and above).
:::
