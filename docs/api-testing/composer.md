---
id: composer
title: Writing API Tests with the Composer
sidebar_label: Using the Composer
description: Our API Testing Composer enables you to auto-generate and build functional API tests in minutes.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The API Test **Compose** tab (aka _Composer_) enables you to generate sophisticated API functional tests in minutes (no coding experience required) and/or code them from scratch. You can reuse these tests as end-to-end integration tests and load (stress) tests. In turn, load tests can be reused as monitors for performance testing.


## What You'll Need
* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
* An existing API Testing Project. For details on how to create one, see [API Testing Quickstart](/api-testing/quickstart/).


## How to Write a Composer Test

### Create a Test

1. Log in to Sauce Labs, then click **API TESTING** > **Get Started**.<br/><img src={useBaseUrl('img/api-fortress/2021/09/landingPage.png')} alt="API Testing landing page" width="500" />
2. Go into any Project.
3. On the **Tests** tab, click **Create Test** > **From Scratch**.<br/><img src={useBaseUrl('img/api-fortress/2021/01/createTest.png')} alt="Create a Test button" width="500"/>
4. In the **New Test** fields, enter a **Test Name** (required), **Test Description** (optional), and **Tag(s)** (optional), then click **Save**.<br/><img src={useBaseUrl('img/api-fortress/2021/01/createTest2.png')} alt="Enter Test Details" width="450"/>
5. Make sure you're now in the **Compose** tab (aka Composer) with the [**Input**](/api-testing/composer/#input-sets) and [**Visual**](/api-testing/composer/#visual-view-and-code-view) views toggled.<br/><img src={useBaseUrl('img/api-fortress/2020/09/addComponentView.png')} alt="Add Components from Composer" width="500" />
  :::note Composing tests
  You can use either [**Visual** composer](#visual-view-and-code-view) (guides you through building components - no coding required) or [**Code** composer](#visual-view-and-code-view) (requires you to write code from scratch). For this guide, we're using **Visual**.
  :::

To go back and edit a Test at any time, go into your Project's **Tests** tab, hover over a test name, then click **Edit Test** (pencil icon).<br/><img src={useBaseUrl('img/api-fortress/2020/09/editTest.png')} alt="Components available" width="600" />

### Add Test Components
The next of set steps is to add the necessary test components. When combined, they act as our test logic. You can choose from [I/O (Request) Components](/api-testing/composer/io-components), [Assertion Components](/api-testing/composer/assertion-components/), and [Logical Components](/api-testing/composer/logical-components/).

#### Add I/O Request Component
Create a simple `GET` request and validate that response is correct.

6. Click the **Add Component** button (**+** icon).<br/><img src={useBaseUrl('img/api-fortress/2021/01/addComponent.png')} alt="Add Request Component" width="400"/>
7. Select the `GET` request component.<br/><img src={useBaseUrl('img/api-fortress/2021/01/getRequest.png')} alt="GET request Component"/>
8. In the **Url** field, write `https://api.us-west-1.saucelabs.com/rest/v1/public/tunnels/info/versions`. This URL will return a `json` response body.
9. In the **Variable** field, write `payload`. This variable stores the response.<br/><img src={useBaseUrl('img/api-fortress/2021/01/getFields.png')} alt="GET request fields"/>
10. Leave the rest of the fields blank and click **Save**. This is what the end result will look like:<br/><img src={useBaseUrl('img/api-fortress/2021/01/getRequestEndResult.png')} alt="GET request end result"/>

:::tip
For detailed information, see [Request (I/O) Components](/api-testing/composer/io-components/).
:::

#### Add Assertion Component
11. Click the **Add Component** button (**+** icon).<br/><img src={useBaseUrl('img/api-fortress/2021/01/addComponent.png')} alt="Add Request Component" width="400" />
12. Select the **Assert Exists** assertion component.<br/><img src={useBaseUrl('img/api-fortress/2021/01/assertExists.png')} alt="Assert Exists Component"/>
13. Edit the following details:
    * **Expression**: `payload.downloads` - This expression checks for the field `"downloads"` in the `json` response body.<br/><img src={useBaseUrl('img/api-fortress/2021/01/assertDetails.png')} alt="Assert Exists Details"/>
    * Leave the rest of the fields blank and click **Confirm changes** (checkmark icon).

:::tip
For detailed information, see [Assertion Components](/api-testing/composer/assertion-components/).
:::

### Run Test
14. Before you run the test, select the **Save** icon.<img src={useBaseUrl('img/api-fortress/2021/01/save.png')} alt="save icon"/> at the top of the Composer.
15. Then select the **Run** icon <img src={useBaseUrl('img/api-fortress/2021/01/run.png')} alt="run test icon"/> directly next to the Save icon.<img src={useBaseUrl('img/api-fortress/2021/01/composerToolbar.png')} alt="Test Composer Tool Bar"/>

All test runs appear to the right of the Composer, underneath the test details and environment sections.
<img src={useBaseUrl('img/api-fortress/2021/01/testRuns.png')} alt="Test Runs Section" />

### Review Test Results
To view your results, click on the test run. This will open the [**Test Outcome Report**](/api-testing/test-reports/), which displays information regarding the test.


## Terminology

### Visual View and Code View
This button toggles back and forth between the Visual and Code Test Composer views. You can make calls and add assertions for testing your APIs, and insert variables wherever needed. You can use either, depending on which you're more comfortable with.

#### Visual View
Guides you through creating API tests using automated real-time suggestions via predictive text. No coding experience is required.<br/><img src={useBaseUrl('img/api-fortress/2021/01/visualView.png')} alt="Test Composer Visual View Pic"/>

#### Code View
Enables you to write tests here from scratch, if you feel more comfortable working in code.<br/><img src={useBaseUrl('img/api-fortress/2021/01/codeView.png')} alt="Test Composer Code View Pic"/>

### Add Component
This button displays all available [assertion components](/api-testing/composer/assertion-components/), [I/O components](/api-testing/composer/io-components/), and [logical components](/api-testing/composer/logical-components/).<br/>
<img src={useBaseUrl('img/api-fortress/2021/01/addComponent.png')} alt="Add Component"/>

If a component is not valid for the operation you are conducting, it will not be made available to help avoid mistakes. For instance, if you don’t add a `POST` first, you cannot add a `POST` Body or `POST` Param.

:::note
Sauce Labs free trials may not give you access to all available components.
:::

### Transform Component
Transforms an existing component into another component of the same type.<br/>
<img src={useBaseUrl('img/api-fortress/2021/01/transformComponent.png')} alt="Add Component"/>

### Delete Component
Deletes a selected component from the test while using Visual view.<br/>
<img src={useBaseUrl('img/api-fortress/2021/01/deleteComponent.png')} alt="Delete Component"/>

### Invoke Snippet
Allows you to use a previously created code snippet stored in [The Vault](/api-testing/vault).<br/>
<img src={useBaseUrl('img/api-fortress/2021/01/invokeSnippet.png')} alt="Invoke Snippet"/>

### Export Snippet
Allows you to export a selected code snippet to the vault in order to be re-used later, or in another test.<br/>
<img src={useBaseUrl('img/api-fortress/2021/01/exportSnippet.png')} alt="Export Snippet"/>

### Save Test
Saves your progress.<br/>
<img src={useBaseUrl('img/api-fortress/2021/01/saveTest.png')} alt="Save Test"/>

### Run Test
Executes a test.<br/>
<img src={useBaseUrl('img/api-fortress/2021/01/runTest.png')} alt="Run Test"/>

### Input Sets
Displays the Input Set view where you can store input data sets to reuse within the specific test you're working on.<br/><img src={useBaseUrl('img/api-fortress/2021/01/inputSets.png')} alt="Input Sets" width="500"/>

There are two types of input data sets you can use:
* __Global Parameters__: variables that are available within a test, valid for that specific test _only_.
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

### Unit View
This button toggles back and forth between the Input Set and Unit Test Composer view.<br/>
<img src={useBaseUrl('img/api-fortress/2021/01/unitView.png')} alt="Unit View"/>





## More Information
* [API Testing Quickstart](/api-testing/quickstart): learn how to create a test quickly using the HTTP Client or by importing a spec file
* [Sauce School | API Testing Course and Best Practices](https://training.saucelabs.com/apiTesting/index.html)
