---
id: schedules-page
title: Schedules Page
sidebar_label: Schedules Page
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The **Schedules** page includes information about your scheduled tests. From this page you can also create a new schedule (see [Creating a Schedule]() for more information).

## Schedules Page Components

<table>
  <tr>
    <td colspan='3'>Component
    </td>
    <td>Description
    </td>
  </tr>
  <tr>
    <td colspan='3'>Schedule column
    </td>
    <td>The name given to the schedule.<br/><br/>Click the up or down arrow next to the column name to sort the table by schedule name.
    </td>
  </tr>
  <tr>
    <td colspan='3'>Test Suite column
    </td>
    <td>The name given to the test suite.<br/><br/>Click the up or down arrow next to the column name to sort the table by test suite name.
    </td>
  </tr>
  <tr>
    <td colspan='3'>Schedule Owner column
    </td>
    <td>The name of the user who created the schedule.<br/><br/>Click the up or down arrow next to the column name to sort the table by schedule owner name.
    </td>
  </tr>
  <tr>
    <td colspan='3'>Start Date column
    </td>
    <td>The scheduled start date.<br/><br/>Click the up or down arrow next to the column name to sort the table by the start date.
    </td>
  </tr>
  <tr>
    <td colspan='3'>End Date column
    </td>
    <td>The scheduled end date.<br/><br/>Click the up or down arrow next to the column name to sort the table by the end date.
    </td>
  </tr>
  <tr>
    <td colspan='3'>Execution History button
    </td>
    <td>Clicking the Execution History button opens the Execution History page. See Execution History Page for more information.
    </td>
  </tr>
  <tr>
    <td rowspan='3'>Actions
    </td>
    <td colspan='2'>Assign to Me button
    </td>
    <td>Makes you the schedule owner.
    </td>
  </tr>
  <tr>
    <td colspan='2'>Update Schedule
    </td>
    <td>Modify job and schedule details. See Creating a Schedule for more information.
    </td>
  </tr>
  <tr>
    <td colspan='2'>Delete Schedule
    </td>
    <td>Deletes the schedule.
    </td>
  </tr>
  <tr>
    <td rowspan='5'>Dropdown
    </td>
    <td colspan='2'>Case column
    </td>
    <td>The name given to the test case.
    </td>
  </tr>
  <tr>
    <td colspan='2'>Last Scheduled Run column
    </td>
    <td>The date the last run was scheduled for.
    </td>
  </tr>
  <tr>
    <td colspan='2'>Schedule Execution Status column
    </td>
    <td>The status of the scheduled execution.
    </td>
  </tr>
  <tr>
    <td rowspan='2'>Actions
    </td>
    <td>Go To Execution
    </td>
    <td>Takes you to the execution page for the test case.
    </td>
  </tr>
  <tr>
    <td>Go To Step Editor
    </td>
    <td>Takes you to the step editor for the test case.
    </td>
  </tr>
</table>

## Creating a Schedule
From the **Schedules** page, you can create new schedules, as well as update existing schedules.

To create a new schedule:
1. In the dashboard, in the left navigation, click **Execute** and then click **Schedule**.

<img src={useBaseUrl('/img/placeholder-image.png')} alt="Placeholder"/>

1. On the **Schedules** page, click the plus sign button.

<img src={useBaseUrl('/img/placeholder-image.png')} alt="Placeholder"/>

1. In the **Create Schedule** window, on the **Job** tab, enter a name for the schedule, and select its project from the dropdown. Select a test suite from the list, or enter text in the search field to search for a specific test suite. Click **Next**.

<img src={useBaseUrl('/img/placeholder-image.png')} alt="Placeholder"/>

1. On the **Schedule** tab, enter a start and end time for the test. Below that, enter a length of time, in months, days, or hours.

<img src={useBaseUrl('/img/placeholder-image.png')} alt="Placeholder"/>

1. Click Create.

To update a schedule:
1. In the dashboard, in the left navigation, click **Execute** and then click **Schedule**.
1. On the **Schedules** page, in the **Actions** column, click the more actions button and then click **Update Schedule**.

<img src={useBaseUrl('/img/placeholder-image.png')} alt="Placeholder"/>

Follow the instructions for [Creating a Schedule](#creatingaschedule) and then click **Update**.
