---
id: schedules
title: Schedules 
sidebar_label: Schedules 
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The **Schedules** page includes information about your scheduled tests. From this page you can also create a new schedule (see [Creating a Schedule](#creating-a-schedule) for more information).

<img src={useBaseUrl('/img/dev/low-code/schedules-page-nav.png')} alt="Navigating to the Schedules page" width="300"/>

## Schedules Page Components

<table>
  <tr>
    <td colspan='3'><b>Component</b></td>
    <td><b>Description</b></td>
  </tr>
  <tr>
    <td colspan='3'><b>Schedule</b> column</td>
    <td>The name given to the schedule.<br/><br/>Click the up or down arrow next to the column name to sort the table by schedule name.</td>
  </tr>
  <tr>
    <td colspan='3'><b>Test Suite</b> column</td>
    <td>The name given to the test suite.<br/><br/>Click the up or down arrow next to the column name to sort the table by test suite name.</td>
  </tr>
  <tr>
    <td colspan='3'>
        <b>Schedule Owner </b>
        column
    </td>
    <td>The name of the user who created the schedule.<br/><br/>Click the up or down arrow next to the column name to sort the table by schedule owner name.</td>
  </tr>
  <tr>
    <td colspan='3'><b>Start Date</b> column</td>
    <td>The scheduled start date.<br/><br/>Click the up or down arrow next to the column name to sort the table by the start date.</td>
  </tr>
  <tr>
    <td colspan='3'><b>End Date</b> column</td>
    <td>The scheduled end date.<br/><br/>Click the up or down arrow next to the column name to sort the table by the end date.</td>
  </tr>
  <tr>
    <td colspan='3'><b>Interval</b> button</td>
    <td>The interval at which tests will be run.</td>
  </tr>
  <tr>
    <td colspan='3'><b>Execution History</b> button</td>
    <td>Clicking the <b>Execution History</b> button opens the <b>Execution History</b> page. See Execution History Page for more information.</td>
  </tr>
  <tr>
    <td rowspan='3'><b>Actions</b></td>
    <td colspan='2'><b>Assign to Me</b> button</td>
    <td>Makes you the schedule owner.</td>
  </tr>
  <tr>
    <td colspan='2'><b>Update Schedule</b></td>
    <td>Modify job and schedule details. See <a href="#creating-a-schedule">Creating a Schedule</a> for more information.</td>
  </tr>
  <tr>
    <td colspan='2'><b>Delete Schedule</b></td>
    <td>Deletes the schedule.</td>
  </tr>
  <tr>
    <td rowspan='5'>Dropdown</td>
    <td colspan='2'><b>Case</b> column</td>
    <td>The name given to the test case.</td>
  </tr>
  <tr>
    <td colspan='2'><b>Last Scheduled Run</b> column</td>
    <td>The date the last run was scheduled for.</td>
  </tr>
  <tr>
    <td colspan='2'><b>Schedule Execution Status</b> column</td>
    <td>The status of the scheduled execution.</td>
  </tr>
  <tr>
    <td rowspan='2'><b>Actions</b></td>
    <td><b>Go To Execution</b></td>
    <td>Takes you to the execution page for the test case.</td>
  </tr>
</table>

## Creating a Schedule

From the **Schedules** page, you can create new schedules, as well as update existing schedules.

To create a new schedule:

1. On the dashboard, in the left navigation, click **Schedules**.

<img src={useBaseUrl('/img/dev/low-code/schedules-page-nav.png')} alt="Navigating to the Schedules" width="300"/>

2. On the **Schedules** page, click the plus sign button.

<img src={useBaseUrl('/img/dev/low-code/schedules-create-button.png')} alt="The Create button" width="300"/>

3. In the **Create Schedule** window, on the **Job** tab, enter a name for the schedule, and select its project from the dropdown. Select a test suite from the list, or enter text in the search field to search for a specific test suite. Click **Next**.

<img src={useBaseUrl('/img/dev/low-code/schedule-create-job.png')} alt="Create Schedule window - Job tab" width="300"/>

4. On the **Schedule** tab, enter a start and end time for the test.
5. In the **Time span** field, enter the frequency at which the scheduled run will occur. For example, if you enter **1 Day**, it will repeat every day until the end date.

<img src={useBaseUrl('/img/dev/low-code/schedule-create-schedule1.png')} alt="Create Schedule window - Schedule tab" width="400"/>

5. Click **Create**.

To update a schedule:

1. On the dashboard, in the left navigation, click **Schedules**.
2. On the **Schedules** page, in the **Actions** column, click the more actions button and then click **Update Schedule**.

<img src={useBaseUrl('/img/dev/low-code/schedule-update-nav.png')} alt="Navigating to the Update Schedule window" width="300"/>

3. Follow the instructions for [Creating a Schedule](#creating-a-schedule) and then click **Update**.

## Execution History Page
The **Execution History** page displays extensive information about the test that was executed. Use the **Prev** and **Next** buttons to navigate back and forth between tests in the **Reports** page view, and clicking the **Refresh** button will update the list.

<img src={useBaseUrl('/img/dev/low-code/execution-history-page.png')} alt="The Execution History page" width="600"/>

## Execution History Page Components

<table>
  <tbody>
      <tr>
          <td colspan='3'><b>Execution Time</b> column</td>
          <td>The time the test was executed.<br/><br/>Click the up or down arrow next to the column name to sort the table by execution time.</td>
      </tr>
      <tr>
          <td colspan='3'><b>Total</b> column</td>
          <td>The total number of tests run in the project, test suite, or test case.<br/><br/>Click the up or down arrow next to the column name to sort the table by total number of tests.</td>
      </tr>
      <tr>
          <td colspan='3'><b>Passed</b> column</td>
          <td>The number of tests that were run that passed.<br/><br/>Click the up or down arrow next to the column name to sort the table by the number of tests that passed.</td>
      </tr>
      <tr>
          <td colspan='3'><b>Failed</b> column</td>
          <td>The number of tests that were run that failed.<br/><br/>Click the up or down arrow next to the column name to sort the table by the number of tests that failed.</td>
      </tr>
      <tr>
          <td colspan='3'><b>Execute Failed Test Cases</b> button</td>
          <td>Click to re-execute the failed tests.</td>
      </tr>
      <tr>
          <td colspan='3'><b>Stop</b> button</td>
          <td>Click to stop the execution.</td>
      </tr>
      <tr>
          <td rowspan='7'><b>Details</b> dropdown</td>
          <td colspan='2'><b>Case</b> column</td>
          <td>The name given to the test case.<br/><br/>Click the up or down arrow next to the column name to sort the table by case name.</td>
      </tr>
      <tr>
          <td colspan='2'><b>Project</b> column</td>
          <td>The project the test case is associated with.<br/><br/>Click the up or down arrow next to the column name to sort the table by project name.</td>
      </tr>
      <tr>
          <td colspan='2'><b>Execution Status</b> column</td>
          <td>The status of the execution.<br/><br/>Click the up or down arrow next to the column name to sort the table by execution status.</td>
      </tr>
      <tr>
          <td colspan='2'><b>Retry Execution Status</b> column</td>
          <td></td>
      </tr>
      <tr>
          <td colspan='2'><b>Preview</b></td>
          <td>Generates a preview of the test, which opens in a new tab.</td>
      </tr>
      <tr>
          <td colspan='2'><b>Download</b></td>
          <td>Downloads the <b>Execution Report</b> as an .html file.<br/><br/>The <b>Execution Report</b> contains the information from the <b>Execution History</b> page, but in .html format.</td>
      </tr>
      <tr>
          <td colspan='2'><b>Go to Step Editor</b></td>
          <td>Opens the step editor for the test case. See <a href="/dev/low-code/projects/test-cases/#using-the-step-editor">Using the Step Editor</a> for more information.</td>
      </tr>
  </tbody>
</table>
