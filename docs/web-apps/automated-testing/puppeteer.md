---
id: puppeteer
title: Puppeteer on Sauce Labs
sidebar_label: Getting Started
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

 Use `saucectl` -- the Sauce Labs test orchestrator CLI to run [Puppeteer](https://github.com/puppeteer) tests directly from your existing Puppeteer project.

 * Don't have Puppeteer tests but want to try? The  [Puppeteer Demo Repo](https://github.com/saucelabs/saucectl-puppeteer-example) includes a sample project structure, working configuration file, and sample Puppeteer test so you can get up and running in less than 10 minutes!
 * Already running Puppeteer? Let `saucectl` run your tests in the Sauce Labs Cloud, where you have access to thousands of OS/browser combinations and Sauce Labs analytics.  

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

### Step 3: Set up Your Puppeteer Project

 Check out the [Puppeteer Demo Repo](https://github.com/saucelabs/saucectl-puppeteer-example) to get a Puppeteer project structure, Puppeteer-ready configuration file, and sample Puppeteer test.

### Step 4: Run Tests

Use the `run` command to execute the sample test included with the `saucectl` example.

```
saucectl run
```

The console displays the executing tests, confirming that Docker mode is running and the results and test assets are immediately available in the [Sauce Labs dashboard](https://app.saucelabs.com/dashboard/tests/vdc).

## Set up Your Own Tests

The demo repo provides an easy baseline for seeing `saucectl` work, but if you already have Puppeteer tests, you can customize `saucectl` to run those tests just by modifying the `config.yml` file. See [Configuring Your Puppeteer Tests](/testrunner-toolkit/configuration/puppeteer) for details.
