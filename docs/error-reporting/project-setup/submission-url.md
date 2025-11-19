---
id: submission-url
title: Creating API Tokens and Submission URLs
sidebar_label: API Tokens and Submission URLs
description: Learn about creating API tokens and Submission URLs for Backtrace.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

API tokens are used for authenticating Backtrace API usage and in Submission URLs. Submission URLs are utilized by SDKs and tools to send data to Backtrace.

## What You'll Need

- A Backtrace account ([log in](https://backtrace.io/login) or sign up for a [free trial license](https://backtrace.io/sign-up)).
- Your subdomain name (used to connect to your Backtrace instance). For example, `https://example-subdomain.sp.backtrace.io`.

## Creating API Tokens

Tokens are granted specific capabilities that restrict their usage to designated purposes.

1. In the Backtrace Console, go to **Project settings > Project > API tokens** and select **New**.
2. Provide a descriptive name, such as `Symbol Token`.
3. Choose one or more capabilities and then click **Create**.

:::note

A breakdown of each capability can be found in our Error Reporting [API documentation](/dev/api/error-reporting/#api-tokens)

:::

## Creating Submission URLs

Examples of the Submission URLs can be found in our Error Reporting [API documentation](/dev/api/error-reporting/#accessing-the-apis)
