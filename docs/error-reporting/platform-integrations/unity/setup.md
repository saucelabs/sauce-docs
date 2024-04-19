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

| Supported Platforms | Supported Systems                                                       |
| ------------------- | ----------------------------------------------------------------------- |
| Mobile              | Android, iOS                                                            |
| PC                  | Windows, MacOS\*                                                        |
| Web                 | WebGL\*                                                                 |
| Game Consoles       | PlayStation 4, PlayStation 5, Xbox One, Xbox Series X, Nintendo Switch. |

:::note
Native Crashes on MacOS and WeBGL are not supported via backtrace-unity.
:::

:::note
Native Crashes on PlayStation and Nintendo Switch are captured via Backtrace Data Sources, which connect to the vendor provided crash reporting server. Native Crashes on Xbox can be captured by installing an additional dynamic link library (DLL) for Backtrace-Unity. Reach out to your Xbox partner manager to verify developer status with Sauce Labs Backtrace.
:::

:::note
Offline database capabilities are currently not supported for Nintendo Switch.
:::

:::note
The iOS SDK contains a privacy manifest to declare the types of data accessed on the device. Please refer to this [source document](https://github.com/backtrace-labs/backtrace-unity/blob/master/iOS/PrivacyInfo.xcprivacy) for the specific types of data collected by the SDK.
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

- Unity Editor version 2018.4 or higher

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

At this point, you've installed and setup the Backtrace client to automatically capture crashes and exceptions in your Unity game or app.

To test the integration, use a try/catch block to throw an exception and start sending reports.

```csharp
 //Read from manager BacktraceClient instance
var backtraceClient = GameObject.Find("manager name").GetComponent<BacktraceClient>();

//Set custom client attribute
backtraceClient["attribute"] = "attribute value";

 //Read from manager BacktraceClient instance
var database = GameObject.Find("manager name").GetComponent<BacktraceDatabase>();


try{
    //throw exception here
}
catch(Exception exception){
    var report = new BacktraceReport(exception);
    backtraceClient.Send(report);
}
```
