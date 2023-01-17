---
id: tosca
title: Tosca Integration
sidebar_label: Tosca
description: Create, execute, and maintain test easily with the industry's leading model-based test platform
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Tricentis Tosca is an industry-leading test creation tool, allowing for rich test case automation against web, mobile, and client-server applications. When you need to execute a lot of Tosca tests in parallel, look to Sauce Labs to help you scale.

## Overview

Tosca scans your app to gather data about the various pages and elements. From the model Tosca creates, you will piece together sequences of actions, allowing you to script the steps your test will execute. With the Sauce Labs credentials in place, you then choose the platforms you want to execute on. See the [Platform Configurator](https://saucelabs.com/platform/platform-configurator) for more information.

## What You’ll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
- Your Sauce Labs [Username](https://app.saucelabs.com/user-settings).
- You’ll also need to download and install Tosca.

## Scanning an App

1. In the **Tosca Commander**, on the **Modules** tab, click **Scan** and then click **Mobile**.

<img src={useBaseUrl('img/integrations/tosca-modules.png')} alt="Tosca Commander Modules tab" width="600"/>

2. In the **Add connection** box, enter your Sauce Labs credentials.

<img src={useBaseUrl('img/integrations/tosca-add-connection.png')} alt="Tosca Commander Add connection tab" width="400"/>

3. In the **Add device** box, enter the information for the Sauce Labs device you will be using.

<img src={useBaseUrl('img/integrations/tosca-add-device.png')} alt="Tosca Commander Add device tab" width="400"/>

4. Upload your application file (.ipa, .aab, or .apk) to the Sauce Labs cloud (for details, see [Mobile App Storage](/mobile-apps/app-storage/)).

5. When you receive an id for the file location, in the **Edit native/hybrid application** box, enter the path with the following format and then click **Save**:

`storage:filename=app-<app_name>`

or:

`storage:file_id=<file_id>`

<img src={useBaseUrl('img/integrations/tosca-edit-native-hybrid-app.png')} alt="Tosca Edit native/hybrid application box" width="400"/>

6. In the **Establishing connection...** box, click **Scan**.

:::note
This step sometimes takes a considerable amount of time, due to the large volume of data flowing back and forth between Tosca and the Sauce Labs cloud. Running such a scan locally (on an emulator) may speed up the process, and is the recommended practice.
:::

<img src={useBaseUrl('img/integrations/tosca-est-connection.png')} alt="Tosca Establishing connection box" width="400"/>

## Executing a Test

Once you have some basic tests created, it’ll be time to execute them. For parallel execution of multiple tests on Sauce Labs devices, you’ll need to fill out the test configuration fields as indicated below.

1. In the **Tosca Commander**, on the **Execution** tab, enter your Sauce Labs credentials.

<img src={useBaseUrl('img/integrations/tosca-execution-tab.png')} alt="Tosca Commander Execution tab" width="600"/>

2. On the **Test Cases** tab, in the **Application** field under **Open Mobile App**, enter the `storage:filename`.

<img src={useBaseUrl('img/integrations/tosca-test-cases-tab.png')} alt="Tosca Commander Test Cases tab" width="600"/>

3. For a real device, execute the script by adding the following configuration:

<img src={useBaseUrl('img/integrations/tosca-execute-real-device.png')} alt="Tosca real device configuration" width="600"/>

4. For a virtual device, execute the script by adding the following configuration:

<img src={useBaseUrl('img/integrations/tosca-execution-virtual-device.png')} alt="Tosca virtual device configuration" width="600"/>
