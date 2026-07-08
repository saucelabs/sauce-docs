---
id: installation
title: Install the Sauce Labs IDE Plugin
sidebar_label: Installation and Sign In
description: Install the Sauce Labs plugin in VS Code, Cursor, or Antigravity, sign in with your Sauce Labs credentials, and start your first real device session.
keywords:
  - install
  - vs code extension
  - cursor
  - antigravity
  - sign in
  - sauce labs plugin
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

:::info Beta
The Sauce Labs IDE plugin is currently in beta. Features and configuration may change.
:::

This page walks you through installing the Sauce Labs plugin in your IDE, signing in, and starting your first live device session.

## Prerequisites

- **A supported IDE**: VS Code 1.85 or newer, or a VS Code-based editor such as Cursor or Antigravity. IntelliJ IDEA and Android Studio support is coming soon.
- **A Sauce Labs account** in one of the supported data centers (US West, US East, or EU Central).
- **Your Sauce Labs username and access key.** Both are available from [Sauce Labs user settings](https://app.saucelabs.com/user-settings). See [Managing User Information](/basics/acct-team-mgmt/managing-user-info).
- **FFmpeg on your `PATH`** (optional). Only required for MP4 session recording. Screenshots, log streaming, and everything else work without it.
  - macOS: `brew install ffmpeg`
  - Linux: `sudo apt install ffmpeg` (or the equivalent for your distribution)
  - Windows: download from [ffmpeg.org](https://ffmpeg.org/download.html) and add `bin/` to your `PATH`

To start live device sessions you also need **private (dedicated) devices** and **Real Device Access API concurrency** on your account. See [Requirements and entitlements](/ide-plugins#requirements-and-entitlements).

## Install the plugin

<Tabs
  defaultValue="vscode"
  values={[
    {label: 'VS Code', value: 'vscode'},
    {label: 'Cursor', value: 'cursor'},
    {label: 'Antigravity', value: 'antigravity'},
  ]}>

<TabItem value="vscode">

1. Open VS Code and go to the **Extensions** view (`Cmd/Ctrl + Shift + X`).
2. Search for **Sauce Labs** and open the listing from the verified publisher **Sauce Labs**.
3. Click **Install**.
4. After installation, the **Sauce Labs** icon appears in the Activity Bar. Reload VS Code if prompted.

<a href={useBaseUrl('img/ide-plugins/install-marketplace.png')} target="_blank" rel="noopener noreferrer"><img src={useBaseUrl('img/ide-plugins/install-marketplace.png')} alt="The Sauce Labs extension listing in the VS Code Extensions view, showing the Real Device Cloud and AI Test Authoring feature descriptions" /></a>

</TabItem>

<TabItem value="cursor">

1. Open Cursor and go to the **Extensions** view (`Cmd/Ctrl + Shift + X`).
2. Search for **Sauce Labs** and open the listing from the publisher **Sauce Labs**.
3. Click **Install**.
4. After installation, the **Sauce Labs** icon appears in the Activity Bar. Reload Cursor if prompted.

</TabItem>

<TabItem value="antigravity">

1. Open Antigravity and go to the **Extensions** view (`Cmd/Ctrl + Shift + X`).
2. Search for **Sauce Labs** and open the listing from the publisher **Sauce Labs**.
3. Click **Install**.
4. After installation, the **Sauce Labs** icon appears in the Activity Bar. Reload Antigravity if prompted.

</TabItem>

</Tabs>

### Install from a VSIX file (beta alternative)

During the beta, Sauce Labs may provide a signed `.vsix` package directly. This also works if the listing is not yet available in your editor's extension registry:

1. Open the **Extensions** view.
2. Click the **...** menu in the view header and choose **Install from VSIX...**.
3. Select the `.vsix` file you received.

## Sign in

Before you sign in, the Activity Bar shows a single **Sauce Labs** icon. That is where you log in.

1. Click the **Sauce Labs** icon in the Activity Bar to open the login view.
2. Pick the **data center region** that matches your account from the dropdown.
3. Enter your **User Name** and **Access Key**, then click **Log in**.

<a href={useBaseUrl('img/ide-plugins/sign-in-form.png')} target="_blank" rel="noopener noreferrer"><img src={useBaseUrl('img/ide-plugins/sign-in-form.png')} alt="The Sauce Labs sign-in form in the sidebar with a region dropdown, user name and access key fields, and a log in button" width="480" /></a>

Once you sign in, the single Sauce Labs icon is replaced by two product icons in the Activity Bar: **Real Device Cloud** and **Sauce Labs Test Authoring**.

Your credentials are stored in the editor's secret store, backed by the operating system keychain (macOS Keychain, Windows Credential Manager, or `libsecret` on Linux). They are never written to your workspace or settings files.

To sign out, open the **Real Device Cloud** view and click **Sign Out** in the **Account** section, or run **Sauce: Sign Out** from the Command Palette.

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

You can switch regions three ways, whichever is more convenient:

- Click a region row in the sidebar's **Region** section.
- Pick one in the region dropdown on the sign-in form.
- Run **Sauce: Select Data Center Region** from the Command Palette.

Switching re-validates your credentials against the new region and refreshes the device and session lists automatically.

## Take your first step

After signing in, both products are one click away in the Activity Bar.

### Start a real device session

1. Open the **Real Device Cloud** view and wait for the **Real Devices** list to populate.
2. Click the play icon next to an available device (green dot).
3. A new tab opens showing the live device screen. The first frame arrives 15 to 30 seconds after allocation.

See [Real Device Cloud in Your IDE](/ide-plugins/real-device-cloud) for everything you can do in a live session.

### Generate your first test with AI

1. Open the **Sauce Labs Test Authoring** view and click **Create Test Script**.
2. Choose a target: a website and browser, or an app build and a device.
3. Describe what you want to test in plain English and submit. The AI runs it on a live session and gives you back runnable test code.

See [AI Test Authoring in Your IDE](/ide-plugins/ai-test-authoring) for the full authoring workflow. This feature requires the [Sauce AI for Test Authoring](/sauce-ai/ai-authoring) entitlement.
