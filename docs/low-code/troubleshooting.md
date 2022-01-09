---
id: troubleshooting
title: Troubleshooting
sidebar_label: Troubleshooting
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## `Click` Errors
### `Element was not found`
<img src={useBaseUrl('/img/placeholder-image.png')} alt="Placeholder"/>
### `xpath not found`
<img src={useBaseUrl('/img/placeholder-image.png')} alt="Placeholder"/>


## `Click` Issues
### `Click` is successful, but not on intended element
<img src={useBaseUrl('/img/placeholder-image.png')} alt="Placeholder"/>
### `Click` is successful on the right element, but action is not performed
<img src={useBaseUrl('/img/placeholder-image.png')} alt="Placeholder"/>


## `Enter` Errors
### `Element was not found`
<img src={useBaseUrl('/img/placeholder-image.png')} alt="Placeholder"/>
### `xpath not found`
<img src={useBaseUrl('/img/placeholder-image.png')} alt="Placeholder"/>


## `Enter` Issues
###`Enter` is successful but not on intended element
<img src={useBaseUrl('/img/placeholder-image.png')} alt="Placeholder"/>
### Unable to `Enter` on text box
<img src={useBaseUrl('/img/placeholder-image.png')} alt="Placeholder"/>
### Element is entered in the correct text box, but data disappears in the next step
<img src={useBaseUrl('/img/placeholder-image.png')} alt="Placeholder"/


## `Select` Errors
### `Element was not found`
<img src={useBaseUrl('/img/placeholder-image.png')} alt="Placeholder"/>
### `xpath not found`
<img src={useBaseUrl('/img/placeholder-image.png')} alt="Placeholder"/>


## `Select` Issues
### `Select` is successful but not on intended element
<img src={useBaseUrl('/img/placeholder-image.png')} alt="Placeholder"/>


## `Upload` Errors
### `Unable to upload file`
**Problem:** File is not being uploaded in the **Upload** field.
**Cause:** The file name or upload method is incorrect.
**Solution:**
  1. Check if the file was uploaded to **Artifact** on the **Data** tab.
      <img src={useBaseUrl('/img/placeholder-image.png')} alt="Placeholder"/>
  2. Check if the file is attached to the correct test case.
      <img src={useBaseUrl('/img/placeholder-image.png')} alt="Placeholder"/>
  3. Check if the file name includes the extension.
      <img src={useBaseUrl('/img/placeholder-image.png')} alt="Placeholder"/>


## Other Errors
### `Parsing Error`
**Problem:** `Parsing Error` is displayed and the test steps disappear.
<img src={useBaseUrl('/img/placeholder-image.png')} alt="Placeholder"/>
**Cause:** The block is incomplete or incorrect.
**Solution:**
  1. Check if the block in the test case includes `End Block`.
  2. Check if the block statement is incorrect.
## `Variable is not found`
**Problem:** A variable cannot be located in the data file.
**Cause:** Variable names are case sensitive.
**Solution:** Make sure the variable name case is consistent.
## `Not processed`
**Problem:** A step in the step editor displays a `Not processed` error message.
**Cause:** A data sheet is not attached to the test case.
**Solution:** Attach a data sheet to the test case.
## `Failed to create driver`
**Problem:** During test generation or execution, the `Failed to create driver` error message is displayed.
**Cause:** Not enough space in your C: drive.
**Solution:** Ensure there is enough space in your C: drive.
