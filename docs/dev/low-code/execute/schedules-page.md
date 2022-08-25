---
id: schedules-page
title: Schedules Page
sidebar_label: Schedules Page
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The **Schedules** page includes information about your scheduled tests. From this page you can also create a new schedule (see [Creating a Schedule](#creating-a-schedule) for more information).

## Schedules Page Components

<table>
  <tr>
    <td colspan='3'><b>Component</b>
    </td>
    <td><b>Description</b>
    </td>
  </tr>
  <tr>
    <td colspan='3'><b>Schedule</b> column
    </td>
    <td>The name given to the schedule.<br/><br/>Click the up or down arrow next to the column name to sort the table by schedule name.
    </td>
  </tr>
  <tr>
    <td colspan='3'><b>Test Suite</b> column
    </td>
    <td>The name given to the test suite.<br/><br/>Click the up or down arrow next to the column name to sort the table by test suite name.
    </td>
  </tr>
  <tr>
    <td colspan='3'><b>Schedule Owner</b> column
    </td>
    <td>The name of the user who created the schedule.<br/><br/>Click the up or down arrow next to the column name to sort the table by schedule owner name.
    </td>
  </tr>
  <tr>
    <td colspan='3'><b>Start Date</b> column
    </td>
    <td>The scheduled start date.<br/><br/>Click the up or down arrow next to the column name to sort the table by the start date.
    </td>
  </tr>
  <tr>
    <td colspan='3'><b>End Date</b> column
    </td>
    <td>The scheduled end date.<br/><br/>Click the up or down arrow next to the column name to sort the table by the end date.
    </td>
  </tr>
  <tr>
    <td colspan='3'><b>Execution History</b> button
    </td>
    <td>Clicking the <b>Execution History</b> button opens the <b>Execution History</b> page. See <a href="/dev/low-code/execute/execution-history-page">Execution History Page</a> for more information.
    </td>
  </tr>
  <tr>
    <td rowspan='3'><b>Actions</b>
    </td>
    <td colspan='2'><b>Assign to Me</b> button
    </td>
    <td>Makes you the schedule owner.
    </td>
  </tr>
  <tr>
    <td colspan='2'><b>Update Schedule</b>
    </td>
    <td>Modify job and schedule details. See <a href="#creating-a-schedule">Creating a Schedule</a> for more information.
    </td>
  </tr>
  <tr>
    <td colspan='2'><b>Delete Schedule</b>
    </td>
    <td>Deletes the schedule.
    </td>
  </tr>
  <tr>
    <td rowspan='5'>Dropdown
    </td>
    <td colspan='2'><b>Case</b> column
    </td>
    <td>The name given to the test case.
    </td>
  </tr>
  <tr>
    <td colspan='2'><b>Last Scheduled Run</b> column
    </td>
    <td>The date the last run was scheduled for.
    </td>
  </tr>
  <tr>
    <td colspan='2'><b>Schedule Execution Status</b> column
    </td>
    <td>The status of the scheduled execution.
    </td>
  </tr>
  <tr>
    <td rowspan='2'><b>Actions</b>
    </td>
    <td><b>Go To Execution</b>
    </td>
    <td>Takes you to the execution page for the test case.
    </td>
  </tr>
  <tr>
    <td><b>Go To Step Editor</b>
    </td>
    <td>Takes you to the step editor for the test case.
    </td>
  </tr>
</table>

## Creating a Schedule
From the **Schedules** page, you can create new schedules, as well as update existing schedules.

To create a new schedule:
1. On the dashboard, in the left navigation, click **Execute** and then click **Schedule**.

<img src={useBaseUrl('/img/dev/low-code/schedules-nav.png')} alt="Navigating to the Create Schedule window" width="300"/>

2. On the **Schedules** page, click the plus sign button.

<img src={useBaseUrl('/img/dev/low-code/schedules-create-button.png')} alt="The Create button" width="300"/>

3. In the **Create Schedule** window, on the **Job** tab, enter a name for the schedule, and select its project from the dropdown. Select a test suite from the list, or enter text in the search field to search for a specific test suite. Click **Next**.

<img src={useBaseUrl('/img/dev/low-code/schedule-create-job.png')} alt="Create Schedule window - Job tab" width="300"/>

4. On the **Schedule** tab, enter a start and end time for the test.
5. In the **Time span** field, enter the frequency at which the scheduled run will occur. For example, if you enter **1 Day**, it will repeat every day until the end date.

<img src={useBaseUrl('/img/dev/low-code/schedule-create-schedule1.png')} alt="Create Schedule window - Schedule tab" width="400"/>

5. Click **Create**.

To update a schedule:
1. On the dashboard, in the left navigation, click **Execute** and then click **Schedule**.
2. On the **Schedules** page, in the **Actions** column, click the more actions button and then click **Update Schedule**.

<img src={useBaseUrl('/img/dev/low-code/schedule-update-nav.png')} alt="Navigating to the Update Schedule window" width="300"/>

3. Follow the instructions for [Creating a Schedule](#creating-a-schedule) and then click **Update**.
