---
id: project-details-page
title: Project Details Page
sidebar_label: Project Details Page
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The **Project Details** page displays information about the selected project, including test cases, variables, and data. From here you can also create or upload new test cases, data, variables, flows, and test suites.

Click the information icon next to your test name to view the created and updated dates, and the project’s execution stats.

<img src={useBaseUrl('/img/dev/low-code/project-details-info.png')} alt="Project Details page -- Info icon" width="400"/>

Click the more actions icon to view or modify the project properties, download the project details as a .xlsx file, or disable the project.

<img src={useBaseUrl('/img/dev/low-code/project-details-more-actions.png')} alt="Project Details page - More actions button" width="400"/>

## Test Cases Tab
The **Test Cases** tab consists of a table of information about the test cases that are part of the project. From this page you can also create a new test case.

### Merging Test Cases
To merge multiple test cases into a new test case:

1. On the dashboard, in the **Projects** card, click **Go to Projects**.
2. On the **Projects** page, click the project card of the project whose test cases you want to merge.
3. On the **Project Details** page, click the three dots to the far right of the **ADD TEST CASE** button.

<img src={useBaseUrl('/img/dev/low-code/merging-test-cases-add.png')} alt="Merging test cases - ADD TEST CASE button" width="400"/>

4. In the **Merge Cases** window, on the **Merge** tab, enter a name for the new test case, and select or deselect the cases to merge. Click **Next**.

<img src={useBaseUrl('/img/dev/low-code/merge-cases-merge-tab.png')} alt="Merge Cases window - Merge tab" width="400"/>

5. On the **Arrange** tab, drag the cases to arrange them in your preferred order, or click the **X** to remove them. Click **Save**.

<img src={useBaseUrl('/img/dev/low-code/merge-cases-arrange-tab.png')} alt="Merge Cases window - Arrange tab" width="400"/>

### Test Cases Table Columns
<table>
  <tr>
    <td colSpan='3'><b>Column</b>
    </td>
    <td><b>Description</b>
    </td>
  </tr>
  <tr>
    <td colSpan='3'>Case
    </td>
    <td>The name given to the test case. Click the test case name to open the <b>step editor</b>.<br/><br/>Click the up or down arrow next to the column name to sort the table by case name.
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
    <td>Hover under the column name next to the test case you want to generate a test for. Click the <b>Generate</b> button. See [Generating a Test](#generating-a-test) for more information.
    </td>
  </tr>
  <tr>
    <td colSpan='3'>Execute
    </td>
    <td>Hover under the column name next to the test case you want to execute a test for. Click the <b>Execute</b> button. See [Executing a Test](#executing-a-test) for more information.
    </td>
  </tr>
  <tr>
    <td colSpan='3'>Clone
    </td>
    <td>Hover under the column name next to the test case you want to clone and click the <b>Clone</b> button.
    </td>
  </tr><tr>
    <td colSpan='3'>Delete
    </td>
    <td>Hover under the column name next to the test case you want to delete and click the <b>Delete</b> button. In the <b>Delete Test Case</b> window, click <b>Delete</b> or <b>Cancel</b>.
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
  </tr>
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
There are three ways to add a test case. You can record the case using the recorder, upload the case as an .xls, .xlsx, or .csv file, or manually enter the case and its steps.

### Recording a Test Case
To record a test case you first have to download and install the recorder extension in Google Chrome.

#### Installing the Recorder
If you click the **Record** icon and do not have the recorder extension installed, you will be prompted to do so. To install the recorder without the prompt:
1. Go to the [AutonomIQ AI Enterprise Recorder extension page](https://chrome.google.com/webstore/detail/autonomiq-ai-enterprise-r/gcjbafckoidlgfcdgnpmanplcjkfjbbb/related?hl=en-GB).
2. Click **Add to Chrome**.
3. In the **Add “AutonomIQ AI Enterprise Recorder”?** window, click **Add extension**.
4. The recorder will now be available in your extensions. To launch the recorder, in Google Chrome, click the **Extensions** icon and then click **AutonomIQ AI Enterprise Recorder**.

#### Using the Recorder
When you launch the recorder, it records the actions you perform and translates them into test steps that can be managed in the step editor (see [Using the Step Editor](#using-the-step-editor) for more information). The recording happens in the background and is displayed in the **AI Test Studio** window. The recorder will start recording as soon as it is launched.

<img src={useBaseUrl('/img/dev/low-code/using-the-recorder.png')} alt="AI Test Studio window" width="400"/>

#### AI Test Studio Window

<table>
  <tr>
    <td colSpan='2'><b>Component</b>
    </td>
    <td><b>Description</b>
    </td>
  </tr>
  <tr>
    <td colspan='3'><b>Main Recorder</b>
    </td>
  </tr>
  <tr>
    <td colspan='2'><b>Exit</b> button
    </td>
    <td>Closes the recorder.
    </td>
  </tr>
  <tr>
    <td rowspan='3'><b>More options</b>
    </td>
    <td><b>Show recorder always on top</b>
    </td>
    <td>When set to <b>On</b>, the recorder will remain positioned on top of all other windows.
    </td>
  </tr>
  <tr>
    <td><b>Record Hover</b>
    </td>
    <td>When enabled, actions in which you hover your mouse pointer over an item will be recorded as steps. Click to enable/disable.
    </td>
  </tr>
  <tr>
    <td><b>Record Double Click</b>  
    </td>
    <td>When enabled, double-clicking items will be recorded as steps. Click to enable/disable.
    </td>
  </tr>
  <tr>
    <td colspan='2'><b>Add Test Case</b> button
    </td>
    <td>Opens the <b>New Test Case</b> window. Enter a name for the new test case and then click <b>Save</b>.
    </td>
  </tr>
  <tr>
    <td colspan='2'><b>Edit Test Case Name</b> button
    </td>
    <td>Opens the <b>Update Test Case Name</b> window. Enter a new name for the test case and then click <b>Update</b>.
    </td>
  </tr>
  <tr>
    <td colspan='2'><b>Save Test Case</b> button
    </td>
    <td>Saves the test case. Saved test cases can be viewed on the <b>Plan -> Test Cases</b> page.
    </td>
  </tr>
  <tr>
    <td colspan='2'><b>Delete Test Case</b> button
    </td>
    <td>Deletes the test case.
    </td>
  </tr>
  <tr>
    <td colspan='2'><b>Pause</b> button
    </td>
    <td>Pauses the recording of actions. The test case will remain in the recorder until you click <b>Exit</b>.
    </td>
  </tr>
  <tr>
    <td rowspan='3'><b>Steps</b>
    </td>
    <td><b>Action</b>
    </td>
    <td>The action that was performed in the step.
    </td>
  </tr>
  <tr>
    <td><b>Location</b>
    </td>
    <td>The URL of the action.
    </td>
  </tr>
  <tr>
    <td><b>Add step</b>
    </td>
    <td>Click to manually add a step to the test case.
    </td>
  </tr>
  <tr>
    <td><b>Delete step</b>
    </td>
    <td>Click to delete a step from the test case.
    </td>
  </tr>
  <tr>
    <td colspan='3'><b>Test Case List</b>
    </td>
  </tr>
  <tr>
    <td colspan='2'><b>Add Test Case</b> button
    </td>
    <td>Opens the <b>New Test Case</b> window. Enter a name for the new test case and then click <b>Save</b>.
    </td>
  </tr>
  <tr>
    <td colspan='2'>Search bar
    </td>
    <td>Enter text to search for in the list of test cases.
    </td>
  </tr>
  <tr>
    <td colspan='2'><b>Test Cases</b> checkbox
    </td>
    <td>Select the checkbox next to <b>Test Cases</b> to select or deselect all test cases in the list.
    </td>
  </tr>
  <tr>
    <td colspan='2'>Mass delete button
    </td>
    <td>When multiple test case checkboxes are selected, click the delete button next to <b>Test Cases</b> to delete them.
    </td>
  </tr>
  <tr>
    <td colspan='2'><b>Edit</b> button
    </td>
    <td>Click to edit the name of the test case.
    </td>
  </tr>
  <tr>
    <td colspan='2'><b>Delete</b> button
    </td>
    <td>Click to delete the test case from the list.
    </td>
  </tr>
  </table>

### Uploading a Test Case
To upload a test case:
1. On the dashboard, in the **Projects** card, click **Go to Projects**.
2. On the **Projects** page, click the project card of the project you want to upload a test case to.
3. On the **Project Details** page, click **ADD TEST CASE** and then click the **Upload** button.

<img src={useBaseUrl('/img/dev/low-code/upload-a-test-case.png')} alt="Navigating to the Upload Test Case window" width="400"/>

4. In the **Upload Test Case** window:
    * On the **Test Case** tab, drag and drop or navigate to the .xls, .xlsx, or .csv file to upload. Click **Next**.

    <img src={useBaseUrl('/img/dev/low-code/upload-test-case-test-case-tab.png')} alt="Upload Test Case - Test Case tab" width="400"/>

    * (Optional) On the **Test Data** tab, drag and drop or navigate to the .xls, .xlsx, or .csv file to upload. Click **Next**.

    <img src={useBaseUrl('/img/dev/low-code/upload-test-case-test-data-tab.png')} alt="Upload Test Case - Test Data tab" width="400"/>

    * (Optional) On the **Artifacts** tab, drag and drop or navigate to the file(s) to upload. Click **Next**.

    <img src={useBaseUrl('/img/dev/low-code/upload-test-case-artifacts-tab.png')} alt="Upload Test Case - Artifacts tab" width="400"/>

    * (Optional) On the **Audio** tab, drag and drop or navigate to the .wav file to upload. **Click Next**.

    <img src={useBaseUrl('/img/dev/low-code/upload-test-case-audio-tab.png')} alt="Upload Test Case - Audio tab" width="400"/>

5. Click **Submit**.

### Manually Creating a Test Case
To manually add a test case:
1. On the dashboard, in the **Projects** card, click **Go to Projects**.
2. On the **Projects** page, click the project card of the project you want to upload a test case to.
3. On the **Project Details** page, on the **Tests Cases** tab, click **ADD TEST CASE** and then click the **Create** button. See [Using the Step Editor](#using-the-step-editor) for information about the next steps.

<img src={useBaseUrl('/img/dev/low-code/create-test-case-manual.png')} alt="Navigating to the step editor" width="400"/>

### Using the Step Editor
#### Copying Excel Data
To paste copied data from an Excel spreadsheet into the step editor, on the **Step Editor** page, click the clipboard icon or use the **CTRL+V** or **command+V** keyboard shortcuts. The pasted steps will be added to the end of the list of steps.

## Generating a Test
To generate a test:
1. On the dashboard, in the **Projects** card, click **Go to Projects**.
2. On the **Projects** page, click the project card of the project you want to generate a test for.
3. On the **Project Details** page, on the **Tests Cases** tab, hover in the **GENERATE** column and then click the **Generate** button.

<img src={useBaseUrl('/img/dev/low-code/generate-a-test.png')} alt="Navigating to the test generation window" width="400"/>

## Executing a Test
To execute a test:
1. On the dashboard, in the **Projects** card, click **Go to Projects**.
2. On the **Projects** page, click the project card of the project you want to execute a test for.
3. On the **Project Details** page, on the **Tests Cases** tab, hover in the **EXECUTE** column and then click the **Execute** button.

<img src={useBaseUrl('/img/dev/low-code/execute-a-test.png')} alt="Navigating to the test execution window" width="400"/>

## Data Tab
The **Data** tab displays the data uploaded to a project, in table form. From this screen you can also upload new data, and delete and download existing data.

### Data Tab Columns

<table>
  <tr>
    <td><b>Column</b>
    </td>
    <td><b>Description</b>
    </td>
  </tr>
  <tr>
    <td><b>Data</b>
    </td>
    <td>The data files that are uploaded to the project. Clicking a file name will open a test data preview window, which includes a download option.<br/><br/>Click the up or down arrow next to the column name to sort the table alphabetically by file name.
    </td>
  </tr>
  <tr>
    <td><b>Last Used</b>
    </td>
    <td>The date the data file was last used. Click the up or down arrow next to the column name to sort the table by last used date.
    </td>
  </tr>
  <tr>
    <td><b>Uploaded</b>
    </td>
    <td>The date the data file was uploaded. Click the up or down arrow next to the column name to sort the table by uploaded date.
    </td>
  </tr>
  <tr>
    <td><b>Associated Test Cases</b>
    </td>
    <td>The number of test cases associated with the one you are viewing. Click <b>View Details</b> to open the <b>Attach Case(s) to Data</b> window.
    </td>
  </tr>
  <tr>
    <td><b>Delete</b>
    </td>
    <td>Hover in the <b>Delete</b> column and then click the <b>Delete</b> button.
    </td>
  </tr>
  <tr>
    <td><b>Download</b>
    </td>
    <td>Hover in the <b>Download</b> column and then click the <b>Download</b> button.
    </td>
  </tr>
</table>

### Uploading New Data
To upload new data to your test case:

1. On the dashboard, in the **Projects** card, click **Go to Projects**.
2. On the **Projects** page, click the project card of the project you want to upload new data to.
3. On the **Project Details** page, click the **Data** tab and then click the **UPLOAD NEW DATA** button.

<img src={useBaseUrl('/img/dev/low-code/upload-new-data.png')} alt="Navigating to the Upload window" width="400"/>

4. In the **Upload** window, on the **Test Data** tab, drag and drop or navigate to the .xls, .xlsx, or .csv file to upload. Click **Next**.

<img src={useBaseUrl('/img/dev/low-code/upload-test-data-tab.png')} alt="Upload window - Test Data tab" width="400"/>

5. On the **Artifacts** tab, drag and drop or navigate to the file(s) to upload. Click **Next**.

<img src={useBaseUrl('/img/dev/low-code/upload-artifacts-tab.png')} alt="Upload window - Artifacts tab" width="400"/>

6. On the **Audio** tab, drag and drop or navigate to the .wav file to upload. Click **Next**.

<img src={useBaseUrl('/img/dev/low-code/upload-audio-tab.png')} alt="Upload window - Audio tab" width="400"/>

7. On the **Attach Cases to Data** tab, select the test cases you want to associate with the data.

<img src={useBaseUrl('static/img/dev/low-code/upload-attach-tab.png')} alt="Upload window - Attach Cases to Data tab" width="400"/>

8. Click **Submit**.

## Variables Tab
For information about specific variables, see [Variables](/dev/low-code/variables).

### Variables Tab Columns

<table>
  <tr>
    <td><b>Column</b>
    </td>
    <td><b>Description</b>
    </td>
  </tr>
  <tr>
    <td><b>Variable</b>
    </td>
    <td>The variables associated with the project. Click a variable name to modify its name or value.<br/><br/>Click the up or down arrow next to the column name to sort the table alphabetically by variable name.
    </td>
  </tr>
  <tr>
    <td><b>Value</b>
    </td>
    <td>Click the up or down arrow next to the column name to sort the table alphabetically by value.
    </td>
  </tr>
  <tr>
    <td><b>Clone</b>
    </td>
    <td>Hover in the <b>Clone</b> column and then click the <b>Clone</b> button.
    </td>
  </tr>
  <tr>
    <td><b>Delete</b>
    </td>
    <td>Hover in the <b>Delete</b> column and then click the <b>Delete</b> button.
    </td>
  </tr>
</table>

### Adding a Variable
To add a variable to a test case:
1. On the dashboard, in the **Projects** card, click **Go to Projects**.
2. On the **Projects** page, click the project card of the project you want to upload new data to.
3. On the **Project Details** page, click the **Variables** tab and then click the **ADD VARIABLE** button.

<img src={useBaseUrl('/img/dev/low-code/add-variable-nav.png')} alt="Navigating to the New Variable window" width="400"/>

4. In the **New Variable** window, enter a name and value for the new variable, and then click **Save**.

<img src={useBaseUrl('/img/dev/low-code/new-variable-window.png')} alt="The New Variable window" width="400"/>

### More Options
Click the more options button to the far right of the **ADD VARIABLE** button to download or delete all variables from the project.

<img src={useBaseUrl('/img/dev/low-code/variables-tab-more-options.png')} alt="Variables tab - More options" width="400"/>

## Flows Tab
A flow is a set of steps that are linked for easy re-use. The **Flows** tab displays the flows associated with a project.

### Flows Tab Columns

<table>
  <tr>
    <td><b>Column</b>
    </td>
    <td><b>Description</b>
    </td>
  </tr>
  <tr>
    <td><b>Flow</b>
    </td>
    <td>The flows associated with the project. Click a flow name to open the <b>List Flow</b> window, where you can view and modify details about the flow.<br/><br/>Click the up or down arrow next to the column name to sort the table alphabetically by flow name.
    </td>
  </tr>
  <tr>
    <td><b>Created</b>
    </td>
    <td>The date the flow was created.<br/><br/>Click the up or down arrow next to the column name to sort the table by created date.
    </td>
  </tr>
  <tr>
    <td><b>Total Steps</b>
    </td>
    <td>The number of steps in the flow.<br/><br/>Click the up or down arrow next to the column name to sort the table by number of steps.
    </td>
  </tr>
  <tr>
    <td><b>Clone</b>
    </td>
    <td>Hover in the <b>Clone</b> column and then click the <b>Clone</b> button.
    </td>
  </tr>
  <tr>
    <td><b>Delete</b>
    </td>
    <td>Hover in the <b>Delete</b> column and then click the <b>Delete</b> button.
    </td>
  </tr>
  <tr>
    <td><b>Download</b>
    </td>
    <td>Hover in the <b>Download</b> column and then click the <b>Download</b> button.
    </td>
  </tr>
</table>

### Creating a Flow
To add a flow to a project:
1. On the dashboard, in the **Projects** card, click **Go to Projects**.
2. On the **Projects** page, click the project card of the project you want to create a flow for.
3. On the **Project Details** page, click the **Flows** tab and then click the **CREATE NEW FLOW** button.

<img src={useBaseUrl('/img/dev/low-code/create-a-flow-nav.png')} alt="Navigating to the New Flow window" width="400"/>

4. In the **New Flow** window, add a name for the flow, and add the steps to include.

<img src={useBaseUrl('/img/dev/low-code/new-flow-window.png')} alt="The New Flow window" width="400"/>

5. Click **Save**.

## Test Suites Tab
A test suite is a collection of test cases in a project. The **Test Suites** tab displays the test suites in a project, in table form. From this screen you can also create a new test suite, and clone, download, and disable existing test suites.

### Test Suites Tab Columns

<table>
  <tr>
    <td><b>Column</b>
    </td>
    <td colspan='2'><b>Description</b>
    </td>
  </tr>
  <tr>
    <td><b>Suite</b>
    </td>
    <td colspan='2'>The test suites associated with the project. Click a test suite name to open the <b>Update Suite</b> window, where you can view and modify details about the test suite.<br/><br/>Click the up or down arrow next to the column name to sort the table alphabetically by test suite name.
    </td>
  </tr>
  <tr>
    <td><b>Created</b>
    </td>
    <td colspan='2'>The date the test suite was created.<br/><br/>Click the up or down arrow next to the column name to sort the table by created date.
    </td>
  </tr>
  <tr>
    <td><b>Last Run</b>
    </td>
    <td colspan='2'>The date the test suite was last run.<br/><br/>Click the up or down arrow next to the column name to sort the table by last run date.
    </td>
  </tr>
  <tr>
    <td><b>Last Status</b>
    </td>
    <td colspan='2'>The last status of the test suite.<br/><br/>Click the up or down arrow next to the column name to sort the table by last status.
    </td>
  </tr>
  <tr>
    <td><b>Execute</b>
    </td>
    <td colspan='2'>Hover in the <b>Execute</b> column and then click the <b>Execute</b> button.
    </td>
  </tr>
  <tr>
    <td><b>Delete</b>
    </td>
    <td colspan='2'>Hover in the <b>Delete</b> column and then click the <b>Delete</b> button.
    </td>
  </tr>
  <tr>
    <td rowspan='3'><b>More</b>
    </td>
    <td><b>Go to Step Editor</b>
    </td>
    <td>Opens the step editor for the test suite.
    </td>
  </tr>
  <tr>
    <td><b>Go to execution</b>
    </td>
    <td>Opens the <b>Execution Steps</b> page for the test suite.
    </td>
  </tr>
  <tr>
    <td><b>Download Execution Report</b>
    </td>
    <td>Downloads the <b>Execution Report</b> as an .html file.
    </td>
  </tr>
</table>

### Creating a Test Suite
To create a test suite:
1. On the dashboard, in the **Projects** card, click **Go to Projects**.
2. On the **Projects** page, click the project card of the project you want to create a test suite for.
3. On the **Project Details** page, click the **Test Suites** tab and then click the **CREATE TEST SUITE** button.

<img src={useBaseUrl('/img/dev/low-code/create-test-suite-nav.png')} alt="Navigating to the New Test Suite window" width="400"/>

4. In the **New Test Suite** window, on the **Name and Info** tab, enter a name for the test suite and an email to send reports to. Click **Next**.

<img src={useBaseUrl('/img/dev/low-code/new-test-suite-name-tab.png')} alt="New Test Suite window - Name and Info tab" width="400"/>

5. On the **Test Cases** tab, select the test cases to include in the test suite. Click **Next**.

<img src={useBaseUrl('/img/dev/low-code/new-test-suite-tc-tab.png')} alt="New Test Suite window - Test Cases tab" width="400"/>

6. On the **Arrange** tab, drag to reorder the test cases in the test suite. Click **Next**.

<img src={useBaseUrl('/img/dev/low-code/new-test-suite-arrange-tab.png')} alt="New Test Suite window - Arrange tab" width="400"/>

For information about the **Post Action** tab, see [Post Processing](#post-processing).

7. Click **Finish**.

### Post Processing
You can set a test suite or suites to be triggered after the completion of the parent test suite. Post processing suites can be from the same project or from different projects. Suites can be made to trigger based on different conditions. They can be also triggered at desired time intervals by using the **Delay** feature.
