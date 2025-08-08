---
id: environment-variables
title: Using Environment Variables for Authentication Credentials
sidebar_label: Using Environment Variables
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

As a best practice, we recommend setting your Sauce Labs authentication credentials as environment variables on your local system, that can then be referenced from in your tests. This provides an extra layer of security for your tests, and also enables other members of your development and testing team to write tests that authenticate against a single account. 

For a list of Sauce Connect environment variables, see [Environment Variables](/dev/cli/sauce-connect-5/run/).

## What You’ll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up))
- [Username and access key](https://app.saucelabs.com/user-settings) of your Sauce Labs user account.
  - Alternatively, you can use the credentials of a [service account](/basics/acct-team-mgmt/managing-service-accounts). The username and access key for a service account are provided during [its creation](/basics/acct-team-mgmt/managing-service-accounts/#creating-a-service-account).

## Setting Up Environment Variables

<Tabs>
<TabItem value="macOS/Linux" label="macOS and Linux" default>

You can persist Sauce Connect Proxy environment variables by adding them to one of your user environment configuration files, such as `.bash_profile` or `.zshrc`.

1. Open `~/.bash_profile` or `~/.zshrc` in your preferred text editor.
2. Add the variables
   ```zsh
   export SAUCE_USERNAME="your Sauce username"
   export SAUCE_ACCESS_KEY="your Sauce access key"
   ```
3. Start a new shell or a new terminal.
4. To confirm that your environment variables are set, enter `echo $SAUCE_USERNAME` in your terminal. The expected response is your username value.

</TabItem>
<TabItem value="Windows" label="Windows">

1. Open the Control Panel and click the System icon to open the **System Properties** dialog.
2. Click **Environment Variables** to open the **Environment Variables** dialog.
3. In the **User variables** section, click **New** to open the **New System Variable** dialog.
4. For **Variable name**, enter **SAUCE_USERNAME** and for **Variable value**, enter your Sauce username and then click **OK**.
5. Repeat 3-4 to set up the **SAUCE_ACCESS_KEY** or any other environment variable.
6. To confirm that your environment variables are set, enter `echo $SAUCE_USERNAME` in your terminal. The expected response is your username value.

</TabItem>
</Tabs>

## Referencing Environment Variables in Test Scripts

Once you've set up the environment variables for your credentials, you need to reference them in the test scripts that you want to run on Sauce. You can find examples of test scripts that use environment variables for authentication in the demo directory for each language in the [Sauce Labs Training repository](https://github.com/saucelabs-training) on GitHub.

Below are examples of how to set environment variables in a given language/framework:

<Tabs>
<TabItem value="java" label="Java" default>

```java reference title="Authenticating with Environment Variables"
https://github.com/saucelabs-training/demo-java/blob/docs-1.0/selenium-examples/src/test/java/com/saucedemo/selenium/demo/SeleniumTest.java#L34-L35
```

</TabItem>
<TabItem value="nodejs" label="Node.js">

```javascript reference title="Authenticating with Environment Variables"
https://github.com/saucelabs-training/demo-js/blob/docs-1.0/webdriverio/webdriver/examples/w3c/test/configs/wdio.saucelabs.conf.js#L7-L8
```

</TabItem>
<TabItem value="python" label="Python">

```python reference title="Authenticating with Environment Variables"
https://github.com/saucelabs-training/demo-python/blob/docs-1.0/examples/w3c-examples/test_pytest_chrome.py#L9-L10
```

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby reference title="Authenticating with Environment Variables"
https://github.com/saucelabs-training/demo-ruby/blob/docs-1.0/selenium-examples/rspec/spec/spec_helper.rb#L23-L24
```

</TabItem>
<TabItem value="csharp" label="C#">

```csharp reference title="Authenticating with Environment Variables"
https://github.com/saucelabs-training/demo-csharp/blob/docs-1.0/SauceExamples/Common/SauceLabs/SauceUser.cs#L7-L11
```

</TabItem>
</Tabs>
