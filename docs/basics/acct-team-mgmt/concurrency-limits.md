---
id: concurrency-limits
title: Concurrency Limits and Team Accounts
sidebar_label: Concurrency Limits and Team Accounts
---

import useBaseUrl from '@docusaurus/useBaseUrl';


If your organization has multiple teams sharing a Sauce Labs account, it's important to monitor your concurrency limits--the number of virtual machines that you can run tests on simultaneously. You'll need to ensure that your organization's concurrency is distributed among your accounts.

If you are an org admin, you can view your organization's concurrency limits:
1. In Sauce Labs, click **ACCOUNT** and then click **Team Management**.

  <img src={useBaseUrl('img/team-mgmt/team-mgmt-nav.png')} alt="Team management navigation" width="300"/>

2. On the **Organization Management** page, under the ORGANIZATION NAME box, concurrency limits will be displayed for the selected data center. You can also view the **PEAK VM CONCURRENCY** and **VM TESTS BY DAY** for the organization.

  <img src={useBaseUrl('img/team-mgmt/ccy-limits-org-mgmt.png')} alt="Org management concurrency limits" width="600"/>

3. To view the limits for another data center, in the upper-right corner of the window, click the **DATA CENTER** dropdown and select the relevant data center.

  <img src={useBaseUrl('img/team-mgmt/ccy-data-center-dropdown.png')} alt="Data Center dropdown" width="250"/>

4. On the **Organization Management** page, click the **TEAMS** tab. **Team VM Concurrency** and **Peak VM Concurrency** will be displayed for each team in the organization.

  <img src={useBaseUrl('img/team-mgmt/ccy-limits-teams.png')} alt="Team concurrency limits" width="600"/>

For more information about usage, see [Viewing and Exporting Usage Data](/basics/acct-team-mgmt/viewing-exporting-usage-data/).

## How Concurrency Limits Work
Through Sauce Labs, organization admins set the total concurrency of their organization's account. When setting the concurrency limit for a team, be mindful that team members share the concurrency limit of the team. If a team exceeds its concurrency limit, any additional tests will be queued (see [Queueing Tests](#queueing-tests) for more information).

#### Example - Org Limits
An organization has a total concurrency of 500 VMs. Team A has a concurrency limit of 250, and Team B has a concurrency limit of 350.

When Team A is using all 250 concurrency slots, that only leaves 250 of the organization's slots open. Even though Team B has a concurrency limit of 350, it will only be able to use the 250 remaining slots until Team A's tests finish.

#### Example - Team Limits
An org admin allocates 100 VMs to Team A, which has five members. Since the members of a team share the team's VM limit, the number of concurrent tests being run by the five team members cannot exceed 100. However, concurrency limits cannot be set at the user level, so User A could be running 20 tests, while user B is running 50 tests, and users C, D, and E are running 10 tests each. Or User A could be running 100 tests while Users B, C, D, and E are not running any tests.

## Queueing Tests
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
