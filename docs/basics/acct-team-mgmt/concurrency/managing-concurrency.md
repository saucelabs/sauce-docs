---
id: managing-concurrency
title: Managing Concurrency
sidebar_label: Managing Concurrency
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Managing your concurrency throughout your organization is an important aspect of administering your Sauce Labs account. We provide multiple options to make it easy for you to optimize your usage and enable your releases to go out smoothly.

#### Setting Parallel Limits in Common Frameworks
The first and foremost way to manage how many concurrent tests to run on Sauce Labs is to use the out of the box mechanisms available in your test framework. For convenience we have included some of the more populare frameworks below but please consult the documentation for your specific framework to learn more.

<Tabs>
<TabItem value="Maven" label="Maven" default>

</TabItem>
<TabItem value="Webdriver" label="webdriver.io" default>

</TabItem>
</Tabs>

#### Usage Reporting & Notifications
Sauce Labs provides you robust mechanisms to inspect your organization's usage. This includes seeing your organization wide usage over time and a team breakdown. To learn more see [Usage Report](/insights/usage-report).

We also provide notification mechanisms to alert you when your organization is reaching its subscription amount. To learn more about these see [Usage Notifications](/insights/usage-report).

#### Team Management

<p><span className="sauceGreen">Enterprise Plans only</span></p>

If your organization has multiple teams sharing a Sauce Labs account, you can use Team Limits to ensure that your organization's concurrency is distributed among different teams.

If you are an org admin, you can view and control your organization's concurrency limits:

1. In Sauce Labs, click **ACCOUNT** and then click **Organization Management**.

<img src={useBaseUrl('img/team-mgmt/team-mgmt-nav.png')} alt="Organization management navigation" width="300"/>

2. On the **Organization Management** page, under the ORGANIZATION NAME box, concurrency limits will be displayed for the selected data center. 

3. To view the limits for another data center, in the upper-right corner of the window, click the **DATA CENTER** dropdown and select the relevant data center.

<img src={useBaseUrl('img/team-mgmt/ccy-data-center-dropdown.png')} alt="Data Center dropdown" width="250"/>

4. On the **Organization Management** page, click the **TEAMS** tab. **Team VM Concurrency** and **Peak VM Concurrency** will be displayed for each team in the organization.

<img src={useBaseUrl('img/team-mgmt/ccy-limits-teams.png')} alt="Team concurrency limits" width="600"/>

For more usage information, see [Viewing and Exporting Usage Data](/basics/acct-team-mgmt/viewing-exporting-usage-data/).

5. To allocate concurrency to teams, click on the team name to open the Teams tab.

6. Under the Teams tab, Enter **Team VM Concurrency** and click on Update.

For an example, let's say the organization admin allocates 100 VMs to Team A, which has five members. Since the members of a team share the team's VM limit, the number of concurrent tests being run by the five team members cannot exceed 100. However, concurrency limits cannot be set at the user level, so User A could be running 20 tests, while user B is running 50 tests, and users C, D, and E are running 10 tests each. Or User A could be running 100 tests while Users B, C, D, and E are not running any tests.

#### Concurrency API

In some cases you might want to configure your test framework to dynamically pull real time information about your organization and teams concurrency usage. 

You can use the [Get User Concurrency](/dev/api/accounts/#get-user-concurrency) API endpoint to retrieve a specific user's concurrency usage compared with their organization and team concurrency allowances.

```jsx title="Sample Concurrency Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.us-west-1.saucelabs.com/rest/v1.2/users/<username>/concurrency' \
--header 'Content-Type: application/json' \ | json_pp
```