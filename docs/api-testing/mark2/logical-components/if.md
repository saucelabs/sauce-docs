---
id: if
title: If
sidebar_label: If
keywords:
    - api-testing
    - logicalcomponents
    - if
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Allows you to run a specific piece of code only if a specific condition is met.

## Parameters

| **Name** | **Type/Value** | **Required** |
| --- | --- | --- |
| Expression | Expression | Yes |

__Expression__: The condition that evaluates if the code must be executed or not.

## Examples

<img src={useBaseUrl('img/api-fortress/2020/12/if.jpg')} alt="if.jpg"/>

if `payload.success` is equal to true then the code within the element is executed, otherwise is skipped.

<img src={useBaseUrl('img/api-fortress/2020/12/ifexists.jpg')} alt="ifexists.jpg"/>

if `_1.intermediate` exists then the code within the element is executed, otherwise is skipped. This is useful when the element is not always present.