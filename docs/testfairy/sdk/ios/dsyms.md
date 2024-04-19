---
id: dsyms
title: Uploading dSyms
sidebar_label: Uploading dSymps
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

TestFairy can show you crash reports to help you identify the place in the code that is causing a problem. TestFairy crash reports are easier to understand when they show actual debug symbols instead of addresses.

TestFairy requires your app's debug symbols (dSYMs) to clearly show you the names of the methods in your code. DSYM files are created by Xcode when you build your app. There are a couple of ways to upload them to TestFairy.

## Generating Symbols in Xcode

First, make sure your Xcode project is configured to generate the debug symbols:

1. Click on your project and select Build-Settings.
2. In the search box, type _Debug Information Format_.
3. Click on **Debug Information Format** and select **DWARF with dSYM File**:
   <br/><img src={useBaseUrl('img/mobile-apps/generate-symbol.png')} alt="Gereating Symbols" width="600"/>

:::note
To upload symbols to TestFairy, you'll need to have your <strong>UPLOAD_API_KEY</strong> ready, which can be found from your [user preferences page](https://app.testfairy.com/settings/api-key/).
:::

## Uploading multiple dSYMs

You can upload multiple dSYMs per build. Some developers have frameworks developed in-house, and these frameworks make it to the final .IPA file. In order to upload dSYM in your framework project, just repeat the above steps using pointing to your framework's settings.

## Fatal: Can't find .dSYM folder!

If while compiling you get the error `Fatal: Can't find .dSYM folder!`, your project is not configured to [generate debug symbols](#generate-symbols).

## Handling missing DSYMs

If you see a message in TestFairy about missing DSYMs or if you've published your app to the AppStore with Bitcode enabled, follow these instructions to locate and upload DSYMs.

## Locating dSYMs on your hard-drive

If your build is missing dSYMs, you can find them and upload them manually to TestFairy.

1. Login to TestFairy and go to the App overview page by clicking the name of your app.
2. Click on the name of your app build to reach the build overview page.
3. Click on **Settings** from the Build menu, then select the **Symbolication** section.
4. This section lists several required UUIDs (representing binary app builds for different device architecture or binary builds for frameworks you're using). To see crash reports with your classes and method names, you'll need to upload dSYMs for each UUID that is specified as required.
5. Open a command line terminal and run the following command to locate the DSYMs folder name for one of the listed required UUIDs (replace `<UUID>` with the actual UUID string): `mdfind "com_apple_xcode_dsym_uuids == <UUID>" | grep dSYM`
6. Create a zip file with the content of the DSYM directory (you can call the zip file any name you like) `zip -r /tmp/symbols.zip <YOUR_DSYM_LOCATION>/*`
7. Proceed to upload the zip as described [here](#upload-symbols).

If you can't locate your dSYMS using `mfind`, follow these instructions:

1. In Xcode, open the organizer window.
2. Control-Click the relevant build, and select "Show in Finder".
3. In Finder, Control-Click the archive and select "Show Package Contents".
4. The archive will contain a folder called dSYM.
5. Create a zip with the contents of the folder and proceed to upload the zip to TestFairy as explained [here](#upload-symbols).

## Locating dSYMs for Bitcode builds.

If you enabled Bitcode for your build and released it to the store or submitted to TestFlight, take note that Apple will generate new dSYMs for your app and you'll need to download the new dSYMs from Xcode, and then upload them to TestFairy.

1. In Xcode, open the organizer window.
2. Click on the relevant build.
3. From the right side menu, click "download dSYMs".
4. Manually upload the dSYMs to TestFairy, [as described here](#upload-symbols)
