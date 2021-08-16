---
id: testcafe
title: TestCafe on Sauce Labs
sidebar_label: Getting Started
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

 Use `saucectl` -- the Sauce Labs test orchestrator CLI -- to run [TestCafe](https://github.com/DevExpress/testcafe) tests directly from your existing TestCafe project.

 * Don't have TestCafe tests but want to try? The  [TestCafe Demo Repo](https://github.com/saucelabs/saucectl-testcafe-example) includes a sample project structure, working configuration file, and sample TestCafe test so you can get up and running in less than 10 minutes!
 * Already running TestCafe? Let `saucectl` run your tests in the Sauce Labs Cloud, where you have access to thousands of OS/browser combinations and Sauce Labs analytics.  

## What You'll Need

 * A Sauce Labs account (if you don't have one, start a [free trial](https://saucelabs.com/sign-up))
 * Your Sauce Labs [Username and Access Key](https://app.saucelabs.com/user-settings)

### Supported Testing Platforms

 Sauce Labs supports the following test configurations for TestCafe:

 <Tabs
   groupId="platforms"
   defaultValue="sauce"
   values={[
     {label: 'Sauce Labs', value: 'sauce'},
     {label: 'Docker', value: 'docker'},
   ]}>

 <TabItem value="sauce">

 <table id="table-fw">
   <tr>
     <th>TestCafe Version</th>
     <th>Supported Platforms</th>
     <th>Supported Browsers</th>
   </tr>
   <tbody>
   <tr>
     <td rowspan='3'>1.15.0</td>
     <td><b>macOS:</b> 11.0</td>
     <td>Safari, Chrome, Firefox, MicrosoftEdge</td>
   </tr>
   <tr>
     <td><b>Windows:</b> 10</td>
     <td>Chrome, Firefox, MicrosoftEdge</td>
   </tr>
   <tr>
     <td><b>iOS:</b> 13.4, 14.0, 14.3</td>
     <td>Safari</td>
   </tr>
   </tbody>
   <tbody>
   <tr>
     <td rowspan='3'>1.14.2</td>
     <td><b>macOS:</b> 11.0</td>
     <td>Safari, Chrome, Firefox, MicrosoftEdge</td>
   </tr>
   <tr>
     <td><b>Windows:</b> 10</td>
     <td>Chrome, Firefox, MicrosoftEdge</td>
   </tr>
   <tr>
     <td><b>iOS:</b> 13.4, 14.0, 14.3</td>
     <td>Safari</td>
   </tr>
   </tbody>
   <tbody>
   <tr>
     <td rowspan='3'>1.14.0</td>
     <td><b>macOS:</b> 11.0</td>
     <td>Safari, Chrome, Firefox, MicrosoftEdge</td>
   </tr>
   <tr>
     <td><b>Windows:</b> 10</td>
     <td>Chrome, Firefox, MicrosoftEdge</td>
   </tr>
   <tr>
     <td><b>iOS:</b> 13.4, 14.0, 14.3</td>
     <td>Safari</td>
   </tr>
   </tbody>
   <tbody>
   <tr>
     <td rowspan='3'>1.11.0</td>
     <td><b>macOS:</b> 11.0</td>
     <td>Safari, Chrome, Firefox, MicrosoftEdge</td>
   </tr>
   <tr>
     <td><b>Windows:</b> 10</td>
     <td>Chrome, Firefox, MicrosoftEdge</td>
   </tr>
   <tr>
     <td><b>iOS:</b> 13.4, 14.0, 14.3</td>
     <td>Safari</td>
   </tr>
   </tbody>
   <tbody>
   <tr>
     <td>1.10.1</td>
     <td><b>Windows:</b> 10</td>
     <td>Chrome, Firefox, MicrosoftEdge</td>
   </tr>
   </tbody>
 </table>

 </TabItem>
 <TabItem value="docker">

 Browser support for each framework is based on the Sauce Labs docker images provided in the `saucectl` installation. Each Docker image tag is the latest image that supports the specific framework version, as detailed in the available release notes.

 |TestCafe Version|Supported Browsers|
 |----|----|
 |1.14.2|Please see [release notes](https://github.com/saucelabs/sauce-testcafe-runner/releases/tag/v0.7.0)|
 |1.14.0|Please see [release notes](https://github.com/saucelabs/sauce-testcafe-runner/releases/tag/v0.6.1)|
 |1.11.0|Please see [release notes](https://github.com/saucelabs/sauce-testcafe-runner/releases/tag/v0.5.0)|
 |1.10.1|Please see [release notes](https://github.com/saucelabs/sauce-testcafe-runner/releases/tag/v0.2.6)|

</TabItem>
</Tabs>


### System Requirements

You can run `saucectl` locally via Docker ([Installation Requirements](https://docs.docker.com/engine/install/#supported-platforms) or remotely via the Sauce Labs cloud, so system requirements vary depending on your intention. The following reference serves as a general guide:

<Tabs
  defaultValue="macos"
  values={[
    {label: 'macOS', value: 'macos'},
    {label: 'Linux', value: 'linux'},
    {label: 'Windows', value: 'windows'},
  ]}>

<TabItem value="macos">

* OS: 10.14+ (Mojave, Catalina, or Big Sur)
* Docker: [Desktop](https://docs.docker.com/docker-for-mac/install/)

</TabItem>
<TabItem value="linux">

* OS/Distros: [CentOS](https://docs.docker.com/engine/install/centos/), [Debian](https://docs.docker.com/engine/install/debian/), [Fedora](https://docs.docker.com/engine/install/fedora/), [Ubuntu](https://docs.docker.com/engine/install/ubuntu/)
* Docker: [Server](https://docs.docker.com/engine/install/#server)

</TabItem>
<TabItem value="windows">

* OS: Windows 10 ([Home](https://docs.docker.com/docker-for-windows/install-windows-home/), Pro, Enterprise, or Education)
* Docker: [Desktop](https://docs.docker.com/docker-for-windows/install/)

</TabItem>
</Tabs>

## Quickstart

### Step 1: Install `saucectl`

```
npm install -g saucectl
```

### Step 2: Link Your Sauce Labs Account

`saucectl` requires access to a valid Sauce Labs account.

1. Run the `configure` command:     
    ```
    saucectl configure
    ```
1. Enter your Sauce Labs Username and Access Key at the prompts.

:::tip Use Environment Variables
You can set your Sauce Labs credentials as [environment variables](/basics/environment-variables) instead of generating a `credentials.yml`, if you prefer. In systems where both sets of credentials exist, environment variable values are prioritized.
:::

### Step 3: Set up Your TestCafe Project

 Check out the [TestCafe Demo Repo](https://github.com/saucelabs/saucectl-testcafe-example) to get a TestCafe project structure, TestCafe-ready configuration file, and sample TestCafe test.

### Step 4: Run Tests

Use the `run` command to execute the sample test included with the `saucectl` installation.

```
saucectl run
```

The console displays the executing tests, distinguishing which mode is running.

The results and test assets are immediately available in the [Sauce Labs dashboard](https://app.saucelabs.com/dashboard/tests/vdc):

## Set up Your Own Tests

The demo repo provides an easy baseline for seeing `saucectl` work, but if you already have TestCafe tests, you can customize `saucectl` to run those tests just by modifying the `config.yml` file. See [Configuring Your TestCafe Tests](/testrunner-toolkit/configuration/testcafe) for details.
