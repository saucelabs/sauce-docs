---
id: elastic-kibana
title: "Connectors: Elastic/Kibana"
sidebar_label: "Elastic/Kibana"
keywords:
    - api-testing
    - integrations
    - elastic
    - kibana
    - connectors
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Using the Elastic connector you can send failure information to Elasticsearch then use that data to create visualizations in Kibana.  
  
Below is a quick guide to setting up and using the Elastic connector.

:::note
This connector does not come pre-loaded out of the box, and will need to be loaded separately. To learn how to load the connector into your API Fortress instance [click here.](/api-testing/mark2/integrations/add-new-connector)  
:::

## Configure the Connector

1. Access the company dashboard by clicking the gear icon in the top right corner
2. Select "Alert groups"
3. Create a new alert group if you don’t have already one for this purpose
4. Select the socket icon
5. Select "+ Connector to this group"
6. Select "Elastic" from the list
7. Enter the required settings
    1. **username:** The username for basic authentication
    2. **password:** The password for basic authentication.
    3. **baseUrl**: The url to the Elasticsearch engine
8. Save
9. From the main dashboard, edit the “Settings” the project(s) you want to assign the alert group to if the group has not been assigned yet

<img src={useBaseUrl('img/api-fortress/2020/03/elasticgif.gif')} alt="elastic.gif"/>

## Example Use Case

### Sample Data:

Below is a sample of the data that will be pushed into Elasticsearch:

```json
{
   "date":"2017-12-29T14:36:31+0000",
   "eventId":"5a4aa0a1-d071-4a05-981d-ff57e4ff3897",
   "test":{
      "name":"book",
      "id":"123a"
   },
   "value2":"fake project",
   "value1":"book",
   "companyName":"fake company",
   "eventType":"failure",
   "criticalFailures":[
      {
         "action":"get",
         "expression":"get http://www.example.com",
         "status":"Generic Failure",
         "failureType":"MissingPropertyException",
         "extra":"Error parsing URL. Missing variable yay"
      }
   ],
   "companyId":1,
   "failuresCount":1,
   "location":"Ashburn,Virginia",
   "projectName":"fake project",
   "projectId":1
}
```

### Sample Visualization:

Once the data is in Elasticsearch, you can pull that data into Kibana and create visualizations for it. You can create many things using the data in the JSON above.
  
For example you could create a table to show all the test executions and their success or failure like so:  
<img src={useBaseUrl('img/api-fortress/2020/03/Screen-Shot-2020-03-24-at-10.46.10-AM.png')} alt="screenshot"/>

You can also chart the events and failures on a graph like this:  
<img src={useBaseUrl('img/api-fortress/2020/03/Screen-Shot-2020-03-24-at-10.46.18-AM.png')} alt="screenshot"/>

Then put it all together in a dashboard to make it really easy to monitor and track your test executions:  
<img src={useBaseUrl('img/api-fortress/2020/04/KibanaIntegrations_SS-docs.png')} alt="screenshot"/>

