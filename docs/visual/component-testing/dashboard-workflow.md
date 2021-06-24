---
id: dashboard-workflow
title: Dashboard and Workflow
sidebar_label: Dashboard and Workflow
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


## Baseline Branching and Merging

<img src={useBaseUrl('img/visual/component-branching-merging.png')} alt="Component Branching and Auto-Merging" />

Here's how To Pull Baseline When Branching & Auto-Accept When Merging.

When working with features branches, Screener can save you time and optimize your workflow by automating the following:

* **Automatically Accept updates when merging to or from the base branch**: When merging an accepted base branch into a feature branch, Screener auto-accepts UI states that match the latest base branch test. And when merging into the base branch, Screener auto-accepts UI states that match the latest accepted feature branch test.
* **Automatically pull initial baseline from the base branch**: This is useful for having a set of UI states to initially compare a new branch against. For example, if you create a new feature branch based off of the main branch, and you have a set of UI states on the main branch, you can then compare the new branch's visual changes to the main branch's UI states.

What this means:

* **Accept Once**: no need to accept again when merging accepted updates from your base branch into a feature branch.
* **Faster Workflow**: no need to re-review UI states or re-run builds to pass again.

Follow these setup steps to enable in your project:

1. [Integrate Screener into your CI process](/visual/component-testing/integrations/continuous-integration) so that visual tests are automatically run when branching or merging.
2. Set the `baseBranch` option in your `screener.config.js` file to the name of your base branch:
  ```java
  // screener.config.js
  module.exports = {
    ...

    baseBranch: 'main'
  }
  ```


## Viewing UI Change Details


Screener automatically organizes these changes into four categories:

* **Structure** changes: when new visual items are added, or old items are removed.
* **Layout** changes: when visual items change position or dimension.
* **Style** changes: when css styling gets updated (e.g., font size, color).
* **Content**	Content changes are when text or graphics get updated.

### The Change List
Each change in Screener has additional details that can be viewed to help with debugging. For example:

* View the specific CSS property that changed.
* View a text diff of content changes.

These details can be viewed in the Change List, which can be opened by clicking on a change highlight:

<img src={useBaseUrl('img/visual/component-change-detail-flow.gif')} alt="Component Change Detail Flow" />


## Viewing UI State History

Screener provides the ability to view the recent visual history of each UI state, as well as who reviewed and whether they accepted or rejected the state.

This is useful for:

* Seeing how a UI state has changed over time.
* Knowing ***who*** reviewed previously, and ***what*** was accepted or rejected.

The visual history can be viewed by opening the side panel in a UI state, and selecting the **History** tab:

<img src={useBaseUrl('img/visual/component-visual-history-flow.gif')} alt="Component Visual History Flow" />


## Ignoring Changes

Screener gives the ability to easily ignore specific visual changes during the Review Flow. An example of where this could be useful, is ignoring content that continuously changes on each test run (such as dates).

To ignore a visual change:
1. Click on its highlight to open the Change List side panel.
2. Find the change in the Change List, and click **Ignore**. Changes to this element will now be ignored in future tests.

To undo an **Ignore** action:
1. Follow the same steps above.
2. Find the ignored change.
3. Click **Undo Ignore**.

<img src={useBaseUrl('img/visual/component-ignore-flow.gif')} alt="Component Ignore Flow" />


### Ignoring Areas

Screener also provides the ability to have areas excluded from the visual test. An example of where this could be useful, is a third-party widget or ads.

To ignore a visual area, you have two options. You can either:
* Add a special class name - `qa-screener-ignore` - to your application's HTML code on the element you want to ignore. Then the element, and everything contained within it, will be ignored.
* Edit your `screener.config.js` file, and add an ignore option with its value set to a comma-delimited string of CSS Selectors that represent areas to be ignored.
   * Example of second option:
      ```bash
      // screener.config.js
      module.exports = {
        ...

        ignore: '.qa-ignore-date, .qa-ignore-ad'
      }
      ```


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

## Disabling CSS Animations

CSS Animations can cause inconsistency in your screenshots, resulting in failing visual tests. To alleviate this, Screener automatically disables CSS Animations by default to help ensure consistent results.

So nothing needs to be done to disable CSS Animations.

If you do not want Screener to disable your CSS Animations, then set the cssAnimations option in your screener.config.js file to `true`.

Example of re-enabling CSS Animations:

```java
// screener.config.js
module.exports = {
  ...

  cssAnimations: true
}
```

## Including and Excluding UI States

When you want to test only a subset of your UI states, you can use Include and Exclude rules.

These rules can be set as options in your `screener.config.js` file.

### `includeRules`

Optional array of regular expressions to filter states by. Rules are matched against state name. All matching states will be kept. Example of using the `includeRules` option:

```java
// screener.config.js
module.exports = {
  ...

  includeRules: [
    /^Component/    // RegExp expression
  ]
}
```

### `excludeRules`

Optional array of regular expressions to filter states by. Rules are matched against state name. All matching states will be removed. Example of using the `excludeRules` option:

```java
// screener.config.js
module.exports = {
  ...

  excludeRules: [
    /^Component/    // RegExp expression
  ]
}
```

### Browser-Specific Rules

You can use include/exclude rules to filter what UI states are tested in a particular browser.

For example, to exclude a UI state from being tested in IE11 only:

```java
// screener.config.js
module.exports = {
  ...

  browsers: [
    {
      browserName: 'internet explorer',
      version: '11',
      excludeRules: /^Component/
    }
  ]
}
```

### Resolution-Specific Rules

You can use include/exclude rules to filter what UI states are tested in a particular resolution.

For example, to exclude a UI state from being tested in 768x1024 resolution only:

```java
// screener.config.js
module.exports = {
  ...

  resolutions: [
    {
      width: 768,
      height: 1024,
      excludeRules: /^Component/
    }
  ]
}
```
