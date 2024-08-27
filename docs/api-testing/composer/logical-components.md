---
id: logical-components
title: Logical Test Components
sidebar_label: Logical Components
description: Learn to write logical components using the Sauce Labs API Testing Composer.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

Logical components are a type of component that you can add to a test using the **Compose** tab (aka Composer). To learn how to access the components and create a test using the Composer see [Writing API Tests with the Composer](/api-testing/composer/).

<img src={useBaseUrl('img/api-testing/logicalComponents.png')} alt="Logical Components" />

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
- An existing API Testing Project. For details on how to create one, see [API Testing Quickstart](/api-testing/quickstart/).
- Familiarity with the [API Testing Composer](/api-testing/composer/).

## Logical Components

### Each

Allows you to iterate over a collection of elements and execute the piece of code for each element.

<details>
<summary><strong>Parameters</strong></summary>

<table id="table-api">
  <tbody>
  <tr>
  <td colSpan='2'>Fields</td>
  </tr>
    <tr>
     <td><strong>Expression</strong></td>
     <td><p><small>| REQUIRED | <a href="/api-testing/composer/expressions/#using-expressions">EXPRESSION</a> |</small></p><p>The path of the collection you want to iterate on.</p></td>
    </tr>
  </tbody>
</table>

<br/>

<strong>Examples</strong>

<img src={useBaseUrl('img/api-testing/simple_each.png')} alt="one each"/>

For **Each** legs collection, checks if the nested `vector` item is an integer value.

```json title="Legs Collection Example"
{
  "legs": [
    {
      "vector": 1
    },
    {
      "vector": 3
    }
  ]
}
```

If a collection is nested in another one, you need to refer to them as `_1`, `_2`, and so on.

<img src={useBaseUrl('img/api-testing/nested-each.png')} alt="nested each"/>

For **Each** flights collection nested in `content` item, checks if `price.amount` is an integer. Then, for **Each** legs array, a nested collection in the flights collection, checks if `vector` item is an integer value.

```json title="Nested Collection Example"
{
  "content": {
    "flights": [
      {
        "price": {
          "amount": 100
        },
        "legs": [
          {
            "vector": 1
          },
          {
            "vector": 3
          }
        ]
      }
    ]
  }
}
```

</details>
<details>
<summary><strong>Code View Examples</strong></summary>

```yaml
- id: each
  children:
    - id: assert-is
      expression: _1.vector
      type: integer
  expression: payload.legs
```

```yaml
- id: each
  children:
    - id: assert-is
      expression: _1.price.amount
      type: integer
    - id: each
      children:
        - id: assert-is
          expression: _2.vector
          type: integer
      expression: _1.legs
  expression: payload.content.flights
```

</details>

### If

Allows you to run a specific piece of code only if a specific condition is met.

<details>
<summary><strong>Parameters</strong></summary>

<table id="table-api">
  <tbody>
  <tr>
  <td colSpan='2'>Fields</td>
  </tr>
    <tr>
      <td><p><small>| REQUIRED | <a href="/api-testing/composer/expressions/#using-expressions">EXPRESSION</a> |</small></p><p>The path of the collection you want to iterate on.</p></td>
    </tr>
  </tbody>
</table>

<br/>

<strong>Examples</strong>

If `payload.success` is equal to true then the code within the element is executed, otherwise is skipped.
<img src={useBaseUrl('img/api-testing/if.png')} alt="if.png"/>

If `_1.intermediate` exists then the code within the element is executed, otherwise is skipped. This is useful when the element is not always present.
<img src={useBaseUrl('img/api-testing/ifexists.png')} alt="ifexists.png" />

</details>
<details>
<summary><strong>Code View Examples</strong></summary>

```yaml
- id: if
  children:
  - id: assert-equals
    expression: payload.message
    value: Seats Available
  - id: assert-equals
    expression: payload.content.flightid
    value: ${id}
    type: string
  expression: payload.success == true
```

</details>

### While

Allows you to run a block of assertions as long as a condition is valid.

<details>
<summary><strong>Parameters</strong></summary>

<table id="table-api">
  <tbody>
  <tr>
  <td colSpan='2'>Fields</td>
  </tr>
    <tr>
     <td><strong>Expression</strong></td>
     <td><p><small>| REQUIRED | <a href="/api-testing/composer/expressions/#using-expressions">EXPRESSION</a> |</small></p><p>The condition that has to be met for the assertions block to be executed.</p></td>
    </tr>
  </tbody>
</table>

<br/>

<strong>Examples</strong><br/>

<img src={useBaseUrl('img/api-testing/while.png')} alt="while.png" />

</details>
<details>
<summary><strong>Code View Examples</strong></summary>

```yaml
- id: while
  children:
  - id: comment
    text: Executes assertion until items are less than 5
  expression: items<5
```

</details>
