---
id: proguard-deobfuscation
title: Working with ProGuard
sidebar_label: ProGuard Deobfuscation
description: Configure Backtrace to deobfuscate your crashing callstacks.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

If you use ProGuard to optimize and obfuscate your app, you can configure Backtrace to deobfuscate your crashing callstacks.

## What You'll Need

- A Backtrace account ([log in](https://backtrace.io/login) or sign up for a [free trial license](https://backtrace.io/sign-up)).
- Your subdomain name (used to connect to your Backtrace instance). For example, `https://example-subdomain.sp.backtrace.io`.
- A Backtrace project and an [access token](/error-reporting/project-setup/submission-url).

## Setup

If the `symbolication_id` from the submitted crash matches a `symbolication_id` of a submitted ProGuard mapping file, the Backtrace Client will use that mapping file to deobfuscate the symbols from the submitted crash.

To do this, you need to upload the ProGuard mapping file corresponding to the build. Because the ProGuard file format does not offer any way to identify its corresponding build, it needs to be done by the programmer. For Backtrace, a UUID needs to be generated for each build.

1. Add the following to the `proguard_rules.pro` file for your app.

   ```
   -keep class com.google.gson.**.* { *; }
   -keep class backtraceio.library.**.* { *; }
   ```

1. Enable ProGuard mode in the `BacktraceClient`.

   ```java
   backtraceClient.enableProguard();
   ```

1. Generate a UUID and set it as the value for the `symbolication_id` attribute. You will upload your ProGuard mapping file with this same UUID later.

   ```java
   final UUID proguardMappingUUID = UUID.fromString("f6c3e8d4-8626-4051-94ec-53e6daccce25");
   final Map<String, Object> attributes = new HashMap<String, Object>() {{
     put("symbolication_id", proguardMappingUUID.toString());
   }};
   ```

  <details>
  <summary>Generating a UUID</summary>
  You can use the uuidgen command to generate UUID's for each version of your software, for example:
  ```
  $ uuidgen -N '1.0.0-beta' --namespace "f615d933-702b-5c5f-913d-18223dc80788" --sha1 6e5552ef-cca0-578f-8259-bef23a9566d3
  $ uuidgen -N '1.0.0' --namespace "f615d933-702b-5c5f-913d-18223dc80788" --sha1 5a4d2886-fb5d-5d2e-80d8-4bcdf5f5c11b
  $ uuidgen -N '1.0.1' --namespace "f615d933-702b-5c5f-913d-18223dc80788" --sha1 39642ed9-5a75-5186-9649-71a893e00340
  ```
  </details>

1. Upload your ProGuard `mapping.txt` file with the UUID from the previous step.

   To do so, you can use a tool like Postman or cURL to construct an HTTP POST request with the following parameters, and submit the mapping file as the request body.

   ```curl
   --data-binary @proguard-example/mapping.txt -X POST  -H "Expect:" "https://submit.backtrace.io/{your-subdomain}/{symbol-access-token}/proguard?symbolication_id={symbolication_id}"
   ```

:::note for Windows
Make sure your ProGuard mapping file has Unix line endings before submitting to Backtrace.
:::

You can now start sending ProGuard obfuscated crashes.
