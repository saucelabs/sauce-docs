---
id: testing-apple-pay
title: Testing Apple Pay in Mobile Apps
sidebar_label: Testing Apple Pay in Mobile Apps
---

There are three ways to test Apple Pay with Sauce Labs:

* Using simulators
* Using real private devices with an Apple Pay Sandbox Testing account
* Using real private devices with a real production account and real credit cards

## Apple Certificates
Apple certificates are used to ensure security in their systems, and they are much more strict about them than Android. This level of security makes certificates a very complex part of making Apple Pay work with devices in a cloud.

To give you an example, Android apps can be installed without any specific signing on whatever real device you want. With Apple you have two options, or you need to add a remote device to your developer certificate and the provisioning profile, so you are allowed to install the app on that specific device. Or you need to use an enterprise certificate where the Apple device that has that certificate installed allows you to install the app. Similarly, when you install an iOS app on a device, we re-sign the app with a Sauce Labs enterprise certificate so you can install your app on all Sauce Labs public/private devices.

**NOTE:** Apple Pay has a limitation that it cannot work with an enterprise certificate. You need to use the developer certificate where the device has been added to the provisioning profile in order to make this work. This can only be done for Sauce Labs private devices on which you have disabled the resigning.

## Apple Pay on Real Private Devices
To make Apple Pay work on Sauce Labs real private devices:
1. **Follow Apple’s steps to enable Apple Pay (see [Setting Up Apple Pay Requirements](https://developer.apple.com/documentation/passkit/apple_pay/setting_up_apple_pay_requirements))**. Apple is strict about certificates, so they require you to follow very specific steps:
  1. Set up Apple Pay integration in your app.
  2. Register the Merchant ID in your Apple developer account.
  3. Set up an Apple sandbox tester account (see [Create a sandbox tester account](https://help.apple.com/app-store-connect/#/dev8b997bee1) for more information).
2. **Build your app**. Apple Pay doesn’t work with enterprise certificates, so it will not work with Sauce Labs out of the box. The first step is to add the Sauce Labs real private devices to your Apple developer certificate before building the app. You can do that in one of the following ways:
  1. Manually adding the device and its UDID to the device list for your developer certificate.
  **NOTE:** Your device list can be found on Apple’s [Certificates, Identifiers & Profiles page](https://developer.apple.com/account/resources/) for your developer account, and you can get the UDID of your private device by contacting your Sauce Labs CSM.
  2. Using the Sauce Labs Virtual USB solution:
      1. Start a session with Virtual USB (see [Testing with Virtual USB on Real Devices](https://wiki.saucelabs.com/display/DOCS/Testing+with+Virtual+USB+on+Real+Devices) for more information).
      2. When the connection is established, open **XCODE**.
      3. Select the device from the device list.

      img1.png

         On the **Signing & Capabilities** tab, you will see that the device has not yet been added.

      img2.png

      4. Click **Register Device** to add the device to your developer certificate.

      img3.png

      5. Once the UDID of the device is added to the developer certificate, you can build the application (manually or automatically):
          1. Select your build scheme and then select **Generic iOS Device**.
          2. To build the application, click **Product** and then click **Archive**.
          3. Click **Distribute App**.
          4. Distribute the application with **Ad Hoc** and **Automatically manage signing**.
          5. Store the application on your local machine.

    If the application has been built, you should not yet upload it to Sauce Labs. The device to be tested needs to be prepared. If you have already prepared the device, then you can skip to step 4.

3. Prepare the device. Set up the first Sauce Labs private device to use Apple Pay with the Apple sandbox account that was created in step 1.

### Disable the Passcode

Apple Pay requires that you have set a passcode on your phone, and you can’t add cards to your wallet without it. But setting a passcode on a device can break Appium automation because Appium can’t automate the passcode screen. To prevent the testing device from displaying the passcode screen:
1. On the device, go to **Settings > Display & Brightness** and disable Auto-Lock.
2. Ask your CSM to disable rebooting the device by providing them with the unique device name, found in the device details.
**NOTE:** There is no guarantee that the device won’t reboot or show the passcode screen. The test run on the device might be less reliable if the passcode screen appears during the automated session.

### Add the Testing Account
1. On the device, go to **Settings** and then click **Sign in to your iPhone**. Sign in using your Apple sandbox tester account.

img4.png

2. If prompted, enter the device’s passcode.

img5.png

  If you weren’t prompted for a passcode, set it by going to **Settings > Face ID & Passcode** and tapping **Turn Passcode On**.

### Add Apple Sandbox Test Cards
Apple test cards can be found on Apple’s [Sandbox Testing](https://developer.apple.com/apple-pay/sandbox-testing/) page.
1. On your device, go to **Wallet**. If you didn’t set a passcode, Apple will show a notification.

img6.png

2. In **Wallet**, tap the plus sign to add a new card. Use the card information on Apple’s [Sandbox Testing](https://developer.apple.com/apple-pay/sandbox-testing/) page.

img7.png

3. **Prepare Sauce Labs**. As mentioned before, Sauce Labs uses an enterprise certificate to install an app on public and private devices. But Apple Pay can’t work with the enterprise certificate, so the app needs to be signed with the developer certificate. You need to instruct Sauce Labs to not re-sign the app when it is installed.

### Disable Re-Signing
1. In Sauce Labs, in the left navigation, click **Live** and then click **Mobile-App**.

img8.png

  You will see an overview of the already uploaded apps. If no app has been uploaded, then upload the app. Once uploaded, open the app settings by hovering over the row until you see this:

img9.png

2. Click **Settings**.

img10.png

3. Under **Default settings**, toggle **Instrumentation** to **Disabled**.

img11.png

Disabling this allows the app to use Apple Pay and the developer certificate and provisioning profile that you used when you built the app.

**NOTE:** Disabling re-signing will break the installation of the app on public devices. The app will only be allowed to be installed on private devices that have been added to the developer certificate and provisioning profile.

Once the app has been uploaded and re-signing has been disabled, you can start the device and let Sauce Labs install the application on the device.

5. **Test the app**. View the Sauce Labs Demo Payments app:

img12.png
img13.png
img14.png
img15.png
