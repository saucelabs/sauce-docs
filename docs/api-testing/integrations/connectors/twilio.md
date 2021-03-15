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
  
Below is a quick guide to setting up and using the Twilio connector.  
  
:::note
This connector does not come pre-loaded out of the box for self-hosted/on-premises, and will need to be loaded separately. To learn how to load the connector into your API Fortress instance [click here.](/api-testing/integrations/add-new-connector)  
:::  

1. Go to settings page
   <img src={useBaseUrl('img/api-fortress/2020/01/Cogwheel-1.png')} alt="CogWheel"/>
2. Click on “Alert Groups”
   <img src={useBaseUrl('img/api-fortress/2020/01/AlertGroup.png')} alt="AlertGroup.png"/>
3. Create a new group or add a connector to an existing alert group  
   <img src={useBaseUrl('img/api-fortress/2020/02/twilio_alertgroup.png')} alt="twilio_alertgroup.png"/>
4. Add a new connector  
   <img src={useBaseUrl('img/api-fortress/2020/02/twilio_newconnector.png')} alt="twilio_newconnector.png"/>
5. Choose the Twilio connector  
   <img src={useBaseUrl('img/api-fortress/2020/02/twilio_connector.png')} alt="twilio_connector.png"/>
6. Configure the connector  
   <img src={useBaseUrl('img/api-fortress/2020/02/twilio_configconnector.png')} alt="twilio_configconnector.png"/>
   
   1. `credential`s: the api credentials for Twilio. Please use the format:  `AccountSID:AuthToken`.  
   2. `from`: this is the number you own in Twilio where the messages and calls will originate from. Please use the format: `"+(country\_code)#######" i.e. +15555555555`
      <img src={useBaseUrl('img/api-fortress/2020/02/twilio_creds.png')} alt="twilio_creds.png"/>
   3. `to`: this the number you would like to receive the messages and calls. Please use the format: `"+(country\_code)#######" i.e. +15555555555`
    
7. Go into project settings for a project you would like PagerDuty alerts set up for
   <img src={useBaseUrl('img/api-fortress/2020/01/Settings.png')} alt="Settings"/>
8. Add the alert group that contains your Twilio connector to this project  
   <img src={useBaseUrl('img/api-fortress/2020/02/Screen-Shot-2020-02-28-at-12.14.54-PM.png')} alt="screenshot"/>

