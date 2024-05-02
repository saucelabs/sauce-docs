---
id: test-suites
title: Test Suites 
sidebar_label: Test Suites 
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Test Suites Tab

A test suite is a collection of test cases in a project. The **Test Suites** tab displays the test suites in a project, in table form. From this screen you can also create a new test suite, and clone, download, and disable existing test suites.

### Test Suites Tab Columns

<table>
  <tr>
    <td><b>Column</b></td>
    <td colspan='2'><b>Description</b></td>
  </tr>
  <tr>
    <td><b>Suite</b></td>
    <td colspan='2'>The test suites associated with the project. Click a test suite name to open the <b>Update Suite</b> window, where you can view and modify details about the test suite.<br/><br/>Click the up or down arrow next to the column name to sort the table alphabetically by test suite name.</td>
  </tr>
  <tr>
    <td><b>Created</b></td>
    <td colspan='2'>The date the test suite was created.<br/><br/>Click the up or down arrow next to the column name to sort the table by created date.</td>
  </tr>
  <tr>
    <td><b>Last Run</b></td>
    <td colspan='2'>The date the test suite was last run.<br/><br/>Click the up or down arrow next to the column name to sort the table by last run date.</td>
  </tr>
  <tr>
    <td><b>Last Status</b></td>
    <td colspan='2'>The last status of the test suite.<br/><br/>Click the up or down arrow next to the column name to sort the table by last status.</td>
  </tr>
  <tr>
    <td><b>Execute</b></td>
    <td colspan='2'>Hover in the <b>Execute</b> column and then click the <b>Execute</b> button.</td>
  </tr>
  <tr>
    <td><b>Delete</b></td>
    <td colspan='2'>Hover in the <b>Delete</b> column and then click the <b>Delete</b> button.</td>
  </tr>
  
</table>

### Creating a Test Suite

To create a test suite:

1. On the **Test Suites** tab, click the **CREATE TEST SUITE** button.

<img src={useBaseUrl('/img/dev/low-code/create-test-suite-nav.png')} alt="Navigating to the New Test Suite window" width="800"/>

2. In the **New Test Suite** window, on the **Name and Info** tab, enter a name for the test suite and an email to send reports to. Click **Next**.

<img src={useBaseUrl('/img/dev/low-code/new-test-suite-name-tab.png')} alt="New Test Suite window - Name and Info tab" width="400"/>

3. On the **Test Cases** tab, select the test cases to include in the test suite. Click **Next**.

<img src={useBaseUrl('/img/dev/low-code/new-test-suite-tc-tab.png')} alt="New Test Suite window - Test Cases tab" width="400"/>

4. On the **Arrange** tab, drag to reorder the test cases in the test suite. Click **Next**.

<img src={useBaseUrl('/img/dev/low-code/new-test-suite-arrange-tab.png')} alt="New Test Suite window - Arrange tab" width="400"/>

For information about the **Post Action** tab, see [Post Processing](#post-processing).

5. Click **Finish**.

### Post Processing

You can set a test suite or suites to be triggered after the completion of the parent test suite. Post processing suites can be from the same project or from different projects. Suites can be made to trigger based on different conditions. They can be also triggered at desired time intervals by using the **Delay** feature.



<table>
  <tr>
    <td colspan='2'><b>Component</b></td>
    <td><b>Description</b></td>
  </tr>
  <tr>
    <td colspan='2'><b>Case</b></td>
    <td>The name given to the test case.<br/><br/>Click the up or down arrow next to the column name to sort the table by case name.</td>
  </tr>
  <tr>
    <td colspan='2'><b>Project</b></td>
    <td>The project the test case is associated with.<br/><br/>Click the up or down arrow next to the column name to sort the table by project name.</td>
  </tr>
  <tr>
    <td colspan='2'><b>Created</b></td>
    <td>The date the test case was created.<br/><br/>Click the up or down arrow next to the column name to sort the table by created date.</td>
  </tr>
  <tr>
    <td colspan='2'><b>Last Generated</b></td>
    <td>The date the test case was last generated.<br/><br/>Click the up or down arrow next to the column name to sort the table by the last generated date.</td>
  </tr>
  <tr>
    <td colspan='2'><b>Last Status</b></td>
    <td>The most recent status of the test case.<br/><br/>Click the up or down arrow next to the column name to sort the table by last status.</td>
  </tr>
  <tr>
    <td rowspan='5'><b>Actions</b></td>
    <td><b>Update Test Case</b></td>
    <td>Update the test case details. See <a href="/dev/low-code/projects/test-cases/#adding-a-test-case">Adding a Test Case</a> for more information.</td>
  </tr>
  <tr>
    <td><b>Move Test Case</b></td>
    <td>Move the test case to a different project. See <a href="/dev/low-code/projects/project-details">Project Details </a> for more information.</td>
  </tr>
  <tr>
    <td><b>View Tags</b></td>
    <td>View the tags added to the test case.</td>
  </tr>
  <tr>
    <td><b>Disable Test Case</b></td>
    <td>Disable the test case.<br/><br/>You can also disable a test case by selecting its check box and then clicking the <b>Disable Test Case</b> button.</td>
  </tr>
  <tr>
    <td><b>Go To Step Editor</b></td>
    <td>Opens the step editor for the test case. See <a href="/dev/low-code/projects/test-cases#using-the-step-editor">Using the Step Editor</a> for more information.</td>
  </tr>
</table>


## Test Suites Page
On the **Test Suites** page you can view, update, execute, clone, or delete a test suite. In addition, you can view the test cases associated with the suite, as well as quickly access the step editor.

## Test Suites Page Components

<table>
  <tr>
    <td colspan='2'><b>Component</b></td>
    <td><b>Description</b></td>
  </tr>
  <tr>
    <td colspan='2'><b>Suite</b></td>
    <td>The name given to the test suite.<br/><br/>Click the up or down arrow next to the column name to sort the table by suite name.</td>
  </tr>
  <tr>
    <td colspan='2'><b>Created</b></td>
    <td>The date the test suite was created.<br/><br/>Click the up or down arrow next to the column name to sort the table by created date.</td>
  </tr>
  <tr>
    <td colspan='2'><b>Last Run</b></td>
    <td>The date the test suite was last run.<br/><br/>Click the up or down arrow next to the column name to sort the table by last run date.</td>
  </tr>
  <tr>
    <td colspan='2'><b>Last Status</b></td>
    <td>The most recent status of the test suite.<br/><br/>Click the up or down arrow next to the column name to sort the table by last status.</td>
  </tr>

  <tr>
    <td colspan='2'><b>More</b></td>
    <td>
        <ul>
        <li><b>Clone Suite</b></li>
        <li><b>Disable Suite</b></li>
        <li><b>Delete Suite</b></li>
        </ul>
    </td>
  </tr>
</table>

## Cloning a Test Suite

To clone a test suite:

1. On the **Test Suites** tab, click the more options button and then click **Clone Suite**.

<img src={useBaseUrl('/img/dev/low-code/test-suites-clone-nav.png')} alt="Navigating to the Clone Suite window" width="350"/>

3. In the **Clone Suite** window, enter a name for the cloned suite, and select a project to add it to. Click **Clone**.

<img src={useBaseUrl('/img/dev/low-code/test-suites-clone-window.png')} alt="The Clone Suite window" width="300"/>

## Executing a Test Suite

To execute a test suite:

1.  On the **Test Suites** tab, next to the test suite, click **Execute**.

<img src={useBaseUrl('/img/dev/low-code/test-suites-execute-nav.png')} alt="Navigating to the test suite execution window" width="350"/>
