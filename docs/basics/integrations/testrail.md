---
id: testrail
title: TestRail Integration
sidebar_label: TestRail
description: Integrate your Sauce Labs test results with TestRail using the TestRail CLI.
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

[TestRail](https://www.testrail.com/) is a test case management tool. TestRail provides a [command line interface tool](https://support.testrail.com/hc/en-us/articles/7146548750868-TestRail-CLI#Overview) to import automated test results and automatically create test cases. The TestRail CLI parses JUnit reports and sends execution data to TestRail, so you can centralize all your Sauce Labs test results in TestRail.

## How It Works

You use `saucectl` to run your automated tests in Sauce Labs and generate a JUnit report of your test results in XML format. You then import the report into TestRail with the TestRail CLI.

The TestRail CLI is designed to parse JUnit reports and import certain execution data by default. It was specially designed to parse Sauce Labs test reports, including those with multiple executions in one report. When you run it with the `--special-parser saucectl` option, it imports the test executions for each browser or device into a separate test run in TestRail, and creates the test cases automatically. Each test run includes the `browser` and `platform` values in its description, and the result of each test case includes the URL of the Sauce Labs session, so you can go from TestRail straight to the test in Sauce Labs.

<img src={useBaseUrl('img/integrations/testrail/testrail-1.png')} alt="Shows the saucectl-TestRail Flow" width="700"/>

## Prerequisites

Before you begin, make sure you have:

- A Sauce Labs account (if you don't have one, start a [free trial](https://saucelabs.com/sign-up)).
- Your Sauce Labs [username and access key](https://app.saucelabs.com/user-settings).
- A TestRail account (if you don't have one, start a [free trial](https://secure.gurock.com/customers/testrail/trial)).
- [`saucectl`](/dev/cli/saucectl/), to run your tests in Sauce Labs and generate the JUnit report.

## Set Up the Integration

:::info
To get started, see the [cypress-saucectl](https://github.com/gurock/automation-frameworks-integration/tree/main/samples/javascript/cypress-saucectl) sample project on GitHub.
:::

1. Install the TestRail CLI. See the [TestRail CLI documentation](https://support.testrail.com/hc/en-us/articles/7146548750868-Overview-and-installation).
2. Run your tests in Sauce Labs with `saucectl` to generate a JUnit report of your test results in XML format.

## Authentication

The integration uses two sets of credentials:

- **Sauce Labs**: `saucectl` authenticates with your Sauce Labs **username** and **access key**, which you can find in your Sauce Labs [User Settings](https://app.saucelabs.com/user-settings).
- **TestRail**: The TestRail CLI authenticates with your TestRail instance using the `--username` and `--password` options. See [Sample Command](#sample-command).

## Verify the Integration

1. Run the [sample command](#sample-command) using the [sample report](#sample-report).
2. In TestRail, go to the **Test Cases** page and check that the test cases were created.
3. Go to the **Test Runs & Results** page and check that there is one test run for each browser.

## Use the Integration

After you set up the integration, you can import the JUnit report from each `saucectl` run into TestRail.

To import your Sauce Labs results into TestRail:

1. Run your tests with `saucectl` to generate the JUnit report.
2. Run the TestRail CLI with the `--special-parser saucectl` option, as shown in [Sample Command](#sample-command).
3. View the results in TestRail. See [View Sauce Labs Test Results in TestRail](#view-sauce-labs-test-results-in-testrail).

The TestRail CLI imports all test executions into separate test runs in TestRail.

### Sample Report

The following sample report shows the execution of the same test cases on two different browsers (Firefox and Chrome), which can be identified in the `testsuite` element names.

```xml
<testsuites tests="8">
  <testsuite name="Firefox - test_suite_1.cy.js" tests="1" time="48">
    <properties>
      <property name="url" value="https://app.saucelabs.com/tests/7d7544f09a47428fb97ee53d1a5b1419"/>
      <property name="browser" value="firefox 108"/>
      <property name="platform" value="Windows 11"/>
    </properties>
    <testcase name="Component 1 Verify page structure" time="0.9450" classname="Verify page structure"/>
  </testsuite>
  <testsuite name="Firefox - test_suite_2.cy.js" tests="1" time="80">
    <properties>
      <property name="url" value="https://app.saucelabs.com/tests/cbb864e049c645e1a96d56e953fe33f0"/>
      <property name="browser" value="firefox 108"/>
      <property name="platform" value="Windows 11"/>
    </properties>
    <testcase name="Component 2 Verify page structure" time="0.9670" classname="Verify page structure"/>
  </testsuite>
  <testsuite name="Chrome - test_suite_1.cy.js" tests="1" time="65">
    <properties>
      <property name="url" value="https://app.saucelabs.com/tests/349cf779c0f94e649f7ea6ccc42e1753"/>
      <property name="browser" value="chrome 106"/>
      <property name="platform" value="Windows 11"/>
    </properties>
    <testcase name="Component 1 Verify page structure" time="0.7500" classname="Verify page structure">
      <failure type="element not found" message="Fail due to...">stacktrace...</failure>
    </testcase>
  </testsuite>
  <testsuite name="Chrome - test_suite_2.cy.js" tests="1" time="33">
    <properties>
      <property name="url" value="https://app.saucelabs.com/tests/c0e3ddae1e104b86b940ed7e8026ff83"/>
      <property name="browser" value="chrome 106"/>
      <property name="platform" value="Windows 11"/>
    </properties>
    <testcase name="Component 2 Verify page structure"
    time="0.7570" classname="Verify page structure"/>
  </testsuite>
</testsuites>
```

The TestRail CLI creates two test runs in TestRail and adds the corresponding test results. Each test run contains the same tests, which are `Component 2 Verify page structure` and `Component 1 Verify page structure`.

<img src={useBaseUrl('img/integrations/testrail/testrail-2.png')} alt="Shows a sample report with two test runs for two different devices." width="700"/>

TestRail also includes the `browser` and `platform` values in each test run description and the `session url` in the results of each test case.

:::note
More than one test case can be executed in one Sauce Labs session, so multiple test results often have the URL to the same session.
:::

### Sample Command

The following sample command parses Sauce Labs reports. The difference from a standard TestRail CLI command is the `--special-parser saucectl` flag.

```bash
$ trcli -y \
>  -h https://INSERT-INSTANCE-NAME.testrail.io \
>  --project "My Project" \
>  --username INSERT-EMAIL \
>  --password INSERT-PASSWORD \
>  parse_junit \
>  --title "Cross-browser automated tests" \
>  --special-parser "saucectl" \
>  "./saucelabs-report.xml"
```

### View Sauce Labs Test Results in TestRail

If you run the [sample command](#sample-command) using the [sample report](#sample-report) and go to the **Test Cases** page in TestRail, you see that test cases were automatically created, resulting in a test suite similar to the one shown in the following image.

Although there are four `testcase` elements in the report file, they refer to the same two test cases being executed in two different browsers, so only two tests are created in TestRail.

<img src={useBaseUrl('img/integrations/testrail/testrail-3.png')} alt="Shows the Test Cases page in TestRail." width="700"/>

On the **Test Runs & Results** page, you see two test runs, one for each browser. The browser is added to the test run title in parentheses.

<img src={useBaseUrl('img/integrations/testrail/testrail-4.png')} alt="Shows two test runs for different devices in the Test Runs & Results page in TestRail." width="700"/>

When you drill down to the first test run, for the automated tests executed in Chrome, you can see the execution platform information in the test run description and the session URL in the test result. This gives you execution context, as well as links to the Sauce Labs session to find more information about the test execution itself.

<img src={useBaseUrl('img/integrations/testrail/testrail-5.png')} alt="Shows test run details in TestRail." width="700"/>

## Troubleshooting

<details>
<summary>**All executions are imported into one test run**</summary>

Add the `--special-parser saucectl` option to your TestRail CLI command. Without it, the TestRail CLI does not import the executions for each browser or device into separate test runs. See [Sample Command](#sample-command).

</details>

<details>
<summary>**TestRail shows fewer test cases than the report**</summary>

When the same test cases run on more than one browser, the report has a `testcase` element for each execution, but TestRail creates each test case only once. The executions appear in separate test runs, one for each browser.

</details>

<details>
<summary>**Several test results link to the same Sauce Labs session**</summary>

More than one test case can be executed in one Sauce Labs session, so multiple test results can have the URL to the same session.

</details>

## Next Steps

- [saucectl run](/dev/cli/saucectl/run/)
- [TestRail CLI documentation](https://support.testrail.com/hc/en-us/articles/7146548750868-Overview-and-installation)
- [Integrations Overview](/basics/integrations-overview/)
