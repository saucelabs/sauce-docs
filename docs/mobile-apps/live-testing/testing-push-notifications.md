---
id: testing-push-notifications
title: Testing Push Notifications
sidebar_label: Testing Push Notifications
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<p><small><span className="sauceGreen">Real Devices Only</span></small></p>

Testing push notifications is essential to deliver a satisfactory mobile experience. With Sauce Labs' Real Device Cloud, you can test push notifications on Android and iOS devices. These notifications, delivered as pop-up messages initiated by the application and sent to the user's device, offer numerous benefits for app publishers. By utilizing push notifications, you can deliver relevant and timely messages, provide personalized content, re-engage users, and geo-target them based on their location.

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
- An Android or iOS mobile application that includes push notification functionality.
- **iOS Only**: Instrumentation disabled.
- **iOS Only**: You must use private devices due to signing requirements.

## Disabling Instrumentation for iOS Apps

1. On Sauce Labs, in the left navigation, click **App Management**.

<br/><img src={useBaseUrl('img/mobile-apps/app-logs5.png')} alt="App Logs" width="300"/>

2. Upload your mobile app to Sauce Labs.

<br/><img src={useBaseUrl('img/mobile-apps/app-logs-8.png')} alt="App Logs" width="700"/>

3. Hover over the app, then select **Settings**.

<br/><img src={useBaseUrl('img/mobile-apps/app-logs-6.png')} alt="App Logs" width="700"/>

4. Under **Real Device Settings**, toggle **Instrumentation** to **Disabled**.

<br/><img src={useBaseUrl('img/mobile-apps/push-notifications-scrn1.png')} alt="App Logs" width="700"/>

## iOS and Android Differences

Push notifications function differently on iOS and Android. Understanding these differences is crucial when implementing and testing push notifications.

**Android**:

- No specific build or additional steps are required to test push notifications on Android devices in the Sauce Labs Real Device Cloud.
- After building your Android app, you can install it on an Emulator or a real device provided by Sauce Labs for comprehensive testing of push notifications.

**iOS**:

- Due to the signing process for app installation, disabling instrumentation is required to test push notifications on iOS devices.
- Sauce Labs offers support for various signing methods, including guidance on using developer certificates. Refer to our detailed documentation or interactive demo video for step-by-step instructions.

## Video Tutorial

We understand that visual demonstrations can help with understanding and implementing push notifications for Android and iOS apps effectively. Watch the video to learn the capabilities used by Apple to enable push notifications and explore proven methods to overcome any challenges that may arise during the process.

<iframe width="560" height="315" src="https://www.youtube.com/embed/RIseDgjB4ZQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
