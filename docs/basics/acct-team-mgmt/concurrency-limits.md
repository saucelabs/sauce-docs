---
id: concurrency-limits
title: Concurrency
sidebar_label: Concurrency
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Concurrency Limits and Team Accounts

If your organization has multiple teams sharing a Sauce Labs account, it's important to monitor your concurrency limits--the number of virtual machines that you can run tests on simultaneously. You'll need to ensure that your organization's concurrency is distributed among your accounts.

### How Concurrency Limits Work
Through Sauce Labs, organization admins set the total concurrency of their organization's account. When setting the concurrency limit for a team, be mindful that by default, each team member will inherit the concurrency limit of the entire team. If there are enough members on that team, their combined concurrency allocation could easily consume the concurrency allocation for the entire organization.

Teams use concurrency slots from their organization's total pool. Because of this, it's possible to have other users consuming slots you are trying to use.

#### Example
An organization has a concurrency limit of 10. Team A has a concurrency limit of 5, and Team B has a concurrency limit of 7.

When Team A is using all 5 concurrency slots, that only leaves 5 of the organization's slots open. Even though Team B has a concurrency limit of 7, it will only be able to use the 5 remaining slots until Team A's tests finish.

#### Example
In the diagram below, OrgX has a total concurrency of 100 VMs, and the org admin allocates 20 VMs to their Apps Team, which has five members. Since the members of a team share the total number of VMs, each member **can** run 20 VMs at the same time, but that would max out the organization's 100 VM limit. To avoid this scenario, you can set the concurrency limit for each team member to 4, so that if all members run tests at the same time, they'd be running 20 VMs in total.

<img src={useBaseUrl('img/team-mgmt/concurrency-allocation-diagram.jpg')} alt="Concurrency allocation diagram" width="600"/>

### Queuing Tests
As tests complete, queued tests are allocated to concurrency slots in the order they were queued.

If you run more tests at once than your concurrency allows (e.g., you have a concurrency of 100 but send 200 tests at once), the extra tests will be queued and run as the first tests finish. A test is only allowed to remain in the queue for 10 minutes. If it has not been moved out of the queue before 10 minutes elapse, or if too many tests are already queued, the test is removed from the queue and not run at all.  

Queuing is intended to deal with small mistakes in concurrency management. Sauce Labs does not recommend queuing tests intentionally.

## Checking Concurrency

You can use the [Get User Concurrency](/dev/api/accounts/#get-user-concurrency) API endpoint to retrieve a specific user's concurrency usage compared with their organization and team concurrency allowances.

```jsx title="Sample Concurrency Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.us-west-1.saucelabs.com/rest/v1.2/users/<username>/concurrency' \
--header 'Content-Type: application/json' \ | json_pp
```
