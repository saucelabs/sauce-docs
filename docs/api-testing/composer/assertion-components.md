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

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
- Familiarity with the [API Testing Composer](/api-testing/composer/).

## Assert Compares

Allows you to compare two payloads in terms of text, structure or values.

<details>
<summary><strong>Parameters</strong></summary>

<table id="table-api">
  <tbody>
  <tr>
  <td colSpan='2'>Fields</td>
  </tr>
    <tr>
     <td><strong>Expression 1</strong></td>
     <td><p><small>| REQUIRED | STRING |</small></p><p>The first payload you want to compare.</p></td>
    </tr>
    <tr>
     <td><strong>Expression 2</strong></td>
     <td><p><small>| REQUIRED | STRING |</small></p><p>The second payload you want to compare.</p></td>
    </tr>
    <tr>
     <td><strong>Mode</strong></td>
     <td><p><small>| REQUIRED | Text, values, structure |</small></p><p>The comparator you wish to use. <code>text</code> compares the text of the two payloads as plain text, <code>values</code> compares the two payloads regardless the text layout, <code>structure</code> compares only the structure of the two payloads.</p></td>
    </tr>
    <tr>
     <td><strong>Strict</strong></td>
     <td><p><small>| OPTIONAL | Yes, No |</small></p><p>Comparison includes data types. </p></td>
    </tr>
  </tbody>
</table>

See also [Common Fields](#assertion-common-fields)

<img src={useBaseUrl('img/api-testing/compares.webp')} alt="Assertion Compares Pic"/>

</details>
<details>
<summary><strong>Code View Examples</strong></summary>

```yaml
- id: assert-compares
  expression1: payload1
  expression2: payload2
  mode: text
  strict: 'false'
```

```yaml
- id: assert-compares
  expression1: payload1
  expression2: payload2
  mode: values
  strict: 'false'
```

```yaml
- id: assert-compares
  expression1: payload1
  expression2: payload2
  mode: structure
  strict: 'false'
```

</details>

## Assert Contains

This assertion is used to check if the element described by the expression contains a specific substring. For example, to test the word _Uber_ is in Uber's product names (_UberX, UberBlack, UberPool_).

<details>
<summary><strong>Parameters</strong></summary>

<table id="table-api">
  <tbody>
  <tr>
  <td colSpan='2'>Fields</td>
  </tr>
    <tr>
     <td><strong>Expression</strong></td>
     <td><p><small>| REQUIRED | Expression |</small></p><p>The path to the element we want to operate on (e.g., <code>payload.ProductID</code>). See <a href="/api-testing/composer/expressions/">Using Expressions</a> for more details.</p></td>
    </tr>
    <tr>
     <td><strong>Value</strong></td>
     <td><p><small>| REQUIRED | String, Number, Boolean |</small></p><p>The value we want to compare the expression to.</p></td>
    </tr>
    <tr>
     <td><strong>Type</strong></td>
     <td><p><small>| OPTIONAL | Auto, String, Number, Boolean |</small></p><p>The type of the value. <code>Auto</code> means the engine will try to identify the type of the value.</p></td>
    </tr>
  </tbody>
</table>

See also [Common Fields](#assertion-common-fields)

</details>
<details>
<summary><strong>Code View Examples</strong></summary>

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

<details>
<summary><strong>Parameters</strong></summary>

<table id="table-api">
  <tbody>
  <tr>
  <td colSpan='2'>Fields</td>
  </tr>
   <tr>
     <td><strong>Expression</strong></td>
     <td><p><small>| REQUIRED | Expression |</small></p><p>The path to the element we want to operate on (e.g., <code>payload.ProductID</code>). See <a href="/api-testing/composer/expressions/">Using Expressions</a> for more details.</p></td>
    </tr>
    <tr>
     <td><strong>Value</strong></td>
     <td><p><small>| REQUIRED | String, Number, Boolean |</small></p><p>The value we want to compare the expression to.</p></td>
    </tr>
    <tr>
     <td><strong>Type</strong></td>
     <td><p><small>| OPTIONAL | Auto, String, Number, Boolean |</small></p><p>The type of the value. <code>Auto</code> means the engine will try to identify the type of the value.</p></td>
    </tr>
  </tbody>
</table>

See also [Common Fields](#assertion-common-fields)

</details>
<details>
<summary><strong>Code View Examples</strong></summary>

```yaml
- id: assert-equals
  expression: data.code
  value: '500'
```

```yaml
- id: assert-equals
  expression: data.code
  value: 500
```

</details>

## Assert Exists

This assertion is used to check if the element described by the expression exists. The presence of the element, even empty, is enough to consider it a valid assertion.

<details>
<summary><strong>Parameters</strong></summary>

<table id="table-api">
  <tbody>
  <tr>
  <td colSpan='2'>Fields</td>
  </tr>
    <tr>
     <td><strong>Expression</strong></td>
     <td><p><small>| REQUIRED | Expression |</small></p><p>The path to the element we want to operate on (e.g., <code>payload.ProductID</code>). See <a href="/api-testing/composer/expressions/">Using Expressions</a> for more details.</p></td>
    </tr>
  </tbody>
</table>

See also [Common Fields](#assertion-common-fields)

</details>
<details>
<summary><strong>Code View Examples</strong></summary>

```yaml
- id: assert-exists
  expression: data.id
```

</details>

## Assert Greater

This assertion is used to check if the element value described by the expression is greater than a proposed value. The values can be compared as a _string_ or _number_.

<details>
<summary><strong>Parameters</strong></summary>

<table id="table-api">
  <tbody>
  <tr>
  <td colSpan='2'>Fields</td>
  </tr>
    <tr>
     <td><strong>Expression</strong></td>
     <td><p><small>| REQUIRED | Expression |</small></p><p>The path to the element we want to operate on (e.g., <code>payload.ProductID</code>). See <a href="/api-testing/composer/expressions/">Using Expressions</a> for more details.</p></td>
    </tr>
    <tr>
     <td><strong>Value</strong></td>
     <td><p><small>| REQUIRED | String, Number |</small></p><p>The value we want to compare the expression to.</p></td>
    </tr>
  </tbody>
</table>

See also [Common Fields](#assertion-common-fields)

</details>
<details>
<summary><strong>Code View Examples</strong></summary>

```yaml
- id: assert-greater
  expression: data.code
  value: 4503
```

</details>

## Assert In

This assertion is used to check if the element described by the expression matches at least one item from a given list. For example, the category of a product is one of the approved categories such as men, women, or children.

<details>
<summary><strong>Parameters</strong></summary>

<table id="table-api">
  <tbody>
  <tr>
  <td colSpan='2'>Fields</td>
  </tr>
    <tr>
     <td><strong>Expression</strong></td>
     <td><p><small>| REQUIRED | Expression |</small></p><p>The path to the element we want to operate on (e.g., <code>payload.ProductID</code>). See <a href="/api-testing/composer/expressions/">Using Expressions</a> for more details.</p></td>
    </tr>
    <tr>
     <td><strong>Value</strong></td>
     <td><p><small>| REQUIRED | String, Number |</small></p><p>The value we want to compare the expression to.</p></td>
    </tr>
  </tbody>
</table>

See also [Common Fields](#assertion-common-fields).

</details>
<details>
<summary><strong>Code View Examples</strong></summary>

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
  - '5.50'
  - '7'
  - '9.79'
```

</details>

## Assert Is

This assertion is used to check if the value of the element defined by the expression belongs to a specific type. This is one of the more commonly used assertions because it can be used to verify various things such as whole numbers, email addresses, phone numbers, URLs, and so forth.

<details>
<summary><strong>Parameters</strong></summary>

<table id="table-api">
  <tbody>
  <tr>
  <td colSpan='2'>Fields</td>
  </tr>
    <tr>
     <td><strong>Expression</strong></td>
     <td><p><small>| REQUIRED | Expression |</small></p><p>The path to the element we want to operate on (e.g., <code>payload.ProductID</code>). See <a href="/api-testing/composer/expressions/">Using Expressions</a> for more details.</p></td>
    </tr>
    <tr>
     <td><strong>Type</strong></td>
    <td><p><small>| REQUIRED | Integer, float, url, boolean, phone, email, map, array |</small></p><p>The data type of the value. <code>integer</code> checks if field is an integer value, <code>float</code> checks if field is a decimal value, <code>url</code> checks if the field is a well formatted url, <code>boolean</code> checks if field is a boolean value, <code>phone</code> checks if field contains a valid phone number format, <code>email</code> checks if field is a valid email format, <code>map</code> checks if field is a map type, <code>array</code> checks if the field is an array.</p></td>
    </tr>
  </tbody>
</table>

See also [Common Fields](#assertion-common-fields)

</details>
<details>
<summary><strong>Code View Examples</strong></summary>

```yaml
- id: assert-is
  expression: data.id
  type: integer
```

</details>

## Assert Less

This assertion is used to check if the element value described by the expression is less than a proposed value. The values can be compared as a _string_ or _number_.

<details>
<summary><strong>Parameters</strong></summary>

<table id="table-api">
  <tbody>
  <tr>
  <td colSpan='2'>Fields</td>
  </tr>
    <tr>
     <td><strong>Expression</strong></td>
     <td><p><small>| REQUIRED | Expression |</small></p><p>The path to the element we want to operate on (e.g., <code>payload.ProductID</code>). See <a href="/api-testing/composer/expressions/">Using Expressions</a> for more details.</p></td>
    </tr>
    <tr>
     <td><strong>Value</strong></td>
     <td><p><small>| REQUIRED | String, Number |</small></p><p>The value we want to compare the expression to.</p></td>
    </tr>
  </tbody>
</table>

See also [Common Fields](#assertion-common-fields)

</details>
<details>
<summary><strong>Code View Examples</strong></summary>

```yaml
- id: assert-less
  expression: data.code
  value: 4503
```

</details>

## Assert Matches

This assertion is used to check if the element value described by the expression matches a knowledge base of some kind (e.g, U.S. state or zip code). This also gives you the ability to write your own regex (regular expression).

<details>
<summary><strong>Parameters</strong></summary>

<table id="table-api">
  <tbody>
  <tr>
  <td colSpan='2'>Fields</td>
  </tr>
    <tr>
     <td><strong>Expression</strong></td>
     <td><p><small>| REQUIRED | Expression |</small></p><p>The path to the element we want to operate on (e.g., <code>payload.ProductID</code>). See <a href="/api-testing/composer/expressions/">Using Expressions</a> for more details.</p></td>
    </tr>
    <tr>
     <td><strong>Type</strong></td>
     <td><p><small>| REQUIRED | 'regex', 'US Zipcode', 'USState', 'credit card', 'country codes', 'currency codes' |</small></p><p>The data type of the value. <code>regex</code> if you want to evaluate the field as a regular expression (specified in regex value), <code>US Zipcode</code> checks if the field is a valid US zip code, <code>US State</code> checks if the field is a valid US State (i.e., 'NY'), <code>credit card</code> checks if the field contains a valid credit card number from the most popular credit cards (i.e. VISA, Mastercard, AMEX), <code>country code</code> checks if the field contains a valid country code (i.e., 'US', 'FR', 'DK'), <code> currency code</code> checks if the fields is a valid currency (i.e., 'USD', 'EUR').</p></td>
    </tr>
    <tr>
     <td><strong>Regex value</strong></td>
     <td><p><small>| REQUIRED, if type is 'regex' | String |</small></p><p>Specify the regular expression you want to use for checking the expression. </p></td>
    </tr>
  </tbody>
</table>

See also [Common Fields](#assertion-common-fields)

</details>
<details>
<summary><strong>Code View Examples</strong></summary>

```yaml
- id: assert-matches
  expression: data.zipcode
  type: us_zipcodes
```

</details>

## Assert Valid JSON Schema

This assertion is used to validate a JSON schema, based on the provided schema definition.

<details>
<summary><strong>Parameters</strong></summary>

<table id="table-api">
  <tbody>
  <tr>
  <td colSpan='2'>Fields</td>
  </tr>
    <tr>
     <td><strong>Expression</strong></td>
     <td><p><small>| REQUIRED | Expression |</small></p><p>The path to the element we want to operate on (e.g., <code>payload.ProductID</code>). See <a href="/api-testing/composer/expressions/">Using Expressions</a> for more details.</p></td>
    </tr>
    <tr>
     <td><strong>JSON Schema</strong></td>
     <td><p><small>| REQUIRED | JSON schema definition |</small></p><p>The JSON schema definition. This will be used to validate the JSON passed in the expression field.</p></td>
    </tr>
  </tbody>
</table>

See also [Comment](#comment)

</details>
<details>
<summary><strong>Code View Examples</strong></summary>

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
  body: |-
    {
      "type": "object",
      "properties": {
        "rectangle": {
          "$ref": "#/definitions/Rectangle"
        }
      },
      "definitions": {
        "size": {
          "type": "number",
          "minimum": 0
        },
        "Rectangle": {
          "type": "object",
          "properties": {
            "a": {
              "$ref": "#/definitions/size"
            },
            "b": {
              "$ref": "#/definitions/size"
            }
          }
        }
      }
    }
```

</details>

## Assertion Common Fields

### Comment

<p><small>| OPTIONAL | String |</small></p>
Add comment messages in the form of a string data type.

### Modifier

<p><small>| OPTIONAL | 'not' |</small></p>
The assertion is considered verified if it does not pass.

:::note
Not available in **Assert Compares** and **Assert Valid JSON Schema**
:::

### Execute if item exists

<p><small>| OPTIONAL | yes, no |</small></p>
The assertion is evaluated only if the element exists. This is useful when the element does not always exist.

:::note
Not available in **Assert Compares**, **Assert Exists** and **Assert Valid JSON Schema**.
:::

### Level

<p><small>| OPTIONAL | error, warning |</small></p>
Specify if the assertion fails whether it should be considered an <code>error</code> or just a <code>warning</code>.

:::note
A **warning** will not trigger alerts, such as email.
:::

### Stop test if fails

<p><small>| OPTIONAL | Yes, No |</small></p>
The test will be immediately stopped if the assertion fails.

:::note
Not available in **Assert Valid JSON Schema**.
:::
