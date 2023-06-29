---
id: setup
title: Visual Studio Extension Guide (C++ and Crashpad)
sidebar_label: Visual Studio Extension Guide
description: The Backtrace Extension for Visual Studio .
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

The Backtrace extension for Visual Studio simplifies the integration and configuration of Crashpad in your C++ based application, allowing you to capture and submit crashes to your Backtrace instance.

The extension installs a new item in the Project Menu (right-click on your project in the **Solution Explorer** to see **Add Crashpad support**). Selecting the menu item launches a wizard that allows the developer to download, configure, and integrate a supported Crashpad library into your application.

<img src={useBaseUrl('/img/error-reporting/vs-extension/5e601bc3cc2b5.png')} alt="Add crashpad support"/>

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

First asks for information about your Backtrace server so it knows where to configure submissions to.
Second, it allows you to choose which configuration of Crashpad you want to download and configure for your project.
Third, it allows you to specify when you want to upload symbols to your Backtrace server.
After completing the steps, the Wizard will perform the following:

Add or replace the appropriate Crashpad libraries for your project, update the settings for /MD and /MT, and add library paths, include paths, and libraries for the appropriate build configurations (x86_32, x64, debug, release).
Create a new source file (CrashpadSetup.cpp) in your project that includes appropriate submission URL and Token values specified by the user.
Configure post-build steps to upload appropriate symbol files (.pdb, .exe, and .dll, as needed) after debug and/or release builds.
After running the Wizard, the developer should review the CrashpadSetup.cpp file and make final adjustments as needed.

The developer will need to specify a directory to be used by the application to store and queue crash reports to be sent to Backtrace. This is performed by editing the value of db_path.
The developer may also want to set rate limiting parameters (by default, no rate limiting is enforced).  
The Wizard will have setup the proper submission URL, Token, and format for your Backtrace instance, but the developer can review and update as needed.
The developer will also need to initiate Crashpad with the appropriate function call (i.e. backtrace::init_crashpad() ), usually executed in the main() function)
Wizard Step 1 - Backtrace Server Information

The developer should enter the URL to their Backtrace server, and a submission token that they want the Crashpad library to use when submitting crashes.

<img src={useBaseUrl('/img/error-reporting/vs-extension/5e601bc4c83c1.png')} alt=""/>

Submission URL: The URL to the Backtrace instance. The user can start typing the instance name (for example "myCompany"), and the extension will guess the rest of the URL (for example "https://myCompany.sp.backtrace.io").
Submission Token: Submission token to allow crashes to be submitted to the Backtrace instance. This field requires that the provided string has exactly 64 characters. More information about where to find your submission token can be found in the docs.
Don't have an account?: This link will take the user to a web page where they can create a new Backtrace instance. Use this link if you don't already have a Backtrace instance provisioned for your project.
Click Next to go to the next page in the wizard.

Wizard Step 2 - Download or Use Existing Crashpad Library
The developer can use this screen to decide which versions of Crashpad they want to download (from the get.backtrace.io/crashpad/builds page). If the developer already has the Crashpad library downloaded and available on their hard drive, they can specify the directory on disk where the library is downloaded.

<img src={useBaseUrl('/img/error-reporting/vs-extension/5e601bc5af052.png')} alt=""/>

Select Configuration and Select Platform: These 2 dropdown fields allow the developer to choose which versions of Crashpad they want to integrate in their application. Backtrace provides both Release and Debug configurations of Crashpad, and x64 & Win32 platforms.
Download Crashpad button: This button will connect to the get.backtrace.io servers to download the specified Configurations and Platform Versions of Crashpad. The developer should select the destination directory, and the wizard will download the latest Crashpad binaries. If the user specified multiple Configurations or Platforms to download, the wizard will download each of those.
Backtrace Crashpad package directory: Path to directory with downloaded Crashpad binaries. If the user uses the Download Crashpad button, this field will be automatically filled in. If not, the user can type custom path by using textbox or can choose existing path by using Browse button.

<img src={useBaseUrl('/img/error-reporting/vs-extension/5e601bc6e64ba.png')} alt=""/>

Wizard Step 3 - Automated Symbol Upload
The final step of the wizard allows the developer to specify if they want debug symbols to be uploaded after debug or release build types.

<img src={useBaseUrl('/img/error-reporting/vs-extension/5e601bc7c676a.png')} alt=""/>

Would you like to enable automated symbol upload? Select this field if you want the Wizard to configure post build steps to upload symbols to Backtrace after building your application.
Debug and Release checkboxes: Select these checkboxes to configure Visual Studio to upload debug symbols as needed for different build types.
Symbol Upload Token: If you are uploading symbols, you will need a Symbol Upload Token. This allows you to upload Symbols to Backtrace. NOTE this is a different token from your Submission Token. Find more information about symbolication and symbol tokens in our docs here.
Wizard Completion Tasks
After finishing the Wizard, the extension will run a series background tasks to properly configure your project. These tasks include creating and editing files that will become part of your project.

As such, you will see some dialogs alerting you to the fact that files are being modified from outside the VS environment, and you will want to specify to Reload All as needed.

<img src={useBaseUrl('/img/error-reporting/vs-extension/5e601bc9156b3.png')} alt=""/>

You may also see a dialog warning of Inconsistent Line Endings. It is safe and suggested to normalize those as needed for your environment

<img src={useBaseUrl('/img/error-reporting/vs-extension/5e601bca1b4c4.png')} alt=""/>

The Visual Studio Extension will modify vcxproj (the file with project definition) to add Crashpad to the current project. Each option can be further changed by the developer in "Project properties" as needed.

If the developer chooses to upload symbols, the extension will create a post build task. After each successful build the extension will send .PDBs, .DLLs, .EXEs and other required files as a zip archive to the Backtrace instance. Developers can disable this option after Crashpad setup. This option is available in "Project Properties" in "Post build" actions.

Post Install Steps
After the wizard completes, don't forget to make sure that you open the CrashpadSetup.cpp and specify the following values:

db_path - this tells Crashpad where you want to locally store crash reports before submitting to Backtrace
handler_path - this allows Crashpad to launch out-of-process
Make sure you also initialize Crashpad and check the result with a call like the following in your main function.

bool result = backtrace::initializeCrashpad();

FAQ
Q1: What happens if the user doesn't specify a db_path variable in the CrashpadSetup.cpp?
A1: The Crashpad initialization code returns -1 (error), so Crashpad wont initialize.

Q2: What is \_rxid in the build window?
A2: That is the result from a server when we upload archive with symbols.
