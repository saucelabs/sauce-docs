---
id: data  
title: Data 
sidebar_label: Data 
---

import useBaseUrl from '@docusaurus/useBaseUrl';

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

1. On the **Data** tab, click the **UPLOAD NEW DATA** button.

<img src={useBaseUrl('/img/dev/low-code/upload-new-data.png')} alt="Navigating to the Upload window" width="600"/>

2. In the **Upload** window, on the **Test Data** tab, drag and drop or navigate to the .xls, .xlsx, or .csv file to upload. Click **Next**.

<img src={useBaseUrl('/img/dev/low-code/upload-test-data-tab.png')} alt="Upload window - Test Data tab" width="400"/>

3. On the **Artifacts** tab, drag and drop or navigate to the file(s) to upload. Click **Next**.

<img src={useBaseUrl('/img/dev/low-code/upload-artifacts-tab.png')} alt="Upload window - Artifacts tab" width="400"/>

4. On the **Audio** tab, drag and drop or navigate to the .wav file to upload. Click **Next**.

<img src={useBaseUrl('/img/dev/low-code/upload-audio-tab.png')} alt="Upload window - Audio tab" width="400"/>

5. On the **Attach Cases to Data** tab, select the test cases you want to associate with the data.

<img src={useBaseUrl('/img/dev/low-code/upload-attach-tab.png')} alt="Upload window - Attach Cases to Data tab" width="400"/>

6. Click **Submit**.
