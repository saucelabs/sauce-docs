---
id: environment-variables
title: Using Environment Variables for Authentication Credentials
sidebar_label: Using Environment Variables
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

As a best practice, we recommend setting your Sauce Labs authentication credentials as environment variables on your local system, that can then be referenced from within your tests. This provides an extra layer of security for your tests, and also enables other members of your development and testing team to write tests that will authenticate against a single account.

## What You'll Need
* The SAUCE_USERN98i09AME and SAUCE_ACCESS_KEY specific to your Sauce Labs account. You can find them by logging into saucelabs.com and going to Account > User Settings.

## Setting Up Environment Variables on macOS and Linux Systems
1. In Terminal mode, enter `vi ~/.bash_profile`, and then press **Enter**.
2. Press i to insert text into your profile file.
3. Enter these lines:

```
export SAUCE_USERNAME="your Sauce username"
export SAUCE_ACCESS_KEY="your Sauce access key"
```

4. Press **Esc**.
5. Hold **Shift** and press **Z** twice (shift+Z+Z) to save your file and quit vi.
6. In the terminal, enter `source ~/.bash_profile`.

## Setting Up Environment Variables on Windows Systems
1. Click **Start** on the task bar.
2. In the Search programs and fields box, enter **Environment Variables**.
3. Click **Edit the environment variables**. This will open the **System Properties** dialog.
4. Click **Environment Variables**. This will open the **Environment Variables** dialog.
5. In the **User variables** section, click **New**. This will open the **New System Variable** dialog.
6. For **Variable name**, enter **SAUCE_USERNAME**.
7. For **Variable value**, enter your Sauce username.
8. Click **OK**.
9. Repeat 4 - 8 to set up the **SAUCE_ACCESS_KEY**.

## Referencing Environment Variables in Test Scripts
Once you've set up the environment variables for your credentials, you need to reference them within the test scripts that you want to run on Sauce. You can find examples of test scripts that use environment variables for authentication in the demo directory for each language in the [Sauce Labs Training repo](https://github.com/saucelabs-training) on GitHub.

Below are examples of how to set environment variables in a given language/framework:

<Tabs
  defaultValue="java"
  values={[
    {label: 'Java', value: 'java'},
    {label: 'C#', value: 'c#'},
    {label: 'NodeJS', value: 'nodejs'},
    {label: 'Ruby', value: 'ruby'},
    {label: 'Python', value: 'python'},
  ]}>

<TabItem value="java">

### JUnit
```
String sauceUserName = System.getenv("SAUCE_USERNAME");
String sauceAccessKey = System.getenv("SAUCE_ACCESS_KEY");
```
For a full example, see the [Sauce Labs Java repository](https://github.com/saucelabs-training/demo-java/tree/master/selenium-junit4-examples).

### TestNG
```
String sauceUserName = System.getenv("SAUCE_USERNAME");
String sauceAccessKey = System.getenv("SAUCE_ACCESS_KEY");
```

For a full example, see the [Sauce Labs Java repository](https://github.com/saucelabs-training/demo-java/tree/master/selenium-testng-examples).

</TabItem>

<TabItem value="c#">

### NUnit
```
var sauceUserName =
    Environment.GetEnvironmentVariable("SAUCE_USERNAME", EnvironmentVariableTarget.User);     
var sauceAccessKey =
    Environment.GetEnvironmentVariable("SAUCE_ACCESS_KEY", EnvironmentVariableTarget.User);
```

For a full example, see the [Sauce Labs C# repository](https://github.com/saucelabs-training/demo-csharp/tree/master/SauceExamples/SeleniumNunit).

</TabItem>

<TabItem value="nodejs">

### WebdriverIO
```
let username = process.env.SAUCE_USERNAME,
    accessKey = process.env.SAUCE_ACCESS_KEY,

```
For a full example, see the [Sauce Labs JS repository](https://github.com/saucelabs-training/demo-js/tree/main/webdriverio).

### Protractor-Jasmine
```
exports.config = {
    sauceUser: process.env.SAUCE_USERNAME,
    sauceKey: process.env.SAUCE_ACCESS_KEY,
```
For a full example, see the [Sauce Labs JS repository](https://github.com/saucelabs-training/demo-js/tree/main/protractor).

</TabItem>

<TabItem value="ruby">

### RSpec
```
username: ENV['SAUCE_USERNAME'],
accessKey: ENV['SAUCE_ACCESS_KEY']
```
For a full example, see the [Sauce Labs Ruby repository](https://github.com/saucelabs-training/demo-ruby/tree/master/selenium-examples/rspec).

</TabItem>

<TabItem value="python">

### PyTest
```
sauce_username = os.environ["SAUCE_USERNAME"]
sauce_access_key = os.environ["SAUCE_ACCESS_KEY"]
```
For a full example, see the [Sauce Labs Python repository](https://github.com/saucelabs-training/demo-python/tree/main/examples).

### unittest
```
sauce_username = os.environ["SAUCE_USERNAME"]
sauce_access_key = os.environ["SAUCE_ACCESS_KEY"]

```
For a full example, see the [Sauce Labs Python repository](https://github.com/saucelabs-training/demo-python/tree/main/examples).


</TabItem>

</Tabs>
