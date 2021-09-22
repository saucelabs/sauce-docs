---
id: review-workflow
title: Visual Component Testing Review Workflow
sidebar_label: Review Workflow
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Main Review Workflow

Learn the Screener workflow for reviewing UIs. Each UI state under test has one of the following statuses:

| UI State | Description
| :-- | :--
| New	| Has not been reviewed yet.
| Changed	| Has changed visually when compared to its accepted baseline.
| Accepted | Is visually the same as its baseline OR has been reviewed and accepted by a team member.
| Rejected | Has been reviewed, found to have defects, and rejected by a team member.

### 1. Start Reviewing.

When a test has a **New** or **Changed** UI state, it will show a **Review** button:

<img src={useBaseUrl('img/visual/component-review-button.png')} alt="Component Review Button" />

Clicking **Review** will display a list of your UI states filtered to only those needing review.

To start reviewing, click on the first UI state:

<img src={useBaseUrl('img/visual/component-review-state.jpeg')} alt="Component Review State" />

### 2. Review UI State.

You'll then be presented with screenshots of the selected UI state:
<img src={useBaseUrl('img/visual/component-review-screenshots.jpeg')} alt="Component Review Screenshot" />

If a baseline exists, a side-by-side view will be displayed with the baseline screenshot on the left-hand side and the current screenshot from the latest build on the right-hand side.

**Changed** UI states will include highlights of visual changes directly overlayed on the screenshots.

:::tip Tips
* Learn how to [ignore changes].
* Learn how to [view change details].
:::

### 3. Accept or Reject

After reviewing the UI state, you can either:

* **Accept**: if the screenshots are as expected, which will set the current as the new baseline (keyboard shortcut = Shift + Up Arrow); or
* **Reject**: if defects are found which need to be fixed (keyboard shortcut = Shift + Down Arrow).

To Accept or Reject, you can use the aforementioned keyboard shortcuts or select from the status dropdown:

<img src={useBaseUrl('img/visual/component-review-accept.png')} alt="Component Review Accept" width="200px" />


### 4. Continue Reviewing

Continue reviewing the remaining UI states. You can navigate by clicking on the next/previous arrows (pictured below) or by using keyboard shortcuts (next = Right Arrow; previous = Left Arrow):

<img src={useBaseUrl('img/visual/component-review-next.png')} alt="Component Review Next" />

Use the **Accept All** button to quickly set all filtered UI states to accepted.


### 5. Review Complete
When all UI states have been reviewed, the filtered state list will be empty:

<img src={useBaseUrl('img/visual/component-review-complete.png')} alt="Component Review Complete" />

The build status will be updated to **Success** when all UI states have been accepted.

The build status will be updated to **Failure** when there are rejected UI states.


## Testing Against Multiple Devices and Resolutions

Screener provides the ability to test responsive designs across various devices and resolutions.

To test against multiple resolutions and/or devices, add the `resolutions` option to your `screener.config.js` file, with an array of resolution items.

Each resolution item in the array is either:
* A string in the format: `<width>x<height>`.
    * __Example__:
     ```java
     '1024x768'
     ```
* An object with `deviceName` and optional `deviceOrientation` properties.   
    * __Example__:
     ```java
     { deviceName: 'iPhone 6' }
     ```
     <details><summary>Supported <code>deviceName</code> value options (<strong>click here to expand</strong>):</summary>
      <ul>
      <li>iPad</li>
      <li>iPad Pro</li>
      <li>iPhone 4</li>
      <li>iPhone 5</li>
      <li>iPhone 6</li>
      <li>iPhone 6 Plus</li>
      <li>iPhone 7</li>
      <li>iPhone 7 Plus</li>
      <li>iPhone 8</li>
      <li>iPhone 8 Plus</li>
      <li>iPhone X</li>
      <li>Galaxy S6</li>
      <li>Galaxy S7</li>
      <li>Galaxy S8</li>
      <li>Nexus 4</li>
      <li>Nexus 5</li>
      <li>Nexus 5X</li>
      <li>Nexus 6P</li>
      <li>Nexus 7</li>
      <li>Nexus 10</li></ul>
     </details>  

Example config using `resolutions`:

```java
module.exports = {
  ...

  resolutions: [
    '1024x768',
    {
      deviceName: 'iPhone 6'
    },
    {
      deviceName: 'iPhone 6 Plus',
      deviceOrientation: 'landscape'
    }
  ]
};
```
