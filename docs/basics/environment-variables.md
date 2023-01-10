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

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up))
- Your Sauce Labs [Username and Access Key](https://app.saucelabs.com/user-settings)

## Setting Up Environment Variables

<Tabs
    defaultValue="Mac/Linux"
    values={[
      {label: 'Mac/Linux', value: 'Mac/Linux'},
      {label: 'Windows', value: 'Windows'},
    ]}>

<TabItem value="Mac/Linux">

Sauce Connect Proxy enviroment variables may be added to one of the user environment configuration files, such as `~/.bash_profile`.

1. Open `~/.bash_profile` in your prefered text editor.
2. Add the variables

```bash
export SAUCE_USERNAME="your Sauce username"
export SAUCE_ACCESS_KEY="your Sauce access key"
```

3. Start a new shell or a new terminal.
4. Confirm that your environment variables have been set by typing `echo $SAUCE_USERNAME` in your terminal. The response should be your username value.

</TabItem>
<TabItem value="Windows">

1. Open the Control Panel and click the System icon to open the **System Properties** dialog.
2. Click **Environment Variables** to open the **Environment Variables** dialog.
3. In the **User variables** section, click **New** to open the **New System Variable** dialog.
4. For **Variable name**, enter **SAUCE_USERNAME** and for **Variable value**, enter your Sauce username and then click **OK**.
5. Repeat 3-4 to set up the **SAUCE_ACCESS_KEY** or any other environment variable.
6. Confirm that your environment variables have been set by typing `echo %SAUCE_USERNAME%` in your terminal. The response should be your username value. Then do the same for your access key.

</TabItem>
</Tabs>

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
https://github.com/saucelabs-training/demo-java/blob/docs-1.0/selenium-examples/src/test/java/com/saucedemo/selenium/demo/SeleniumTest.java#L34-L35
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
