---
id: visual-studio
title: Visual Studio Extension Guide (C++ and Crashpad)
sidebar_label: Visual Studio Extension Guide
description: The Backtrace Extension for Visual Studio .
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

The Backtrace extension for Visual Studio simplifies the integration and configuration of Crashpad in your C++ based application, allowing you to capture and submit crashes to your Backtrace instance.

The extension installs a new item in the Project Menu (right-click on your project in the **Solution Explorer** to see **Add Crashpad support**). Selecting the menu item launches a wizard that allows the developer to download, configure, and integrate a supported Crashpad library into your application.

<img src={useBaseUrl('/img/error-reporting/vs-extension/5e601bc3cc2b5.png')} alt="Add crashpad support" width="450"/>

## What You'll Need

- A Backtrace account ([log in](https://backtrace.io/login) or sign up for a [free trial license](https://backtrace.io/sign-up)).
- Your subdomain name (used to connect to your Backtrace instance). For example, `https://example-subdomain.sp.backtrace.io`.
- A Backtrace project and a submission token.
- Visual Studio 2017 or 2019 (Preview) with the Visual Studio Extensions plugin and WPF.
- Windows (Win32 or x86_64) as the target build platform.

:::tip Generate a Submission Token

1. In the Backtrace Console, go to **Project settings > Error submission > Submission tokens**.
1. Select **+**.

:::

## Setup and Installation

1. Download the Backtrace Visual Studio Extension from the [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=Backtrace.VSPlugin2019-01-19).
2. Open the .vsix file either using Windows Explorer or the "Developer Command Prompt" along with the VSIXInstaller.exe file to install the extension.
3. Open a C++ project in Visual Studio.
4. Right-click on the project in the Solution Explorer to open the project menu. You see the new **Add Crashpad support** menu item.
5. Select the **Add Crashpad support** menu item to launch the wizard, which installs and configures the Crashpad library in the project.

## Wizard Overview

The wizard consists of three main steps:

**Step 1: Backtrace Server Information**

- Enter the URL of your Backtrace server and the submission token.
- The submission URL field provides an autocomplete feature based on the instance name you enter.
- The submission token field to allow crashes to be submitted to the Backtrace instance. This field requires that the provided string has exactly 64 characters. If you don't have a Backtrace instance, you can create one by following the provided link.
- Don't have an account?: This link will take the user to a web page where they can create a new Backtrace instance. Use this link if you don't already have a Backtrace instance provisioned for your project.
- Click **Next** to proceed to the next page.
  <img src={useBaseUrl('/img/error-reporting/vs-extension/5e601bc4c83c1.png')} alt="step 1: backtrace server information"/>

**Step 2: Download or Use Existing Crashpad Library**

- This step allows you to choose the versions of Crashpad you want to download (from the get.backtrace.io/crashpad/builds page) or specify the directory of an already downloaded library.
- Select the desired configuration and platform versions from the dropdown lists. Backtrace provides both Release and Debug configurations of Crashpad, and x64 & Win32 platforms.
- Use the **Download Crashpad** to connect to the `get.backtrace.io` servers and download the specified versions. Select the destination directory, and the wizard downloads the latest Crashpad binaries. If you specify multiple Configurations or Platforms to download, the wizard will download each.
- The **Backtrace Crashpad package directory** field is automatically filled if you use the **Download Crashpad**, but you can also provide a custom path by using the textbox or you can choose existing path by using **Browse**.
- Proceed to the next step after making the appropriate selections.
  <img src={useBaseUrl('/img/error-reporting/vs-extension/5e601bc5af052.png')} alt="step 2: setup the configuration and platform versions"/>
  <img src={useBaseUrl('/img/error-reporting/vs-extension/5e601bc6e64ba.png')} alt="downloading the library"/>

**Step 3: Automated Symbol Upload**

- In this final step, you can enable debug symbols upload after debug or release builds types.
- **Would you like to enable automated symbol upload for your project?** Tick this checkbox if you want the Wizard to configure post build steps to upload symbols to Backtrace after building your application.
- Check the "Enable automated symbol upload" field to configure post-build steps for uploading symbols to Backtrace.
- Select **Debug** and **Release** to configure Visual Studio to upload debug symbols as needed for different build types.
- If you are uploading symbols, you will need a **Symbol Upload Token**. This allows you to upload Symbols to Backtrace. This is a different token from your Submission token.
- Complete the wizard by clicking "Finish."
  <img src={useBaseUrl('/img/error-reporting/vs-extension/5e601bc7c676a.png')} alt="automated symbol upload"/>

## Wizard Completion Tasks

After finishing the wizard, the extension performs background tasks to configure your project properly. These tasks include creating and modifying files in your project:

<ul>
    <li>Add or replace the appropriate Crashpad libraries for your project.</li>
    <li>Update the settings for /MD and /MT.</li>
    <li>Add library paths, include paths, and libraries for the appropriate build configurations (x86_32, x64, debug, release).</li>
</ul>

You may see dialogs notifying you that files are being modified outside the Visual Studio environment. Choose **Reload All** as necessary.
<img src={useBaseUrl('/img/error-reporting/vs-extension/5e601bc9156b3.png')} alt="Reload all button"/>

A dialog about inconsistent line endings may appear. It's recommended to normalize the line endings according to your environment.
<img src={useBaseUrl('/img/error-reporting/vs-extension/5e601bca1b4c4.png')} alt="inconsistent line endings dialog"/>

The Visual Studio Extension modifies the vcxproj file (project definition file) to add Crashpad to your project. You can further customize each option in **Project Properties**.

If you enable symbol upload, a post-build task is created. After each successful build, the extension sends the necessary files (.PDBs, .DLLs, .EXEs) as a zip archive to the Backtrace instance. You can disable this option in **Project Properties** under **Post-build** actions.

## Post Install Steps

After completing the wizard, make sure to open the CrashpadSetup.cpp file and specify the following values:

- **db_path**: Set the directory where crash reports should be locally stored before submitting to Backtrace.
- **handler_path**: Configure the launch mechanism for Crashpad (for example., out-of-process).

Additionally, initialize Crashpad and check the result with a function call like the following in your main function:

```cpp
bool result = backtrace::initializeCrashpad();
```

## FAQ

Q1: What happens if the user doesn't specify a `db_path` variable in the `CrashpadSetup.cpp`?<br/>
A1: The Crashpad initialization code returns `-1` (error), so Crashpad won't initialize.

Q2: What is `_rxid` in the build window?<br/>
A2: That is the result from a server when we upload archive with symbols.
