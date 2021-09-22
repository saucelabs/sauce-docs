---
id: expression
title: Expression
sidebar_label: Expression
keywords:
    - api
    - api-fortress
    - expression
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Basics

Expressions are fields referencing an item in the test scope. The item can be a variable or an inner value in a data structure, such as a JSON. Most expressions will start with the name of the variable the data is stored in.

When working with structured data, expression is the path for reaching out a specific element using the Mastiff language. Most of the time, it's just "dot notation". In this example, we will assume the data has been assigned to a variable named "payload".

Example:

```
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

If you want to reach the value of the 'created\_time' attribute:

```js
payload.data.created_time
```

If you want to check the 'width' of the images:

```js
payload.data.images.thumbnail.width
```

## Special Characters

The "Total-items" element is a bit tricky, because the minus sign ( - ) would be misunderstood by the Mastiff language and treated as a subtraction operation. For this reason, the 'Dot Notation' requires the square brackets, as in:

```js
data['Total-Items']
```

## XML

The above statements are valid for both JSON and XML. When you have to reference XML attributes, the 'Dot Notation' is valid but the attribute has to be written between the square brackets and preceded by the `@`.

:::note
In XML, the root element is the variable itself so you won't need to reference it explicitly.
:::

Example:

```
<HotelList size="2">
    <HotelSummary order="0">
        <hotelId>20160502</hotelId>
        <name>Hotel One</name>
```

If we want to check the 'size' attribute, you have to write

```js
payload['@size']
```

## Functions

Expressions can also contain directives to transform the data you are willing to evaluate.

For instance:

```
<HotelList size="2">
    <HotelSummary order="0">
        <hotelId>20160502</hotelId>
        <name>Hotel One</name>
```

```js
payload.HotelSummary.size()
```

Will count the number of instances of `HotelSummary`.

## Expressions "everywhere"

Expressions are automatically evaluated in the "expression" fields, but can also be introduced in other fields, such as "value", with a specific notation.

<img src={useBaseUrl('img/api-fortress/2020/13/equals-300x132.png')} alt="equals-300x132.png"/>

In this example, we compare the actual size of the collection with the "size attribute", by enclosing the expression within `${ .. }`. The "type" attribute ensures the comparison will happen with a numeric comparator, rather than string.

Further readings, see [Expression extensions](/api-testing/mark2/reference/expression-language-extensions)