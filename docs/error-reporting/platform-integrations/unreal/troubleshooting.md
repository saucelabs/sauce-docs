---
id: troubleshooting
title: Troubleshooting
sidebar_label: Troubleshooting
description: Troubleshooting reference for Unreal Engine crash reports.
---

## How can I troubleshoot failures in crash reporting?

Please refer to your crash reporting client logs.

Make sure the `DefaultEngine.ini` (for crashes in packaged builds) and `UserEngine.ini` files (for crashes within the editor) have the correct settings. For more information, see [Initialize the Backtrace Client](/error-reporting/platform-integrations/unreal/setup/#initialize-the-backtrace-client).

### Cooked Builds

When [creating cooked](https://docs.unrealengine.com/4.27/en-US/SharingAndReleasing/Deployment/Cooking/) builds, the contents of `[ENGINE_DIR]\Engine\Programs\CrashReportClient\Config\DefaultEngine.ini` gets included as `Engine\Programs\CrashReportClient\Config\DefaultEngine.ini` in the cooked build's path.

Even though the `CrashReportClient.ini` files generated in the Saved directory have the Backtrace URL, they appear to be using the file from the Unreal Base directory instead.

When you replace the contents of the `CrashReportClient.ini` file with the Backtrace version, the reporter works as expected.

:::tip
You can use networking tools like [tcpdump](https://www.tcpdump.org/) or [FiddlerEverywhere](https://www.telerik.com/download/fiddler-everywhere) to verify that the CrashReporter is submitting to the correct host.
:::
