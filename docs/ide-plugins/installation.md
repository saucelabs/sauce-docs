---
id: installation
title: Install the Sauce Labs IDE Plugin
sidebar_label: Installation and Sign In
description: Install the Sauce Labs plugin in VS Code, sign in with your Sauce Labs credentials, and start your first real device session.
keywords:
  - install
  - vs code extension
  - cursor
  - antigravity
  - sign in
  - sauce labs plugin
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The Sauce Labs IDE Plugin lets you access Sauce Labs directly from your IDE. After installing the plugin, you can sign in to your Sauce Labs account, start live testing sessions on real devices, and use AI-powered test authoring without leaving your development environment.

## Prerequisites

- **A supported IDE**: VS Code 1.85 or newer. Support for Cursor, Antigravity, IntelliJ IDEA, and Android Studio is coming soon.
- **A Sauce Labs account** in one of the supported data centers (US West, US East, or EU Central).
- **Your Sauce Labs username and access key.** Both are available from **[Sauce Labs user settings](https://app.saucelabs.com/user-settings)**. See **[Managing User Information](/basics/acct-team-mgmt/managing-user-info)**.
- **FFmpeg on your `PATH`** (optional). Only required for MP4 session recording. Screenshots, log streaming, and everything else work without it.
  - macOS: `brew install ffmpeg`
  - Linux: `sudo apt install ffmpeg` (or the equivalent for your distribution)
  - Windows: download from **[ffmpeg.org](https://ffmpeg.org/download.html)** and add `bin/` to your `PATH`

To start live device sessions you also need **private (dedicated) devices** and **Real Device Access API concurrency** on your account. See **[Requirements and entitlements](/ide-plugins#requirements-and-entitlements)**.

## Install the plugin

**Step 1:** Open **Visual Studio Code** and navigate to the **Extensions** view by clicking the **Extensions** icon in the Activity Bar or pressing `Cmd+Shift+X` (macOS) or `Ctrl+Shift+X` (Windows/Linux).

<img src={useBaseUrl('/img/ide-plugins/installation/ide-installation-1.png')} alt="The Sauce Labs extension listing in the VS Code Extensions view, showing the Real Device Cloud and AI Test Authoring feature descriptions" width="100%"/>

**Step 2:** Search for **Sauce Labs**, then select the **Sauce Labs** extension published by the verified **Sauce Labs** publisher.

<img src={useBaseUrl('/img/ide-plugins/installation/ide-installation-2.png')} alt="The Sauce Labs extension listing in the VS Code Extensions view, showing the Real Device Cloud and AI Test Authoring feature descriptions" width="100%"/>


**Step 3:** Click **Install** to begin installing the extension. If prompted, review the publisher information in the **Do you trust the publisher?** dialog, then click **Trust Publisher & Install** to continue. 

<img src={useBaseUrl('/img/ide-plugins/installation/ide-installation-3.png')} alt="The Sauce Labs extension listing in the VS Code Extensions view, showing the Real Device Cloud and AI Test Authoring feature descriptions" width="100%"/>


**Step 4:** After the installation is complete, the **Sauce Labs** icon appears in the Activity Bar. If prompted, reload Visual Studio Code to finish the installation.

<img src={useBaseUrl('/img/ide-plugins/installation/ide-installation-4.png')} alt="The Sauce Labs extension listing in the VS Code Extensions view, showing the Real Device Cloud and AI Test Authoring feature descriptions" width="100%"/>

## Sign in

After installing the Sauce Labs IDE Plugin, sign in with your Sauce Labs account to access the plugin features. Signing in connects the plugin to your account, allowing you to start live testing sessions on real devices and use AI Test Authoring directly from your IDE.

**Step 1:** Click the **Sauce Labs** icon in the **Activity Bar** to open the **Sign In** page.

<img src={useBaseUrl('/img/ide-plugins/installation/ide-installation-4.png')} alt="The Sauce Labs sign-in form in the sidebar with a region dropdown, user name and access key fields, and a log in button" width="100%"/>

**Step 2:** From the **Region** dropdown list, select the data center where your Sauce Labs account is hosted (for example, **US West**, **US East**, or **EU Central**).

<img src={useBaseUrl('/img/ide-plugins/installation/ide-installation-5.png')} alt="The Sauce Labs sign-in form in the sidebar with a region dropdown, user name and access key fields, and a log in button" width="100%"/>

**Step 3:** Enter your **Username** and **Access Key** in the corresponding fields, then click **Log In** to authenticate your account.

:::tip
If you don't know your **Username** or **Access Key**, refer to the **[Find your access Key](/docs/sauce-ai/sauce-mcp-getting-started.md#find-your-access-key)** documentation to locate your credentials.
:::

<img src={useBaseUrl('/img/ide-plugins/installation/ide-installation-6.png')} alt="The Sauce Labs sign-in form in the sidebar with a region dropdown, user name and access key fields, and a log in button" width="100%"/>

**Step 4:** After you successfully sign in, the **Sauce Labs** icon is replaced by two product icons in the **Activity Bar**:

* **Real Device Cloud**, which lets you start and manage live device sessions.

* **Sauce Labs Test Authoring**, which provides AI-powered test generation.

<img src={useBaseUrl('/img/ide-plugins/installation/ide-installation-7.png')} alt="The Sauce Labs sign-in form in the sidebar with a region dropdown, user name and access key fields, and a log in button" width="100%"/>

:::note
Your credentials are securely stored using your operating system's credential manager (such as macOS Keychain, Windows Credential Manager, or `libsecret` on Linux). They are never saved in your workspace or project settings.
:::

## Sign Out

If you no longer want to use the Sauce Labs IDE Plugin with your current account, you can sign out at any time.

**Step 1:** Open the **Real Device Cloud** view from the **Activity Bar**.

<img src={useBaseUrl('/img/ide-plugins/installation/ide-installation-8.png')} alt="The Sauce Labs sign-in form in the sidebar with a region dropdown, user name and access key fields, and a log in button" width="100%"/>

**Step 2:** In the **Account** section, click **Sign Out** to sign out of your Sauce Labs account. Alternatively, open the **Command Palette** and run the **Sauce: Sign Out** command.

<img src={useBaseUrl('/img/ide-plugins/installation/ide-installation-9.png')} alt="The Sauce Labs sign-in form in the sidebar with a region dropdown, user name and access key fields, and a log in button" width="100%"/>

:::tip
If you switch from an account without an entitlement to one that has it, reload the editor window so entitled views (such as the test case list) populate correctly.
:::

## Select a data center region

All three Sauce Labs data centers are supported:

| Region | Host |
| --- | --- |
| US West (California) | `api.us-west-1.saucelabs.com` |
| US East (Virginia) | `api.us-east-4.saucelabs.com` |
| EU Central (Frankfurt) | `api.eu-central-1.saucelabs.com` |

You can switch regions two ways, whichever is more convenient:

- Click a region row in the sidebar's **Region** section.
- Pick one in the region dropdown list on the sign-in form.

Switching re-validates your credentials against the new region and refreshes the device and session lists automatically.

## Get Started with the Plugin

After you've signed in, you can start exploring the key features of the Sauce Labs IDE Plugin. Use the Activity Bar to access Real Device Cloud for live device testing or Sauce Labs Test Authoring to create automated tests with AI.

### Start Your First Real Device Session

**Step 1:** Open the **Real Device Cloud** view from the **Activity Bar**. Wait for the list of available devices to load, then click the **Play** icon next to the device you want to use.

<img src={useBaseUrl('/img/ide-plugins/installation/ide-installation-10.png')} alt="The Sauce Labs sign-in form in the sidebar with a region dropdown, user name and access key fields, and a log in button" width="100%"/>

**Step 2:** A new editor tab opens and connects to the selected device. After the session is ready, you can begin interacting with the live device directly from your IDE.

<img src={useBaseUrl('/img/ide-plugins/installation/ide-installation-11.png')} alt="The Sauce Labs sign-in form in the sidebar with a region dropdown, user name and access key fields, and a log in button" width="100%"/>

:::note
**Next step:** To learn how to upload apps, interact with the device, capture screenshots, and manage live sessions, see **[Real Device Cloud in Your IDE](/ide-plugins/real-device-cloud)**.
:::

### Generate Your First AI Test

**Step 1:** Open the **Sauce Labs Test Authoring** view from the **Activity Bar**, then click **Create Test Script** to start a new AI-generated test.

<img src={useBaseUrl('/img/ide-plugins/installation/ide-installation-12.png')} alt="The Sauce Labs sign-in form in the sidebar with a region dropdown, user name and access key fields, and a log in button" width="100%"/>

**Step 2:** Select a website or app as the test target, describe the test scenario in plain English, and submit your request. Sauce AI runs the test and generates a runnable automation script.

<img src={useBaseUrl('/img/ide-plugins/installation/ide-installation-13.png')} alt="The Sauce Labs sign-in form in the sidebar with a region dropdown, user name and access key fields, and a log in button" width="100%"/>

:::note
AI Test Authoring requires the **[Sauce AI for Test Authoring](/sauce-ai/ai-authoring)** entitlement. For complete instructions, see **[AI Test Authoring in Your IDE](/ide-plugins/ai-test-authoring)**.
:::
