---
id: setup
title: Setting Up Backtrace for Unity
sidebar_label: Setup
description: Add Backtrace to your Unity project.
---

Add Backtrace to your Unity project to automatically detect and report errors and crashes that occur in your game.

After you've completed the steps on this page, the Backtrace client will be installed and setup with the default configuration settings.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## Features

The Backtrace Unity SDK reports on the following types of errors:

- Log errors - Error messages in the console log. Logged by Debug.LogError (a variant of Debug.Log).
- Unhandled Exceptions - Exceptions that occur outside of an explicit try/catch statement.
- Handled exceptions - Exceptions that are explicitly caught and handled.
- Crashes - An end to the game play experience, where the game crashes or restarts.
- Hangs (mobile only) - Errors that occur when a game or an app is non-responsive.
- Out of memory crashes (mobile only) - Terminations of your game or app due to low memory conditions.
- Message reports - Error messages explicitly sent by the Backtrace client.

## Supported Platforms

| Supported Platforms | Supported Systems                                                                     |
| ------------------- | ------------------------------------------------------------------------------------- |
| Mobile              | Android, iOS                                                                          |
| PC                  | Windows, MacOS*                                                                       |
| Web                 | WebGL*                                                                                |
| Game Consoles       | PlayStation 4, PlayStation 5, Xbox One, Xbox Series X, Nintendo Switch.               |

:::note
Native Crashes on WebGL are not supported via backtrace-unity.
:::

:::note
Native Crashes on PlayStation and Nintendo Switch are captured via Backtrace Data Sources, which connect to the vendor provided crash reporting server. Native Crashes on Xbox can be captured by installing an additional dynamic link library (DLL) for Backtrace-Unity. Reach out to your Xbox partner manager to verify developer status with Sauce Labs Backtrace.
:::

:::note
Offline database capabilities are currently not supported for Nintendo Switch.
:::

:::note
The Apple native integrations include privacy manifests and third-party notices. On iOS, the SDK adds the PLCrashReporter privacy declarations and notices to a separate resource bundle during Xcode export without replacing your application's privacy manifest. Review the SDK's bundled declarations alongside your application's privacy requirements.
:::

## What You'll Need

- A Backtrace account ([log in](https://backtrace.io/login) or sign up for a [free trial license](https://backtrace.io/sign-up)).
- Your subdomain name (used to connect to your Backtrace instance). For example, `https://example-subdomain.sp.backtrace.io`.
- A Backtrace project and a submission token.

<!-- prettier-ignore -->
:::tip Generate a Submission Token

1. In the Backtrace Console, go to **Project settings > Error submission > Submission tokens**.
1. Select **+**.
:::

### System Requirements

- Unity Editor version 2021.3 or higher

#### Native Platform Requirements

For SDK 3.17.0 and later, the bundled native integrations have these requirements:

| Platform | Minimum OS Version | Supported Native Architectures |
| --- | --- | --- |
| macOS | macOS 12.0 | Apple silicon (`arm64`) and Intel (`x86_64`) |
| iOS | iOS 15.0 | ARM64 devices; ARM64 and x86_64 Simulators |
| Android | Android API level 21 | `arm64-v8a`, `armeabi-v7a`, and `x86_64` |

Android 32-bit `x86` can use managed reporting but not native capture. Android library selection follows the architecture of the running application process, not every architecture supported by the device.

For iOS, set **Player Settings > iOS > Target minimum iOS Version** to **15.0 or newer** before exporting. The SDK's postprocessor enforces this minimum even when native capture is disabled, rather than changing the application's deployment target. The requirements apply to the frameworks bundled with the Unity SDK, not the separate Cocoa source package.

:::caution Upgrading macOS Native Reporting

Reports left in the legacy shared crash cache are not migrated automatically. If you need to recover those reports, preserve their payloads and metadata and contact support before launching the upgraded player. See [Legacy Mac Reports](/error-reporting/platform-integrations/unity/troubleshooting/#legacy-mac-reports).

:::

### Player Configuration Settings

Backtrace supports the following player configuration settings for Unity:

- Scripting Backend: Mono or IL2CPP
- API Compatibility Level: .NET 4.0 or .NET Standard 2.0

## Install the Backtrace Unity SDK

The following methods are available to install the Backtrace Unity SDK.

<Tabs
defaultValue="openupm"
values={[
{label: 'OpenUPM', value: 'openupm'},
{label: 'Unity Package Manager', value: 'unity'},
{label: 'Git', value: 'git'},
]}>

<TabItem value="openupm">

```
# Install openupm-cli
npm install -g openupm-cli

# Go to your Unity project directory
cd YOUR_UNITY_PROJECT_DIR

# Install the latest io.backtrace.unity package
openupm add io.backtrace.unity
```

For more information, see the installation steps on [OpenUPM](https://openupm.com/packages/io.backtrace.unity/).

</TabItem>
<TabItem value="unity">

1. Download the latest version of the Backtrace Unity SDK from [GitHub](https://github.com/backtrace-labs/backtrace-unity/releases).
1. Unzip the package and save it locally.
1. In your Unity project, go to **Window > Package Manager**.
1. Complete the steps in [Installing a package from a local folder](https://docs.unity3d.com/Manual/upm-ui-local.html) in the Unity Documentation.

</TabItem>
<TabItem value="git">

1. Clone the source project’s [Git URL](https://github.com/backtrace-labs/backtrace-unity.git).
1. In your Unity project, go to **Window > Package Manager**.
1. Complete the steps in [Installing from a Git URL](https://docs.unity3d.com/Manual/upm-ui-giturl.html) in the Unity Documentation.

> This installation method is supported for Unity 2018.3 or higher.

</TabItem>
</Tabs>

## Initialize the Backtrace Client with GameObject

In this step, you create the Backtrace Configuration asset, create a new GameObject, add the Backtrace Client component to the GameObject, then add the Backtrace Configuration to the Backtrace Client component.

You can add the Backtrace Client component to any GameObject in your game scene.

:::tip
Typically, the Backtrace Client component is added to a global GameManager or GameController object, given a descriptive name, and assigned a tag to identify it for scripting purposes.
:::

1. In your Unity project, go to **Assets > Backtrace > Configuration**.
1. Go to **GameObject > Create Empty**.
1. Enter a descriptive name for the new GameObject.
1. In the Inspector, select **Add Component**.
1. Search for “Backtrace”, then select **Backtrace Client**.
1. From the **Assets** folder, drag the Backtrace Configuration file to the Backtrace configuration field.

Additional fields now display for the Backtrace client configuration and database configuration options.

To change Backtrace client and database options, we recommend to change these values in the Unity UI via Backtrace Configuration file. Alternatively, you can also make changes to the configuration in the C# code for your Unity project.

For more information about the available configuration options, see [Configuration](/error-reporting/platform-integrations/unity/configuration).

## Configure the Server Address

The server address is required to submit exceptions from your Unity project to your Backtrace instance.

1. In the Backtrace Console, go to **Project Settings > Integration Guides > Unity**.
1. Copy the server address.
1. Go back to the Backtrace Configuration in your Unity project.
1. In the **Server Address** field, enter the server address in the following format: `https://submit.backtrace.io/{subdomain}/{submission-token}/json`.
   - Provide the name of your [subdomain and a submission token](/error-reporting/platform-integrations/unity/setup/#what-youll-need).

## Verify the Setup

First, verify managed reporting with a handled exception. This check does not exercise native crash capture or delivery after a restart.

```csharp
 //Read from manager BacktraceClient instance
var backtraceClient = GameObject.Find("manager name").GetComponent<BacktraceClient>();

//Set custom client attribute
backtraceClient["attribute"] = "attribute value";

 //Read from manager BacktraceClient instance
var database = GameObject.Find("manager name").GetComponent<BacktraceDatabase>();


try{
    throw new System.InvalidOperationException("Backtrace managed reporting test");
}
catch(Exception exception){
    var report = new BacktraceReport(exception);
    backtraceClient.Send(report);
}
```

### Verify Native Crash Reporting

Use a dedicated test build, not a production session. Native crash capture runs in the built player, not in the Unity Editor.

1. Enable **Capture native crashes** and check the [native platform requirements](#native-platform-requirements). On Android, also enable the Backtrace database and configure a writable database path.
1. Build and install the application with the native SDK files included. For Apple distribution testing, use the final signed application. Test iOS on a physical device as well as any Simulator checks.
1. Launch without an attached debugger, allow Backtrace to initialize, and trigger a deliberate native crash.
1. Relaunch the same application with Backtrace enabled and network access available. Allow time for asynchronous delivery.
1. Confirm the native report arrives in your Backtrace project. Check symbolication separately using symbols that match the exact build: application and native dSYMs on Apple platforms, or native debug symbols on Android.

A missing local crash file does not prove that the server received the report. Verify receipt in Backtrace. For an iOS upgrade test, preserve application data so you can also check delivery of a report captured before the upgrade. See [Troubleshooting](/error-reporting/platform-integrations/unity/troubleshooting/) if capture, delivery, or symbolication fails.

:::note
Unity WebGL has a specific set of platform limitations.
Please review the [Troubleshooting](/error-reporting/platform-integrations/unity/troubleshooting) page to understand how these constraints affect error reporting.
:::
