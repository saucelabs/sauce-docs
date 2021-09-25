---
id: jenkins
title: Sauce Labs with Jenkins
sidebar_label: Jenkins
description: Use our plugin to run your Sauce Labs tests within your Jenkins pipeline.
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The OnDemand plugin allows you to easily manage your Sauce Labs testing from [Jenkins](https://jenkins-ci.org/), one of the most popular continuous integration platforms used in software development.

## What You'll Learn

* How to install and configure the Sauce OnDemand Plugin for Jenkins
* How to configure Sauce Connect to enable testing on private networks
* How to run parallel tests in Jenkins
* How to set up reporting between Sauce Labs & Jenkins
* How to implement the OnDemand plugin into your Jenkins pipeline

## What You'll Need

* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up))
* Your Sauce Labs [Username and Access Key](https://app.saucelabs.com/user-settings)
* Allow access to the following from your Jenkins server:
    - IP range `162.222.72.0/21`
    - `saucelabs.com`
    - `ondemand.saucelabs.com`


## Installing the OnDemand Plugin

Install the Sauce OnDemand plugin from your Jenkins Administration page.

1. From your Jenkins Dashboard, select **Manage Jenkins**, then **Manage Plugins**.
1. Select the **Available** tab and choose **Sauce OnDemand Plugin** from the list.
1. Click **Download now and install after restart**.
1. In the plugin installation process window, select the **Restart Jenkins when installation is complete and no jobs are running** checkbox.

:::note
The plugin file is fairly large, so download may take several minutes.
:::

### Creating Your Sauce Labs Credentials

Once you have installed the plugin and Jenkins has restarted, add your Sauce Labs credentials as environment variables so you can reference them globally for all your jobs rather than hard coding them into each test.

1. From your Jenkins dashboard, select **Manage Jenkins**, then **Manage Credentials**.
1. You can optionally create a unique Sauce Labs domain by hovering over the **Jenkins** store to reveal the context menu icon, then clicking **Add domain** to define the new domain in which your credentials will apply.
1. Hover over the applicable domain and click **Add Credentials** from the context menu.
1. In the **Kind** field, use the pull-down menu to select **Sauce Labs**.
1. Provide the information in the form relevant to your Sauce Labs account:
    * **Scope**: Choose `Global` (recommended) or `System` based on level of access these credentials will provide in your projects.
    * **Username**: Enter the `USERNAME` value from your Sauce Labs account profile.
    * **Access Key**: Enter the `ACCESS KEY` value from your Sauce Labs account profile.
    * **Sauce Data Center**: Choose the Sauce Labs data center through which you run your tests.
    * **ID**: Enter a unique identifier for these credentials in your Jenkins environment, or leave this field blank to allow Jenkins to generate a random ID.
    * **Description**: Provide a brief, meaningful label for these credentials.
1. Click **OK**.
1. Back in your Jenkins dashboard, select an applicable project to apply your credentials.
1. Choose **Configure** from the project menu.
1. Select the **Sauce Labs Options** tab to jump to the relevant settings.
1. Click the **Credentials** field and choose your credentials ID from the list.
1. Click **Save**.
1. Repeat for any additional projects that manage Sauce Labs tests.

### Setting Credentials for EU Data Center Pipeline Builds

Use the process outlined in steps 7-12 above to apply EU credentials for non-pipeline builds, but for pipeline builds in the EU data center, set the credential ID you created in Jenkins in your Pipelines Block, as shown in the following example.

```
stage('Test') {
    sauce('sauceuser-EU') {
        sauceconnect(useGeneratedTunnelIdentifier: true, verboseLogging: true) {
            sh 'mvn test'
        }
    }
}
```

## Configuring Sauce Labs and Sauce Connect Settings in Jenkins

You can manage many of the plugin settings from within the Jenkins dashboard to ensure your tests run according to your needs. The plugin is bundled with the latest version of Sauce Connect. When you enable it, you can run your Sauce Labs tests in environments that are not publicly accessible, like your local network or behind a firewall.

 Some plugin options are set globally for all your Jenkins projects and some options are specific to individual projects.

:::note
When options can be set at both levels, project settings override global settings.
:::

### Configure Global Sauce Settings

<ol>
  <li>From your Jenkins dashboard, choose <b>Manage Jenkins</b> and then <b>Configure System</b>.</li>
  <li>Scroll down to the <b>Sauce Support</b> section.</li>
  <li>Configure the optional settings as needed, based on the descriptions in the following table.
    <table>
      <tr>
        <th>Setting</th>
        <th>Description</th>
      </tr>
      <tr>
        <td><b>Disable sending build usage stats to Sauce Labs</b></td>
        <td>Omit build usage information when transmitting test results data to Sauce Labs.</td>
      </tr>
      <tr>
        <td><b>Override Sauce Connect Path</b></td>
        <td>Specify a local path into which the Sauce Connect binary compatible with your operating system will be extracted. This value will override the default <code>$home</code> directory.<br/> <b>NOTE:</b> Always run Sauce Connect on the same network as the site or application under test, but the same machine is not required.</td>
      </tr>
      <tr>
        <td><b>Sauce Connect Options</b></td>
        <td>The list of command line arguments to apply each time Sauce Connect Proxy is launched for any project. For example:<br/>
        <code>-i myTunnel -l ./jenkins_scp_log</code>
        </td>
      </tr>
      <tr>
        <td><b>Sauce Connect Max Retries</b></td>
        <td>Maximum number of times Jenkins should attempt to launch a Sauce Connect tunnel before retuning a failure.</td>
      </tr>
      <tr>
        <td><b>Sauce Connect Retry Wait Time in Seconds</b></td>
        <td>The amount of time Jenkins should wait before retrying a failed Sauce Connect launch attempt.</td>
      </tr>
      <tr>
        <td><b>Selenium Environment Variable Prefix</b></td>
        <td>A value that will be automatically added to the front of any Jenkins environment variable set by the Sauce OnDemand plugin.</td>
      </tr>
    </table>
  </li>
  <li>Click <b>Save</b></li>
</ol>

### Configure Sauce Settings for a Project

<ol>
  <li>From your Jenkins dashboard, select the project you wish to configure.</li>
  <li>Choose <b>Configure</b> from the project menu.</li>
  <li>Choose the <b>Sauce Labs Options</b> tab to jump to the relevant settings.</li>
  <li>Configure the optional settings as needed, based on the descriptions in the following table.<br/>
    <b>NOTE:</b> Project specific settings will always override the global value for the same setting.<br/>  
    <table>
      <tr>
        <th>Setting</th>
        <th>Description</th>
      </tr>
      <tr>
        <td><b>Enable Sauce Connect</b></td>
        <td>Launches a new Sauce Connect tunnel whenever Jenkins starts a build for this project and sets environment variables for <code>SELENIUM_HOST</code> and <code>SELENIUM_PORT</code> to <code>localhost:4445</code>.</td>
      </tr>
      <tr>
        <td><b>Credentials</b></td>
        <td>If you have already created a crendentials variable for your Sauce Labs account, use the drop-down menu to choose it as the authentication account for this project. If you have not created a credentials variable yet, click the <b>Add</b> button to do that now. See <a href="#creating-your-sauce-labs-credentials">Creating Your Sauce Labs Credentials</a> for details.</td>
      </tr>
      <tr>
        <td><b>WebDriver</b></td>
        <td>Choose one or more operating system and browser combinations you wish to test using the WebDriver automation tool. If you specify one option, the plugin populates the following environment variables with values that correspond to your selection.
          <ul>
            <li><code>SELENIUM_PLATFORM</code></li>
            <li><code>SELENIUM_BROWSER</code></li>
            <li><code>SELENIUM_VERSION</code></li>
            <li><code>SELENIUM_DRIVER</code></li>
            <li><code>SELENIUM_DEVICE</code></li>
            <li><code>SELENIUM_DEVICE_ORIENTATION</code></li>
          </ul><br/>
        If you choose multiple options, the plugin populates the <code>SAUCE_ONDEMAND_BROWSERS</code> environment variable with a JSON string containing the attributes of each browser in your configuration.
        </td>
      </tr>
      <tr>
        <td><b>Appium</b></td>
        <td>This setting is the same as the <b>WebDriver</b> setting, but it is appplicable for use with a mobile browser automation tool.</td>
      </tr>
      <tr>
        <td><b>Native App Package Path</b></td>
        <td>If the project is testing a native app, this is the directory location of the app package. This value will populate the <code>SAUCE_NATIVE_APP</code> environment variable for all Sauce tests in this project.</td>
      </tr>
      <tr>
        <td><b>Use latest version of selected browsers</b></td>
        <td>Automatically set the <code>SELENIUM_VERSION</code> environment variable to the latests version of the test browser.</td>
      </tr>
      <tr>
        <td><b>Use latests version of Sauce Connect</b></td>
        <td>Automatically check for and use the latest version of Sauce Connect when launching a new tunnel for this project.<br/><b>We recommend enabling this option</b> because Sauce Connect releases are independent from plugin releases, so the Sauce Connect version bundled in the plugin may become out of date sooner than the plugin itself.</td>
      </tr>
      <tr>
        <td><b>Clean up jobs and uniquely generated tunnels instead of waiting for timeouts</b></td>
        <td>If <b>Create a new unique Sauce Connect tunnel per build</b> in enabled in the Advanced Options section, checking this option ensures that aborted builds do not tie up tunnels unnecessarily.</td>
      </tr>
    </table>
  </li>
  <li> Scroll to the <b>Sauce Connect Advanced Options</b> section and click <b>Advanced</b>to display additional options described in the following table as needed.
    <table>
      <tr>
        <th>Setting</th>
        <th>Description</th>
      </tr>
      <tr>
        <td><b>Sauce Connect Launch Condition</b></td>
        <td>Choose an option from the sub-menu to specify a more granular application for when a tunnel should be launched for builds in this project. The default value is <code>Always</code>.</td>
      </tr>
      <tr>
        <td><b>Enable Verbose Logging</b></td>
        <td>Include Sauce Connect output in the Jenkins console output for each job.</td>
      </tr>
      <tr>
        <td><b>Launch Sauce Connect On Slave</b></td>
        <td>Launch Sauce Connect on the Jenkins slave node instead of the master node.</td>
      </tr>
      <tr>
        <td><b>Sauce Host</b></td>
        <td> If you have a dedicated Sauce Connect instance running elsewhere, you can set the host here and override the default <code>SELENIUM_HOST</code> value (<code>localhost</code> when Sauce Connect is enabled or <code>ondemand.saucelabs.com</code> if Sauce Connect is not enabled).</td>
      </tr>
      <tr>
        <td><b>Sauce Port</b></td>
        <td>If you have a dedicated Sauce Connect instance running elsewhere, you can set the port here and override the default <code>SELENIUM_PORT</code> value (<code>4445</code> when Sauce Connect is enabled or <code>4444</code> if Sauce Connect is not enabled).</td>
      </tr>
      <tr>
        <td><b>Sauce Connect Options</b></td>
        <td>A list of command line arguments to apply each time Sauce Connect Proxy is launched for this project. For example:<br/>
          <code>-i projectTunnel -l ./scp_project_log</code>
        </td>
      </tr>
      <tr>
        <td><b>Create a new unique Sauce Connect tunnel per build</b></td>
        <td>Generates a unique tunnel identifier for each build in this project and populates a <code>TUNNEL_IDENTIFIER</code> environment variable. You must then reference this variable in the desired capabilities for your tests.</td>
      </tr>
      <tr>
        <td><b>Sauce Connect Binary Location</b></td>
        <td>A local path that will be the Sauce Connect binary extraction directory for this project. This value will override the default directory and the global setting.<br/> <b>NOTE:</b> Always run Sauce Connect on the same network as the site or application under test, but the same machine is not required.</td>
      </tr>
      <tr>
        <td><b>Set GitHub commit status with custom context and message</b></td>
        <td>If you are using an upstream job with the GitHub Pull Request Builder Plugin, enable this option to specify custom context and message values for the pull request in the upstream job.</td>
      </tr>
      <tr>
        <td><b>With Ant</b></td>
        <td>An option to run the Sauce Labs tests in this project using Apache Ant.</td>
      </tr>
    </table>
  </li>
</ol>

## Populating your Capabilities with Environment Variables

Sauce Labs tests use capabilities settings to specify the environment on which a test will run. Many of the plugin configurations you have set in the preceding section automatically generate applicable environment variables that can then be used to populate your test capabilities.

### Environment Variables

The following environment variables are relevant for Sauce Labs tests running in Jenkins and can be used to populate your test capabilities. Most of the environment variables defined here are automatically generated based on your project configurations for the plugin and Sauce Connect.

|Variable|Description|Usage|
|---|---|---|
|`SELENIUM_HOST`|Identifies the Selenium server host.|Configured by the **Sauce Host** project setting. When not set, defaults to `localhost` if Sauce Connect is enabled or `ondemand.saucelabs.com` if Sauce Connect is not enabled.|
|`SELENIUM_PORT`|	Identifies the Selenium server port.|Configured by the **Sauce Port** project setting. When not set, defaults to `4445` if Sauce Connect is enabled or `4444` if Sauce Connect is not enabled.
|`SELENIUM_PLATFORM`|The operating system on which the browser being tested is installed.|Populated by the **WebDriver** or **Appium** operating system combination specified during project configuration.|
|`SELENIUM_VERSION`|	The version number of the browser being tested.|Populated by the **WebDriver** or **Appium** operating system combination specified during project configuration or dynamically if the **Use latest version of selected browsers** option is enabled.|
|`SELENIUM_BROWSER`|The name of the browser being tested.|Populated by the **WebDriver** or **Appium** operating system combination specified during project configuration.|
|`SELENIUM_DRIVER`|Contains the operating system, version and browser name of the selected browser, in a format designed for use by the Selenium Client Factory.|Populated by the **WebDriver** or **Appium** operating system combination specified during project configuration.|
|`SELENIUM_DEVICE`|The type of hardware on which the browser being tested is running.|Populated by the **WebDriver** or **Appium** operating system combination specified during project configuration.|
|`SELENIUM_DEVICE_ORIENTATION`|The direction of the device (`Portrait` or `Landscape`) used for testing.|Populated by the **WebDriver** or **Appium** operating system combination specified during project configuration.|
|`SELENIUM_URL`|The initial URL to load when the test begins.|Not automatically populated.|
|`SAUCE_USERNAME`|The username of the Sauce Labs account on which tests in this project are run.|Populated by the `Username` value of the authentication credential associated with the project.|
|`SAUCE_ACCESS_KEY`|The access key of the Sauce Labs account on which tests in this project are run.|Populated by the `Access Key` value of the authentication credential associated with the project.|
|`SELENIUM_STARTING_URL`|The value of the Starting URL field.|This value is not populated by any configuration setting.|
|`SAUCE_ONDEMAND_BROWSERS`|A JSON-formatted string containing a set of attributes for multiple operating system and browser combinations.|Populated when you select more than one **WebDriver** or **Appium** value during project configuration.|
|`TUNNEL_IDENTIFIER`|The unique tunnel identifier used when Sauce Connect is launched.| Populated when the **Create a new unique Sauce Connect tunnel per build** option is selected during project configuration.|
|`JENKINS_BUILD_NUMBER`|The ID of the build the Sauce OnDemand plugin will use when showing results that are not in the logs.|Populated when the `buildName` capability is set for the test.|
|`SAUCE_BUILD_NAME`|The name of the build the Sauce OnDemand plugin will use when showing test results.|The plugin automatically populates this this value at run-time with `${JOB_NAME}_${BUILD_NUMBER}`.|

### Referencing Environment Variables in Your Tests

Sauce Labs automation test use the `capabilities` parameters to tell Sauce everything it needs to know before the test runs, such as what device, operating system, and browser the test should target; what versions of those systems; and what Sauce user is authorizing the test. Using environment variables as the values for the tests capabilities allows you to run a single test against multiple environments. For example, several of the following test capabilities all use the `SAUCE_ON_DEMAND` environment variable, which will loop through multiple platform combinations configured for the project.

```
desiredCapabilities.setBrowserName(System.getenv("SAUCE_ONDEMAND_BROWSERS"));
desiredCapabilities.setVersion(System.getenv("SAUCE_ONDEMAND_BROWSERS"));
desiredCapabilities.setCapability(CapabilityType.PLATFORM, System.getenv("SAUCE_ONDEMAND_BROWSERS"));
desiredCapabilities.setCapability(build, System.getenv("SAUCE_BUILD_NAME"));
```


## Parallel Testing

The OnDemand plugin supports automating your tests to run on many different combinations of device and browser simultaneously. To enable this capability for your Jenkins projects, set your project up as a **Multi-Configuration Project**.

1. From your Jenkins dashboard, select **New item** to define a new project.
1. Enter a name for your project and choose **Multi-configuration project** as the type, and then click **OK**.
1. In the project's configuration page, go to the **Configuration Matrix** section and click **Add Axis**.
1. Choose the Sauce OnDemand test type (WebDriver or Appium) that matches the type of tests you will run in this project. This will dictate the operating system/browser combinations available in the next step.  
1. Select all the operating systems and browser combinations that you want to test against.

When you run a build for this project, it kicks off separate jobs for each OS/browser combination you specified, populating the `SELENIUM_PLATFORM`, `SELENIUM_VERSION`, `SELENIUM_BROWSER`, and `SELENIUM_DRIVER` environment variables and running them simultaneously.  

Alternatively, you can configure your project so you can choose specific operating system/browser combinations at run-time rather than configuring the combinations in the build specification itself. This option allows you to only test those environments that may be affected by a recent change, for example.

1. From the **Configure** page of your project, check the **This project is parameterized** setting.
1. Click the **Add Parameter** button and select the **Sauce Labs Browsers** option from the list.
1. When you run the tests in this project, click the **Build with Parameters** menu item.
1. In the parameters selection screen, choose the operating system/browser combinations you wish to test for this iteration.

Jenkins populates the `SELENIUM_PLATFORM`, `SELENIUM_VERSION`, `SELENIUM_BROWSER`, and `SELENIUM_DRIVER` environment variables for each combination you specified and runs the tests in parallel.

## Reporting between Sauce Labs and Jenkins

<p><span className="sauceDBlue">VIRTUAL CLOUD ONLY</span></p>

The following sections describe how to share information about your Sauce Labs tests in both the Sauce Labs site and your Jenkins dashboard.


### Capture Build Details

Set the `SAUCE_BUILD_NAME` environment variable as the value of the `build` desired capability to set the Sauce build name at runtime. This enables you to access your test reports by build in Sauce Labs and view them on the Jenkins **Build Details** page.

```java title="Jave Build Capabilities Example"
DesiredCapabilities capabilities = new DesiredCapabilities();
// ...
capabilities.setCapability("build", System.getenv("SAUCE_BUILD_NAME");
```

### Publish Test Status to Sauce Labs

The Sauce plugin for Jenkins will also mark the Sauce jobs as passed or failed, but you need to configure Jenkins to parse the test results.

1. From the **Configure** page of your project, select the **Post-Build Actions** tab.
1. Select **Run Sauce Labs Test Publisher**.

### Output the Jenkins Session ID to stdout

As part of the post-build activities, the Sauce plugin will parse the test result files in an attempt to associate test results with Sauce jobs. It does this by identifying lines in the stdout or stderr that have this format:
`SauceOnDemandSessionID=<session id> job-name=<some job name>`

The session id can be obtained from the RemoteWebDriver instance and the job-name can be any string, but is generally the name of the test class being executed.

To make sure that your test results and Sauce jobs are associated properly, you need to output the session id to stdout. For example, this is the code you would use to output the session id to the Java stdout.

```
private void printSessionId() {

    String message = String.format("SauceOnDemandSessionID=%1$s job-name=%2$s",
    (((RemoteWebDriver) driver).getSessionId()).toString(), "some job name");
    System.out.println(message);
}
```

## Setting up Multi-Node Job Queuing

One of the most helpful features of Jenkins CI is automatic job queuing. If there are more build jobs requested than there are resources to execute those jobs, Jenkins can queue your tests, executing them in the order they were requested as resources become available. Or you can use labels to specify the resources you want to use for specific jobs, and set up graceful queuing for your tests.

On the Jenkins dashboard, The **Build Queue** and **Build Executor Status** panels show the nodes' capacity for running jobs.
By default, a node with two executors can run up to two jobs at once and any additional jobs are added to the Job Queue and will run on the next executor that becomes free.

Assigned nodes let you define nodes for specific purposes, such as dedicated platforms, as well as for load balancing and other functions. To assign projects to a specific node, the node must have a label.

To label a node and assign a project to it:

1. From the Jenkins Dashboard, select **Manage Jenkins**, then click **Manage Nodes & Clouds** and choose **Add New Node**.
1. Provide a name for the node and the number of executors it can use.
1. Add a descriptive **Label**, such as `sauceJobs`.
1. From the **Configure** page of any project you wish to run on this node, check **Restrict where this project can be run** to enable the **Label Expression** field, then enter the label of the applicable node for the project.

Projects configured to run on specific nodes queue to run on their assigned nodes according to availability.

## Using the OnDemand Plugin with the Jenkins Pipeline

Pipeline is a plugin for Jenkins, based on the Groovy programming language, for managing your Continuous Deployment process. The OnDemand plugin lets you authenticate to Sauce Labs and manage Sauce Connect so you can take advantage of your Jenkins Pipeline integration to run your Sauce Labs tests.

### Creating the Sauce Block Snippet

The `{sauce}` block lets you pass your Sauce Labs username and access key as environment variables to Jenkins.

1. Enable the **Snippet Generator** in Jenkins Pipeline.
1. Select **sauce: Sauce** and **Generate Groovy**.
1. Add the returned snippet to your Groovy script.

### Creating the Sauce Connect Block Snippet

The `{sauceconnect}` block lets you manage starting and stopping Sauce Connect. Wrap it with the `{sauce}` block so your authentication is included.

1. Enable the **Snippet Generator** in Jenkins Pipeline.
1. Select **sauce: Sauce Connect** and **Generate Groovy**.
1. Add the returned snippet to your Groovy script within the `{sauce}` block.

The following example shows the `sauce` and `sauceconnect` snippets as they would be added in the Groovy script.

```jsx title="Sample Sauce and Sauce Connect Block Snippets"

node('mac') {
    sauce('36987f5a-62da-40ac-bbc0-583806f9df4d') {
        sauceconnect(useGeneratedTunnelIdentifier: true, verboseLogging: true) {
            sh 'env | sort'
        }
    }
}
```

### Creating the Sauce Publisher Snippet

The `{saucePublisher}` function lets you send test result data to Sauce Labs. See [Publishing Test Status to Sauce Labs](#publishing-test-status-to-sauce-labs).

1. Enable the **Snippet Generator** in Jenkins Pipeline.
1. Select **saucePublisher: Run Sauce Labs Test Publisher** and **Generate Groovy**.
1. Add the returned snippet to your Groovy script.

:::note
You need not wrap the `{saucePublisher}` in the `{sauce}` snippet, but do include the `{saucePublisher}` in some part of the Pipeline file in order to report the results.
:::

<p className="deis">We recognize that there are times we use words that are part of a troublesome history. We're working toward replacing these as part of the move to inclusive language within the tech community as a whole.</p>
