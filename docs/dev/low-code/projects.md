---
id: projects
title: Projects 
sidebar_label: Projects 
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The **Projects** page is the landing page from which you can access **Projects**, **Schedules**, and **Reports**, and view and modify your profile and account information.

The **Projects** page includes detail cards that show you a snapshot of information related to your projects and tests, and provides links to the relevant pages to view, manage, and create tests.

<img src={useBaseUrl('/img/dev/low-code/dashboard-nav.png')} alt="Dashboard" width="700"/>

The left navigation panel, which is viewable from all screens, gives you quick access to the pages relevant to your projects. Click the menu icon to expand the menu temporarily.

<img src={useBaseUrl('/img/dev/low-code/dashboard-left-nav.png')} alt="Dashboard - Left navigation panel" width="300"/>

### Display Settings

Click **Display** to customize what you see on the Projects page, including the types of projects displayed, your preferred view, and how the projects are sorted.

<img src={useBaseUrl('/img/dev/low-code/dashboard-mgmt-settings.png')} alt="Display settings" width="400"/>

### Execution Panel

The <b>Execution</b> panel displays currently running test cases, as well as test cases that have already been executed, which can be filtered by status.

<img src={useBaseUrl('/img/dev/low-code/execution-panel.png')} alt="The Execution panel" width="400"/>

#### Execution Panel Components

<table>
  <tr>
<td>
<b>Component</b>
    </td>
<td>
<b>Description</b>
    </td>
  </tr>
  <tr>
<td>
<b>Refresh</b> icon
    </td>
<td>
Refreshes the list of tests.
    </td>
  </tr>
  <tr>
<td>
<b>Zoom In</b> icon
    </td>
<td>
Expands the <b>Execution</b> panel to a window.
    </td>
  </tr>
  <tr>
<td>
<b>Close</b> icon
    </td>
<td>
Closes the <b>Execution</b> panel.
    </td>
  </tr>
  <tr>
<td>
<b>Search</b> box
    </td>
<td>
Search the test list or click the dropdown to select a test from the list.
    </td>
  </tr>
  
  <tr>
<td>
<b>Display</b> dropdown
    </td>
<td>
Displays <b>All</b>, <b>Success</b>, <b>Failed</b>, <b>In Progress</b>, <b>Queued</b>, or <b>Stopped</b>> tests.
    </td>
  </tr>
  <tr>
<td>
<b>Status</b> icon
    </td>
<td>
Execute SUCCESS
        <br/>
        Execute ERROR
    </td>
  </tr>
  <tr>
<td>
<b>Details</b>
    </td>
<td>
Test name, date created, and the name of the user who created the test.
    </td>
  </tr>
  <tr>
<td>
<b>Device</b>, <b>Platform</b> and <b>Browser</b> icons
    </td>
<td>
The device, platform, and browser (for example, Linux/Chrome, Mac/Safari, or Windows/IE) that the tests ran on.
    </td>
  </tr>
  <tr>
<td>
<b>Download Report</b> button
    </td>
<td>
Downloads the details of the test as an .html file. The test report includes the statuses for each step of the test, as well as more thorough details about when and where the test was run.
    </td>
  </tr>
</table>

### Overall Health

The Overall Health section gives a quick look at data that might be important to you, including the number of projects, test suites, and test cases that have passed and failed. 

<img src={useBaseUrl('/img/dev/low-code/overall-health.png')} alt="Overall Health"/>

<table>
  <tr>
<td>
<b>Overall Health Section</b>
    </td>
<td>
<b>Description</b>
    </td>
  </tr>
  <tr>
<td>
<b>Projects</b>
    </td>
<td>
The number of projects in the last 24 hours that passed and failed, as well as the percent that passed. 
   
    </td>
  </tr>
  <tr>
<td>
<b>Test Suites</b> 
    </td>
<td>
The number of test suites in the last 24 hours that passed and failed, as well as the percent that passed. Clicking <b>View All</b> will take you to the <b>Test Suites</b> page. 
    </td>
  </tr>
  <tr>
<td>
<b>Test Cases</b>
    </td>
<td>
The number of test cases in the last 24 hours that passed and failed, as well as the percent that passed. Clicking <b>View All</b> will take you to the <b>Test Cases</b> page.
    </td>
  </tr>
</table>

### Creating a New Project

To create a new project:

1. On the **Projects** page, click the **New Project** button.

<img src={useBaseUrl('/img/dev/low-code/create-new-project-nav.png')} alt="Navigating to the project creation screen" width="400"/>

2. In the **Project** window, on the **Name and Info** tab, enter the following information:

- Project name (required)
- App URL (required)
- Project description (optional)
- Selector hints for testing (optional)

<img src={useBaseUrl('/img/dev/low-code/project-new-name-info.png')} alt="New project Name and Info tab" width="400"/>

3. Click **Next**.
4. On the **Properties** tab, enable or disable the relevant toggles, and then click **Next**.

<img src={useBaseUrl('/img/dev/low-code/project-new-properties.png')} alt="New project Properties tab" width="400"/>

#### More Options

The **More** button displays a dropdown of additional options for the **Project** page. You can:

- Upload a project (see [Creating a New Project](#creating-a-new-project) for more information)
- Download the project information as an .xlsx file

<img src={useBaseUrl('/img/dev/low-code/project-more-button.png')} alt="Project page More button" width="300"/>

### Project Cards

Clicking a project card will take you to its **Project Details** page. See [Project Details](/dev/low-code/projects/project-details) for more information.

#### Starting a Recording

Click the **Record** button to start a recording (see [Using the Recorder](/dev/low-code/projects/test-cases/#using-the-recorder) for more information).

<img src={useBaseUrl('/img/dev/low-code/start-a-recording.png')} alt="Start a recording with the camera button" width="400"/>

#### More Options

Click the more options button to access the dropdown. From there you can:

- Add a star to the project card to easily find it on the **Projects** page.
- View and manage the project properties.
- Upload a test case to the project (see [Uploading a Test Case](/dev/low-code/projects/test-cases/#uploading-a-test-case) for more information).
- Download the project as a .zip file.
- Disable the project.

<img src={useBaseUrl('/img/dev/low-code/recording-more-options.png')} alt="Starting a recording -- More options" width="400"/>

### Project Details Page

The **Project Details** page displays information about the selected project, including test cases, variables, and data. From here you can also create or upload new test cases, data, variables, flows, and test suites. For more information, see [Project Details](dev/low-code/projects/project-details.md).

## Test Cases Tab


The **Test Cases** tab consists of a table of information about the test cases that are part of the project. From this page you can also create a new test case. For more information, see [Test Cases](dev/low-code/projects/test-cases.md).

## Test Cases Page
On the **Test Cases** page you can view, update, move, or disable a test case. In addition, you can add tags to test cases and easily access the step editor. For more information, see [Test Cases](dev/low-code/projects/test-cases.md).


## Data Tab

The **Data** tab displays the data uploaded to a project, in table form. From this screen you can also upload new data, and delete and download existing data. For more information, see [Data](dev/low-code/projects/data.md).

## Variables Tab

For information about specific variables, see [Variables](/dev/low-code/variables). For more information about the Variables tab, see [Variables Tab](dev/low-code/projects/variables.md).

## Flows Tab

A flow is a set of steps that are linked for easy re-use. The **Flows** tab displays the flows associated with a project. For more information, see [Flows](dev/low-code/projects/flows.md).

## Test Suites Tab

A test suite is a collection of test cases in a project. The **Test Suites** tab displays the test suites in a project, in table form. From this screen you can also create a new test suite, and clone, download, and disable existing test suites. For more information, see [Test Suites](dev/low-code/projects/test-suites.md).

## Test Suites Page
On the **Test Suites** page you can view, update, execute, clone, or delete a test suite. In addition, you can view the test cases associated with the suite, as well as quickly access the step editor. For more information, see [Test Suites](dev/low-code/projects/test-suites.md).
