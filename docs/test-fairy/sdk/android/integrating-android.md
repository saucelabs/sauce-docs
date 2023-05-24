---
id: integrating-android
title: Integrating Android SDK
sidebar_label: Integrating Android SDK
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Integrating the TestFairy SDK into your app can help you better understand how your app performs on real devices. It tells you when and how people are using your app, and provides you with any metrics you may need in order to optimize your user experience and code.

Both Java and Kotlin apps are supported.

## Installation

### 1. Add the SDK to your app module's build.gradle (that is, `app/build.gradle`)

```java
dependencies {
    implementation 'com.testfairy:testfairy-android-sdk:1.+@aar'
}
```

### 2. Add the TestFairy maven repository to your project

There are multiple options to add the TestFairy Maven, depends on the way your project is built.

The most popular option is by adding to build.gradle (eg. `PROJECT_ROOT/build.gradle`)

```java
buildscript {
    repositories {
        maven { url 'https://maven.testfairy.com' }
    }
}
```

**OR**

For projects that were created with the newer versions of Android Studio, please add the TestFairy maven to `settings.gradle`

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

### 3. Add TestFairy to your main activity's `onCreate`:

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

## Proguard (optional)

If you have _Proguard_ enabled, please add this snippet to your proguard rules file (that is, `proguard-rules.pro`, `proguard.cfg` or others):

```bash
-keep class com.testfairy.** { *; }
-dontwarn com.testfairy.**
-keepattributes Exceptions, Signature, LineNumberTable
-dontusemixedcaseclassnames
```

## Upgrading

TestFairy is constantly improving and updating the Android SDK. Generally, it's a good idea to always use the latest SDK.

Using version wildcards like `1.+@aar`, will automatically upgrade your TestFairy to the latest version. To refresh dependency, and force Gradle to download the latest version, please run the command: `gradlew --refresh-dependencies`

If you are using a fixed version, for example: `testfairy:testfairy-android-sdk:1.2.4@aar`, you will have to manually update the version.

## How to Identify users (Optional)

Here is a quick example for an easy way to identify users by email address.

```js
TestFairy.setUserId("john@example.com");
```

For more identification options [read this](/test-fairy/sdk/identifying-users).

## Additional Permissions (Optional)

TestFairy can record additional insights that require specific permissions. Below is a list of permissions required for each metric:

### Logs - `android.permission.READ_LOGS` (Optional)

In order to automatically upload device logs (logcat) to your account, please add the permission `android.permission.READ_LOGS`.
Please make sure to check the **Log collection** checkbox found under the **"Insights"** tab in Build Settings https://docs.testfairy.com/Getting_Started/Version_Settings.html. This can be done after the app was uploaded or the first session performed.

### Tracking Battery Usage - `android.permission.BATTERY_STATS` (Optional)

In order to automatically upload the battery status to your account, please add the permission `android.permission.BATTERY_STATS`.
The general battery status will be tracked, as well as the time when the device was connected or disconnected from a charger.

### Tracking Phone Signal - `android.permission.READ_PHONE_STATE` (Optional)

In order to automatically upload phone signal to your account, please add the permission `android.permission.READ_PHONE_STATE`.
The phone signal graph shows the GSM Signal Strength, with valid values (0-31, 99). 0 equals -113 dBm or less and 31 equals -51 dBm or more. For more information, please read [GSM standard TS 27.007, section 8.5](http://www.etsi.org/deliver/etsi_ts/127000_127099/127007/08.05.00_60/ts_127007v080500p.pdf)

### Tracking Wi-Fi Signal - `android.permission.ACCESS_WIFI_STATE` (Optional)

In order to automatically upload the wifi status to your account, please add the permission `android.permission.ACCESS_WIFI_STATE`.
The wifi signal will be tracked.

## File Size

The size of the TestFairy SDK is 500KB.

You might also like to read Manual integration with Eclipse and Ant http://docs.testfairy.com/Android/Manual_integration_with_Eclipse_and_Ant.html.

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

If you see one of these errors when you include TestFairy SDK in your project, please make sure you followed step 2 in the installation section on this page.
TestFairy is not on Jcenter any more, and you need to switch to maven.testfairy.com.
