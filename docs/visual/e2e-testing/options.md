---
id: options
title: Visual E2E Options Reference
sidebar_label: Options
hide_table_of_contents: true
---

## `sauce:visual` Capability Options

<table>
  <tr>
   <td>
    <strong>Key</strong>
   </td>
   <td>
    <strong>Type</strong>
   </td>
   <td>
    <strong>Required</strong>
   </td>
   <td>
    <strong>Description</strong>
   </td>
   <td>
    <strong>Default</strong>
   </td>
  </tr>
  <tr>
   <td>
    <code>projectName</code>
   </td>
   <td>
    String
   </td>
   <td>
    Yes
   </td>
   <td>
    Project name.
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>
    <code>apiKey</code>
   </td>
   <td>
    String
   </td>
   <td>
    Yes
   </td>
   <td>
    API Key for user's Screener account.
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>
    <code>viewportSize</code>
   </td>
   <td>
    String
   </td>
   <td>
    No
   </td>
   <td>
    A &lt;width>x&lt;height> representation of desired viewport size.
<p>Example: <code>1024x768</code>.</p>
   </td>
   <td>
    <code>"1024x768"</code>
   </td>
  </tr>
  <tr>
   <td>
    <code>branch</code>
   </td>
   <td>
    String
   </td>
   <td>
    No
   </td>
   <td>
    Branch or environment name.
<p>Example: <code>main</code>.</p>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>
    <code>baseBranch</code>
   </td>
   <td>
    String
   </td>
   <td>
    No
   </td>
   <td>
    Branch name of project's base branch. Used for <a href="/visual/e2e-testing/workflow/baseline-branch">baseline branching and merging</a>.
<p>Example: <code>main</code>.</p>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>
    <code>diffOptions</code>
   </td>
   <td>
    Object
   </td>
   <td>
    No
   </td>
   <td>
    Visual diff options to control validations.
<p>Options available:</p>
<ul>
<li><code>structure</code>: enable or disable <a href="/visual/change-details">structural changes</a>. Defaults to true.</li>
<li><code>layout</code>: enable or disable <a href="/visual/change-details">layout changes</a>. Defaults to true.</li>
<li><code>style</code>: enable or disable <a href="/visual/change-details">style changes</a>. Defaults to true.</li>
<li><code>content</code>: enable or disable <a href="/visual/change-details">content changes</a>. Defaults to true.</li>
<li><code>minLayoutPosition</code>: Optional threshold for Layout position changes (in css pixels).</li>
<li><code>minLayoutDimension</code>: Optional threshold for Layout dimension changes (in css pixels).</li>
<li><code>minShiftGraphic</code>: Optional threshold for pixel shifts in graphics (in css pixels).</li>
</ul>
   </td><td><code>

```java
{
  structure: true,
  layout: true,
  style: true,
  content: true,
  minLayoutPosition: 4,
  minLayoutDimension: 10
  minShiftGraphic: 2
}
```

  </code></td>
  </tr>
  <tr>
   <td>
    ignore
   </td>
   <td>
    String
   </td>
   <td>
    No
   </td>
   <td>
    A comma-delimited list of css selectors to ignore when performing visual diffs.
    <p>Example: <code>#some-id, .some-selector</code>.</p>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>
    <code>failOnNewStates</code>
   </td>
   <td>
    Boolean
   </td>
   <td>
    No
   </td>
   <td>
    Option to set build to failure when new states are found, and to disable using new states as a baseline.
    <p>This option defaults to true, and can be set to false if user wants new states to automatically be the visual baseline without needing to review and accept them.</p>
   </td>
   <td>
    <code>true</code>
   </td>
  </tr>
  <tr>
   <td>
    <code>alwaysAcceptBaseBranch</code>
   </td>
   <td>
    Boolean
   </td>
   <td>
    No
   </td>
   <td>
    Option to automatically accept new and changed states in base branch. Assumes base branch should always be correct.
   </td>
   <td>
    <code>false</code>
   </td>
  </tr>
  <tr>
   <td>
    <code>disableBranchBaseline</code>
   </td>
   <td>
    Boolean
   </td>
   <td>
    No
   </td>
   <td>
    Option to disable independent baseline for each feature branch, and only use base branch as baseline. Must be used with "baseBranch" option.
   </td>
   <td>
    <code>false</code>
   </td>
  </tr>
  <tr>
   <td>
    <code>scrollAndStitchScreenshots</code>
   </td>
   <td>
    Boolean
   </td>
   <td>
    No
   </td>
   <td>
    Option to capture a full-page screenshot using a scrolling and stitching strategy instead of using native browser full-page screenshot capabilities.
   </td>
   <td>
    <code>false</code>
   </td>
  </tr>
  <tr>
   <td>
    <code>disableCORS</code>
   </td>
   <td>
    Boolean
   </td>
   <td>
    No
   </td>
   <td>
    Option to disable adding CORS headers. By default, CORS headers are set for all cross-origin requests.
   </td>
   <td>
    <code>false</code>
   </td>
  </tr>
  <tr>
   <td>
    <code>iframes</code>
<p><button class="sauceGold">IN BETA</button></p>
   </td>
   <td>
    Boolean
   </td>
   <td>
    No
   </td>
   <td>
    Option to enable the capturing and comparing of iframes content.
   </td>
   <td>
    <code>false</code>
   </td>
  </tr>
  <tr>
   <td>
    <code>iframesOptions</code>
<p><button class="sauceGold">IN BETA</button></p>
   </td>
   <td>
    Object
   </td>
   <td>
    No
   </td>
   <td>
    Options to control the capturing and comparing of iframes content.
   </td>
   <td><code>

   ```java
   {
     maxFrames: Infinity
   }
   ```
</code>
   </td>
  </tr>
</table>
