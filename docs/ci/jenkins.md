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

### Adding Sauce Labs Credentials to your Projects

Once you have installed the plugin and Jenkins has restarted, add your Sauce Labs credentials as environment variables so you can reference them globally for all your jobs rather than hard coding them into each test.

1. From your Jenkins dashboard, select **Manage Jenkins**, then **Manage Credentials**.
1. You can optionally create a unique Sauce Labs domain by hovering over the **Jenkins** store to reveal the context menu icon, then clicking **Add domain** to define the new domain in which your credentials will apply.
1. Hover over the applicable domain and click **Add Credentials** from the context menu.
1. In the **Kind** field, use the pull-down menu to select **Sauce Labs**.
1. Provide the information in the form relevant to your Sauce Labs account:
    **Scope**: Choose `Global` or `System` based on level of access these credentials will provide in your projects.
    **Username**: Enter the `USERNAME` value from your Sauce Labs account profile.
    **Access Key**: Enter the `ACCESS KEY` value from your Sauce Labs account profile.
    **Sauce Data Center**: Choose the Sauce Labs data center through which you run your tests.
    **ID**: Enter a unique identifier for these credentials in your Jenkins environment, or leave this field blank to allow Jenkins to generate a random ID.
    **Description**: Provide a brief, meaningful label for these credentials.
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

For pipeline builds in the EU data center, set the credential ID you created in Jenkins in your Pipelines Block, as shown in the following example.

> **NOTE:** Non-pipeline builds apply credentials using the same method as the US projects.

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

The Sauce OnDemand plugin is bundled with the latest version of [Sauce Connect Proxy](/docs/secure-connections.md), which allows you to run your Sauce Labs tests in environments that are not publicly accessible, like your local network or behind a firewall.

Configure Sauce Connect Proxy to establish a secure tunnel for your Jenkins projects running Sauce Labs tests against websites or applications on a private network.

1. From your Jenkins dashboard, select a Sauce Labs project that requires a secure connection.
1. Choose **Configure** from the project menu.
1. Select the **Build Environment** tab to jump to the relevant settings.
1. Check **Sauce Labs Support** to enable the **Sauce Labs Options** settings.  
1. Check **Enable Sauce Connect**.

This configuration launches a new Sauce Connect tunnel whenever Jenkins starts a build for the project and sets environment variables for `SELENIUM_HOST` and `SELENIUM_PORT` to `localhost:4445`.

### Specifying the Sauce Connect Binary Location

The OnDemand plugin extracts the Sauce Connect binary compatible with your operating system to your `$home` directory by default, but you can specify a different location for individual projects, or globally for all projects.

> **NOTE:** Always run Sauce Connect on the same network as the site or application under test, but the same machine is not required.

<Tabs
  defaultValue="global"
  values={[
    {label: 'Set a Global Location', value: 'global'},
    {label: 'Set a Project Location', value: 'project'},
  ]}>

<TabItem value="global">

1. From your Jenkins dashboard, choose **Manage Jenkins** and then **Configure System**.
1. In the **Sauce Support** section, specify a location in the **Override Sauce Connect Path** field that will be the default extraction directory for all projects using Sauce Connect.
</TabItem>
<TabItem value="project">

1. From your Jenkins dashboard, select the project you wish to configure.
1. Choose **Configure** from the project menu.
1. Choose the **Sauce Connect Advanced Options** tab and click **Advanced**.
1. Specify a location in the **Sauce Connect Binary Location** field that will be the extraction directory for this project only.
</TabItem>
</Tabs>


### Setting Sauce Command Line Options

There are a number of command line options you can use with Sauce Connect, which you can configure to execute at both the global level and on a per-project basis when Sauce Connect launches.

Setting Global Sauce Connect Command Line Options
In Jenkins, go to the Administration page.
Click Manage Jenkins.
Click Configure System.
Under Sauce Support, enter the command line options you'd like to use in the Sauce Connect Options field.

Setting Per-Project Sauce Connect Command Line Options
In Jenkins, go to your project.
Select Configure.
In the Sauce Connect Advanced Options section, click Advanced.
Enter the command line options you'd like to use in the Sauce Connect Options field.
Launching Sauce Connect on the Jenkins Slave Node
Another advanced option is launching Sauce Connect on the Jenkins slave node that is executing the build, rather than on the Master node.

In Jenkins, go to your project.
Select Configure.
In the Sauce Connect Advanced Options section, click Advanced.
Select Launch Sauce Connect on Slave.
Creating a new unique Sauce Connect tunnel per build

If you select theCreate a new unique Sauce Connect tunnel per build option, the plugin will spin up a unique tunnel identifier for each build and populate a TUNNEL_IDENTIFIER environment variable. You must then reference this variable in the desired capabilities for your tests.

Using the Latest Version of Sauce Connect
Select Configure.
Go to Sauce Labs Options.
Check the box "Use the latest version of Sauce Connect." The bundled version may be different if your OnDemand plugin is not up to date.
