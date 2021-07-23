---
id: assert-compares
title: Assert Compares
sidebar_label: Assert Compares 
description: "Compare two payloads in text, structure or values. Text compares as plain text, values compares regardless of text layout, structure compares the structure."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Allows you to compare two payloads in terms of text, structure or values.

## Parameters

| **Name** | **Type/Value** | **Required** |
| --- | --- | --- |
| Expression 1 | Expression | Yes |
| Expression 2 | Expression | Yes |
| Mode | Text, values, structure | Yes |
| Level | error, warning | No |
| Stop test if fails | True, false | No |

* __Expression 1__: the first payload you want to compare. See [Expression](/api-testing/mark2/reference/expression/) for more details.
* __Expression 2__: the second payload you want to compare. 
* __Mode__: the comparator you wish to use. 
    * **Text** compares the text of the two payloads as plain text
    * **values** compares the two payloads regardless the text layout
    * **structure** compares only the structure of the two payloads. 
* __Level__: Specifies, when the assertion fails, whether it should be considered an **error** or just a **warning**. 
* __Stop test if fails__: The test will be immediately stopped if the assertion fails.

:::note
A **warning** will not trigger alerts (such as email or text messages). 
:::

<img src={useBaseUrl('img/api-fortress/2020/09/compares.jpg')} alt="Assertion Compares Pic"/>
