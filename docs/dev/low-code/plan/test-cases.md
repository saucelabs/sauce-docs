---
id: test-cases
title: Test Cases
sidebar_label: Test Cases
---

import useBaseUrl from '@docusaurus/useBaseUrl';

On the **Plan -> Test Cases** page you can view, update, move, or disable a test case. In addition, you can add tags to test cases and easily access the step editor.

## Test Cases Page Components

<table>
  <tr>
    <td colspan='2'><b>Component</b>
    </td>
    <td><b>Description</b>
    </td>
  </tr>
  <tr>
    <td colspan='2'><b>Case</b>
    </td>
    <td>The name given to the test case.<br/><br/>Click the up or down arrow next to the column name to sort the table by case name.
    </td>
  </tr>
  <tr>
    <td colspan='2'><b>Project</b>
    </td>
    <td>The project the test case is associated with.<br/><br/>Click the up or down arrow next to the column name to sort the table by project name.
    </td>
  </tr>
  <tr>
    <td colspan='2'><b>Created</b>
    </td>
    <td>The date the test case was created.<br/><br/>Click the up or down arrow next to the column name to sort the table by created date.
    </td>
  </tr>
  <tr>
    <td colspan='2'><b>Last Generated</b>
    </td>
    <td>The date the test case was last generated.<br/><br/>Click the up or down arrow next to the column name to sort the table by the last generated date.
    </td>
  </tr>
  <tr>
    <td colspan='2'><b>Last Status</b>
    </td>
    <td>The most recent status of the test case.<br/><br/>Click the up or down arrow next to the column name to sort the table by last status.
    </td>
  </tr>
  <tr>
    <td rowspan='5'><b>Actions</b>
    </td>
    <td><b>Update Test Case</b>
    </td>
    <td>Update the test case details. See <a href="/dev/low-code/plan/projects/project-details-page#adding-a-test-case">Adding a Test Case</a> for more information.
    </td>
  </tr>
  <tr>
    <td><b>Move Test Case</b>
    </td>
    <td>Move the test case to a different project. See <a href="/dev/low-code/plan/projects/project-details-page">Project Details Page</a> for more information.
    </td>
  </tr>
  <tr>
    <td><b>View Tags</b>
    </td>
    <td>View the tags added to the test case.
    </td>
  </tr>
  <tr>
    <td><b>Disable Test Case</b>
    </td>
    <td>Disable the test case.<br/><br/>You can also disable a test case by selecting its check box and then clicking the <b>Disable Test Case</b> button.
    </td>
  </tr>
  <tr>
    <td><b>Go To Step Editor</b>
    </td>
    <td>Opens the step editor for the test case. See <a href="/dev/low-code/plan/projects/project-details-page#using-the-step-editor">Using the Step Editor</a> for more information.
    </td>
  </tr>
</table>

## Tagging a Test Case
To tag a test case:
1. On the dashboard, in the left navigation, click **Plan** and then click **Test Cases**.

<img src={useBaseUrl('/img/dev/low-code/tag-test-case-nav.png')} alt="Navigating to the test case tagging page" width="300"/>

2. Select the checkbox of the test case you want to tag, and then click the **Tag Test Case** button.

<img src={useBaseUrl('/img/dev/low-code/tag-test-case-button.png')} alt="The tag test case button" width="600"/>

3. In the **Create Tags** window, enter the text for the tag and then click **ADD**.

<img src={useBaseUrl('/img/dev/low-code/create-tags-window.png')} alt="The Create Tags window" width="300"/>

4. To view the tags added to a test case, click the **Actions** icon and then click **View Tags**.

5. To remove a tag, in the **Current Tags** window, click the **x** next to the tag.
