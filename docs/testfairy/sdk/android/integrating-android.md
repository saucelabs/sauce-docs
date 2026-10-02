---
id: integrating-android
title: Integrating the Android SDK
sidebar_label: Integrating Android SDK
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<p><span className="sauceYellow">Beta release</span></p>

:::info Beta release
The Sauce Mobile Beta SDK is in beta. The current release candidates are 2.2.0-rc for iOS and Android and 3.0.0-rc for React Native.

- Final: the artifact names and the API.
- Can still change before general availability: the version numbers, the iOS package URL, and this documentation.

Share feedback with your Sauce Labs representative.
:::

Integrating the Sauce Mobile Beta SDK (formerly the TestFairy SDK) into your app can help you better understand how your app performs on real devices. It tells you when and how people use your app and provides any metrics you may need to optimize your user experience and code.

Both Java and Kotlin apps are supported. The Android artifact is `com.saucelabs.mobilebeta:sauce-mobile-beta-android`. The Java package is still `com.testfairy`, so existing `TestFairy.*` calls keep compiling.

:::note Crash reporting
The Sauce Mobile Beta SDK is crashless: it never installs a crash handler, and the legacy crash APIs (`installCrashHandler`, `enableCrashHandler`, `disableCrashHandler`, `didLastSessionCrash`) are no-ops. Crash reporting is provided by [Backtrace (Sauce Labs Error Reporting)](/error-reporting/platform-integrations/android/setup/). If you run both SDKs, initialize Backtrace first and follow [Using Sauce Mobile Beta with Backtrace](/testfairy/sdk/backtrace-coexistence/).
:::

## Requirements

- Android API level 16 or later. When you also ship Backtrace, use Backtrace's minimum (`minSdk 21`).
- Gradle with access to `https://maven.testfairy.com`. The SDK is not served from Maven Central or jcenter.

## Installation

### 1. Add the Maven Repository

Add `https://maven.testfairy.com` to `settings.gradle` (projects created with recent versions of Android Studio). The `content` filter is optional. It tells Gradle to look up only the `com.saucelabs.mobilebeta` group in this repository.

<Tabs
groupId="gradle"
defaultValue="groovy"
values={[
{label: 'Groovy DSL', value: 'groovy'},
{label: 'Kotlin DSL', value: 'kotlin'},
]}>

<TabItem value="groovy">

```groovy
// settings.gradle
dependencyResolutionManagement {
    repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)
    repositories {
        google()
        mavenCentral()
        maven {
            url 'https://maven.testfairy.com'
            content { includeGroup 'com.saucelabs.mobilebeta' }
        }
    }
}
```

</TabItem>

<TabItem value="kotlin">

```kotlin
// settings.gradle.kts
dependencyResolutionManagement {
    repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)
    repositories {
        google()
        mavenCentral()
        maven {
            url = uri("https://maven.testfairy.com")
            content { includeGroup("com.saucelabs.mobilebeta") }
        }
    }
}
```

</TabItem>

</Tabs>

If your project still declares repositories in the root `build.gradle` instead of `settings.gradle`, add the repository there:

```groovy
// PROJECT_ROOT/build.gradle
allprojects {
    repositories {
        google()
        mavenCentral()
        maven { url 'https://maven.testfairy.com' }
    }
}
```

### 2. Add the Dependency

Add the SDK to your app module's `build.gradle` (for example `app/build.gradle`). Pin the exact version. See [Upgrading](#upgrading).

<Tabs
groupId="gradle"
defaultValue="groovy"
values={[
{label: 'Groovy DSL', value: 'groovy'},
{label: 'Kotlin DSL', value: 'kotlin'},
]}>

<TabItem value="groovy">

```groovy
dependencies {
    implementation "com.saucelabs.mobilebeta:sauce-mobile-beta-android:2.2.0-rc"
}
```

</TabItem>

<TabItem value="kotlin">

```kotlin
dependencies {
    implementation("com.saucelabs.mobilebeta:sauce-mobile-beta-android:2.2.0-rc")
}
```

</TabItem>

</Tabs>

The SDK provides beta-testing capabilities: session recording, tester feedback, remote logs and update prompts. Prefer a beta or debug-only dependency, such as `debugImplementation` or a `betaImplementation` flavor configuration, so that store builds do not ship it. See [Sauce Mobile Beta SDK in Production](/testfairy/sdk/tf-production/).

:::caution Remove the legacy TestFairy SDK 1.x first
Remove `com.testfairy:testfairy-android-sdk` and `com.testfairy:testfairy-android-ndk` from every module before adding Sauce Mobile Beta, and never mix them. Both families contain the same `com.testfairy` classes, so mixing them fails the build with duplicate classes, and the legacy artifacts install a crash handler that competes with Backtrace. See [Migrating from the Legacy TestFairy SDK 1.x](#migrating-from-the-legacy-testfairy-sdk-1x).
:::

### 3. Initialize the SDK

Initialize the SDK in the `onCreate` method of an `Application` subclass with `beginWithoutCrashHandler`. Replace `<sauce-mobile-beta-token>` with the app token from your Sauce Labs Mobile App Distribution dashboard.

<Tabs
groupId="lang"
defaultValue="java"
values={[
{label: 'Java', value: 'java'},
{label: 'Kotlin', value: 'kotlin'},
]}>

<TabItem value="java">

```java
import android.app.Application;
import com.testfairy.TestFairy;

public class MyApplication extends Application {

    @Override
    public void onCreate() {
        super.onCreate();
        // If you use Backtrace, initialize it before this line.
        TestFairy.beginWithoutCrashHandler(this, "<sauce-mobile-beta-token>");
    }
}
```

</TabItem>

<TabItem value="kotlin">

```kotlin
import android.app.Application
import com.testfairy.TestFairy

class MyApplication : Application() {

    override fun onCreate() {
        super.onCreate()
        // If you use Backtrace, initialize it before this line.
        TestFairy.beginWithoutCrashHandler(this, "<sauce-mobile-beta-token>")
    }
}
```

</TabItem>

</Tabs>

Register the class in `AndroidManifest.xml`:

```xml
<application
    android:name=".MyApplication"
    ...>
</application>
```

`beginWithoutCrashHandler` is the recommended entry point: it makes crash ownership explicit and forces the `enableCrashReporter` option to `false`, even if you pass `true` through the options overload `beginWithoutCrashHandler(context, appToken, options)`. The plain `begin(...)` overloads still work and are equally crashless in this artifact.

If you use Backtrace, initialize it first so that it is the only crash owner, then call `beginWithoutCrashHandler`. Both SDKs should carry the same `sauce.correlation_id` session attribute. The order, the shared attributes and a complete `Application` example are in [Using Sauce Mobile Beta with Backtrace](/testfairy/sdk/backtrace-coexistence/).

## ProGuard and R8 (Optional)

The AAR bundles its consumer ProGuard rules, so Gradle applies them to your app automatically when minification is enabled. You do not need to add rules for the SDK. If your `proguard-rules.pro` still contains the rules from the legacy TestFairy SDK 1.x, keeping them is harmless:

```text
-keep class com.testfairy.** { *; }
-dontwarn com.testfairy.**
-keepattributes Exceptions, Signature, LineNumberTable
-dontusemixedcaseclassnames
```

## Upgrading

Always pin an exact version, such as `2.2.0-rc`, and update it deliberately. Do not use version wildcards such as `2.+`: they resolve unpredictably for pre-release versions and can pull in a build you have not tested.

`2.2.0-rc` is a release candidate. The general availability release uses the same coordinates with a plain version number. To upgrade, change the version string in `build.gradle` and rebuild. `2.2.0-rc` is served from `https://maven.testfairy.com` under the coordinate `com.saucelabs.mobilebeta:sauce-mobile-beta-android:2.2.0-rc`.

## Migrating from the Legacy TestFairy SDK 1.x

The Sauce Mobile Beta artifact is the crashless successor of the TestFairy Android SDK (`com.testfairy:testfairy-android-sdk`). The Maven coordinate changes. The Java package and the `TestFairy` API do not.

### 1. Remove the Legacy Artifacts

Remove every TestFairy dependency, including the NDK artifact and any transitive copy pulled in by another module:

```groovy
// Remove these lines.
implementation 'com.testfairy:testfairy-android-sdk:1.+@aar'
implementation 'com.testfairy:testfairy-android-ndk:1.+@aar'
```

Do not keep legacy and Sauce Mobile Beta artifacts together: they contain duplicate `com.testfairy` classes.

### 2. Add Sauce Mobile Beta

Make sure `https://maven.testfairy.com` is in your repositories, then add the new coordinate as shown in [Installation](#installation). Your imports stay the same:

```java
import com.testfairy.TestFairy;
```

### 3. Move Crash Ownership to Backtrace

Add Backtrace by following the [Backtrace Android setup](/error-reporting/platform-integrations/android/setup/) (and the [native crash integration](/error-reporting/platform-integrations/android/native-crash-integration/) for NDK crashes), and remove the TestFairy crash-handler calls from your code:

```java
// Remove or stop relying on these legacy calls. They are no-ops in Sauce Mobile Beta.
TestFairy.enableCrashHandler();
TestFairy.installCrashHandler(context, appToken);
TestFairy.didLastSessionCrash(context); // always returns false
```

Use the Backtrace console for current and previous crashes.

### 4. Update the Initialization

Existing `TestFairy.begin(...)` code remains source compatible and crashless. Prefer the explicit call in new or touched code:

```java
TestFairy.beginWithoutCrashHandler(getApplicationContext(), "<sauce-mobile-beta-token>");
```

### 5. Add the Correlation Attributes

Generate one lowercase UUID v4 per app launch before either SDK starts and give it to both SDKs as the `sauce.correlation_id` attribute, together with the other reserved attributes. Use `TestFairy.addSessionStateListener` to copy the Sauce Mobile Beta session URL into Backtrace on every session start. See [Using Sauce Mobile Beta with Backtrace](/testfairy/sdk/backtrace-coexistence/) and [Reserved Attributes for Backtrace Coexistence](/testfairy/sdk/session-attributes/#reserved-attributes-for-backtrace-coexistence).

Do not use the deprecated `setCorrelationId` or `identify` methods for the correlation id: they write the user-identity field that `setUserId` writes. See [Identifying Your Users](/testfairy/sdk/identifying-users/).

### 6. Review the Minimum Android Version

Sauce Mobile Beta alone supports API level 16. Backtrace Android requires API level 21, so an app that ships both must set `minSdk 21`.

### 7. Gate Production and Store Variants

Keep Backtrace under `implementation` and Sauce Mobile Beta under `debugImplementation` or a beta flavor configuration, so that Play Store builds never contain tester-facing update, recording or feedback code. See [Sauce Mobile Beta SDK in Production](/testfairy/sdk/tf-production/).

### 8. Validate Before Release

1. Inspect the runtime dependency graph for legacy modules: `./gradlew :app:dependencies --configuration debugRuntimeClasspath | grep testfairy` must list nothing from the `com.testfairy` group.
2. Build and run a debug build with both SDKs initialized.
3. Force one crash (and one native crash if you enabled the native integration): both must appear in Backtrace only.
4. Submit feedback and confirm that the shared `sauce.correlation_id` appears in both consoles.

## How to Identify Users (Optional)

The following example identifies users by email address.

```java
TestFairy.setUserId("john@example.com");
```

Read [Identifying Your Users](/testfairy/sdk/identifying-users/) for more identification options.

## Additional Permissions (Optional)

The SDK can record additional insights that require specific permissions. Below is a list of permissions required for each metric:

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

## Troubleshooting

The SDK is served from `maven.testfairy.com`, not jcenter. If Gradle reports a `Could not GET` error for a `jcenter.bintray.com` URL, or `Could not find com.saucelabs.mobilebeta:sauce-mobile-beta-android:2.2.0-rc`, add the repository as described in [step 1](#1-add-the-maven-repository) of the installation section.

If the build fails with a `Duplicate class` error for `com.testfairy` classes, a legacy TestFairy artifact is still on the classpath, possibly as a transitive dependency of another module. Remove it. See [Migrating from the Legacy TestFairy SDK 1.x](#migrating-from-the-legacy-testfairy-sdk-1x).
