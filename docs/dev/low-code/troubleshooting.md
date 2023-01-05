---
id: troubleshooting
title: Troubleshooting
sidebar_label: Troubleshooting
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## `Click` Errors

### `Element was not found`

<img src={useBaseUrl('/img/dev/low-code/troubleshooting_1.1.png')} />

### `xpath not found`

<img src={useBaseUrl('/img/dev/low-code/troubleshooting_1.4.png')} />

## `Click` Issues

### `Click` is successful, but not on intended element

<img src={useBaseUrl('/img/dev/low-code/troubleshooting_1.2.png')} />

### `Click` is successful on the right element, but action is not performed

<img src={useBaseUrl('/img/dev/low-code/troubleshooting_1.3.png')} />

## `Enter` Errors

### `Element was not found`

See [`Element was not found`](#element-was-not-found).

### `xpath not found`

See [`xpath not found`](#xpath-not-found).

## `Enter` Issues

### `Enter` is successful but not on intended element

See [`Click` is successful, but not on intended element](#click-is-successful-but-not-on-intended-element).

### Unable to `Enter` on text box

<img src={useBaseUrl('/img/dev/low-code/troubleshooting_2.3.png')} />

### Element is entered in the correct text box, but data disappears in the next step

<img src={useBaseUrl('/img/dev/low-code/troubleshooting_2.4.png')} />

## `Select` Errors

### `Element was not found`

<img src={useBaseUrl('/img/dev/low-code/troubleshooting_3.1.png')} />

### `xpath not found`

See [`xpath not found`](#xpath-not-found).

## `Select` Issues

### `Select` is successful but not on intended element

See [`Click` is successful, but not on intended element](#click-is-successful-but-not-on-intended-element).

## `Upload` Errors

### `Unable to upload file`

**Problem:** File is not being uploaded in the **Upload** field.
**Cause:** The file name or upload method is incorrect.
**Solution:**

1. Check if the file was uploaded to **Artifact** on the **Data** tab.
2. Check if the file is attached to the correct test case.
3. Check if the file name includes the extension.

## Other Errors

### `Parsing Error`

**Problem:** `Parsing Error` is displayed and the test steps disappear.
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
