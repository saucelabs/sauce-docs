---
id: ci-cd-integration
title: Sauce Connect Proxy CI/CD Integration
sidebar_label: CI/CD Integration
---

## GitHub Actions

GitHub Actions allow to automate, customize, and execute your software development workflows right in your GitHub repository.

[Sauce Connect Proxy GitHub Action](https://github.com/marketplace/actions/sauce-connect-proxy-action) allows to launch Sauce Connect Proxy for GitHub CI workflow.

## Jenkins

Jenkins is an open-source automation server and continuous integration software tool for testing and reporting on isolated changes in a larger code base in real time.

The Jenkins plugin for Sauce Labs will automatically install Sauce Connect Proxy on your Jenkins server for integration. Once installed, you'll need to configure your project to use Sauce Connect Proxy. You can change the location where the plugin extracts Sauce Connect for specific projects or globally for all projects.

For instructions on running your Jenkins build with Sauce Connect Proxy enabled, see [Sauce Labs with Jenkins](/basics/integrations/jenkins).

## TeamCity

TeamCity is a continuous integration tool suite by JetBrains.

For instructions on running your TeamCity build with Sauce Connect Proxy enabled, see [Sauce Labs with TeamCity](/basics/integrations/teamcity).

## WebdriverIO

WebdriverIO is a next-gen browser and mobile automation test framework for Node.js.

### Using WebdriverIO with Sauce Connect Proxy

To enable testing through Sauce Connect Proxy, you can use the Sauce Service integration in WebdriverIO. For detailed instructions on configuring WebdriverIO with Sauce Connect Proxy, refer to the [Sauce Service documentation](https://webdriver.io/docs/sauce-service/#installation).

### Version Compatibility

The earliest WebdriverIO version that supports Sauce Connect 5 is `v9.8.0`. Ensure that you are using this version or later to leverage the latest features and improvements related to Sauce Connect integration.
