---
id: integration-test
title: Build an Integration Test
sidebar_label: Build an Integration Test
description: How to generate an integration test
---

import useBaseUrl from '@docusaurus/useBaseUrl';

One of the core features of Sauce Labs API Testing is the ability to create integration tests. An integration test is a test in which you examine a complete user flow, simulating what an API consumer would experience. Integration testing is critical for creating a strong API testing strategy. While only testing individual endpoints is a good start, this method will miss a large number of problems that occur when all services need to work together.

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
- An existing API Testing Project. For details on how to create one, see [API Testing Quickstart](/api-testing/quickstart/).

## Test Interactions between Endpoints

For the purposes of this guide, the example is simple and works with two API endpoints, but your integration test can be longer.

This example, uses an API endpoint that produces an array of all the available products (http://demoapi.apifortress.com/api/retail/product) and another endpoint that shows the details of a specific product based on its ID (http://demoapi.apifortress.com/api/retail/product/${id}).

```http request
http://demoapi.apifortress.com/api/retail/product
http://demoapi.apifortress.com/api/retail/product/${id}
```

To create an integration test to check the interaction between the endpoints:

1. Call the product listing endpoint by adding a `GET` request and assign the response to the `productsPayload` variable. The endpoint requires an Authentication header so add the Request Header component and enter `key` into the Name field and `ABC123` into the Value field.

2. (Optionally) Add an assert-is component to verify that `productsPayload` is an array.

:::tip
You can use the Comment component and print the whole payload response inside your test report by writing $\{productsPayload}
:::

3. Add an `each` component and reference the `productsPayload` object.

:::note
In a scenario in which the response contains many products, it may be useful to pick a few at random by using [pick(n)](/api-testing/composer/expressions/#pick).
:::

4. Test the response payload for the endpoint by adding assertions.

5. Add a new `Set(variable)` assertion to set the `id` variable as every single product that is returned:
   - Variable (the variable name) - for example `id`
   - Mode (the variable type) - for example `String`
   - Value (the value the variable will contain) - for example `${_1.id}`

The system uses `_1` automatically when recognizing a subroutine, which makes it easier when there are multiple sub-levels.

This is how your test might look after you set the `id` variable:

<img src={useBaseUrl('/img/api-testing/int-test-endpoints.png')} alt="Testing interactions between endpoints" width="600"/>

6. Create a `GET` to the product details endpoint, using the new `id` variable as the **id** parameter. The endpoint requires an Authentication header so add the Request Header component and enter `key` into the Name field and `ABC123` into the Value field.

:::note
Variables last through the entire test unless overwritten.
:::

7. Test the response payload for the endpoint.

   <img src={useBaseUrl('/img/api-testing/int-test-response-payload.webp')} alt="Testing the response payload"/>

In Code view, the test should look like this:

```yaml
- id: get
  children:
    - id: header
      name: key
      value: ABC123
  url: http://demoapi.apifortress.com/api/retail/product
  var: productsPayload
  mode: json
- id: assert-is
  expression: productsPayload
  comment: payload must be an array
  type: array
- id: each
  children:
    - id: comment
      text: "product id is: ${_1.id} and product name is: ${_1.name}"
    - id: assert-is
      expression: _1.id
      comment: id must be an integer value
      type: integer
    - id: set
      var: id
      mode: string
      value: ${_1.id}
    - id: assert-exists
      expression: _1.name
      comment: name must exists
    - id: assert-is
      expression: _1.price
      comment: price must be a float number
      type: float
    - id: assert-exists
      expression: _1.category
      comment: category must exists
    - id: assert-exists
      expression: _1.description
      comment: description must exists
    - id: assert-is
      expression: _1.quantity
      comment: quantity must be an integer value
      type: integer
    - id: assert-greater
      expression: _1.quantity
      comment: quantity must be greater than 0
      value: 0
    - id: assert-is
      expression: _1.imageURL
      comment: imageURL must be a valid url value
      type: url
    - id: assert-is
      expression: _1.color
      comment: color must be an array
      type: array
    - id: each
      children:
        - id: assert-exists
          expression: _2
          comment: color array should contain some values
        - id: assert-in
          expression: _2
          comment: colors must be the expected one
          value:
            - yellow
            - blue
            - red
            - green
            - brown
            - orange
            - gray
            - pink
            - black
            - white
      expression: _1.color
    - id: assert-exists
      expression: _1.createdAt
      comment: createdAt must exists
    - id: assert-exists
      expression: _1.updatedAt
      comment: updateAt must exists
    - id: comment
      text: get product details
    - id: get
      children:
        - id: header
          name: key
          value: ABC123
      url: http://demoapi.apifortress.com/api/retail/product/${id}
      var: productPayload
      mode: json
    - id: assert-exists
      expression: productPayload
      comment: payload must exist, if not, test does not need to be executed
    - id: comment
      text: "product id is: ${productPayload.id} and product name is:
        ${productPayload.name}"
    - id: assert-is
      expression: productPayload.id
      comment: id must be an integer value
      type: integer
    - id: assert-exists
      expression: productPayload.name
      comment: name must exists
    - id: assert-is
      expression: productPayload.price
      comment: price must be a float number
      type: float
    - id: assert-exists
      expression: productPayload.category
      comment: category must exists
    - id: assert-exists
      expression: productPayload.description
      comment: description must exists
    - id: assert-is
      expression: productPayload.quantity
      comment: quantity must be an integer value
      type: integer
    - id: assert-greater
      expression: productPayload.quantity
      comment: quantity must be greater than 0
      value: 0
    - id: assert-is
      expression: productPayload.imageURL
      comment: imageURL must be a valid url value
      type: url
    - id: assert-is
      expression: productPayload.color
      comment: color must be an array
      type: array
    - id: each
      children:
        - id: assert-exists
          expression: _2
          comment: color array should contain some values
        - id: assert-in
          expression: _2
          comment: colors must be the expected one
          value:
            - yellow
            - blue
            - red
            - green
            - brown
            - orange
            - gray
            - pink
            - black
            - white
      expression: productPayload.color
    - id: assert-exists
      expression: productPayload.createdAt
      comment: createdAt must exists
    - id: assert-exists
      expression: productPayload.updatedAt
      comment: updateAt must exists
  expression: productsPayload.pick(5)
```
