---
id: each
title: Each
sidebar_label: Each
keywords:
    - api-testing
    - components
    - each
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Allows you to iterate over a collection of elements and execute the piece of code for each element.

## Parameters

| **Name** | **Type/Value** | **Required** |
| --- | --- | --- |
| Expression | Expression | Yes |

__Expression__: The path of the collection you want to iterate on.

:::note
See the [Expression page](/api-testing/mark2/reference/expression) for more details.
:::

## Examples

<img src={useBaseUrl('img/api-fortress/2020/12/1each.jpg')} alt="1each.jpg"/>

for each 'legs' collection checks if 'vector' item is an integer value.

If a collection is nested in another one, you need to refer to them as `_1`, `_2`, and so on.

<img src={useBaseUrl('img/api-fortress/2020/12/nestedEach.jpg')} alt="nestedEach.jpg"/>


for each payload.content.flights collection checks if 'price.amount' is an integer and then, for each legs array (that is a nested collection in the flights collection) checks if vector item is an integer value.
