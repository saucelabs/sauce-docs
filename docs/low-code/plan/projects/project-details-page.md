---
id: project-details-page
title: Project Details Page
sidebar_label: Project Details Page
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The **Project Details** page displays information about the selected project, including test cases, variables, and data. From here you can also create or upload new test cases, data, variables, flows, and test suites.

Click the information icon <img src={useBaseUrl('/img/placeholder-image.png')} alt="Placeholder"/> next to your test name to view the created and updated dates, and the project’s execution stats.

<img src={useBaseUrl('/img/placeholder-image.png')} alt="Placeholder"/>

Click the more actions icon <img src={useBaseUrl('/img/placeholder-image.png')} alt="Placeholder"/> to view or modify the project properties, download the project details as a .xlsx file, or disable the project.

<img src={useBaseUrl('/img/placeholder-image.png')} alt="Placeholder"/>

## Test Cases Tab
The **Test Cases** tab consists of a table of information about the test cases that are part of the project. From this page you can also create a new test case.

### Merging Test Cases
To merge multiple test cases into a new test case:

1. On the AutonomIQ dashboard, in the **Projects** card, click **Go to Projects**.
1. On the **Projects** page, click the project card of the project whose test cases you want to merge.
1. On the **Project Details** page, click the three dots to the far right of the **ADD TEST CASE** button.

<img src={useBaseUrl('/img/placeholder-image.png')} alt="Placeholder"/>

1. In the **Merge Cases** window, on the **Merge** tab, enter a name for the new test case, and select or deselect the cases to merge. Click **Next**.

<img src={useBaseUrl('/img/placeholder-image.png')} alt="Placeholder"/>

1. On the **Arrange** tab, drag the cases to arrange them in your preferred order, or click the **X** to remove them. Click **Save**.

<img src={useBaseUrl('/img/placeholder-image.png')} alt="Placeholder"/>

### Test Cases Table Columns
<table>
  <tr>
    <td colSpan='3'>Column
    </td>
    <td>Description
    </td>
  </tr>
  <tr>
    <td colSpan='3'>Case
    </td>
    <td>The name given to the test case. Click the test case name to open the **step editor**.<br/><br/>Click the up or down arrow next to the column name to sort the table by case name.
    </td>
  </tr>
  <tr>
    <td colSpan='3'>Uploaded
    </td>
    <td>The date the test case was uploaded.<br/><br/>Click the up or down arrow next to the column name to sort the table by the dates the cases were uploaded.
    </td>
  </tr>
  <tr>
    <td colSpan='3'>Generation Status
    </td>
    <td>The current status of the test case. Possible statuses:
        * Success
        * Failed
        * Failed at step X
        * Ready to generate
        * Stopped at step X
        <br/><br/>
        Click the up or down arrow next to the column name to sort the table by generation status.
    </td>
  </tr>
  <tr>
    <td colSpan='3'>Generated Last Run
    </td>
    <td>The date the last run was generated. Click the up or down arrow next to the column name to sort the table by the dates the cases were last run.
    </td>
  </tr>
  <tr>
    <td colSpan='3'>Generate
    </td>
    <td>Hover under the column name next to the test case you want to generate a test for. Click the **Generate** button. See [Generating a Test]() for more information.
    </td>
  </tr>
  <tr>
    <td colSpan='3'>Execute
    </td>
    <td>Hover under the column name next to the test case you want to execute a test for. Click the **Execute** button. See Executing a Test for more information.
    </td>
  </tr>
  <tr>
    <td colSpan='3'>Clone
    </td>
    <td>Hover under the column name next to the test case you want to clone and click the **Clone** button.
    </td>
  </tr><tr>
    <td colSpan='3'>Delete
    </td>
    <td>Hover under the column name next to the test case you want to delete and click the **Delete** button. In the **Delete Test Case** window, click **Delete** or **Cancel**.
    </td>
  </tr>
  <tr>
    <td rowspan="7">More
    </td>
    <td colSpan='2'>Update Case
    </td>
    <td>Update the name and description for the test case.
    </td>
  </tr>
  <tr>
    <td colSpan='2'>Copy URL>
    </td>
    <td>Copy the URL of the test case.
    </td>
  </tr>
  <tr>
    <td colSpan='2'>Disable Case
    </td>
    <td>Disable the test case.
    </td>
  </tr>
  <tr>
    <td rowspan="4">Preview and Download
    </td>
    <td>Test Case
    </td>
    <td>Displays the steps in the test and gives you the option to download the information as a .csv or a .xlsx file.
    </td>
  <tr>
    <td>Data  
    </td>
    <td>Displays a preview of the test data and gives you the option to download it as an .xlsx file.
    </td>
  </tr>
  <tr>
    <td>Script
    </td>
    <td>Displays the script for the test and gives you the option to copy the script to clipboard or download the .java file.
    </td>
  </tr>
  <tr>
    <td>Generation report
    </td>
    <td>Download the test’s .html report file.
    </td>
  </tr>
</table>

## Adding a Test Case
There are three ways to add a test case to Sauce Labs Low-Code. You can record the case using the recorder, upload the case as an .xls, .xlsx, or .csv file, or manually enter the case and its steps.

### Recording a Test Case
To record a test case you first have to download and install the Recorder extension in Google Chrome.

#### Installing the Recorder
If you click the **Record** icon <img src={useBaseUrl('/img/placeholder-image.png')} alt="Placeholder"/> and do not have the **Recorder** extension installed, you will be prompted to do so. To install the recorder without the prompt:
1. Go to the [AutonomIQ AI Enterprise Recorder extension page](https://chrome.google.com/webstore/detail/autonomiq-ai-enterprise-r/gcjbafckoidlgfcdgnpmanplcjkfjbbb/related?hl=en-GB).
1. Click **Add to Chrome**.
1. In the **Add “AutonomIQ AI Enterprise Recorder”?** window, click **Add extension**.
1. The recorder will now be available in your extensions. To launch the recorder, in Google Chrome, click the **Extensions** icon <img src={useBaseUrl('/img/placeholder-image.png')} alt="Placeholder"/> and then click **AutonomIQ AI Enterprise Recorder**.

#### Using the Recorder
When you launch the recorder, it records the actions you perform and translates them into test steps that can be managed in the step editor (see [Using the Step Editor]() for more information). The recording happens in the background and is displayed in the AI Test Studio window. The recorder will start recording as soon as it is launched.

<img src={useBaseUrl('/img/placeholder-image.png')} alt="Placeholder"/>

#### AI Test Studio Window

<table>
  <tr>
    <td colSpan='2'>Component
    </td>
    <td>Description
    </td>
  </tr>
  <tr>
    <td colspan='3'>Main Recorder
    </td>
  </tr>
  <tr>
    <td colspan='2'>Exit button
    </td>
    <td>Closes the recorder.
    </td>
  </tr>
  <tr>
    <td rowspan='3'>More options
    </td>
    <td>Show recorder always on top
    </td>
    <td>When set to On, the Recorder will remain positioned on top of all other windows.
    </td>
  </tr>
  <tr>
    <td>Record Hover
    </td>
    <td>When enabled, actions in which you hover your mouse pointer over an item will be recorded as steps. Click to enable/disable.
    </td>
  </tr>
  <tr>
    <td>Record Double Click  
    </td>
    <td>When enabled, double-clicking items will be recorded as steps. Click to enable/disable.
    </td>
  </tr>
  <tr>
    <td colspan='2'>Add Test Case button
    </td>
    <td>Opens the New Test Case window. Enter a name for the new test case and then click Save.
    </td>
  </tr>
  <tr>
    <td colspan='2'>Edit Test Case Name button
    </td>
    <td>Opens the Update Test Case Name window. Enter a new name for the test case and then click Update.
    </td>
  </tr>
  <tr>
    <td colspan='2'>Save Test Case button
    </td>
    <td>Saves the test case. Saved test cases can be viewed on the Plan -> Test Cases page.
    </td>
  </tr>
  <tr>
    <td colspan='2'>Delete Test Case button
    </td>
    <td>Deletes the test case.
    </td>
  </tr>
  <tr>
    <td colspan='2'>Pause button
    </td>
    <td>Pauses the recording of actions. The test case will remain in the Recorder until you click Exit.
    </td>
  </tr>
  <tr>
    <td rowspan='3'>Steps
    </td>
    <td>Action
    </td>
    <td>The action that was performed in the step.
    </td>
  </tr>
  <tr>
    <td>Location
    </td>
    <td>The URL of the action.
    </td>
  </tr>
  <tr>
    <td>Add step
    </td>
    <td>Click to manually add a step to the test case.
    </td>
  </tr>
  <tr>
    <td>Delete step
    </td>
    <td>Click to delete a step from the test case.
    </td>
  </tr>
  <tr>
    <td colspan='3'>Test Case List
    </td>
  </tr>
  <tr>
    <td colspan='2'>Add Test Case button
    </td>
    <td>Opens the New Test Case window. Enter a name for the new test case and then click Save.
    </td>
  </tr>
  <tr>
    <td colspan='2'>Search bar
    </td>
    <td>Enter text to search for in the list of test cases.
    </td>
  </tr>
  <tr>
    <td colspan='2'>Test Cases checkbox
    </td>
    <td>Select the checkbox next to Test Cases to select or deselect all test cases in the list.
    </td>
  </tr>
  <tr>
    <td colspan='2'>Mass delete button
    </td>
    <td>When multiple test case checkboxes are selected, click the delete button next to Test Cases to delete them.
    </td>
  </tr>
  <tr>
    <td colspan='2'>Edit button
    </td>
    <td>Click to edit the name of the test case
    </td>
  </tr>
  <tr>
    <td colspan='2'>Delete button
    </td>
    <td>Click to delete the test case from the list.
    </td>
  </tr>
  </table>

### Uploading a Test Case
To upload a test case:
1. On the dashboard, in the **Projects** card, click **Go to Projects**.
1. On the **Projects** page, click the project card of the project you want to upload a test case to.
1. On the **Project Details** page, click **ADD TEST CASE** and then click the **Upload** button.

<img src={useBaseUrl('/img/placeholder-image.png')} alt="Placeholder"/>

1. In the **Upload Test Case** window:
    * On the **Test Case** tab, drag and drop or navigate to the .xls, .xlsx, or .csv file to upload. Click **Next**.

    <img src={useBaseUrl('/img/placeholder-image.png')} alt="Placeholder"/>

    * (Optional) On the **Test Data** tab, drag and drop or navigate to the .xls, .xlsx, or .csv file to upload. Click **Next**.

    <img src={useBaseUrl('/img/placeholder-image.png')} alt="Placeholder"/>

    * (Optional) On the **Artifacts** tab, drag and drop or navigate to the file(s) to upload. Click **Next**.

    <img src={useBaseUrl('/img/placeholder-image.png')} alt="Placeholder"/>

    * (Optional) On the **Audio** tab, drag and drop or navigate to the .wav file to upload. **Click Next**.

    <img src={useBaseUrl('/img/placeholder-image.png')} alt="Placeholder"/>

1. Click **Submit**.

### Manually Creating a Test Case
To manually add a test case:
1. On the dashboard, in the **Projects** card, click **Go to Projects**.
1. On the **Projects** page, click the project card of the project you want to upload a test case to.
1. On the **Project Details** page, on the **Tests Cases** tab, click **ADD TEST CASE** and then click the **Create** button. See [Using the Step Editor](#usingthestepeditor) for information about the next steps.

<img src={useBaseUrl('/img/placeholder-image.png')} alt="Placeholder"/>

### Using the Step Editor

#### Copying Excel Data
To paste copied data from an Excel spreadsheet into the step editor, on the **Step Editor** page, click the clipboard icon or use the **CTRL+V** or **command+V** keyboard shortcuts. The pasted steps will be added to the end of the list of steps.

## Generating a Test
To generate a test:
1. On the dashboard, in the **Projects** card, click **Go to Projects**.
1. On the **Projects** page, click the project card of the project you want to generate a test for.
1. On the **Project Details** page, on the **Tests Cases** tab, hover in the **GENERATE** column and then click the **Generate** button.

<img src={useBaseUrl('/img/placeholder-image.png')} alt="Placeholder"/>

## Executing a Test
To execute a test:
1. On the dashboard, in the **Projects** card, click **Go to Projects**.
1. On the **Projects** page, click the project card of the project you want to execute a test for.
1. On the **Project Details** page, on the **Tests Cases** tab, hover in the **EXECUTE** column and then click the **Execute** button.

<img src={useBaseUrl('/img/placeholder-image.png')} alt="Placeholder"/>

## Data Tab
The **Data** tab displays the data uploaded to a project, in table form. From this screen you can also upload new data, and delete and download existing data.

### Data Tab Columns

<table>
  <tr>
    <td>Data
    </td>
    <td>The data files that are uploaded to the project. Clicking a file name will open a test data preview window, which includes a download option.<br/><br/>Click the up or down arrow next to the column name to sort the table alphabetically by file name.
    </td>
  </tr>
  <tr>
    <td>Last Used
    </td>
    <td>The date the data file was last used. Click the up or down arrow next to the column name to sort the table by last used date.
    </td>
  </tr>
  <tr>
    <td>Uploaded
    </td>
    <td>The date the data file was uploaded. Click the up or down arrow next to the column name to sort the table by uploaded date.
    </td>
  </tr>
  <tr>
    <td>Associated Test Cases
    </td>
    <td>The number of test cases associated with the one you are viewing. Click View Details to open the Attach Case(s) to Data window.
    </td>
  </tr>
  <tr>
    <td>Delete
    </td>
    <td>Hover in the Delete column and then click the Delete button.
    </td>
  </tr>
  <tr>
    <td>Download
    </td>
    <td>Hover in the Download column and then click the Download button.
    </td>
  </tr>
</table>

### Uploading New Data
To upload new data to your test case:

1. On the dashboard, in the **Projects** card, click **Go to Projects**.
1. On the **Projects** page, click the project card of the project you want to upload new data to.
1. On the **Project Details** page, click the **Data** tab and then click the **UPLOAD NEW DATA** button.

<img src={useBaseUrl('/img/placeholder-image.png')} alt="Placeholder"/>

1. In the **Upload** window, on the **Test Data** tab, drag and drop or navigate to the .xls, .xlsx, or .csv file to upload. Click **Next**.

<img src={useBaseUrl('/img/placeholder-image.png')} alt="Placeholder"/>

1. On the **Artifacts** tab, drag and drop or navigate to the file(s) to upload. Click **Next**.

<img src={useBaseUrl('/img/placeholder-image.png')} alt="Placeholder"/>

1. On the **Audio** tab, drag and drop or navigate to the .wav file to upload. Click **Next**.

<img src={useBaseUrl('/img/placeholder-image.png')} alt="Placeholder"/>

1. On the **Attach Cases to Data** tab, select the test cases you want to associate with the data.

<img src={useBaseUrl('/img/placeholder-image.png')} alt="Placeholder"/>

1. Click **Submit**.

## Variables Tab
For information about specific variables, see [Appendix B: Variables]().

### Variables Tab Columns

<table>
  <tr>
    <td>Column
    </td
    <td>Description
    </td>
  </tr>
  <tr>
    <td>Variable
    </td
    <td>The variables associated with the project. Click a variable name to modify its name or value.<br/><br/>Click the up or down arrow next to the column name to sort the table alphabetically by variable name.
    </td>
  </tr>
  <tr>
    <td>Value
    </td
    <td>Click the up or down arrow next to the column name to sort the table alphabetically by value.
    </td>
  </tr>
  <tr>
    <td>Clone
    </td
    <td>Hover in the Clone column and then click the Clone button.
    </td>
  </tr>
  <tr>
    <td>Delete
    </td
    <td>Hover in the Delete column and then click the Delete button.
    </td>
  </tr>
</table>

### Adding a Variable
To add a variable to a test case:
1. On the dashboard, in the **Projects** card, click **Go to Projects**.
1. On the **Projects** page, click the project card of the project you want to upload new data to.
1. On the **Project Details** page, click the **Variables** tab and then click the **ADD VARIABLE** button.

<img src={useBaseUrl('/img/placeholder-image.png')} alt="Placeholder"/>

1. In the **New Variable** window, enter a name and value for the new variable, and then click **Save**.

<img src={useBaseUrl('/img/placeholder-image.png')} alt="Placeholder"/>

### More Options
Click the more options button to the far right of the **ADD VARIABLE** button to download or delete all variables from the project.

<img src={useBaseUrl('/img/placeholder-image.png')} alt="Placeholder"/>

## Flows Tab
A flow is a set of steps that are linked for easy re-use. The **Flows** tab displays the flows associated with a project.

### Flows Tab Columns

<table>
  <tr>
    <td>Column
    </td>
    <td>Description
    </td>
  </tr>
  <tr>
    <td>Flow
    </td>
    <td>The flows associated with the project. Click a flow name to open the List Flow window, where you can view and modify details about the flow.<br/><br/>Click the up or down arrow next to the column name to sort the table alphabetically by flow name.
    </td>
  </tr>
  <tr>
    <td>Created
    </td>
    <td>The date the flow was created.<br/><br/>Click the up or down arrow next to the column name to sort the table by created date.
    </td>
  </tr>
  <tr>
    <td>Total Steps
    </td>
    <td>The number of steps in the flow.<br/><br/>Click the up or down arrow next to the column name to sort the table by number of steps.
    </td>
  </tr>
  <tr>
    <td>Clone
    </td>
    <td>Hover in the Clone column and then click the Clone button.
    </td>
  </tr>
  <tr>
    <td>Delete
    </td>
    <td>Hover in the Delete column and then click the Delete button.
    </td>
  </tr>
  <tr>
    <td>Download
    </td>
    <td>Hover in the Download column and then click the Download button.
    </td>
  </tr>
</table>

### Creating a Flow
To add a flow to a project:
1. On the dashboard, in the **Projects** card, click **Go to Projects**.
1. On the **Projects** page, click the project card of the project you want to create a flow for.
1. On the **Project Details** page, click the **Flows** tab and then click the **CREATE NEW FLOW** button.

<img src={useBaseUrl('/img/placeholder-image.png')} alt="Placeholder"/>

1. In the **New Flow** window, add a name for the flow, and add the steps to include.

<img src={useBaseUrl('/img/placeholder-image.png')} alt="Placeholder"/>

1. Click **Save**.

## Test Suites Tab
A test suite is a collection of test cases in a project. The **Test Suites** tab displays the test suites in a project, in table form. From this screen you can also create a new test suite, and clone, download, and disable existing test suites.

### Test Suites Tab Columns

<table>
  <tr>
    <td>Column
    </td>
    <td colspan='2'>Description
    </td>
  </tr>
  <tr>
    <td>Suite
    </td>
    <td colspan='2'>The test suites associated with the project. Click a test suite name to open the Update Suite window, where you can view and modify details about the test suite.<br/><br/>Click the up or down arrow next to the column name to sort the table alphabetically by test suite name.
    </td>
  </tr>
  <tr>
    <td>Created
    </td>
    <td colspan='2'>The date the test suite was created.<br/><br/>Click the up or down arrow next to the column name to sort the table by created date.
    </td>
  </tr>
  <tr>
    <td>Last Run
    </td>
    <td colspan='2'>The date the test suite was last run.<br/><br/>Click the up or down arrow next to the column name to sort the table by Last Created date.
    </td>
  </tr>
  <tr>
    <td>Last Status
    </td>
    <td colspan='2'>The last status of the test suite.<br/><br/>Click the up or down arrow next to the column name to sort the table by Last Status.
    </td>
  </tr>
  <tr>
    <td>Execute
    </td>
    <td colspan='2'>Hover in the Execute column and then click the Execute button.
    </td>
  </tr>
  <tr>
    <td>Delete
    </td>
    <td colspan='2'>Hover in the Delete column and then click the Delete button.
    </td>
  </tr>
  <tr>
    <td rowspan='3'>More
    </td>
    <td>Go to Step Editor
    </td>
    <td>Opens the Step Editor for the test suite.
    </td>
  </tr>
  <tr>
    <td>Go to execution
    </td>
    <td>Opens the Execution Steps page for the test suite.
    </td>
  </tr>
  <tr>
    <td>Download Execution Report
    </td>
    <td>Downloads the Execution Report as an .html file.
    </td>
  </tr>
</table>

### Creating a Test Suite
To create a test suite:
1. On the dashboard, in the **Projects** card, click **Go to Projects**.
1. On the **Projects** page, click the project card of the project you want to create a test suite for.
1. On the **Project Details** page, click the **Test Suites** tab and then click the **CREATE TEST SUITE** button.

<img src={useBaseUrl('/img/placeholder-image.png')} alt="Placeholder"/>

1. In the **New Test Suite** window, on the **Name and Info** tab, enter a name for the test suite and an email to send reports to. Click **Next**.

<img src={useBaseUrl('/img/placeholder-image.png')} alt="Placeholder"/>

1. On the **Test Cases** tab, select the test cases to include in the test suite. Click **Next**.

<img src={useBaseUrl('/img/placeholder-image.png')} alt="Placeholder"/>

1. On the **Arrange** tab, drag to reorder the test cases in the test suite. Click **Next**.

<img src={useBaseUrl('/img/placeholder-image.png')} alt="Placeholder"/>

For information about the **Post Action** tab, see [Post Processing](#postprocessing).

1. Click **Finish**.

### Post Processing
You can set a test suite or suites to be triggered after the completion of the parent test suite. Post processing suites can be from the same project or from different projects. Suites can be made to trigger based on different conditions. They can be also triggered at desired time intervals by using the Delay feature.
