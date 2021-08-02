---
id: assert-exists
title: Assert Exists
sidebar_label: Assert Exists 
description: "This assertion is used to check if the element described by the expression exists. The presence of the element, even empty, is enough to consider it a valid assertion."
---

This assertion is used to check if the element described by the expression exists. The presence of the element, even empty, is enough to consider it a valid assertion.

## Parameters

| **Name** | **Type/Value** | **Required** |
| --- | --- | --- |
| Expression | Expression | Yes |
| Mode | 'all' or 'one' | No |
| Level | 'error' or 'warning' | No |
| Modifier | 'not' | No |
| Stop test if fails | 'true' or 'false' | No |
| Comment | String | No |

* __Expression__: It's the path to the element we want to operate on (e.g. `payload.ProductID`). See [Expression](/api-testing/mark2/reference/expression/) for more details.
* __Mode__: Specify if all the same elements in the payload should match the assertion (‘all’) or if only one element (‘one’) is enough.
* __Level__: Specify if the assertion fails whether it should be considered an ‘error’ or just a ‘warning’.
* __Modifier__: The assertion is considered verified if it does not pass.
* __Stop test if fails__: The test will be immediately stopped if the assertion fails.
* __Comment__: Add comment messages in the form of a string data type.

:::note
A **warning** will not trigger alerts (such as email or text messages). 
:::

## Code View Examples

```html
<assert-exists expression=”data.id”/>
```