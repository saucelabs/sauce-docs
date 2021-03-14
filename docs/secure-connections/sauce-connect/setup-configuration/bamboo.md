---
id: bamboo
title: Sauce Connect Proxy Bamboo Configuration
sidebar_label: Bamboo Configuration
---

[Atlassian Bamboo](https://www.atlassian.com/software/bamboo) is a continuous integration server that can be used to automate the release management for your software applications, creating a continuous delivery pipeline.

We offer a plug-in that will integrate your Bamboo builds with Sauce Connect for automating functional tests. Installation is an easy one-time admin configuration. From there, you can designate builds to test on your preferred browser/OS combinations.

Here are some of the features:

* Embed Sauce reports: embed Sauce reports within your Bamboo test results
* Configure browser combinations: configure your Bamboo build to specify the browser combinations
* Configure Administration interface: configure user name and password within Administration interface

Note that this plug-in also has a set of environment variables that are specific to Bamboo. You’ll also need to output the Sauce session ID to the standard output (stdout) to allow the plug-in to associate test results with Sauce jobs.

### Installing and Configuring the Sauce Labs Plugin for Bamboo

**Important Steps for All Continuous Integration Configurations**

When you are configuring your continuous integration platform to work with Sauce, always make sure to follow these steps:

1. Update tests to reference the environment variables set by the plugin. See the topic on Setting Environment Variables for more information.
2. Output the Sauce session ID to the standard output (stdout) to allow the Sauce plugin to associate test results to Sauce Jobs. See the topic on Outputting Session IDs to stdout for more information.

**Sauce Labs for Bamboo Changelog**

You can find the changelogs for all Sauce OnDemand for Bamboo plugin versions in our [Atlassian Marketplace listing](https://marketplace.atlassian.com/apps/30134/sauce-ondemand-for-bamboo?hosting=server&tab=versions).  

## Installing the Plugin
You can install the Sauce plugin through the Bamboo Administration page.

1. Download the Sauce Bamboo Plugin from the Atlassian Marketplace.
2. In Bamboo, go to the Administration page.
3. In the Plugins section, click Plugin Manager.
4. In the Search field, enter sauce, and then click Search.
5. In the search results, click the expand icon next to the Bamboo Sauce OnDemand Plugin name to access the Install button.
6. Click Install.
7. After the plugin downloads, restart Bamboo.
8. After Bamboo restarts, go to the Administration page.
9. Under Communication, click Sauce OnDemand.
10. Under Credentials, enter the username and access key for your Sauce account.
You're now ready to configure Bamboo to work with projects in your favorite language.

## Configuring the Plugin to Use the European Data Center
If you are running jobs on our European data center, you have an option to use our Bamboo plugin to see all of the integrated results and reports. You can choose the data center you want to use in either Global Settings or in Project Settings of the plugin.

What You'll Need
Use Bamboo OnDemand Plugin version 1.6.87 or above in order to use the features described in this topic.
Global Settings Configuration
Navigate to the homepage of your Bamboo Instance.
Open the Setting icon in the top right corner.
Select Global Variables.
Select Sauce OnDemand in the communication section displayed on the left.
Enter your Sauce Username and Access Key
Select EU from the Data Center menu.


Project Setting Configuration
Go to Build Dashboard > Project > Plan.
Under Actions, select Configure Plan.
In the Stage tab, select desired job settings (usually Default Job).
Select Miscellaneous.
Select EU from the Data Center menu.
