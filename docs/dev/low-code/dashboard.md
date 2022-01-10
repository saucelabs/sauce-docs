---
id: dashboard
title: Dashboard
sidebar_label: Dashboard
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The dashboard is the landing page from which you can access the **Plan**, **Execute**, and **Analyze** steps, as well as view and modify your profile and account information.

The dashboard includes detail cards that show you a snapshot of information related to your projects and tests, and provides links to the relevant pages to view, manage, and create tests.

<img src={useBaseUrl('/img/dev/low-code/dashboard-nav.png')} alt="Dashboard"/>

The left navigation panel, which is viewable from all screens, gives you quick access to the pages relevant to your projects. Click the menu icon to expand the menu temporarily.

<img src={useBaseUrl('/img/dev/low-code/dashboard-left-nav.png')} alt="Dashboard - Left navigation panel"/>

## Dashboard Management Settings
Use the **Dashboard Management** settings to customize what you see on your dashboard. Select and deselect checkboxes to display or hide detail cards, and select a time duration for the displayed details.

<img src={useBaseUrl('/img/dev/low-code/dashboard-mgmt-settings.png')} alt="Dashboard Management settings"/>

## Dashboard Detail Cards
The dashboard detail cards give a quick look at data that might be important to you. Each card displays the time period of the data in the lower-left corner, which can be modified in the **Dashboard Management** settings.

Clicking the maximize icon will open a larger version of the details card, and clicking the collapse icon will collapse the card on the dashboard.

<table>
  <tr>
    <td><b>Dashboard card</b>
    </td>
    <td><b>Description</b>
    </td>
  </tr>
  <tr>
    <td><b>Projects</b> card
    </td>
    <td>Displays the number of projects in a given time period that passed and failed, as well as the percent that passed, and clicking <b>Go to Projects</b> will take you to the <b>Projects</b> page.
    <br/>
    Use the dropdown to select which projects you want to view details for. The information on the card will update accordingly.
    </td>
  </tr>
  <tr>
    <td><b>Test Suites</b> card
    </td>
    <td>Displays the number of test suites in a given time period that passed and failed, as well as the percent that passed. Clicking <b>Go to Test Suites</b> will take you to the <b>Test Suites</b> page.
    </td>
  </tr>
  <tr>
    <td><b>Test Cases</b> card
    </td>
    <td>Displays the number of test cases in a given time period that passed and failed, as well as the percent that passed. Clicking <b>Go to Test Cases</b> will take you to the <b>Test Cases</b> page.
    </td>
  </tr>
  <tr>
    <td><b>Test Executions</b> card
    </td>
    <td>Displays the total number of tests executed in a given time period, as well as the number that passed and failed, in a chart format.
    </td>
  </tr>
  <tr>
    <td><b>Top Fail</b> card
    </td>
    <td>Displays the top five test failures in a given time period. Clicking <b>Go to Alerts</b> will take you to the <b>Alert Details</b> page.
    <br/>
    By default, this card is not displayed. To display it, select the <b>Top Fail</b> checkbox in <b>Dashboard Management</b> settings.
    </td>
  <tr>
    <td><b>Active Users</b> card
    </td>
    <td>Displays the top five most active users in a given time period. Clicking <b>Go to Users</b> will take you to the <b>Users</b> page.
    </td>
  </tr>
  <tr>
    <td><b>Active Projects</b> card
    </td>
    <td>Displays the top five most active projects in a given time period. Clicking <b>Go to Projects</b> will take you to the <b>Projects</b> page.
    </td>
  </tr>
  <tr>
    <td><b>Active Test Cases</b> card
    </td>
    <td>Displays the top five test cases in a given time period. Clicking <b>Go to Test Cases</b> will take you to the <b>Test Cases</b> page.
    </td>
  </tr>
</table>

## Execution Panel
The <b>Execution</b> panel displays currently running test cases, as well as test cases that have already been executed, which can be filtered by status.

### Execution Panel Components

<table>
  <tr>
    <td><b>Component</b>
    </td>
    <td><b>Description</b>
    </td>
  </tr>
  <tr>
    <td><b>Refresh</b> icon
    </td>
    <td>Refreshes the list of tests.
    </td>
  </tr>
  <tr>
    <td><b>Zoom In</b> icon
    </td>
    <td>Expands the <b>Execution</b> panel to a window.
    </td>
  </tr>
  <tr>
    <td><b>Close</b> icon
    </td>
    <td>Closes the <b>Execution</b> panel.
    </td>
  </tr>
  <tr>
    <td><b>Search</b> box
    </td>
    <td>Search the test list or click the dropdown to select a test from the list.
    </td>
  </tr>
  <tr>
    <td><b>Sort</b> button
    </td>
    <td>Sorts the tests by date, either ascending or descending.
    </td>
  </tr>
  <tr>
    <td><b>Display</b> dropdown
    </td>
    <td>Displays <b>All</b>, <b>Executed</b>, <b>Error</b>, or <b>In Progress</b> tests.
    </td>
  </tr>
  <tr>
    <td><b>Status</b> icon
    </td>
    <td>Execute SUCCESS
        <br/>
        Execute ERROR
    </td>
  </tr>
  <tr>
    <td><b>Details</b>
    </td>
    <td>Test name, date created, and the name of the user who created the test.
    </td>
  </tr>
  <tr>
    <td><b>Platform</b> and <b>Browser</b> icons
    </td>
    <td>The platform and browser (for example, Linux/Chrome, Mac/Safari, or Windows/IE) that the tests ran on.
    </td>
  </tr>
  <tr>
    <td><b>Download Report</b> button
    </td>
    <td>Downloads the details of the test as an .html file. The test report includes the statuses for each step of the test, as well as more thorough details about when and where the test was run.
    </td>
  </tr>
</table>

<img src={useBaseUrl('/img/dev/low-code/execution-panel.png')} alt="The Execution panel"/>
