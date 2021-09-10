---
id: testcafe
title: TestCafe on Sauce Labs
sidebar_label: Using TestCafe
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

[TestCafe](https://github.com/DevExpress/testcafe) is an easy-to-use testing framework that you can use to test your applications either locally in Docker or through Sauce Labs using the [saucectl CLI](/testrunner-toolkit/saucectl), giving you the flexibility to run your tests in the environment that best suits your organization, while still benefiting from the Sauce Labs vast collection of devices, browser, and operating system combinations and test result data analytics.

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
      <td rowspan='3'>1.15.3</td>
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
 |1.15.3|Please see [release notes](https://github.com/saucelabs/sauce-testcafe-runner/releases/tag/v0.10.0)|
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

## How to Get Started

* [Quickstart](/web-apps/automated-testing/testcafe/quickstart): Use our demo repo to quickly set up and run a sample TestCafe project and test to see the results.
* [Run Your own Tests](/testrunner-toolkit/configuration/testcafe): Customize `saucectl` to run your existing tests just by modifying the `config.yml` file for your project.
* [Incorporate saucectl in your pipeline](/testrunner-toolkit/integrations): TestCafe on Sauce supports CI integrations with Cirlce CI, GitLab, Jenkins, and GitHub Actions.

### TestCafe Plugin for Sauce Labs

If you would prefer to stay in TestCafe, try the new [TestCafe Sauce Labs Plugin](https://github.com/DevExpress/testcafe-browser-provider-saucelabs). Connect to your Sauce Labs account from within your TestCafe project to configure and run your tests directly from TestCafe.

