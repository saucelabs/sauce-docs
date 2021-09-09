---
id: concurrency-limits
title: Concurrency Limits and Team Accounts
sidebar_label: Concurrency Limits and Team Accounts
---

import useBaseUrl from '@docusaurus/useBaseUrl';

If your organization has multiple teams sharing a Sauce Labs account, it's important to monitor your concurrency limits--the number of virtual machines that you can run tests on simultaneously. You'll need to ensure that your organization's concurrency is distributed among your accounts, rather than allocating all of it to a single user.

## How Concurrency Limits Work
Only organization admins can set the total concurrency of their organization's Sauce Labs account. When setting the concurrency limit for a team or user, be mindful that by default, each team member will inherit the concurrency limits of that entire team. If there are enough members on that team, their combined concurrency allocation could easily consume the concurrency allocation for the entire organization.

In the diagram below, OrgX has a total concurrency of 100 VMs, and the org admin allocates 20 VMs to their Apps Team, which has five members. This means that each member can run 20 VMs at the same time and max out the organization's 100 VM limit. To avoid this scenario, set the concurrency limit for each Apps Team member to 4, so that if all members run tests at the same time, they'd be consuming 20 VMs.

<img src={useBaseUrl('img/team-mgmt/concurrency-allocation-diagram.jpg')} alt="Concurrency allocation diagram" width="600"/>

## Queuing Tests
Once you've used all of your concurrency slots, additional tests will not start until an existing test finishes. As tests complete, queued tests are allocated to concurrency slots in the order they were queued, however, we do not recommend queuing tests intentionally. Tests will time out with an error if they are queued for too long and/or if too many tests are already queued.

## Checking Concurrency

You can use the [Get User Concurrency](/dev/api/accounts/#get-user-concurrency) API endpoint to retrieve a specific user's concurrency usage compared with their organization and team concurrency allowances.

```jsx title="Sample Concurrency Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.us-west-1.saucelabs.com/rest/v1.2/users/<username>/concurrency' \
--header 'Content-Type: application/json' \ | json_pp
```
