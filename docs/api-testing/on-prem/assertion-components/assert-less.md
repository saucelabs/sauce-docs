---
id: assert-less
title: Assert Less
sidebar_label: Assert Less
description: 'This assertion is used to check if the element value described by the expression is less than a proposed value. The values can be compared as a string or number.'
---

<head>
  <meta name="robots" content="noindex" />
</head>

> **Legacy Documentation**<br/>You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see [API Testing on the Sauce Labs Cloud](/api-testing/).

This assertion is used to check if the element value described by the expression is less than a proposed value. The values can be compared as a _string_ or _number_.

## Parameters

| **Name**               | **Type/Value**       | **Required** |
| ---------------------- | -------------------- | ------------ |
| Expression             | Expression           | Yes          |
| Value                  | String               | Yes          |
| Type                   | 'integer' or 'float' | No           |
| Mode                   | 'all' or 'one'       | No           |
| Level                  | 'error' or 'warning' | No           |
| Modifier               | 'not'                | No           |
| Execute if item exists | 'true' or 'false'    | No           |
| Stop test if fails     | 'true' or 'false'    | No           |
| Comment                | String               | No           |

- **Expression**: The path to the element we want to operate on (e.g., `payload.ProductID`). See [Expression](/api-testing/on-prem/reference/expression/) for more details.
- **Value**: The value we want to compare the expression to.
- **Type**: The data type of the value. This attribute is optional. If no type is defined the values will be compared as strings. If the type is set the values will evaluated with the chosen comparator (ex: ‘integer’ as a whole number, ‘float’ as a decimal number).
- **Mode**: Specify if all the same elements in the payload should match the assertion (‘all’) or if only one element (‘one’) is enough.
- **Level**: Specify if the assertion fails whether it should be considered an ‘error’ or just a ‘warning’.
- **Modifier**: The assertion is considered verified if it does not pass.
- **Execute if item exists**: The assertion is evaluated only if the element exists. This is useful when the element does not always exist.
- **Stop test if fails**: The test will be immediately stopped if the assertion fails.
- **Comment**: Add comment messages in the form of a string data type.

:::note
A **warning** will not trigger alerts (such as email or text messages).
:::

## Code View Examples

```html
<assert-less expression="”data.code”" value="”4503″" />
```

```html
<assert-less expression="”data.code”" value="”4503″" type="”integer”" />
```
