---
id: continuous-integration
title: Continuous Integration
sidebar_label: Continuous Integration
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


Get continuous visual test automation by integrating into your Continuous Integration (CI) process.

If your tests are already integrated into CI, get visual results returned into your tests and pass or fail your builds depending on visual regressions found.


## 1. Return Visual results into your WebDriver test(s)

To get the test results, add the [`@visual.end` command](/visual/e2e-testing/commands) right before ending your test session. The returned result can then be asserted to pass or fail your test.

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
const result = driver.execute('/*@visual.end*/');
assert.ok(result.passed, result.message);
```

</TabItem>
<TabItem value="Java">

```java
Map response = (Map)js.executeScript("/*@screener.end*/");
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
result = driver.execute_script '/*@visual.end*/'
expect(result.passed).to eq(true)
```

</TabItem>
<TabItem value="C#">

```csharp
dynamic result = js.ExecuteScript("/*@visual.end*/");
Assert.IsTrue(result.passed, result.message);
```

</TabItem>
</Tabs>

For more details on results returned, view the [Visual Commands](/visual/e2e-testing/commands) documentation.


## 2. Integrate your CI Build

Associate your Visual tests with your CI build number by setting the build option in your capabilities.

Below are build number environment variables for various CI tools:

<Tabs
  defaultValue="Jenkins"
  values={[
    {label: 'Jenkins', value: 'Jenkins'},
    {label: 'CircleCI', value: 'CircleCI'},
    {label: 'TravisCI', value: 'TravisCI'},
    {label: 'GitLab', value: 'GitLab'},
    {label: 'Codeship', value: 'Codeship'},
    {label: 'Buildkite', value: 'Buildkite'},
    {label: 'Drone', value: 'Drone'},
  ]}>

<TabItem value="Jenkins">

```java
capabilities: {
  ...
  'sauce:options': {
    build: process.env.BUILD_NUMBER
  }
}
```

</TabItem>
<TabItem value="CircleCI">

```java
capabilities: {
  ...
  'sauce:options': {
    build: process.env.CIRCLE_BUILD_NUM
  }
}
```

</TabItem>
<TabItem value="TravisCI">

```java
capabilities: {
  ...
  'sauce:options': {
    build: process.env.TRAVIS_BUILD_NUMBER
  }
}
```

</TabItem>
<TabItem value="GitLab">

```java
capabilities: {
  ...
  'sauce:options': {
    build: process.env.CI_PIPELINE_ID
  }
}
```

</TabItem>
<TabItem value="Codeship">

```java
capabilities: {
  ...
  'sauce:options': {
    build: process.env.CI_BUILD_NUMBER
  }
}
```

</TabItem>
<TabItem value="Buildkite">

```java
capabilities: {
  ...
  'sauce:options': {
    build: process.env.BUILDKITE_BUILD_NUMBER
  }
}
```

</TabItem>
<TabItem value="Drone">

```java
capabilities: {
  ...
  'sauce:options': {
    build: process.env.DRONE_BUILD_NUMBER
  }
}
```

</TabItem>
</Tabs>


## Next Steps

* [Invite users](/visual/acct-team-mgmt) to your project.
* [Troubleshooting](/visual/e2e-testing/troubleshooting).
