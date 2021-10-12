---
id: environment-variables
title: Using Environment Variables for Authentication Credentials
sidebar_label: Using Environment Variables
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

As a best practice, we recommend setting your Sauce Labs authentication credentials as environment variables on your local system, that can then be referenced from within your tests. This provides an extra layer of security for your tests, and also enables other members of your development and testing team to write tests that will authenticate against a single account.

For a list of Sauce Connect Proxy environment variables, see [Environment Variables](/secure-connections/sauce-connect/setup-configuration/environment-variables).


## What You’ll Need

* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up))
* Your Sauce Labs [Username and Access Key](https://app.saucelabs.com/user-settings)


## Setting Up Environment Variables on macOS and Linux Systems
1. In Terminal mode, enter `vi ~/.bash_profile`, and then press **Return**.
2. Press i to insert text into your profile file.
3. Enter these lines:
  ```bash
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
    {label: 'NodeJS', value: 'nodejs'},
    {label: 'Python', value: 'python'},
    {label: 'Ruby', value: 'ruby'},
    {label: 'C#', value: 'csharp'},
  ]}>

<TabItem value="java">

```java reference title="Authenticating with Environment Variables"
https://github.com/saucelabs-training/demo-java/blob/docs-1.0/selenium-examples/src/test/java/com/saucedemo/selenium/demo/SeleniumTest.java#L34-35
```

</TabItem>
<TabItem value="nodejs">

```javascript reference title="Authenticating with Environment Variables"
https://github.com/saucelabs-training/demo-js/blob/docs-1.0/webdriverio/webdriver/examples/w3c/test/configs/wdio.saucelabs.conf.js#L7-L8
```

</TabItem>
<TabItem value="python">

```python reference title="Authenticating with Environment Variables"
https://github.com/saucelabs-training/demo-python/blob/docs-1.0/examples/w3c-examples/test_pytest_chrome.py#L9-L10
```

</TabItem>
<TabItem value="ruby">

```ruby reference title="Authenticating with Environment Variables"
https://github.com/saucelabs-training/demo-ruby/blob/docs-1.0/selenium-examples/rspec/spec/spec_helper.rb#L23-L24
```

</TabItem>
<TabItem value="csharp">

```csharp reference title="Authenticating with Environment Variables"
https://github.com/saucelabs-training/demo-csharp/blob/docs-1.0/SauceExamples/Common/SauceLabs/SauceUser.cs#L7-L11
```

</TabItem>

</Tabs>
