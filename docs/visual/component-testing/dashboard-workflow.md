---
id: dashboard-workflow
title: Dashboard and Workflow
sidebar_label: Dashboard and Workflow
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Review Flow

Learn the Screener workflow for reviewing UIs. Each UI state under test has one of the following statuses:

| UI State | Description
| :-- | :--
| New	| A new UI state that has not been reviewed yet.
| Changed	| A UI state that has changed visually when compared to its accepted baseline.
| Accepted | A UI state that is visually the same as its baseline OR has been reviewed and accepted by a team member.
| Rejected | A UI state that has been reviewed, found to have defects, and rejected by a team member.

### 1. Start Reviewing.

When a test has **Changed** or **New** UI states, it will show a Review button:

<img src={useBaseUrl('img/visual/component-review-button.png')} alt="Component Review Button" />

Clicking on the **Review** button will display a list of your UI states filtered to only those needing review. Click on the first UI state to start reviewing:

<img src={useBaseUrl('img/visual/component-review-state.png')} alt="Component Review State" />

### 2. Review UI State.

You will be presented with screenshots of the selected UI state:
<img src={useBaseUrl('img/visual/component-review-screenshots.png')} alt="Component Review Screenshot" />

If a baseline exists, a side-by-side view will be displayed with the baseline screenshot on the left-hand side and the current screenshot from the latest build on the right-hand side.

Changed UI states will include highlights of visual changes directly overlayed on the screenshots.

#### Optional: Ignore Changes

Screener gives the ability to easily ignore specific visual changes during the Review Flow. An example of where this could be useful, is ignoring content that continuously changes on each test run (such as dates).

To ignore a visual change:
1. Click on its highlight to open the Change List side panel.
2. Find the change in the Change List, and click Ignore.
3. Changes to this element will now be ignored in future tests.


How to Undo Ignore:
1. Follow the same steps above.
2. Find the ignored change.
3. Click "Undo Ignore".

#### Optional: Ignore Areas

Screener gives the ability to have areas excluded from the visual test. An example of where this could be useful, is a third-party widget or ads.

To ignore a visual area, you have two options. You can either:

Add a special class name to your application's HTML code on the element you want to ignore. The class name is `qa-screener-ignore`. Then the element, and everything contained within it, will be ignored.

OR, edit your `screener.config.js` file, and add an ignore option with its value set to a comma-delimited string of CSS Selectors that represent areas to be ignored.

Example of second option:

```bash
// screener.config.js
module.exports = {
  ...

  ignore: '.qa-ignore-date, .qa-ignore-ad'
}
```


### 3. Accept or Reject
After reviewing the UI state, you can either:

**Accept** it if the screenshots are as expected, which will set the current as the new baseline.
or **Reject** it if defects are found which need to be fixed.
Use the status dropdown to accept or reject:



ProTipUse Keyboard Shortcuts to accept / reject

To Accept, press:	Shift + Up Arrow
To Reject, press:	Shift + Down Arrow

### 4. Continue Reviewing
Continue reviewing the remaining UI states by clicking on the next/previous arrows:



ProTipUse Keyboard Shortcuts to navigate through UI states

To Go Next, press:	Right Arrow
To Go Previous, press:	Left Arrow
ProTipAccept All
Use the Accept All button to quickly set all filtered UI states to accepted.


### 5. Review Complete
When all UI states have been reviewed, the filtered state list will be empty:

The build status will be updated to Success when all UI states have been accepted.

The build status will be updated to Failure when there are rejected UI states.

Next Steps
Integrate into your CI process for continuous visual testing.





## Baseline Branching and Merging

Learn How To Pull Baseline When Branching & Auto-Accept When Merging When working with features branches, Screener can save you time and optimize your workflow by automating the following:

Automatically Accept updates when merging to or from the base branch
When merging an accepted base branch into a feature branch, Screener auto-accepts UI states that match the latest base branch test. And when merging into the base branch, Screener auto-accepts UI states that match the latest accepted feature branch test.

Automatically pull initial baseline from the base branch
This is useful for having a set of UI states to initially compare a new branch against. For example, if you create a new feature branch based off of the main branch, and you have a set of UI states on the main branch, you can then compare the new branch's visual changes to the main branch's UI states.

What this means:

Accept Once: no need to accept again when merging accepted updates from your base branch into a feature branch.
Faster Workflow: no need to re-review UI states or re-run builds to pass again.

Follow the steps below to enable in your project:

Setup Steps

Integrate Screener into your CI process so that visual tests are automatically run when branching or merging.

Set the `baseBranch` option in your `screener.config.js` file to the name of your base branch:

```bash
// screener.config.js
module.exports = {
  ...

  baseBranch: 'main'
}
```


## Viewing UI Change Details

Changed UI states will include highlights of visual changes directly overlayed on the screenshots.

Screener automatically organizes these changes into 4 categories:

Structure	Structural changes are when new visual items are added, or old items are removed.
Layout	Layout changes are when visual items change position or dimension.
Style	Style changes are when css styling gets updated, such as font sizes, color, etc.
Content	Content changes are when text or graphics get updated.
The Change List
Each change in Screener has additional details that can be viewed to help with debugging. For example:

View the specific CSS property that changed.
View a text diff of content changes.
These details can be viewed in the Change List, which can be opened by clicking on a change highlight:



## Viewing UI State History

Screener provides the ability to view the recent visual history of each UI state, as well as who reviewed and whether they accepted or rejected the state.

This is useful for:

Seeing how a UI state has changed over time.
Knowing who reviewed previously, and what was accepted or rejected.
The visual history can be viewed by opening the side panel in a UI state, and selecting the History tab:
