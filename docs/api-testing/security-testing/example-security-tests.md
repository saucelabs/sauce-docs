---
id: example-security-tests
title: Example Security Tests
sidebar_label: Example Security Tests
keywords:
    - api
    - api-fortress
    - security
    - tests
---

According to Gartner over 95% of security vulnerabilities in APIs are related to “functional” or “human” errors. That is why functional testing of your APIs is so important to general API security. A good API security policy includes testing of API functionality before release, as well as constant monitoring of those APIs using the same detailed functional tests.

We can designate these types of tests into three types - fuzz tests, authentication/access control, and sensitive data. We have created _example_ test snippets that you can load from within the platform to see them in action.

:::warning Please Note!
These snippets are just examples to help convey the information more clearly. They are not meant to be security tests themselves. Only you can understand the business requirements and potential weaknesses in your APIs.
:::

## Fuzz Tests

- **Invalid Input Test**  
    The goal of this test is to validate how the API functions when given invalid data. Fundamentally, it’s a data-driven test with a series of invalid inputs that helps to reveal potential exceptions. Some of these exceptions may include crashes, assertion failures, error responses that give out too much information, and potential memory leaks.  
    _\[Found in Examples > Security > Invalid\_Input\_Test\]_

- **Wildcard Testing**  
    This one is pretty straightforward, and yet it is one of the reasons for a [major breach at the US Postal Service](https://apifortress.com/usps-api-security-vulnerabilities-caused-by-functional-errors/). The goal here is to see how the API reacts when a wildcard (\*) is used in place of an input value. For most APIs, it shouldn’t be allowed as it would return a broad dataset.  
    _\[Found in Examples > Security > Wildcard\_Test\]_

## Authentication / Access Control

- **Common Logins**  
    This test is meant to simply go through the most common username and password combinations to try to see if one of those is valid. This includes logins such as admin/admin. These tests are particularly useful before pushing an API live when you have internal credentials used for debugging.  
    _\[Found in Examples > Security > Password\_Test\]_

- **Brute Force**  
    This test randomly generates login credentials such as usernames and passwords in an attempt to brute force its way in. The goal here is to validate that the API only allows a certain amount of login attempts before forcing a timeout.  
    _\[Found in Examples > Security > Brute\_Force\_Test\]_

- **Your Authentication Flow**  
    It is important to create tests that validate your authentication flows. This can even include 3-leg OAuth using our [open source 3loa project.](https://apifortress.com/opensourceprojects/)

- **Access Control**  
    In this test, the goal is to confirm that a user with permissions of X can only achieve X. For example, in API Fortress, a person with “analyst” rights should only be able to view results and tests. They cannot edit tests or change settings.  
    _\[Found in Examples > Security > Access\_Control\_Test\]_

## Sensitive Data

- **Header Validation**  
    Headers contain critical details of the API transaction, but they can also sometimes contain sensitive information. In this test, we analyze the header and give some examples of potential weaknesses. This can include revealing an Apache server version that has a known weakness, or the authentication type._\[Found in Examples > Security > Header\_Validation\_Test\]_
- **Sensitive Information**  
    In this test, the goal is to search for string patterns that should never appear in a payload, such as credit cards, and social security numbers, etc.  
    _\[Found in Examples > Security > Sensitive\_Information\_Test\]_
