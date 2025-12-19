---
id: bypass-screenshot
title: Bypass Screenshot Restriction
sidebar_label: Bypass Screenshot Restriction
hide_table_of_contents: true
---

If you are testing Android mobile apps on Sauce Labs real devices and you see a black screen in your live testing session or video recording, you may need to enable **Bypass Screenshot Restriction**.

This black screen is caused by a setting called **FLAG_SECURE**, which is sometimes implemented in Android apps to prevent screenshots or video recordings from being taken.

Under the right conditions, enabling **Bypass Screenshot Restriction** allows Sauce Labs to work around the **FLAG_SECURE** setting so that the app can be tested. However, your ability to work around this setting is limited as described in [Workarounds for FLAG_SECURE Apps](#workarounds-for-flag_secure-apps).

:::note
Legacy app storage in Sauce Labs does not support this setting.
:::

The results of this setting vary based on the type of testing you’re doing:

- Live - If you attempt to run a live test on a real device, you will not be able to interact with any screens that have this setting.
- Automated - You can run automated tests on real devices, but you will not be able to see video for the screens that have this setting (the test itself is not affected by this).

## About FLAG_SECURE

The **FLAG_SECURE** flag is intended to let app developers designate sensitive screens in applications as secure. This means the designated windows can’t appear in screenshots, streaming video, or other displays deemed insecure.

For more information, see [FLAG_SECURE](https://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#FLAG_SECURE).

## Workarounds for FLAG_SECURE Apps

Your ability to work around this setting to test will depend on a few factors:

- Who owns the app:
  - If your team developed the app, they should be able to provide you with a version that does not have the **FLAG_SECURE** flag enabled.
  - If your company has built this app on top of another company’s technology, your ability to request a version of the app without this flag is limited.
- Whether **Bypass Screenshot Restriction** is an option:
  - If your developers have created this app and they can’t provide you with an app that doesn’t use **FLAG_SECURE**, the **Bypass Screenshot Restriction** is an option.
  - If you’re testing a scenario that includes interacting with an app owned by another company, **Bypass Screenshot Restriction** won’t work. For example, if you need to use Google Pay to purchase something on your app, you won’t see the video for that part of the purchase process.
  - If your app is built on another company’s technology, **Bypass Screenshot Restriction** won’t work.

:::note
In cases where you’re using a third party app, you might be able to test your data directly on that app using [live testing on a web browser](/web-apps/live-testing/live-cross-browser-testing/).
:::

## Enable Bypass Screenshot Restriction

If you are testing your company’s proprietary app on a real device, you might be able to work around the **FLAG_SECURE** setting by enabling **Bypass Screenshot Restriction** on that app under certain circumstances (see [Workarounds for FLAG_SECURE Apps](#workarounds-for-flag_secure-apps)).

### Live Testing

To bypass screenshot restriction in Live Tests, you'll need to have:

- An app added to Sauce Labs app storage (see [Mobile App Storage](/mobile-apps/app-storage) for more information)
- An understanding of the limitations of this option (see [Workarounds for FLAG_SECURE Apps](#workarounds-for-flag_secure-apps))

#### Editing the App

To edit the app, follow the steps below:

1. Go to **App Management**.
2. Hover over the app you want to test.
3. Click **Settings and App Versions**.
4. Under **Settings > App Settings > Instrumentation** on the right, find **Bypass Screenshot Restriction**.
5. Click the slider to **Enabled**.
6. Click **App Management** at the top to test your app.

### Appium Test

For more information, see [Appium Test Configuration Documentation](/dev/test-configuration-options/#bypassscreenshotrestriction).

### Espresso Test

For more information, see [saucectl documentation for Espresso tests](/mobile-apps/automated-testing/espresso-xcuitest/espresso/#bypassscreenshotrestriction).
