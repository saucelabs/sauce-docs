---
id: puppeteer
title: Puppeteer on Sauce Labs
sidebar_label: Using Puppeteer
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

 [Puppeteer](https://github.com/puppeteer) is an easy-to-use testing framework that you can use to test your web applications locally in Docker and automatically transmit your results to Sauce Labs to take advantage of our streamlined dashboard and view up to 30 days of results and data analytics.

## What You'll Need

 * A Sauce Labs account (if you don't have one, start a [free trial](https://saucelabs.com/sign-up))
 * Your Sauce Labs [Username and Access Key](https://app.saucelabs.com/user-settings)
 * [Docker](https://docs.docker.com/get-docker/) For now, Puppeteer is only supported for local testing.

 :::note
 Ensure the [Docker daemon](https://docs.docker.com/config/daemon/) is running (e.g., `docker info` works in your terminal / command prompt)
 :::

### Supported Testing Platforms

 Sauce Labs supports the following test configurations for Puppeteer:

 <Tabs
   groupId="platforms"
   defaultValue="docker"
   values={[
     {label: 'Sauce Labs', value: 'sauce'},
     {label: 'Docker', value: 'docker'},
   ]}>

 <TabItem value="sauce">

 Coming Soon

 </TabItem>
 <TabItem value="docker">

 Browser support for each framework is based on the Sauce Labs docker images provided in the `saucectl` installation. Each Docker image tag is the latest image that supports the specific framework version, as detailed in the available release notes.

 |Puppeteer Version|Supported Browsers|
 |-----|----|
 |10.1.0|Please see [release notes](https://github.com/saucelabs/sauce-puppeteer-runner/releases/tag/v1.4.0)|
 |9.1.1|Please see [release notes](https://github.com/saucelabs/sauce-puppeteer-runner/releases/tag/v1.1.0)|
 |8.0.0|Please see [release notes](https://github.com/saucelabs/sauce-puppeteer-runner/releases/tag/v1.0.0)|
 |3.0.4|Please see [release notes](https://github.com/saucelabs/sauce-puppeteer-runner/releases/tag/v0.3.0)|

</TabItem>
</Tabs>


### System Requirements

At this time, `saucectl` only runs Puppeteer tests locally via Docker ([Installation Requirements](https://docs.docker.com/engine/install/#supported-platforms)which has the following general system requirements:

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

* [Quickstart](/web-apps/automated-testing/puppeteer/quickstart): Use our demo repo to quickly set up and run a sample Puppeteer project and test to see the results.
* [Run Your own Tests](/testrunner-toolkit/configuration/puppeteer): Customize `saucectl` to run your existing tests just by modifying the `config.yml` file for your project.
