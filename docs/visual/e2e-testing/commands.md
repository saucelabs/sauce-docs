---
id: commands
title: Visual E2E Commands Reference
sidebar_label: Commands
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Visual commands can be integrated into existing WebDriver test code simply and safely without needing to install anything.

A Visual command is simply a JavaScript comment sent over WebDriver using the execute command.


## Init Command

The Init command (`/*@visual.init*/`) is used to initialize and name a Visual test. This command must be added before any snapshot commands. It can be used multiple times in a browser session to initialize multiple visual tests.

### Arguments

Here are the available Init arguments:

---
#### `name`
__Value Type__: string<br/>
__Required__: yes<br/>
__Description__: name of visual test

---
#### `options`
__Value Type__: object<br/>
__Required__: no<br/>
__Description__: Init command options. Options available:
* `ignore`: comma-delimited list of css-selectors to ignore in all snapshots in test.<br/>
__Example__:
  ```java
  { ignore: '.selector' }
  ```
---

### Code Snippets

<Tabs
  defaultValue="JavaScript"
  values={[
    {label: 'JavaScript', value: 'JavaScript'},
    {label: 'Java', value: 'Java'},
    {label: 'Python', value: 'Python'},
    {label: 'Ruby', value: 'Ruby'},
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


## Snapshot Command

The Snapshot command (`/*@visual.snapshot*/`) is used to capture a visual snapshot. This JS comment can be added into your code wherever you want a snapshot to be taken, and can be used multiple times.

The above Init command must be called first before any snapshots are taken, or an error will occur.

### Arguments

Here are the available Snapshot arguments:

---
#### `name`
__Value Type__: string<br/>
__Required__: yes<br/>
__Description__: name of Snapshot.

---
#### `options`
__Value Type__: object<br/>
__Required__: no<br/>
__Description__: Snapshot command options. Options available:
* `ignore`: comma-delimited list of css-selectors to ignore in snapshot.
* `cropTo`: single css-selector to crop the snapshot to.
* `scrollAndStitchScreenshot`: boolean option to capture a full-page screenshot using a scrolling and stitching strategy instead of using native browser full-page screenshot capabilities.

__Example__:
  ```java
  { ignore: '.selector', cropTo: '#header' }
  ```
---

### Code Snippets

<Tabs
  defaultValue="JavaScript"
  values={[
    {label: 'JavaScript', value: 'JavaScript'},
    {label: 'Java', value: 'Java'},
    {label: 'Python', value: 'Python'},
    {label: 'Ruby', value: 'Ruby'},
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
<br/>

## End Command

The End command (`/*@visual.end*/`) is used to wait and get visual results. This command should be the last visual command in your browser session, used after all your visual snapshots.

The response will contain the following properties:

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
    The test status. Possible values: <code>success</code>, <code>failure</code>, <code>error</code>, <code>timeout</code>, <code>cancelled</code>.
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
    List of all snapshots, including name, status and URL. <strong>NOTE</strong>: URLs are not permalinks; URL will direct to the latest results for the snapshot.
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
<br/>

### Code Snippets

<Tabs
  defaultValue="JavaScript"
  values={[
    {label: 'JavaScript', value: 'JavaScript'},
    {label: 'Java', value: 'Java'},
    {label: 'Python', value: 'Python'},
    {label: 'Ruby', value: 'Ruby'},
    {label: 'C#', value: 'C#'},
  ]}>

<TabItem value="JavaScript">

WebDriverIO Example:

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
<br/>

### Sample Responses

<Tabs
  defaultValue="Successful Response"
  values={[
    {label: 'Successful Response', value: 'Successful Response'},
    {label: 'Failure Response', value: 'Failure Response'},
  ]}>

<TabItem value="Successful Response">

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
<TabItem value="Failure Response">

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
