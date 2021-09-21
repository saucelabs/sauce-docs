---
id: one-page
title: Collecting Single URL Performance Statistics
sidebar_label: Single Page Statistics
description: Use Sauce's custom Speedo command line to establish a performance baseline for a particular URL or to analyze performance of a previously run test.
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The Speedo Node JS package is a tool that allows you to enter a simple command from a command line to measure basic performance of your Sauce app and validate any regressions based on previously executed tests. Speedo also easily integrates with any CI/CD system, allowing you to plug Sauce Performance into your CI/CD pipeline and start capturing performance within seconds.

## What You'll Learn
* Why the Speedo Node JS package is an easy way to get basic performance data about your app
* What's required to use Speedo
* How to install Speedo
* How to format Speedo commands to return performance metrics
* How to interpret the Speedo results
* How to use Speedo commands with your CI/CD pipeline

### What You'll Need

* Google Chrome (no older than 3 versions from latest) as the test browser
* Node.js v8 or later (for NPM installations)
* SAUCE_USERNAME and SAUCE_ACCESS_KEY defined for your environment

## Installing Speedo

You can install the Speedo package for Sauce using NPM or Docker.

<Tabs
  defaultValue="npm"
  values={[
    {label: 'NPM', value: 'npm'},
    {label: 'Docker', value: 'docker'},
  ]}>

<TabItem value="npm">

Install the package on your system to make the speedo command available.

```
$ npm install speedo -g
$ speedo --version
> 1.1.1
```
</TabItem>
<TabItem value="docker">

Pull the speedo package and run the installation command using Docker.

```
$ docker pull saucelabs/speedo
$ docker run saucelabs/speedo run http://json.org -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY
> 1.1.1
```
</TabItem>
</Tabs>

## Executing the Speedo Commands

Sauce Performance supports the following Speedo commands:

* speedo run - Get the set of standard performance metrics for any pre-defined URL
* speedo analyze - Validate the performance of URLs that are accessed by one of the previously run WebDriver tests.

:::note
The Speedo commands require your SAUCE_USERNAME and SAUCE_ACCESS_KEY. Export the values into your environment in order to avoid passing them as parameters each time you call a Speedo command. For example:

```bash
$ export SAUCE_USERNAME=Slavocado
$ export SAUCE_ACCESS_KEY=XXXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\
```
:::

### Run Command: Test a Single URL

The Speedo run command initiates a series of tests on Sauce Labs against a single URL defined in the query and returns the corresponding performance results. As part of the execution, the command facilitates the following functions:

* Establishes a baseline for each metric upon initial instantiation by running a diagnostic 10 times
* Downloads the performance logs as test artifacts, the local directory of which is provided in the command line output
    `Stored performance logs in /var/folders/11/p0wfqdkd4wgct7jdpfzxk4j40000gn/T/tmp-8379w4yCSzRBXqN2`
* Automatically updates the job status to PASS or FAIL based on previously established baseline
* Outputs reference URLs to the job in the Sauce Labs UI and the Google Lighthouse report
* Exits with a proper exit code so that your pipeline can potentially block the release of your web application in the event a performance regression was introduced

#### Run Command Syntax

`$ speedo run <url> [params]`


#### Run Command Example

Kick off a Speedo test by calling:

```
$ speedo run <URL> // if SAUCE_USERNAME and SAUCE_ACCESS_KEY already exist in the environment
$ speedo run <URL> -u Slavocado -k XXXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX // if SAUCE_USERNAME and SAUCE_ACCESS_KEY are not accessible or have not been exported
```

The output returned for a passing test may look as follows:

<img src={useBaseUrl('img/performance/speedo-run-output.png')} alt="Run Command Output" width="750"/>

### Analyze Command: Review Existing Tests

The Speedo analyze command allows you to compare the performance of multiple URLs that are accessed by a test script performed using automation tool like Selenium or WebdriverIO. Once the test completes, run the analyze command, specifying the name of the test as an inline attribute, to evaluate the page performance for each of the URLs accessed during the test. For example, a Login test would include each of the URL pages associated with successful authentication.

#### Analyze Command Syntax

`$ speedo analyze "<test name>"`

:::note
The specified test must have the appropriate options set for Performance.
:::

#### Analyze Command Configuration

You can apply parameter specifications to customize the test execution either by including the parameters as inline arguments or through a config file (speedo.config.js) located in the directory from which Speedo is called. Following is a list of common inline arguments.

:::note
Call $ speedo analyze -h to view the complete list of run command options.
:::

#### Analyze Command Example

Before you analyze the performance of page loads in an automation script, make sure you have a named test that has run to completion.

The following example is based on a WebdriverIO test in which a user logs into Instagram and successfully accesses the home screen.

```
$ speedo analyze "Instagram Login Test" // if SAUCE_USERNAME and SAUCE_ACCESS_KEY already exist in the environment
$ speedo analyze "Instagram Login Test" -u "Slavocado" -k "XXXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX" // if SAUCE_USERNAME and SAUCE_ACCESS_KEY haven't been exported as environment variables.
```

The following screenshot shows an example of the returned output for the analysis of the automation test.

<img src={useBaseUrl('speedo-analyze-output.png')} alt="Analyze Command Output" width="750"/>

## Integrating with a CI/CD Pipeline

The Speedo package is designed to organically fit into your existing continuous integration and delivery pipeline, as illustrated in the following examples.

<Tabs
  defaultValue="jenkins"
  values={[
    {label: 'Jenkins', value: 'jenkins'},
    {label: 'Jenkins with Docker', value: 'jenkins-docker'},
    {label: 'GitLabs with Docker', value: 'gl-docker'},
  ]}>

<TabItem value="jenkins">

This example uses a `sauce` attribute to pass the Sauce Labs credentials into the environment.

```
node('linux') {
    stage('Checkout') {
        echo 'Code checkout'
        git <repo link>
    }

    stage('Functional Tests ') {
        sauce('xxx') {
             echo 'Running tests'
             sh 'cd  && npm install && npm update && npm test'
        }
    }

    stage('Performance Test') {
        sauce('xxx') {
            echo 'Running Performance Tests'
            sh 'speedo run https://www.saucedemo.com'
        }
    }
}
```
</TabItem>
<TabItem value="jenkins-docker">

This example defines a Speedo Docker container and validates that Speedo is available.

```mdx {20,21,22,23,24}
pipeline {
    agent none
    stages {
        stage('Code Checkout') {
            agent { node 'intrev'}
            steps {
                echo 'Code checkout'
                git <URL>
            }
        }
        stage('Functional Tests') {
            agent { node 'intrev'}
            steps {
                sauce('xxxx') {
                    echo 'Running tests'
                    sh 'cd WebDriver.io/ && npm install && npm update && npm test'
                }
            }
        }
        stage('Performance Test') {
            agent {
                docker {
                    image 'saucelabs/speedo'
                    args '--entrypoint=""'
                }
            }
            steps {
                sauce('xxxx') {
                    echo 'Running Performance Tests'
                    sh 'speedo run https://www.saucelabs.com'
                }
            }
        }
    }
}
```
</TabItem>
<TabItem value="gl-docker">

```
variables:
  SPEEDO_IMAGE: saucelabs/speedo

stages:
  - lint
  - test
  - performance
  - deploy

# ...

# run performance tests
performance:
  stage: performance
  image: $SPEEDO_IMAGE
  script:
    - speedo run https://google.com -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY -b $BUILD_NUMBER

# ...
```
</TabItem>
</Tabs>


## Accessing Performance Data

By default, Speedo downloads a log containing all the recorded metrics for your test in a local file, the path to which is provided in the output of the call. If you prefer to specify a different location, use the `--logDir (-l)` parameter. You can also include the `--traceLogs (-t)` parameter to generate a log with trace level details in addition to the standard log in the same directory location. The following example is highlighted to show the parameter settings in the command and the log location in the output.

```mdx {1,7}
$ speedo run https://json.org -t -l ./speedoLogs
✔ Start performance test run with user cb-onboarding on page https://json.org...
✔ Run performance test...
✔ Wait for job to finish...
✔ Download performance logs...
✔ Updating job status...
📃 Stored performance logs in /path/to/project/speedoLogs
```

Once the test has completed, you can access the data for further use, such as pushing it to a third part analysis service.


## Configuration Options

The Speedo CLI tool supports a high degree of customization to ensure you are only capturing data that is relevant to your organization. You can customize the execution of either Speedo command by passing applicable parameters:

* as inline command arguments to customize only the current command execution
* through a config file (speedo.config.js) located in the directory from which Speedo is called to apply the customization every time the command is called


|Parameter|Command|Description|Example|
|--------|---|----------|---|
|`-b`/`--build`|Run|Identify your performance test with a build ID.| `$ speedo run https://saucelabs.com -b "build_id"`|
|`-n`/`--name`|Run|Identify your performance test with a name. | `$ speedo run https://saucelabs.com -n "my_test"`|
|`-k`/`--access_key`|Both| Pass your Sauce Labs access key to authenticate.|`$ speedo run https://saucelabs.com -k "SAUCE_ACCESS_KEY"`|
|`-u`/`--username`|Both| Pass your Sauce Labs username to authenticate. | `$ speedo run https://saucelabs.com -k "SAUCE_USERNAME"`|
|`-r`/`--region`|Analyze|Identify the Sauce Labs data center for your account. Valid values include `us` (us-west-1) or `eu` (eu-central-1). The default value is `us`.|`$ speedo analyze "Login Test" -r "eu"`|
|`-t`/`--trace_logs|Both|Record trace level data in addition to the default log. If specified, the trace.json file is saved to the same folder as the performance log. If not specified, trace level data is not captured.|`$ speedo run https://saucelabs.com -t`|
|`-l`/`--log_directory`|Both|Specify a local directory in which to save the performance log file (performance.json). If not specified, the log file is written to a default location in the directory in which you installed Speedo and the path is provided in the output of the call.|`$ speedo run https://saucelabs.com -l ./speedo_logs`|
|`-o`/`--order_index`|Analyze|The number of pages accessed during the test.|`$ speedo analyze "Login Test" -o "2"`|
|`-p`/`--page_url`|Analyze|If only measuring performance for one page in the test, specify the URL of the page to analyze.|`$ speedo analyze "Login Test" -p "https://www.instagram.com"`|
|`-p`/`--platform`|Run|Specify the platform on which to run the test. If not specified, the default value is Windows 10.|	`$ speedo run https://saucelabs.com -p "Windows 10"`|
|`-v`/`--browser_version`|Run|Specify the version of Chrome (only browser supported at this time) on which to run the test. If not specified, the default value is latest, which resolves to the most current version.|`$ speedo run https://saucelabs.com -v "74"`|
|`-m`/`--metric`|Both|Tailor the command to measure performance for only certain metrics. See [Metric Values](#metric-values) for the list of supported metrics. If not specified, the test defaults to `score`, which automatically tests all metrics that currently make up a Lighthouse Performance Score.|`$ speedo run https://saucelabs.com -m "firstPaint" -m "domContentLoaded"`|
|`--throttleCpu`|Run|Tailor the metric measurement standards based on the CPU at which the pages are being accessed. See [CPU Settings](#cpu-settings) for the list of supported values for this parameter. If not specified, the test defaults to 4 (4X).|`$ speedo run https://www.saucelabs.com --throttleCpu 2`|
|`--throttleNetwork`|Run|Tailor the metric measurement standards based on the specific network environment in which the pages are being accessed. See [Network Conditions Settings](#network-conditions-settings) for the list of supported network profile values for this parameter. If not specified, the test defaults to Good 3G.|`$ speedo run https://www.saucelabs.com --throttleNetwork online`|
|`--all`|Analyze|Set this boolean to `true` to collect performance data for all available metrics (overrides any specified -m settings). By default, this value is `false`.|`$ speedo analyze "Login Test" --all`|

### Metric Values

The following values can be used with the `-m` parameter of either the `run` or `analyze` command.

|Metric|Description|Unit|
|---|------|---|
|`cumulativeLayoutShift`|An aggregate of unexpected movement of content as a page loads. The score is calculated as the percentage of space impacted by the movement times the percentage of distance the content moved on the screen.|percentage|
|`domContentLoaded`|The point at which visual content is fully rendered and backend scripts begin to execute.|seconds|
|`estimatedInputLatency`|The amount of time the page takes to respond to user input.|milliseconds|
|`firstContentfulPaint`|The time from when the page starts loading to when any part of the page's content is rendered on the screen. In this context, "content" can be text, images, elements, or canvas (non-white) elements. This does not mean that the page is fully rendered.|seconds|
|`firstMeaningfulPaint`|<span className="sauceRed">DEPRECATED</span> The amount of time it takes for a page's primary body of content to rendeR. This metric is replaced by `largestContentfulPaint`.|seconds|
|`firstPaint`|The time it takes to render the first pixel on the page once the URL has been called.|seconds|
|`firstVisualChange`|The time it takes for anything to be visually painted in the viewport. Calculated by video analysis, this is an alternative metric to firstPaint that is browser agnostic.|seconds|
|`largestContentfulPaint`|The amount of time it takes for the page's largest visual element to display. This metric is considered a more accurate reflection of when the main content of a page has loaded.|seconds|
|`lastVisualChange`|The amount of time it takes for the final visual element to display.|seconds|
|`load`|The amount of time it takes for all page objects and dependent resources to be loaded.|seconds|
|`serverResponseTime`|Formerly `timeToFirstByte`, this is the amount of time it takes to receive the first data response from the server.|milliseconds|
|`speedIndex`|The average time is takes the contents of a page to fully render.|seconds|
|`timeToFirstInteractive`|The amount of time it takes for a page to be able to reliably respond to user input.|seconds|
|`totalBlockingTime`|The amount of time that elapses between `firstContentfulPaint` and `timeToFirstInteractive`, which is a key indicator of lag.|seconds|

### Network Conditions Settings

The following profiles can be used with the `--throttleNetwork` parameter of the `run` command to simulate various network conditions for your test.

|Profile|Latency|Downstream|Upstream|
|---|---|---|---|
|`Regular 2G`|300ms|31.25 KB/s|6.25 KB/s|
|`Regular 3G`|100ms|93.75 KB/s|31.25 KB/s|
|`Good 2G`|150ms|56.25 KB/s|18.75 KB/s|
|`Good 3G`|40ms|192.00 KB/s|93.75 KB/s|
|`Regular 4G`(default)|20ms|512.00 KB/s|384.00 KB/s|
|`DSL`|5ms|256.00 KB/s|128.00 KB/s|
|`WiFi`|2ms|3.75 MB/s|1.88 MB/s|
|`online`|N/A|N/A|N/A|
|`offline`|0|0|0|

#### Network Throttling Examples

You can configure your test to run under the network condition of a predefined profile from the table, as in the following example:

`$ speedo run https://www.saucelabs.com --throttleNetwork online`

Alternatively, you can specify custom values in the format `download, upload, latency` (in KB/s):

`$ speedo run https://www.saucelabs.com --throttleNetwork "1000,500,40"`


### CPU Settings

The following profiles can be used with the `--throttleCpu` parameter of the `run` command to simulate various load conditions for your test.

|Setting|CPU Condition|
|---|---|
|1|No throttling|
|2|2x CPU throttling|
|3|3x CPU throttling|
|4|4x CPU throttling (default)<br/>*Emulates mobile performance*|

#### CPU Throttling Example

`$ speedo run https://www.saucelabs.com --throttleCpu 2`
