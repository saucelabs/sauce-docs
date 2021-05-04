---
id: create-a-dynamic-header
title: How to Create a Dynamic Header
sidebar_label: How to Create a Dynamic Header
keywords:
    - api-testing
    - how-to
    - dynamic-header
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Most APIs have only one response format, either JSON or XML. But what should we do in the case of an API endpoint that can return either JSON OR XML? We could write two different tests, with one supporting each response type, but we'd be repeating a good amount of code in both tests.

API Fortress allows you to test both, using the same I/O component and assertion components for almost all test cases. In a few cases, we'll need to add a bit of extra logic to allow the platform to distinguish between the two formats.

## Example Scenario

Let's consider the scenario where you need to pass in the Header the Accept value that is 'application/json' if you are testing the JSON and `application/xml` if you are testing the XML. Usually in this case, you should make two different calls, as shown in the image below, in order to be able to pass the different values in the header.

In the eample below, the API call requires an `"Accept"` header. This `"Accept"` header needs a value of `"application/json"`. 

If you are testing the JSON case and `"application/xml"` if you are testing the XML case. Below, we can see the solution to this problem that requires setting up two separate calls. It's not particularly adherent to the DRY rule of programming. (Don't repeat yourself!)

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
    if (format == 'xml') 
        return "application/xml"; 
    else 
        return "application/json";
   ``` 
   
   :::caution Explanation 
   The `acceptHeader` variable will have `application/xml` as value if format is `xml` and `application/json` otherwise (since we have only two different formats, it will be `application/json` only for JSON format)
   :::
   
5. Now, we can finally remove the 'static' header and add the 'dynamic' header by changing the Header value to `${acceptHeader}`
   <img src={useBaseUrl('img/api-fortress/2018/04/dynamicHeader.jpg')} alt="dynamicHeader.jpg" />
   Now,the test will be executed two times; once for `XML` and once for `JSON`, ensuring that the header will have the correct value.
