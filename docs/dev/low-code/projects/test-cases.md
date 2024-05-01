---
id: test-cases
title: Test Cases  
sidebar_label: Test Cases 
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Test Cases Tab

The **Test Cases** tab consists of a table of information about the test cases that are part of the project. From this page you can also create a new test case.

### Merging Test Cases

To merge multiple test cases into a new test case:

1. On the **Test Cases** page, click the three dots to the far right of the **ADD TEST CASE** button, and then click **Merge Test Case**.

<img src={useBaseUrl('/img/dev/low-code/merging-test-cases-add.png')} alt="Merging test cases - ADD TEST CASE button" width="600"/>

4. In the **Merge Cases** window, on the **Merge** tab, enter a name for the new test case, and select or deselect the cases to merge. Click **Next**.

<img src={useBaseUrl('/img/dev/low-code/merge-cases-merge-tab.png')} alt="Merge Cases window - Merge tab" width="400"/>

5. On the **Arrange** tab, drag the cases to arrange them in your preferred order, or click the **X** to remove them. Click **Save**.

<img src={useBaseUrl('/img/dev/low-code/merge-cases-arrange-tab.png')} alt="Merge Cases window - Arrange tab" width="400"/>

### Test Cases Table Columns

<table>
  <tr>
    <td colspan='3'>
<b>Column</b>
    </td>
<td>
<b>Description</b>
    </td>
  </tr>
  <tr>
    <td colspan='3'>
Case
    </td>
<td>
The name given to the test case. Click the test case name to open the <b>step editor</b>.<br/><br/>Click the up or down arrow next to the column name to sort the table by case name.
    </td>
  </tr>
  <tr>
    <td colspan='3'>
Uploaded
    </td>
<td>
The date the test case was uploaded.<br/><br/>Click the up or down arrow next to the column name to sort the table by the dates the cases were uploaded.
    </td>
  </tr>
  <tr>
    <td colspan='3'>
Generation Status
    </td>
<td>
The current status of the test case. Possible statuses:
        <ul>
          <li>Success</li>
          <li>Failed</li>
          <li>Failed at step X</li>
          <li>Ready to generate</li>
          <li>Stopped at step X</li>
        </ul>
        Click the up or down arrow next to the column name to sort the table by generation status.
    </td>
  </tr>
  <tr>
    <td colspan='3'>
Generated Last Run
    </td>
<td>
The date the last run was generated. Click the up or down arrow next to the column name to sort the table by the dates the cases were last run.
    </td>
  </tr>
  <tr>
    <td colspan='3'>
Generate
    </td>
<td>
Hover under the column name next to the test case you want to generate a test for. Click the <b>Generate</b> button. See <a href="#generating-a-test">Generating a Test</a> for more information.
    </td>
  </tr>
  <tr>
    <td colspan='3'>
Execute
    </td>
<td>
Hover under the column name next to the test case you want to execute a test for. Click the <b>Execute</b> button. See <a href="#executing-a-test">Executing a Test</a> for more information.
    </td>
  </tr>
  <tr>
    <td colspan='3'>
Clone
    </td>
<td>
Hover under the column name next to the test case you want to clone and click the <b>Clone</b> button.
    </td>
  </tr><tr>
    <td colspan='3'>
Delete
    </td>
<td>
Hover under the column name next to the test case you want to delete and click the <b>Delete</b> button. In the <b>Delete Test Case</b> window, click <b>Delete</b> or <b>Cancel</b>.
    </td>
  </tr>
  <tr>
    <td rowspan="7">More</td>
    <td colspan='2'>
Update Case
    </td>
<td>
Update the name and description for the test case.
    </td>
  </tr>
  <tr>
    <td colspan='2'>
Copy URL
    </td>
<td>
Copy the URL of the test case.
    </td>
  </tr>
  <tr>
    <td colspan='2'>
Disable Case
    </td>
<td>
Disable the test case.
    </td>
  </tr>
  <tr>
    <td rowspan="4">Preview and Download</td>
<td>
Test Case
    </td>
<td>
Displays the steps in the test and gives you the option to download the information as a .csv or a .xlsx file.
    </td>
  </tr>
  <tr>
<td>
Data  
    </td>
<td>
Displays a preview of the test data and gives you the option to download it as an .xlsx file.
    </td>
  </tr>
  <tr>
<td>
Script
    </td>
<td>
Displays the script for the test and gives you the option to copy the script to clipboard or download the .java file.
    </td>
  </tr>
  <tr>
<td>
Generation report
    </td>
<td>
Download the test’s .html report file.
    </td>
  </tr>
</table>

## Adding a Test Case

There are three ways to add a test case. You can record the case using the recorder, upload the case as an .xls, .xlsx, or .csv file, or manually enter the case and its steps.

### Using the Recorder

To record a test case you first have to download and install the recorder extension in Google Chrome.

#### Installing the Recorder

If you click the **Record** icon and do not have the recorder extension installed, you will be prompted to do so. To install the recorder without the prompt:

1. Go to the [AutonomIQ AI Enterprise Recorder extension page](https://chrome.google.com/webstore/detail/autonomiq-ai-enterprise-r/gcjbafckoidlgfcdgnpmanplcjkfjbbb/related?hl=en-GB).
2. Click **Add to Chrome**.
3. In the **Add “AutonomIQ AI Enterprise Recorder”?** window, click **Add extension**.
4. The recorder will now be available in your extensions. To launch the recorder, in Google Chrome, click the **Extensions** icon and then click **AutonomIQ AI Enterprise Recorder**.

#### Recording a Test Case

When you launch the recorder, it records the actions you perform and translates them into test steps that can be managed in the step editor (see [Using the Step Editor](/dev/low-code/projects/test-cases/#using-the-step-editor) for more information). The recording happens in the background and is displayed in the **AI Test Studio** window. The recorder will start recording as soon as it is launched.

<img src={useBaseUrl('/img/dev/low-code/using-the-recorder.png')} alt="AI Test Studio window" width="400"/>

#### AI Test Studio Window

<table>

  <tr>
    <td colspan='2'>
<strong>Component</strong>
    </td>
<td>
<strong>Description</strong>
    </td>
  </tr>

  <tr>
    <td colspan='3'>
<b>Main Recorder</b>
    </td>
  </tr>
  <tr>
    <td colspan='2'>

<b>Exit</b> button
    </td>
<td>
Closes the recorder.
    </td>
  </tr>
  <tr>
    <td rowspan='3'><b>More options</b></td>
<td>
<b>Show recorder always on top</b>
    </td>
<td>
When set to <b>On</b>, the recorder will remain positioned on top of all other windows.
    </td>
  </tr>
  <tr>
<td>
<b>Record Hover</b>
    </td>
<td>
When enabled, actions in which you hover your mouse pointer over an item will be recorded as steps. Click to enable/disable.
    </td>
  </tr>
  <tr>
<td>
<b>Record Double Click</b>  
    </td>
<td>
When enabled, double-clicking items will be recorded as steps. Click to enable/disable.
    </td>
  </tr>
  <tr>
    <td colspan='2'>

<b>Add Test Case</b> button
    </td>
<td>
Opens the <b>New Test Case</b> window. Enter a name for the new test case and then click <b>Save</b>.
    </td>
  </tr>
  <tr>
    <td colspan='2'>

<b>Edit Test Case Name</b> button
    </td>
<td>
Opens the <b>Update Test Case Name</b> window. Enter a new name for the test case and then click <b>Update</b>.
    </td>
  </tr>
  <tr>
    <td colspan='2'>

<b>Save Test Case</b> button
    </td>
<td>
Saves the test case. Saved test cases can be viewed on the <b>Plan -> Test Cases</b> page.
    </td>
  </tr>
  <tr>
    <td colspan='2'>

<b>Delete Test Case</b> button
    </td>
<td>
Deletes the test case.
    </td>
  </tr>
  <tr>
    <td colspan='2'>

<b>Pause</b> button
    </td>
<td>
Pauses the recording of actions. The test case will remain in the recorder until you click <b>Exit</b>.
    </td>
  </tr>
  <tr>
    <td rowspan='3'><b>Steps</b></td>
<td>
<b>Action</b>
    </td>
<td>
The action that was performed in the step.
    </td>
  </tr>
  <tr>
<td>
<b>Location</b>
    </td>
<td>
The URL of the action.
    </td>
  </tr>
  <tr>
<td>
<b>Add step</b>
    </td>
<td>
Click to manually add a step to the test case.
    </td>
  </tr>
  <tr>
    <td colspan='2'>

<b>Delete step</b>
    </td>
<td>
Click to delete a step from the test case.
    </td>
  </tr>
  <tr>
    <td colspan='3'>
<b>Test Case List</b>
    </td>
  </tr>
  <tr>
    <td colspan='2'>

<b>Add Test Case</b> button
    </td>
<td>
Opens the <b>New Test Case</b> window. Enter a name for the new test case and then click <b>Save</b>.
    </td>
  </tr>
  <tr>
    <td colspan='2'>
Search bar
    </td>
<td>
Enter text to search for in the list of test cases.
    </td>
  </tr>
  <tr>
    <td colspan='2'>

<b>Test Cases</b> checkbox
    </td>
<td>
Select the checkbox next to <b>Test Cases</b> to select or deselect all test cases in the list.
    </td>
  </tr>
  <tr>
    <td colspan='2'>
Mass delete button
    </td>
<td>
When multiple test case checkboxes are selected, click the delete button next to <b>Test Cases</b> to delete them.
    </td>
  </tr>
  <tr>
    <td colspan='2'>

<b>Edit</b> button
    </td>
<td>
Click to edit the name of the test case.
    </td>
  </tr>
  <tr>
    <td colspan='2'>

<b>Delete</b> button
    </td>
<td>
Click to delete the test case from the list.
    </td>
  </tr>
  </table>

### Uploading a Test Case

To upload a test case:

1. On the **Test Cases** tab, click **ADD TEST CASE** and then click the **Upload** button.

<img src={useBaseUrl('/img/dev/low-code/upload-a-test-case.png')} alt="Navigating to the Upload Test Case window" width="400"/>

2. In the **Upload Test Case** window:

   - On the **Test Case** tab, drag and drop or navigate to the .xls, .xlsx, or .csv file to upload. Click **Next**.

   <img src={useBaseUrl('/img/dev/low-code/upload-test-case-test-case-tab.png')} alt="Upload Test Case - Test Case tab" width="400"/>

   - (Optional) On the **Test Data** tab, drag and drop or navigate to the .xls, .xlsx, or .csv file to upload. Click **Next**.

   <img src={useBaseUrl('/img/dev/low-code/upload-test-case-test-data-tab.png')} alt="Upload Test Case - Test Data tab" width="400"/>

   - (Optional) On the **Artifacts** tab, drag and drop or navigate to the file(s) to upload. Click **Next**.

   <img src={useBaseUrl('/img/dev/low-code/upload-test-case-artifacts-tab.png')} alt="Upload Test Case - Artifacts tab" width="400"/>

   - (Optional) On the **Audio** tab, drag and drop or navigate to the .wav file to upload. **Click Next**.

   <img src={useBaseUrl('/img/dev/low-code/upload-test-case-audio-tab.png')} alt="Upload Test Case - Audio tab" width="400"/>

3. Click **Submit**.

### Manually Creating a Test Case

To manually add a test case:

On the **Test Cases** tab, click **ADD TEST CASE** and then click the **Write** button. See [Using the Step Editor](#using-the-step-editor) for information about the next steps.

<img src={useBaseUrl('/img/dev/low-code/create-test-case-manual.png')} alt="Navigating to the step editor" width="400"/>

### Using the Step Editor

The step editor utilizes Natural Language Processing (NLP) and allows you to manually enter test steps, as opposed to using the recorder. This method gives you more focused control over the actions to test, but it can also result in more errors and frustration for a less-experienced user. If you are new to AutonomIQ, or to testing in general, you can start with the recorder (see [Recording a Test Case](#recording-a-test-case) for more information).

#### Creating a Step

The following are the basic instructions to add a step to a test case, but the step editor is a very robust tool that can perform much more complex functions. For more detailed information about using the step editor and NLP commands, see [NLP Reference](/dev/low-code/nlp-reference).

To create a new step in the step editor:

1. On the **Test Cases** tab, click the test case you want to create a step for. To create a new test case, see [Adding a Test Case](#adding-a-test-case).
2. To add a new step, click the blue plus sign.

<img src={useBaseUrl('/img/dev/low-code/step-editor-new-step.png')} alt="New step in the step editor - blue plus sign" width="300"/>

3. In the **Action** field, enter a command and any additional details. As you type, suggestions will be displayed; you can select one or continue entering the text manually.

<img src={useBaseUrl('/img/dev/low-code/step-editor-suggestions.png')} alt="Step editor - Suggested actions" width="600"/>

4. In the **Data** field, you can enter any data that is required for the action.

<img src={useBaseUrl('/img/dev/low-code/step-editor-data-field.png')} alt="Step editor - Data field" width="600"/>

5. You can add and edit step details in the list of steps, or you can click the expand button to open the editor in a separate window.

<img src={useBaseUrl('/img/dev/low-code/step-editor-window.png')} alt="Step editor - Separate window" width="300"/>

6. To edit the step as code, click the **Code** button.

<img src={useBaseUrl('/img/dev/low-code/step-editor-code-editor.png')} alt="Step editor - Code editor" width="300"/>

7. To save the step, click the green checkmark.

#### Copying Excel Data

To paste copied data from an Excel spreadsheet into the step editor, on the **Step Editor** page, click the clipboard icon or use the **CTRL+V** or **command+V** keyboard shortcuts. The pasted steps will be added to the end of the list of steps.

<img src={useBaseUrl('/img/dev/low-code/step-editor-excel-data.png')} alt="Step editor - Copy Excel data" width="400"/>

#### Step Editor Page Components

<table>

  <tr>
    <td colspan='2'>

<b>Component</b>
    </td>
<td>
<b>Description</b>
    </td>
  </tr>
  <tr>
    <td colspan='2'>
Test case name and description
    </td>
<td>
Click the pencil icon to open the <b>Update Case Name and Description</b> window.
    </td>
  </tr>
  <tr>
    <td colspan='2'>

<b>Time elapsed</b>
    </td>
<td>
The time the steps take to complete.
    </td>
  </tr>
  <tr>
    <td colspan='2'>

<b>Selected Steps</b>
    </td>
<td>
The number of steps in the test case that are selected.
    </td>
  </tr>
  <tr>
    <td colspan='2'>

<b>Total Steps</b>
    </td>
<td>
The number of steps in the test case.
    </td>
  </tr>
  <tr>
    <td colspan='2'>

<b>Save</b> button
    </td>
<td>
Saves the test steps.
    </td>
  </tr>
  <tr>
    <td colspan='2'>

<b>Generate</b> button
    </td>
<td>
Click to generate the test. For more information about generating tests, see <a href="#generating-a-test">Generating a Test</a>.
    </td>
  </tr>
  <tr>
    <td colspan='2'>

<b>Execute</b> button
    </td>
<td>
Click to open the <b>Execute Test</b> window and begin the test execution process. For more information about test execution, see <a href="#executing-a-test">Executing a Test</a>.
    </td>
  </tr>
  <tr>
    <td colspan='2'>
Mass checkbox
    </td>
<td>
Click to select or deselect all steps in the list.
    </td>
  </tr>
  <tr>
    <td colspan='2'>

<b>Paste steps from clipboard</b> button
    </td>
<td>
Adds the steps copied to the clipboard to the test case.
    </td>
  </tr>
  <tr>
    <td colspan='2'>

<b>Copy selected steps to clipboard</b> button
    </td>
<td>
Copies the selected steps to the clipboard, which can then be pasted using the <b>Paste steps from clipboard</b> button.
    </td>
  </tr>
  <tr>
    <td colspan='2'>

<b>New Flow</b> button
    </td>
<td>
Opens the <b>New Flow</b> window. For more information about flows, see Flows.
    </td>
  </tr>
  <tr>
    <td colspan='2'>

<b>Delete</b> button
    </td>
<td>
Deletes the selected steps from the test case.
    </td>
  </tr>
  <tr>
    <td colspan='2'>

<b>Action</b> column
    </td>
<td>
The action performed in the step.
    </td>
  </tr>
  <tr>
    <td colspan='2'>

<b>Data</b> column
    </td>
<td>
The data related to the action.
    </td>
  </tr>
  <tr>
    <td colspan='2'>

<b>Expected Result</b> column
    </td>
<td>
The expected result of the action.
    </td>
  </tr>
  
  <tr>
    <td colspan='2'>

<b>Stop</b> button
    </td>
<td>
Stops the test being generated.
    </td>
  </tr>
  
  <tr>
    <td colspan='2'>

<b>Undo</b> button
    </td>
<td>
Undoes the most recent action.
    </td>
  </tr>
  <tr>
    <td colspan='2'>

<b>Redo</b> button
    </td>
<td>
Redoes the most recently undone action.
    </td>
  </tr>
  <tr>
    <td colspan='2'>

<b>Download Test Steps</b> button
    </td>
<td>
Click to download the test steps as a .csv or .xlsx file.
    </td>
  </tr>
  <tr>
    <td rowspan='9'><b>More Options</b></td>
  </tr>
  <tr>
<td>
Line view options
    </td>
<td>
Switch between two views of the step editor: <b>Current</b> and <b>Original Steps</b>
    </td>
  </tr>
  <tr>
<td>
Image view options
    </td>
<td>
<b>Screen</b> displays a thumbnail of the step in test. <b>Line View</b> displays the steps as text only.
    </td>
  </tr>
  <tr>
<td>
<b>Auto Scroll</b>
    </td>
<td>
Toggle the auto scroll feature on or off.
    </td>
  </tr>
  <tr>
<td>
<b>Cache Steps On | Off</b>
    </td>
<td>
Toggle the step caching feature on or off.
    </td>
  </tr>
  <tr>
<td>
<b>Creation Mode On | Off</b>
    </td>
<td>
Toggle creation mode on or off.
    </td>
  </tr>
  <tr>
<td>
<b>Remove All Debug Steps</b>
    </td>
<td>
Click to remove the debug steps in the test case.
    </td>
  </tr>
  <tr>
<td>
<b>Download Logs</b>
    </td>
<td>
Click to download the log file as a .zip.
    </td>
  </tr>

</table>

## Generating a Test

To generate a test:

On the **Test Cases** tab, hover in the **GENERATE** column and then click the **Generate** button.

<img src={useBaseUrl('/img/dev/low-code/generate-a-test.png')} alt="Navigating to the test generation window" width="600"/>

## Executing a Test

To execute a test:

On the **Test Cases** tab, hover in the **EXECUTE** column and then click the **Execute** button.

<img src={useBaseUrl('/img/dev/low-code/execute-a-test.png')} alt="Navigating to the test execution window" width="600"/>


## Test Cases Page
On the **Test Cases** page you can view, update, move, or disable a test case. 

## Test Cases Page Components

<table>
  <tr>
    <td colspan='2'>

<b>Component</b>
    </td>
<td>
<b>Description</b>
    </td>
  </tr>
  <tr>
    <td colspan='2'>

<b>Case</b>
    </td>
<td>
The name given to the test case.<br/><br/>Click the up or down arrow next to the column name to sort the table by case name.
    </td>
  </tr>
  <tr>
    <td colspan='2'>

<b>Project</b>
    </td>
<td>
The project the test case is associated with.<br/><br/>Click the up or down arrow next to the column name to sort the table by project name.
    </td>
  </tr>
  <tr>
    <td colspan='2'>

<b>Created</b>
    </td>
<td>
The date the test case was created.<br/><br/>Click the up or down arrow next to the column name to sort the table by created date.
    </td>
  </tr>
  <tr>
    <td colspan='2'>

<b>Last Generated</b>
    </td>
<td>
The date the test case was last generated.<br/><br/>Click the up or down arrow next to the column name to sort the table by the last generated date.
    </td>
  </tr>
  <tr>
    <td colspan='2'>

<b>Last Status</b>
    </td>
<td>
The most recent status of the test case.<br/><br/>Click the up or down arrow next to the column name to sort the table by last status.
    </td>
  </tr>
  <tr>
    <td rowspan='5'><b>Actions</b></td>
<td>
<b>Update Test Case</b>
    </td>
<td>
Update the test case details. See <a href="/dev/low-code/projects/test-cases/#adding-a-test-case">Adding a Test Case</a> for more information.
    </td>
  </tr>
  <tr>
<td>
<b>Move Test Case</b>
    </td>
<td>
Move the test case to a different project. See <a href="/dev/low-code/projects/project-details">Project Details</a> for more information.
    </td>
  </tr>
  <tr>
<td>
<b>Disable Test Case</b>
    </td>
<td>
Disable the test case.<br/><br/>You can also disable a test case by selecting its check box and then clicking the <b>Disable Test Case</b> button.
    </td>
  </tr>
  <tr>
<td>
<b>Go To Step Editor</b>
    </td>
<td>
Opens the step editor for the test case. See <a href="/dev/low-code/projects/test-cases/#using-the-step-editor">Using the Step Editor</a> for more information.
    </td>
  </tr>
</table>
