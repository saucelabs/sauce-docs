---
id: webhooks
title: Webhooks
sidebar_label: Webhooks
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Webhooks allow integration between Sauce Mobile App Distribution and your backend. Using these webhooks, you can subscribe for specific events and receive an HTTP POST request whenever such an event occurs.

You can use the webhooks when, for example, you'd like to receive a notification when a new build is uploaded and send it to the development team. Another example may be that you'd like to save the feedback received in your database or backend.

To configure webhooks, open the Webhooks tab in your [User Preferences](https://app.testfairy.com/settings/) page. You can configure more than one webhook, and each webhook applies to selected projects and selected events.

Sauce Mobile App Distribution automatically detects Slack endpoints and sends an appropriate payload. Follow the [Slack integration guide](/testfairy/integrations/slack).

## Supported Events

| Events   | Description                                                       |
| -------- | ----------------------------------------------------------------- |
| Upload   | Every time a build is uploaded by one of the team members         |
| Download | Every time a tester downloads a build via invitation link         |
| Crash    | Every time the app crashes                                        |
| Feedback | Every time a tester fills in feedback, whether it's in-app or web |

## Payload

The payload of the HTTP POST request is always JSON. The `event` field specifies the type of event, and all the others are specific for that type. Review the payload examples below for more information about each event's key/value pairs.

### Sample Payload for Upload Event

```json title='Sample Payload for Upload Event'
{
 "event": "upload",
 "timestamp": "2015-07-01 13:37:54",
 "version": "1.0",
 "build": 1,
 "appName": "Demo App",
 "filesize": 563876,
 "iconUrl": "https://testfairy.s3.amazonaws.com/icons/4/68348e8d8265771d64636e2d57bb9a672f812e1a.png",
 "communityUrl": "https://tsfr.io/myapp"
}
```

### Sample Payload for Download Event

```json title='Sample Payload for Download Event'
{
 "event": "download",
 "timestamp": "2015-07-01 13:37:54",
 "version": "1.0",
 "build": 1,
 "appName": "Demo App",
 "filesize": 563876,
 "buildUrl": "https://app.testfairy.com/projects/10-demoapp/builds/584120",
 "iconUrl": "https://testfairy.s3.amazonaws.com/icons/4/68348e8d8265771d64636e2d57bb9a672f812e1a.png",
 "testerEmail": "bob@corporation.com",
 "referer": "http://my.testfairy.com"
}
```

### Sample Payload for Crash Event

```json title='Sample Payload for Crash Event'
{
 "event": "crash",
 "timestamp": "2015-07-01 12:01:59",
 "version": "1.0",
 "build": 1,
 "appName": "Demo App",
 "filesize": 563876,
 "buildUrl": "https://app.testfairy.com/projects/10-demoapp/builds/584120",
 "iconUrl": "https://testfairy.s3.amazonaws.com/icons/4/68348e8d8265771d64636e2d57bb9a672f812e1a.png",
 "email": "felix@corporation.com",
 "deviceName": "Samsung Galaxy S2",
 "rawDeviceName": "samsung gt-i9100t",
 "crashMessage": "java.lang.NullPointerException",
 "ipAddress": "54.227.255.225"
}
```

### Sample Payload for Feedback Event

```json title='Sample Payload for Feedback Event'
{
 "event": "feedback",
 "timestamp": "2015-07-01 17:21:00",
 "version": "1.0",
 "build": 1,
 "appName": "Demo App",
 "filesize": 563876,
 "buildUrl": "https://app.testfairy.com/projects/10-demoapp/builds/584120",
 "iconUrl": "https://testfairy.s3.amazonaws.com/icons/4/68348e8d8265771d64636e2d57bb9a672f812e1a.png",
 "sessionUrl": "https://app.testfairy.com/projects/10-demoapp/builds/584120/sessions/1",
 "screenshotUrl": "https://app.testfairy.com/projects/10-demoapp/builds/584120/sessions/1/screenshots/d64636e2d57672f812e1a348e8.jpg",
 "correlationId": "user-95",
 "email": "alice@corporation.com",
 "rawDeviceName": "samsung gt-i9100t",
 "ipAddress": "54.227.255.225",
 "text": "App doesn't render nicely in landscape"
}
```
