---
id: statuspage
title: "Connectors: StatusPage"
sidebar_label: StatusPage
keywords:
    - api-testing
    - integrations
    - statuspage
    - connectors
---

import useBaseUrl from '@docusaurus/useBaseUrl';

This connector allows you to connect your API Fortress instance with your StatusPage instance. When a test fails the connector will open an incident in StatusPage, the next time that same test runs and passes the connector will resolve the incident in StatusPage.

:::note
This connector does not come pre-loaded out of the box for self-hosted/on-premises, and will need to be loaded separately. To learn how to load the connector into your API Fortress instance [click here.](/api-testing/mark2/integrations/add-new-connector)  
:::

## What You'll Need
What you will need from your Status page account is the 

* Page ID
* the API key 

Both can be found by logging into your StatusPage account and going to the manage account page. Then click on the tab names "API":

<img src={useBaseUrl('img/api-fortress/2019/08/Screen-Shot-2019-08-29-at-2.25.35-PM.png')} alt="screenshot"/>

## Configure
Next we will configure the connector in API Fortress:

<img src={useBaseUrl('img/api-fortress/2020/03/ezgif.com-gif-maker-1.gif')} alt="gif"/>

Don't forget to add the alert group the project you want the connector to work for:  
  
<img src={useBaseUrl('img/api-fortress/2020/03/ezgif.com-gif-maker-2.gif')} alt="gif"/>
