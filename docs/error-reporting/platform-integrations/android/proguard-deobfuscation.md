---
id: proguard-deobfuscation
title: Working with ProGuard/R8
sidebar_label: ProGuard/R8 Deobfuscation
description: Configure Backtrace to deobfuscate your crashing callstacks.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

If your app is obfuscated, you can configure Backtrace to deobfuscate your crashing callstacks.

:::note ProGuard or R8
Modern Android builds obfuscate with **R8**, not ProGuard. The Android Gradle Plugin removed
ProGuard support in AGP 7.0, and `minifyEnabled true` has meant R8 ever since.

This page applies to both. R8 emits a `mapping.txt` in the ProGuard mapping format, and Backtrace's
`/proguard` endpoint accepts it as-is. Wherever this page says "ProGuard mapping file", an R8
`mapping.txt` works identically.
:::

## What You'll Need

- A Backtrace account ([log in](https://backtrace.io/login) or sign up for a [free trial license](https://backtrace.io/sign-up)).
- Your subdomain name (used to connect to your Backtrace instance). For example, `https://example-subdomain.sp.backtrace.io`.
- A Backtrace project and an [access token](/error-reporting/project-setup/submission-url).

## How it works

A mapping file contains no information about which build produced it. Backtrace therefore pairs a
crash with a mapping file using a `symbolication_id` that **you** choose: set it as an attribute on
submitted reports, and pass the same value when you upload the mapping file. If the two match, the
callstack is deobfuscated.

This means the two steps must stay in sync. A mapping uploaded under one id will never deobfuscate a
report that carries a different one.

## Setup

### 1. Check your ProGuard rules

If you use the `backtrace-android` SDK, **you do not need to add any keep rules for it**. The AAR
ships its own consumer rules and Gradle applies them to your app automatically.

<details>
<summary>Verifying that the SDK rules were applied</summary>

After a minified build, the merged configuration lists every rule actually in effect:

```bash
grep "keep class backtraceio" app/build/outputs/mapping/release/configuration.txt
```

You should see the SDK's own keeps, even with an empty `proguard-rules.pro`:

```
-keep class backtraceio.library.** { *; }
-keep class backtraceio.gson.** { *; }
```

</details>

:::caution Older guidance
Earlier versions of this page suggested adding these rules by hand:

```
-keep class com.google.gson.**.* { *; }
-keep class backtraceio.library.**.* { *; }
```

Both are unnecessary with current releases, and the first no longer matches anything: the SDK
shades Gson into `backtraceio.gson`, so a rule naming `com.google.gson` keeps nothing. Remove these
lines if you copied them from an older guide.
:::

You are still responsible for keep rules covering **your own** code. Anything resolved by name at
runtime rather than by a reference the shrinker can follow:

```proguard
# Methods named in layout XML via android:onClick
-keepclassmembers class * extends android.app.Activity {
    public void *(android.view.View);
}

# Classes whose names are embedded in JNI symbols (Java_com_example_MyClass_method)
-keepclasseswithmembernames,includedescriptorclasses class * {
    native <methods>;
}
```

### 2. Enable ProGuard mode in the `BacktraceClient`

This marks submitted callstacks as obfuscated so the backend knows to deobfuscate them.

```java
backtraceClient.enableProguard();
```

:::tip Only enable this for obfuscated builds
AGP never obfuscates a `debuggable` variant. Setting `minifyEnabled true` on `debug` shrinks code
but does not rename it. Enabling ProGuard mode there asks the backend to deobfuscate symbols that
were never obfuscated. Gate it on the build type:

```java
if (!BuildConfig.DEBUG) {
    backtraceClient.enableProguard();
}
```

:::

### 3. Set the `symbolication_id` attribute

Generate a UUID for the build and attach it to your reports. You will upload the mapping file with
this same UUID in the next step.

```java
final Map<String, Object> attributes = new HashMap<String, Object>() {{
  put("symbolication_id", BuildConfig.BACKTRACE_SYMBOLICATION_ID);
}};
```

Hardcoding a literal UUID works, but it is easy to forget to change it. A stale id silently
pairs new crashes with an old mapping file. Deriving the value in your build script keeps the app
and the upload in agreement automatically.

<details>
<summary>Generating a UUID</summary>

**A fixed UUID per release.** Derive it from the version name so it is reproducible:

```bash
$ python3 -c "import uuid; print(uuid.uuid5(uuid.UUID('f615d933-702b-5c5f-913d-18223dc80788'), '1.0.0'))"
5a4d2886-fb5d-5d2e-a0d8-4bcdf5f5c11b
```

On Linux, `uuidgen` can do the same thing:

```bash
$ uuidgen -N '1.0.0' --namespace "f615d933-702b-5c5f-913d-18223dc80788" --sha1
```

The `--namespace`/`--sha1` options come from util-linux and are **not** available in the `uuidgen`
shipped with macOS, so prefer the Python form in scripts that run on both.

Pass it into `BuildConfig` from `build.gradle`:

```groovy
android {
    defaultConfig {
        buildConfigField "String", "BACKTRACE_SYMBOLICATION_ID",
                "\"${project.findProperty('symbolicationId') ?: '5a4d2886-fb5d-5d2e-80d8-4bcdf5f5c11b'}\""
    }
}
```

</details>

### 4. Upload the mapping file

A minified build writes the mapping file to:

```
app/build/outputs/mapping/<variant>/mapping.txt
```

Upload it with the UUID from the previous step:

```bash
curl --data-binary @app/build/outputs/mapping/release/mapping.txt \
  -X POST -H "Expect:" \
  "https://submit.backtrace.io/{your-subdomain}/{symbol-access-token}/proguard?symbolication_id={symbolication_id}"
```

:::danger Do not omit the `@`
The `@` tells cURL to send the _contents_ of the file. Without it, cURL sends the file **path** as a
few dozen bytes of text and the request still returns success, so the mistake is easy to miss.
Verify the upload size matches the file:

```bash
$ ls -l app/build/outputs/mapping/release/mapping.txt
-rw-r--r--  1 user  staff  3554880 ...
```

:::note for Windows
Make sure your ProGuard mapping file has Unix line endings before submitting to Backtrace.
:::

## Verifying the setup

Trigger a handled exception from an obfuscated build and open the report in Backtrace.

**Check the attribute first.** The report's `symbolication_id` must match the id you uploaded the
mapping under. If it does not, nothing else will work.

**Check that the build really was obfuscated.** A report from a `debuggable` build is never
obfuscated, no matter how the shrinker is configured. Two tells:

- `build.type` reads `Debug`
- the `file-name` in stack frames is a real source name such as `MainActivity.java`

In an obfuscated R8 build, `file-name` is a synthetic identifier such as
`r8-map-id-377d2a68c45bb…` instead. That identifier is also how you tell which mapping file a given
report needs.

### Deobfuscating locally

You do not need to upload anything to check that a mapping file is correct. The `retrace` tool ships
with the Android SDK:

```bash
$ANDROID_HOME/cmdline-tools/latest/bin/retrace mapping.txt obfuscated-trace.txt
```

A correct mapping expands inlined frames back to their original names and line numbers:

```
# before
at com.example.MainActivity.handledException(r8-map-id-377d2a68c45bb…:30)

# after
at com.example.MainActivity.equipItem(MainActivity.java:154)
at com.example.MainActivity.handledException(MainActivity.java:165)
```

## Troubleshooting

| Symptom | Cause |
| --- | --- |
| Callstacks stay obfuscated | The report's `symbolication_id` does not match any uploaded mapping. Compare the attribute on the report against the id used at upload. |
| Upload returns success but nothing deobfuscates | The `@` was omitted from `--data-binary`, so only the file path was uploaded. |
| Callstacks were never obfuscated | The report came from a `debuggable` build. Check `build.type` on the report. |
| Names resolve but line numbers are wrong | The uploaded mapping came from a different build than the installed app. Archive `mapping.txt` alongside each release; it is overwritten on every build. |
| `symbolication_id` missing from reports | `enableProguard()` was not called, or the attribute was not set before the client was constructed. |

:::caution Archive every mapping file
`mapping.txt` is overwritten by the next build. Once lost, reports from that build can no longer be
deobfuscated. Archive it with each release you ship.
:::
