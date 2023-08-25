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

## Creating Submission URLs

The structure of a submission URL differs between hosted environments and on-premise installations.

<Tabs
groupId="instance-type"
defaultValue="hosted"
values={[
{label: 'Hosted Instance', value: 'hosted'},
{label: 'On-premise Instance', value: 'onprem'},
]}>

<TabItem value="hosted">

In a hosted environment, submission URLs follow this format: `https://submit.backtrace.io/<subdomain>/<token>/<endpoint>`.

<table>
<tr><th>subdomain</th><td>If your instance address is `https://example.sp.backtrace.io`, your subdomain will be `example`.</td></tr>
<tr><th>token</th><td>The API token generated earlier.</td></tr>
<tr><th>endpoint</th><td>The endpoint corresponds to a specific operation.</td></tr>
</table>

**Example**

To submit `sourcemaps` for the subdomain `example` using token `bebbbc8b2bdfac76ad803b03561b25a44039e892ffd3e0beeb71770d08e2c8a7`, the URL would be `https://submit.backtrace.io/example/bebbbc8b2bdfac76ad803b03561b25a44039e892ffd3e0beeb71770d08e2c8a7/sourcemap`.

</TabItem>

<TabItem value="onprem">

In an on-premise environment, submission URLs are structured as follows: `<your address>:6098//post?format=<endpoint>&token=<token>`.

<table>
<tr><th>your address</th><td>The URL to your Backtrace services.</td></tr>
<tr><th>token</th><td>The previously generated API token.</td></tr>
<tr><th>endpoint</th><td>The endpoint corresponds to a specific operation.</td></tr>
</table>

**Example**

To submit `sourcemaps` to the address `https://backtrace.example.com` using token `bebbbc8b2bdfac76ad803b03561b25a44039e892ffd3e0beeb71770d08e2c8a7`, the URL would be `https://backtrace.example.com:6098//post?format=sourcemap&token=bebbbc8b2bdfac76ad803b03561b25a44039e892ffd3e0beeb71770d08e2c8a7`.

</TabItem>
</Tabs>
