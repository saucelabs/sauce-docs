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
     <td><p><small>| REQUIRED | <a href="#using-expressions">EXPRESSION</a> |</small></p><p>The path of the collection you want to iterate on.</p></td>
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
     <td><p><small>| REQUIRED | <a href="#using-expressions">EXPRESSION</a> |</small></p><p>The condition that evaluates whether or not the code must be executed.</p></td>
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
     <td><p><small>| REQUIRED | <a href="#using-expressions">EXPRESSION</a> |</small></p><p>The condition that has to be met for the assertions block to be executed.</p></td>
    </tr>
  </tbody>
</table>

<br/>

<strong>Examples</strong><br/>

<img src={useBaseUrl('img/api-fortress/2020/12/while.jpg')} alt="while.jpg" width="400"/>

</details>


## Using Expressions

Expressions &#8212; required for all logical components &#8212; are fields that reference an item in the test scope. The item can be a variable or an inner value in a data structure, such as a JSON. Most expressions will start with the name of the variable the data is stored in.

When working with structured data, expression is the path for reaching out a specific element. Most of the time, it's just object dot notation. In this example, we will assume the data has been assigned to a variable named `payload`:

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

The `"Total-items"` element is a bit tricky, because the minus sign ( - ) would be misunderstood and treated as a subtraction operation. For this reason, the dot notation would require square brackets:

```js
data['Total-Items']
```

### XML

The above statements are valid for both JSON and XML. When you have to reference XML attributes, the dot notation is valid, but the attribute has to be written between the square brackets and preceded by the `@`.

Example:

```xml
<HotelList size="2">
    <HotelSummary order="0">
        <hotelId>20160502</hotelId>
        <name>Hotel One</name>
```

If we want to check the `size` attribute, you have to write:

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


### Expressions "Everywhere"

Expressions are automatically evaluated in the **expression** fields, but can also be introduced in other fields, such as "value", with a specific notation.

In this example, we compare the actual size of the collection with the "size attribute", by enclosing the expression within `${ .. }`. The "type" attribute ensures the comparison will happen with a numeric comparator, rather than string.<br/><img src={useBaseUrl('img/api-fortress/2020/13/assertEquals.png')} alt="assertEquals" width="400"/>



### Expression Language Extensions

Our API Testing expression language is mostly used to identify a path in a payload or reference a variable. But there's more to it. A number of extensions are available to generate calculated data, determine the quality of a value and so on.

These _extensions_ can be used in any field that can be evaluated, which means in all __expression__ fields, and all the fields where the value is wrapped in the `${...}` brackets.


#### `WSUtil`

This is the main extension. It supports many useful functions.

- **exists(object : Object) : Boolean :** an XML and JSON existence state is different by definition. Use this in an "if statement" if a test should work both with JSON and XML
- **contains(substring : String, object : Object) : Boolean :** returns true whether the string version of "object" contains the "substring" sub-string.

  ```groovy
  WSUtil.contains('banana', payload.fruit.name)
  ```  

- **isInteger(string: String) , isFloat(string: String), isUrl(string: String), isEmail(string: String), isPhoneNumber(string: String), isBoolean(string: String), isArray(object: Object), isMap(object: Object), isCreditCard(string: String) : Boolean :** evaluate the nature of a data item


#### `anyArrray.pick(n)`

Given any array, you can ask the system to create a random subset of it. One typical usage is when an iterator would turn out to be huge, and you prefer to cherry-pick a few items. The code will return an array of five random elements off the _artists_ array.

```js
payload.artists.pick(5)
```

A hands on example:

```xml
<each expression="payload.artists.pick(5)"> <assert-exists expression="_1.href" /> <assert-exists expression="_1.id" /> ... </each>
```

#### `anyArrray.pick()`

Similar to the `pick(n)`, this method will pick one random item off an array, and return it.


#### `N`

Utility functions for numbers.

- **random(min: Int, max: Int) : Int** : generates a random integer number between min and max.

  ```groovy
  N.random(10,30)
  ```

- **random(min: Int, max: Int, quantity: Int) : List :** generates a list of random numbers

  ```groovy
  N.random(10,30,5)
  ```  

#### `D`

Plays with dates.

- **nowMillis() : Int :** returns the current Unix epoch in milliseconds.
- **plusDays(millis: Int, days: Int): Int** : returns the provided milliseconds, plus the provided number of days
- **plusHours(millis: Int, hours: Int): Int** : returns the provided milliseconds, plus the provided number of hours
- **minusDays(millis: Int, days: Int) : Int** : returns the provided milliseconds, minus the provided number of days
- **minusHours(millis: Int, hours: Int): Int** : returns the provided milliseconds, minus the provided number of hours
- **format(millis: Int, format: String) : String** : creates a timestamp with the given format, using the current timezone
- **format(millis: Int, format: String, timezone: String) : String :** creates a timestamp with the given format, based on the provided timezone id
- **format(millis: Int, format: String, offset: Int) : String :** creates a timestamp with the given format, based on the provided timezone offset
- **parse(timestamp: String) : Int** : tries to parse the provided timestamp and convert it in milliseconds. It will use current timezone if not provided

Here's the conversion map for formats:

 | Symbol  |  Meaning                 |       Presentation  |  Examples |
 | :----        |       :----       |    :----      | :----
 |`C`    |   century of era (>=0)   |      number   |     20
 |`Y`    |  year of era (>=0)       |     year      |    1996
 |`x`   |    weekyear               |      year     |     1996
 |`w`   |    week of weekyear       |      number   |     27
 |`e`   |    day of week            |      number   |     2
 |`E`   |    day of week            |      text     |     Tuesday; Tue
 |`y`   |    year                   |      year     |     1996
 |`D`   |    day of year            |      number   |     189
 |`M`    |   month of year          |      month     |    July; Jul; 07
 |`d`   |    day of month           |      number    |    10
 |`a`   |    halfday of day          |     text      |    PM
 |`K`   |    hour of halfday (0~11)   |    number    |    0
 |`h`    |   clockhour of halfday (1~12) | number    |    12
 |`H`   |    hour of day (0~23)        |   number    |    0
 |`k`   |    clockhour of day (1~24)   |   number    |    24
 |`m`    |   minute of hour            |   number    |    30
 |`s`    |   second of minute         |    number    |    55
 |`S`    |   fraction of second       |    millis    |    978
 |`Z`     |  time zone offset/id        |  zone      |    -0800; -08:00; America/Los\_Angeles


#### `WSCrypto`

Encryption utilities:
- **md5(input : String) : String** : returns the md5 hash of the input string.
- **hash(input : String) : String :** returns the SHA-1 hash of the input string, hex encoded.
- **base64(action: String, input: String)** : decodes from or encodes into a base64 string. Action can either be `'encode'` or `'decode'`.
  ```js
  WSCrypto.base64('encode','whatever')
  ```
- **sha256(input : String) : String** : creates an hash of input using the SHA-256 algorithm.
- **sha256(input : String, secret : String) : String :** encrypts input with secret using the HMAC-SHA256 algorithm.
- **hmacSha1(input : String, secret : String) : String** : encrypts input with secret using the HMAC-SHA1 algorithm.
