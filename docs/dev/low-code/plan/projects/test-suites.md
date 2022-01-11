---
id: test-suites
title: Test Suites
sidebar_label: Test Suites
---

import useBaseUrl from '@docusaurus/useBaseUrl';

On the **Plan -> Test Suites** page you can view, update, execute, clone, or delete a test suite. In addition, you can view the test cases associated with the suite, as well as quickly access the step editor.

## Test Suites Page Components

<table>
  <tr>
    <td colspan='2'><b>Component</b>
    </td>
    <td><b>Description</b>
    </td>
  </tr>
  <tr>
    <td colspan='2'><b>Suite</b>
    </td>
    <td>The name given to the test suite.<br/><br/>Click the up or down arrow next to the column name to sort the table by suite name.
    </td>
  </tr>
  <tr>
    <td colspan='2'><b>Project</b>
    </td>
    <td>The name of the project to which the test suite belongs.<br/><br/>Click the up or down arrow next to the column name to sort the table by project name.
    </td>
  </tr>
  <tr>
    <td colspan='2'><b>Created</b>
    </td>
    <td>The date the test suite was created.<br/><br/>Click the up or down arrow next to the column name to sort the table by created date.
    </td>
  </tr>
  <tr>
    <td colspan='2'><b>Last Run</b>
    </td>
    <td>The date the test suite was last run.<br/><br/>Click the up or down arrow next to the column name to sort the table by last run date.
    </td>
  </tr>
  <tr>
    <td colspan='2'><b>Last Status</b>
    </td>
    <td>The most recent status of the test suite.<br/><br/>Click the up or down arrow next to the column name to sort the table by last status.
    </td>
  </tr>
  <tr>
    <td rowspan='6'><b>Actions</b>
    </td>
    <td><b>Update Suite</b>
    </td>
    <td>Update the name and description for the test suite. See <a href="#updating-a-test-suite">Updating a Test Suite</a> for more information.
    </td>
  </tr>
  <tr>
    <td><b>Clone Suite</b>
    </td>
    <td>Clone the test suite. See <a href="#cloning-a-test-suite">Cloning a Test Suite</a> for more information.
    </td>
  </tr>
  <tr>
    <td><b>Execute</b>
    </td>
    <td>Execute the test suite. See <a href="#executing-a-test-suite">Executing a Test Suite</a> for more information.
    </td>
  </tr>
  <tr>
    <td><b>Disable Suite</b>
    </td>
    <td>Disable the test suite.
    </td>
  </tr>
  <tr>
    <td><b>Delete Suite</b>
    </td>
    <td>Delete the test suite.
    </td>
  </tr>
  <tr>
    <td><b>Go To Test Suite</b>
    </td>
    <td>Opens the <b>Project Details -> Suites</b> page for the test suite. See <a href="/dev/low-code/plan/projects/project-details-page#test-suites-tab">Test Suites Tab</a> for more information.
    </td>
  </tr>
</table>

## Updating a Test Suite
To update a test suite:
1. On the dashboard, in the left navigation, click **Plan** and then click **Test Suites**.

<img src={useBaseUrl('/img/dev/low-code/test-suites-nav.png')} alt="Navigating to the Test Suites page"/>

1. Next to the test suite you want to update, click the **Actions** icon and then click **Update Suite**.

<img src={useBaseUrl('/img/dev/low-code/test-suites-update-nav.png')} alt="Navigating to the Update Suite window"/>

See [Creating a Test Suite](/dev/low-code/plan/projects/project-details-page#creating-a-test-suite) for information about the tabs in the **Update Suite** window.

## Cloning a Test Suite
To clone a test suite:
1. On the dashboard, in the left navigation, click **Plan** and then click **Test Suites**.
1. Next to the test suite you want to clone, click the **Actions** icon and then click **Clone Suite**.

<img src={useBaseUrl('/img/dev/low-code/test-suites-clone-nav.png')} alt="Navigating to the Clone Suite window"/>

1. In the **Clone Suite** window, enter a name for the cloned suite, and select a project to add it to. Click **Clone**.

<img src={useBaseUrl('/img/dev/low-code/test-suites-clone-window.png')} alt="The Clone Suite window"/>

## Executing a Test Suite
To execute a test suite:
1. On the dashboard, in the left navigation, click **Plan** and then click **Test Suites**.
1. Next to the test suite you want to clone, click the **Actions** icon and then click **Execute**.

<img src={useBaseUrl('/img/dev/low-code/test-suites-execute-nav.png')} alt="Navigating to the test suite execution window"/>
