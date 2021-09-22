---
id: assert-matches
title: Assert Matches
sidebar_label: Assert Matches
description: "This assertion is used to check if the element value described by the expression matches a knowledge base of some kind."
---

This assertion is used to check if the element value described by the expression matches a knowledge base of some kind. For example a _US Zipcode_ or a _State_. This also gives you the ability to write your own regex (regular expression).

## Parameters

| **Name** | **Type/Value** | **Required** |
| --- | --- | --- |
| Expression | Expression | Yes |
| Type | 'regex' or 'US Zipcode' or 'USState' or 'credit card' or 'country codes' or 'currency codes' | Yes |
| Regex value | String | Yes, if type is 'regex' |
| Mode | 'all' or 'one' | No |
| Level | 'error' or 'warning' | No |
| Modifier | 'not' | No |
| Execute if item exists | 'true' or 'false' | No |
| Stop test if fails | 'true' or 'false' | No |
| Comment | String | No |


* __Expression__: It's the path to the element we want to operate on (e.g. `payload.ProductID`). See [Expression](/api-testing/mark2/reference/expression/) for more details.
* __Type__: The data type of the value. The possible values are: 
    * _regex_: if you want to evaluate the field as a regular expression (specified in regex value); 
    * _US Zipcode_: checks if the field is a valid US Zipcode; 
    * _US State_: checks if the field is a valid US State (i.e. 'NY'); 
    * _credit card_: checks if the field contains a valid credit card number from the most popular credit cards (i.e. VISA, Mastercard, AMEX); 
    * _country codes_: checks if the field contains a valid country code (i.e. 'US', 'FR', 'DK'); 
    * _currency codes_: checks if the fields is a valid currency (i.e. 'USD', 'EUR');
* __Regex value__: Specify the regular expression you want to use for checking the expression.
* __Mode__: Specify if all the same elements in the payload should match the assertion (‘all’) or if only one element (‘one’) is enough.
* __Level__: Specify if the assertion fails whether it should be considered an ‘error’ or just a ‘warning’.
* __Modifier__: The assertion is considered verified if it does not pass.
* __Execute if item exists__: The assertion is evaluated only if the element exists. This is useful when the element does not always exist.
* __Stop test if fails__: The test will be immediately stopped if the assertion fails.
* __Comment__: Add comment messages in the form of a string data type.

## Code View Examples

```html
<assert-matches expression=”data.zipcode” type=”us_zipcodes”/>
```

```html
<assert-matches expression=”data.state” type=”us_states”/>
```

```html
<assert-matches expression=”data.name” type=”regex” value=”[hc]?at”/>
```

```html
<assert-matches expression=”data.credit” type=”creditCard”/>
```

```html
<assert-matches expression=”data.country” type=country_codes”/>
```

```html
<assert-matches expression=”data.code” type=”currency_codes”/>
```