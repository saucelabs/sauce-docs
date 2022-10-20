---
id: gitlab
title: GitLab Integration
sidebar_label: GitLab Integration
description: Use GitLab with Sauce Labs to scale up your CI/CD testing process
keywords:
- gitlab
- ci/cd
- automated-testing
- how-to
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## GitLab Setup and Configuration - Sauce Labs

[GitLab](https://about.gitlab.com/) is a collaboration platform that allows you to build a Continuous Integration (CI) pipeline as a series of steps in a simple configuration file. Steps can include things like launching a containerized test environment, building your software, starting your tests using your preferred test runner, and deploying to production.

This high-level guide shows how to configure GitLab’s Continuous Integration Pipeline to execute tests on Sauce Labs.

* How Sauce Labs fits in with GitLab
* Sauce Connect and GitLab
* Additional Resources

###  How Sauce Labs fits in with GitLab

If your tests are running locally they may currently point to your internal Selenium Grid or local simulators. When you configure your tests to run on Sauce Labs, you will change your tests to point to a Sauce Labs data center and our VMs/Real Devices/Emulators/Simulators.

The way you set up your GitLab pipeline will determine how you need to to initiate the Sauce Connect Proxy–covered in the next section.

CI/CD systems rely heavily on repeatable steps and phases. This high level of abstraction and customization makes the tool adaptable to your business needs, in that you can mix/match/repeat complex steps with a single line of config. Sauce Labs tests may be included in one or more of those steps.

### The .yml File
GitLab uses .yml for configuration. Building a GitLab .yml file to set up your pipeline is easy! GitLab allows you to configure your environment the same way you would to run a shell script. For ultimate flexibility, GitLab allows you to launch docker images as “services”. This gives you ephemeral and/or shared APIs or other services to be available at any time in the build process, which can be created or torn down at a moment’s notice.

In the example below (adapted from [here](https://gitlab.com/gitlab-org/gitlab/-/blob/e042b023f461be91c62d95dfd1de4547e1a8c572/doc/ci/yaml/README.md), step 3 runs our end-to-end suite. Job names are meant to be descriptive, so we’ve named it ```e2e-Sauce```. 


```yaml title="gitlab.yml"
stages:
 - build
 - test
 - deploy
job 0:
 stage: .pre
 script:make something useful before build stage
job 1:
 stage: build
 script: make build dependencies
job 2:
 stage: build
 script: make build artifacts
 
//job 3:
e2e-sauce:
 stage: test
 script: run-sauce-tests
job 4:
 stage: deploy
 script: deploy-something
job 5:
 stage: post
 script: make something useful at the end of the pipeline
```
### Sauce Connect and GitLab

[Sauce Connect Proxy](https://wiki.saucelabs.com/display/DOCS/Sauce+Connect+Proxy) is an HTTP proxy server that opens a secure "tunnel" connection for testing between a Sauce Labs virtual machine or real device and a website or mobile app hosted in your local environment (e.g. behind a corporate firewall). It gives Sauce Labs secure access to your application or website.

Sauce Connect can be downloaded and managed in a few ways, some of which lend themselves better to GitLab, but all are do-able.

#### Continuously Running HA Sauce Connect Tunnel
:::note
This first method is recommended for those with a supportive DevOps team who is willing to host and maintain this image.
:::
Users download the Sauce Connect Binary and run it as a service on a dedicated machine (VM/server) that is available 24/7. This instance of Sauce Connect is shared by the organization and utilized by the tests running in the CI pipeline. This is the recommended method of running the Sauce Connect Proxy, which we call “[High Availability](https://wiki.saucelabs.com/display/DOCS/High+Availability+Sauce+Connect+Proxy+Setup)”.

#### Ephemeral Tunnel, Started in Every Build
:::note
Recommended for those experienced with shell scripting
:::
Using bash or equivalent within the GitLab .yml file, users can download Sauce Connect to a container and run it as a set up step in their CI. Below is an example of what this might look like.

:::caution
This script assumes that the environment variables SAUCE_USERNAME and SAUCE_ACCESS_KEY [have been set and are available to the script](https://docs.saucelabs.com/basics/environment-variables/).
:::

```yaml title="gitlab-sc.yml"
script:
 - curl https://saucelabs.com/downloads/sc-4.8.1-linux.tar.gz | tar -xz
 - chmod 777 -R ./sc-4.8.1-linux
 - PATH=./sc-4.8.1-linux/bin:$PATH
 - sc -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY -i “gitlabTunnel” -v -s &
 - sleep 50
```

### Additional Resources

* [Sauce Labs Data Center Endpoints](https://docs.saucelabs.com/basics/data-center-endpoints/)
* [Sauce Connect Proxy Overview](https://saucelabs.com/resources/white-papers/sauce-connect-proxy-security-overview)
* [Sauce Labs CI Integrations](https://docs.saucelabs.com/ci/)
* [saucectl -> GitLab Integration](https://docs.saucelabs.com/dev/cli/saucectl/usage/ci/gitlab/)

