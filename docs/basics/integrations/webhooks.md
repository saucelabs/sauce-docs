---
id: webhooks
title: Webhooks Integration
sidebar_label: Webhooks
description: Setup a webhook to which Sauce Labs test results are automatically pushed.
keywords:
- get-test-results
- webhooks
- how-to
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<p><span className="sauceDBlue">COMING SOON</span></p>

The Sauce Labs Webhooks integration allows you specify a URL to which Sauce Labs will push test result data as it becomes available, rather than forcing you to constantly poll for updates.

## What You'll Need

* A Sauce Labs account (if you don't have one, start a [free trial](https://saucelabs.com/sign-up))
* Your Sauce Labs [Username and Access Key](https://app.saucelabs.com/user-settings)
* A URL able to consume events data pushed from Sauce Labs


## Install the Webhooks Plugin

1. From your Sauce Labs account, navigate to the [Account Integrations](https://app.staging.saucelabs.net/integrations) page.
1. Click the Webhooks **Install** button.
1. Enter the URL of the endpoint to which you would like Sauce Labs events pushed.
1. Select the events you wish to receive:
    * **VDC Events**: Receive test result events for jobs run on Sauce Labs desktop browsers and mobile emulators and simulators.
    * **RDC Events**: Receive test result events for jobs run on Sauce Labs real devices.
    * **Concurrency Usage**: Receive update events related to the number of sessions currently in use by your Sauce Labs organization and team.
1. Click **Save** to complete your integration.


<!-- Question1: Can any user go through the integration process multiple times to set up multiple webhooks? Will the Integrations page show the list of currently active webhooks? -->

<!-- Question2: Is this integration data center specific? -->

## Handle Event Data

Each of the three events to which you can subscribe push a data object to the webhook endpoint you have specified. You should configure your endpoint to:

* Accept a POST webhook request method from Sauce Labs
* Check the event object to validate its type and parse the payload contained in the request object
* Return a `2xx` success response to the request to close the call.

### VDC Event Payload

The VDC event includes the following data fields in the payload:

```
@property
    def status(self):
        return self.consolidated_status

    @property
    def data_type(self):
        return DataType.VDC_JOB.value

    def as_job_data(self, team_name: str) -> JobData:
        return JobData(
            id=self.id,
            creation_time=self.creation_time,
            modification_time=self.modification_time,
            owner=self.owner,
            owner_id=self.owner_id,
            org_id=self.org_id,
            team_id=self.team_id,
            team_name=team_name,
            group_id=self.group_id,
            status=self.status,
            passed=self.passed,
            name=self.name,
            browser_name=self.browser_name,
            browser_version=self.browser_version,
            os_name=self.os_name,
            os_version=self.os_version,
            duration_sec=self.duration_sec,
            visibility=self.visibility,
            tags=self.tags[:] if self.tags is not None else [],
            device=self.device,
            app=self.app,
            error=self.error,
            exception=self.exception,
            commit_id=self.commit_id,
            branch_name=self.branch_name,
            build=self.build,
            automation_backend=self.automation_backend,
            data_type=self.data_type,
        )

```

### RDC Event Payload

The RDC event includes the following data fields in the payload:

```
@property
   def id(self):
       return self.eventPayload["id"]

   @property
   def owner_id(self):
       return self.ownership["userId"]

   @property
   def team_id(self):
       return self.ownership["teamId"]

   @property
   def status(self):
       return self.eventPayload["status"]

   @property
   def data_type(self):
       return DataType.RDC_JOB.value

   def as_job_data(self, team_name: str) -> JobData:
       return JobData(
           id=self.eventPayload["id"],
           creation_time=self.eventPayload["creationTime"],
           modification_time=self.eventPayload["modificationTime"],
           owner=None,
           owner_id=self.ownership["userId"],
           org_id=self.ownership["orgId"],
           team_id=self.ownership["teamId"],
           team_name=team_name,
           group_id=self.ownership.get("groupIdd"),
           status=self.status,
           passed=None,
           name=self.eventPayload["name"],
           browser_name=None,
           browser_version=None,
           os_name=self.eventPayload.get("osName"),
           os_version=self.eventPayload.get("osVersion"),
           duration_sec=self.eventPayload.get("durationSec"),
           visibility=None,
           tags=[],
           device=self.eventPayload.get("deviceName"),
           app=None,
           error=None,
           exception=None,
           commit_id=None,
           branch_name=None,
           build=self.eventPayload.get("build"),
           automation_backend=self.eventPayload["automationBackend"],
           data_type=self.data_type,
       )

```

<!-- Question3: Did we implement the concurrency event? I did not see any data for it in GitLab. -->

### Concurrency Event Payload

The Concurrency event include the following data fields in the payload:
```
{
   "concurrency" : {
      "organization" : {
         "allowed" : {
            "mac_vms" : 1000,
            "rds" : 20,
            "vms" : 1000
         },
         "current" : {
            "mac_vms" : 0,
            "rds" : 0,
            "vms" : 0
         },
         "id" : "7fb25570b4064716b9b6daae1a846790"
      },
      "team" : {
         "allowed" : {
            "mac_vms" : 1000,
            "rds" : 20,
            "vms" : 100
         },
         "current" : {
            "mac_vms" : 0,
            "rds" : 0,
            "vms" : 0
         },
         "id" : "98b9f34e596047d99abba56f517846a9"
      }
   },
   "timestamp" : 1631125800.61984
}
```
