---
id: centercode
title: Centercode
sidebar_label: Centercode
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Below are the steps you need to take to connect TestFairy to Centercode.

1. Create a Centercode API Key: open the Centercode Community Homepage, and go to Community Tools > Configuration > API Keys (under Advanced Configuration) > Create an API Key.
   <img src={useBaseUrl('/img/testfairy/integrations/centercode1.png')} alt="Create new API Key"/>

You can check [Centercode documentation](https://help.centercode.com/send-testfairy-feedback-to-centercode) to send TestFair feedback to Centercode.

2. Name the new API KEY "TestFairy" and generate the new API Key.
   <img src={useBaseUrl('/img/testfairy/integrations/centercode2.png')} alt="Generate API Key"/>

3. Configure a Centercode External Feedback Source:

   - Click **Project Tools**
   - Click **Feedback Types**
   - Hover over your desired Feedback Type (Bug Reports) and click **Modify**
   - Click **External Sources**
   - Click **Create an External Source**
   - From the External Sources creation page **Create an (internally-facing) Name**
   - Provide the key to help identify this External Source (ex: “appcrashlog” - detailed below)
   - Select the appropriate **Workflow state** (typically “New”)
   - Configure your **Incoming Fields**
   - Copy/Save your API Endpoint URL and click **Submit**
     <img src={useBaseUrl('/img/testfairy/integrations/centercode3a.png')} alt="Configure Centralcode External Feedback Source"/>

4. Configure a new Cetercode integration in your TestFairy dashboard:
   - Open your TestFairy account **Preferences** > **Integrations**. Press **Add Integration**.
     <img src={useBaseUrl('/img/testfairy/integrations/centercode-int-1.png')} alt="Add Integration"/>
   - Name the integration `Centercode`, enter the Centercode endpoint `URL`, tick the **User feedback** and click **Add webhook**.
     <img src={useBaseUrl('/img/testfairy/integrations/centercode-int-2.png')} alt="Add webhook"/>
