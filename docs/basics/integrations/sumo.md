---
id: sumo
title: Sumo Logic Integration
sidebar_label: Sumo Logic
description: Automatically view your Sauce Labs test results in a custom Sumo Logic dashboard.
keywords:
- send-test-results
- sumo logic
- how-to
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

[Sumo Logic](https://www.sumologic.com/) is a cloud-based log management and analytics platform. Sauce Labs has partnered with Sumo Logic to provide a dynamic integration in which Sauce Labs test results are automatically pushed to a custom Sauce Labs dashboard in Sumo Logic through a webhook.

## How It Works

The integration sends your Sauce Labs test results to Sumo Logic through a webhook. In Sumo Logic, you create a hosted collector with an **HTTP Logs and Metrics** source, which generates a URL that can accept push requests. You then enable the Sumo Logic integration in Sauce Labs and provide that URL. From then on, Sauce Labs automatically pushes your Virtual Device Cloud (VDC) jobs data to the Sumo Logic collector.

To view the data, you install the Sauce Labs app in Sumo Logic, which adds a **Sauce Labs - VDC** dashboard to your directory. The dashboard uses the **Source Category** of your source to populate its panels with the data that Sauce Labs pushes.

The integration is specific to the data center that is active for your Sauce Labs account during setup. If you use more than one data center, you set it up once in each.

## Prerequisites

Before you begin, make sure you have:

- A Sauce Labs account (if you don't have one, start a [free trial](https://saucelabs.com/sign-up)).
- Access to the Sauce Labs [Account Integrations](https://app.saucelabs.com/integrations) page.
- A Sumo Logic account, with permission to add collectors and sources and to install apps from the **App Catalog**.

## Set Up the Integration

Setting up the integration has three parts: set up a collector in Sumo Logic, enable the integration in Sauce Labs, and install the Sauce Labs app in Sumo Logic.

### Set Up a Sumo Logic Collector

Before you can push test data from Sauce Labs to Sumo Logic, you must create a collector in Sumo Logic that can accept the push request.

#### Choose or Add a Collector

1. From your Sumo Logic **Home** menu, choose **Manage Data** > **Collection** from the navigation panel.
2. If you have an existing collector you'll use to receive push data, skip to [Configure a Source](#configure-a-source).
3. If you need to create a new collector, click the **Add Collector** link at the top right of the **Collection** screen.
4. Choose **Hosted Collector** in the pop-up.
5. Enter the collector details, as applicable:

   | Sr. No. | Field | Description |
   | --- | --- | --- |
   | 1 | **Name** | Providing a name for the collector is the only requirement. |
   | 2 | **Description** | Further distinguish the purpose or type of data collected, if you wish. |
   | 3 | **Category** | Identifies the source, but is not necessary at this level because the generated source URL overwrites this value. |
   | 4 | **Fields/Metadata** | The Sauce Labs dashboard is pre-configured, so creating [metadata field definitions](https://help.sumologic.com/Manage/Fields) is not applicable for this integration. |
   | 5 | **Budget** | If you have defined an [ingest budget](https://help.sumologic.com/Manage/Ingestion-and-Volume/Ingest_Budgets) for your Sumo Logic data collections, you can choose the applicable budget for this collector. |
   | 6 | **Time Zone** | Sets the default time zone to apply to log timestamps, but is not necessary at this level because the generated source URL overwrites this value. |

6. Click **Save**.
7. Click **OK** to [configure a source](#configure-a-source).

#### Configure a Source

1. From your Sumo Logic **Home**, go to **Manage Data** > **Collection**.
2. Choose the **Add Source** link to bring up the Source menu. If you just created a new collector, the Source menu is already open.
3. Choose the **HTTP Logs and Metrics** source.

   <img src={useBaseUrl('img/integrations/sumo/http-source.png')} alt="Select HTTP Source" width="500"/>

4. Enter the source details, as applicable. You can accept the default values for most settings, but you must, at a minimum, provide the following:
   - **Name**: Enter a name that identifies your source.
   - **Source Category**: A unique classification of the data that the source receives. Since the Sauce Labs app retrieves VDC test data, an example for this value might be `saucelabs/tests/vdc`. This value is used to populate the panels of the Sauce Labs dashboard in Sumo Logic with the data pushed by the corresponding webhook.
5. Click **Save**.
6. Copy the generated URL. You need it to set up the Sumo Logic integration in Sauce Labs. You can also access it later by clicking the **Show URL** link for your source on your Sumo Logic **Collection** page.

### Enable the Sumo Logic Integration in Sauce Labs

**Step 1:** Inside your Sauce Labs account, click on your **profile icon** in the top-right corner, and then select **[Integrations](https://app.saucelabs.com/integrations)** from the dropdown list.

<img src={useBaseUrl('img/integrations/sumo/sumo-1.png')} alt="Integrations option in the profile menu"/>

**Step 2:** Find the **Sumo Logic** integration and click **Enable**.

<img src={useBaseUrl('img/integrations/sumo/sumo-2.png')} alt="Sumo Logic integration on the Integrations page"/>

**Step 3:** In the **Sumo Configuration** dialog, enter the source URL from your Sumo Logic collector in the **Push URL** field. See [Authentication](#authentication).

<img src={useBaseUrl('img/integrations/sumo/sumo-3.png')} alt="Push URL field in the Sumo Configuration dialog"/>

**Step 4:** Click **Save**.

<img src={useBaseUrl('img/integrations/sumo/sumo-4.png')} alt="Save button in the Sumo Configuration dialog"/>

Sauce Labs automatically pushes your VDC jobs data to the Sumo Logic collector.

:::note Multiple Data Centers
The Sumo Logic integration is specific to the data center that is active for your Sauce Labs account during setup. If you have access to multiple data centers, you must switch into each data center and repeat the Sumo Logic setup process to push jobs data from all of them to your Sumo Logic collector.
:::

### Install the Sauce Labs App in Sumo Logic

1. From your Sumo Logic **Home**, choose **App Catalog** from the navigation panel.
2. Use the search bar to find and click the Sauce Labs app.
3. Click **Add Integration** to install the Sauce Labs app to your Sumo Logic account. This adds the **Sauce Labs - VDC** dashboard to your directory.

## Authentication

The integration does not use your Sauce Labs username and access key. Instead, it authenticates with the source URL generated by your Sumo Logic **HTTP Logs and Metrics** source, as described in [Configure a Source](#configure-a-source). Sauce Labs uses this URL to push your jobs data to the collector, so treat it as a credential and share it only with people who manage the integration.

## Verify the Integration

1. Run a test on the Sauce Labs Virtual Device Cloud, in the data center where you enabled the integration.
2. From your Sumo Logic **Home**, open the **Sauce Labs - VDC** dashboard.
3. Confirm that the dashboard panels show your Sauce Labs VDC metrics.

## Use the Integration

After you set up the integration, Sauce Labs pushes your VDC jobs data to Sumo Logic automatically, so you can monitor your test results without leaving Sumo Logic.

To view your Sauce Labs test results in Sumo Logic:

1. From your Sumo Logic **Home**, go to your directory.
2. Click the **Sauce Labs - VDC** dashboard.

The dashboard shows your Sauce Labs VDC metrics.

<img src={useBaseUrl('img/integrations/sumo/sl-sumo-dash.png')} alt="Sauce Labs Dashboard in Sumo" width="800"/>

### Remove the Sumo Logic Integration

**Step 1:** From your Sauce Labs account, go to the [Account Integrations](https://app.saucelabs.com/integrations) page.

**Step 2:** For Sumo Logic, click **Enable**.

**Step 3:** Click **Remove Configurations**.

Sauce Labs no longer pushes your VDC jobs data to the Sumo Logic collector.

## Troubleshooting

<details>
<summary>**The dashboard shows no data**</summary>

Make sure the Sumo Logic integration is enabled on the Sauce Labs [Account Integrations](https://app.saucelabs.com/integrations) page, and that it uses the source URL from your Sumo Logic collector. See [Enable the Sumo Logic Integration in Sauce Labs](#enable-the-sumo-logic-integration-in-sauce-labs).

</details>

<details>
<summary>**Jobs from one of your data centers are missing**</summary>

The integration is specific to the data center that was active when you set it up. Switch into each of your other data centers and repeat the setup.

</details>

<details>
<summary>**You cannot find the source URL**</summary>

On your Sumo Logic **Collection** page, click the **Show URL** link for your source.

</details>

## Next Steps

- [Viewing Test Results](/test-results/viewing-test-results/)
- [Data Center Endpoints](/basics/data-center-endpoints/)
- [Integrations Overview](/basics/integrations-overview/)
