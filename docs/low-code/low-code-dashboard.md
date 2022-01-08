---
id: low-code-dashboard
title: Dashboard
sidebar_label: Dashboard
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The dashboard is the landing page from which you can access the **Plan**, **Execute**, and **Analyze** steps, as well as view and modify your profile and account information.

The dashboard includes detail cards that show you a snapshot of information related to your projects and tests, and provides links to the relevant pages to view, manage, and create tests.

<img src={useBaseUrl('/img/placeholder-image.png')} alt="Placeholder"/>

The left navigation panel, which is viewable from all screens in AutonomIQ, gives you quick access to the pages relevant to your projects. Click the menu icon to expand the menu temporarily.

<img src={useBaseUrl('/img/placeholder-image.png')} alt="Placeholder"/>

## Dashboard Management Settings
Use the **Dashboard Management** settings to customize what you see on your dashboard. Select and deselect checkboxes to display or hide detail cards, and select a time duration for the displayed details.

<img src={useBaseUrl('/img/placeholder-image.png')} alt="Placeholder"/>

## Dashboard Detail Cards
The dashboard detail cards give a quick look at data that might be important to you. Each card displays the time period of the data in the lower-left corner, which can be modified in the **Dashboard Management** settings.

Clicking the maximize icon <img src={useBaseUrl('/img/placeholder-image.png')} alt="Placeholder"/> will open a larger version of the details card, and clicking the collapse icon <img src={useBaseUrl('/img/placeholder-image.png')} alt="Placeholder"/> will collapse the card on the dashboard.

<table>
  <tr>
    <td>Dashboard card
    </td>
    <td>Description
    </td>
  </tr>
  <tr>
    <td>Projects card
    </td>
    <td>Displays the number of projects in a given time period that passed and failed, as well as the percent that passed., and clicking **Go to Projects** will take you to the **Projects** page.
    <br/>
    Use the dropdown to select which projects you want to view details for. The information on the card will update accordingly.
    </td>
  </tr>
  <tr>
    <td>Test Suites card
    </td>
    <td>Displays the number of test suites in a given time period that passed and failed, as well as the percent that passed. Clicking **Go to Test Suites** will take you to the **Test Suites** page.
    </td>
  </tr>
  <tr>
    <td>Test Cases card
    </td>
    <td>Displays the number of test cases in a given time period that passed and failed, as well as the percent that passed. Clicking **Go to Test Cases** will take you to the **Test Cases** page.
    </td>
  </tr>
  <tr>
    <td>Test Executions card
    </td>
    <td>Displays the total number of tests executed in a given time period, as well as the number that passed and failed, in a chart format.
    </td>
  </tr>
  <tr>
    <td>Top Fail card
    </td>
    <td>Displays the top five test failures in a given time period. Clicking **Go to Alerts** will take you to the **Alert Details** page.
    <br/>
    By default, this card is not displayed. To display it, select the **Top Fail** checkbox in **Dashboard Management** settings.
    </td>
  <tr>
    <td>Active Users card
    </td>
    <td>Displays the top five most active users in a given time period. Clicking **Go to Users** will take you to the **Users** page.
    </td>
  </tr>
  <tr>
    <td>Active Projects card
    </td>
    <td>Displays the top five most active projects in a given time period. Clicking **Go to Projects** will take you to the **Projects** page.
    </td>
  </tr>
  <tr>
    <td>Active Test Cases card
    </td>
    <td>Displays the top five test cases in a given time period. Clicking **Go to Test Cases** will take you to the **Test Cases** page.
    </td>
  </tr>
</table>

## Execution Panel
The **Execution** panel displays currently running test cases, as well as test cases that have already been executed, which can be filtered by status.

### Execution Panel Components

<table>
  <tr>
    <td>Component
    </td>
    <td>Description
    </td>
  </tr>
  <tr>
    <td>Refresh icon
    </td>
    <td>Refreshes the list of tests.
    </td>
  </tr>
  <tr>
    <td>Zoom In icon
    </td>
    <td>Expands the **Execution** panel to a window.
    </td>
  </tr>
  <tr>
    <td>Close icon
    </td>
    <td>Closes the **Execution** panel.
    </td>
  </tr>
  <tr>
    <td>Search box
    </td>
    <td>Search the test list or click the dropdown to select a test from the list.
    </td>
  </tr>
  <tr>
    <td>Sort button
    </td>
    <td>Sorts the tests by date, either ascending or descending.
    </td>
  </tr>
  <tr>
    <td>Display dropdown
    </td>
    <td>Displays All, Executed, Error, or In Progress tests.
    </td>
  </tr>
  <tr>
    <td>Status icon
    </td>
    <td>Execute SUCCESS
        <br/>
        Execute ERROR
    </td>
  </tr>
  <tr>
    <td>Details
    </td>
    <td>Test name, date created, and the name of the user who created the test.
    </td>
  </tr>
  <tr>
    <td>Platform and Browser icons
    </td>
    <td>The platform and browser (for example, Linux/Chrome, Mac/Safari, or Windows/IE) that the tests ran on.
    </td>
  </tr>
  <tr>
    <td>Download Report button
    </td>
    <td>Downloads the details of the test as an .html file. The test report includes the statuses for each step of the test, as well as more thorough details about when and where the test was run.
    </td>
  </tr>
</table>

<img src={useBaseUrl('/img/placeholder-image.png')} alt="Placeholder"/>
