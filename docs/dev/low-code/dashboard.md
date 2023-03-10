---
id: dashboard
title: Projects 
sidebar_label: Projects
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The **Projects** page is the landing page from which you can access **Projects**, **Schedules**, and **Reports**, and view and modify your profile and account information.

The **Projects** page includes detail cards that show you a snapshot of information related to your projects and tests, and provides links to the relevant pages to view, manage, and create tests.

<img src={useBaseUrl('/img/dev/low-code/dashboard-nav.png')} alt="Dashboard" width="500"/>

The left navigation panel, which is viewable from all screens, gives you quick access to the pages relevant to your projects. Click the menu icon to expand the menu temporarily.

<img src={useBaseUrl('/img/dev/low-code/dashboard-left-nav.png')} alt="Dashboard - Left navigation panel" width="400"/>

## Display Settings

Click **Display** to customize what you see on the Projects page, including the types of projects displayed, your preferred view, and how the projects are sorted.

<img src={useBaseUrl('/img/dev/low-code/dashboard-mgmt-settings.png')} alt="Display settings" width="400"/>

## Overall Health

The Overall Health card gives a quick look at data that might be important to you, including the number of projects, test suites, and test cases that have passed and failed. 

<img src={useBaseUrl('/img/dev/low-code/overall-health.png')} alt="Overall Health"/>

<table>
  <tr>
    <td><b>Overall Health Section</b>
    </td>
    <td><b>Description</b>
    </td>
  </tr>
  <tr>
    <td><b>Projects</b>
    </td>
    <td>The number of projects in the last 24 hours that passed and failed, as well as the percent that passed. 
   
    </td>
  </tr>
  <tr>
    <td><b>Test Suites</b> 
    </td>
    <td>The number of test suites in the last 24 hours that passed and failed, as well as the percent that passed. Clicking <b>View All</b> will take you to the <b>Test Suites</b> page. 
    </td>
  </tr>
  <tr>
    <td><b>Test Cases</b>
    </td>
    <td>The number of test cases in the last 24 hours that passed and failed, as well as the percent that passed. Clicking <b>View All</b> will take you to the <b>Test Cases</b> page.
    </td>
  </tr>
  
  
</table>

## Execution Panel

The <b>Execution</b> panel displays currently running test cases, as well as test cases that have already been executed, which can be filtered by status.

<img src={useBaseUrl('/img/dev/low-code/execution-panel.png')} alt="The Execution panel" width="400"/>

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
    <td><b>Display</b> dropdown
    </td>
    <td>Displays <b>All</b>, <b>Success</b>, <b>Failed</b>, <b>In Progress</b>, <b>Queued</b>, or <b>Stopped</b>> tests.
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
    <td><b>Device</b>, <b>Platform</b> and <b>Browser</b> icons
    </td>
    <td>The device, platform, and browser (for example, Linux/Chrome, Mac/Safari, or Windows/IE) that the tests ran on.
    </td>
  </tr>
  <tr>
    <td><b>Download Report</b> button
    </td>
    <td>Downloads the details of the test as an .html file. The test report includes the statuses for each step of the test, as well as more thorough details about when and where the test was run.
    </td>
  </tr>
</table>


