---
id: twilio
title: "Connectors: Twilio"
sidebar_label: Twilio
keywords:
    - api-testing
    - integrations
    - twilio
    - connectors
---

import useBaseUrl from '@docusaurus/useBaseUrl';

With the connection to Twilio you can send text and call alerts to your team. Send critical information on the test failure as well as a link to the test report from the failed test.  

## Connector Setup

Below is a quick guide to setting up and using the Twilio connector.  
  
:::note
This connector does not come pre-loaded out of the box for self-hosted/on-premises, and will need to be loaded separately. To learn how to load the connector into your API Fortress instance [click here.](/api-testing/mark2/integrations/add-new-connector)  
:::  

### Step 1: Create an Alert Group

1. Go to settings page by clicking on the gear icon in the upper right-hand corner
   <img src={useBaseUrl('img/api-fortress/2020/01/Cogwheel-1.png')} alt="CogWheel"/>
1. Click on **Alert Groups** on the left-hand nav bar:
   <img src={useBaseUrl('img/api-fortress/2020/01/AlertGroup.png')} alt="AlertGroup.png"/>
1. Create a new group or select an existing alert group
   <img src={useBaseUrl('img/api-fortress/2020/02/twilio_alertgroup.png')} alt="twilio_alertgroup.png"/>
1. Add a new connector by selecting ** + Connector to this group**
   <img src={useBaseUrl('img/api-fortress/2020/02/twilio_newconnector.png')} alt="twilio_newconnector.png"/>

### Step2: Configure the Connector

1. Choose the **Twilio** connector from the dropdown menu  
   <img src={useBaseUrl('img/api-fortress/2020/02/twilio_connector.png')} alt="twilio_connector.png"/>
1. The connector configuration page now appears 
   <img src={useBaseUrl('img/api-fortress/2020/02/twilio_configconnector.png')} alt="twilio_configconnector.png"/>
   Configure the connector with the following params:
   
   1. `credential`s: the api credentials for Twilio. Please use the format:  `AccountSID:AuthToken`.  
   2. `from`: this is the number you own in Twilio where the messages and calls will originate from. Please use the format: `"+(country_code)#######" i.e. +15555555555`
      <img src={useBaseUrl('img/api-fortress/2020/02/twilio_creds.png')} alt="twilio_creds.png"/>
   3. `to`: this the number you would like to receive the messages and calls. Please use the format: `"+(country_code)#######" i.e. +15555555555`

### Step 3: Set Up Alerts

7. Go into project settings for a project you would like Twilio alerts set up for
   <img src={useBaseUrl('img/api-fortress/2020/01/Settings.png')} alt="Settings"/>
8. Add the alert group that contains your Twilio connector to this project  
   <img src={useBaseUrl('img/api-fortress/2020/02/Screen-Shot-2020-02-28-at-12.14.54-PM.png')} alt="screenshot"/>

