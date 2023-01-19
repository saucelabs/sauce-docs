---
id: flow
title: 'Flow (Pause or Stop a Test)'
sidebar_label: 'Flow (Pause or Stop a Test)'
keywords:
- api-testing
- logicalcomponents
- flow
- start
- stop
---

<head>
  <meta name="robots" content="noindex" />
</head>

> **Legacy Documentation**<br/>You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see [API Testing on the Sauce Labs Cloud](/api-testing/).

import useBaseUrl from '@docusaurus/useBaseUrl';

This component allows you to pause or stop a test entirely.

## Parameters

| **Name**                            | **Type/Value** | **Required** |
| ----------------------------------- | -------------- | ------------ |
| Command                             | 'stop', 'wait' | Yes          |
| Value (depends on 'Command = wait') | Number         | Yes          |

**Command**: This parameter defines the action you want to take. 'Stop' will stop the test. 'Wait' will pause the test for a number of milliseconds defined in the 'Value' parameter.

**Value**: The number of milliseconds you want to pause the test for.

## Examples

This component is especially useful when combined with the "If" component. See the examples below:

<img src={useBaseUrl('img/api-fortress/2020/12/flow_stop.jpg')} alt="flow_stop.jpg"/>

If the statusCode is not `200`, the test will be halt; none of the remaining assertions will be checked.

<img src={useBaseUrl('img/api-fortress/2020/12/flow_wait.jpg')} alt="flow_wait.jpg"/>

In this example, the test will wait 1000 milliseconds before performing the `GET` request.
