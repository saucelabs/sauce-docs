---
id: testrail
title: TestRail Integration
sidebar_label: TestRail
description: Integrating Test Results Into TestRail
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Integrating results into TestRail

TestRail provides a [command line interface tool](https://support.testrail.com/hc/en-us/articles/7146548750868-TestRail-CLI#Overview) to import automated test results, and even automatically create test cases. The TestRail CLI also parses JUnit reports and sends execution data to TestRail, in order to centralize all your test results.

Since one tool produces a JUnit report and the other one consumes that same report, the integration between SauceLabs and TestRail becomes very simple, as per the diagram below.

:::info
In case you need some sample code to quickly get hands-on, please see our [Cypress-saucectl sample project on GitHub](https://github.com/gurock/automation-frameworks-integration/tree/main/samples/javascript/cypress-saucectl).
:::

<img src={useBaseUrl('img/integrations/testrail/testrail-1.png')} alt="saucectl-TestRail Flow" width="700"/>

## Using the TestRail CLI

:::info
For a better understanding of the content in this section, we recommend you also read the [TestRail CLI documentation](https://support.gurock.com/hc/en-us/articles/7146548750868-TestRail-CLI).
:::

As mentioned above, the TestRail CLI is designed to parse JUnit reports and import certain execution data by default. TestRail's CLI tool was specially designed to parse SauceLabs' test reports, including those with multiple executions in one report. In order to import SauceLabs results, when executing the TestRail CLI in your command line, you should use the option `--special-parser saucectl`. This will enable importing all test executions into separate test runs in TestRail.

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

This report reflects the execution of the same test cases on two different devices - Firefox and Chrome - which can be identified on the testsuite element names, as per the image below. This means that the TestRail CLI will create two test runs in TestRail and add the corresponding test results. Each test run contains the same tests, which are `Component 2 Verify page structure` and `Component 1 Verify page structure`

<img src={useBaseUrl('img/integrations/testrail/testrail-2.png')} alt="saucectl-TestRail Flow" width="700"/>

TestRail will also include the `browser` and `platform` values in each test run description and the `session url` in the results of each test case.

:::note
Note that more than one test case can be executed in one SauceLabs session, so multiple test results will often have the URL to the same session.
:::

In the snippet below you can find a sample of the command that parses SauceLabs reports. The difference is the inclusion of the `--special-parser saucectl` flag.

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

If you execute this command using the report sample above and go to your **Test Cases** page, you will see that test cases were automatically created, resulting in a test suite similar to the image below. Notice that although you have four testcase elements in the report file, they refer to the same two test cases being executed in two different browsers, so only two tests are created in TestRail.

<img src={useBaseUrl('img/integrations/testrail/testrail-3.png')} alt="saucectl-TestRail Flow" width="700"/>

By opening the **Test Runs & Results page**, you will see two test runs, one for each browser, which is added to the test run title between parenthesis.

<img src={useBaseUrl('img/integrations/testrail/testrail-4.png')} alt="saucectl-TestRail Flow" width="700"/>

By drilling down to the first test run, relative to the automated tests execution using Chrome, we can see the execution platform information on the test run description and the session URL in the test result. This gives you execution context, as well as links to the SauceLabs session in order to find more information about the test execution itself.

<img src={useBaseUrl('img/integrations/testrail/testrail-5.png')} alt="saucectl-TestRail Flow" width="700"/>
