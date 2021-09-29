---
id: viewing-exporting-usage-data
title: Viewing and Exporting Usage Data
sidebar_label: Viewing and Exporting Usage Data
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<p><span className="sauceDBlue">Enterprise Plans only</span></p>

If you're the owner of the overall Sauce Labs account, you can view usage information for all accounts on the **Organization Management** page. If you're an individual user, you can view your usage information on the **My Account** page.

## Usage Data - USERS Tab
The **USERS** tab on the **Organization Management** page provides the following information for each user:

| Column | Description |
| ------------- | ------------- |
| Last VM Test | The date and time of the last VM test run by the user. |
| VM Tests (last 30 days) | The total number of tests run by that user in the previous 30 days. |


<img src={useBaseUrl('img/team-mgmt/usage-data-users-tab.jpg')} alt="Usage data - Users tab"/>

Click a user name in the list to view the following information on the **User Details** page:

| Section | Description |
| ------------- | ------------- |
| Peak VM Concurrency | The highest number of concurrent tests run during a single session on a virtual machine, including web browser, emulator, and simulator tests, in the previous 28 days. |
| VM Tests by Day | The number of tests run by that user in each of the previous 28 days. |

<img src={useBaseUrl('img/team-mgmt/usage-data-user-details.jpg')} alt="Usage data - User Details tab"/>

## Usage Data - TEAMS Tab
The **TEAMS** tab on the **Organization Management** page provides the following information for each team:
| Column | Description |
| ------------- | ------------- |
| Last VM Test | The date and time of the last VM test run by the user. |
| VM Tests (last 30 days) | The total number of tests run by that user in the previous 30 days. |
<table>
  <tr>
    <td><strong>Team VM Concurrency</strong></td>
    <td>The concurrency set for the team.</td>
  </tr>
  <tr>
    <td><strong>Peak VM Concurrency</strong>
    </td>
    <td>The highest number of concurrent tests run during a single session on a virtual machine, including web browser, emulator, and simulator tests, in the previous 28 days.
    </td>
  </tr>
  <tr>
    <td><strong>Tests (Last 28 Days)</strong>
    </td>
    <td>The number of tests run by the team in the last 28 days.
    </td>
  </tr>
</table>

<img src={useBaseUrl('img/team-mgmt/usage-data-teams-tab.jpg')} alt="Usage data - Teams tab"/>

Click a team name in the list to view the following information on the **Team Details** page:
<table>
  <tr>
    <td><strong>Peak VM Concurrency</strong></td>
    <td>The highest number of concurrent tests run during a single session on a virtual machine, including web browser, emulator, and simulator tests, in the previous 28 days.</td>
  </tr>
  <tr>
    <td><strong>VM Tests by Day</strong>
    </td>
    <td>The number of tests run by the team in each of the previous 28 days.
    </td>
  </tr>
</table>

<img src={useBaseUrl('img/team-mgmt/usage-data-team-details.jpg')} alt="Usage data - Team Details"/>

## Minutes Used vs. Concurrency
One way to tell if you're getting the most efficient use out of your Sauce Labs plan is to compare the minutes used with the number of concurrent tests run during the same period. If the ratio of minutes to concurrency is low, for example, 2:1 (100 minutes:50 concurrent tests), then you are using a lot of minutes to run very few tests. You should redesign your tests to take greater advantage of concurrency. See [Using Frameworks to Run Tests in Parallel](/web-apps/automated-testing/selenium#using-frameworks-to-run-tests-in-parallel) for more information.

## Exporting Usage Data

You can export a .csv file that contains the usage information for selected accounts.

1. On Sauce Labs, click **Account** and then click **Team Management**.

   <img src={useBaseUrl('img/team-mgmt/team-mgmt-nav.png')} alt="Team management navigation" width="400"/>

2. On the **User** tab, select the checkboxes of the users whose usage information you want to export.
3. Next to **Users Selected**, click the download button.

   <img src={useBaseUrl('img/team-mgmt/usage-download-button.jpg')} alt="Usage download button"/>
