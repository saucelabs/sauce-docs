---
id: bamboo
title: Sauce Labs with Bamboo
sidebar_label: Bamboo
description: Use our plugin to run your Sauce Labs tests within your Atlassian Bamboo pipeline.
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

[Bamboo](http://www.atlassian.com/software/bamboo) is Atlassian's client-side continuous integration platform. Use this documentation to manage your Sauce Labs tests within your Bamboo pipeline.

## Installing the Plugin

1. Download the [Sauce OnDemand Plugin for Bamboo](https://marketplace.atlassian.com/apps/30134/sauce-ondemand-for-bamboo?hosting=server&tab=overview) from the Atlassian Marketplace.
1. From you Bamboo **Administration** page, go to the **Plugins** section and choose **Plugin Manager**.
1. Search for `sauce` and then expand **Bamboo Sauce OnDemand Plugin** so you can click the **Install** button.
1. After the installation completes, restart Bamboo and return to the **Administration** page.
1. Under **Communication**, click **Sauce OnDemand**.
1. Under **Credentials**, provide your `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY`.


## Setting a Different Data Center

You can set a different data center either globally, for all of your projects, or just for specific projects.
:::note
This configuration is supported in Bamboo OnDemand Plugin versions 1.6.87 or above.
:::

### Set Data Center Globally

1. From your Bamboo home page, click the **Setting** icon in the top right corner.
1. Select **Global Variables**.
1. From the **Communication** menu, choose **Sauce OnDemand**.
1. Enter your `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` and choose the applicable data center from the list.

### Set Data Center for a Project

1. In Bamboo, go to **Build Dashboard > Project > Plan**.
1. Under **Actions**, choose **Configure Plan**.
1. In the **Stage** tab, choose your desired job settings (typically `Default Job`).
1. Select **Miscellaneous**.
1. Enter your `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` and choose the applicable data center from the list.

## Running Sauce Labs Tests in Bamboo

Sauce Labs supports a variety of project languages. Choose the set of instructions that matches the language for your pipeline.

### Create a Plan

1. In Bamboo, choose **Create Plan** and then **Create New Plan**.
1. In the **Plan Details** section, for **Project**, select **New Project** and provide the following values in the fields:
    * **Project Name**: enter `Sauce Demo`.
    * **Project Key**: enter `SAUCE`.
    * **Plan Name**: enter `Java` or `pytest`, as applicable.
    * **Plan Key**: enter `Demo`.
1. Under **Source Repositories**, choose `Git`.
1. For Repository URL, enter the value that matches your plan:
    - `Java`: `https://github.com/rossrowe/sauce-ci-java-demo`
    - `pytest`: `https://github.com/saucelabs-sample-test-frameworks/Python-Pytest-Selenium`
1. For **Branch**, enter `master`.
1. For **Authentication Type**, select `None`.
1. Check `Use shallow clones`.

### Configure Tasks

<Tabs
  defaultValue="java"
  values={[
    {label: 'Java', value: 'java'},
    {label: 'pytest', value: 'pytest'},
  ]}>

<TabItem value="java">

1. Choose **Configure Tasks**, then **Add Task**.
1. Select **Maven 3.x.**
1. For **Task Description** enter `Run Tests`.
1. Click **Save**.
1. Click **Create**.

</TabItem>
<TabItem value="pytest">

1. Choose **Configure Tasks**, then **Add Task**.
1. Click **Command** and enter `Run Task` as the **Task Description**.
1. Click **Add Executable** and enter the following values:
    * **Executable Label**: `pytest`
    * **Path**: enter the path to your nose library
1. Click **Save**.
1. Back in the **Command Configuration** form, enter `--junitxml=results.xml` in the **Argument** field.
1. Click **Save**.
1. Click **Create**.
1. **Do NOT enable the plan yet.**

</TabItem>
</Tabs>

### Configure the Plan

1. Under Plan **Configuration > Stages and Jobs > Default Stage**, select **Default Job**.
1. Click **Miscellaneous**.
1. For **Job Name**, enter `Default Job`.
1. Select **Job Enabled**.
1. Click **Save**.

###  Enable the Sauce Plugin

1. Select **Enable Sauce OnDemand**.
1. In **General Settings**, select the Selenium version you want to use for your tests.
1. Select the **Browser** you want to run your tests against.
1. Enter the **Max Duration**, **Idle Timeout**, and **Starting Browser URL** settings for your test.
1. Deselect the default **Enable Sauce Connect** setting if you do not need to launch a secure Sauce Connect Proxy instance in order to run your job (the instance will automatically close when the job completes).
1. Click **Save**.

### Run the Example Tests

1. From the Bamboo dashboard, click the **Enable** icon.
1. Click the **Run** icon.
1. After the tests complete, click **Sauce Jobs**.
1. Click the Job ID of any job to see the steps performed by the test as well as a test video.

## Setting Environment Variables

Using environment variables in your configuration file allows you to maintain the values of properties in a single source and then reference them throughout all your jobs, ensuring that, if a modification needs to be made, it only needs to be made in one place in order to take effect in all references.

:::note
If you're using Protractor to run your tests with Bamboo, ensure `disableEnvironmentOverrides` is set to false in your `config.ts` file (this is the default setting) to prevent environment variables from being overridden by that file.
:::

### Sauce OnDemand Environment Variables

|Variable|Description|
|---|----------------|
|SELENIUM_HOST|	The hostname of the Selenium server|
|SELENIUM_PORT|	The port of the Selenium server|
|SELENIUM_PLATFORM|	The operating system of the selected browser|
|SELENIUM_VERSION|	The version number of the selected browser|
|SELENIUM_BROWSER|	The name of the selected browser|
|SELENIUM_DRIVER|	Contains the operating system, version and browser name of the selected browser|
|SELENIUM_URL|	The initial URL to load when the test begins|
|SAUCE_USERNAME|	The user name used to invoke Sauce OnDemand|
|SAUCE_ACCESS_KEY|	The access key for the user used to invoke Sauce OnDemand|
|SELENIUM_STARTING_URL|	The value of the Starting URL field|
|SAUCE_ONDEMAND_BROWSERS|	A JSON-formatted string representing browsers you selected for the job configuration|

### Bamboo Environment Variables

Access Bamboo variables using `${bamboo.<variablename>}` in configuration, or `${BAMBOO_<variablename>}` in scripts.

|Variable|Description|
|---|----------------|
|SAUCE_BAMBOO_BUILDNUMBER|	The build name to use with Sauce Labs jobs|
|TUNNEL_IDENTIFIER|The unique tunnel identifier used when **Create a new unique Sauce Connect tunnel per build option** is enabled|

## Outputting the Bamboo Session ID to `stdout`

As part of the post-build activities, the Sauce plugin parses the test result files to detect lines in the `stdout` or `stderr` containing the format:

`SauceOnDemandSessionID=<session id> job-name=<job name>`

To ensure that your test results and Sauce jobs are associated properly, output the `SauceOnDemandSessionID` (obtained from the RemoteWebDriver instance) to `stdout` using the following code.

```
private void printSessionId() {

    String message = String.format("SauceOnDemandSessionID=%1$s job-name=%2$s",
    (((RemoteWebDriver) driver).getSessionId()).toString(), "some job name");
    System.out.println(message);
}
```

<p className="deis">We recognize that there are times we use words that are part of a troublesome history. We're working toward replacing these as part of the move to inclusive language within the tech community as a whole.</p>
