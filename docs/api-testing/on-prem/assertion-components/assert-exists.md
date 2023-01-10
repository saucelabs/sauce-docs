---
id: assert-exists
title: Assert Exists
sidebar_label: Assert Exists
description: 'This assertion is used to check if the element described by the expression exists. The presence of the element, even empty, is enough to consider it a valid assertion.'
---

<head>
  <meta name="robots" content="noindex" />
</head>

> **Legacy Documentation**<br/>You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see [API Testing on the Sauce Labs Cloud](/api-testing/).

This assertion is used to check if the element described by the expression exists. The presence of the element, even empty, is enough to consider it a valid assertion.

## Parameters

| **Name**           | **Type/Value**       | **Required** |
| ------------------ | -------------------- | ------------ |
| Expression         | Expression           | Yes          |
| Mode               | 'all' or 'one'       | No           |
| Level              | 'error' or 'warning' | No           |
| Modifier           | 'not'                | No           |
| Stop test if fails | 'true' or 'false'    | No           |
| Comment            | String               | No           |

- **Expression**: The path to the element we want to operate on (e.g., `payload.ProductID`). See [Expression](/api-testing/on-prem/reference/expression/) for more details.
- **Mode**: Specify if all the same elements in the payload should match the assertion (‘all’) or if only one element (‘one’) is enough.
- **Level**: Specify if the assertion fails whether it should be considered an ‘error’ or just a ‘warning’.
- **Modifier**: The assertion is considered verified if it does not pass.
- **Stop test if fails**: The test will be immediately stopped if the assertion fails.
- **Comment**: Add comment messages in the form of a string data type.

:::note
A **warning** will not trigger alerts (such as email or text messages).
:::

## Code View Examples

```html
<assert-exists expression="”data.id”" />
```
