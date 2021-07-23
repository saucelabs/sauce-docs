---
id: splunk
title: "Connectors: Splunk"
sidebar_label: Splunk
keywords:
    - api-testing
    - integrations
    - splunk
    - connectors
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Using the connector, you can send test execution information to Splunk then use that data to create visualizations.  
  
Below is a quick guide to setting up and using the Splunk connector.

:::note
This connector does not come pre-loaded out of the box for self-hosted/on-premises, and will need to be loaded separately. To learn how to load the connector into your API Fortress instance [click here.](/api-testing/mark2/integrations/add-new-connector)  
:::

## Configure the Connector

Note: You can click on the screenshots to zoom in.

1. Access the company dashboard by clicking the gear icon in the top right corner  
   <img src={useBaseUrl('img/api-fortress/2020/04/1.-splunk-settings.png')} alt="1.-splunk-settings.png"/>
    
2. Click on “Alert Groups”  
   <img src={useBaseUrl('img/api-fortress/2020/04/2.-splunk-alert-groups.png')} alt="2.-splunk-alert-groups.png"/>
    
3. Create a new group or add a connector to an existing alert group  
   <img src={useBaseUrl('img/api-fortress/2020/04/3.-splunk-add-connector-to-group.png')} alt="3.-splunk-add-connector-to-group.png"/>
   
4. Add a new connector  
   <img src={useBaseUrl('img/api-fortress/2020/04/4.-add-new-connector-1.png')} alt="4.-add-new-connector-1.png"/>
   
5. Choose the Splunk connector  
   <img src={useBaseUrl('img/api-fortress/2020/04/5.-choose-splunk.png')} alt="5.-choose-splunk.png"/>

6. Configure the connector  
   <img src={useBaseUrl('img/api-fortress/2020/04/6.-configure-splunk-connector.png')} alt="6.-configure-splunk-connector.png"/>
   1. `url` - this is the url for "http event collector" generated in [Splunk platform](https://docs.splunk.com/Documentation/SplunkCloud/8.0.2003/Data/UsetheHTTPEventCollector#Configure\_HTTP\_Event\_Collector\_on\_self-service\_Splunk\_Cloud). Please include the port number in the url, but do not include the endpoint.  
   2. `hec_token` - this is the token generated for the "http event collector"  
          
7. Go into project settings for a project you would like Splunk connector set up for  
   <img src={useBaseUrl('img/api-fortress/2020/04/7.-splunk-project-settings.png')} alt="7.-splunk-project-settings.png"/>

8. Add the alert group that contains your Splunk connector to this project  
   <img src={useBaseUrl('img/api-fortress/2020/04/8.-splunk-add-alert-group-to-proj.png')} alt="8.-splunk-add-alert-group-to-proj.png"/>

## Example Use Case

You can create a dataset table of your executions like so:  
<img src={useBaseUrl('img/api-fortress/2020/04/9.-dataset-table.png')} alt="9.-dataset-table.png"/>

You can also use the data to create visualizations like below:  
<img src={useBaseUrl('img/api-fortress/2020/04/9.-dashboard-chart.png')} alt="9.-dashboard-chart.png"/>
 
In this example, you can see all the tests executed, and the "blue" bar is the total number of successful runs whereas the "green" bar shows the total number of failed runs.  

### Video Example

You can also watch a video walk through of the integration below.

[![Splunk Video](https://i.imgur.com/Qx7hMPk.png)](https://player.vimeo.com/video/414869023 "Splunk Video - Click to Watch!")
