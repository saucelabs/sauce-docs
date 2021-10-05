---
id: espresso-xcuitest
title: Espresso and XCUITest on Sauce Labs
sidebar_label: Using Espresso and XCUITest
description: Run Espresso and XCUITest projects on Sauce Labs.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Sauce Labs uses its framework agnostic test orchestrator [`saucectl`](/testrunner-toolkit) to execute Espresso and XCUITest tests based on one or more configuration files that instruct `saucectl` to run your tests exactly the way you specify. Results get published in your Sauce Labs account, where you can compare 30 days of results across different environments and frameworks all in one view.

## What You'll Need

* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
* Your Sauce Labs [Username and Access Key](https://app.saucelabs.com/user-settings).
* Your Espresso or XCUITest apps and files.

## Installation & Setup

`saucectl` can execute both Espresso and XCUITest tests, so the set up steps are the same regardless of which framework you are using.

### 1. Install `saucectl`

Begin by installing the `saucectl` CLI so it has access to your local project.

```bash
sudo sh -c 'curl -L https://saucelabs.github.io/saucectl/install | bash -s -- -b /usr/local/bin'
```

:::caution Required Minimum Versions
Espresso requires `saucectl` version 0.36.0 or later and XCUITest requires `saucectl` version 0.44.0 or later.
:::

### 2. Check out the demo repositories

Clone or download the [Espresso](https://github.com/saucelabs/saucectl-espresso-example) and/or [XCUITest](https://github.com/saucelabs/saucectl-xcuitest-example) example repos, as applicable to your project, to obtain the `saucectl` directory structure and example files for use as templates.

### 3. Link your Sauce Labs account

1. Generate a credentials file that `saucectl` can reference to authenticate your CLI commands.      
    ```
    saucectl configure
    ```
1. Enter your Sauce Labs `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` at the prompts.
1. `saucectl` creates a `credentials.yml` file in a `.sauce` folder of your home directory.

:::tip Use Environment Variables
You can set your Sauce Labs credentials as [environment variables](/basics/environment-variables) instead of generating a `credentials.yml`, if you prefer. In systems where both sets of credentials exist, environment variable values are prioritized.
:::


## Configuration

Each demo repo includes a sample `config.yml` file (in the `<root>/.sauce` directory) that is preconfigured to run the example test, which is also included in the repo.

Modify the `config.yml` file to run your existing tests.

* **TestObject Migration:** refer to the [Commands Map](#legacy-to-saucectl-commands-map) to determine which CLI commands and/or YAML configuration properties to use based on your TestObject configurations.
* **New Accounts:** see the `saucectl` configuration documentation for [Espresso](/testrunner-toolkit/configuration/espresso) and [XCUITest](/testrunner-toolkit/configuration/xcuitest).

For Android tests, if your emulator session fails to start, make sure the app you are targeting is an `\*.apk`, not an `\*.aab`, as the latter is not yet supported in emulator tests.


:::tip Alternative Config Files
You can create multiple configuration files to support different frameworks or different test setups and then reference the applicable configuration file at runtime using the CLI command:

```
saucectl run -c ./path/to/<configFile>.yml
```
:::


### TestObject (Legacy RDC) to `saucectl` Commands Map

<p><span className="sauceGold">DEPRECATED</span></p>

:::warning TestObject End-of-life
TestObject was discontinued on September 1, 2021. If you have any questions, please reach out to your Customer Success Manager or Sauce Labs Support.
:::

`saucectl` configures and runs your Espresso and XCUITest tests entirely from the CLI and YAML configuration settings. The following tables provide a list of testing actions, mapping the TestObject configuration settings to the equivalent settings in `saucectl`. Both TestObject and Sauce Labs utilize CLI commands and YAML configuration files to define the many ways in which you can run your tests. Some actions can be set using either a CLI command _or_ a YAML property, while other actions can only be configured by one or the other, so the maps below are separated by CLI commands and YAML properties for ease of navigation.

:::important
Real Device testing on Sauce Labs is data center contingent, so you will only have access to the public and private devices available within the data center specified for the test, rather than the entire body of devices across all data centers. Each data center includes a very similar  variety of devices and operating systems to provide a broad selection for testing, but depending on your organization’s concurrency allowances, this separation may affect the number of tests you can run in parallel.
:::


<Tabs
  defaultValue="cli"
  values={[
    {label: 'CLI', value: 'cli'},
    {label: 'YAML', value: 'yaml'},
  ]}>

<TabItem value="cli">


| Configuration | Legacy CLI | saucectl CLI |
| ----------------------------------- | --- | --- |
| Specify the framework. | `espresso` or `xcuitest` | Must use YAML |
| Pass account credentials (TestObject). | `--apikey` | [Create Credentials file](/testrunner-toolkit/installation#associating-your-sauce-labs-account) |
| Provide the location of the app to be tested. | `--app` | Must use YAML |
| Provide the location of the test app. | `--test` | Must use YAML |
| Identify your applicable data center. | `--datacenter` | `--region` |
| Specify a particular device to run the test on. | `--device` | Must use YAML |
| Indicate device selection to be dynamic. | `--devices` | Must use YAML |
| Provide a name for the test. | `--testname` | Must use YAML |
| Choose a device running a particular platform version. | `--platformVersion` | Must use YAML |
| Choose devices from a private pool only. | `--privateDevicesOnly` | Must use YAML |
| Choose a phone device only. | `--phoneOnly` | Must use YAML |
| Choose a tablet device only. | `--tabletOnly` | Must use YAML |
| Ensure the device is connected to a cellular network. | Not supported | Must use YAML |
| Choose any device where the name matches the regex. | `--deviceNameQuery` | Must use YAML |
| Specify which test class to run. | `--testsToRun <class>` | Must use YAML |
| Specify which methods to run. | `--testsToRun <class>/<method>` | Must use YAML |
| Exclude certain classes from the test. | `--e -e= class name.of.class1,name.of.class2`  | Must use YAML |
| Run only tests matching the specified size. | `--e -i=size size` | Must use YAML |
| Specify which package to run. | `--e package` | Must use YAML |
| Exclude tests in the specified package. | `--e notPackage` | Must use YAML |
| Run only tests matching the specified annotation.  | `--e -i=annotation com.my.annotation` | Must use YAML |
| Exclude tests matching the specified annotation.  | `--e -i=notAnnotation com.my.annotation` | Must use YAML |
| Further specify Espresso test options using supported key-value pairs. | `--e` | Not supported |
| Identify a running Sauce Connect tunnel to use for secure connectivity to the cloud. | `--tunnelIdentifier` | `--tunnel-id` |
| Specify how often (seconds) the runner should check for test results. | `--checkFrequency` | Not supported |
| Specify the maximum length of time (minutes) the test can run. | `--timeout` | `--timeout` |
| Specify a folder to direct the JUnit XML output. | `--xmlFolder` | Not supported |
| Specify an alternative REST endpoint (Is this TO only? Covered by region in SL?? | `--url` | Not supported |
| Remove shared states between tests. | `--e clearPackageData` | Must use YAML |
| Set up a proxy connection. | `--D` | `-e HTTP_PROXY=$<HTTP> HTTPS_PROXY=$<HTTPS>` |
| Specify the concurrency to use for the test execution (up to account max). | Not supported | `--ccy` |
| Specify an alternative path and file to use as the configuration file. | `config --path` | `--config` |
| Set environment variable values on which other settings depend (such as proxy host/port values). | Not supported | `--env` |
| Simulate a test without actually executing. | Not supported | `--dry-run` |
| Return additional output for troubleshooting purposes. | `--verbose` | `--verbose` |
| Provide tags for use in filtering jobs in the Sauce Labs UI in ways that are meaningful for your org, such as release numbers or dev teams. | Not supported | `--tags <tag1,tag2...>` (Espresso RDC Only)|
| Associate the job with a build ID for grouping jobs in the Sauce Labs UI. | Not supported | `--build` (Espresso RDC Only)|
| Specify the circumstances under which to download test artifacts. | Not supported | Must use YAML |
| When downloading is enabled, specify that only certain types of test artifacts are to be downloaded. | Not supported | Must use YAML |
| When downloading is enabled, specify the download location. | Not supported | Must use YAML |

</TabItem>
<TabItem value="yaml">

| Configuration | Legacy YAML Properties| saucectl YAML Properties|
| ----------------------------------- | --- | --- |
| Specify which version of the composer API you are referencing for the configuration. | N/A | `apiversion:` |
| Specify the framework. | Must use CLI | `kind:` |
| Provide the location of the app to be tested. | `app:` | `espresso.app:`<br/>`xcuitest.app:` |
| Provide the location of the test app. | `test:` | `espresso.testApp:`<br/>`xcuitest.testApp:` |
| Identify your applicable data center. | `devices.datacenter:` | `sauce.region:` |
| Provide a name for the test. | `testname:` | `suites[].name:` |
| Specify a virtual machine emulator. (Espresso Only) | `-d` (one value)<br/> `--devices[]` | `suites[].emulators[]:` |
| Specify the emulator(s) to run the test on. (Espresso Only) | `deviceName=name` | `suites[].emulators[].name:` |
| Specify the test orientation for the emulator. (Espresso Only) | `orientation=portrait\|landscape` | `suites[].emulators[].orientation:` |
| Specify the emulator platform versions to apply. (Espresso Only) | `platformVersion=version#` | `suites[].emulators[].platformVersions[]:` |
| Specify a real device to run the test on. | `device:` | `suites[].devices[].id:` |
| Indicate real device selection to be dynamic. | `devices:` | `suites[].devices[]:` |
| Choose a real device running a particular platform version. | `devices.platformVersion:` | `suites[].devices[].platformVersion:` |
| Choose real devices from a private pool only. | `privateDevicesOnly:` | `suites[].devices[].options.private:` |
| Choose a phone real device only. | `phoneOnly:` | `suites[].devices.options.deviceType: PHONE` |
| Choose a tablet real device only. | `tabletOnly:` | `suites[].devices[].options.deviceType: TABLET` |
| Ensure the real device is connected to a cellular network. | Not supported | `suites[].devices[].options.carrierConnectivity` |
| Choose any real device where the name matches the regex. | `devices.deviceNameQuery:` | `suites[].devices[].name:` |
| Specify which test class to run. | `testsToRun.testClass:` | `suites[].testOptions.class:` |
| Specify which methods to run. | `testsToRun.testMethod:` | `suites[].testOptions.class: class/Method` (XCUITest Only) |
| Exclude certain classes from the test. | Must use CLI | `suites[].testOptions.notClass:` (Espresso Only) |
| Run only tests matching the specified size. | Must use CLI | `suites[].testOptions.size:` (Espresso Only) |
| Specify which package to run. | Must use CLI | `suites[].testOptions.package:`  (Espresso Only) |
| Exclude tests in the specified package. | Must use CLI | `suites[].testOptions.notPackage:`  (Espresso Only) |
| Run only tests matching the specified annotation.  | Must use CLI | `suites[].testOptions.annotation:`  (Espresso Only) |
| Exclude tests matching the specified annotation.  | Must use CLI | `suites[].testOptions.notAnnotation:`  (Espresso Only) |
| Break the test into separate shards. | Not supported | `suites[].testOptions.numShards:`  (Espresso Only) |
| Identify a running Sauce Connect tunnel to use for secure connectivity to the cloud. | `tunnelIdentifier:` | `sauce.tunnel.id:` |
| Specify how often (seconds) the runner should check for test results. | `checkFrequency:` | Not supported |
| Specify the maximum length of time (minutes) the test can run. | `timeout:` | Must use CLI |
| Specify a folder to direct the JUnit XML output. | `xmlFolder:` | Not supported |
| Specify an alternative REST endpoint (Is this TO only? Covered by region in SL?? | `url:` | Not supported |
| Remove shared states between tests. | Must use CLI | `suites[].testOptions.clearPackageData` (Espresso Only) |
| Set up a proxy connection. | Must use CLI | Must use CLI |
| Specify the concurrency to use for the test execution (up to account max). | Not supported | `sauce.concurrency:` |
| Specify an alternative path and file to use as the configuration file. | Must use CLI | Must use CLI |
| Set environment variable values on which other settings depend (such as proxy host/port values). | Not supported | `suites[].env:` |
| Simulate a test without actually executing. | Not supported | Must use CLI |
| Return additional output for troubleshooting purposes. | Not supported | Must use CLI |
| Provide tags for use in filtering jobs in the Sauce Labs UI in ways that are meaningful for your org, such as release numbers or dev teams. | Not supported | `sauce.metadata.tags:` (Espresso RDC Only)|
| Associate the job with a build ID for grouping jobs in the Sauce Labs UI. | Not supported | `sauce.metadata.build:` (Espresso RDC Only)|
| Specify the circumstances under which to download test artifacts. | Not supported | `artifacts.download.when:` |
| When downloading is enabled, specify that only certain types of test artifacts are to be downloaded. | Not supported | `artifacts.download.match:` |
| When downloading is enabled, specify the download location. | Not supported | `artifacts.download.directory:` |


</TabItem>
</Tabs>
