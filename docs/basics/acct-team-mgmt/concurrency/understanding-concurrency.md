---
id: understanding-concurrency
title: Understanding Concurrency
sidebar_label: Understanding Concurrency
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Your subscription to the Sauce Labs Virtual Cloud or Real Device Cloud entitles you to run a certain amount of concurrent tests as many times as you like within a given region. In essence, this means you pay for the ability to run at your peak needs and you can run at that as frequently as you like. Your concurrency can be used for both automated and live testing.

## Virtual Cloud Concurrency

Concurrency for the Virtual Cloud is defined at two levels, the organization and the team level. 

To view your organizations concurrency limit:

1. In Sauce Labs, click **ACCOUNT** and then click **Organization Management**.

<img src={useBaseUrl('img/team-mgmt/team-mgmt-nav.png')} alt="Organization management navigation" width="300"/>

2. On the **Organization Management** page, under the ORGANIZATION NAME box, concurrency limits will be displayed for the selected data center. 

3. To view the limits for another data center, in the upper-right corner of the window, click the **DATA CENTER** dropdown and select the relevant data center.

<img src={useBaseUrl('img/team-mgmt/ccy-data-center-dropdown.png')} alt="Data Center dropdown" width="250"/>

To view the concurrency for a given team

4. On the **Organization Management** page, click the **TEAMS** tab. **Team VM Concurrency** and **Peak VM Concurrency** will be displayed for each team in the organization.

### Exceeding Virtual Cloud Concurrency

The Virtual Cloud is used to run business critical pipelines across large enterprise organizations. This means there will be times when it is difficult to predict exactly how much concurrency you will need at all times. For these situations we allow your organization to exceed it's concurrency limit. 

The following table describes the maximum amount you are allowed to exceed your concurrency limit.

| Subscription Amount | % You Can Exceed | Example | 
|---------------------|-----------------|---------|
|1-100| 200%| 50 -> 150|
|101-500|100%|200 -> 400|
|501-2000|50%|1000 -> 1500|
|2001+|10%|2500 -> 2750|

Once your organization attempts to run a test past the maximum amount you can exceed your tests will receive a [You've Exceeding Your Concurrency Limit Error](/dev/error-messages/#youve-exceeded-your-sauce-labs-concurrency-limit)

To learn more about how to manage your concurrency, including setting team limits and receiving usage notifications, please read [Managing Concurrency](/basics/acct-team-mgmt/concurrency/managing-concurrency/)


## Real Device Cloud Concurrency

If your subscription includes access to our Public Real Device Cloud, then your subscription quantity equals the amount of concurrent tests that can be run on Sauce Labs real devices.

To view your organizations concurrency limit:

1. In Sauce Labs, click **ACCOUNT** and then click **Organization Management**.

<img src={useBaseUrl('img/team-mgmt/team-mgmt-nav.png')} alt="Organization management navigation" width="300"/>

2. On the **Organization Management** page, under the ORGANIZATION NAME box, concurrency limits will be displayed for the selected data center. 

3. To view the limits for another data center, in the upper-right corner of the window, click the **DATA CENTER** dropdown and select the relevant data center.

<img src={useBaseUrl('img/team-mgmt/ccy-data-center-dropdown.png')} alt="Data Center dropdown" width="250"/>

### Exceeding Real Device Public Cloud Concurrency

If your organization attempts to run more tests than your subscription permits then your tests will be queued until an available concurrency slot becomes available. Your request for a device will queue for up to 15 minutes by default and it can be configured up to a maximum of 30 minutes by adjusting your [Test Configuration Options] (/dev/test-configuration-options).

For example, if you have a Public Real Device Cloud concurrency limit of 5 and you attempt to run 10 tests, 5 of the tests will run immediately and the other 5 will be queued until one of the other tests finishes.

