---
id: playwright
title: Playwright on Sauce Labs
sidebar_label: Getting Started
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

 Use `saucectl` -- the Sauce Labs test orchestrator CLI to run [Playwright](https://github.com/microsoft/playwright) tests directly from your existing Playwright project.

 * Don't have Playwright tests but want to try? The  [Playwright Demo Repo](https://github.com/saucelabs/saucectl-playwright-example) includes a sample project structure, working configuration file, and sample Playwright test so you can get up and running in less than 10 minutes!
 * Already running Playwright? Let `saucectl` run your tests in the Sauce Labs Cloud, where you have access to thousands of OS/browser combinations and Sauce Labs analytics.  

## What You'll Need

* A Sauce Labs account (if you don't have one, start a [free trial](https://saucelabs.com/sign-up))
* Your Sauce Labs [Username and Access Key](https://app.saucelabs.com/user-settings)


### Supported Testing Platforms

 Sauce Labs supports the following test configurations for Playwright:

 <Tabs
   groupId="platforms"
   defaultValue="docker"
   values={[
     {label: 'Sauce Labs', value: 'sauce'},
     {label: 'Docker', value: 'docker'},
   ]}>

 <TabItem value="sauce">

 |Playwright Version|Supported Platforms|Supported Browsers|
 |-----|-----|-----|
 |1.11.1|Windows 10|Chromium, Firefox, Webkit|
 |1.10.0|Windows 10|Chromium, Firefox, Webkit|
 |1.7.1|Windows 10|Chromium, Firefox, Webkit|

 </TabItem>
 <TabItem value="docker">

 Browser support for each framework is based on the Sauce Labs docker images provided in the `saucectl` installation. Each Docker image tag is the latest image that supports the specific framework version, as detailed in the available release notes.

 |Playwright Version|Supported Browsers|
 |-----|----|
 |1.11.1|Please see [release notes](https://github.com/saucelabs/sauce-playwright-runner/releases/tag/v1.12.0)|
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
You can set your Sauce Labs credentials as [environment variables](/basics/environment-variables) instead of generating a `credentials.yml`, if you prefer.
:::

### Step 3: Set up Your Playwright Project

 Check out the [Playwright Demo Repo](https://github.com/saucelabs/saucectl-playwright-example) to get a Playwright project structure, Playwright-ready configuration file, and sample Playwright test.

### Step 4: Run Tests

Use the `run` command to execute the sample test included with the `saucectl` example.

```
saucectl run
```

The console displays the executing tests, distinguishing which mode is running, and the results and test assets are immediately available in the [Sauce Labs dashboard](https://app.saucelabs.com/dashboard/tests/vdc).

## Set up Your Own Tests

The demo repo provides an easy baseline for seeing `saucectl` work, but if you already have Playwright tests, you can customize `saucectl` to run those tests just by modifying the `config.yml` file. See [Configuring Your Playwright Tests](/testrunner-toolkit/configuration/playwright) for details.
