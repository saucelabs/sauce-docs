---
id: reports
title: Reports 
sidebar_label: Reports 
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The **Reports** page displays reports for your projects, test suites, and test cases. To view the relevant information, in the dropdown box, select **Project**, **Test Suites**, or **Test Cases**.

There are two options for viewing report dates: **Actual Date (Default)** and **Relative Date**. The actual date is the date the report was created, while the relative date is the time since the report was created.

To download the information on the Reports page, click the **Download** button and then click **Download CSV** or **Download XLSX**.ß

<img src={useBaseUrl('/img/dev/low-code/reports-page.png')} alt="The Reports page" width="800"/>

## Reports Page Columns

<table>
  <tr>
    <td><b>Column</b></td>
    <td><b>Description</b></td>
  </tr>
  <tr>
    <td><b>Name</b></td>
    <td>The name of the project, test suite, or test case the report is for.<br/><br/>Click the up or down arrow next to the column name to sort the table by name.</td>
  </tr>
  <tr>
<td>
<b>Start Time</b>
    </td>
<td>
<b>Actual Date (Default)</b> - The date the report was created.<br/><br/><b>Relative Date</b> - The time since the report was created.<br/><br/>Click the up or down arrow next to the column name to sort the table by date.
    </td>
  </tr>
  <tr>
    <td><b>Total</b></td>
    <td>The total number of tests run in the project, test suite, or test case.<br/><br/>Click the up or down arrow next to the column name to sort the table by total number of tests.</td>
  </tr>
  <tr>
    <td><b>Passed</b></td>
    <td>The number of tests that were run that passed.<br/><br/>Click the up or down arrow next to the column name to sort the table by the number of tests that passed.</td>
  </tr>
  <tr>
    <td><b>Failed</b></td>
    <td>The number of tests that were run that failed.<br/><br/>Click the up or down arrow next to the column name to sort the table by the number of tests that failed.</td>
  </tr>
  <tr>
    <td><b>Product Bug</b></td>
    <td>The number of product bugs that were found.</td>
  </tr>
  <tr>
    <td><b>Automation Bug</b></td>
    <td>The number of automation bugs that were found.</td>
  </tr>
  <tr>
    <td><b>Execution History</b></td>
    <td>Clicking the <b>Execution History</b> button opens the <b>Execution History</b> page. See <a href="/dev/low-code/schedules/#execution-history-page">Execution History Page</a> for more information.</td>
  </tr>
</table>
