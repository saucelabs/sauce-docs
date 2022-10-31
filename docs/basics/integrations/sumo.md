---
id: sumo
title: Sumo Logic Partner Integration
sidebar_label: Sumo Logic Integration
description: Automatically view your Sauce Labs test results in a custom Sumo Logic dashboard.
keywords:
  - send-test-results
  - sumo logic
  - how-to
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

Sauce Labs has partnered with Sumo Logic to provide a dynamic integration in which Sauce Labs test results are automatically pushed to a custom Sauce Labs dashboard in Sumo Logic via a webhook.

## What You'll Need

* A Sauce Labs account (if you don't have one, start a [free trial](https://saucelabs.com/sign-up))
* A Sumo Logic account

## Setting up a Sumo Logic Collector

Before you can push test data from Sauce Labs to Sumo Logic, you must create a connector in Sumo Logic that can accept the push request.

### Choose or Add a Collector

1. From your Sumo Logic **Home** menu, choose **Manage Data** >> **Collection** from the navigation panel.
2. If you have an existing collector you'll use to receive push data, skip to [Configure a Source](#configure-a-source).
3. If you need to create a new collector, click the **Add Collector** link at the top right of the **Collection** screen.
4. Choose **Hosted Collector** in the pop-up.
5. Enter the collector details, as applicable:
    * **Name** - Providing a name for the Connector is the only requirement.
    * **Description** - Further distinguish the purpose or type of data collected, if you wish.
    * **Category** - Identifies the source, but is not necessary at this level because the generated source URL will overwrite this value.
    * **Fields/Metadata** - The Sauce Labs dashboard is pre-configured so creating [metadata field definitions](https://help.sumologic.com/Manage/Fields) is not applicable for this integration.
    * **Budget** - If you have defined an [ingest budget](https://help.sumologic.com/Manage/Ingestion-and-Volume/Ingest_Budgets) for your Sumo Logic data collections, you can choose the applicable budget for this collector.
    * **Time Zone** - Sets the default time zone to apply to log timestamps, but is not necessary at this level because the generated source URL will overwrite this value.
6. Click **Save**.
7. Click **OK** to [configure a source](#configure-a-source).


### Configure a Source

1. From your Sumo Logic **Home**, navigate to **Manage Data** >> **Collection**.
2. Choose the **Add Source** link to bring up the Source menu. _If you just created a new Collector, you will already be here._
3. Choose the **HTTP Logs and Metrics** source.

    <img src={useBaseUrl('img/integrations/sumo/http-source.png')} alt="Select HTTP Source" width="500"/>

4. Enter the source details, as applicable. In this case, you can accept the default values for most settings, but you must, at a minimum, provide the following:
    * **Name** - Name your source for easy identification.
    * **Source Category** - This is a unique classification of the data that is being received by the source. Since the Sauce Labs app retrieves VDC test data, an example for this value might be `saucelabs/tests/vdc`. This value is used to populate the panels of the Sauce Labs dashboard in Sumo Logic with the data pushed by the corresponding webhook.
5. Click **Save**.
6. The generated URL shown is the value you will need to provide to set up the Sauce Labs Sumo Logic webhook. You can copy it now or you can access it when you are ready by clicking the **Show URL** link for your source on your Sumo Logic Collection page.


## Enabling the Sumo Logic Integration in Sauce Labs

1. From your Sauce Labs account, navigate to the [Account Integrations](https://app.staging.saucelabs.net/integrations) page.
1. Click the Sumo Logic **Enable** button.
1. Provide the source URL from your Sumo Logic Sauce Labs collector.
1. Click **Save**.

Sauce Labs will now automatically push your VDC jobs data to the Sumo Logic collector.

:::note Multiple Data Centers
The Sumo Logic integration is specific to the data center that is active for your Sauce Labs account during setup. If you have access to multiple data centers, you must switch into each data center and repeat the Sumo Logic setup process in order to push jobs data from both data centers to your Sumo Logic collector.
:::

### Remove your Sumo Logic Integration

1. From your Sauce Labs account, navigate to the [Account Integrations](https://app.staging.saucelabs.net/integrations) page.
1. Click the Sumo Logic **Enable** button.
1. Click **Remove Configurations**.

Sauce Labs will no longer push your VDC jobs data to the Sumo Logic collector.

## Installing the Sauce Labs App in Sumo Logic

1. From your Sumo Logic **Home**, choose **App Catalog** from the navigation panel.
1. Use the search bar to find and click the Sauce Labs app.
1. Click **Add Integration** to install the Sauce Labs app to your Sumo Logic account, which will add the **Sauce Labs - VDC** dashboard to your directory.
1. Click on the dashboard to view your Sauce Labs VDC metrics.

<img src={useBaseUrl('img/integrations/sumo/sl-sumo-dash.png')} alt="Sauce Labs Dashboard in Sumo" width="800"/>
