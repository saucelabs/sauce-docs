---
id: integrating-android
title: Integrating Android SDK
sidebar_label: Integrating Android SDK
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Integrating the Sauce Mobile App Distribution SDK into your app can help you better understand how your app performs on real devices. It tells you when and how people use your app and provides any metrics you may need to optimize your user experience and code.

Both Java and Kotlin apps are supported.

## Installation

1. Add the SDK to Your App Module's build.gradle (that is, `app/build.gradle`)

```java
dependencies {
    implementation 'com.testfairy:testfairy-android-sdk:1.+@aar'
}
```

2. Add the Sauce Mobile App Distribution Maven Repository to Your Project

Depending on how you build your project, there are multiple options to add the Sauce Mobile App Distribution Maven.

The most popular option is to add to build.gradle (eg. `PROJECT_ROOT/build.gradle`)

```java
buildscript {
    repositories {
        maven { url 'https://maven.testfairy.com' }
    }
}
```

**OR**

Add the Sauce Mobile App Distribution maven to `settings.gradle` if you create projects with the newer versions of Android Studio.

```java
dependencyResolutionManagement {
    repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)
    repositories {
        google()
        mavenCentral()
        maven { url 'https://maven.testfairy.com' }

    }
}
```

3. Add Sauce Mobile App Distribution to Your Main Activity's `onCreate`:

```js
import com.testfairy.TestFairy;

public class MyApplication extends Application {

   @Override
   public void onCreate() {
       super.onCreate();
       TestFairy.begin(this, "<YOUR_APP_TOKEN_HERE>");
   }
}
```

## Proguard (Optional)

If you have `Proguard` enabled, add this snippet to your proguard rules file (that is, `proguard-rules.pro`, `proguard.cfg`, or others):

```bash
-keep class com.testfairy.** { *; }
-dontwarn com.testfairy.**
-keepattributes Exceptions, Signature, LineNumberTable
-dontusemixedcaseclassnames
```

## Upgrading

Sauce Mobile App Distribution is constantly improving and updating the Android SDK. Generally, it's a good idea always to use the latest SDK.

Using version wildcards like `1.+@aar`, automatically upgrade your Sauce Mobile App Distribution to the latest version. To refresh dependency and force Gradle to download the latest version, run the command: `gradlew --refresh-dependencies`

You must manually update the version if you use a fixed version, such as `testfairy:testfairy-android-sdk:1.2.4@aar`.

## How to Identify Users (Optional)

Here is a quick example of identifying users by email address.

```js
TestFairy.setUserId("john@example.com");
```

Read Identifying your Users /testfairy/sdk/identifying-users for more identification options.

## Additional Permissions (Optional)

Sauce Mobile App Distribution can record additional insights that require specific permissions. Below is a list of permissions required for each metric:

### Logs - `android.permission.READ_LOGS` (Optional)

To automatically upload device logs (logcat) to your account, add the permission `android.permission.READ_LOGS`.
Check the **Log collection** under the **Insights** in Build Settings. You can do it after the app is uploaded or the first session performed.

### Tracking Battery Usage - `android.permission.BATTERY_STATS` (Optional)

Add the `android.permission.BATTERY_STATS` permission to automatically upload the battery status to your account.
It tracks the general battery status and when the device is connected or disconnected from a charger.

### Tracking Phone Signal - `android.permission.READ_PHONE_STATE` (Optional)

To automatically upload a phone signal to your account, add the `android.permission.READ_PHONE_STATE` permission.
The phone signal graph shows the GSM Signal Strength, with valid values (0-31, 99). 0 equals -113 dBm or less, and 31 equals -51 dBm or more. For more information, read [GSM standard TS 27.007, section 8.5](http://www.etsi.org/deliver/etsi_ts/127000_127099/127007/08.05.00_60/ts_127007v080500p.pdf)

### Tracking WiFi Signal - `android.permission.ACCESS_WIFI_STATE` (Optional)

To automatically upload the wifi status to your account, add the `android.permission.ACCESS_WIFI_STATE` permission: it tracks the wifi signal.

## File Size

The size of the Sauce Mobile App Distribution SDK is 500KB.

You might also like to read Manual Integration with Eclipse and Ant http://docs.testfairy.com/Android/Manual_integration_with_Eclipse_and_Ant.html.

## Troubleshoot

```bash
Could not GET 'https://jcenter.bintray.com/testfairy/testfairy-android-sdk/1.11.45/testfairy-android-sdk-1.11.45.pom'. Received status code 400
```

```bash
Could not GET 'https://jcenter.bintray.com/testfairy/testfairy-android-sdk/1.11.45/testfairy-android-sdk-1.11.45.pom'. Received status code 403
```

```bash
Could not GET 'https://jcenter.bintray.com/testfairy/testfairy-android-sdk/1.11.45/testfairy-android-sdk-1.11.45.pom'. Received status code 407
```

If you see one of these errors when you include Sauce Mobile App Distribution SDK in your project, follow step 2 in the installation section on this page.
Sauce Mobile App Distribution is no longer on Jcenter, and you must switch to `maven.testfairy.com`.
