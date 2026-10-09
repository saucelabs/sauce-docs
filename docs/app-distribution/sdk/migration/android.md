---
id: android
title: Migrating an Android App from the TestFairy SDK
sidebar_label: Android
description: Move an Android app from the TestFairy SDK 1.x to the Sauce Mobile Beta SDK.
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

Follow these steps to move an Android app from the TestFairy SDK 1.x to the Sauce Mobile Beta SDK 2.2.0-rc. Read [Migrating from the TestFairy SDK](/app-distribution/sdk/migration/overview) first for what changes and why. For the full install reference of the new SDK, see [Integrating the Android SDK](/app-distribution/sdk/android/integrating-android).

The Maven coordinate changes. The Java package `com.testfairy` and the `TestFairy` API do not, so `import com.testfairy.TestFairy;` and your `TestFairy.*` calls keep compiling. Both Java and Kotlin apps are supported.

:::caution Order matters
Remove `com.testfairy:testfairy-android-sdk` and `com.testfairy:testfairy-android-ndk` from every module before you add the Sauce Mobile Beta artifact. Both families contain the same `com.testfairy` classes, so a build that contains both fails with `Duplicate class` errors. Never run the TestFairy SDK 1.x beside Backtrace (Sauce Labs Error Reporting) either: both install crash handlers, and a process has one owner of its signal and exception handlers.
:::

## 1. Remove the TestFairy SDK Artifacts

Remove every TestFairy SDK 1.x dependency from every module's `build.gradle` (or `build.gradle.kts`), including the NDK artifact. Check library modules too: a transitive copy pulled in by another module also fails the build.

```groovy
// Remove these lines from every module.
implementation 'com.testfairy:testfairy-android-sdk:1.+@aar'
implementation 'com.testfairy:testfairy-android-ndk:1.+@aar'
```

If the project declared `https://maven.testfairy.com` only for the TestFairy SDK 1.x, keep the repository. The Sauce Mobile Beta artifact is served from it as well. If the declaration has a `content { includeGroup 'com.testfairy' }` filter, change the group to `com.saucelabs.mobilebeta` as shown in step 2, or Gradle will not look up the new artifact there.

**Verify.** The following command prints nothing from the `com.testfairy` group:

```bash
./gradlew :app:dependencies --configuration debugRuntimeClasspath | grep testfairy
```

Repeat it for every module that declared the dependency.

## 2. Add the Sauce Mobile Beta Artifact

The Sauce Mobile Beta SDK for Android is `com.saucelabs.mobilebeta:sauce-mobile-beta-android`, served from `https://maven.testfairy.com`. It is not on Maven Central or jcenter. It supports API level 16 or later on its own, and API level 21 or later with Backtrace (see step 4).

Make sure the repository is declared in `settings.gradle` (or in the root `build.gradle` for older project layouts). The `content` filter is optional and limits the repository to the `com.saucelabs.mobilebeta` group:

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

Then add the dependency to your app module. Pin the exact version. Do not use version wildcards such as `2.+`: they resolve unpredictably for pre-release versions.

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

Prefer `debugImplementation` or a beta flavor configuration such as `betaImplementation`, so that store builds do not ship the SDK while Backtrace stays under `implementation`. See [Sauce Mobile Beta SDK in Production](/app-distribution/sdk/tf-production).

Your imports stay the same:

```java
import com.testfairy.TestFairy;
```

**Verify.** Gradle sync succeeds and the dependency graph lists `com.saucelabs.mobilebeta:sauce-mobile-beta-android:2.2.0-rc`:

```bash
./gradlew :app:dependencies --configuration debugRuntimeClasspath | grep mobilebeta
```

## 3. Update the Initialization

Replace `begin` with `beginWithoutCrashHandler` in the `onCreate` method of your `Application` subclass. It starts a session, never installs a crash handler, and forces the `enableCrashReporter` option to `false` even if you pass `true` through the options overload `beginWithoutCrashHandler(context, appToken, options)`. Replace `<sauce-mobile-beta-token>` with the app token from your Sauce Labs Mobile App Distribution dashboard.

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
        // Before:
        // TestFairy.begin(this, "<app-token>");

        // After. Initialize Backtrace before this line when it is part of the app.
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
        // Before:
        // TestFairy.begin(this, "<app-token>")

        // After. Initialize Backtrace before this line when it is part of the app.
        TestFairy.beginWithoutCrashHandler(this, "<sauce-mobile-beta-token>")
    }
}
```

</TabItem>

</Tabs>

The `Application` class stays registered in `AndroidManifest.xml` as before. If you pass an options map, remove the `enableCrashReporter` key. The SDK forces it to `false` anyway.

**Verify.** Build and run a debug build. A new session for the build appears in your Sauce Labs Mobile App Distribution dashboard.

## 4. Delete the Crash Handler Calls and Set Up Backtrace

The crash entry points still exist in the API, but they do nothing in the Sauce Mobile Beta SDK. Delete these calls from your code:

```java
// Delete these calls. They are no-ops in the Sauce Mobile Beta SDK.
TestFairy.enableCrashHandler();
TestFairy.disableCrashHandler();
TestFairy.installCrashHandler(context, "<app-token>"); // does not start a session
TestFairy.didLastSessionCrash(context);                // always returns false
```

If your app used `installCrashHandler` on its own, as a crash handler without a session, that use case is now covered by Backtrace alone. Any code built on `didLastSessionCrash`, for example a "the app crashed last time" prompt, needs a Backtrace-based replacement or removal.

Crash reporting is provided by Backtrace. Add the Backtrace Android SDK by following [Setting Up Backtrace for Android](/error-reporting/platform-integrations/android/setup/), and initialize it before `beginWithoutCrashHandler` so that it is the only crash owner. For NDK crashes, also follow [Native Crash Integration](/error-reporting/platform-integrations/android/native-crash-integration/), which takes over the role of the `testfairy-android-ndk` artifact you removed. New to Backtrace? Start with [Getting Started](/error-reporting/getting-started/).

Two requirements come with Backtrace:

- Use Backtrace Android SDK 3.7.14 or later. That release added `BacktraceClient.addAttribute`, which the correlation step uses to copy the session URL into Backtrace. On 3.7.13 or earlier, use `((BacktraceDatabase) client.database).addAttribute(key, value)` instead. See [Configuring Backtrace for Android](/error-reporting/platform-integrations/android/configuration/).
- Backtrace Android requires API level 21. The Sauce Mobile Beta SDK alone supports API level 16, so an app that ships both must set `minSdk 21`.

**Verify.** The following command prints nothing:

```bash
grep -rn "installCrashHandler\|enableCrashHandler\|disableCrashHandler\|didLastSessionCrash" --include="*.java" --include="*.kt" app/src
```

## 5. Review ProGuard, R8, and Symbol Uploads

The Sauce Mobile Beta AAR bundles its consumer ProGuard rules, so Gradle applies them automatically when minification is enabled. You do not need to add rules for the SDK. If your `proguard-rules.pro` still contains the rules from the TestFairy SDK 1.x, keeping them is harmless:

```text
-keep class com.testfairy.** { *; }
-dontwarn com.testfairy.**
-keepattributes Exceptions, Signature, LineNumberTable
-dontusemixedcaseclassnames
```

An app on the Sauce Mobile Beta SDK sends no crash reports to Sauce Labs Mobile App Distribution, so crash symbolication for it happens in Backtrace. Upload your ProGuard mapping files and native symbols to Backtrace: see [ProGuard Deobfuscation](/error-reporting/platform-integrations/android/proguard-deobfuscation/) for mapping files and [Upload Native Symbols](/error-reporting/platform-integrations/android/native-crash-integration/#upload-native-symbols) for NDK symbols.

**Verify.** A minified build runs, and a crash report in Backtrace shows your class and method names.

## 6. Add the Correlation Attributes

To match a Backtrace crash report with the session recorded up to the crash, both SDKs must carry the same `sauce.correlation_id` attribute: one lowercase UUID v4 generated per app launch before either SDK starts, together with the other reserved attributes. Use `TestFairy.addSessionStateListener` before `beginWithoutCrashHandler` to copy the session URL into Backtrace on every session start.

The contract is defined once, in [Using Sauce Mobile Beta with Backtrace](/app-distribution/sdk/backtrace-coexistence), which has the initialization order and a complete `Application` example in Kotlin, and [Reserved Attributes for Backtrace Coexistence](/app-distribution/sdk/session-attributes#reserved-attributes-for-backtrace-coexistence).

Do not use the deprecated `setCorrelationId` or `identify` methods for the correlation id. They write the user-identity field that `setUserId` writes, and on Android only the first call per session takes effect. See [Identifying Your Users](/app-distribution/sdk/identifying-users).

**Verify.** A session's attributes in Sauce Labs Mobile App Distribution show `sauce.correlation_id`, and a Backtrace report from the same launch shows the same value.

## 7. Validate Before Release

1. Inspect the runtime dependency graph of every module. `./gradlew :app:dependencies --configuration debugRuntimeClasspath | grep testfairy` must list nothing from the `com.testfairy` group.
2. A clean build succeeds. A `Duplicate class` error for `com.testfairy` classes means a TestFairy SDK 1.x artifact is still on the classpath, possibly as a transitive dependency of another module. Go back to step 1.
3. Run a debug build with both SDKs initialized and force one crash (and one native crash if you enabled the native integration). The process dies as a genuine crash. Relaunch the app: the crashes appear in Backtrace only, and the Sauce Mobile Beta SDK starts a new session.
4. Submit feedback from the app and confirm that the session shows `sauce.correlation_id` in its attributes, with the same value as the Backtrace report from that launch.
5. Confirm that release variants do not package the Sauce Mobile Beta SDK while Backtrace stays. See [Sauce Mobile Beta SDK in Production](/app-distribution/sdk/tf-production).

## Troubleshooting

**`Could not find com.saucelabs.mobilebeta:sauce-mobile-beta-android:2.2.0-rc`** or a `Could not GET` error for a `jcenter.bintray.com` URL. The SDK is served from `https://maven.testfairy.com`, not from jcenter or Maven Central. Add the repository as shown in step 2.

**`Duplicate class` errors for `com.testfairy` classes.** A TestFairy SDK 1.x artifact (`com.testfairy:testfairy-android-sdk` or `com.testfairy:testfairy-android-ndk`) is still on the classpath, possibly through another module. Run the dependency graph command from step 1 for every module and remove it.

**`minSdk` conflict after adding Backtrace.** Backtrace Android requires API level 21. Set `minSdk 21` for the combined app.

**`addAttribute` is not found on `BacktraceClient`.** You are on Backtrace Android SDK 3.7.13 or earlier. Upgrade to 3.7.14 or later, or use `((BacktraceDatabase) client.database).addAttribute(key, value)`.

**A crash shows up nowhere.** The Sauce Mobile Beta SDK does not report crashes. Make sure Backtrace is initialized before `beginWithoutCrashHandler` and that its submission URL is correct. See [Setting Up Backtrace for Android](/error-reporting/platform-integrations/android/setup/).

**`didLastSessionCrash` returns `false` after a crash.** The SDK returns `false` by design. Query Backtrace for crash history.
