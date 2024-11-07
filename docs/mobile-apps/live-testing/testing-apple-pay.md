---
id: testing-apple-pay
title: Testing Apple Pay
sidebar_label: Testing Apple Pay
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Apple Pay is a mobile payment and digital wallet service developed by Apple Inc. It allows you to make payments using your Apple devices, including iPhones and iPads. However, testing Apple Pay can be challenging, especially when it comes to testing it on different devices and environments. In this regard, Sauce Labs provides three ways to test Apple Pay, including using Simulators, using real private devices with an [Apple Pay Sandbox Testing account](https://developer.apple.com/apple-pay/sandbox-testing/), and using real private devices with a real production account and real credit cards.

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
- A native iOS, or iPadOS mobile app with Passcode capability enabled
- A [private devices](/mobile-apps/supported-devices/#private-device-cloud) with Apple Pay enabled! To access our private device cloud and Apple Pay, contact your Sauce Labs account executive or our support team.


## Testing Apple Pay

Sauce Labs offers three ways to test Apple Pay :

- Using Simulators.
- Using real private devices with an Apple Pay Sandbox Testing account.
- Using real private devices with a real production account and real credit cards.

:::caution iOS Simulators
There are important differences between the Apple Pay Real Device and Simulator flow. The Simulator has the following limitations:

- It is focused on the front-end integration of Apple Pay and does not test the back-end integration.
- You **can't** add cards to the wallet, meaning:
  - No Apple Pay Sandbox Testing cards.
  - No real credit cards.
- You **can't** test the Apple Pay in-web flow.
- You **can** test the Apple Pay in-app flow, but the Apple Pay in-app flow will not work the same as with Real Devices. It won't return a payment token and will not properly process your payment. In addition to this, it automatically provides simulated cards for all the supported payment networks.

:::

## Requirements

- You need to use [Private devices](#apple-pay-on-real-private-devices) with Apple Payment enabled.
- [Instrumentation](#disable-instrumentation) needs to be disabled.
- You need to add your Sauce Labs hosted Private device [UDID](#apple-pay-on-real-private-devices) to your own provisioning profile.
- Devices with Assistive touch enabled. In this case, you need to accept Apple Payment confirmation through assistive touch!

## Apple Certificates

Apple certificates are used to ensure security in their systems, and they are much more strict about them than Android. This level of security makes certificates a very complex part of making Apple Pay work with devices in a cloud.

To give you an example, Android apps can be installed without any specific signing on whatever real device you want. With Apple you have two options, or you need to add a remote device to your developer certificate and the provisioning profile, so you are allowed to install the app on that specific device. Or you need to use an enterprise certificate where the Apple device that has that certificate installed allows you to install the app. Similarly, when you install an iOS app on a device, we re-sign the app with a Sauce Labs enterprise certificate so you can install your app on all Sauce Labs public/private devices.

:::note
Apple Pay has a limitation that it cannot work with an enterprise certificate. You need to use the developer certificate where the device has been added to the provisioning profile to make this work. This can only be done for Sauce Labs private devices on which you have disabled the instrumentation.
:::

## Apple Pay on Real Private Devices

:::note
Our real devices are cleaned after every test session. Therefore, you need to configure your Apple Pay Sandbox Testing account, including a passcode and sandbox cards, every time you want to test Apple Pay on an iOS real device.
:::

To make Apple Pay work on Sauce Labs real private devices:

1. **Follow Apple’s steps to enable Apple Pay (see [Setting Up Apple Pay Requirements](https://developer.apple.com/documentation/passkit/apple_pay/setting_up_apple_pay_requirements))**. Apple is strict about certificates, so they require you to follow very specific steps:
1. Set up Apple Pay integration in your app.
1. Register the Merchant ID in your Apple developer account.
1. Set up an Apple sandbox tester account (see [Create a sandbox tester account](https://help.apple.com/app-store-connect/#/dev8b997bee1) for more information).
1. **Build your app**. Apple Pay doesn’t work with enterprise certificates, so it will not work with Sauce Labs out of the box. The first step is to add the Sauce Labs real private devices to your Apple developer certificate before building the app. You can do that in one of the following ways:
1. Manually adding the device and its UDID to the device list for your developer certificate.
   :::note
   Your device list can be found on Apple’s [Certificates, Identifiers & Profiles page](https://developer.apple.com/account/resources/) for your developer account, and you can get the UDID of your private device by contacting your Sauce Labs CSM.
   :::
## Passcode

One of the Apple Pay requirements is having a set passcode on your phone. Without it, you won't be able to add cards to your wallet. You need to use our Device Passcode capability.
To initiate a session with automatic Passcode enabling, [explore our passcode capability](/mobile-apps/live-testing/live-mobile-app-testing/#real-device-settings), where you have the option to utilize either a dummy app or our [Sauce Demo application](https://github.com/saucelabs/my-demo-app-ios/releases/tag/2.0.2).

## Add Apple Sandbox Test Cards

Apple test cards can be found on Apple’s [Sandbox Testing](https://developer.apple.com/apple-pay/sandbox-testing/) page.

1. On your device, go to **Wallet**. If you didn’t set the passcode capability, Apple will show a notification.

<img src={useBaseUrl('img/live-testing/apple-pay-6.png')} alt="Apple Pay setup - passcode notification" width="250"/>

2. In **Wallet**, tap the plus sign to add a new card. Use the card information on Apple’s [Sandbox Testing](https://developer.apple.com/apple-pay/sandbox-testing/) page.

<img src={useBaseUrl('img/live-testing/apple-pay-7.png')} alt="Apple Pay setup - Add new card" width="250"/>

3. **Prepare Sauce Labs**. As mentioned before, Sauce Labs uses an enterprise certificate to install an app on public and private devices. But Apple Pay can’t work with the enterprise certificate, so the app needs to be signed with the developer certificate. You need to instruct Sauce Labs to not re-sign the app when it is installed.

## Disable Instrumentation

1. On Sauce Labs, in the left navigation, click **Live** and then click **Mobile-App**.  

You will see an overview of the already uploaded apps. If no app has been uploaded, then upload the app. Once uploaded, open the app settings by hovering over the row until you see this:

<img src={useBaseUrl('img/live-testing/apple-pay-9.png')} alt="Apple Pay setup - Settings" width="650"/>

2. Click **Settings**.

<img src={useBaseUrl('img/live-testing/apple-pay-10.png')} alt="Apple Pay setup - Settings" width="650"/>

3. Under **Default settings**, toggle **Instrumentation** to **Disabled**, and Enable Passcode. 

<img src={useBaseUrl('img/live-testing/apple-pay-11.png')} alt="Apple Pay setup - Disable instrumentation" width="350"/>

Disabling this allows the app to use Apple Pay and the developer certificate and provisioning profile that you used when you built the app.

:::note
Disabling re-signing will break the installation of the app on public devices. The app will only be allowed to be installed on private devices that have been added to the developer certificate and provisioning profile.
:::

4. Once the app has been uploaded and re-signing has been disabled with Passcode capability, you can start the device and let Sauce Labs install the app on the device.
