---
id: replay
title: Replay on Sauce Labs
sidebar_label: Using Replay
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

[Replay](https://github.com/puppeteer/replay) is a library that provides an API to replay and stringify recordings created using [Chrome DevTools Recorder](https://developer.chrome.com/docs/devtools/recorder). Using the [`saucectl` CLI](/dev/cli/saucectl), you can replay Chrome DevTools' JSON based recordings remotely on Sauce Labs, giving you the flexibility of choosing browser version and operating system combinations and test result data analytics.

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

</TabItem>
<TabItem value="linux">

* OS/Distros: Ubuntu 22.04+

</TabItem>
<TabItem value="windows">

* OS: Windows 10+

</TabItem>
</Tabs>


## Supported Testing Platforms

 Sauce Labs supports the following test configurations for Replay:

 * Browsers: Chrome
 * Platforms: Windows 10, Windows 11, macOS 11, macOS 12


## How to Get Started

* [Quickstart](/web-apps/automated-testing/replay/quickstart): Use our demo repo to quickly set up and run a sample Replay project and test to see the results.
* [Run your own](/web-apps/automated-testing/replay/yaml): Customize `saucectl` to replay your existing recordings just by modifying the `config.yml` file for your project.
* [Incorporate saucectl in your pipeline](/dev/cli/saucectl/usage/use-cases/#integrating-saucectl-in-your-ci-pipeline): Replay on Sauce supports CI integrations with Circle CI, GitLab, Jenkins, and GitHub Actions.

## Limitations

There are no known limitations at the time of this writing.
