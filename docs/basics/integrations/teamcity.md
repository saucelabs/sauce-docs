---
id: teamcity
title: Sauce Labs with TeamCity
sidebar_label: TeamCity
description: Use our plugin to run your Sauce Labs tests within your TeamCity pipeline.
---

[TeamCity](https://www.jetbrains.com/teamcity/) is a continuous integration tool suite by JetBrains. Use this documentation to manage your Sauce Labs tests within your TeamCity Java project.

## Installing the Plugin

1. Download the [Sauce OnDemand Plugin for TeamCity](https://saucelabs.com/downloads/teamcity/release/com/saucelabs/teamcity/build/1.50/build-1.50.zip) ZIP file.
1. Copy the ZIP into your TeamCity `~/.BuildServer/plugins` directory and extract the files.
1. Restart TeamCity.

## Configuring a Project

### Create the Project

1. From the TeamCity dashboard, choose  **Administration** and click **Create Project**.
1. For **Name**, enter `SauceDemo` (populates **Project ID** field with `SauceDemo`.
1. Click **Create**.
1. Select the **VCS Roots** tab, click **Create VCS root**, and enter the following field values:
    * **Fetch URL**: `https://github.com/saucelabs-sample-test-frameworks/Java-Junit-Selenium` (use the sample Java/JUnit test framework)
    * **Default Branch**: `Master`
1. Click **Save**.

### Create the Build Configuration

1. On the **General** tab, choose **Create build configuration**.
1. In the **Name** field, enter `Maven`.
1. Click **VCS settings**.
1. In **Attach existing VCS root**, select `https://github.com/saucelabs/java-sauce-example.git#master`.
1. Click **Add build step**.
    * For **Runner type**, choose `Maven`.
    * For **Goals**, enter `test`.
    * **Save** the build step.
1. Click **Add build feature** and select **Sauce Labs Build Feature**.
1. Enter your `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY`.
1. Select **Enable Sauce Connect** if you want to launch an instance of Sauce Connect prior to running your job that will close upon completion of the job (for use in private network environments in order to establish a secure connection to the Sauce platform).
1. Select the operating system and browser combination you want to test against.  
1. Click **Save**.

### Integrate the Tests

1. From the TeamCity dashboard, click **Run**.
1. When the build completes, click **Results** and choose the **Sauce Labs Results** tab.
1. Click the **Job ID** link to view the test report, which lists the steps performed the test and includes a video of the test.


## Setting Environment Variables

Using environment variables in your configuration file allows you to maintain the values of properties in a single source and then reference them throughout all your jobs, ensuring that, if a modification needs to be made, it only needs to be made in one place in order to take effect in all references.

:::note
If you're using Protractor to run your tests with TeamCity, ensure `disableEnvironmentOverrides` is set to false in your `config.ts` file (this is the default setting) to prevent environment variables from being overridden by that file.
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

### TeamCity Environment Variables

|Variable|Description|
|---|----------------|
|SAUCE_TC_BUILDNUMBER|	The build name to use with Sauce Labs jobs|
|TUNNEL_IDENTIFIER|The unique tunnel identifier used by Sauce Connect Proxy, if enabled|

## Outputting the TeamCity Session ID to `stdout`

As part of the post-build activities, the Sauce plugin parses the test result files to detect lines in the `stdout` or `stderr` containing the format:

`SauceOnDemandSessionID=<session id> job-name=<job name>`

To ensure that your test results and Sauce jobs are associated properly, output the `SauceOnDemandSessionID` (obtained from the RemoteWebDriver instance) to `stdout` using the following code.

```
private void printSessionId() {

    String message = String.format("SauceOnDemandSessionID=%1$s job-name=%2$s",
    (((RemoteWebDriver) driver).getSessionId()).toString(), "job name");
    System.out.println(message);
}
```

<p className="deis">We recognize that there are times we use words that are part of a troublesome history. We're working toward replacing these as part of the move to inclusive language within the tech community as a whole.</p>
