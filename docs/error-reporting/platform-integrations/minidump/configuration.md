---
id: configuration
title: Configuring Backtrace for Minidump
sidebar_label: Configuration
description: Configure Backtrace for Minidump.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

The minidump format is the standard crash format for Windows. With the help of open-source libraries such as [Breakpad](https://chromium.googlesource.com/breakpad/breakpad/) or [Crashpad](https://chromium.googlesource.com/crashpad/crashpad/), it is possible to generate crash reports in the minidump format for Mac OS, Android, and iOS.

This article indexes the mechanisms to integrate minidump submission into your Backtrace instance.

## What You'll Need

- A Backtrace account ([log in](https://backtrace.io/login) or sign up for a [free trial license](https://backtrace.io/sign-up)).
- Your subdomain name (used to connect to your Backtrace instance). For example, `https://example-subdomain.sp.backtrace.io`.
- A Backtrace project and a submission token.

:::tip Generate a Submission Token

1. In the Backtrace Console, go to **Project settings > Error submission > Submission tokens**.
1. Select **+**.

:::

## Breakpad

Firefox and a wide variety of desktop applications use the popular open-source crash reporting framework. See the [Integration Guide](/error-reporting/platform-integrations/minidump/breakpad) for more information.

## Crashpad

The popular open-source crash reporting framework used by Chrome, Slack, and more. It is the successor to Breakpad. See the [Integration Guide](/error-reporting/platform-integrations/minidump/crashpad) for more information.

## Electron

This popular framework allows you to build cross-platform desktop applications with Javascript and HTML. Discord, Visual Studio, Slack, and more use it. See the [Integration Guide](/error-reporting/platform-integrations/minidump/electron) for more information.

## HTTP

Submit crash dumps directly over HTTP and HTTPS. For more information see the [HTTP Submission](/error-reporting/platform-integrations/minidump/http-submission).
