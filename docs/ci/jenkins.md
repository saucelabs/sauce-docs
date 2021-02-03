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

### What You'll Need

* Allow access to the following from your Jenkins server:
    - IP range `162.222.72.0/21`
    - `saucelabs.com`
    - `ondemand.saucelabs.com`
* [Jenkins documentation for setting up a Proxy](https://wiki.jenkins-ci.org/display/JENKINS/JenkinsBehindProxy)

## Installing the OnDemand Plugin

Install the Sauce OnDemand plugin from your Jenkins Administration page.

1. From your Jenkins Dashboard, select **Manage Jenkins**, then **Manage Plugins**.
1. Select the **Available** tab and choose **Sauce OnDemand Plugin** from the list.
1. Click **Download now and install after restart**.
1. In the plugin installation process window, select the **Restart Jenkins when installation is complete and no jobs are running** checkbox.

> **NOTE:** The plugin file is fairly large, so download may take several minutes.

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

### Setting Authentication Environment Variables in Your Tests

Once you've configured your Sauce Labs credentials in Jenkins, add the following code reference in any of the Sauce Labs tests managed by the Jenkins projects.

```
WebDriver driver = new RemoteWebDriver(
            new URL("https://"+System.getenv("SAUCE_USERNAME")+":"+System.getenv("SAUCE_ACCESS_KEY")+"@ondemand.saucelabs.com:443/wd/hub",
            desiredCapabilities);
```

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

## Using Sauce Connect in Jenkins

The Sauce OnDemand plugin is bundled with the latest version of Sauce Connect Proxy, which allows you to run your Sauce Labs tests in environments that are not publicly accessible, like your local network or behind a firewall.

Configure Sauce Connect to establish a secure tunnel for your Jenkins projects running Sauce Labs tests against websites or applications on a private network.

### Customize Sauce Connect Settings

You can manage many of the Sauce Connect settings from within the Jenkins dashboard to ensure your tunnels are launched according to your needs. Some options are set globally for all your Jenkins projects and some options are specific to individual projects. For options that can be set at both levels, project-specific values override global settings.

#### Configure Global Sauce Connect Settings

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
        <td><i>Not sure what this means? Need to look up</i></td>
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

#### Configure Sauce Connect Settings for a Project

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
        <td>If you have already created a crendentials variable for your Sauce Labs account, use the drop-down menu to choose it as the authentication account for this project. If you have not created a credentials variable yet, click the <b>Add</b> button to do that now. See <a href="/docs/ci/jenkins#creating-your-sauce-labs-credentials">Creating Your Sauce Labs Credentials</a> for details.</td>
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

## Configuring Tests to Use the Environment Variables

In your test script, you reference the environment variables as part of your desired capabilities. Though the exact syntax will vary depending on your scripting language, this example illustrates the way you would reference the environment variables SELENIUM_BROWSER, SELENIUM_VERSION, AND SELENIUM_PLATFORM in your test script.

```
desiredCapabilities.setBrowserName(System.getenv("SELENIUM_BROWSER"));
desiredCapabilities.setVersion(System.getenv("SELENIUM_VERSION"));
desiredCapabilities.setCapability(CapabilityType.PLATFORM, System.getenv("SELENIUM_PLATFORM"));
```

This example is for a single operating system/browser combination. If you have multiple selections, you can load the JSON string for the SAUCE_ONDEMAND_BROWSERS environment variable by using the JSON library for your scripting language, and then loop through the string to send the various combinations to your test framework.

## Parallel Testing

The OnDemand plugin supports automating your tests to run on many different combinations of device and browser simultaneously. To enable this capability for your Jenkins projects, set your project up as a **Multi-Configuration Project**.

1. From your Jenkins dashboard, select **New item** to define a new project.
1. Enter a name for your project and choose **Multi-configuration project** as the type, and then click **OK**.
1. In the project's configuration page, go to the **Configuration Matrix** section and click **Add Axis**.
1. Choose the Sauce OnDemand test type (WebDriver or Appium) that matches the type of tests you will run in this project. This will dictate the operating system/browser combinations available in the next step.  
1. Select all the operating systems and browser combinations that you want to test against.

When you run a build for this project, it kicks off separate jobs for each OS/browser combination you specified, populating the `SELENIUM_PLATFORM`, `SELENIUM_VERSION`, `SELENIUM_BROWSER`, and `SELENIUM_DRIVER` environment variables and running them simultaneously.  

Build with Parameters
