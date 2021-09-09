---
id: playwright
title: Playwright on Sauce Labs
sidebar_label: Using Playwright
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

[Playwright](https://github.com/microsoft/playwright) is a testing framework that you can use to test your web applications either locally in Docker or through Sauce Labs using the [saucectl CLI](/testrunner-toolkit/saucectl), giving you the flexibility to run your tests in the environment that best suits your organization, while still benefiting from the Sauce Labs vast collection of devices, browser, and operating system combinations and test result data analytics.


### Supported Testing Platforms

 Sauce Labs supports the following test configurations for Playwright:

 <Tabs
   groupId="platforms"
   defaultValue="sauce"
   values={[
     {label: 'Sauce Labs', value: 'sauce'},
     {label: 'Docker', value: 'docker'},
   ]}>

 <TabItem value="sauce">

 |Playwright Version|Supported Platforms|Supported Browsers|
 |-----|-----|-----|
 |1.14.1|Windows 10|Chromium, Firefox, Webkit|
 |1.12.3|Windows 10|Chromium, Firefox, Webkit|
 |1.11.1|Windows 10|Chromium, Firefox, Webkit|
 |1.10.0|Windows 10|Chromium, Firefox, Webkit|
 |1.7.1|Windows 10|Chromium, Firefox, Webkit|

 </TabItem>
 <TabItem value="docker">

 Browser support for each framework is based on the Sauce Labs docker images provided in the `saucectl` installation. Each Docker image tag is the latest image that supports the specific framework version, as detailed in the available release notes.

 |Playwright Version|Supported Browsers|
 |-----|----|
 |1.14.1|Please see [release notes](https://github.com/saucelabs/sauce-playwright-runner/releases/tag/v2.2.1)|
 |1.12.3|Please see [release notes](https://github.com/saucelabs/sauce-playwright-runner/releases/tag/v2.0.3)|
 |1.11.1|Please see [release notes](https://github.com/saucelabs/sauce-playwright-runner/releases/tag/v1.13.0)|
 |1.11.0|Please see [release notes](https://github.com/saucelabs/sauce-playwright-runner/releases/tag/v1.11.0)|
 |1.10.0|Please see [release notes](https://github.com/saucelabs/sauce-playwright-runner/releases/tag/v1.10.0)|
 |1.7.1|Please see [release notes](https://github.com/saucelabs/sauce-playwright-runner/releases/tag/v1.7.5)|

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

* [Quickstart](/web-apps/automated-testing/playwright/quickstart): Use our demo repo to quickly set up and run a sample Playwright project and test to see the results.
* [Run Your own Tests](/testrunner-toolkit/configuration/playwright): Customize `saucectl` to run your existing tests just by modifying the `config.yml` file for your project.
* [Incorporate saucectl in your pipeline](/testrunner-toolkit/integrations): Playwright on Sauce supports CI integrations with Cirlce CI, GitLab, Jenkins, and GitHub Actions.
