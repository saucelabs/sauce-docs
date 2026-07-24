---
id: symbol-access-token
title: Generate Symbol Access Token
sidebar_label: Generate Symbol Access Token
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

A symbol access token allows you to authenticate automated symbol uploads from build scripts, CI/CD pipelines, or other tools. Once generated, the token can be used to upload symbol files to Error Reporting without requiring user credentials.

To generate a symbol access token:

**Step 1:** Open the Error Reporting project where you want to upload symbols. In the upper-right corner, click your **profile** icon, and then select **Project Settings & Docs**.

<img src={useBaseUrl('img/error-reporting/symbols/symbol-access-token/symbol-access-token-1.png')} alt="" />

**Step 2:** In the left navigation pane, under **Symbols**, click **Access tokens**.

<img src={useBaseUrl('img/error-reporting/symbols/symbol-access-token/symbol-access-token-2.png')} alt="" />

**Step 3:** The **Symbol access tokens** page displays all existing access tokens for the project. If no tokens have been created, the page displays an empty list.

<img src={useBaseUrl('img/error-reporting/symbols/symbol-access-token/symbol-access-token-3.png')} alt="" />

**Step 4:** Click the **+** (**Create**) button in the upper-right corner of the page. A new symbol access token is generated automatically.

<img src={useBaseUrl('img/error-reporting/symbols/symbol-access-token/symbol-access-token-4.png')} alt="" />

**Step 5:** A new symbol access token is generated and added to the **Symbol access tokens** list. Copy and securely store the token for symbol uploads.

<img src={useBaseUrl('img/error-reporting/symbols/symbol-access-token/symbol-access-token-5.png')} alt="" />