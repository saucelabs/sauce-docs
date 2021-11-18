---
id: composer
title: Writing API Tests with the Composer
sidebar_label: Using the Composer
description: Our API Testing Composer offers enables you to auto-generate and build functional API tests in minutes.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The Sauce Labs API Testing _Composer_ feature enables you to generate sophisticated API functional tests in minutes (no coding experience required) and/or write them from scratch. You can reuse these tests as end-to-end integration tests and load (stress) tests. In turn, load tests can be reused as monitors for performance testing.

Below is a tour of the Composer UI, which you can access by going to the **Compose** tab from within a test.

## What You'll Need
* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).

## Code View / Visual View
This button toggles back and forth between the Visual and Code Test Composer views. You can make calls and add assertions for testing your APIs, and insert variables wherever needed. You can use either, depending on which you're more comfortable with.

#### Visual View
Guides you through creating API tests using automated real-time suggestions via predictive text. No coding experience is required.<br/>
<img src={useBaseUrl('img/api-fortress/2021/01/visualView.png')} alt="Test Composer Visual View Pic"/>

#### Code View
Enables you to write tests here from scratch, if you feel more comfortable working in code.<br/>
<img src={useBaseUrl('img/api-fortress/2021/01/codeView.png')} alt="Test Composer Code View Pic"/>

## Add Component
This button displays all available [assertion components](/api-testing/composer/assertion-components/), [I/O components](/api-testing/composer/io-components/), and [logical components](/api-testing/composer/logical-components/).<br/>
<img src={useBaseUrl('img/api-fortress/2021/01/addComponent.png')} alt="Add Component"/>

If a component is not valid for the operation you are conducting, it will not be made available to help avoid mistakes. For instance, if you don’t add a `POST` first, you cannot add a `POST` Body or `POST` Param.

:::note
Sauce Labs free trials may not give you access to all available components.
:::

## Transform Component

Transforms an existing component into another component of the same type.<br/>
<img src={useBaseUrl('img/api-fortress/2021/01/transformComponent.png')} alt="Add Component"/>

## Delete Component
Deletes a selected component from the test while using Visual view.<br/>
<img src={useBaseUrl('img/api-fortress/2021/01/deleteComponent.png')} alt="Delete Component"/>

## Invoke Snippet
Allows you to use a previously created code snippet stored in [The Vault](/api-testing/vault).<br/>
<img src={useBaseUrl('img/api-fortress/2021/01/invokeSnippet.png')} alt="Invoke Snippet"/>

## Export Snippet
Allows you to export a selected code snippet to the vault in order to be re-used later, or in another test.<br/>
<img src={useBaseUrl('img/api-fortress/2021/01/exportSnippet.png')} alt="Export Snippet"/>

## Save Test
Saves your progress.<br/>
<img src={useBaseUrl('img/api-fortress/2021/01/saveTest.png')} alt="Save Test"/>

## Run Test
Executes a test.<br/>
<img src={useBaseUrl('img/api-fortress/2021/01/runTest.png')} alt="Run Test"/>

## Input Sets
Displays the Input Set view where you can store input data sets to reuse across all your tests.<br/>
<img src={useBaseUrl('img/api-fortress/2021/01/inputSets.png')} alt="Input Sets" width="500"/>

There are two types of input data sets you can use:
* __Global Parameters__: variables that are available within a test, valid for that specific test _only_. Reference these variables by calling it within the test using the convention `“${VARIABLE}”`.
* __Input Set__: group of input variables representing a scenario, valid for that specific test _only_. The test will be executed once for each input set, overriding the variable values into your test.

<table>
<tr>
<td><strong>Input Set with Visual View</strong></td>
<td> <img src={useBaseUrl('img/api-fortress/2021/01/inputVisual.png')} alt="Input Set Visual View"/> </td>
</tr>
<tr>
<td><strong>Input Set with Code View</strong></td>
<td><img src={useBaseUrl('img/api-fortress/2021/01/inputCode.png')} alt="Input Set Code View"/> </td>
</tr>
</table>

## Unit View
This button toggles back and forth between the Input Set and Unit Test Composer view.<br/>
<img src={useBaseUrl('img/api-fortress/2021/01/unitView.png')} alt="Unit View"/>


## More Information
* [Sauce School | API Testing Course and Best Practices](https://training.saucelabs.com/apiTesting/index.html).
* Learn how to [create a test quickly](/api-testing/quickstart).
* Learn about [request components](/api-testing/composer/io-components) and [assertion components](/api-testing/composer/assertion-components).
