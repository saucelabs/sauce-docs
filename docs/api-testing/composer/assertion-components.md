---
id: assertion-components
title: Assertion Test Components
sidebar_label: Assertion Components
description: Learn to write test assertions in the Sauce Labs API Testing Composer.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

Assertions are a type of component that you can add to a test using the Composer. To access them, go to a **Project** > **Test** > **Compose** (aka Composer) > click **Add component** (**+** icon) in the Composer toolbar.

<img src={useBaseUrl('img/api-fortress/2020/09/assertionComponents.png')} alt="Assertion Components" width="600" />

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
| **Level** | error, warning | No |
| **Stop test if fails** | True, false | No |

* __Expression 1__: the first payload you want to compare. See [Expression](/api-testing/on-prem/reference/expression/) for more details.
* __Expression 2__: the second payload you want to compare.
* __Mode__: the comparator you wish to use.
    * **Text** compares the text of the two payloads as plain text
    * **values** compares the two payloads regardless the text layout
    * **structure** compares only the structure of the two payloads.
* __Level__: Specifies, when the assertion fails, whether it should be considered an **error** or just a **warning**.
* __Stop test if fails__: The test will be immediately stopped if the assertion fails.

:::note
A **warning** will not trigger alerts, such as email or text messages.
:::

<img src={useBaseUrl('img/api-fortress/2020/09/compares.jpg')} alt="Assertion Compares Pic"/>

</details>


## Assert Contains

This assertion is used to check if the element described by the expression contains a specific substring. For example, to test the word _Uber_ is in Uber's product names (_UberX, UberBlack, UberPool_).

<details><summary><strong>Parameters</strong></summary>

| Field | Type/Value | Required |
| :--- | :--- | :--- |
| Expression | Expression | Yes |
| Value | String | Yes |
| Mode | 'all' or 'one' | No |
| Level | 'error' or 'warning' | No |
| Modifier | 'not' | No |
| Execute if item exists | 'true' or 'false' | No |
| Stop test if fails | 'true' or 'false' | No |
| Comment | String | No |

* __Expression__: The path to the element we want to operate on (e.g., `payload.ProductID`). See [Expression](/api-testing/on-prem/reference/expression/) for more details.
* __Value__: The value we want to compare the expression to.
* __Mode__: Specify if all the same elements in the payload should match the assertion (‘all’) or if only one element (‘one’) is enough.
* __Level__: Specifies, when the assertion fails, whether it should be considered an **error** or just a **warning**.
* __Modifier__: The assertion is considered verified if it does not pass.
* __Execute if item exists__: The assertion is evaluated only if the element exists. This is useful when the element does not always exist.
* __Stop test if fails__: The test will be immediately stopped if the assertion fails.
* __Comment__: Add comment messages in the form of a string data type.

:::note
A **warning** will not trigger alerts (such as email or text messages).
:::

</details>
<details><summary><strong>Code View Examples</strong></summary>

```html
<assert-contains expression=”data.url” value=”domain.com”/>
```

```html
<assert-contains expression=”data.id” value=”${id}”/>
```

</details>


## Assert Equals

This assertion is used to check if the element value described by the expression is equal to a specific value. A direct one-to-one comparison.

<details><summary><strong>Parameters</strong></summary>

| Field | Type/Value | Required |
| :--- | :--- | :--- |
| Expression | Expression | Yes |
| Value | String | Yes |
| Type | 'integer' or 'float' | No |
| Mode | 'all' or 'one' | No |
| Level | 'error' or 'warning' | No |
| Modifier | 'not' | No |
| Execute if item exists | 'true' or 'false' | No |
| Stop test if fails | 'true' or 'false' | No |
| Comment | String | No |

* __Expression__: The path to the element we want to operate on (e.g., `payload.ProductID`). See [Expression](/api-testing/on-prem/reference/expression/) for more details.
* __Value__: The value we want to compare the expression to.
* __Type__: The data type of the value. This attribute is optional. If no type is defined the values will be compared as strings. If the type is set the values will evaluated with the chosen comparator (ex: ‘integer’ as a whole number, ‘float’ as a decimal number).
* __Mode__: Specify if all the same elements in the payload should match the assertion (‘all’) or if only one element (‘one’) is enough.
* __Level__: Specify if the assertion fails whether it should be considered an ‘error’ or just a ‘warning’.
* __Modifier__: The assertion is considered verified if it does not pass.
* __Execute if item exists__: The assertion is evaluated only if the element exists. This is useful when the element does not always exist.
* __Stop test if fails__: The test will be immediately stopped if the assertion fails.
* __Comment__: Add comment messages in the form of a string data type.

:::note
A **warning** will not trigger alerts (such as email or text messages).
:::

</details>
<details><summary><strong>Code View Examples</strong></summary>

```html
<assert-equals expression=”data.code” value=”500″/>
```

```html
<assert-equals expression=”data.code” value=”500″ type=”integer”/>
```

</details>


## Assert Exists

This assertion is used to check if the element described by the expression exists. The presence of the element, even empty, is enough to consider it a valid assertion.

<details><summary><strong>Parameters</strong></summary>

| Field | Type/Value | Required |
| :--- | :--- | :--- |
| Expression | Expression | Yes |
| Mode | 'all' or 'one' | No |
| Level | 'error' or 'warning' | No |
| Modifier | 'not' | No |
| Stop test if fails | 'true' or 'false' | No |
| Comment | String | No |

* __Expression__: It's the path to the element we want to operate on (e.g., `payload.ProductID`). See [Expression](/api-testing/on-prem/reference/expression/) for more details.
* __Mode__: Specify if all the same elements in the payload should match the assertion (‘all’) or if only one element (‘one’) is enough.
* __Level__: Specify if the assertion fails whether it should be considered an ‘error’ or just a ‘warning’.
* __Modifier__: The assertion is considered verified if it does not pass.
* __Stop test if fails__: The test will be immediately stopped if the assertion fails.
* __Comment__: Add comment messages in the form of a string data type.

:::note
A **warning** will not trigger alerts (such as email or text messages).
:::

</details>
<details><summary><strong>Code View Examples</strong></summary>

```html
<assert-exists expression=”data.id”/>
```

</details>



## Assert Greater

This assertion is used to check if the element value described by the expression is greater than a proposed value. The values can be compared as a _string_ or _number_.

<details><summary><strong>Parameters</strong></summary>

| Field | Type/Value | Required |
| :--- | :--- | :--- |
| Expression | Expression | Yes |
| Value | String | Yes |
| Type | 'integer' or 'float' | No |
| Mode | 'all' or 'one' | No |
| Level | 'error' or 'warning' | No |
| Modifier | 'not' | No |
| Execute if item exists | 'true' or 'false' | No |
| Stop test if fails | 'true' or 'false' | No |
| Comment | String | No |

* __Expression__: It's the path to the element we want to operate on (e.g., `payload.ProductID`). See [Expression](/api-testing/on-prem/reference/expression/) for more details.
* __Value__: The value we want to compare the expression to.
* __Type__: The data type of the value. This attribute is optional. If no type is defined the values will be compared as strings. If the type is set the values will evaluated with the chosen comparator (ex: ‘integer’ as a whole number, ‘float’ as a decimal number).
* __Mode__: Specify if all the same elements in the payload should match the assertion (‘all’) or if only one element (‘one’) is enough.
* __Level__: Specify if the assertion fails whether it should be considered an ‘error’ or just a ‘warning’.
* __Modifier__: The assertion is considered verified if it does not pass.
* __Execute if item exists__: The assertion is evaluated only if the element exists. This is useful when the element does not always exist.
* __Stop test if fails__: The test will be immediately stopped if the assertion fails.
* __Comment__: Add comment messages in the form of a string data type.

:::note
A **warning** will not trigger alerts (such as email or text messages).
:::

</details>
<details><summary><strong>Code View Examples</strong></summary>

```html
<assert-greater expression=”data.code” value=”4503″/>
```

```html
<assert-greater expression=”data.code” value=”4503″ type=”integer”/>
```

</details>

## Assert In

This assertion is used to check if the element described by the expression matches at least one item from a given list. For example, the category of a product is one of the approved categories such as men, women, or children.

<details><summary><strong>Parameters</strong></summary>

| Field | Type/Value | Required |
| :--- | :--- | :--- |
| Expression | Expression | Yes |
| Value | String | Yes |
| Type | 'integer' of 'float' | No |
| Mode | 'all' or 'one' | No |
| Level | 'error' or 'warning' | No |
| Modifier | 'not' | No |
| Execute if item exists | 'true' or 'false' | No |
| Stop test if fails | 'true' or 'false' | No |
| Comment | String | No |

* __Expression__: It's the path to the element we want to operate on (e.g., `payload.ProductID`). See [Expression](/api-testing/on-prem/reference/expression/) for more details.
* __Value__: The value we want to compare the expression to.
* __Type__: The data type of the value. This attribute is optional. If no type is defined the values will be compared as strings. If the type is set the values will evaluated with the chosen comparator (ex: ‘integer’ as a whole number, ‘float’ as a decimal number).
* __Mode__: Specify if all the same elements in the payload should match the assertion (‘all’) or if only one element (‘one’) is enough.
* __Level__: Specify if the assertion fails whether it should be considered an ‘error’ or just a ‘warning’.
* __Modifier__: The assertion is considered verified if it does not pass.
* __Execute if item exists__: The assertion is evaluated only if the element exists. This is useful when the element does not always exist.
* __Stop test if fails__: The test will be immediately stopped if the assertion fails.
* __Comment__: Add comment messages in the form of a string data type.

:::note
A **warning** will not trigger alerts (such as email or text messages).
:::

</details>
<details><summary><strong>Code View Examples</strong></summary>

```html
<assert-in expression=”data.type” value=”[‘paperbook’,’ebook’]”/>
```

```html
<assert-in expression=”data.price” value=”[5.50,7,9.79]” type=”float”/>
```

</details>


## Assert Is

This assertion is used to check if the value of the element defined by the expression belongs to a specific type. This is one of the more commonly used assertions because it can be used to verify various things such as whole numbers, email addresses, phone numbers, URLs, and so forth.

<details><summary><strong>Parameters</strong></summary>

| Field | Type/Value | Required |
| :--- | :--- | :--- |
| Expression | Expression | Yes |
| Type | 'integer', 'float', 'url', 'boolean', 'phone', 'email', 'map', 'array' | Yes |
| Mode | 'all' or 'one' | No |
| Level | 'error' or 'warning' | No |
| Modifier | 'not' | No |
| Execute if item exists | 'true' or 'false' | No |
| Stop test if fails | 'true' or 'false' | No |
| Comment | String | No |

* __Expression__: It's the path to the element we want to operate on (e.g., `payload.ProductID`). See [Expression](/api-testing/on-prem/reference/expression/) for more details.
* __Type__: The data type of the value. The possible values are:
    * _integer_: checks if field is an integer value;
    * _float_: checks if field is a decimal value;
    * _url_: checks if the field is a well formatted url;
    * _boolean_: checks if field is a boolean value;
    * _phone_: checks if field contains a valid phone number format;
    * _email_: checks if field is a valid email format;
    * _map_: checks if field is a map type;
    * _array_: checks if the field is an array.
* __Mode__: Specify if all the same elements in the payload should match the assertion (‘all’) or if only one element (‘one’) is enough.
* __Level__: Specify if the assertion fails whether it should be considered an ‘error’ or just a ‘warning’.
* __Modifier__: The assertion is considered verified if it does not pass.
* __Execute if item exists__: The assertion is evaluated only if the element exists. This is useful when the element does not always exist.
* __Stop test if fails__: The test will be immediately stopped if the assertion fails.
* __Comment__: Add comment messages in the form of a string data type.

:::note
A **warning** will not trigger alerts (such as email or text messages).
:::

</details>
<details><summary><strong>Code View Examples</strong></summary>

```html
<assert-is expression=”data.id” type=”integer”/>
```

</details>

## Assert Less

This assertion is used to check if the element value described by the expression is less than a proposed value. The values can be compared as a _string_ or _number_.

<details><summary><strong>Parameters</strong></summary>

| Field | Type/Value | Required |
| :--- | :--- | :--- |
| Expression | Expression | Yes |
| Value | String | Yes |
| Type | 'integer' or 'float' | No |
| Mode | 'all' or 'one' | No |
| Level | 'error' or 'warning' | No |
| Modifier | 'not' | No |
| Execute if item exists | 'true' or 'false' | No |
| Stop test if fails | 'true' or 'false' | No |
| Comment | String | No |


* __Expression__: It's the path to the element we want to operate on (e.g., `payload.ProductID`). See [Expression](/api-testing/on-prem/reference/expression/) for more details.
* __Value__: The value we want to compare the expression to.
* __Type__: The data type of the value. This attribute is optional. If no type is defined the values will be compared as strings. If the type is set the values will evaluated with the chosen comparator (ex: ‘integer’ as a whole number, ‘float’ as a decimal number).
* __Mode__: Specify if all the same elements in the payload should match the assertion (‘all’) or if only one element (‘one’) is enough.
* __Level__: Specify if the assertion fails whether it should be considered an ‘error’ or just a ‘warning’.
* __Modifier__: The assertion is considered verified if it does not pass.
* __Execute if item exists__: The assertion is evaluated only if the element exists. This is useful when the element does not always exist.
* __Stop test if fails__: The test will be immediately stopped if the assertion fails.
* __Comment__: Add comment messages in the form of a string data type.

:::note
A **warning** will not trigger alerts (such as email or text messages).
:::

</details>
<details><summary><strong>Code View Examples</strong></summary>

```html
<assert-less expression=”data.code” value=”4503″/>
```

```html
<assert-less expression=”data.code” value=”4503″ type=”integer”/>
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
| Mode | 'all' or 'one' | No |
| Level | 'error' or 'warning' | No |
| Modifier | 'not' | No |
| Execute if item exists | 'true' or 'false' | No |
| Stop test if fails | 'true' or 'false' | No |
| Comment | String | No |

* __Expression__: The path to the element we want to operate on (e.g., `payload.ProductID`). See [Expression](/api-testing/on-prem/reference/expression/) for more details.
* __Type__: The data type of the value. The possible values are:
    * _regex_: if you want to evaluate the field as a regular expression (specified in regex value);
    * _US Zipcode_: checks if the field is a valid US zip code;
    * _US State_: checks if the field is a valid US State (i.e., 'NY');
    * _credit card_: checks if the field contains a valid credit card number from the most popular credit cards (i.e. VISA, Mastercard, AMEX);
    * _country codes_: checks if the field contains a valid country code (i.e., 'US', 'FR', 'DK');
    * _currency codes_: checks if the fields is a valid currency (i.e., 'USD', 'EUR');
* __Regex value__: Specify the regular expression you want to use for checking the expression.
* __Mode__: Specify if all the same elements in the payload should match the assertion (‘all’) or if only one element (‘one’) is enough.
* __Level__: Specify if the assertion fails whether it should be considered an ‘error’ or just a ‘warning’.
* __Modifier__: The assertion is considered verified if it does not pass.
* __Execute if item exists__: The assertion is evaluated only if the element exists. This is useful when the element does not always exist.
* __Stop test if fails__: The test will be immediately stopped if the assertion fails.
* __Comment__: Add comment messages in the form of a string data type.

</details>
<details><summary><strong>Code View Examples</strong></summary>

<Tabs
  defaultValue="Zip Code"
  values={[
    {label: 'Zip Code', value: 'Zip Code'},
    {label: 'U.S. State', value: 'U.S. State'},
    {label: 'Name', value: 'Name'},
    {label: 'Credit Card', value: 'Credit Card'},
    {label: 'Country Codes', value: 'Country Codes'},
    {label: 'Currency Codes', value: 'Currency Codes'},
  ]}>

<TabItem value="Zip Code">

```html
<assert-matches expression=”data.zipcode” type=”us_zipcodes”/>
```

</TabItem>
<TabItem value="U.S. State">

```html
<assert-matches expression=”data.state” type=”us_states”/>
```

</TabItem>
<TabItem value="Name">

```html
<assert-matches expression=”data.name” type=”regex” value=”[hc]?at”/>
```

</TabItem>
<TabItem value="Credit Card">

```html
<assert-matches expression=”data.credit” type=”creditCard”/>
```

</TabItem>
<TabItem value="Country Codes">

```html
<assert-matches expression=”data.country” type=country_codes”/>
```

</TabItem>
<TabItem value="Currency Codes">

```html
<assert-matches expression=”data.code” type=”currency_codes”/>
```

</TabItem>
</Tabs>

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

```html
<set var="json_success" lang="template"> <![CDATA[{ "rectangle" : { "a" : 15, "b" : 5 } }]]> </set> <assert-valid-jsonschema expression="json_success"> <![CDATA[{ "type" : "object", "properties" : { "rectangle" : {"$ref" : "#/definitions/Rectangle" } }, "definitions" : { "size" : { "type" : "number", "minimum" : 0 }, "Rectangle" : { "type" : "object", "properties" : { "a" : {"$ref" : "#/definitions/size"}, "b" : {"$ref" : "#/definitions/size"} } } } }]]> </assert-valid-jsonschema>
```

</details>
