---
id: dynamic-header
title: Creating Dynamic Header 
sidebar_label: Creating Dynamic Header
description: How to generate a dynamic header 
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Most APIs have only one response format, either JSON or XML. But what should you do when an API endpoint can return either JSON or XML? You could write two different tests, one for each response type, but you would be repeating a good amount of code in both tests.

Sauce Labs API Testing allows you to test both, using the same test for almost all test cases. Only in some cases, you will need to add extra logic to allow the platform to distinguish between the two formats.

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
- An existing API Testing Project. For details on how to create one, see [API Testing Quickstart](/api-testing/quickstart/).

## Example: Sending Different Header Based on the Response Type

Consider the scenario where you need to pass in the Header the Accept value that is `application/json` if you are testing the JSON and `application/xml` if you are testing the XML. Usually in this case, you should make two different calls, in order to be able to pass the different values in the header.

<!-- The image below, shows  Below, we can see the solution to this problem that requires setting up two separate calls. It's not particularly adherent to the DRY rule of programming. (Don't repeat yourself!) -->

<img src={useBaseUrl('img/api-fortress/2018/04/both_calls.jpg')} alt="both_calls.jpg" />

### Add the Input Formats

1. Let's start adding the different formats as variables, as seen below.
   <img src={useBaseUrl('img/api-fortress/2018/04/inputSets.jpg')} alt="inputSets.jpg" />

1. Now, we can remove one call and add the format variable in the "Mode" input.
   <img src={useBaseUrl('img/api-fortress/2018/04/varFormat.jpg')} alt="varFormat.jpg" />

### Make the Header Dynamic

1. The header is still static at this point. We need to turn it into a dynamic one which changes to suit the data type of the API we are testing. We add a variable component above the I/O operation that will return the appropriate value.
   <img src={useBaseUrl('img/api-fortress/2018/04/setDynamVar.jpg')} alt="setDynamVar.jpg" />

1. Add the following snippet into the **Content** field:

   ```js
   if (format == 'xml') return 'application/xml'
   else return 'application/json'
   ```

   :::caution Explanation
   The `acceptHeader` variable will have `application/xml` as value if format is `xml` and `application/json` otherwise (since we have only two different formats, it will be `application/json` only for JSON format)
   :::

1. Now, we can finally remove the 'static' header and add the 'dynamic' header by changing the Header value to `${acceptHeader}`
   <img src={useBaseUrl('img/api-fortress/2018/04/dynamicHeader.jpg')} alt="dynamicHeader.jpg" />
   Now,the test will be executed two times; once for `XML` and once for `JSON`, ensuring that the header will have the correct value. -->
