---
id: alerts-thresholds-using-json-connector
title: "Alert Thresholds (Using JSON Connector"
sidebar_label: Alert Thresholds
keywords:
    - api-testing
    - integrations
    - alerts
    - json
    - connector
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The JSON Alert Connector sends information about a failure in JSON format and posts it to a given WebHook URL.

The JSON connector with the threshold variation does the same thing with a twist - rather than posting every event, it does so when the error rate exceeds a certain threshold. The connector has been designed to be used with services like [Zapier](https://zapier.com/) or [IFTTT](https://ifttt.com/). 

It can also work with other similar services, but those are two of the most popular ones.

## Configure the Connector

1. Access the company dashboard by clicking the gear icon in the top right corner
2. Select "Alert groups"
3. Create a new alert group if you don't have already one for this purpose
4. Select the socket icon
5. Select "+ Connector to this group"
6. Select "JSON Alert /w threshold" from the list
7. Enter the required settings
    1. **URL:** The URL of the WebHook the alert should be sent to.
    2. **Counter:** The number of **errors per specific test in a period** before the alert is actually sent out.
    3. **TTL**: The time frame, expressed in seconds. (Ex. 3 errors over a TTL of 600sec `[10 min]`)
8. Save
9. From the main dashboard, edit the "Settings" the project(s) you want to assign the alert group to if the group has not been assigned yet

## Behavior

The connector will collect errors for each specific test. When the first error occurs, the timer expressed by the TTL starts. When the error reaches the _counter_ number, the alert is sent and the timer resets.

The JSON sent will look like the following:

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

## Typical Use Cases

### Zapier - Webhook to Email

Configure a Zap triggered by a WebHook:

<img src={useBaseUrl('img/api-fortress/2017/12/zapier_1-1.png')} alt="zapier_1-1.png"/>

That URL is the one that needs to be used in the connector configuration screen.

Add a "Send Email" step, and configure it to use the retrieved data:

<img src={useBaseUrl('img/api-fortress/2017/12/zapier_2.png')} alt="zapier_2.png"/>

For this example, we used a template like this:

The test `"{{30468424__test__name}}"` for the project `"{{30468424__projectName}}"` Hit the maxium error threshold.

See a sample event by accessing:

```http request
https://mastiff.apifortress.com/app/web/events/details/{{30468424__eventId}}?cid={{30468424__companyId}}
```

Where `30468424` is the Zap ID.

### IFTTT - Webhook to Email

<img src={useBaseUrl('img/api-fortress/2017/12/ifttt_1.png')} alt="ifttt_1.png"/>

Create an Applet that gets triggered by a WebHook and configure it to send an email.