---
id: viewing-exporting-usage-data
title: Viewing and Exporting Usage Data
sidebar_label: Viewing and Exporting Usage Data
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<p><span className="sauceDBlue">ENTERPRISE PLANS ONLY</span></p>

If you're the owner of the overall Sauce Labs account, you can view usage information for all accounts on the **Organization Management** page. If you're an individual user, you can view your usage information on the **My Account** page.

## Usage Data - Users
The **Users** tab on the **Organization Management** page provides the following information for each user:

<table>

  <tr>
    <td><strong>Last VM Test</strong></td>
    <td>The date and time of the last VM test run by the user.</td>
  </tr>
  <tr>
    <td><strong>VM Tests (last 30 days)</strong>
    </td>
    <td>The total number of tests run by that user in the previous 30 days.
    </td>
  </tr>
</table>

<img src={useBaseUrl('img/team-mgmt/usage-data-users-tab.jpg')} alt="Usage data - Users tab"/>

Click a user name in the list to view the following information on the **User Details** page:
<table>
  <tr>
    <td><strong>Peak VM Concurrency</strong></td>
    <td>The highest number of concurrent tests run during a single session on a virtual machine, including web browser, emulator, and simulator tests, in the previous 28 days.</td>
  </tr>
  <tr>
    <td><strong>VM Tests by Day</strong>
    </td>
    <td>The number of tests run by that user in each of the previous 28 days.
    </td>
  </tr>
</table>

<img src={useBaseUrl('img/team-mgmt/usage-data-user-details.jpg')} alt="Usage data - User Details tab"/>

## Usage Data - Teams
The **Teams** tab on the **Organization Management** page provides the following information for each team:
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
One way to tell if you're getting the most efficient use out of your Sauce Labs plan is to compare the minutes used with the number of concurrent tests run during the same period. If the ratio of minutes to concurrency is low, for example, 2:1 (100 minutes:50 concurrent tests), then you are using a lot of minutes to run very few tests. You should redesign your tests to take greater advantage of concurrency. See [Using Frameworks to Run Tests in Parallel](https://wiki.saucelabs.com/display/DOCS/Using+Frameworks+to+Run+Tests+in+Parallel) for more information.

## Exporting Usage Data

You can export a .csv file that contains the usage information for selected accounts.

1. In Sauce Labs, click **Account** and then click **Team Management**.

   <img src={useBaseUrl('img/team-mgmt/team-mgmt-nav.png')} alt="Team management navigation" width="400"/>

2. On the **User** tab, select the checkboxes of the users whose usage information you want to export.
3. Next to **Users Selected**, click the download button.

   <img src={useBaseUrl('img/team-mgmt/usage-download-button.jpg')} alt="Usage download button"/>
