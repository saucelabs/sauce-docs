---
id: logical-components
title: Logical Test Components
sidebar_label: Logical Components
description: Learn to write logical components using the Sauce Labs API Testing Composer.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

Logical components are a type of component that you can add to a test using the **Compose** tab (aka Composer). To learn how to access components, see [Adding Components to Tests](/api-testing/composer/#add-components).

<img src={useBaseUrl('img/api-fortress/2020/09/logicalComponents.png')} alt="Logical Components" width="600" />


## What You'll Need
* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
* An existing API Testing Project. For details on how to create one, see [API Testing Quickstart](/api-testing/quickstart/).
* Familiarity with the [API Testing Composer](/api-testing/composer/).


## Logical Components

### Each

Allows you to iterate over a collection of elements and execute the piece of code for each element.

<details><summary><strong>Parameters</strong></summary>

<table id="table-api">
  <tbody>
  <tr>
  <td colSpan='2'>Fields</td>
  </tr>
    <tr>
     <td><strong>Expression</strong></td>
     <td><p><small>| REQUIRED | <a href="#expressions">EXPRESSION</a> |</small></p><p>The path of the collection you want to iterate on.</p></td>
    </tr>
  </tbody>
</table>

<br/>

<strong>Examples</strong>

<img src={useBaseUrl('img/api-fortress/2020/12/1each.jpg')} alt="1each.jpg"/>

The `for each 'legs' collection` checks if `vector` item is an integer value.

If a collection is nested in another one, you need to refer to them as `_1`, `_2`, and so on.

<img src={useBaseUrl('img/api-fortress/2020/12/nestedEach.jpg')} alt="nestedEach.jpg"/>

The `for each payload.content.flights` collection checks if `price.amount` is an integer. Then, the `for each legs` array, a nested collection within the flights collection, checks if vector item is an integer value.

</details>



### If

Allows you to run a specific piece of code only if a specific condition is met.

<details><summary><strong>Parameters</strong></summary>

<table id="table-api">
  <tbody>
  <tr>
  <td colSpan='2'>Fields</td>
  </tr>
    <tr>
     <td><strong>Expression</strong></td>
     <td><p><small>| REQUIRED | <a href="#expressions">EXPRESSION</a> |</small></p><p>The condition that evaluates whether or not the code must be executed.</p></td>
    </tr>
  </tbody>
</table>

<br/>

<strong>Examples</strong>

<img src={useBaseUrl('img/api-fortress/2020/12/if.jpg')} alt="if.jpg" width="450"/>

If `payload.success` is equal to true then the code within the element is executed, otherwise is skipped.

<img src={useBaseUrl('img/api-fortress/2020/12/ifexists.jpg')} alt="ifexists.jpg" width="450"/>

If `_1.intermediate` exists then the code within the element is executed, otherwise is skipped. This is useful when the element is not always present.

</details>


### While

Allows you to run a block of assertions as long as a condition is valid.

<details><summary><strong>Parameters</strong></summary>

<table id="table-api">
  <tbody>
  <tr>
  <td colSpan='2'>Fields</td>
  </tr>
    <tr>
     <td><strong>Expression</strong></td>
     <td><p><small>| REQUIRED | <a href="#expressions">EXPRESSION</a> |</small></p><p>The condition that has to be met for the assertions block to be executed.</p></td>
    </tr>
  </tbody>
</table>

<br/>

<strong>Examples</strong><br/>

<img src={useBaseUrl('img/api-fortress/2020/12/while.jpg')} alt="while.jpg" width="400"/>

</details>


## Expression Field

Expressions -- required for all of the above components -- are fields that reference an item in the test scope. The item can be a variable or an inner value in a data structure, such as a JSON. Most expressions will start with the name of the variable the data is stored in.

When working with structured data, expression is the path for reaching out a specific element using the Mastiff language. Most of the time, it's just "dot notation". In this example, we will assume the data has been assigned to a variable named `payload`:

```json
"data":{
  "created_time": "1453198835",
  "images": {
    "thumbnail": {
      "width": 150,
      "url": "https://domain.com/photos/9451802655724661601789699.jpg",
      "height": 150
      }
   },
  "Total-items": 1
}
```

If you want to reach the value of the `created\_time` attribute:

```js
payload.data.created_time
```

If you want to check the `width` of the images:

```js
payload.data.images.thumbnail.width
```

### Special Characters

The `"Total-items"` element is a bit tricky, because the minus sign ( - ) would be misunderstood by the Mastiff language and treated as a subtraction operation. For this reason, the 'Dot Notation' requires the square brackets, as in:

```js
data['Total-Items']
```

### XML

The above statements are valid for both JSON and XML. When you have to reference XML attributes, the 'Dot Notation' is valid, but the attribute has to be written between the square brackets and preceded by the `@`.

Example:

```
<HotelList size="2">
    <HotelSummary order="0">
        <hotelId>20160502</hotelId>
        <name>Hotel One</name>
```

If we want to check the `size` attribute, you have to write

```js
payload['@size']
```

:::note
In XML, the root element is the variable itself, so you won't need to reference it explicitly.
:::


### Functions

Expressions can also contain directives to transform the data you are willing to evaluate. For instance:

```js
<HotelList size="2">
    <HotelSummary order="0">
        <hotelId>20160502</hotelId>
        <name>Hotel One</name>
```

```js
payload.HotelSummary.size()
```

Will count the number of instances of `HotelSummary`.


### Expressions "everywhere"

Expressions are automatically evaluated in the "expression" fields, but can also be introduced in other fields, such as "value", with a specific notation.

<img src={useBaseUrl('img/api-fortress/2020/13/equals-300x132.png')} alt="equals-300x132.png"/>

In this example, we compare the actual size of the collection with the "size attribute", by enclosing the expression within `${ .. }`. The "type" attribute ensures the comparison will happen with a numeric comparator, rather than string.
