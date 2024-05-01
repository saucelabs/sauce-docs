---
id: commands-options
title: Visual E2E Testing Reference
sidebar_label: Commands and Options
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::warning Screener End-of-life

The Screener visual testing solution is going to be discontinued on May 31st, 2024. You can migrate to the new Sauce Labs Visual Testing solution by following the [integration steps](/visual-testing/).

If you have any questions, please reach out to your Customer Success Manager or Sauce Labs Support.
:::

## Visual E2E Commands

Screener's Visual E2E commands can be integrated into existing WebDriver test code simply and safely. Each command is simply a JavaScript comment placed in a WebDriver execute command &#8212; no need to install anything.

### Init command

The Init command (`/*@visual.init*/`) is used to initialize and name a Visual test. This command must be added before any [snapshot commands](/visual/e2e-testing/commands-options/#snapshot-command). It can be used multiple times in a browser session to initialize multiple visual tests.

#### Arguments

<table>
  <tr>
   <td><strong>Argument</strong></td>
   <td><strong>Type</strong></td>
   <td><strong>Required</strong></td>
   <td><strong>Description</strong></td>
  </tr>
  <tr>
   <td><code>name</code></td>
   <td>String</td>
   <td>Yes</td>
   <td>Name of Visual test</td>
  </tr>
  <tr>
   <td><code>options</code></td>
   <td>Object</td>
   <td>No</td>
   <td>
    <div>Init command options.</div>
    <p>Options available:</p>
    <ul>
      <li><code>ignore</code>: comma-delimited list of css-selectors to ignore in all snapshots in test.</li>
    </ul>

```java title="Example"
{ ignore: '.selector' }
```

   </td>
  </tr>
</table>

#### Code Snippets

<Tabs
defaultValue="JS/WebdriverIO"
values={[
{label: 'JS/WebdriverIO', value: 'JS/WebdriverIO'},
{label: 'Java', value: 'Java'},
{label: 'Python', value: 'Python'},
{label: 'Ruby', value: 'Ruby'},
{label: 'C#', value: 'C#'},
]}>

<TabItem value="JS/WebdriverIO">

```javascript
browser.execute('/*@visual.init*/', 'My Visual Test')
browser.execute('/*@visual.init*/', 'My Visual Test', { ignore: '.selector' })
```

</TabItem>
<TabItem value="Java">

```java
((JavascriptExecutor) driver).executeScript("/*@visual.init*/", "My Visual Test");
```

</TabItem>
<TabItem value="Python">

```py
self.driver.execute_script('/*@visual.init*/', 'My Visual Test')
```

</TabItem>
<TabItem value="Ruby">

```rb
driver.execute_script('/*@visual.init*/', 'My Visual Test')
```

</TabItem>
<TabItem value="C#">

```csharp
((IJavaScriptExecutor) driver).ExecuteScript("/*@visual.init*/", "My Visual Test");
```

</TabItem>
</Tabs>

### Snapshot command

The Snapshot command (`/*@visual.snapshot*/`) is used to capture a visual snapshot. This JS comment can be added into your code wherever you want a snapshot to be taken, and can be used multiple times.

The above Init command must be called first before any snapshots are taken, or an error will occur.

#### Arguments

<table>
  <tr>
   <td><strong>Argument</strong></td>
   <td><strong>Type</strong></td>
   <td><strong>Required</strong></td>
   <td><strong>Description</strong></td>
  </tr>
  <tr>
   <td>name</td>
   <td>String</td>
   <td>Yes</td>
   <td>Name of Snapshot</td>
  </tr>
  <tr>
   <td>options</td>
   <td>Object</td>
   <td>No</td>
   <td>
      <div>Snapshot command options.</div>
      <p>Options available:</p>
      <ul>
      <li><code>ignore</code>: comma-delimited list of css-selectors to ignore in snapshot.</li>
      <li><code>cropTo</code>: single css-selector to crop the snapshot to.</li>
      <li><code>scrollAndStitchScreenshot</code>: boolean option to capture a full-page screenshot using a scrolling and stitching strategy instead of using native browser full-page screenshot capabilities.</li>
      </ul>
   </td>
  </tr>
</table>

#### Code Snippets

<Tabs
defaultValue="JS/WebdriverIO"
values={[
{label: 'JS/WebdriverIO', value: 'JS/WebdriverIO'},
{label: 'Java', value: 'Java'},
{label: 'Python', value: 'Python'},
{label: 'Ruby', value: 'Ruby'},
{label: 'C#', value: 'C#'},
]}>

<TabItem value="JS/WebdriverIO">

```javascript
browser.execute('/*@visual.snapshot*/', 'State Name')
```

Example with <code>ignore</code> option:

```javascript
browser.execute('/*@visual.snapshot*/', 'State Name', { ignore: '.selector' })
```

Example with <code>cropTo</code> option:

```javascript
browser.execute('/*@visual.snapshot*/', 'State Name', {
ignore: '.selector',
cropTo: '#header'
})
```

Example with <code>scrollAndStitchScreenshot</code> option:

```javascript
browser.execute('/*@visual.snapshot*/', 'State Name', {
ignore: '.selector',
cropTo: '#header',
scrollAndStitchScreenshot: true
})
```

</TabItem>
<TabItem value="Java">

```java
((JavascriptExecutor) driver).executeScript("/*@visual.snapshot*/", "State Name");
```

Example with ignore option:

```java
HashMap options = new HashMap();
options.put("ignore", ".selector");
((JavascriptExecutor) driver).executeScript("/*@visual.snapshot*/", "State Name", options);
```

</TabItem>
<TabItem value="Python">

```py
self.driver.execute_script('/*@visual.snapshot*/', 'State Name')
```

</TabItem>
<TabItem value="Ruby">

```rb
driver.execute_script('/*@visual.snapshot*/', 'State Name')
```

</TabItem>
<TabItem value="C#">

```csharp
((IJavaScriptExecutor) driver).ExecuteScript("/*@visual.snapshot*/", "State Name");
```

Example with ignore option:

```csharp
var ignoredElement = new Dictionary<string, object>();
ignoredElement.Add("ignore", "#login_button_container");
JsExecutor.ExecuteScript("/*@visual.snapshot*/", "Ignore on Snapshot", ignoredElement);
```

Example with <code>cropTo</code> option:

```csharp
var croppedElement = new Dictionary<string, object>();
croppedElement.Add("cropTo", ".bot_column");
JsExecutor.ExecuteScript("/*@visual.snapshot*/", "cropTo", croppedElement);
```

</TabItem>
</Tabs>
<br/>

### End command

The End command (`/*@visual.end*/`) is used to wait and get visual results. This command should be the last visual command in your browser session, used after all your visual snapshots.

The response will contain the following properties:

<table>
  <tr>
   <td>
    <strong>passed</strong>
   </td>
   <td>Whether or not the test passed.</td>
  </tr>
  <tr>
   <td>
    <strong>status</strong>
   </td>
   <td>
    <div>
      The test status. Possible values:
      <code>success</code>, <code>failure</code>, <code>error</code>, <code>timeout</code>, <code>cancelled</code>.
    </div>
   </td>
  </tr>
  <tr>
   <td>
    <strong>totals</strong>
   </td>
   <td>
    <div>Visual regression result totals.</div>
   </td>
  </tr>
  <tr>
   <td>
    <strong>states</strong>
   </td>
   <td>
    <div>
      {`List of all snapshots, including name, status and URL. `}
      <strong>NOTE</strong>
      {`: URLs are not permalinks; URL will direct to the latest results for the snapshot.`}
    </div>
   </td>
  </tr>
  <tr>
   <td>
    <strong>message</strong>
   </td>
   <td>
    <div>Error message.</div>
   </td>
  </tr>
</table>
<br/>

#### Code Snippets

<Tabs
defaultValue="JS/WebdriverIO"
values={[
{label: 'JS/WebdriverIO', value: 'JS/WebdriverIO'},
{label: 'Java', value: 'Java'},
{label: 'Python', value: 'Python'},
{label: 'Ruby', value: 'Ruby'},
{label: 'C#', value: 'C#'},
]}>

<TabItem value="JS/WebdriverIO">

```javascript
const result = browser.execute('/*@visual.end*/')
assert.ok(result.passed, result.message)
```

</TabItem>
<TabItem value="Java">

```java
Map response = (Map)((JavascriptExecutor) driver).executeScript("/*@visual.end*/");
Assert.assertTrue((Boolean)response.get("passed"), (String)response.get("message"));
```

</TabItem>
<TabItem value="Python">

```py
result = self.driver.execute_script('/*@visual.end*/')
assert result['passed'] is True
```

</TabItem>
<TabItem value="Ruby">

```rb
result = driver.execute_script('/*@visual.end*/')
expect(result['passed']).to be_truthy, result['message']
```

</TabItem>
<TabItem value="C#">

```csharp
var response = ((IJavaScriptExecutor) driver).ExecuteScript("/*@visual.end*/") as Dictionary;
Assert.IsTrue((Boolean)response["passed"], (String)response["message"]);
```

</TabItem>
</Tabs>

<br/>

#### Example Responses

<Tabs
defaultValue="Success"
values={[
{label: 'Success', value: 'Success'},
{label: 'Failure', value: 'Failure'},
]}>

<TabItem value="Success">

```java
{
  passed: true,
  status: 'success',
  totals: {new: 0, changed: 0, accepted: 2, rejected: 0, all: 2},
  states: [
    {name: 'State 1', groupName: 'Test 1', status: 'accepted', url: '...'}
    {name: 'State 2', groupName: 'Test 1', status: 'accepted', url: '...'}
  ],
  message: null
}
```

</TabItem>
<TabItem value="Failure">

```java
{
  passed: false,
  status: 'failure',
  totals: {new: 0, changed: 1, accepted: 1, rejected: 0, all: 2},
  states: [
    {name: 'State 1', groupName: 'Test 1', status: 'accepted', url: '...'}
    {name: 'State 2', groupName: 'Test 1', status: 'changed', url: '...'}
  ],
  message: '1 visual regression found. Test failed.'
}
```

</TabItem>
</Tabs>

## `sauce:visual` Capability Options

Below are the available options that you can define with the [`sauce:visual`](/visual/e2e-testing/workflow/baseline-branch) capability.

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
<li><code>structure</code>: enable or disable <a href="/visual/e2e-testing/workflow/change-details">structural changes</a>. Defaults to true.</li>
<li><code>layout</code>: enable or disable <a href="/visual/e2e-testing/workflow/change-details">layout changes</a>. Defaults to true.</li>
<li><code>style</code>: enable or disable <a href="/visual/e2e-testing/workflow/change-details">style changes</a>. Defaults to true.</li>
<li><code>content</code>: enable or disable <a href="/visual/e2e-testing/workflow/change-details">content changes</a>. Defaults to true.</li>
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
    <code>ignore</code>
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
    <code>iframes</code> <span className="sauceGreen">Beta</span>
   </td>
   <td>
    Boolean
   </td>
   <td>
    No
   </td>
   <td>
    Option to enable the capturing and comparing of iframes content. Pseudo states on iframes like hover, focus, focus-within, and active are not supported.
   </td>
   <td>
    <code>false</code>
   </td>
  </tr>
  <tr>
   <td>
    <code>iframesOptions</code> <span className="sauceGreen">Beta</span>
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
