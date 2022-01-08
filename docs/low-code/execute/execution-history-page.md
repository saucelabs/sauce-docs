---
id: execution-history-page
title: Execution History Page
sidebar_label: Execution History Page
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The **Execution History** page displays extensive information about the test that was executed. Use the **Prev** and **Next** buttons to navigate back and forth between tests in the **Reports** page view, and clicking the **Refresh** button will update the list.

<img src={useBaseUrl('/img/placeholder-image.png')} alt="Placeholder"/>

## Execution History Page Components

<table>
  <tr>
    <td colspan='3'>Component
    </td>
    <td>Description
    </td>
  </tr>
  <tr>
    <td colspan='3'>Execution Time column
    </td>
    <td>The time the test was executed.<br/><br/>Click the up or down arrow next to the column name to sort the table by execution time.
    </td>
  </tr>
  <tr>
    <td colspan='3'>Total column
    </td>
    <td>The total number of tests run in the project, test suite, or test case.<br/><br/>Click the up or down arrow next to the column name to sort the table by total number of tests.
    </td>
  </tr>
  <tr>
    <td colspan='3'>Passed column
    </td>
    <td>The number of tests that were run that passed.<br/><br/>Click the up or down arrow next to the column name to sort the table by the number of tests that passed.
    </td>
  </tr>
  <tr>
    <td colspan='3'>Failed column
    </td>
    <td>The number of tests that were run that failed.<br/><br/>Click the up or down arrow next to the column name to sort the table by the number of tests that failed.
    </td>
  </tr>
  <tr>
    <td colspan='3'>Execute Failed Test Cases button
    </td>
    <td>Click to re-execute the failed tests.
    </td>
  </tr>
  <tr>
    <td colspan='3'>Stop button
    </td>
    <td>Click to stop the execution.
    </td>
  </tr>
  <tr>
    <td rowspan='4'>Details dropdown
    </td>
    <td colspan='2'>Case column
    </td>
    <td>The name given to the test case.<br/><br/>Click the up or down arrow next to the column name to sort the table by case name.
    </td>
  </tr>
  <tr>
    <td colspan='2'>Project column
    </td>
    <td>The project the test case is associated with.<br/><br/>Click the up or down arrow next to the column name to sort the table by project name.
    </td>
  </tr>
  <tr>
    <td colspan='2'>Execution Status column
    </td>
    <td>The status of the execution.<br/><br/>Click the up or down arrow next to the column name to sort the table by execution status.
    </td>
  </tr>
  <tr>
    <td rowspan='3'>Actions column
    </td>
    <td>Preview
    </td>
    <td>Generates a preview of the test, which opens in a new tab.
    </td>
  </tr>
  <tr>
    <td>Download
    </td>
    <td>Downloads the Execution Report as an .html file.<br/><br/>The Execution Report contains the information from the Execution History page, but in .html format.
    </td>
  </tr>
  <tr>
    <td>Go to Step Editor
    </td>
    <td>Opens the step editor for the test case. See Using the Step Editor for more information.
    </td>
  </tr>
</table>
