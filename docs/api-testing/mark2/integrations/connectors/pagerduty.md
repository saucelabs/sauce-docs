---
id: pagerduty
title: "Connectors: PagerDuty"
sidebar_label: PagerDuty
keywords:
    - api-testing
    - integrations
    - pagerduty
    - connectors
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Below are some "API Fortress + PagerDuty" integration benefits:

- Notify on-call responders based on failures in your API Fortress tests.
- Send critical information on the failure as well as a link to the test report from the failed test.
- Create high and low urgency incidents based on the severity of the failure via dynamic tags in the test.

  
:::note
This connector does not come pre-loaded out of the box, and will need to be loaded separately. To learn how to load the connector into your API Fortress instance [click here.](/api-testing/mark2/integrations/add-new-connector)  
:::

## Connector Setup 

This connector is built and supported by API Fortress. If you need any help with this connector please reach out to API Fortress support at [support@saucelabscom](mailto:support@saucelabs.com).  

### Step 1: Create an Alert Group

1. Go to settings page by clicking on the gear icon in the upper right-hand corner
   <img src={useBaseUrl('img/api-fortress/2020/01/Cogwheel-1.png')} alt="Cogwheel-1.png"/>

1. Click on **Alert Groups** on the left-hand nav bar:
   <img src={useBaseUrl('img/api-fortress/2020/01/AlertGroup.png')} alt="AlertGroup.png"/>

1. Create a new group or select an existing alert group
   <img src={useBaseUrl('img/api-fortress/2020/01/Connector.png')} alt="Connector.png"/>
   
1. Add a new connector by selecting ** + Connector to this group**
   <img src={useBaseUrl('img/api-fortress/2020/01/ConnectorNew.png')} alt="ConnectorNew.png"/>

### Step2: Configure the Connector

1. Choose the **PagerDuty** connector from the dropdown menu
   <img src={useBaseUrl('img/api-fortress/2020/01/PickPagerDuty.png')} alt="PickPagerDuty.png"/>

1. The connector configuration page now appears
   <img src={useBaseUrl('img/api-fortress/2019/08/Screen-Shot-2019-08-12-at-4.13.53-PM.png')} alt="Screen-Shot-2019-08-12-at-4.13.53-PM.png"/>
   Configure the connector with the following params:
   
    1. `routing_key` is the integration key generated for a service in PagerDuty. The `routing_key` can be generated as such:
        1. click on the service you would like to alert, and click on the "Integrations tab"
        2. Use an existing integration or create a new one specifically for API Fortress. The integration key provided is the `"routing_key"`
           <img src={useBaseUrl('img/api-fortress/2019/08/Screen-Shot-2019-08-12-at-4.48.09-PM.png')} alt="Screen-Shot-2019-08-12-at-4.48.09-PM.png"/>
    2. `severity` is the level the alert should be sent as. (critical, error, warning, and info)              
    3. `dedup_key` is a key that will allow to you match a triggered alert with a response for that alert   
    4. `event_action` is the action you would like the alert to take. (trigger, acknowledge, and resolve)
    
### Step 3: Set Up Alerts

1. Go into project settings for a project you would like PagerDuty alerts set up for
   <img src={useBaseUrl('img/api-fortress/2020/01/Settings.png')} alt="Settings.png"/>
1. Add the alert group that contains your PagerDuty connector to this project
   <img src={useBaseUrl('img/api-fortress/2019/08/Screen-Shot-2019-08-12-at-4.43.16-PM.png')} alt="screenshot.png"/>

## Video Example

Watch a quick video tutorial of the integration below:

[![PagerDuty Video](https://i.imgur.com/6vZV6wr.png)](https://player.vimeo.com/video/390023384 "PagerDuty Video - Click to Watch!")