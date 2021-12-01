---
id: logical-components
title: Logical Test Components
sidebar_label: Logical Components
description: Learn to write logical components using the Sauce Labs API Testing Composer.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

Logical components are a type of component that you can add to a test using the **Compose** tab (aka Composer). To learn how to access components, see [Adding Components to Tests](/api-testing/composer/#add-components).<br/><img src={useBaseUrl('img/api-fortress/2020/09/logicalComponents.png')} alt="Logical Components" width="600" />


## What You'll Need
* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
* An existing API Testing Project. For details on how to create one, see [API Testing Quickstart](/api-testing/quickstart/).
* Familiarity with the [API Testing Composer](/api-testing/composer/).


## Each

Allows you to iterate over a collection of elements and execute the piece of code for each element.

<details><summary><strong>Parameters</strong></summary>

<table id="table-api">
  <tbody>
  <tr>
  <td colSpan='2'>Fields</td>
  </tr>
    <tr>
     <td><strong>Expression</strong></td>
     <td><p><small>| REQUIRED | EXPRESSION |</small></p><p>The path of the collection you want to iterate on.</p></td>
    </tr>
  </tbody>
</table>

:::note
See [Expressions](/api-testing/on-prem/reference/expression) for more details.
:::

#### Examples

<img src={useBaseUrl('img/api-fortress/2020/12/1each.jpg')} alt="1each.jpg"/>

The `for each 'legs' collection` checks if `vector` item is an integer value.

If a collection is nested in another one, you need to refer to them as `_1`, `_2`, and so on.

<img src={useBaseUrl('img/api-fortress/2020/12/nestedEach.jpg')} alt="nestedEach.jpg"/>

The `for each payload.content.flights` collection checks if `price.amount` is an integer. Then, the `for each legs` array, a nested collection within the flights collection, checks if vector item is an integer value.

</details>



## If

Allows you to run a specific piece of code only if a specific condition is met.

<details><summary><strong>Parameters</strong></summary>

<table id="table-api">
  <tbody>
  <tr>
  <td colSpan='2'>Fields</td>
  </tr>
    <tr>
     <td><strong>Expression</strong></td>
     <td><p><small>| REQUIRED | EXPRESSION |</small></p><p>The condition that evaluates whether or not the code must be executed.</p></td>
    </tr>
  </tbody>
</table>

#### Examples

<img src={useBaseUrl('img/api-fortress/2020/12/if.jpg')} alt="if.jpg"/>

If `payload.success` is equal to true then the code within the element is executed, otherwise is skipped.

<img src={useBaseUrl('img/api-fortress/2020/12/ifexists.jpg')} alt="ifexists.jpg"/>

If `_1.intermediate` exists then the code within the element is executed, otherwise is skipped. This is useful when the element is not always present.

</details>


## While

Allows you to run a block of assertions as long as a condition is valid.

<details><summary><strong>Parameters</strong></summary>

<table id="table-api">
  <tbody>
  <tr>
  <td colSpan='2'>Fields</td>
  </tr>
    <tr>
     <td><strong>Expression</strong></td>
     <td><p><small>| REQUIRED | EXPRESSION |</small></p><p>The condition that has to be met for the assertions block to be executed.</p></td>
    </tr>
  </tbody>
</table>

<img src={useBaseUrl('img/api-fortress/2020/12/while.jpg')} alt="while.jpg"/>

</details>

