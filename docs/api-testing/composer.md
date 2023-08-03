---
id: composer
title: Writing API Tests with the Composer
sidebar_label: Using the Composer
description: Quickly generate and build functional API tests
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The API Testing Composer enables you to quickly generate API functional tests (no coding experience required) and/or code them from scratch. You can reuse these tests as end-to-end integration tests and load (stress) tests. In turn, load tests can be reused as monitors for performance testing.

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
- An existing API Testing Project. For details on how to create one, see [API Testing Quickstart](/api-testing/quickstart/).

## Creating a Test with the Composer

### Create a Test

1. In Sauce Labs, click **API Testing**.

<img src={useBaseUrl('/img/api-testing/apit-nav-rebrend.png')} alt="Navigating to API Testing" width="200"/>

2. On the **Projects** page:

   - If you have no tests or projects yet, in the **Write your own test** box, click **Use Composer**.

   <img src={useBaseUrl('/img/api-testing/composer-nav.webp')} alt="Navigating to the Composer" width="700"/>

   - If you have a project but no tests, on the **Projects** page, click **Write your own test**.

   - If your project has tests, click **Create Test** and then click **From Scratch**.

     <img src={useBaseUrl('/img/api-testing/test-create-from-scratch-nav.png')} alt="Navigating to the New Test window" width="350"/>

3. In the **New Test** box, enter a test name, test description (optional), and tags (optional), and then click **Create Test**.

<img src={useBaseUrl('/img/api-testing/test-create-new-test.png')} alt="New Test window" width="350"/>

:::note
You can use either the **Visual** composer (guides you through building components, with no coding required) or the **Code** composer (requires you to write code from scratch). For this guide, we're using **Visual**.
:::

For more information, see [Input Sets](/api-testing/composer/#input-sets) and [Visual View and Code View](/api-testing/composer/#visual-view-and-code-view).

### Add Test Components

When test components are combined, they act as our test logic. See the following pages for more information about the components types available in API Testing:

- [I/O Request Test Components](/api-testing/composer/io-components)
- [Assertion Test Components](/api-testing/composer/assertion-components/)
- [Logical Test Components](/api-testing/composer/logical-components/)
- [Other Components](/api-testing/composer/other-components/)

#### Add an I/O Request Test Component

To create a simple `GET` request and validate that response is correct:

1. In API Testing, on the **Compose** page, click **Add child component**.

<img src={useBaseUrl('/img/api-testing/add-component-nav.png')} alt="Navigating to the Add component screen"/>

2. In the list of component options, click the **GET** component.

<img src={useBaseUrl('/img/api-testing/get-request-nav.png')} alt="Navigating to the GET request window"/>

3. In the **GET request** window, in the **Url** field, enter `https://api.us-west-1.saucelabs.com/rest/v1/public/tunnels/info/versions`. This endpoint will return a JSON response body.

4. In the **Variable** field, enter **payload**. This variable stores the response, so it can now be referred to as **payload**.

<img src={useBaseUrl('/img/api-testing/get-request-window.webp')} alt="Editing in the GET request window"/>

5. Leave the rest of the fields blank and then click **Save Changes**.

The result should look like the following:

<img src={useBaseUrl('/img/api-testing/get-request-final.webp')} alt="What the GET request should look like" width="600"/>

For more information, see [I/O Request Test Components](/api-testing/composer/io-components/).

#### Add an Assertion Component

1. In API Testing, on the **Compose** page, click **Add child component**.

<img src={useBaseUrl('/img/api-testing/add-component-nav.png')} alt="Navigating to the Add component screen" width="600"/>

2. In the list of component options, click the **Assert Exists** component.

<img src={useBaseUrl('/img/api-testing/assert-exists-nav.png')} alt="Navigating to the Assert exists window"/>

3. In the **Assert exists** window, in the **Expression** field, enter `payload.downloads`. This expression checks for the **downloads** field in the json response body.

4. Leave the rest of the fields blank and click **Save Changes**.

<img src={useBaseUrl('/img/api-testing/assert-exists-window.webp')} alt="Confirm changes" width="600"/>

5. The result should look like the following:

<img src={useBaseUrl('/img/api-testing/assert-exists-final.png')} alt="What the Assert request should look like" />

For more information, see [Assertion Test Components](/api-testing/composer/assertion-components/).

#### Additional Example

In the following example, the expression checks if the `download_url` value inside the Linux object is a valid URL.

1. In API Testing, on the **Compose** page, click **Add child component**.

2. In the list of component options, click the **Assert Is** component.

3. In the **Assert is** window, in the **Expression** field, enter `payload.downloads.linux.download_url`. This expression checks for the **download_url** field in the json response payload.

4. Leave the rest of the fields blank and click **Save Changes**.

<img src={useBaseUrl('/img/api-testing/assert-exists-window-2.webp')} alt="Confirm changes" width="600"/>

5. The result should look like the following:

<img src={useBaseUrl('/img/api-testing/assert-exists-final-2.png')} alt="What the Assert request should look like" width="500"/>

### Run the Test

In the Composer, click **Run**.

<img src={useBaseUrl('/img/api-testing/run-test-save-run.png')} alt="Save and Run icons in the Composer" width="500"/>

All test runs appear to the right of the Composer, under the test details and environment sections.

<img src={useBaseUrl('/img/api-testing/test-runs.png')} alt="Test Runs in the Composer" width="350"/>

### Review Test Results

To view your results, in the Composer, in the **Test Runs** list, click the name of the test. This will open the **Test Report Details**. For more information, see [Test Outcome Report](/api-testing/project-dashboard/#test-outcome-report).

### Edit a Test

To edit a test at any time, on the **Projects** page, on the **Tests** screen, hover over a test name and then click **Edit Test**.

<img src={useBaseUrl('/img/api-testing/edit-test-icon-nav.png')} alt="Navigating to the test editor" width="300"/>

## Test Options

Once you've generated your tests in the Composer, you can manage them from the **Tests** screen. In your project, on the **Tests** screen, hover your mouse over the test line item. You'll see icons that allow you to edit, run, schedule, or delete a test.<br/>
<img src={useBaseUrl('img/api-testing/test-options.png')} alt="Test Options Icons"/>

- Pencil icon: Edit the test (opens the **Compose** tab)
- Play icon: Run the test manually
- Calendar icon: Open the [test scheduler](/api-testing/schedule-test)
- Gauge icon: Opens the load testing page
- Trash icon: Delete the test

## Terminology

### Visual View and Code View

This toggle switches between the Visual and Code views in the Composer. You can make calls and add assertions for testing your APIs, and insert variables wherever needed. You can use either, depending on which you're more comfortable with.

#### Visual View

Guides you through creating API tests using automated real-time suggestions via predictive text. No coding experience is required.<br/><img src={useBaseUrl('img/api-testing/visualView.png')} alt="Test Composer Visual view"/>

#### Code View

Enables you to write tests here from scratch, if you feel more comfortable working in code.<br/><img src={useBaseUrl('img/api-testing/codeView.png')} alt="Test Composer Code view"/>

### Add Child Component

This button displays all available [assertion components](/api-testing/composer/assertion-components/), [I/O components](/api-testing/composer/io-components/), and [logical components](/api-testing/composer/logical-components/).<br/>
<img src={useBaseUrl('img/api-testing/add-component-nav.png')} alt="Add Component"/>

If a component is not valid for the operation you are conducting, it will not be made available to help avoid mistakes. For instance, if you don’t add a `POST` first, you cannot add a `POST` Body or `POST` Param.

### Component Options

Click **Edit** to modify an existing component, or use the dropdown menu next to **Edit** to perform the actions shown below.

<img src={useBaseUrl('img/api-testing/deleteComponent.webp')} alt="Component Options"/>

### Save

Saves your progress.<br/>
<img src={useBaseUrl('img/api-testing/saveTest.png')} alt="Save"/>

### Publish

Publishes your test.<br/>
<img src={useBaseUrl('img/api-testing/publishtest.png')} alt="Publish"/>

### Clear

Clears the most recent unpublished changes made to your test.<br/>
<img src={useBaseUrl('img/api-testing/cleartest.png')} alt="Clear"/>

### Run

Executes a test.<br/>
<img src={useBaseUrl('img/api-testing/runTest.png')} alt="Run"/>

### Input Sets

Displays the Input Set view where you can store input data sets to reuse within the specific test you're working on.<br/>
<img src={useBaseUrl('img/api-testing/inputSets.png')} alt="Input Sets" width="500"/>

There are two types of input data sets you can use:

- Global Parameters - Variables that are specific to the test but are not related to a specific scenario (for example, api key).
- Input Set - Group of input variables representing a scenario, valid for that specific test only. The test will be executed once for each input set, overriding the variable values into your test.

If you define a variable in both the Global Parameters and Input Set sections, the value used in the test is what you specified in the Input Set.

<table>
<tr>
<td><strong>Input Set with Visual View</strong></td>
<td> <img src={useBaseUrl('img/api-testing/inputVisual.webp')} alt="Input Set Visual View"/> </td>
</tr>
<tr>
<td><strong>Input Set with Code View</strong></td>
<td><img src={useBaseUrl('img/api-testing/inputCode.png')} alt="Input Set Code View"/> </td>
</tr>
</table>

### Unit View

These buttons switch between the Input Set and Unit views.<br/>
<img src={useBaseUrl('img/api-testing/unitView.png')} alt="Unit View"/>

## More Information

- [API Testing Quickstart](/api-testing/quickstart)
- Check our [Use Cases](/api-testing/use-cases/working-with-headers) out to see practical examples to help you write your tests.
