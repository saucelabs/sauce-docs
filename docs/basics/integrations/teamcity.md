---
id: teamcity
title: Sauce Labs with TeamCity
sidebar_label: TeamCity
description: Use our plugin to run your Sauce Labs tests in your TeamCity pipeline.
---

[TeamCity](https://www.jetbrains.com/teamcity/) is a continuous integration tool suite by JetBrains. The Sauce Labs integration with TeamCity, provided by the Sauce OnDemand plugin, lets you manage your Sauce Labs tests in your TeamCity Java project.

## How It Works

The Sauce OnDemand plugin adds a **Sauce Labs Build Feature** to your TeamCity build configurations:

- **Credentials**: You enter your Sauce Labs username and access key in the build feature, and the plugin passes them to your tests as environment variables.
- **Environment variables**: The plugin sets environment variables, such as `SELENIUM_BROWSER` and `SELENIUM_PLATFORM`, based on the operating system and browser combinations you select. See [Set Environment Variables](#set-environment-variables).
- **Sauce Connect**: If you enable it, the plugin launches an instance of Sauce Connect before your job runs and closes it when the job completes. Use it in private network environments to establish a secure connection to the Sauce Labs platform.
- **Test results**: After a build, the plugin parses your test output to associate your test results with Sauce Labs jobs, and shows them on the **Sauce Labs Results** tab of the build.

## Prerequisites

Before you begin, make sure you have:

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
- Your Sauce Labs [username and access key](https://app.saucelabs.com/user-settings).
- A TeamCity server, with access to its `~/.BuildServer/plugins` directory and permission to restart TeamCity.
- A Java project with Sauce Labs tests, for example the [sample Java/JUnit test framework](https://github.com/saucelabs-sample-test-frameworks/Java-Junit-Selenium).

## Set Up the Integration

### Install the Plugin

1. Download the [Sauce OnDemand Plugin for TeamCity](https://saucelabs.com/downloads/teamcity/release/com/saucelabs/teamcity/build/1.57/build-1.57.zip) ZIP file.
2. Copy the ZIP into your TeamCity `~/.BuildServer/plugins` directory and extract the files.
3. Restart TeamCity.

### Create the Project

1. From the TeamCity dashboard, choose **Administration** and click **Create Project**.
2. For **Name**, enter `SauceDemo` (this populates the **Project ID** field with `SauceDemo`).
3. Click **Create**.
4. Select the **VCS Roots** tab, click **Create VCS root**, and enter the following field values:
   - **Fetch URL**: `https://github.com/saucelabs-sample-test-frameworks/Java-Junit-Selenium` (use the sample Java/JUnit test framework)
   - **Default Branch**: `Master`
5. Click **Save**.

### Create the Build Configuration

1. On the **General** tab, choose **Create build configuration**.
2. In the **Name** field, enter `Maven`.
3. Click **VCS settings**.
4. In **Attach existing VCS root**, select `https://github.com/saucelabs/java-sauce-example.git#master`.
5. Click **Add build step**.
   - For **Runner type**, choose `Maven`.
   - For **Goals**, enter `test`.
   - **Save** the build step.
6. Click **Add build feature** and select **Sauce Labs Build Feature**.
7. Enter your `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY`. See [Authentication](#authentication).
8. Select **Enable Sauce Connect** if you want to launch an instance of Sauce Connect before your job runs, which closes when the job completes (for use in private network environments, to establish a secure connection to the Sauce Labs platform).
9. Select the operating system and browser combination you want to test against.
10. Click **Save**.

## Authentication

The integration authenticates with your Sauce Labs **username** and **access key**, which you can find in your Sauce Labs [User Settings](https://app.saucelabs.com/user-settings). Enter them in the **Sauce Labs Build Feature** of your build configuration, as described in [Create the Build Configuration](#create-the-build-configuration). The plugin passes them to your tests as the `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` environment variables, so you don't need to write them into your test code.

## Verify the Integration

1. From the TeamCity dashboard, click **Run**.
2. When the build completes, click **Results** and choose the **Sauce Labs Results** tab.
3. Click the **Job ID** link to view the test report, which lists the steps performed in the test and includes a video of the test.

## Use the Integration

After you set up the integration, you can run your Sauce Labs tests from TeamCity and see the results in the **Sauce Labs Results** tab of each build.

To run your Sauce Labs tests from TeamCity:

1. Use the environment variables set by the plugin in your tests. See [Set Environment Variables](#set-environment-variables).
2. Make sure your tests output the Sauce Labs session ID. See [Output the TeamCity Session ID to stdout](#output-the-teamcity-session-id-to-stdout).
3. Run the build from the TeamCity dashboard.

**Result:** The tests run on Sauce Labs with the operating system and browser combinations you selected, and the results appear on the **Sauce Labs Results** tab of the build.

### Set Environment Variables

Using environment variables in your configuration file lets you maintain the values of properties in a single source and reference them in all your jobs. If you need to change a value, you only need to change it in one place for the change to take effect in all references.

:::note
If you're using Protractor to run your tests with TeamCity, make sure `disableEnvironmentOverrides` is set to false in your `config.ts` file (this is the default setting) to prevent environment variables from being overridden by that file.
:::

#### Sauce OnDemand Environment Variables

| Variable | Description |
| --- | --- |
| `SELENIUM_HOST` | The hostname of the Selenium server |
| `SELENIUM_PORT` | The port of the Selenium server |
| `SELENIUM_PLATFORM` | The operating system of the selected browser |
| `SELENIUM_VERSION` | The version number of the selected browser |
| `SELENIUM_BROWSER` | The name of the selected browser |
| `SELENIUM_DRIVER` | Contains the operating system, version, and browser name of the selected browser |
| `SELENIUM_URL` | The initial URL to load when the test begins |
| `SAUCE_USERNAME` | The user name used to invoke Sauce OnDemand |
| `SAUCE_ACCESS_KEY` | The access key for the user used to invoke Sauce OnDemand |
| `SELENIUM_STARTING_URL` | The value of the Starting URL field |
| `SAUCE_ONDEMAND_BROWSERS` | A JSON-formatted string representing browsers you selected for the job configuration |

#### TeamCity Environment Variables

| Variable | Description |
| --- | --- |
| `SAUCE_TC_BUILDNUMBER` | The build name to use with Sauce Labs jobs |
| `TUNNEL_IDENTIFIER` | The unique tunnel identifier used by the Sauce Connect Proxy, if enabled |

### Output the TeamCity Session ID to `stdout`

As part of the post-build activities, the Sauce OnDemand plugin parses the test result files to detect lines in the `stdout` or `stderr` that have this format:

`SauceOnDemandSessionID=<session id> job-name=<job name>`

To make sure that your test results and Sauce Labs jobs are associated properly, output the `SauceOnDemandSessionID` (obtained from the `RemoteWebDriver` instance) to `stdout` using the following code.

```java
private void printSessionId() {

    String message = String.format("SauceOnDemandSessionID=%1$s job-name=%2$s",
    (((RemoteWebDriver) driver).getSessionId()).toString(), "job name");
    System.out.println(message);
}
```

## Troubleshooting

<details>
<summary>**The Sauce Labs Results tab does not show your tests**</summary>

The plugin associates results with Sauce Labs jobs only when your tests print the `SauceOnDemandSessionID` line. Add the code in
[Output the TeamCity Session ID to stdout](#output-the-teamcity-session-id-to-stdout) to your tests.

</details>

<details>
<summary>**Protractor overrides the plugin's environment variables**</summary>

Set `disableEnvironmentOverrides` to false in your `config.ts` file. False is the default setting.

</details>

<details>
<summary>**Tests cannot reach a site or app on your private network**</summary>

Select **Enable Sauce Connect** in the **Sauce Labs Build Feature** so that the plugin launches Sauce Connect before your job runs. See [Create the Build Configuration](#create-the-build-configuration).

</details>

## Next Steps

- [Sauce Connect Proxy](/secure-connections/sauce-connect-5/)
- [Data Center Endpoints](/basics/data-center-endpoints/)
- [Integrations Overview](/basics/integrations-overview/)

<p className="deis">We recognize that there are times we use words that are part of a troublesome history. We're working toward replacing these as part of the move to inclusive language within the tech community as a whole.</p>
