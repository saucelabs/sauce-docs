---
id: bamboo
title: Sauce Connect Proxy for CI/CD Environments
sidebar_label: CI/CD Environments
---

## Sauce Connect Proxy Bamboo Configuration

[Atlassian Bamboo](https://www.atlassian.com/software/bamboo) is a continuous integration server that can be used to automate the release management for your software applications, creating a continuous delivery pipeline.

We offer a plug-in that will integrate your Bamboo builds with Sauce Connect for automating functional tests. Installation is an easy one-time admin configuration. From there, you can designate builds to test on your preferred browser/OS combinations.

Here are some of the features:

* Embed Sauce reports: embed Sauce reports within your Bamboo test results
* Configure browser combinations: configure your Bamboo build to specify the browser combinations
* Configure Administration interface: configure user name and password within Administration interface

Note that this plug-in also has a set of environment variables that are specific to Bamboo. You’ll also need to output the Sauce session ID to the standard output (stdout) to allow the plug-in to associate test results with Sauce jobs.

### More Information
For information on installing and configuring the Sauce Labs Plug-in for Bamboo, see the following sections:

* [Installing and Configuring the Sauce Labs Plugin for Bamboo](https://wiki.saucelabs.com/display/DOCS/Installing+and+Configuring+the+Sauce+Labs+Plugin+for+Bamboo)
* [Sauce OnDemand for Bamboo](https://marketplace.atlassian.com/apps/30134/sauce-ondemand-for-bamboo)
* [Introducing Bamboo Sauce](https://saucelabs.com/blog/introducing-bamboo-sauce-)

## Sauce Connect Proxy Jenkins Configuration

Jenkins is an open-source automation server and continuous integration software tool for testing and reporting on isolated changes in a larger code base in real time.

The Jenkins plugin for Sauce Labs will automatically install Sauce Connect Proxy on your Jenkins server for integration. Once installed, you'll need to configure your project to use Sauce Connect. You can change the location where the plugin extracts Sauce Connect for specific projects or globally for all projects.

### More Information
For instructions on running your Jenkins build with Sauce Connect enabled, see the following section:
* [Configuring Sauce Connect with the Jenkins Plugin](https://wiki.saucelabs.com/display/DOCS/Configuring+Sauce+Connect+Proxy+with+the+Jenkins+Plugin)
* [Installing and Configuring the Sauce OnDemand Plugin for Jenkins](https://wiki.saucelabs.com/display/DOCS/Installing+and+Configuring+the+Sauce+OnDemand+Plugin+for+Jenkins)
