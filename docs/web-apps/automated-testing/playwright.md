---
id: playwright
title: Playwright on Sauce Labs
sidebar_label: Using Playwright
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

[Playwright](https://github.com/microsoft/playwright) is a testing framework that you can use to test your web apps &#8212; either locally in Docker or remotely on Sauce Labs Cloud &#8212; using the [`saucectl` CLI](/dev/cli/saucectl). This gives you the flexibility to run your tests in the environment that best suits your organization, while still benefiting from the Sauce Labs vast collection of devices, browser, and operating system combinations and test result data analytics.


## System Requirements

You can run `saucectl` locally via Docker ([Installation Requirements](https://docs.docker.com/engine/install/#supported-platforms)) or remotely via the Sauce Labs cloud, so system requirements vary depending on your intention. The following reference serves as a general guide:

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

* OS: Windows 10 or 11 ([Home](https://docs.docker.com/docker-for-windows/install-windows-home/), Pro, Enterprise, or Education)
* Docker: [Desktop](https://docs.docker.com/docker-for-windows/install/)

</TabItem>
</Tabs>

## Supported Testing Platforms

 Sauce Labs supports the following test configurations for Playwright:

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
      <th>Playwright Version</th>
      <th>Supported Platforms</th>
      <th>Supported Browsers</th>
      <th>End of Life</th>
    </tr>
    <tbody>
    <tr>
      <td rowspan='2'>1.24.1</td>
      <td><b>macOS:</b> 11.00, 12</td>
      <td rowspan='2'>Chromium, Firefox, Webkit</td>
      <td rowspan='2'>Jul 29, 2023</td>
    </tr>
    <tr>
      <td rowspan='2'>1.22.2</td>
      <td><b>macOS:</b> 11.00, 12</td>
      <td rowspan='2'>Chromium, Firefox, Webkit</td>
      <td rowspan='2'>Jun 6, 2023</td>
    </tr>
    <tr>
      <td><b>Windows:</b> 10, 11</td>
    </tr>
    </tbody>
    <tbody>
    <tr>
      <td rowspan='2'>1.20.2</td>
      <td><b>macOS:</b> 11.00, 12</td>
      <td rowspan='2'>Chromium, Firefox, Webkit</td>
      <td rowspan='2'>Apr 16, 2023</td>
    </tr>
    <tr>
      <td><b>Windows:</b> 10, 11</td>
    </tr>
    </tbody>
    <tbody>
    <tr>
      <td rowspan='2'>1.18.1</td>
      <td><b>macOS:</b> 11.00</td>
      <td>Chromium, Firefox</td>
      <td rowspan='2'>Feb 2, 2023</td>
    </tr>
    <tr>
      <td><b>Windows:</b> 10</td>
      <td>Chromium, Firefox, Webkit</td>
    </tr>
    </tbody>
    <tbody>
    <tr>
      <td rowspan='1'>1.17.1</td>
      <td><b>Windows:</b> 10</td>
      <td>Chromium, Firefox, Webkit</td>
      <td>Nov 29, 2022</td>
    </tr>
    </tbody>
  </table>

 </TabItem>
 <TabItem value="docker">

 Browser support for each framework is based on the Sauce Labs docker images provided in the `saucectl` installation. Each Docker image tag is the latest image that supports the specific framework version, as detailed in the available [release notes](https://github.com/saucelabs/sauce-playwright-runner).

</TabItem>
</Tabs>

## How to Get Started

* [Quickstart](/web-apps/automated-testing/playwright/quickstart): Use our demo repo to quickly set up and run a sample Playwright project and test to see the results.
* [Run your own tests](/web-apps/automated-testing/playwright/yaml): Customize `saucectl` to run your existing tests just by modifying the `config.yml` file for your project.
* [Incorporate `saucectl` in your pipeline](/dev/cli/saucectl/usage/use-cases/#integrating-saucectl-in-your-ci-pipeline): Playwright on Sauce supports CI integrations with Circle CI, GitLab, Jenkins, and GitHub Actions.

## Limitations

:::caution Special Characters in Test Names
We recommend that you avoid the use of special characters when naming your tests. If your test name contains any special characters, your test may not run or its artifacts may not be visible in our platform.
:::

:::note
Based on current playwright test runner implementation, there is no way to run Playwright test runner with Cucumber.
:::
