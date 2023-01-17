---
id: assert-compares
title: Assert Compares
sidebar_label: Assert Compares
description: 'Compare two payloads in text, structure or values. Text compares as plain text, values compares regardless of text layout, structure compares the structure.'
---

<head>
  <meta name="robots" content="noindex" />
</head>

> **Legacy Documentation**<br/>You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see [API Testing on the Sauce Labs Cloud](/api-testing/).

import useBaseUrl from '@docusaurus/useBaseUrl';

Allows you to compare two payloads in terms of text, structure or values.

## Parameters

| **Name**           | **Type/Value**          | **Required** |
| ------------------ | ----------------------- | ------------ |
| Expression 1       | Expression              | Yes          |
| Expression 2       | Expression              | Yes          |
| Mode               | Text, values, structure | Yes          |
| Level              | error, warning          | No           |
| Stop test if fails | True, false             | No           |

- **Expression 1**: the first payload you want to compare. See [Expression](/api-testing/on-prem/reference/expression/) for more details.
- **Expression 2**: the second payload you want to compare.
- **Mode**: the comparator you wish to use.
  - **Text** compares the text of the two payloads as plain text
  - **values** compares the two payloads regardless the text layout
  - **structure** compares only the structure of the two payloads.
- **Level**: Specifies, when the assertion fails, whether it should be considered an **error** or just a **warning**.
- **Stop test if fails**: The test will be immediately stopped if the assertion fails.

:::note
A **warning** will not trigger alerts (such as email or text messages).
:::

<img src={useBaseUrl('img/api-fortress/2020/09/compares.jpg')} alt="Assertion Compares Pic"/>
