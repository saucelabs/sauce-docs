---
id: if
title: If
sidebar_label: If
keywords:
- api-testing
- logicalcomponents
- if
---

<head>
  <meta name="robots" content="noindex" />
</head>

> **Legacy Documentation**<br/>You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see [API Testing on the Sauce Labs Cloud](/api-testing/).

import useBaseUrl from '@docusaurus/useBaseUrl';

Allows you to run a specific piece of code only if a specific condition is met.

## Parameters

| **Name**   | **Type/Value** | **Required** |
| ---------- | -------------- | ------------ |
| Expression | Expression     | Yes          |

**Expression**: The condition that evaluates if the code must be executed or not.

## Examples

<img src={useBaseUrl('img/api-fortress/2020/12/if.jpg')} alt="if.jpg"/>

if `payload.success` is equal to true then the code within the element is executed, otherwise is skipped.

<img src={useBaseUrl('img/api-fortress/2020/12/ifexists.jpg')} alt="ifexists.jpg"/>

if `_1.intermediate` exists then the code within the element is executed, otherwise is skipped. This is useful when the element is not always present.
