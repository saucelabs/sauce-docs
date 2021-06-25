---
id: webhooks
title: Webhooks Integration with Visual E2E Testing
sidebar_label: Webhooks
---

Webhooks provide the option to notify your web server when a test is completed. They can be used to trigger external processes, CI builds, or even deploy to production. You can specify one or more callback URLs to be requested.

## Adding Webhooks

1. To add a webhook, you will first need to navigate to the Dashboard page.
2. Hover over the **Integrations** > Click on **Webhooks**.
3. Add a URL that Screener will post to when a test run is completed.
4. Click **Add Webhook** to add it to the list. Click **Save**.

When a test run is completed, Screener will send a HTTP POST request to the URL(s) you've added as webhooks. The payload for the POST will contain information about the test run.

Sample Request Data:

```java
{
  "project":"My Project",
  "projectId":"123bb29fb014b6636000000c",
  "group":"Login Smoke-test",
  "groupId":"222b229fb014b66360000008",
  "name":"Firefox",
  "resolution":"1280x1024",
  "environment":"Prod",
  "start":"2014-09-06T00:41:42.499Z",
  "end":"2014-09-06T00:47:12.802Z",
  "status":"complete",
  "url":"https://screener.io/app/dashboard/123bb29fb014b6636000000c/222b229fb014b66360000008",
  "totals": {
    "new": 6,
    "changed": 3,
    "accepted": 7,
    "rejected": 0,
    "all": 16
  }
}
```

:::tip
To trigger webhooks only when changes are found, then append the following query-string to your webhook URL:
:::

```
?screener.filter.hasChanges=true
```
