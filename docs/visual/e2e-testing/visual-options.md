---
id: visual-options
title: Visual E2E Options Reference
sidebar_label: Visual Options
hide_table_of_contents: true
---

## Options for `sauce:visual` capability

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
    projectName
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
    apiKey
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
    viewportSize
   </td>
   <td>
    String
   </td>
   <td>
    No
   </td>
   <td>
    A &lt;width>x&lt;height> representation of desired viewport size.
<p>Example: "1024x768".</p>
   </td>
   <td>
    <code>"1024x768"</code>
   </td>
  </tr>
  <tr>
   <td>
    branch
   </td>
   <td>
    String
   </td>
   <td>
    No
   </td>
   <td>
    Branch or environment name.
<p>Example: "main"</p>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>
    baseBranch
   </td>
   <td>
    String
   </td>
   <td>
    No
   </td>
   <td>
    Branch name of project's base branch. Used for <a href="https://screener.io/v2/docs/visual-e2e/baseline-branch">baseline branching and merging</a>.
<p>Example: "main"</p>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>
    diffOptions
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
<li><strong>structure</strong>: enable or disable <a href="https://screener.io/v2/docs/visual-e2e/change-details">structural changes</a>. Defaults to true.</li>
<li><strong>layout</strong>: enable or disable <a href="https://screener.io/v2/docs/visual-e2e/change-details">layout changes</a>. Defaults to true.</li>
<li><strong>style</strong>: enable or disable <a href="https://screener.io/v2/docs/visual-e2e/change-details">style changes</a>. Defaults to true.</li>

<li><strong>content</strong>: enable or disable <a href="https://screener.io/v2/docs/visual-e2e/change-details">content changes</a>. Defaults to true.</li>

<li><strong>minLayoutPosition</strong>: Optional threshold for Layout position changes (in css pixels).</li>

<li><strong>minLayoutDimension</strong>: Optional threshold for Layout dimension changes (in css pixels).</li>

<li><strong>minShiftGraphic</strong>: Optional threshold for pixel shifts in graphics (in css pixels).</li>
</ul>
   </td>
   <td><code>&#123;</code>
<p><code>  structure: true,</code></p>
<p><code>  layout: true,</code></p>
<p><code>  style: true,</code></p>
<p><code>  content: true,</code></p>
<p><code>  minLayoutPosition: 4,</code></p>
<p><code>  minLayoutDimension: 10</code></p>
<p><code>  minShiftGraphic: 2</code></p>
<p><code>&#125;</code></p>
   </td>
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
    <p>Example: "#some-id, .some-selector"</p>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>
    failOnNewStates
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
    alwaysAcceptBaseBranch
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
    disableBranchBaseline
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
    scrollAndStitchScreenshots
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
    disableCORS
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
    iframes
<p>This is a Beta feature and may be unstable.</p>
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
    iframesOptions
<p>This is a Beta feature and may be unstable.</p>
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
   <td><code>&#123;</code>
<p><code>  maxFrames: Infinity</code></p>
<p><code>&#125;</code></p>
   </td>
  </tr>
</table>
