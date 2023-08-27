---
id: dsyms
title: Uploading dSyms
sidebar_label: Uploading dSymps
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

/iOS_SDK/Uploading_dSyms_to_TestFairy.html

https://github.com/testfairy/docs/blob/master/docs/04_iOS_SDK/03_Uploading_dSyms_to_TestFairy.md


TestFairy can show you crash reports to help you identify the place in the code that is causing a problem. TestFairy crash reports are easier to understand when they show actual debug symbols instead of addresses.

TestFairy requires your app's debug symbols (dSYMs) to clearly show you the names of the methods in your code. DSYM files are created by Xcode when you build your app. There are a couple of ways to upload them to TestFairy (see below).

* [Generate Symbols in Xcode](#generate-symbols)
* [Uploading Symbols to TestFairy](#upload-symbols)
	* [How to upload multiple dSYMs](#multiple-symbols)
	* [Fatal: Can't find .dSYM folder!](#fatal-dsym)
* [Handling missing DSYMs](#missing-symbols)
	* [Locating dSYMs on your hard-drive](#locate-missing-dsym)
	* [Locating dSYMs for Bitcode builds](#bitcode-dsym)

## Generate Symbols in Xcode

First, make sure your Xcode project is configured to generate the debug symbols:

1. Click on your project and select Build-Settings.
2. In the search box, type "Debug Information Format".
3. Click on "Debug Information Format" and select "DWARF with dSYM File"