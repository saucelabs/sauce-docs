---
id: log-network 
title: Log Network
sidebar_label: Log Network
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

With TestFairy, you can log all your network requests. It gives you an easy way to monitor the network access your app is doing.

A common issue our users discovered while monitoring their apps is **slow** requests or **4xx** error codes. These problems are usually complex to find manually. TestFairy will list all network requests on the session page. Fixing these issues will significantly improve the experience for your users.

<img src={useBaseUrl('/img/test-fairy/sdk/logHttp.png')} alt="example issues"/>

[Code Examples](/test-fairy/sdk/logging)

## Sending NSLog to TestFairy

The TestFairy SDK records your app while used so you can watch recorded sessions to solve problems faster. The SDK can record videos, screenshots, custom events, logs, and device metrics.

The [Remote Logging method](/test-fairy/sdk/remote-logging) explains how to set iOS apps to send NSLogs to TestFairy (from iOS 10 and above).
