---
id: assert-is
title: Assert Is
sidebar_label: Assert Is 
description: "This assertion is used to check if the value of the element defined by the expression belongs to a specific type."
---

This assertion is used to check if the value of the element defined by the expression belongs to a specific type. This is one of the more commonly used assertions because it can be used to verify various things such as whole numbers, email addresses, phone numbers, URLs, and so forth.

## Parameters

| **Name** | **Type/Value** | **Required** |
| --- | --- | --- |
| Expression | Expression | Yes |
| Type | 'integer', 'float', 'url', 'boolean', 'phone', 'email', 'map', 'array' | Yes |
| Mode | 'all' or 'one' | No |
| Level | 'error' or 'warning' | No |
| Modifier | 'not' | No |
| Execute if item exists | 'true' or 'false' | No |
| Stop test if fails | 'true' or 'false' | No |
| Comment | String | No |

* __Expression__: It's the path to the element we want to operate on (e.g. `payload.ProductID`). See [Expression](/api-testing/mark2/reference/expression/) for more details.
* __Type__: The data type of the value. The possible values are: 
    * _integer_: checks if field is an integer value; 
    * _float_: checks if field is a decimal value; 
    * _url_: checks if the field is a well formatted url; 
    * _boolean_: checks if field is a boolean value; 
    * _phone_: checks if field contains a valid phone number format; 
    * _email_: checks if field is a valid email format; 
    * _map_: checks if field is a map type; 
    * _array_: checks if the field is an array.
* __Mode__: Specify if all the same elements in the payload should match the assertion (‘all’) or if only one element (‘one’) is enough.
* __Level__: Specify if the assertion fails whether it should be considered an ‘error’ or just a ‘warning’.
* __Modifier__: The assertion is considered verified if it does not pass.
* __Execute if item exists__: The assertion is evaluated only if the element exists. This is useful when the element does not always exist.
* __Stop test if fails__: The test will be immediately stopped if the assertion fails.
* __Comment__: Add comment messages in the form of a string data type.

:::note
A **warning** will not trigger alerts (such as email or text messages). 
:::

## Code View Example

```html
<assert-is expression=”data.id” type=”integer”/>
```