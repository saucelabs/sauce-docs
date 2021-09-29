---
id: headless
title: Sauce Headless Testing in the Cross-Browser Cloud
sidebar_label: Using Headless
---

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>{children}</span> );

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Sauce Headless is a container-based, lightweight, and scalable infrastructure solution for testing web apps on headless Chrome and Firefox browsers in our virtual device cloud. Test early in your development cycle on headless browsers to get fast pass/fail data on early pipeline component tests, sanity checks, and pull request tests.

There are a few key differences between setting up Sauce Headless tests versus setting up other [Sauce Labs automated web app tests](/web-apps), as described below.


## What You'll Need

<p> <Highlight color="#013a70">Enterprise Plans only</Highlight> </p>

The [latest version of Sauce Connect Proxy](/secure-connections/sauce-connect/installation), if you're using it to run Headless tests.

:::note
At this time, data from tests run in Headless mode is not available to the [Sauce Insights](/insights) analytics features.

:::

## Setup and Configuration

Sauce Headless provides headless Chrome and Firefox in the three most recent versions and the most recent version of Linux. 

### WebDriver Capabilities
You'll need to set desired capabilities in your test that are specific to headless testing, as shown in this example:

```
saucelabs_headless_chrome": {
      "request_timeout_options": {
        "timeout": 900000
      },
      "globals": {
        "waitForConditionTimeout": 60000,
        "waitForConditionPollInterval": 100
      },
      "use_ssl": true,
      "selenium_port": 443,
      "selenium_host": "us-east1.headless.saucelabs.com",
      "desiredCapabilities": {
        "browserName": "chrome",
        "version": "latest-2",
        "platform": "Linux",
        "javascriptEnabled": true
      }
    },

```

## Language Bindings

You can run Sauce Headless tests in a variety of programming languages and test frameworks. Here are some samples:

<Tabs
  defaultValue="java"
  values={[
    {label: 'Java', value: 'java'},
    {label: 'Python', value: 'python'},
    {label: 'node.js', value: 'node'},
    {label: 'Ruby', value: 'ruby'},
    {label: 'C#', value: 'csharp'},
  ]}>

<TabItem value="java">

__TestNG Example Walkthrough__

1. Head to [Sauce Labs Training: Java Example Scripts](https://github.com/saucelabs-training/demo-java) on GitHub and review the README page to ensure you have the prerequisite software.
2. Copy [this headless sample script](https://github.com/saucelabs-training/demo-java/blob/docs-1.0/selenium-testng-examples/src/test/java/com/saucedemo/selenium/testng/SampleHeadlessSauceTest.java) from our GitHub repo.
3. Resolve dependencies with Maven:
  ```bash
  $ mvn dependency:resolve
  ```
4. Export your Sauce Labs username and access key:
  ```bash
  export SAUCE_USERNAME=my-sauce-username
  export SAUCE_ACCESS_KEY=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxx2cy8f4
  ```
5. Run the following command:
  ```bash
  $ cd headless/
  $ mvn clean test -Dtest=SampleHeadlessSauceTest
  ```

<details><summary><strong>Click here to see a successful output example</strong></summary>

```bash
-------------------------------------------------------
 T E S T S
-------------------------------------------------------
Running SampleHeadlessSauceTest
Configuring TestNG with: org.apache.maven.surefire.testng.conf.TestNG652Configurator@1ff8b8f
May 31, 2019 11:46:23 AM org.openqa.selenium.remote.ProtocolHandshake createSession
INFO: Detected dialect: W3C
title of page is: Swag Labs
Tests run: 1, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 15.082 sec

Results :

Tests run: 1, Failures: 0, Errors: 0, Skipped: 0

[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time:  17.308 s
```

</details>

</TabItem>
<TabItem value="python">

__Pytest Example Walkthrough__

1. Head to [Sauce Labs Training: Python Example Scripts](https://github.com/saucelabs-training/demo-python) on GitHub and review the README page to ensure you have the prerequisite software.

2. Download or clone [this headless sample script](https://github.com/saucelabs-training/demo-python/blob/docs-1.0/examples/headless/test_demo.py) from the repo.
3. Install the following modules:
  ```bash
  pip install pytest pytest-xdist
  ```
4. Export your Sauce Labs username and access key:
  ```bash
  export SAUCE_USERNAME=my-sauce-username
  export SAUCE_ACCESS_KEY=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxx2cy8f4
  ```
5. Run the following command:
  ```bash
  pytest -n8 test_demo.py
  ```

 <details><summary>Click here to see a successful output example</summary>

 ```bash
 platform darwin -- Python 3.7.1, pytest-4.4.0, py-1.7.0, pluggy-0.12.0
 rootdir: /path/to/python/headless-examples
 plugins: forked-1.0.2, xdist-1.28.0
 gw0 [4] / gw1 [4] / gw2 [4] / gw3 [4] / gw4 [4] / gw5 [4] / gw6 [4] / gw7 [4]
 ....   
 ```

 </details>

</TabItem>
<TabItem value="node">

__WebdriverIO Example Walkthrough__

1. Head to [Sauce Labs Training: JavaScript Examples](https://github.com/saucelabs-training/demo-js) on GitHub and
review the README page to ensure you have the prerequisite software.
2. Download or clone one of [our headless test examples](https://github.com/saucelabs-training/demo-js/blob/docs-1.0/webdriverio/webdriver/examples/headless) from the repo.
3. Navigate to the headless-examples directory and install node package dependencies:
  ```bash
  $ cd headless-examples/
  $ npm install
  ```
4. Export your Sauce Labs username and access key:
  ```bash
  export SAUCE_USERNAME=my-sauce-username
  export SAUCE_ACCESS_KEY=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxx2cy8f4
  ```
5. Run the following command:
  ```bash
  $ npm test test/headless-chrome-test.js
  ```

</TabItem>

<TabItem value="ruby">

**Rspec Example Walkthrough**

1. Head to [Sauce Labs Training: Ruby Example Scripts](https://github.com/saucelabs-training/demo-ruby) on GitHub and review the README page to ensure you have the prerequisite software.

  <details><summary><strong>Example Headless Script for Ruby</strong></summary>

  ```ruby reference title="Ruby Example"
  https://github.com/saucelabs-training/demo-ruby/blob/docs-1.0/selenium-examples/rspec/spec/spec_helper.rb
  ```

  </details>

2. Setup Gemfile. Run `install bundler` so that you can update and resolve dependencies:
  ```bash
  $ gem install bundler
  ```

3. Execute the `bundle` command to install the required gems:
  ```bash
  $ bundle install --path .bundle
  ```

4. Export your Sauce Labs username and access key:
  ```bash
  export SAUCE_USERNAME=my-sauce-username
  export SAUCE_ACCESS_KEY=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxx2cy8f4
  ```

5. Run the following command to have rspec search and execute 'specs' in your project directories:
  ```bash
  $ bundle exec rspec
  ```
  You can also use `Run Configurations` in your IDE. For directions on how to setup Run/Debug Configurations refer to Documentation:
   * [Aptana Studio Documentation](https://github.com/aptana/studio3-ruby)
   * [RubyMine Documentation](https://www.jetbrains.com/ruby/learn/)
   * [Komodo Edit Documentation](https://community.komodoide.com/manual)
   * [NetBeans Documentation](https://netbeans.apache.org//kb/)

</TabItem>
<TabItem value="csharp">

__NUnit Example Walkthrough__

Head to [Sauce Labs Training: C# Example Scripts](https://github.com/saucelabs-training/demo-csharp) on GitHub and review the README page to ensure you have the prerequisite software.

  <details><summary><strong>Example Headless Script for C#</strong></summary>

  ```csharp reference title="C# Example"
  https://github.com/saucelabs-training/demo-csharp/blob/docs-1.0/SauceExamples/SeleniumNunit/SimpleExamples/SimpleHeadlessTest.cs
  ```

  </details>

</TabItem>
</Tabs>

## Data Center Endpoints for Headless
The containers used for Sauce Headless testing are hosted in the Sauce Labs East Coast data center, which is entirely separate from our data centers in the West Coast and in the EU. You'll need to connect to the [US-East Data Center](/basics/data-center-endpoints/data-center-endpoints) to access the web UI, Selenium endpoint, and Sauce Connect Proxy endpoint for headless testing.

The US-East IP addresses should be reachable from your network. If there's an issue, please refer to the [Sauce Connect Proxy documentation](/secure-connections/sauce-connect/system-requirements) > allowlisting section.

:::note
Cross-Browser VMs are not available at this time in US-East.

:::

## Using the Sauce Headless Web UI
Information about your Headless testing jobs is accessible by logging into the headless testing web interface.

* Direct Web Interface Link: https://app.us-east-1.saucelabs.com
* Select **Headless US-East** from the Sauce Labs dropdown menu

If you want to use a Sauce Connect Proxy tunnel for your Sauce Headless tests, you'll need to start it from here in the UI.

## Headless Testing with Sauce Connect Proxy
If you're testing website that's on your local machine or behind a corporate firewall, we recommend using [Sauce Connect Proxy](/secure-connections/sauce-connect).

To use Sauce Connect Proxy in conjunction with your Sauce Headless tests, be sure you have the [latest version](/secure-connections/sauce-connect/installation) on your machine. You'll need to start a new, separate tunnel from the one used for the Virtual and Real Device Cloud, by connecting to the [Sauce Headless-specific endpoint](/basics/data-center-endpoints/data-center-endpoints).


## Video Tutorial: Running Headless Tests
This video shows you how to configure your early pipeline tests to run in Sauce Headless and determine which of your tests might be a good candidate for this lightweight and cost-effective testing solution.

<iframe width="560" height="315" src="https://www.youtube.com/embed/KFPcX9c1_CE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## Additional Resources

* White Paper: [Headless Testing Primer](https://saucelabs.com/resources/white-papers/headless-testing-primer)
* White Paper: [Headless Testing - When, Where and How?](https://saucelabs.com/resources/white-papers/why-when-and-how-to-use-headless-testing)
