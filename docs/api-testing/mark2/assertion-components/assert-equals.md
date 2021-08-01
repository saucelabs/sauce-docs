---
id: assert-equals
title: Assert Equals
sidebar_label: Assert Equals 
description: "This assertion is used to check if the element value described by the expression is equal to a specific value."
---

This assertion is used to check if the element value described by the expression is equal to a specific value. A direct one-to-one comparison.

## Parameters

| **Name** | **Type/Value** | **Required** |
| --- | --- | --- |
| Expression | Expression | Yes |
| Value | String | Yes |
| Type | 'integer' or 'float' | No |
| Mode | 'all' or 'one' | No |
| Level | 'error' or 'warning' | No |
| Modifier | 'not' | No |
| Execute if item exists | 'true' or 'false' | No |
| Stop test if fails | 'true' or 'false' | No |
| Comment | String | No |

* __Expression__: It's the path to the element we want to operate on (e.g. `payload.ProductID`). See [Expression](/api-testing/mark2/reference/expression/) for more details.
* __Value__: The value we want to compare the expression to.
* __Type__: The data type of the value. This attribute is optional. If no type is defined the values will be compared as strings. If the type is set the values will evaluated with the chosen comparator (ex: ‘integer’ as a whole number, ‘float’ as a decimal number).
* __Mode__: Specify if all the same elements in the payload should match the assertion (‘all’) or if only one element (‘one’) is enough.
* __Level__: Specify if the assertion fails whether it should be considered an ‘error’ or just a ‘warning’.
* __Modifier__: The assertion is considered verified if it does not pass.
* __Execute if item exists__: The assertion is evaluated only if the element exists. This is useful when the element does not always exist.
* __Stop test if fails__: The test will be immediately stopped if the assertion fails.
* __Comment__: Add comment messages in the form of a string data type.

:::note
A **warning** will not trigger alerts (such as email or text messages). 
:::

## Code View Examples

```html
<assert-equals expression=”data.code” value=”500″/>
```

```html
<assert-equals expression=”data.code” value=”500″ type=”integer”/>
```