---
id: faq
title: Automated Mobile Appp Testing FAQ
sidebar_label: FAQ
---

## Real Devices

### General

#### How real are the Real Devices?

Our devices are real, physical devices. They are standard, commercially available devices and not modified or rooted. We use virtual networking computer (VNC) to transmit mouse and keyboard events on the devices. The VNC server on the devices relays back the content of the screen of the devices in real time.

#### What does the top device lists by country tell me, and how reliable are they?

The top lists indicate the ten most common devices by country. We gather information from an external provider who analyses mobile web traffic data from thousands of websites worldwide. The lists are generally reliable, but by using the "web traffic" metric for device distribution numbers, high-end devices and tablets might be overrepresented. Older and low-cost devices often have a smaller screen and a poorer performance, and are less used for surfing the web than top devices. This is why the  "web-traffic" metric might underrepresent the overall distribution of these devices.

#### The devices in your top list do not coincide with top devices in my user base. Why?

When you compare the most popular devices of your users with our top lists you probably will see differences. A reason for this might be that our lists represent all mobile users, where your users may differ in certain aspects from the overall population of mobile users. For example, a food recipe app probably attracts a different user group than an outdoor navigation app, and these user groups probably also prefer different device models.

#### How long does it take until I can test on the latest devices on the cloud?

We try to source new popular devices really quickly. Usually, we can provide new models immediately after they are launched.

#### You don't have the device that I need. Can you get it for me?

Generally, yes. If the model you are looking for is not in our pool yet you can request it. In the device selection screen for your manual test, click the Device request link under Search devices. We'll add that request to our purchasing list. If a device is requested by enough users, we will look to source it in our next purchasing round.

#### Is it possible to test the camera behavior using your devices?

While you will be able to access the camera on all our devices, our smartphones and tablets are usually located in racks to allow higher density in our data centers. This means that you will only see what is immediately in front of the camera lens.


#### Is it possible to test push notifications?

Yes. For iOS you will need to disable resigning before testing to enable notifications testing. Disabling resigning is a feature to be used on private devices only and will require you to start keeping track of the iOS device UDIDs (Unique Device Identifier) by maintaining them in your own Apple Developer profile used at app build time. Android testing requires no changes.


### Security

#### Is my app safe in the Real Device Cloud cloud?

Our Real Device Cloud servers are located in the Europe and US at certified data centers. The communication is SSL secured. We try to ensure as much safety as a cloud service can provide. The Real Device Cloud will never abuse your data, and we [respect your data privacy](http://testobject.com/privacy) at all times. For very high security requirements, we also provide a [private cloud solution](http://testobject.com/enterprise).


#### Can other users access my data?

It is of great importance for us to make sure that no other user can have access to your data. This is why we clean up the devices after each testing session. In detail, we:

*   Uninstall all user apps
*   Delete browser data
*   Clear the SD card
*   Clear all accounts whenever allowed by the OS (e.g., Google Play, Twitter, etc.)
*   Finally, we automatically check if the clean-up was successful and block the device for other users if we detect that user data has not been removed properly.


#### Do you support SSO (Single Sign-On)?

Yes, we support OAuth login via LinkedIn, Google and GitHub.


### Automated Testing

#### Can I use the REST API to launch automated tests using Appium, Robotium, and Espresso?

You can do that for Robotium and Espresso, but not for Appium. Tests that rely on Appium must be initiated by local test runners.


#### Can I use CircleCI to initiate test cases to run on many devices?

Yes. You’ll want to use Maven or Gradle. We also have our own Espresso Runner here:

[https://github.com/saucelabs/espresso-runner](https://github.com/saucelabs/espresso-runner) (note the Gradle plugin has been deprecated).


#### Can I run native app tests with XCUITest test automation?

Yes, but only on iOS 10 and iOS 9 (note these OS versions have different default behavior).


#### How do I upload an iOS app?

You need to export your app as an IPA file for Ad Hoc Deployment as described in [Creating an ipa File](https://wiki.saucelabs.com/display/DOCS/Creating+an+ipa+File). You can upload your IPA manually to create a project, then upload subsequent versions either manually or through our REST API, as described in [Uploading Your App to Real Device Storage with the REST API](https://wiki.saucelabs.com/pages/viewpage.action?pageId=92677295).


#### Can I upload multiple APKs for testing?

Yes. You can upload more than one APK using the “dependency app” functionality.


#### Can I choose different browsers on a device?

Yes, but only for manual testing. If the browser is not present on the device, you will need to manually install it. For automated testing, we support the Android device's default browser and Chrome Browser and Safari on iOS.


#### Do I have to worry about provisioning profiles, certificates and UDIDs when uploading an app?

No. On iOS, we re-sign with our own certificate. On Android, there are no extra complications with certificates.


#### If I run a test on the public cloud (not private), can I run it over ssh or a VPN?

No. Private cloud accounts have the option today to use an IPSEC VPN (which must be specially set up by Sauce Labs). Sauce Connect is supported for both private and public clouds.


#### Should anything be present on the device from an earlier test?

No. If there is, our automated cleaning process didn’t work as intended. If this happens, let us know so our Operations team can reset the device and see what went wrong with the cleaning process.


#### My app is only available within our internal network. Can I use real devices for my testing?

You can add an exception for the Real Device Cloud to your network's whitelist for the appropriate domains described in the Whitelisting for Restricted Networks in [System and Network Requirements for Sauce Connect Proxy](https://wiki.saucelabs.com/pages/viewpage.action?pageId=48365793).


#### I see the error "Not Yet Implemented Exception" when scrolling in an Appium web test on Android. Why?

Appium cannot scroll in the "web" context, only in the native app context.  The test shows this error instead.


#### Does your service provide performance test tools?

No.


#### Do you support audio or microphones?

No. This is feature request that is on our road map.


#### Can I use Bluetooth on a device?

Yes. Please contact your Customer Success Manager or Account Executive to discuss your specific use case.


#### What should the frame rate be on newer Android devices?

20 to 30 FPS.


#### Can I trigger the disconnect/reconnect of a charging cable for a device?

No.


#### Do you have any UI inspection tool built into your application like UI Automator viewer?

No, there are no inspection tools. We recommend using [Appium Desktop](https://github.com/appium/appium-desktop) for UI inspection, it has built in support for devices on the Real Device Cloud.


#### Can I change the orientation of the device screen during a test?

Yes.  For automated tests this can be done with a command (in Java, it would be: driver.setOrientation(orientation)).  For manual tests, click rotate device.


#### Do you support code coverage reports by JaCoCo?

No.


#### Can I change the geolocation of a device?

Yes. In Java, it can be done with the command: driver.setLocation(long, lat).


#### Can I change the device’s time and date?

Yes, but only for manual tests. The change can be made in the Settings of the device.


#### Can I take screenshots during Espresso tests with the Real Device Cloud?

 Yes, if you use the Spoon library.


#### Can I test MO (Mobile Originated) SMS text messages?

Yes, only on devices that have SIM cards and are connected to the Carrier Network.


#### Can I access Mobile Data? Not just wifi, but 3G and 4G networks?

Yes, only on devices that have SIM cards and are connected to the Carrier Network.


### Live Testing

#### If I start a manual session and don’t do anything in it for a long time, will the session remain open indefinitely?

No.  Sessions are closed after 15 minutes of inactivity.


#### If I purchase *just* an automated testing plan, will I still be able to run manual tests on the same set of devices?

 Yes, for plans purchased after May 1, 2017. No, for plans purchased before that date.


#### Does an active manual test show up in the "Current Activity" field?

 No, because we don’t create reports for manual tests. We only do that for automated tests.


#### I closed the tab on a manual test by mistake. Can I go back to it?

No. We have plans to make that possible in the future.


#### My manual test errors with “App installation failed : INSTALL_FAILED_INSUFFICIENT_STORAGE”

This could mean something went wrong in our infrastructure.  Let us know and we’ll contact our operations team.


#### I get a popup asking whether to allow my app to use the device location in automated tests, but not manual tests. Why?

The default behavior for manual tests is to grant all permissions to apps to prevent those popups.



## Emulators and Simulators


#### What type of keyboard and buttons do the Android emulators have?

Android Emulators have software buttons and a hardware keyboard. In a regular Android emulator the device buttons are software buttons displayed on the right size of the emulator. For the Android emulators with different skins (e.g Google Nexus 7 HD, LG Nexus 4, Samsung Galaxy Nexus, Samsung Galaxy S3, etc) the device buttons are also software buttons that are overplayed on top of the skin. For instance, if you hover the mouse around the edges of any of our Android emulators with an specified skin, a hover icon will appear and you should be able to find whatever buttons actually exist on the device that the skinned emulator is trying to emulate (e.g power button along the top, volume buttons along the edge, back/home buttons right below the screen, etc).


#### How can I run Android tests without Appium?

If you wish to use the native Android testing framework (Espresso), please refer to the following documentation for [real device testing](/mobile-apps/automated-testing/espresso-xcuitest/real-device-testing) or [emulator and simulator testing](/mobile-apps/automated-testing/espresso-xcuitest/virtual-device-testing).


#### What mobile web browsers can I automate in the Android emulator?

Currently the only browser that can be automated in our Android emulators is the stock browser (i.e., Chrome).


#### How can I test with mobile real devices instead of using the simulators or emulators?

The mobile real device cloud is a new feature that Sauce Labs is currently working on. For more information about this feature please directly email your account representative or email (sales@saucelabs.com).


#### How do I use XCUITest-driver on Appium 1.6.0 with iOS 9.x tests?

Appium 1.6.0 will default to using `automationName: XCUITest` for iOS 10.x tests, and `automationName: UIAutomation` for iOS 9.x tests. However, if you specify `automationName: XCUITest` in the device capabilities for the test, you can get XCUITest for iOS 9.x tests.

## Test Queuing and Concurrency

#### What are concurrent test runs?

The number of concurrent test sessions in your plan tells you:

*   On how many devices your test scripts can be executed at the same time, in the case of automated testing
*   How many devices you can remote control at the same time, in the case of manual testing.

#### If I run a test and all the devices of the selected model are "Unavailable," how long will the test be queued?

15 minutes by default. But you can increase it up to 30 minutes through [the testobject_session_creation_timeout desired capability](https://wiki.saucelabs.com/display/DOCS/Appium+Capabilities+for+Real+Device+Testing#AppiumCapabilitiesforRealDeviceTesting-SessionCreationTimeout). You can also shorten it, but putting it to less than 2 minutes is probably a bad idea. At less than 2 minutes, you may see tests not starting because the session may not have time to be initialized.


#### If I have a concurrency of five and I start 10 tests, will the Real Device Cloud queue five of the tests to run later?

Yes. The five other tests will try to get the requested devices for the next 15 minutes. That’s the default time -- it can be increased to 30 minutes through [the testobject_session_creation_timeout desired capability](https://wiki.saucelabs.com/display/DOCS/Appium+Capabilities+for+Real+Device+Testing#AppiumCapabilitiesforRealDeviceTesting-SessionCreationTimeout).


## Pricing Plans and Billing

#### Can I upgrade and downgrade plans at any time?

You can upgrade your plan at any time and get access to all its features immediately. Charges will also apply immediately. If you downgrade, your new plan starts from the next billing cycle.


#### Are all plans auto-renewed?

Yes, all Real Device Cloud plans - monthly and annual - are auto-renewal subscriptions. To cancel your subscription you have to actively downgrade to the "free" plan. This will not delete your Real Device Cloud account and you can re-subscribe to a paid plan at any time.


#### Which payment methods do you accept?

We accept credit card payments (Visa, MasterCard, Maestro). When you have subscribed to a monthly plan, your credit card will be charged monthly. When you've subscribed to an annual plan, the full amount for 12 months will be charged once at the beginning of the billing cycle. For annual plans we also accept PayPal or direct invoicing. Please contact our sales team for further information: sales@saucelabs.com.


#### Will I receive an invoice?

Yes, you will receive an invoice for every payment via email. You also can access your billing history from your account settings.


### Free-Trial Accounts

#### Are the device settings, Google Play Store, and camera all password-protected on all free devices?

Yes. You'll need to upgrade to a paid plan to gain access to devices that are not password-protected.

If your app uses the Google Play store, you would need to upgrade to a Real Device Cloud plan.

Note that the free-trial devices will remain "free," even if you have a paid account. These will still be accessible to you, but there will also be other devices available that are not password protected.


#### Why does a lock/PIN screen appear during my test?

To make sure the availability stays high, we need to password-protect certain functionality on our free devices. This usually includes the Settings and the Play Store. The password protection is not in place on our premium devices.



#### Is there a limit to how many tests I can run with a free-trial account? Can I run tests in parallel?

You can run as many tests as you wish on your trial account, but you will only be able to run one test at a time.  Also, no manual  test is allowed to run for more than ten minutes.


## System Maintenance

#### Is the service ever unavailable because it is under maintenance or being updated?

Software updates are deployed to the service on Thursdays between 7:30 and 8:30 CEST. The service does not officially halt during this weekly window of time, but customers should be aware that any automated or manual tests run during this time period might fail.
