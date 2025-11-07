---
id: testrail
title: TestRail Integration
sidebar_label: TestRail
description: Integrate your Sauce Labs test results with TestRail using the TestRail CLI.
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

TestRail provides a [command line interface tool](https://support.testrail.com/hc/en-us/articles/7146548750868-TestRail-CLI#Overview) to import automated test results and automatically create test cases. The TestRail CLI parses JUnit reports and sends execution data to TestRail to centralize all your test results.

As shown in the diagram below, you can use `saucectl` to run your automated tests in Sauce Labs and generate a JUnit report of your test results in XML format, which can then be imported into TestRail with the TestRail CLI.

<img src={useBaseUrl('img/integrations/testrail/testrail-1.png')} alt="Shows the saucectl-TestRail Flow" width="700"/>

For more information, see the [TestRail CLI documentation](https://support.testrail.com/hc/en-us/articles/7146548750868-Overview-and-installation).

## What You'll Need

- A Sauce Labs account (if you don't have one, start a [free trial](https://saucelabs.com/sign-up))
- Your Sauce Labs [username and access key](https://app.saucelabs.com/user-settings)
- A TestRail account (if you don't have one, start a [free trial](https://secure.gurock.com/customers/testrail/trial))

## Using the TestRail CLI

:::info
To get started, see the [cypress-saucectl](https://github.com/gurock/automation-frameworks-integration/tree/main/samples/javascript/cypress-saucectl) sample project on GitHub.
:::

As mentioned above, the TestRail CLI is designed to parse JUnit reports and import certain execution data by default. TestRail's CLI tool was specially designed to parse Sauce Labs' test reports, including those with multiple executions in one report.

To import Sauce Labs results, when running the TestRail CLI in your command line, use the `--special-parser saucectl` option, which imports all test executions into separate test runs in TestRail.

### Sample Report

The following sample report shows the execution of the same test cases on two different devices (Firefox and Chrome), which can be identified in the `testsuite` element names.

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

The TestRail CLI will create two test runs in TestRail and add the corresponding test results. Each test run contains the same tests, which are `Component 2 Verify page structure` and `Component 1 Verify page structure`.

<img src={useBaseUrl('img/integrations/testrail/testrail-2.png')} alt="Shows a sample report with two test runs for two different devices." width="700"/>

TestRail will also include the `browser` and `platform` values in each test run description and the `session url` in the results of each test case.

:::note
More than one test case can be executed in one Sauce Labs session, so multiple test results will often have the URL to the same session.
:::

### Sample Command

In the snippet below you can find a sample of the command that parses Sauce Labs reports. The difference is the inclusion of the `--special-parser saucectl` flag.

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

## Viewing Sauce Labs Test Results in TestRail

If you run the [sample command](#sample-command) using the [sample report](#sample-report) above and go to the **Test Cases** page in TestRail, you will see that test cases were automatically created, resulting in a test suite similar to the one shown in the image below.

Notice that although there are four `testcase` elements in the report file, they refer to the same two test cases being executed in two different browsers, so only two tests are created in TestRail.

<img src={useBaseUrl('img/integrations/testrail/testrail-3.png')} alt="Shows the Test Cases page in TestRail." width="700"/>

In the **Test Runs & Results page**, you will see two test runs, one for each browser, which is added to the test run title between parenthesis.

<img src={useBaseUrl('img/integrations/testrail/testrail-4.png')} alt="Shows two test runs for different devices in the Test Runs & Results page in TestRail." width="700"/>

By drilling down to the first test run, relative to the automated tests execution using Chrome, we can see the execution platform information on the test run description and the session URL in the test result. This gives you execution context, as well as links to the Sauce Labs session to find more information about the test execution itself.

<img src={useBaseUrl('img/integrations/testrail/testrail-5.png')} alt="Shows test run details in TestRail." width="700"/>
