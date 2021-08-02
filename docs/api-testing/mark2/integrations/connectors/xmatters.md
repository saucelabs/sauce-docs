---
id: xmatters
title: "Connectors: xMatters"
sidebar_label: xMatters
keywords:
    - api-testing
    - integrations
    - xmatters
    - connectors
---

import useBaseUrl from '@docusaurus/useBaseUrl';

This connection with xMatters allows you to notify on-call responders based on failures in your API Fortress tests. Send critical information on the failure as well as a link to the test report from the failed test.  
  
Below is a quick guide to setting up and using the xMatters connector.  
  
:::note
This connector does not come pre-loaded out of the box for self-hosted/on-premises, and will need to be loaded separately. To learn how to load the connector into your API Fortress instance [click here.](/api-testing/mark2/integrations/add-new-connector)  
:::   

1. Go to settings page
   <img src={useBaseUrl('img/api-fortress/2020/01/Cogwheel-1.png')} alt="CogWheel"/>
2. Click on “Alert Groups”
   <img src={useBaseUrl('img/api-fortress/2020/01/AlertGroup.png')} alt="AlertGroup.png"/>
3. Create a new group or add a connector to an existing alert group  
   <img src={useBaseUrl('img/api-fortress/2020/02/xmatters_alertgroup.png')} alt="xmatters_alertgroup.png"/>
4. Add a new connector  
   <img src={useBaseUrl('img/api-fortress/2020/02/xmatters_newconnector.png')} alt="xmatters_newconnector.png"/>
5. Choose the xMatters connector  
   <img src={useBaseUrl('img/api-fortress/2020/02/xmatters_connector.png')} alt="xmatters_connector.png"/>
6. Configure the connector  
   <img src={useBaseUrl('img/api-fortress/2020/02/Screen-Shot-2020-02-28-at-11.28.38-AM.png')} alt="screenshot"/>

   1. `trigger_url` is the url found in your "inbound integration" settings for your workflow:  
   <img src={useBaseUrl('img/api-fortress/2020/02/xmatters_trigger.png')} alt="xmatters_trigger.png"/>
   2. `recipients` are the users or groups you would like alert in your xMatters instance. (ex: `userid1`,`userid2` or `groupid`)  
   3. The base URL for your API Fortress instance should be in the constant "API Fortress Base URL" this will be used to build the url for your test report link.
7. Go into project settings for a project you would like xMatters alerts set up for
   <img src={useBaseUrl('img/api-fortress/2020/01/Settings.png')} alt="Settings.png"/>
8. Add the alert group that contains your xMatters connector to this project  
   <img src={useBaseUrl('img/api-fortress/2020/02/Screen-Shot-2020-02-28-at-11.31.17-AM.png')} alt="screenshot.png"/>

