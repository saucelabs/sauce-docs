---
id: c
title: C# Integration Guide
sidebar_label: C#
description: Use C# in your Backtrace project.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

Backtrace's integration with C# applications allows customers to capture and report handled and unhandled C# exceptions to their Backtrace instance, instantly offering the ability to prioritize and debug software errors. Here are some highlights:

## What You'll Need

- A Backtrace account ([log in](https://backtrace.io/login) or sign up for a [free trial license](https://backtrace.io/sign-up)).
- Your subdomain name (used to connect to your Backtrace instance). For example, `https://example-subdomain.sp.backtrace.io`.
- A Backtrace project and a [submission token](/error-reporting/project-setup/submission-url).

## Supported Frameworks, Tools and Platforms

- .NET Framework >3.5
- .NET Standard >2.0
- .NET Core >2.0
- Xamarin
- Universal Windows Platform
- Unity

## Features

- Provides a NuGet package for developers to customize and submit crash reports to Backtrace when exceptions occur.
- The crash report includes information about all threads, their run states, call stacks, environment variables, custom attributes, and more.
- Generates a minidump that can be associated with the report.
- Allows attaching annotations and other additional information.

## More Details

For more details, refer to the Backtrace C# readme on our [GitHub site](https://github.com/backtrace-labs/backtrace-csharp/blob/master/README.md).
