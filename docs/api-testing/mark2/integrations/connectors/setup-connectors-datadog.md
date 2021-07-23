---
id: datadog
title: "Connectors: DataDog"
sidebar_label: DataDog
keywords:
    - api-testing
    - integrations
    - datadog
    - connectors
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Here is a quick guide to setting up a [DataDog](http://www.datadog.com) integration.

:::tip Import a Connector
To learn how to import a connector [click here](/api-testing/mark2/integrations/add-new-connector) 
:::

1. First, we need to generate a new API key in DataDog.
    1. Log in to your DataDog account.
    2. Mouse-over Integrations and then click API
    3. Create a new API key at the top of the view (Note: You must have Admin DataDog account access.)

<img src={useBaseUrl('img/api-fortress/2018/07/datadog.gif')} alt="datadog.gif"/>

1. In API Fortress go to company settings (top right gear icon)
2. Click on _Alert Groups_
3. Create a new Alert Group (if necessary)
4. Add recipients to the Alert Group (if necessary)
5. Click on the _Connectors_ icon
6. Choose one of the DataDog connectors from the dropdown
7. Add your DataDog API Key created previously and the DataDog host you wish the connector to pass data to.

<img src={useBaseUrl('img/api-fortress/2018/07/connector.gif')} alt="connector.gif"/>

Once this process is complete, API Fortress will begin passing data to DataDog where it can be charted in any way you like!

:::note
This connector shares events with Datadog, which are outages. If you would like to include performance metrics, such as latency and fetch, please let us know and we can help set that up. It requires a small script.
:::