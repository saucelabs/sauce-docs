---
id: dashboard-workflow
title: Dashboard and Workflow
sidebar_label: Dashboard and Workflow
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Dashboard Report
You can view the latest results of your tests in the Dashboard, organized by Test Group.

>**NOTE**: The Test Group side listing shows a summary of new and changed states within each group so users can get a high-level view of an entire project.

<img src={useBaseUrl('img/visual/e2e-report.png')} alt="E2E Report Visual Testing" width="500px" />

**Legend**

1. **Test Group**: Displays the Test Group name. Click to Edit or Delete the Test Group.
2. **Test Group ID**: This ID is used when integrating Screener into your Webdriver tests.
3. **Resolution**: All tests are grouped by resolution.
4. **Test Report**: Each test displays a graph of the latest results. The graph is color-coded based on the status of each UI state under test. See below for details on the four statuses.
5. **History Tab**: Click to view a history of recently run tests, or the status of a currently running test, within this Test Group..
6. **Environment**: The blue label shows the environment the test was targeting. This can be used for different development environments (dev vs. staging) as well as locales. How long ago this test was last run is also displayed.



### Statuses
Each state under test has one of the following statuses:

* **New**: The state under test is new since the last test run. It signifies the state is new and will automatically be used as a baseline to compare against for subsequent runs.
* **Changed**: The state under test has changed since the last test run. It signifies the state has visually changed when compared to the baseline state.
* **Accepted**: The state has been tested, and has been accepted by a user. It will be used as a baseline to compare against for subsequent runs.
* **Rejected**: The state has been tested, and has been rejected by a user.


## States Under Test
From the Dashboard Report, clicking on the test name (Eg. Firefox/Battlefy above) will take you to the States view which lists all the states under test.

>**NOTE**: Clicking on the test graph will also take you the States view, but will pre-filter the states based on the status color you clicked on.

<img src={useBaseUrl('img/visual/e2e-states.png')} alt="E2E States" />

**Legend**

1. **Switch Tests**: Use the Group / Resolution / Test dropdowns to quickly switch between tests
2. **Filter by Status**: Easily filter states to match a particular, such as Changed-only.
3. **State Detail**: Displays the state name, status, and thumbnail. Click to view the full screenshot and visual diff.


## Review State

Click on a state in the States view to see its screenshot and review any visual diffs.

>**NOTE**: If a reference screenshot is available, you can view it side-by-side with the current screenshot by clicking the "2-up" tab. You can also view the current screenshot overlayed on top of the reference by clicking the "Overlay" tab.
Tip: Keyboard shortcuts are available to quickly paginate through states (left/right arrows), and to accept (shift+up-arrow) or reject (shift+down-arrow). If a status filter has been, then pagination will only be within the filtered set of states.

The visual diff below shows newly added items highlighted in green:

<img src={useBaseUrl('img/visual/e2e-state.png')} alt="E2E State" />

### Change List

Clicking on the top-left arrow will open the Changes List:

>**NOTE**: Clicking on the gray tag-name associated with each change will display the css selector and contextual HTML code associated with the change. Hovering over css changes will show the specific change details, and clicking on long text-changes will display the entire text diff.

:::tip
Each change category has a checkbox which allows toggling whether to display the changes or not. This is useful for focusing in on particular types of changes. Changes are categorized into: Structure, Style, Layout and Content.
:::

<img src={useBaseUrl('img/visual/e2e-state-changes.png')} alt="E2E State Changes" />


### Update Status
After reviewing the diff, you can **Accept** or **Reject** the changes by clicking on the Status dropdown.

<img src={useBaseUrl('img/visual/e2e-state-accept-reject.png')} alt="E2E State Accept or Reject" />
