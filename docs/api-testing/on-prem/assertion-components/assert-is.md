---
id: assert-is
title: Assert Is
sidebar_label: Assert Is
description: 'This assertion is used to check if the value of the element defined by the expression belongs to a specific type.'
---

<head>
  <meta name="robots" content="noindex" />
</head>

> **Legacy Documentation**<br/>You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see [API Testing on the Sauce Labs Cloud](/api-testing/).

This assertion is used to check if the value of the element defined by the expression belongs to a specific type. This is one of the more commonly used assertions because it can be used to verify various things such as whole numbers, email addresses, phone numbers, URLs, and so forth.

## Parameters

| **Name**               | **Type/Value**                                                         | **Required** |
| ---------------------- | ---------------------------------------------------------------------- | ------------ |
| Expression             | Expression                                                             | Yes          |
| Type                   | 'integer', 'float', 'url', 'boolean', 'phone', 'email', 'map', 'array' | Yes          |
| Mode                   | 'all' or 'one'                                                         | No           |
| Level                  | 'error' or 'warning'                                                   | No           |
| Modifier               | 'not'                                                                  | No           |
| Execute if item exists | 'true' or 'false'                                                      | No           |
| Stop test if fails     | 'true' or 'false'                                                      | No           |
| Comment                | String                                                                 | No           |

- **Expression**: The path to the element we want to operate on (e.g., `payload.ProductID`). See [Expression](/api-testing/on-prem/reference/expression/) for more details.
- **Type**: The data type of the value. The possible values are:
  - _integer_: checks if field is an integer value;
  - _float_: checks if field is a decimal value;
  - _url_: checks if the field is a well formatted url;
  - _boolean_: checks if field is a boolean value;
  - _phone_: checks if field contains a valid phone number format;
  - _email_: checks if field is a valid email format;
  - _map_: checks if field is a map type;
  - _array_: checks if the field is an array.
- **Mode**: Specify if all the same elements in the payload should match the assertion (‘all’) or if only one element (‘one’) is enough.
- **Level**: Specify if the assertion fails whether it should be considered an ‘error’ or just a ‘warning’.
- **Modifier**: The assertion is considered verified if it does not pass.
- **Execute if item exists**: The assertion is evaluated only if the element exists. This is useful when the element does not always exist.
- **Stop test if fails**: The test will be immediately stopped if the assertion fails.
- **Comment**: Add comment messages in the form of a string data type.

:::note
A **warning** will not trigger alerts (such as email or text messages).
:::

## Code View Example

```html
<assert-is expression="”data.id”" type="”integer”" />
```
