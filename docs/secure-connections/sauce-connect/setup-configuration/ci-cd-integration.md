---
id: ci-cd-integration
title: Sauce Connect Proxy CI/CD Integration
sidebar_label: CI/CD Integration
---

## Bamboo Configuration

[Atlassian Bamboo](https://www.atlassian.com/software/bamboo) is a continuous integration server that can be used to automate the release management for your software apps, creating a continuous delivery pipeline.

We offer a plug-in that will integrate your Bamboo builds with Sauce Connect Proxy for automating functional tests. Installation is an easy one-time admin configuration. From there, you can designate builds to test on your preferred browser/OS combinations.

Here are some of the features:

* Embed Sauce reports within your Bamboo test results
* Configure your Bamboo build to specify the browser combinations
* Configure user name and password within Administration interface

Note that this plug-in also has a set of environment variables that are specific to Bamboo. You’ll also need to output the Sauce session ID to the standard output (stdout) to allow the plug-in to associate test results with Sauce jobs.


## GitHub Actions

[GitHub Actions](https://docs.github.com/en/actions) allow to automate, customize, and execute your software development workflows right in your GitHub repository.

[Sauce Connect Proxy GitHub Action](https://github.com/marketplace/actions/sauce-connect-proxy-action) allows to launch Sauce Connect Proxy for GitHub CI workflow.


## Jenkins Configuration

Jenkins is an open-source automation server and continuous integration software tool for testing and reporting on isolated changes in a larger code base in real time.

The Jenkins plugin for Sauce Labs will automatically install Sauce Connect Proxy on your Jenkins server for integration. Once installed, you'll need to configure your project to use Sauce Connect Proxy. You can change the location where the plugin extracts Sauce Connect for specific projects or globally for all projects.

## Additional Resources

For information on installing and configuring the Sauce Labs plug-in for Bamboo, see the following sections:

* [Installing and Configuring the Sauce Labs Plugin for Bamboo](/ci/bamboo)
* [Sauce OnDemand for Bamboo](https://marketplace.atlassian.com/apps/30134/sauce-ondemand-for-bamboo)
* [Introducing Bamboo Sauce](https://saucelabs.com/blog/introducing-bamboo-sauce-)

For instructions on running your Jenkins build with Sauce Connect Proxy enabled, see [Sauce Labs with Jenkins](/ci/jenkins).
