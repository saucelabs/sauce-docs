---
id: submit-url
title: API Tokens and Submission URLs
sidebar_label: API Tokens and Submission URLs
description: Creating API tokens for ...
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

API tokens are used to authenticate Backtrace API usage and in Submission URLs.
Submission URLs are used by SDKs and tools for submitting data to Backtrace.

# Creating API Tokens
Tokens are granted specific capabilities which constrain their usage to exactly those purposes.

1. In the Backtrace Console, go to **Project settings > Project > API tokens** and select **New**.
1. Enter a short name like **Symbol Token** (for instance).
1. Select one or more capabilities and click **Create**.

# Creating Submission URLs

The format of a submission URL differs for hosted environments vs. an on-premise installation (uncommon).

<Tabs
groupId="instance-type"
defaultValue="hosted"
values={[
{label: 'Hosted Instance', value: 'hosted'},
{label: 'On-premise', value: 'onprem'},
]}>

<TabItem value="hosted">

In a hosted environment submission URLs are structured like this:
`https://submit.backtrace.io/<subdomain>/<token>/<endpoint>`

<table>
<tr><th>subdomain</th><td>If your instance address is `https://example.sp.backtrace.io`, your subdomain will be `example`.</td></tr>
<tr><th>token</th><td>The API token generated above.</td></tr>
<tr><th>endpoint</th><td>The endpoint is specific to an operation. This will be detailed in feature documentation.</td></tr>
</table>

**Example**

To submit **sourcemaps** for subdomain **example** and token **bebbbc8b2bdfac76ad803b03561b25a44039e892ffd3e0beeb71770d08e2c8a7**, the URL would be `https://submit.backtrace.io/example/bebbbc8b2bdfac76ad803b03561b25a44039e892ffd3e0beeb71770d08e2c8a7/sourcemap`.

</TabItem>

<TabItem value="onprem">

In an on-premise environment submission URLs are structured like this:
`<your address>:6098//post?format=<endpoint>&token=<token>`

<table>
<tr><th>your address</th><td>The URL to your backtrace services</td></tr>
<tr><th>token</th><td>The API token generated above.</td></tr>
<tr><th>endpoint</th><td>The endpoint is specific to an operation. This will be detailed in feature documentation.</td></tr>
</table>

**Example**

To submit **sourcemaps** to the address **https://backtrace.example.com** and token **bebbbc8b2bdfac76ad803b03561b25a44039e892ffd3e0beeb71770d08e2c8a7**, the URL will be `https://backtrace.example.com:6098//post?format=sourcemap&token=bebbbc8b2bdfac76ad803b03561b25a44039e892ffd3e0beeb71770d08e2c8a7`.

</TabItem>
</Tabs>