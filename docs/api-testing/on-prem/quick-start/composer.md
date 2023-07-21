---
id: composer
title: Test Composer Guide
sidebar_label: Test Composer Guide
description: The API Fortress Composer offers unparalleled flexibility and ease-of-use with everything at your fingertips to build tests in minutes and eliminate many duplicate tasks. Users of all skill levels may begin using the Composer with little or no training to quickly generate sophisticated functional tests. These tests may easily be reused as end-to-end integration tests
---

<head>
  <meta name="robots" content="noindex" />
</head>

> **Legacy Documentation**<br/>You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see [API Testing on the Sauce Labs Cloud](/api-testing/).

import useBaseUrl from '@docusaurus/useBaseUrl';

The API Fortress Composer offers unparalleled flexibility and ease-of-use with everything at your fingertips to build tests in minutes and eliminate many duplicate tasks. Users of all skill levels may begin using the Composer with little or no training to quickly generate sophisticated functional tests. These tests may easily be reused as end-to-end integration tests and load (stress) tests. In turn, load tests may easily be reused as monitors for performance testing.

:::note Learn more about End-to-End Tests / Integration Tests
Read the following page to learn more about [Integration / Multistep Testing](/api-testing/on-prem/quick-start/introduction-to-integration-testing)  
:::

## Visual vs. Code View

Begin using the Composer by selecting from two versions in terms of views. With either Visual or Code view, easily make calls and add assertions for testing your APIs, and insert variables wherever needed.

- **Visual** - The Visual Composer does not require coding expertise, and provides real-time suggestions via predictive text to help you create ideal API tests for your needs.

  <img src={useBaseUrl('img/api-fortress/2019/06/VisualView.png')} alt="Test Composer Visual View Pic"/>

- **Code** - The Code view is for users who are more comfortable working in code rather than a visual UI.

  <img src={useBaseUrl('img/api-fortress/2019/06/CodeView.png')} alt="Test Composer Code View Pic"/>

## Test Composer UI

Use the following image as a reference for the numbered items listed below:

<img src={useBaseUrl('img/api-fortress/2019/06/numberpic.png')} alt="Test Composer Number Pic"/>

### 1 - Add Request / Assertions

This is the **Add Request** / **Assertions** button, it can display all available components.

<img src={useBaseUrl('img/api-fortress/2019/06/components.png')} alt="Test Components"/>

If a component is not valid for the operation you are conducting, it will not be made available to help avoid mistakes.

For instance, if you don’t add a `POST` first, you cannot add a `POST` Body or `POST` Param.

> **NOTE**: Free accounts do not give you access to all available components.  
> Read descriptions of each component in the Reference section of API Fortress Documentation.

### 2 - Transform Component

This button allows you to easily transform an existing component into another component of the same type.

### 3 - Input Sets

**Input Sets** are a group of input variables representing a scenario. The test will be executed once for each input set, overriding the variable values into your test.

**Global Parameters** are variables that are available to be used throughout a test. Reference these variables simply by calling it within the test using the convention `“${VARIABLE}”`.

<img src={useBaseUrl('img/api-fortress/2019/06/params.png')} alt="Test Params"/>

### 4 - HTTP Client

The **HTTP Client** is very similar to many other `http` clients out there. You can make `GET`/`POST`/`PUT`/`PATCH`/`DELETE` calls and see their responses. A key difference in our HTTP client comes from your ability to generate a test for the API you are calling right from there.

If you click the _Generate Test_ button, the UI creates a test for you based on the API’s behavior and response.

See the screenshot below for details:

<img src={useBaseUrl('img/api-fortress/2019/06/Httpclient.png')} alt="Test Composer HTTP Client Pic"/>

## Additional Topics

Learn how to create a test quickly [here.](/api-testing/on-prem/quick-start)
