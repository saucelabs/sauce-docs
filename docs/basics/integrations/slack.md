---
id: slack
title: Slack Integration
sidebar_label: Slack
description: Link your Sauce Labs account with your Slack workspace set up auto-notification of your test results.
keywords:
- share-test-results
- slack
- how-to
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<p><span className="sauceDBlue">COMING SOON</span></p>

The Sauce Labs Slack app allows you to send test result notifications to selected channels in your Slack workspace.

## What You'll Need

* A Sauce Labs account (if you don't have one, start a [free trial](https://saucelabs.com/sign-up))
* Your Sauce Labs [Username and Access Key](https://app.saucelabs.com/user-settings)
* A [Slack](https://slack.com/) workspace

## Install the Sauce Slack App

<p><span className="sauceDBlue">ORG ADMIN RIGHTS REQUIRED</span></p>

Before the Sauce Slack app can be used by members of the organization, an Org Admin must install it for the rest of the organization. If you are an Org Admin, you can do this by:

1. something
1. something else
1. finish

If you are not an Org Admin and the Slack Integration **Install** button is disabled, contact your Org Admin to enable the integration with your workspace.


## Integration with the Sauce Slack App

In order to capture your Sauce Labs user account information for use in Slack notifications, you must create a link between your Sauce account and your Slack workspace.

1. From your Sauce Labs account, navigate to the [Account Integrations](https://app.staging.saucelabs.net/integrations) page.
1. Click the Slack **Install** button.
1. Click **Allow** to give Sauce Labs permission to access your Slack workspace.

:::note Multiple Data Centers
If your Sauce Labs account has access to multiple data centers, you need only install the plugin once and it will be available for all data centers to which the account has access. If your access to different data centers is through different Sauce Labs accounts, you must install and setup the plugin separately for each Sauce Labs account.
:::

## Add the Sauce App to Notification Channels

You must add the Sauce Labs app to any channels to which you would like send notifications.

1. In your Slack workspace, select the channel from the sidebar.
1. Click the dropdown at the end of the channel title to access the settings menu for the channel.
    <img src={useBaseUrl('img/integrations/slack/set-channel-details.png')} alt="Set Channel Details" width="600"/>
1. Select the **Integrations** tab, then the **Add an App** button.
1. Click the **Add** button for the Sauce Labs app to enable notifications for the channel.

## Configure Notifications from `saucectl`

1. In the `config.yaml` file that defines your [`saucectl`](/testrunner-toolkit/configuration) test configuration settings, add the `notifications.slack` property.
    ```yml
    notifications:
      slack:
        channels:
          - "saucectl-results"
          - "cypress-tests"
        send: always
    ```
    Make sure you have [added the app to the channels](#add-the-sauce-app-to-notification-channels) you specify in your configuration. Otherwise, `saucectl` will return an error that the app is not in the channel:

    <img src={useBaseUrl('img/integrations/slack/not-in-channel-error.png')} alt="No App in Channel Error" width="900"/>

1. Specify the relevant values for one or more channels in your Slack workspace to which you want the test results sent.
1. Specify when and under what circumstances to send notifications to specified Slack channels. Valid values are:
    * `always`: Send notifications for all test results.
    * `never`: Do not send any test result notifications.
    * `pass`: Send notifications for passing suites only.
    * `fail`: Send notifications for failed suites only.

When you run your tests with the notifications configuration applied, any completed test suites that match your criteria trigger a notification in your specified channels, as shown in the following illustration:

<img src={useBaseUrl('img/integrations/slack/sample-alert.png')} alt="Sample Alert" width="600"/>

As the image shows, each notification provides details about the job and the results of each suite within the job.

**Job Details**

* The framework on which the test ran
* The Build ID (if any) applied to the job
* The username of the Sauce Labs account that executed the test
* The date and time at which the job completed

**Test Suite Details**

* The result of the test suite
* The name of test suite
* The Operating System on which the test suite ran
* The browser on which the test suite ran (web-app tests)
* The device or emulator on which the test suite ran (mobile-app tests)
* The duration of the test

In addition, the notifications include a color-coded sidebar for a quick indication of the test result; green if all suites in the job passed, and red if any of the the suites in the job failed.
