---
id: composer
title: Test Composer Guide
sidebar_label: Test Composer Guide
description: The API Fortress Composer offers unparalleled flexibility and ease-of-use, with everything at your fingertips to build tests in minutes and eliminate many duplicate tasks.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The API Fortress Composer offers unparalleled flexibility and ease-of-use, with everything at your fingertips to build tests in minutes and eliminate many duplicate tasks. Users of all skill levels can begin using the Composer with little or no training to quickly generate sophisticated functional tests. You can then reuse these tests as end-to-end integration tests and load (stress) tests. In turn, load tests may easily be reused as monitors for performance testing.  

:::note Learn more about End-to-End Tests / Integration Tests
Read the following page to learn more about [Integration / Multistep Testing](/api-testing/mark2/quick-start/introduction-to-integration-testing)  
:::

## Visual vs. Code View

Begin using the Composer by selecting from two versions in terms of views. With both the Visual and Code views, you can easily make calls and add assertions for testing your APIs, and insert variables wherever needed.

* __Visual__ - The Visual Composer does not require coding expertise, and provides real-time suggestions via predictive text to help you create ideal API tests for your needs.

  <img src={useBaseUrl('img/api-fortress/2021/01/visualView.png')} alt="Test Composer Visual View Pic"/>

* __Code__ - The Code view is for users who are more comfortable working in code rather than a visual UI.

  <img src={useBaseUrl('img/api-fortress/2021/01/codeView.png')} alt="Test Composer Code View Pic"/>

:::tip
For information on API Testing Best Practices, visit our [Sauce School API Testing course](https://training.saucelabs.com/apiTesting/index.html).
:::

## Test Composer UI

Use the following image as a reference for the numbered items listed below:

<img src={useBaseUrl('img/api-fortress/2021/01/testComposerPage-annotated.png')} alt="Test Composer Page Annotated"/>

1. __Add Request__ / __Assertions__: This button displays all available components.
   If a component is not valid for the operation you are conducting, it will not be made available to help avoid mistakes.
   For instance, if you don’t add a `POST` first, you cannot add a `POST` Body or `POST` Param.

   <img src={useBaseUrl('img/api-fortress/2019/06/components.png')} alt="Test Components"/>

  > __NOTE__: Free accounts do not give you access to all available components.  
  > Read descriptions of each component in the Reference section of API Fortress Documentation.

2. __Transform  Component__: This button allows you to easily transform an existing component into another component of the same type.

3. __Delete Component__: This button allows you to delete a selected component from the test while using visual mode.

4. __Invoke Snippet__: This button allows you to use a previously created code snippet stored in [The Vault](/api-testing/mark2/quick-start/the-vault).

5. __Export Snippet__: This button allows you to export a selected code snippet to the vault in order to be re-used later, or in another test.

6. __Save Test__: This button saves your progress.

7. __Run Test__: This button executes a test.

8. __Input Sets__: This button displays the Input Set view where you can store input data sets to reuse across all your tests. There are two types of input data sets you can use:

    * _Global Parameters_ - variables that are available across all tests in the project. Reference these variables simply by calling it within the test using the convention `“${VARIABLE}”`.
    * _Input Sets_-  group of input variables representing a scenario. The test will be executed once for each input set, overriding the variable values into your test.

  | Input Set Code View                                                                                   | Input Set Visual View                                                                 |
  |---------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|
  | <img src={useBaseUrl('img/api-fortress/2021/01/inputCode.png')} alt="Input Set Code View"/> | <img src={useBaseUrl('img/api-fortress/2021/01/inputVisual.png')} alt="Input Set Visual View"/> |

9. __Unit View__: This button toggles back and forth between the  Input Set and Unit Test Composer view.

10. __Code and Visual View__: This button toggles back and forth between the Visual and Code Test Composer view.


## More Information

* Learn how to [create a test quickly](/api-testing/mark3/quick-start).
* Learn about [request components](/api-testing/mark2/io-components) and [assertion components](/api-testing/mark2/assertion-components/assert-compares).
