---
id: dynamic-header
title: Creating Dynamic Headers
sidebar_label: Creating Dynamic Headers
description: How to generate a dynamic header
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Most APIs have only one response format, either JSON or XML. But what should you do when an API endpoint can return either JSON or XML? You could write two different tests, one for each response type, but you would be repeating a good amount of code in both tests.

Sauce Labs API Testing allows you to test both, using the same test for almost all test cases. In a few cases, you will need to add extra logic to allow the platform to distinguish between the two formats.

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
- An existing API Testing Project. For details on how to create one, see [API Testing Quickstart](/api-testing/quickstart/).
- Familiarity with the [API Testing Composer](/api-testing/composer/).

## Example: Sending Different Header Based on the Response Type

Consider a scenario where you need to pass the Accept value in the Header that is `application/json` if you are testing the JSON and `application/xml` if you are testing the XML. Usually in this case, you should make two different calls, to be able to pass the different values in the header.

The image shows the above scenario which requires setting up two separate calls. This solution is not particularly adherent to the Don't Repeat Yourself (DRY) rule of programming.

<img src={useBaseUrl('img/api-testing/use-cases/accept_header.webp')} alt="two different calls" />

The solution is the following:

1. In the **Input Set** add the different formats as variables.

   <img src={useBaseUrl('img/api-testing/use-cases/inputSets.png')} alt="two different input sets" />

2. Remove one call and add the format variable in the **Mode** input.

   <img src={useBaseUrl('img/api-testing/use-cases/varFormat.png')} alt="mode is dynamic" />

3. The header is still static. You need to turn it into a dynamic one that changes to suit the data type of the API you are testing. Above the I/O operation, add the **Set (Variable)** component that will return the appropriate value.

   ```js
   if (format == 'xml')
      return 'application/xml'
   else
      return 'application/json'
   ```

   <img src={useBaseUrl('img/api-testing/use-cases/acceptHeader.webp')} alt="set accept header" />

   The `acceptHeader` variable will be `application/xml` if the format is _XML_ and `application/json` otherwise: since there are only two different formats, it will be `application/json` only for JSON format.

4. Remove the static header and add `${acceptHeader}` as the Header value.

   <img src={useBaseUrl('img/api-testing/use-cases/dynamicHeader.png')} alt="dynamic header" />

The final result of the test will look like this:

```yaml
- id: set
  var: acceptHeader
  mode: lang
  lang: javascript
  body: |-
    if (format == 'xml') return 'application/xml'
    else return 'application/json'
- id: get
  children:
    - id: header
      name: Accept
      value: ${acceptHeader}
  url: ${protocol}${domain}${endpoint}
  var: payload
  mode: ${format}
```

If you run the test, it will be executed two times: once for `XML` and once for `JSON`, ensuring that the header will have the correct value.
