---
id: visual-commands
title: Visual Commands
sidebar_label: Visual Commands
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Visual commands can be integrated into existing WebDriver test code simply and safely without needing to install anything.

A Visual command is simply a JavaScript comment sent over WebDriver using the execute command.


## `/*@visual.init*/` (Init Command)

The Init command is used to initialize and name a Visual test. This command must be added before any snapshot commands. It can be used multiple times in a browser session to initialize multiple visual tests.

Init Command Arguments:

<table>
  <tr>
   <td>
    <strong>Argument</strong>
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
  </tr>
  <tr>
   <td>
    <code>name</code>
   </td>
   <td>
    String
   </td>
   <td>
    Yes
   </td>
   <td>
    Name of Visual test
   </td>
  </tr>
  <tr>
   <td>
    <code>options</code>
   </td>
   <td>
    Object
   </td>
   <td>
    No
   </td>
   <td>
    Init command options.
    <p>Options available:</p>
    <ul>
    <li><strong>ignore</strong>: comma-delimited list of css-selectors to ignore in all snapshots in test.</li>
    </ul>
   <p>Example: <code>&#123; ignore: '.selector' &#125;</code></p>

   </td>
  </tr>
</table>


<Tabs
  defaultValue="JavaScript"
  values={[
    {label: 'JavaScript', value: 'JavaScript'},
    {label: 'Java', value: 'Java'},
    {label: 'Python', value: 'Python'},
    {label: 'Python', value: 'Ruby'},
    {label: 'C#', value: 'C#'},
  ]}>

<TabItem value="JavaScript">

WebDriverIO Example:

```javascript
browser.execute('/*@visual.init*/', 'My Visual Test');
browser.execute('/*@visual.init*/', 'My Visual Test', {ignore: '.selector'});
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


## `/*@visual.snapshot*/` (Snapshot Command)

The Snapshot command is used to capture a visual snapshot. This JS comment can be added into your code wherever you want a snapshot to be taken, and can be used multiple times.

The above Init command must be called first before any snapshots are taken, or an error will occur.


### Arguments:

<table>
  <tr>
   <td>
    <strong>Argument</strong>
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
  </tr>
  <tr>
   <td>
    name
   </td>
   <td>
    String
   </td>
   <td>
    Yes
   </td>
   <td>
    Name of Snapshot
   </td>
  </tr>
  <tr>
   <td>
    options
   </td>
   <td>
    Object
   </td>
   <td>
    No
   </td>
   <td>
    Snapshot command options.
Options available:
<ul>
<li><strong>ignore</strong>: comma-delimited list of css-selectors to ignore in snapshot.</li>
<li><strong>cropTo</strong>: single css-selector to crop the snapshot to.</li>
<li><strong>scrollAndStitchScreenshot</strong>: boolean option to capture a full-page screenshot using a scrolling and stitching strategy instead of using native browser full-page screenshot capabilities.</li></ul>
Example: <code>&#123; ignore: '.selector', cropTo: '#header' &#125;</code>
   </td>
  </tr>
</table>


<Tabs
  defaultValue="JavaScript"
  values={[
    {label: 'JavaScript', value: 'JavaScript'},
    {label: 'Java', value: 'Java'},
    {label: 'Python', value: 'Python'},
    {label: 'Python', value: 'Ruby'},
    {label: 'C#', value: 'C#'},
  ]}>

<TabItem value="JavaScript">

WebDriverIO Examples

```javascript
browser.execute('/*@visual.snapshot*/', 'State Name');

// example with ignore option
browser.execute('/*@visual.snapshot*/', 'State Name', {ignore: '.selector'});
```

</TabItem>
<TabItem value="Java">

```java
((JavascriptExecutor) driver).executeScript("/*@visual.snapshot*/", "State Name");

// example with ignore option
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

</TabItem>
</Tabs>



## `/*@visual.end*/` (End Command)

The End command is used to wait and get visual results. This command should be the last visual command in your browser session, used after all your visual snapshots.

The response contains the following properties:

<table>
  <tr>
   <td>
    <strong>passed</strong>
   </td>
   <td>
    Whether or not the test passed.
   </td>
  </tr>
  <tr>
   <td>
    <strong>status</strong>
   </td>
   <td>
    The test status. One of: success, failure, error, timeout, cancelled.
   </td>
  </tr>
  <tr>
   <td>
    <strong>totals</strong>
   </td>
   <td>
    Visual regression result totals.
   </td>
  </tr>
  <tr>
   <td>
    <strong>states</strong>
   </td>
   <td>
    List of all snapshots, including name, status and url.
Note: url's are not permalinks; url will direct to the latest results for the snapshot.
   </td>
  </tr>
  <tr>
   <td>
    <strong>message</strong>
   </td>
   <td>
    Error message.
   </td>
  </tr>
</table>


<Tabs
  defaultValue="JavaScript"
  values={[
    {label: 'JavaScript', value: 'JavaScript'},
    {label: 'Java', value: 'Java'},
    {label: 'Python', value: 'Python'},
    {label: 'Python', value: 'Ruby'},
    {label: 'C#', value: 'C#'},
  ]}>

<TabItem value="JavaScript">

### WebDriverIO Example

```javascript
const result = browser.execute('/*@visual.end*/');
assert.ok(result.passed, result.message);
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


### Response Examples

#### Successful response:

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

#### Failure Response

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
