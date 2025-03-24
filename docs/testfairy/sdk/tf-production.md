---
id: tf-production
title: Sauce Mobile App Distribution (TestFairy) in Production
sidebar_label: Sauce Mobile App Distribution in Production
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Running Sauce Mobile App Distribution in production offers numerous benefits, such as gaining valuable insights into user behavior, detecting and resolving issues promptly, and continuously improving your app's performance. With Sauce Mobile App Distribution, you can proactively monitor your production environment, gather valuable data, and make informed decisions to deliver a superior app to your users.

## Running Sauce Mobile App Distribution in Production

When running Sauce Mobile App Distribution in production, you may record sensitive data such as medical information, financial data or photos.

Therefore it is important to follow these guidelines:

1. On iOS, you **must** request explicit user consent before recording start.
   See the [Apple guidelines](https://developer.apple.com/app-store/review/guidelines/) and pay special attention to section 2.5.14

1. On Android, call disableAutoUpdate() to comply with [Play Store Developer Distribution Agreement](https://play.google.com/about/developer-distribution-agreement.html).

1. When recording sensitive data you **must** use Sauce Mobile App Distribution's end-to-end encryption with your own private keys, so that only your team can see your sessions.

1. You **must** hide sensitive data such as credit card numbers, passwords, or other PII, so that this info will not be uploaded to the server.

1. In case you are using Sauce Mobile App Distribution for customer support to better understand your users in case of a technical issue,
   it is recomended to add a button to your app menu (call it "advanced support"?) and have that button call `TestFairy.begin()`.
   Before calling `begin()` ask the user if this is ok to record their screen for quality assurance purposes.
   When doing that, make sure that session duration is set to 2-3 minutes, just enough to identify the cause of a problem.

1. You **must** include a proper disclaimer in your app terms of service document.
   You must explain exactly what data you collect, and how to request deletion of that data.

1. Never use Sauce Mobile App Distribution Auto-update with apps that are shipped to production. This is a clear violation of both Apple and Google's terms.

## Disabling Sauce Mobile App Distribution in Production

When it comes to using Sauce Mobile App Distribution in a production environment, there may be instances where you need to disable Sauce Mobile App Distribution's functionality temporarily or permanently. Disabling Sauce Mobile App Distribution in production can be necessary for a variety of reasons, such as complying with platform guidelines or eliminating potential performance impacts.. The SDK is very modular and is built to handle the your and your company's needs.

### iOS

#### Option 1: Calling [TestFairy begin] only in DEBUG

Without a call to [TestFairy begin], the SDK is not initialized. An uninitialized SDK won't consume any memory, won't open sockets, and won't catch uncaught exceptions. Even though it does not impact your app in any way, the SDK is still linked with your app.

##### Objective-C

```
#ifdef DEBUG
[TestFairy begin:@"APP_TOKEN"];
#endif
```

##### Swift

```
#if DEBUG
TestFairy.begin("APP_TOKEN")
#endif
```

If your publishing workflow has multiple build schemes or you plan to implement such phases, proceed to [this post](https://blog.testfairy.com/ios-build-schemes-explained/) to learn how to do that.

We suggest defining a compiler flag for each scheme you have to enable the SDK for schemes relevant to testing like below.

##### Objective-C

```
#if defined(DEBUG)
[TestFairy begin:@"APP_TOKEN"];
#elif defined(SCHEME1)
[TestFairy begin:@"APP_TOKEN"];
#elif defined(SCHEME2)
[TestFairy begin:@"APP_TOKEN"];
#else
// Don't initialize the SDK
#endif
```

##### Swift

```
#if DEBUG
TestFairy.begin("APP_TOKEN")
#elseif SCHEME1
TestFairy.begin("APP_TOKEN")
#elseif SCHEME2
TestFairy.begin("APP_TOKEN")
#else
// Don't initialize the SDK
#endif
```

If you are also worried about reducing the app size in your final release build, proceed to Option 2.

#### Option 2: Configure Link Options in a Scheme for App Store

A common pattern we see from our customers is having a dedicated scheme for App Store. Meaning there's a Debug, Release and App Store (and maybe others.)

The link phases that are explained in the integration document only apply to Debug and Release schemes, and can be excluded from the App Store scheme.

This solution still requires use of `#ifdef` or `#if` as before, but can also completely omit the library from being linked with the app.

Navigate to project build settings and locate **Excluded Source File Name** option. Expand the list and find the build scheme you want to exclude Sauce Mobile App Distribution from. Double click the row add two entries to the excluded file list, one for **TestFairy.h**, one for **libTestFairy.a** files.

Try building your project. If the compilation fails, locate the lines where Sauce Mobile App Distribution is used and wrap them with `#ifdef` or `#if` directives explained in Option 1.

<a name="ios-noop"></a>

### Option 3: No-Op SDK

Similar to Option #2, you're required to have multiple schemes in your project, but **does not** require the use of `#ifdef` or `#if`.

1. Download the [TestFairy iOS No-Op SDK](https://github.com/testfairy/testfairy-ios-sdk-noop)
2. Add `TestFairy.m` to your project's _Production_ or _App Store_ scheme. (Note, that the `.m` file needs to be put in a place where it can find the `TestFairy.h` file).
3. Navigate to project build settings and locate **Excluded Source File Name** option. Expand the list and find the build scheme you want to exclude TestFairy from. Double click the row add an entry to the excluded file list for the **libTestFairy.a** file.

This keeps all calls to `TestFairy` as-is, but replaced with empty implementations.

### Android

#### Option 1: Calling TestFairy.begin() only in Debug mode.

Your Gradle variants can alter the code path of your app. Use debug flavor to call `TestFairy.begin()`, and release flavor to emit this call.

If you are not used to working with build variants, refer to [this post](https://blog.testfairy.com/create-a-custom-build-in-android/) the learn how.

In order for ProGuard to fully crop the Sauce Mobile App Distribution SDK from the final binary, you may use a wrapper class that differs in each of your flavors.

- Create a new Java folder for your **release** variant.
- Create a Java class somewhere in the shared (main) variant.
- Create the same package structure and Java class in the **release** variant as well.
- Put the code below into the Java class under **main/java**.

```
public class TestFairyWrapper {
  public static void begin(Activity activity, String apikey) {
    TestFairy.begin(activity, apikey);
  }
}
```

- Put the code below into the Java class under **release/java**.

```
public class TestFairyWrapper {
  public static void begin(Activity activity, String apikey) {
    // Do nothing
  }
}
```

- Call `TestFairyWrapper.begin()` in your main activity.

Without any calls to any of the Sauce Mobile App Distribution SDK, Proguard removes the entire compiled code from the result `classes.dex` and the final APK.

#### Option 2: Use a Class Loader

Android allows advanced developers to load classes into memory on-the-fly. You can use Java reflections to load Sauce Mobile App Distribution class into memory only on a Debug build.

Replace the code where you call `TestFairy.begin()` with the code below.

```
try {
    Class cls = Class.forName("com.testfairy.TestFairy");
    Method method = cls.getMethod("begin", android.content.Context.class, String.class);
    method.invoke(cls, this, "SDK-XXXXXXX");
} catch (Exception e) { /* ignore */ }
```

Then, in your `build.gradle` file, change the SDK dependency with `debugImplementation 'testfairy:testfairy-android-sdk:1.+@aar'` or any other version of your choosing.
