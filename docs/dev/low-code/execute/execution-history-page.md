---
id: execution-history-page
title: Execution History Page
sidebar_label: Execution History Page
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The **Execution History** page displays extensive information about the test that was executed. Use the **Prev** and **Next** buttons to navigate back and forth between tests in the **Reports** page view, and clicking the **Refresh** button will update the list.

<img src={useBaseUrl('/img/dev/low-code/execution-history-page.png')} alt="The Execution History page"/>

## Execution History Page Components

<table>
  <tr>
    <td colspan='3'><b>Component</b>
    </td>
    <td><b>Description</b>
    </td>
  </tr>
  <tr>
    <td colspan='3'><b>Execution Time</b> column
    </td>
    <td>The time the test was executed.<br/><br/>Click the up or down arrow next to the column name to sort the table by execution time.
    </td>
  </tr>
  <tr>
    <td colspan='3'><b>Total</b> column
    </td>
    <td>The total number of tests run in the project, test suite, or test case.<br/><br/>Click the up or down arrow next to the column name to sort the table by total number of tests.
    </td>
  </tr>
  <tr>
    <td colspan='3'><b>Passed</b> column
    </td>
    <td>The number of tests that were run that passed.<br/><br/>Click the up or down arrow next to the column name to sort the table by the number of tests that passed.
    </td>
  </tr>
  <tr>
    <td colspan='3'><b>Failed</b> column
    </td>
    <td>The number of tests that were run that failed.<br/><br/>Click the up or down arrow next to the column name to sort the table by the number of tests that failed.
    </td>
  </tr>
  <tr>
    <td colspan='3'><b>Execute Failed Test Cases</b> button
    </td>
    <td>Click to re-execute the failed tests.
    </td>
  </tr>
  <tr>
    <td colspan='3'><b>Stop</b> button
    </td>
    <td>Click to stop the execution.
    </td>
  </tr>
  <tr>
    <td rowspan='4'><b>Details</b> dropdown
    </td>
    <td colspan='2'><b>Case</b> column
    </td>
    <td>The name given to the test case.<br/><br/>Click the up or down arrow next to the column name to sort the table by case name.
    </td>
  </tr>
  <tr>
    <td colspan='2'><b>Project</b> column
    </td>
    <td>The project the test case is associated with.<br/><br/>Click the up or down arrow next to the column name to sort the table by project name.
    </td>
  </tr>
  <tr>
    <td colspan='2'><b>Execution Status</b> column
    </td>
    <td>The status of the execution.<br/><br/>Click the up or down arrow next to the column name to sort the table by execution status.
    </td>
  </tr>
  <tr>
    <td rowspan='3'><b>Actions</b> column
    </td>
    <td><b>Preview</b>
    </td>
    <td>Generates a preview of the test, which opens in a new tab.
    </td>
  </tr>
  <tr>
    <td><b>Download</b>
    </td>
    <td>Downloads the <b>Execution Report</b> as an .html file.<br/><br/>The <b>Execution Report</b> contains the information from the <b>Execution History</b> page, but in .html format.
    </td>
  </tr>
  <tr>
    <td><b>Go to Step Editor</b>
    </td>
    <td>Opens the step editor for the test case. See <a href="/dev/low-code/plan/projects/project-details-page#using-the-step-editor">Using the Step Editor</a> for more information.
    </td>
  </tr>
</table>
