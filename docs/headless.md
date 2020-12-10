---
id: headless
title: Sauce Headless Testing in the Cross-Browser Cloud
sidebar_label: Headless Testing
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Sauce Headless is a container-based, lightweight, and scalable infrastructure solution for testing web apps on headless Chrome and Firefox browsers in our virtual device cloud. Test early in your development cycle on headless browsers to get fast pass/fail data on early pipeline component tests, sanity checks, and pull request tests.

There are a few key differences between setting up Sauce Headless tests versus setting up other [Sauce Labs automated web app tests](https://wiki.saucelabs.com/pages/viewpage.action?pageId=80415923), as described below.


## What You'll Need

<p><button class="badge-blue">ENTERPRISE PLANS ONLY</button></p>

The [latest version](https://wiki.saucelabs.com/pages/viewpage.action?pageId=96832863) of Sauce Connect Proxy, if you're using it to run Headless tests.

## Setting Up Headless Testing on Sauce Labs

Sauce Headless provides headless Chrome and Firefox in the three most recent versions and the most recent version of Linux. 

### WebDriver Capabilities for Headless Testing
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

__TestNG Example__

1. Head to [Sauce Labs Training: Java Headless Example Scripts](https://github.com/saucelabs-training/demo-java/tree/master/headless) on GitHub and review the `README.md` page to ensure you have the prerequisite software.
2. Download or clone [this sample script](https://github.com/saucelabs-training/demo-java/blob/master/headless/src/test/java/SampleHeadlessSauceTest.java) from the repo.
3. Resolve dependencies with Maven:
```sh
$ mvn dependency:resolve
```
4. Export your Sauce Labs username and access key:
```sh
export SAUCE_USERNAME=my-sauce-username
export SAUCE_ACCESS_KEY=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxx2cy8f4
```
5. Run the following commands:
```sh
$ cd headless/
$ mvn clean test -Dtest=SampleHeadlessSauceTest
```
6. Confirm that you can see the following output (or something similar) in the console:
```sh
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
Additional resources: [Sauce Labs Java Demonstration Scripts](https://wiki.saucelabs.com/pages/viewpage.action?pageId=48365798).

</TabItem>
<TabItem value="python">

__Pytest Example__

1. Head to [Sauce Labs Training: Python](https://github.com/saucelabs-training/demo-python) on GitHub and review the `README.md` page to ensure you have the prerequisite software.
2. Download or clone [this headless sample script](https://github.com/saucelabs-training/demo-python/blob/master/headless-examples/test_demo.py) from the repo.
3. Install the following modules:
```sh
pip install pytest pytest-xdist
```
4. Export your Sauce Labs username and access key:
```python
export SAUCE_USERNAME=my-sauce-username
export SAUCE_ACCESS_KEY=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxx2cy8f4
```
5. Run the following command:
```python
pytest -n8 test_demo.py
```
6. Confirm that you can see the following output (or something similar) in the console:

```python
platform darwin -- Python 3.7.1, pytest-4.4.0, py-1.7.0, pluggy-0.12.0
rootdir: /path/to/python/headless-examples
plugins: forked-1.0.2, xdist-1.28.0
gw0 [4] / gw1 [4] / gw2 [4] / gw3 [4] / gw4 [4] / gw5 [4] / gw6 [4] / gw7 [4]
....   
```

Additional resources: [Sauce Labs Python Demonstration Scripts](https://wiki.saucelabs.com/display/DOCS/Python+Demonstration+Scripts).

</TabItem>
<TabItem value="node">

__Mocha-Chai Example__

1. Head to [Sauce Labs Training: NodeJS](https://github.com/saucelabs-training/demo-js) on GitHub and review the `README.md` page to ensure you have the prerequisite software.
2. Download or clone [this headless Chrome test sample script](https://github.com/saucelabs-training/demo-js/blob/master/headless-examples/test/headless-chrome-test.js) or [Firefox test sample script](https://github.com/saucelabs-training/demo-js/blob/master/headless-examples/test/headless-firefox-test.jsfrom) the repo.
3. Navigate to the headless-examples directory and install node package dependencies:
```sh
$ cd headless-examples/
$ npm install
```
4. Export your Sauce Labs username and access key:
```sh
export SAUCE_USERNAME=my-sauce-username
export SAUCE_ACCESS_KEY=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxx2cy8f4
```
5. Run the following command:
```javascript
$ npm test test/headless-chrome-test.js
```
6. Confirm that you can see the following output (or something similar) in the console:

```javascript
mocha "test/headless-chrome-test.js"

 headless chrome test
Page Title is: Swag Labs
   ✓ get-title-test (2594ms)

 1 passing (13s)                                                              
```

Additional resources: [Sauce Labs Node.js Demonstration Scripts](https://wiki.saucelabs.com/display/DOCS/Node.js+Demonstration+Scripts).

</TabItem>
</Tabs>

## Data Center Endpoints for Sauce Headless
The containers used for Sauce Headless testing are hosted in the Sauce Labs East Coast data center, which is entirely separate from our data centers in the West Coast and in the EU. You'll need to connect to the [US-East Data Center](https://wiki.saucelabs.com/pages/viewpage.action?pageId=102704068) to access the web UI, Selenium endpoint, and Sauce Connect Proxy endpoint for headless testing.

The US-East IP addresses should be reachable from your network. If there's an issue, see the Whitelisting for Restricted Networks section of [System and Network Requirements for Sauce Connect Proxy](https://wiki.saucelabs.com/pages/viewpage.action?pageId=48365793).

**NOTE**: Cross-Browser VMs are not available at this time in US-East.

### Logging into Multiple Data Centers
If you need to be logged into both the US-East and US-West-1 data centers in our web interface, we advise against doing it in the same browser (different tabs). It may cause you to be logged out of one of the data centers or result in other inconsistent interface behavior.

If you do want to use the same browser, we recommend logging into the web interfaces from separate browsers or by using an incognito/private browser window. If you have issues with your username for logging into either of the web interfaces and don't want to use an incognito browser, try clearing all Sauce-related cookies from your browser cache.

## Using the Sauce Headless Web UI
Information about your Headless testing jobs is accessible by logging into the headless testing web interface.

* Direct Web Interface Link: https://app.us-east-1.saucelabs.com
* Select **Headless US-East** from the Sauce Labs dropdown menu

If you want to use a Sauce Connect Proxy tunnel for your Sauce Headless tests, you'll need to start it from here in the UI.

## Sauce Connect Proxy for Headless Testing
If you're testing website that's on your local machine or behind a corporate firewall, we recommend using [Sauce Connect Proxy](https://wiki.saucelabs.com/pages/viewpage.action?pageId=48365718).

To use Sauce Connect Proxy in conjunction with your Sauce Headless tests, be sure you have the [latest version](https://wiki.saucelabs.com/pages/viewpage.action?pageId=96832863) on your machine. You'll need to start a new, separate tunnel from the one used for the Virtual and Real Device Cloud, by connecting to the [Sauce Headless-specific endpoint](https://wiki.saucelabs.com/pages/viewpage.action?pageId=102704068).


## Video Tutorial: Running Headless Tests
This video shows you how to configure your early pipeline tests to run in Sauce Headless and determine which of your tests might be a good candidate for this lightweight and cost-effective testing solution.

<iframe width="560" height="315" src="https://www.youtube.com/embed/KFPcX9c1_CE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
