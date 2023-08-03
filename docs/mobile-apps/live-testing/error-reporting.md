---
id: error-reporting
title: Setting Up Backtrace for your Real Device Tests
sidebar_label: Set Up Error Reporting
description: Link your Sauce Labs real device tests with Backtrace to view errors and crashes.
---

Detecting errors and crashes and resolving them early on is key to the success of your app.

After you’ve completed the steps on this page, errors and crashes associated with your real device tests (automated or live) will be available for you in Sauce Labs.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## Supported Platforms

<table id="supported-platforms">
  <tr>
    <th>Supported Platforms</th>
    <th>Supported Systems</th>
    <th>Supported Features</th>
  </tr>
  <tbody>
  <tr>
    <td rowspan='2'>Real devices</td>
    <td>Android</td>
    <td>Errors and Crashes</td>
  </tr>
  <tr>
    <td>iOS</td>
    <td>Errors</td>
  </tr>
  </tbody>
</table>

:::note
Crashes for iOS apps are not supported when running real device tests in Sauce Labs with Backtrace.
:::

## What You'll Need

- A Sauce Labs account ([log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
- A Backtrace account ([log in](https://backtrace.io/login) or sign up for a [free trial license](https://backtrace.io/sign-up)).
- Your subdomain name (used to connect to your Backtrace instance). For example, `https://example-subdomain.sp.backtrace.io`.
- A Backtrace project and an API token with object:get and query:post capabilities.

:::tip Generate an API Token

1. In the Backtrace Console, go to **Project settings > API tokens**.
1. Click **New**.
1. Select the **object:get** and **query:post** capabilities.
1. Click **Create**.

:::

## Create Custom Attributes

Custom attributes are required to link the correct errors and crashes that occurred on the selected device and for the duration of the test.

The following custom attributes are required:
<Tabs>
<TabItem value="android" label="Android">

| Name                  | Format | Type   |
| --------------------- | ------ | ------ |
| `application.package` | None   | String |
| `device.model`        | None   | String |
| `error.type`          | None   | String |

</TabItem>
<TabItem value="ios" label="iOS">

| Name                     | Format | Type   |
| ------------------------ | ------ | ------ |
| `application.identifier` | None   | String |
| `device.machine`         | None   | String |
| `error.type`             | None   | String |

</TabItem>
</Tabs>

To add the attributes:

1. In the Backtrace Console, go to **Project settings > Attributes**.
1. Click **+**.
1. Enter the values for the required fields.
1. Click **Create**.
1. Repeat steps 2 to 4 for each required attribute.

For more information about attributes, see [Indexing Attributes](/error-reporting/project-setup/attributes/).

## Integrate the Backtrace SDK

<Tabs>
<TabItem value="android" label="Android">

To integrate the Backtrace SDK with your Android app, see [Setting Up Backtrace for Android](/error-reporting/platform-integrations/android/setup/).

</TabItem>
<TabItem value="ios" label="iOS">

To integrate the Backtrace SDK with your iOS app, see the [Setting Up Backtrace for iOS](/error-reporting/platform-integrations/ios/setup/).

</TabItem>
</Tabs>

## Enable the Backtrace Integration in Sauce Labs

This enables the Backtrace integration for all users in your organization. Once enabled, only organization admins can update the settings or disable the integration.

:::note
The Backtrace integration is specific to the data center that is active for your Sauce Labs account during setup. If you have access to multiple data centers, you must switch into each data center and complete the steps below to integrate Backtrace.
:::

1. From your Sauce Labs account, go to the **Test Results** details page (live or automated) for a real device.
1. From the bottom of the screen, select the **Error & Crash Reporting** tab.
1. Click **Link with Backtrace**.
1. Enter the **Project Name**, **Dashboard URL**, and **API Token**.
1. Click **Save**.

If you are an organization admin, you can also enable the Backtrace integration from the [**Integrations**](https://app.saucelabs.com/integrations) page.

:::note
Only one subdomain, project, and API token is supported per organization.
:::

## Run your Real Device Test

Throw an error or a crash to test your mobile app.

For information on how to run your real device test (live or automated), see [Mobile App Testing](/mobile-apps/).

## View Test Results in Sauce Labs

After running a real device test with the Backtrace SDK integrated into your Android or iOS app, you can view errors and crashes in Sauce Labs.

1. Go to the **Test Results** details page (live or automated) for a real device.
1. From the bottom of the screen, select the **Error & Crash Reporting** tab.

<img src={useBaseUrl('img/error-reporting/real-devices/real-device-tests.webp')} alt="" />

## View Errors and Crashes in Backtrace

From the **Error & Crash Reporting** tab, click any link to view more details (View Errors, View Crashes, Backtrace Dashboard) in the Backtrace Console.

<img src={useBaseUrl('img/error-reporting/real-devices/real-device-tests-backtrace.png')} alt="" />

For more information about how to view and analyze error and crash data in Backtrace, see [Web Console Getting Started](/error-reporting/web-console/getting-started/).
