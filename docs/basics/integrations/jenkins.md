---
id: jenkins
title: Sauce Labs with Jenkins
sidebar_label: Jenkins
description: Use the Sauce OnDemand plugin to run your Sauce Labs tests in your Jenkins jobs and pipelines.
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

[Jenkins](https://www.jenkins.io/) is an open source automation server and one of the most popular continuous integration platforms used in software development. The Sauce Labs integration with Jenkins, provided by the Sauce OnDemand plugin, lets you run your Sauce Labs tests from Jenkins jobs and pipelines, manage Sauce Connect tunnels, and see your test results in Jenkins.

## How It Works

The Sauce OnDemand plugin runs on your Jenkins server and connects your Jenkins jobs to Sauce Labs:

- **Credentials**: The plugin stores your Sauce Labs username and access key as a Jenkins credential, so your jobs can authenticate with Sauce Labs without hard coding credentials in your tests.
- **Environment variables**: Based on your project settings, the plugin sets environment variables, such as `SELENIUM_BROWSER`, `SELENIUM_PLATFORM`, and `SAUCE_BUILD_NAME`, that your tests use to populate their capabilities.
- **Sauce Connect**: The plugin is bundled with the latest version of Sauce Connect. When you enable it, Jenkins starts a Sauce Connect tunnel for each build, so you can test sites and apps that are not publicly accessible, like your local network or apps behind a firewall.
- **Test results**: After a build, the Sauce Labs Test Publisher parses your test results, marks the Sauce Labs jobs as passed or failed, and shows the Sauce Labs test reports on the Jenkins **Build Details** page.

## Prerequisites

Before you begin, make sure you have:

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
- Your Sauce Labs [username and access key](https://app.saucelabs.com/user-settings), which you add to Jenkins as a credential.
- A Jenkins server, and permission to install plugins and add credentials on it.
- Network access from your Jenkins server to the Sauce Labs [IP ranges](/basics/data-center-endpoints/), `saucelabs.com`, and `ondemand.saucelabs.com`.
- (Optional) The Jenkins Pipeline plugin, if you run your Sauce Labs tests in a pipeline. See [Using the OnDemand Plugin with the Jenkins Pipeline](#using-the-ondemand-plugin-with-the-jenkins-pipeline).

## Set Up the Integration

The integration is configured in Jenkins. Install the Sauce OnDemand plugin, add your Sauce Labs credentials (see [Authentication](#authentication)), and then configure the plugin settings globally and for each project. You can manage many of the plugin settings from the Jenkins dashboard to make sure your tests run according to your needs.

### Install the Sauce OnDemand Plugin

Install the Sauce OnDemand plugin from your Jenkins administration page.

1. From your Jenkins Dashboard, select **Manage Jenkins**, then **Manage Plugins**.
2. Select the **Available** tab and choose **Sauce OnDemand Plugin** from the list.
3. Click **Download now and install after restart**.
4. In the plugin installation process window, select the **Restart Jenkins when installation is complete and no jobs are running** checkbox.

:::note
The plugin file is fairly large, so the download may take several minutes.
:::

### Configure Global Sauce Settings

Some plugin options apply to all your Jenkins projects, and some apply to individual projects. When an option can be set at both levels, the project setting overrides the global setting.

1. From your Jenkins dashboard, select **Manage Jenkins**, then **Configure System**.
2. Scroll down to the **Sauce Support** section.
3. Configure the optional settings as needed, based on the descriptions in the following table.

| Setting | Description |
| --- | --- |
| **Disable sending build usage stats to Sauce Labs** | Omit build usage information when transmitting test results data to Sauce Labs. |
| **Override Sauce Connect Path** | Specify a local path into which the Sauce Connect binary compatible with your operating system will be extracted. This value overrides the default `$home` directory.<br/><br/>**Note:** Always run Sauce Connect on the same network as the site or app under test. It does not need to run on the same machine. |
| **Sauce Connect Options** | The list of command line arguments to apply each time Sauce Connect Proxy is launched for any project. For example:<br/>`-i myTunnel -l ./jenkins_scp_log` |
| **Sauce Connect Max Retries** | Maximum number of times Jenkins should attempt to launch a Sauce Connect tunnel before returning a failure. |
| **Sauce Connect Retry Wait Time in Seconds** | The amount of time Jenkins should wait before retrying a failed Sauce Connect launch attempt. |
| **Selenium Environment Variable Prefix** | A value that is automatically added to the front of any Jenkins environment variable set by the Sauce OnDemand plugin. |

4. Click **Save**.

### Configure Sauce Settings for a Project

1. From your Jenkins dashboard, select the project you want to configure.
2. Select **Configure** from the project menu.
3. Select the **Sauce Labs Options** tab to jump to the relevant settings.
4. Configure the optional settings as needed, based on the descriptions in the following table.

:::note
Project-specific settings always override the global value for the same setting.
:::

| Setting | Description |
| --- | --- |
| **Enable Sauce Connect** | Launches a new Sauce Connect tunnel whenever Jenkins starts a build for this project and sets environment variables for `SELENIUM_HOST` and `SELENIUM_PORT` to `localhost:4445`. |
| **Credentials** | If you have already created a credential for your Sauce Labs account, use the **Credentials** dropdown list to choose it as the authentication account for this project. If you have not created a credential yet, click the **Add** button to do that now. See [Add Your Sauce Labs Credentials](#add-your-sauce-labs-credentials) for details. |
| **WebDriver** | Choose one or more operating system and browser combinations you want to test using the WebDriver automation tool. If you specify one option, the plugin populates the following environment variables with values that correspond to your selection: `SELENIUM_PLATFORM`, `SELENIUM_BROWSER`, `SELENIUM_VERSION`, `SELENIUM_DRIVER`, `SELENIUM_DEVICE`, `SELENIUM_DEVICE_ORIENTATION`.<br/><br/>If you choose multiple options, the plugin populates the `SAUCE_ONDEMAND_BROWSERS` environment variable with a JSON string containing the attributes of each browser in your configuration. |
| **Appium** | This setting is the same as the **WebDriver** setting, but it is applicable for use with a mobile browser automation tool. |
| **Native App Package Path** | If the project is testing a native app, this is the directory location of the app package. This value populates the `SAUCE_NATIVE_APP` environment variable for all Sauce tests in this project. |
| **Use latest version of selected browsers** | Automatically set the `SELENIUM_VERSION` environment variable to the latest version of the test browser. |
| **Use latest version of Sauce Connect** | Automatically check for and use the latest version of Sauce Connect when launching a new tunnel for this project.<br/>**We recommend enabling this option** because Sauce Connect releases are independent from plugin releases, so the Sauce Connect version bundled in the plugin may become out of date sooner than the plugin itself. |
| **Clean up jobs and uniquely generated tunnels instead of waiting for timeouts** | If **Create a new unique Sauce Connect tunnel per build** is enabled in the Advanced Options section, checking this option ensures that cancelled builds do not tie up tunnels unnecessarily. |

5. Scroll to the **Sauce Connect Advanced Options** section, and click **Advanced** to display the additional options described in the following table as needed.

| Setting | Description |
| --- | --- |
| **Sauce Connect Launch Condition** | Choose an option from the sub-menu to specify when a tunnel should be launched for builds in this project. The default value is `Always`. |
| **Enable Verbose Logging** | Include Sauce Connect output in the Jenkins console output for each job. |
| **Launch Sauce Connect On Node** | Launch Sauce Connect on a Node instead of the Server. |
| **Sauce Host** | If you have a dedicated Sauce Connect instance running elsewhere, you can set the host in this field to override the default `SELENIUM_HOST` value (`localhost` when Sauce Connect is enabled or `ondemand.saucelabs.com` if Sauce Connect is not enabled). |
| **Sauce Port** | If you have a dedicated Sauce Connect instance running elsewhere, you can set the port in this field to override the default `SELENIUM_PORT` value (`4445` when Sauce Connect is enabled or `4444` if Sauce Connect is not enabled). |
| **Sauce Connect Options** | A list of command line arguments to apply each time Sauce Connect Proxy is launched for this project. For example:<br/>`-i projectTunnel -l ./scp_project_log` |
| **Create a new unique Sauce Connect tunnel per build** | Generates a unique tunnel identifier for each build in this project and populates a `TUNNEL_NAME` environment variable. You must then reference this variable in the capabilities for your tests. |
| **Sauce Connect Binary Location** | A local path that will be the Sauce Connect binary extraction directory for this project. This value overrides the default directory and the global setting.<br/><br/>**Note:** Always run Sauce Connect on the same network as the site or app under test. It does not need to run on the same machine. |
| **Set GitHub commit status with custom context and message** | If you are using an upstream job with the GitHub Pull Request Builder Plugin, enable this option to specify custom context and message values for the pull request in the upstream job. |
| **With Ant** | An option to run the Sauce Labs tests in this project using Apache Ant. |

6. Click **Save**.

## Authentication

The integration authenticates with your Sauce Labs **username** and **access key**, which you can find in your Sauce Labs [User Settings](https://app.saucelabs.com/user-settings). Store them as a Jenkins credential of the kind **Sauce Labs**, so you can reference them globally for all your jobs rather than hard coding them into each test. Jenkins stores the credential securely and passes it to your jobs as the `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` environment variables.

### Add Your Sauce Labs Credentials

1. From your Jenkins dashboard, select **Manage Jenkins**, then **Manage Credentials**.
2. (Optional) Create a unique Sauce Labs domain by hovering over the **Jenkins** store to reveal the context menu icon, and then clicking **Add domain** to define the new domain in which your credentials apply.
3. Hover over the applicable domain and click **Add Credentials** from the context menu.
4. In the **Kind** field, select **Sauce Labs**.
5. Provide the information for your Sauce Labs account:

   - **Scope**: Choose `Global` (recommended) or `System`, based on the level of access these credentials provide in your projects.
   - **Username**: Enter the `USERNAME` value from your Sauce Labs account profile.
   - **Access Key**: Enter the `ACCESS KEY` value from your Sauce Labs account profile.
   - **Sauce Data Center**: Choose the Sauce Labs data center where you run your tests.
   - **ID**: Enter a unique identifier for these credentials in your Jenkins environment, or leave this field blank to let Jenkins generate a random ID.
   - **Description**: Provide a brief, meaningful label for these credentials.

6. Click **OK**.

### Apply the Credentials to a Project

1. From your Jenkins dashboard, select the project that runs your Sauce Labs tests.
2. Choose **Configure** from the project menu.
3. Select the **Sauce Labs Options** tab to jump to the relevant settings.
4. Click the **Credentials** field and choose your credentials ID from the list.
5. Click **Save**.

Repeat these steps for any additional projects that run Sauce Labs tests.

### Set Credentials for EU Data Center Pipeline Builds

For non-pipeline builds in the EU data center, apply your EU credentials to the project as described in [Apply the Credentials to a Project](#apply-the-credentials-to-a-project). For pipeline builds in the EU data center, set the credential ID you created in Jenkins in your pipeline block, as shown in the following example.

```groovy
stage('Test') {
    sauce('sauceuser-EU') {
        sauceconnect(useGeneratedTunnelIdentifier: true, verboseLogging: true) {
            sh 'mvn test'
        }
    }
}
```

## Verify the Integration

1. Run a build of a project that you configured with your Sauce Labs credentials and the **Run Sauce Labs Test Publisher** post-build action (see [Publish Test Status to Sauce Labs](#publish-test-status-to-sauce-labs)).
2. Open the **Build Details** page for the build in Jenkins.
3. Confirm that the Sauce Labs test reports for the build appear on the **Build Details** page, and that the tests appear in Sauce Labs under the build name set by the `SAUCE_BUILD_NAME` environment variable.

If you enabled Sauce Connect with **Enable Verbose Logging**, you can also check the Jenkins console output for the build to confirm that the Sauce Connect tunnel started.

## Use the Integration

After you set up the integration, you can run your Sauce Labs tests from Jenkins and see the results in both Jenkins and Sauce Labs.

To run your Sauce Labs tests from Jenkins:

1. Use the environment variables set by the plugin to populate your test capabilities. See [Populate Your Capabilities with Environment Variables](#populate-your-capabilities-with-environment-variables).
2. Run a build of your Jenkins project.
3. Open the **Build Details** page for the build in Jenkins.

**Result:** The tests run on Sauce Labs with the platforms and browsers selected in your project settings, and the test results appear on the Jenkins **Build Details** page and in Sauce Labs.

### Populate Your Capabilities with Environment Variables

Sauce Labs tests use capabilities to specify the environment on which a test runs. Many of the plugin settings you configured generate environment variables that you can use to populate your test capabilities.

#### Environment Variables

The following environment variables are relevant for Sauce Labs tests running in Jenkins. Most of them are generated automatically from your plugin and Sauce Connect settings.

| Variable | Description | Usage |
| --- | --- | --- |
| `SELENIUM_HOST` | Identifies the Selenium server host. | Configured by the **Sauce Host** project setting. When not set, defaults to `localhost` if Sauce Connect is enabled or `ondemand.saucelabs.com` if Sauce Connect is not enabled. |
| `SELENIUM_PORT` | Identifies the Selenium server port. | Configured by the **Sauce Port** project setting. When not set, defaults to `4445` if Sauce Connect is enabled or `4444` if Sauce Connect is not enabled. |
| `SELENIUM_PLATFORM` | The operating system on which the browser being tested is installed. | Populated by the **WebDriver** or **Appium** operating system combination specified during project configuration. |
| `SELENIUM_VERSION` | The version number of the browser being tested. | Populated by the **WebDriver** or **Appium** operating system combination specified during project configuration, or dynamically if the **Use latest version of selected browsers** option is enabled. |
| `SELENIUM_BROWSER` | The name of the browser being tested. | Populated by the **WebDriver** or **Appium** operating system combination specified during project configuration. |
| `SELENIUM_DRIVER` | Contains the operating system, version, and browser name of the selected browser, in a format designed for use by the Selenium Client Factory. | Populated by the **WebDriver** or **Appium** operating system combination specified during project configuration. |
| `SELENIUM_DEVICE` | The type of hardware on which the browser being tested is running. | Populated by the **WebDriver** or **Appium** operating system combination specified during project configuration. |
| `SELENIUM_DEVICE_ORIENTATION` | The direction of the device (`Portrait` or `Landscape`) used for testing. | Populated by the **WebDriver** or **Appium** operating system combination specified during project configuration. |
| `SELENIUM_URL` | The initial URL to load when the test begins. | Not automatically populated. |
| `SAUCE_USERNAME` | The username of the Sauce Labs account on which tests in this project are run. | Populated by the `Username` value of the credential associated with the project. |
| `SAUCE_ACCESS_KEY` | The access key of the Sauce Labs account on which tests in this project are run. | Populated by the `Access Key` value of the credential associated with the project. |
| `SELENIUM_STARTING_URL` | The value of the Starting URL field. | This value is not populated by any configuration setting. |
| `SAUCE_ONDEMAND_BROWSERS` | A JSON-formatted string containing a set of attributes for multiple operating system and browser combinations. | Populated when you select more than one **WebDriver** or **Appium** value during project configuration. |
| `TUNNEL_IDENTIFIER` or `TUNNEL_NAME` (as of v1.207) | The unique tunnel identifier used when Sauce Connect is launched. | Populated when the **Create a new unique Sauce Connect tunnel per build** option is selected during project configuration. |
| `JENKINS_BUILD_NUMBER` | The ID of the build the Sauce OnDemand plugin uses when showing results that are not in the logs. | Populated when the `buildName` capability is set for the test. |
| `SAUCE_BUILD_NAME` | The name of the build the Sauce OnDemand plugin uses when showing test results. | The plugin automatically populates this value at run time with `${JOB_NAME}_${BUILD_NUMBER}`. |

#### Reference Environment Variables in Your Tests

Sauce Labs automated tests use `capabilities` to tell Sauce Labs everything it needs to know before the test runs, such as which device, operating system, and browser the test should target, which versions of those systems to use, and which Sauce Labs user is authorizing the test. Using environment variables as the values for your test capabilities lets you run a single test against multiple environments. For example, several of the following capabilities use the `SAUCE_ONDEMAND_BROWSERS` environment variable, which loops through the multiple platform combinations configured for the project.

```java
desiredCapabilities.setBrowserName(System.getenv("SAUCE_ONDEMAND_BROWSERS"));
desiredCapabilities.setVersion(System.getenv("SAUCE_ONDEMAND_BROWSERS"));
desiredCapabilities.setCapability(CapabilityType.PLATFORM, System.getenv("SAUCE_ONDEMAND_BROWSERS"));
desiredCapabilities.setCapability(build, System.getenv("SAUCE_BUILD_NAME"));
```

### Run Tests in Parallel

The Sauce OnDemand plugin can run your tests on many combinations of device and browser at the same time. To enable this for your Jenkins projects, set up your project as a **Multi-Configuration Project**.

1. From your Jenkins dashboard, select **New item** to define a new project.
2. Enter a name for your project, choose **Multi-configuration project** as the type, and then click **OK**.
3. In the project's configuration page, go to the **Configuration Matrix** section and click **Add Axis**.
4. Choose the Sauce OnDemand test type (WebDriver or Appium) that matches the type of tests you run in this project. This determines the operating system and browser combinations available in the next step.
5. Select all the operating system and browser combinations that you want to test against.

When you run a build for this project, it starts separate jobs for each operating system and browser combination you specified, populates the `SELENIUM_PLATFORM`, `SELENIUM_VERSION`, `SELENIUM_BROWSER`, and `SELENIUM_DRIVER` environment variables, and runs the jobs at the same time.

#### Choose Combinations at Run Time

You can also configure your project so that you choose specific operating system and browser combinations at run time, rather than in the build specification itself. This lets you test only the environments that a recent change may affect, for example.

1. From the **Configure** page of your project, select **This project is parameterized**.
2. Click **Add Parameter** and select **Sauce Labs Browsers** from the list.
3. When you run the tests in this project, click **Build with Parameters**.
4. In the parameters selection screen, choose the operating system and browser combinations you want to test in this run.

Jenkins populates the `SELENIUM_PLATFORM`, `SELENIUM_VERSION`, `SELENIUM_BROWSER`, and `SELENIUM_DRIVER` environment variables for each combination you specified and runs the tests in parallel.

### Report Results Between Sauce Labs and Jenkins

<p><span className="sauceGreen">VIRTUAL CLOUD ONLY</span></p>

The following sections describe how to share information about your Sauce Labs tests between Sauce Labs and your Jenkins dashboard.

#### Capture Build Details

Set the `SAUCE_BUILD_NAME` environment variable as the value of the `build` capability to set the Sauce Labs build name at run time. This lets you access your test reports by build in Sauce Labs and view them on the Jenkins **Build Details** page.

```java title="Java Build Capabilities Example"
DesiredCapabilities capabilities = new DesiredCapabilities();
// ...
capabilities.setCapability("build", System.getenv("SAUCE_BUILD_NAME"));
```

#### Publish Test Status to Sauce Labs

The Sauce OnDemand plugin can also mark your Sauce Labs jobs as passed or failed, but you need to configure Jenkins to parse the test results.

1. From the **Configure** page of your project, select the **Post-Build Actions** tab.
2. Select **Run Sauce Labs Test Publisher**.

#### Output the Session ID to Standard Output

As part of the post-build activities, the plugin parses the test result files to associate test results with Sauce Labs jobs. It does this by identifying lines in stdout or stderr that have this format:

`SauceOnDemandSessionID=<session id> job-name=<some job name>`

You can get the session ID from the `RemoteWebDriver` instance. The job name can be any string, but is generally the name of the test class being run.

To make sure that your test results and Sauce Labs jobs are associated correctly, output the session ID to stdout. For example, the following Java code outputs the session ID to stdout.

```java
private void printSessionId() {

    String message = String.format("SauceOnDemandSessionID=%1$s job-name=%2$s",
    (((RemoteWebDriver) driver).getSessionId()).toString(), "some job name");
    System.out.println(message);
}
```

### Set Up Multi-Node Job Queuing

Automatic job queuing is one of the most helpful features of Jenkins. If more build jobs are requested than there are resources to run them, Jenkins queues your tests and runs them in the order they were requested as resources become available. You can also use labels to specify the resources you want to use for specific jobs, and set up graceful queuing for your tests.

On the Jenkins dashboard, the **Build Queue** and **Build Executor Status** panels show each Node's capacity for running jobs. By default, a Node with two executors can run up to two jobs at once. Any additional jobs are added to the queue and run on the next executor that becomes free.

Assigned Nodes let you define Nodes for specific purposes, such as dedicated platforms, load balancing, and other functions. To assign projects to a specific Node, the Node must have a label.

To label a Node and assign a project to it:

1. From the Jenkins Dashboard, select **Manage Jenkins**, then click **Manage Nodes & Clouds** and choose **Add New Node**.
2. Provide a name for the Node and the number of executors it can use.
3. Add a descriptive **Label**, such as `sauceJobs`.
4. From the **Configure** page of any project you want to run on this Node, select **Restrict where this project can be run** to enable the **Label Expression** field, and then enter the label of the Node.

Projects configured to run on specific Nodes are queued to run on their assigned Nodes according to availability.

## Using the OnDemand Plugin with the Jenkins Pipeline

Jenkins Pipeline is a Jenkins plugin, based on the Groovy programming language, for managing your continuous delivery process. The Sauce OnDemand plugin provides pipeline steps that authenticate with Sauce Labs, manage Sauce Connect, and publish your test results, so you can run your Sauce Labs tests as part of your pipeline.

### Add the Sauce Block

The `sauce` block passes your Sauce Labs username and access key to your pipeline as environment variables.

1. Open the **Snippet Generator** in Jenkins Pipeline.
2. Select **sauce: Sauce** and click **Generate Groovy**.
3. Add the returned snippet to your Groovy script.

### Add the Sauce Connect Block

The `sauceconnect` block starts and stops Sauce Connect. Wrap it in the `sauce` block so that your authentication is included.

1. Open the **Snippet Generator** in Jenkins Pipeline.
2. Select **sauce: Sauce Connect** and click **Generate Groovy**.
3. Add the returned snippet to your Groovy script within the `sauce` block.

The following example shows the `sauce` and `sauceconnect` snippets as they would be added to the Groovy script.

```groovy title="Sample Sauce and Sauce Connect Block Snippets"
node('mac') {
    sauce('36987f5a-62da-40ac-bbc0-583806f9df4d') {
        sauceconnect(useGeneratedTunnelIdentifier: true, verboseLogging: true) {
            sh 'env | sort'
        }
    }
}
```

### Add the Sauce Publisher Step

The `saucePublisher` step sends test result data to Sauce Labs. See [Publish Test Status to Sauce Labs](#publish-test-status-to-sauce-labs).

1. Open the **Snippet Generator** in Jenkins Pipeline.
2. Select **saucePublisher: Run Sauce Labs Test Publisher** and click **Generate Groovy**.
3. Add the returned snippet to your Groovy script.

:::note
You don't need to wrap `saucePublisher` in the `sauce` block, but you must include `saucePublisher` somewhere in the pipeline file to report the results.
:::

## Troubleshooting

<details>
<summary>**The plugin download takes several minutes**</summary>

The plugin file is large. Wait for the download to finish, and let Jenkins restart when no jobs are running.

</details>

<details>
<summary>**Jenkins cannot connect to Sauce Labs**</summary>

Allow your Jenkins server to reach the Sauce Labs [IP ranges](/basics/data-center-endpoints/), `saucelabs.com`, and `ondemand.saucelabs.com`.

</details>

<details>
<summary>**The Sauce Connect tunnel does not start**</summary>

Select **Enable Verbose Logging** in the project settings to see the Sauce Connect output in the Jenkins console output. To give the launch more attempts, raise **Sauce Connect Max Retries** and **Sauce Connect Retry Wait Time in Seconds** in the global settings.

</details>

<details>
<summary>**Cancelled builds leave Sauce Connect tunnels running**</summary>

This happens when **Create a new unique Sauce Connect tunnel per build** is enabled. Also enable **Clean up jobs and uniquely generated tunnels instead of waiting for timeouts** in the project settings.

</details>

<details>
<summary>**Test results do not appear on the Build Details page**</summary>

Add the **Run Sauce Labs Test Publisher** post-build action, or the `saucePublisher` step in a pipeline, and print the `SauceOnDemandSessionID` line to stdout. See
[Report Results Between Sauce Labs and Jenkins](#report-results-between-sauce-labs-and-jenkins).

</details>

<details>
<summary>**Sauce Labs jobs are not marked as passed or failed**</summary>

The plugin sets the result only after it parses your test results. Configure the **Run Sauce Labs Test Publisher** post-build action, as shown in
[Publish Test Status to Sauce Labs](#publish-test-status-to-sauce-labs).

</details>

<details>
<summary>**A project ignores the global plugin settings**</summary>

Project settings override global settings. Check the **Sauce Labs Options** for the project.

</details>

## Next Steps

- [Run tests with saucectl in Jenkins](/dev/cli/saucectl/usage/ci/jenkins)
- [Sauce Connect Proxy](/secure-connections/sauce-connect-5/)
- [Data Center Endpoints](/basics/data-center-endpoints/)
- [Integrations Overview](/basics/integrations-overview/)
