---
id: gitlab
title: GitLab Integration
sidebar_label: GitLab
description: Use GitLab with Sauce Labs to scale up your CI/CD testing process
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

[GitLab](https://about.gitlab.com/) is a collaboration platform that allows you to build a Continuous Integration (CI) pipeline as a series of steps in a simple configuration file. Steps can include things like launching a containerized test environment, building your software, starting your tests using your preferred test runner, and deploying to production.

If your tests are running locally they may currently point to your internal Selenium Grid or local simulators. When you configure your tests to run on Sauce Labs, you will change your tests to point to a Sauce Labs data center and our virtual devices.

CI/CD systems rely heavily on repeatable steps and phases. This high level of abstraction and customization makes the tool adaptable to your business needs, in that you can mix/match/repeat complex steps with a single line of config. Sauce Labs tests may be included in one or more of those steps.

## .yml Files
GitLab uses .yml for configuration. GitLab allows you to configure your environment the same way you would to run a shell script. For ultimate flexibility, GitLab allows you to launch docker images as “services”. This gives you ephemeral and/or shared APIs or other services to be available at any time in the build process, which can be created or torn down at a moment’s notice.

In the example below (adapted from the [GitLab CI/CD pipeline configuration reference](https://gitlab.com/gitlab-org/gitlab/-/blob/e042b023f461be91c62d95dfd1de4547e1a8c572/doc/ci/yaml/README.md)), job 3 runs our end-to-end suite. Job names are meant to be descriptive, so we’ve named it `e2e-Sauce`.

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

## Sauce Connect Proxy and GitLab

[Sauce Connect Proxy](/secure-connections/sauce-connect) is an HTTP proxy server that opens a secure tunnel connection for testing between a Sauce Labs virtual machine or real device and a website or mobile app hosted in your local environment (e.g., behind a corporate firewall). It gives Sauce Labs secure access to your application or website.

Sauce Connect Proxy can be downloaded and managed in a few ways, some of which lend themselves better to GitLab. The way you set up your GitLab pipeline will determine how you need to to initiate Sauce Connect Proxy.

### Continuously Running HA Sauce Connect Tunnel
:::note
This method is recommended for those with a supportive DevOps team who is willing to host and maintain this image.
:::
Users download the Sauce Connect Binary and run it as a service on a dedicated machine (VM/server) that is available 24/7. This instance of Sauce Connect Proxy is shared by the organization and utilized by the tests running in the CI pipeline. This is the recommended method of running the Sauce Connect Proxy. For more information, see [High Availability](/secure-connections/sauce-connect/setup-configuration/high-availability).

### Ephemeral Tunnel, Started in Every Build
:::note
Recommended for those experienced with shell scripting.
:::
Using bash or equivalent within the GitLab .yml file, users can download Sauce Connect Proxy to a container and run it as a setup step in their CI. The following is an example of what this might look like.

:::caution
This script assumes that the environment variables `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` have been set and are available to the script. For more information, see [Using Environment Variables for Authentication Credentials](/basics/environment-variables/).
:::

```yaml title="gitlab-sc.yml"
script:
 - curl https://saucelabs.com/downloads/sc-4.8.1-linux.tar.gz | tar -xz
 - chmod 777 -R ./sc-4.8.1-linux
 - PATH=./sc-4.8.1-linux/bin:$PATH
 - sc -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY -i “gitlabTunnel” -v -s &
 - sleep 50
```

## Additional Resources

* [Sauce Labs Data Center Endpoints](/basics/data-center-endpoints/)
* [Sauce Connect Proxy Overview](https://saucelabs.com/resources/white-papers/sauce-connect-proxy-security-overview)
* [Sauce Labs Integrations](/integrations-overview/)
* [saucectl -> GitLab Integration](/dev/cli/saucectl/usage/ci/gitlab/)
