---
id: generate-test-data
title: Generating Test Data for Your Tests
sidebar_label: Generating Test Data
description: Generate test data to add in your tests
---

import useBaseUrl from '@docusaurus/useBaseUrl';

If your API or test requires random names, emails, or different types of input data, you can generate those directly in Sauce Labs API Testing. You can directly reference the method in your variable, API call, or anywhere in the test where you can enter the `${F.<methodName()>}` syntax.

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
- An existing API Testing Project. For details on how to create one, see [API Testing Quickstart](/api-testing/quickstart/).

## Methods

Some of the available methods are:

- `F.fullName()` - Generates a full name
- `F.firstName()` - Generates a first name
- `F.lastName()` - Generates a last name
- `F.emailAddress()` - Generates an email address
- `F.password(<minimumLength,maximumLength,includeUppercase,includeSpecial,includeDigit>)` - Generates a password. By default the values are F.password(8,16,false,false,false). Minimum length is 3 chars.
- `F.creditCardNumber()` - Generates a credit card number
- `F.creditCardExpiry()` - Generates a credit card expiration date
- `F.integer(<min,max>)` - Generates an integer

For the full list of methods, see the [F Extension](/api-testing/composer/expressions/#f) and [Expression Language Extensions](/api-testing/composer/expressions/#expression-language-extensions) to see the whole extension library.

These methods can be used anywhere you can write a variable, such as inside a Set (variable) or in any part of the request (body, header, param, etc.).

Let's see some practical example how to generate fake data in your tests.

## Set (variable)

Set (variable) allows you to create variables or more structured data.

### Generating a String (single variable)

- **Variable:** The name to assign the variable.
- **Mode:** String
- **Value:** The method to use to generate data. For example, `${F.fullName()}` will generate a random full name.

<img src={useBaseUrl('/img/api-testing/test-data-full-name.png')} alt="Full name generation" width="600"/>

As result, you will have something like `Ida Strosin`

### Generating an Array of Data

- **Variable:** The name to assign the variable.
- **Mode:** Data
- **Data:** The JS function for creating an array. For example, `new Array(5).fill(0).map(_ => F.streetAddress())` generates an array with five random addresses.

<img src={useBaseUrl('/img/api-testing/test-data-array.png')} alt="Data array generation" width="600"/>

As result, you will have something like `39263 Smith Ridge,32960 Bashirian Mews,91904 Jast Island,97468 Christopher Turnpike,51511 Berge Grove`

### Generating an Object

- **Variable:** The name to assign the variable.
- **Mode:** Language
- **Language:** Template
- **Body:** The object to generate with the required methods. For example:

```json
{
    "name":"${F.firstName()}",
    "last name":"${F.lastName()}",
    "address":"${F.streetName()}",
    "profession":"${F.profession()}",
    "mobile phone":"${F.mobile()}",
    "email":"${F.emailAddress()}"
}
```

<img src={useBaseUrl('/img/api-testing/test-data-personal-data.webp')} alt="Personal data generation" width="600"/>

As result, you will have something like

```json
{
    "name": "Jermaine",
    "last name": "Monahan",
    "address": "Crona Squares",
    "profession": "musician",
    "mobile phone": "07693 220099",
    "email": "gus_schuster@weimann.com"
}
```

## Body

Any of the following methods can be used in a Request Body.

- **Content-Type:** The content-type of the body (application/json in this example).
- **Body:** The body of the request. For example:

```json
{
  "name": "${F.firstName()}",
  "last name": "${F.lastName()}",
  "city": "${F.city()}",
  "profession": "${F.profession()}"
}
```

<img src={useBaseUrl('/img/api-testing/test-data-request-body.webp')} alt="Request body data" width="600"/>

It produces a body similar to the below:

```json
{
    "name": "Doug",
    "last name": "Klein",
    "city": "South Elizabeth",
    "profession": "astronomer"
}
```

## Params

Similarly, these methods can also be used as params.

- **Name:** The name of the param.
- **Value:** The value of the param. For example, `${F.creditCardNumber()}`.

<img src={useBaseUrl('/img/api-testing/test-data-request-body-param.png')} alt="Request body param data" width="600"/>

The result, will be similar to `1234-2121-1221-1211`

These examples are of the most common places where you may need to generate data, but these methods can be added anywhere you can use a variable.
