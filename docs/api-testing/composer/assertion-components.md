---
id: assertion-components
title: Assertion Test Components
sidebar_label: Assertion Components
description: Learn to write test assertions in the Sauce Labs API Testing Composer.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

Assertions are a type of component that you can add to a test using the Composer. To learn how to access the components and create a test using the Composer see [Writing API Tests with the Composer](/api-testing/composer/).

<img src={useBaseUrl('img/api-testing/assertionComponents.png')} alt="Assertion Components" />

## What You'll Need
* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).

## Assert Compares

Allows you to compare two payloads in terms of text, structure or values.

<details><summary><strong>Parameters</strong></summary>

| Field | Type/Value | Required |
| :--- | :--- | :--- |
| **Expression 1** | Expression | Yes |
| **Expression 2** | Expression | Yes |
| **Mode** | Text, values, structure | Yes |
| **Strict** | Yes, No | No |
| **Comment** | String | No |
| **Level** | error, warning | No |
| **Stop test if fails** | Yes, No | No |

* __Expression 1__: the first payload you want to compare. See [Expression](/api-testing/on-prem/reference/expression/) for more details.
* __Expression 2__: the second payload you want to compare.
* __Mode__: the comparator you wish to use.
    * **Text** compares the text of the two payloads as plain text
    * **values** compares the two payloads regardless the text layout
    * **structure** compares only the structure of the two payloads.
* __Strict__: Comparison includes data types. 
* __Comment__: Add comment messages in the form of a string data type.
* __Level__: Specifies, when the assertion fails, whether it should be considered an **error** or just a **warning**.
* __Stop test if fails__: The test will be immediately stopped if the assertion fails.

:::note
A **warning** will not trigger alerts, such as email or text messages.
:::

<img src={useBaseUrl('img/api-testing/compares.png')} alt="Assertion Compares Pic"/>

</details>


## Assert Contains

This assertion is used to check if the element described by the expression contains a specific substring. For example, to test the word _Uber_ is in Uber's product names (_UberX, UberBlack, UberPool_).

<details><summary><strong>Parameters</strong></summary>

| Field | Type/Value | Required |
| :--- | :--- | :--- |
| Expression | Expression | Yes |
| Value | String, Number, Boolean | Yes |
| Type | Auto, String, Number, Boolean | No |
| Comment | String | No |
| Level | 'error' or 'warning' | No |
| Modifier | 'not' | No |
| Execute if item exists | Yes, No | No |
| Stop test if fails | Yes, No | No |


* __Expression__: The path to the element we want to operate on (e.g., `payload.ProductID`). See [Expression](/api-testing/on-prem/reference/expression/) for more details.
* __Value__: The value we want to compare the expression to.
* __Type__: The type of the value. **Auto** means the engine will try to identify the type of the value.
* __Comment__: Add comment messages in the form of a string data type.
* __Level__: Specifies, when the assertion fails, whether it should be considered an **error** or just a **warning**.
* __Modifier__: The assertion is considered verified if it does not pass.
* __Execute if item exists__: The assertion is evaluated only if the element exists. This is useful when the element does not always exist.
* __Stop test if fails__: The test will be immediately stopped if the assertion fails.


:::note
A **warning** will not trigger alerts (such as email or text messages).
:::

</details>
<details><summary><strong>Code View Examples</strong></summary>

```yaml
- id: assert-contains
  expression: data.url
  value: domain.com
```

```yaml
- id: assert-contains
  expression: data.id
  value: ${id}
```

</details>


## Assert Equals

This assertion is used to check if the element value described by the expression is equal to a specific value. A direct one-to-one comparison.

<details><summary><strong>Parameters</strong></summary>

| Field | Type/Value | Required |
| :--- | :--- | :--- |
| Expression | Expression | Yes |
| Value | String, Number, Boolean | Yes |
| Type | Auto, String, Number, Boolean | No |
| Comment | String | No |
| Level | 'error' or 'warning' | No |
| Modifier | 'not' | No |
| Execute if item exists | Yes, No | No |
| Stop test if fails | Yes, No | No |


* __Expression__: The path to the element we want to operate on (e.g., `payload.ProductID`). See [Expression](/api-testing/on-prem/reference/expression/) for more details.
* __Value__: The value we want to compare the expression to.
* __Type__: The type of the value. **Auto** means the engine will try to identify the type of the value.
* __Comment__: Add comment messages in the form of a string data type.
* __Level__: Specify if the assertion fails whether it should be considered an ‘error’ or just a ‘warning’.
* __Modifier__: The assertion is considered verified if it does not pass.
* __Execute if item exists__: The assertion is evaluated only if the element exists. This is useful when the element does not always exist.
* __Stop test if fails__: The test will be immediately stopped if the assertion fails.


:::note
A **warning** will not trigger alerts (such as email or text messages).
:::

</details>
<details><summary><strong>Code View Examples</strong></summary>

```yaml
- id: assert-equals
  expression: data.code
  value: "500"
```

```yaml
- id: assert-equals
  expression: data.code
  value: 500
```

</details>


## Assert Exists

This assertion is used to check if the element described by the expression exists. The presence of the element, even empty, is enough to consider it a valid assertion.

<details><summary><strong>Parameters</strong></summary>

| Field | Type/Value | Required |
| :--- | :--- | :--- |
| Expression | Expression | Yes |
| Comment | String | No |
| Level | 'error' or 'warning' | No |
| Modifier | 'not' | No |
| Stop test if fails | Yes, No | No |


* __Expression__: The path to the element we want to operate on (e.g., `payload.ProductID`). See [Expression](/api-testing/on-prem/reference/expression/) for more details.
* __Comment__: Add comment messages in the form of a string data type.
* __Level__: Specify if the assertion fails whether it should be considered an ‘error’ or just a ‘warning’.
* __Modifier__: The assertion is considered verified if it does not pass.
* __Stop test if fails__: The test will be immediately stopped if the assertion fails.


:::note
A **warning** will not trigger alerts (such as email or text messages).
:::

</details>
<details><summary><strong>Code View Examples</strong></summary>

```yaml
- id: assert-exists
  expression: data.id
```

</details>



## Assert Greater

This assertion is used to check if the element value described by the expression is greater than a proposed value. The values can be compared as a _string_ or _number_.

<details><summary><strong>Parameters</strong></summary>

| Field | Type/Value | Required |
| :--- | :--- | :--- |
| Expression | Expression | Yes |
| Value | String | Yes |
| Comment | String | No |
| Level | 'error' or 'warning' | No |
| Modifier | 'not' | No |
| Execute if item exists | Yes, No | No |
| Stop test if fails | Yes, No | No |

* __Expression__: The path to the element we want to operate on (e.g., `payload.ProductID`). See [Expression](/api-testing/on-prem/reference/expression/) for more details.
* __Value__: The value we want to compare the expression to.
* __Comment__: Add comment messages in the form of a string data type.
* __Level__: Specify if the assertion fails whether it should be considered an ‘error’ or just a ‘warning’.
* __Modifier__: The assertion is considered verified if it does not pass.
* __Execute if item exists__: The assertion is evaluated only if the element exists. This is useful when the element does not always exist.
* __Stop test if fails__: The test will be immediately stopped if the assertion fails.


:::note
A **warning** will not trigger alerts (such as email or text messages).
:::

</details>
<details><summary><strong>Code View Examples</strong></summary>

```yaml
- id: assert-greater
  expression: data.code
  value: 4503
```


</details>

## Assert In

This assertion is used to check if the element described by the expression matches at least one item from a given list. For example, the category of a product is one of the approved categories such as men, women, or children.

<details><summary><strong>Parameters</strong></summary>

| Field | Type/Value | Required |
| :--- | :--- | :--- |
| Expression | Expression | Yes |
| Value | String | Yes |
| Comment | String | No |
| Level | 'error' or 'warning' | No |
| Modifier | 'not' | No |
| Execute if item exists | Yes, No | No |
| Stop test if fails | Yes, No | No |


* __Expression__: The path to the element we want to operate on (e.g., `payload.ProductID`). See [Expression](/api-testing/on-prem/reference/expression/) for more details.
* __Value__: The value we want to compare the expression to.
* __Comment__: Add comment messages in the form of a string data type.
* __Level__: Specify if the assertion fails whether it should be considered an ‘error’ or just a ‘warning’.
* __Modifier__: The assertion is considered verified if it does not pass.
* __Execute if item exists__: The assertion is evaluated only if the element exists. This is useful when the element does not always exist.
* __Stop test if fails__: The test will be immediately stopped if the assertion fails.


:::note
A **warning** will not trigger alerts (such as email or text messages).
:::

</details>
<details><summary><strong>Code View Examples</strong></summary>


```yaml
- id: assert-in
  expression: data.type
  value:
    - ebook
    - paperbook
```

```yaml
- id: assert-in
  expression: data.price
  value:
    - "5.50"
    - "7"
    - "9.79"
```

</details>


## Assert Is

This assertion is used to check if the value of the element defined by the expression belongs to a specific type. This is one of the more commonly used assertions because it can be used to verify various things such as whole numbers, email addresses, phone numbers, URLs, and so forth.

<details><summary><strong>Parameters</strong></summary>

| Field | Type/Value | Required |
| :--- | :--- | :--- |
| Expression | Expression | Yes |
| Type | 'integer', 'float', 'url', 'boolean', 'phone', 'email', 'map', 'array' | Yes |
| Comment | String | No |
| Level | 'error' or 'warning' | No |
| Modifier | 'not' | No |
| Execute if item exists | Yes, No | No |
| Stop test if fails | Yes, No | No |


* __Expression__: The path to the element we want to operate on (e.g., `payload.ProductID`). See [Expression](/api-testing/on-prem/reference/expression/) for more details.
* __Type__: The data type of the value. The possible values are:
    * _integer_: checks if field is an integer value;
    * _float_: checks if field is a decimal value;
    * _url_: checks if the field is a well formatted url;
    * _boolean_: checks if field is a boolean value;
    * _phone_: checks if field contains a valid phone number format;
    * _email_: checks if field is a valid email format;
    * _map_: checks if field is a map type;
    * _array_: checks if the field is an array.
* __Comment__: Add comment messages in the form of a string data type.
* __Level__: Specify if the assertion fails whether it should be considered an ‘error’ or just a ‘warning’.
* __Modifier__: The assertion is considered verified if it does not pass.
* __Execute if item exists__: The assertion is evaluated only if the element exists. This is useful when the element does not always exist.
* __Stop test if fails__: The test will be immediately stopped if the assertion fails.


:::note
A **warning** will not trigger alerts (such as email or text messages).
:::

</details>
<details><summary><strong>Code View Examples</strong></summary>

```yaml
- id: assert-is
  expression: data.id
  type: integer
```

</details>

## Assert Less

This assertion is used to check if the element value described by the expression is less than a proposed value. The values can be compared as a _string_ or _number_.

<details><summary><strong>Parameters</strong></summary>

| Field | Type/Value | Required |
| :--- | :--- | :--- |
| Expression | Expression | Yes |
| Value | String | Yes |
| Comment | String | No |
| Level | 'error' or 'warning' | No |
| Modifier | 'not' | No |
| Execute if item exists | Yes, No | No |
| Stop test if fails | Yes, No | No |



* __Expression__: The path to the element we want to operate on (e.g., `payload.ProductID`). See [Expression](/api-testing/on-prem/reference/expression/) for more details.
* __Value__: The value we want to compare the expression to.
* __Comment__: Add comment messages in the form of a string data type.
* __Level__: Specify if the assertion fails whether it should be considered an ‘error’ or just a ‘warning’.
* __Modifier__: The assertion is considered verified if it does not pass.
* __Execute if item exists__: The assertion is evaluated only if the element exists. This is useful when the element does not always exist.
* __Stop test if fails__: The test will be immediately stopped if the assertion fails.


:::note
A **warning** will not trigger alerts (such as email or text messages).
:::

</details>
<details><summary><strong>Code View Examples</strong></summary>

```yaml
- id: assert-less
  expression: data.code
  value: 4503
```

</details>

## Assert Matches

This assertion is used to check if the element value described by the expression matches a knowledge base of some kind (e.g, U.S. state or zip code). This also gives you the ability to write your own regex (regular expression).

<details><summary><strong>Parameters</strong></summary>

| Field | Type/Value | Required |
| :--- | :--- | :--- |
| Expression | Expression | Yes |
| Type | 'regex' or 'US Zipcode' or 'USState' or 'credit card' or 'country codes' or 'currency codes' | Yes |
| Regex value | String | Yes, if type is 'regex' |
| Comment | String | No |
| Level | 'error' or 'warning' | No |
| Modifier | 'not' | No |
| Execute if item exists | Yes, No | No |
| Stop test if fails | Yes, No | No |


* __Expression__: The path to the element we want to operate on (e.g., `payload.ProductID`). See [Expression](/api-testing/on-prem/reference/expression/) for more details.
* __Type__: The data type of the value. The possible values are:
    * _regex_: if you want to evaluate the field as a regular expression (specified in regex value);
    * _US Zipcode_: checks if the field is a valid US zip code;
    * _US State_: checks if the field is a valid US State (i.e., 'NY');
    * _credit card_: checks if the field contains a valid credit card number from the most popular credit cards (i.e. VISA, Mastercard, AMEX);
    * _country codes_: checks if the field contains a valid country code (i.e., 'US', 'FR', 'DK');
    * _currency codes_: checks if the fields is a valid currency (i.e., 'USD', 'EUR');
* __Regex value__: Specify the regular expression you want to use for checking the expression.
* __Comment__: Add comment messages in the form of a string data type.
* __Level__: Specify if the assertion fails whether it should be considered an ‘error’ or just a ‘warning’.
* __Modifier__: The assertion is considered verified if it does not pass.
* __Execute if item exists__: The assertion is evaluated only if the element exists. This is useful when the element does not always exist.
* __Stop test if fails__: The test will be immediately stopped if the assertion fails.


</details>
<details><summary><strong>Code View Examples</strong></summary>


```yaml
- id: assert-matches
  expression: data.zipcode
  type: us_zipcodes
```

</details>

## Assert Valid JSON Schema

This assertion is used to validate a JSON schema, based on the provided schema definition.

<details><summary><strong>Parameters</strong></summary>

| Field | Type/Value | Required |
| :--- | :--- | :--- |
| Expression | Expression | Yes |
| JsonSchema | JSON schema definition | Yes |
| Comment | String | No |

* __Expression__: The path to the element we want to operate on (e.g., `payload.ProductID`). See [Expression](https://apifortress.com/doc/expression/) for more details.
* __JsonSchema__: The JSON schema definition. This will be used to validate the JSON passed in the expression field. Here are some examples:

  ```json title="Example JSON"
  {
     "rectangle":{
        "a":15,
        "b":5
     }
  }
  ```

  ```json title="Example JSON Schema"
  {
     "type":"object",
     "properties":{
        "rectangle":{
           "$ref":"#/definitions/Rectangle"
        }
     },
     "definitions":{
      "size":{
           "type":"number",
           "minimum":0
        },
        "Rectangle":{
           "type":"object",
           "properties":{
              "a":{
                 "$ref":"#/definitions/size"
              },
              "b":{
                 "$ref":"#/definitions/size"
              }
          }
        }
     }
  }
  ```

* __Comment__: Add comment messages in the form of a string data type.

</details>
<details><summary><strong>Code View Examples</strong></summary>

```yaml
- id: set
  var: json_success
  mode: lang
  lang: template
  body: '{ "rectangle" : { "a" : 15, "b" : 5 } }'
```

```yaml
- id: assert-valid-jsonschema
  expression: json_success
  body: '{ "type" : "object", "properties" : { "rectangle" : {"$ref"
    :"#/definitions/Rectangle" } }, "definitions" : { "size" : { "type"
    :"number", "minimum" : 0 }, "Rectangle" : { "type" : "object", "properties"
    : { "a" : {"$ref" : "#/definitions/size"}, "b" : {"$ref" :
    "#/definitions/size"} } } } }'
```

</details>
