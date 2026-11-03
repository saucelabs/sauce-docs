---
id: managing-concurrency
title: Managing Concurrency
sidebar_label: Managing Concurrency
description: Learn how organization, team, and platform concurrency limits work on Sauce Labs and how to view and set them.
keywords:
- concurrency
- concurrency limits
- team limits
- mac arm
- android arm
- organization management
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Your Sauce Labs subscription entitles you to run a set number of tests at the same time in each data center. This
is your concurrency: you pay for your peak parallel capacity and can run at that peak as often as you like.
Concurrency covers both automated and live testing. This page explains how organization, team, and platform limits
fit together, and how to view and set them.

## Concurrency Types

Sauce Labs tracks concurrency separately for each type of resource you test on.

| Type | What it covers |
| --- | --- |
| **Virtual Devices** (Total Concurrency) | Every virtual device test: Linux, Windows, Android x86 Emulators, and the Mac / iOS (x86), Mac / iOS (ARM), and Android (ARM) platforms below. |
| **Mac / iOS (x86)** | macOS desktop and iOS Simulator tests that run on Intel-based Mac virtual machines. |
| **Mac / iOS (ARM)** | macOS desktop and iOS Simulator tests that run on ARM-based (Apple silicon) Mac virtual machines. |
| **Android (ARM)** | Tests on ARM-based Android Emulators. |
| **Real Devices** | Tests on public Sauce Labs real devices. Private devices are managed separately. |
| **Visual Snapshot** | Sauce Visual regression testing and baseline captures. |

Mac / iOS (x86), Mac / iOS (ARM), and Android (ARM) are **platform limits**. A platform limit caps that platform
inside the Virtual Devices total. It doesn't add to it: every test that counts against a platform limit also counts
against Total Concurrency.

## How Concurrency Limits Work

Concurrency limits apply at up to three levels:

1. **Organization limits** come from your subscription and apply to everyone in your organization, per data center.
2. **Team limits** let an organization admin cap how much of the organization's concurrency a team can use.
   Team limits are available on Enterprise plans.
3. **Platform limits** cap how much of a team's Total Concurrency can go to a specific platform, such as
   Mac / iOS (ARM).

Keep the following rules in mind when you set limits:

- **Total Concurrency and Mac / iOS (x86) always need a value.** Every team has a Total Concurrency limit and a
  Mac / iOS (x86) limit.
- **An empty ARM limit means the organization limit applies.** If you leave a team's Mac / iOS (ARM) or
  Android (ARM) limit empty, the team can use up to the organization's limit for that platform. The **TEAMS** tab
  shows these values with a **default** label.
- **A team can't exceed its own limit.** If a team's limit is lower than the organization's, the team is capped at
  its assigned limit, even when the rest of the organization has unused concurrency.
- **A platform limit higher than the team's Total Concurrency has no effect.** Platform limits sit inside the team's
  total, so the team can never run more than its Total Concurrency limit on any one platform.
- **Team limits can add up to more than the organization limit.** Teams share the organization's pool, so the sum of
  all team limits can be higher than what your organization has purchased. The organization limit is always the
  overall ceiling.
- **Concurrency isn't limited per user.** Everyone on a team shares the team's limit.

### Example

Your organization has a Virtual Devices limit of 200, and a Mac / iOS (ARM) limit of 40.

- Team A has a Total Concurrency limit of 100 and a Mac / iOS (ARM) limit of 30. Team A can run up to 100 tests at
  once, and no more than 30 of them on ARM-based Mac virtual machines.
- Team B has a Total Concurrency limit of 150 and leaves Mac / iOS (ARM) empty. Team B can run up to 150 tests at
  once, and up to the organization's 40 on ARM-based Mac virtual machines.
- Together, the two teams are assigned 250, which is more than the organization's 200. That's allowed: the teams
  share the pool, and the organization limit of 200 still caps their combined usage.
- The five members of Team A share its limit of 100. User A could run 20 tests while User B runs 50 and Users C, D,
  and E run 10 each, or User A could run all 100 while the others run none.

## Controlling Parallelism in Your Test Framework

The first way to manage how many tests run at once is the parallelism setting in your test framework or test
runner. Set it at or below your available concurrency. For example, `saucectl` uses the
[`--ccy`](/dev/cli/saucectl/run/#--ccy) flag or the `concurrency` setting in your configuration file. For other
frameworks, see your framework's documentation on running tests in parallel.

## Usage Reporting

You can see your organization's usage over time, with a breakdown by team, in the
[Usage Report](/insights/usage-report). Compare your peak usage against your limits to decide whether to change
team limits.

## Viewing Your Organization's Concurrency Limits

<p><span className="sauceGreen">Enterprise Plans only</span></p>

If you're an organization admin, you can view your organization's concurrency limits on the
**Organization Management** page.

1. In Sauce Labs, click **ACCOUNT** and then click **Organization Management**.

   <img src={useBaseUrl('img/team-mgmt/team-mgmt-nav.png')} alt="Organization management navigation" width="auto"/>

2. Limits are shown for the selected data center. To view another data center, in the upper-right corner, click the
   **DATA CENTER** dropdown list and select it.

   <img src={useBaseUrl('img/team-mgmt/ccy-data-center-dropdown.png')} alt="Data Center dropdown" width="auto"/>

3. In the **Concurrency Limits** panel, review your limits:
   - **Virtual Devices**: your Total Concurrency, shown as **Max**, followed by your Mac / iOS (x86),
     Mac / iOS (ARM), and Android (ARM) limits.
   - **Real Devices**: your concurrency for public real devices.
   - **Visual Snapshot**: your Sauce Visual concurrency.

   To see usage for a resource type, click **View Usage** in its section. This opens the matching
   [Usage Report](/insights/usage-report).

   <img src={useBaseUrl('img/team-mgmt/ccy-limits-org-mgmt.png')} alt="Concurrency Limits panel showing Virtual Devices, Real Devices, and Visual Snapshot limits" width="700"/>

4. To see how your limits are divided among teams, click **Review Team Limits** in the upper-right corner of the
   panel.

## Viewing Team Concurrency Limits

<p><span className="sauceGreen">Enterprise Plans only</span></p>

On the **Organization Management** page, click the **TEAMS** tab. The table groups each team's limits and usage.

| Column group | Column | Description |
| --- | --- | --- |
| **Team Details** | **Team Name** | The team name, with the number of team members underneath. |
| **Real Device Concurrency Limit** | **Max Limit** | The most public real device tests the team can run at once. |
| **Virtual Device Concurrency Limits** | **Max Limit** | The team's Total Concurrency: the most virtual device tests the team can run at once. |
| | **Mac / iOS (x86)**, **Mac / iOS (ARM)**, **Android (ARM)** | The team's platform limits. |
| **Virtual Device Concurrency Usage (Last 28D)** | **Peak Usage vs Cap** | The highest number of virtual device tests the team ran at the same time in the previous 28 days, compared with its Max Limit, as a number, a percentage, and a bar. |
| | **Tests** | The number of tests the team ran in the previous 28 days. |

How values appear in the table:

- A value with a **default** label means the team has no limit of its own for that platform, so the organization
  limit applies.
- A value shown in orange is a platform limit that is higher than the team's Max Limit, so it has no effect. Hover
  over the value for details.

<img src={useBaseUrl('img/team-mgmt/ccy-limits-teams.png')} alt="TEAMS tab showing each team's real device and virtual device concurrency limits" width="700"/>

For more usage information, see [Viewing and Exporting Usage Data](/basics/acct-team-mgmt/viewing-exporting-usage-data/).

## Setting Team Concurrency Limits

<p><span className="sauceGreen">Enterprise Plans only</span></p>

You set a new team's limits when you [create the team](/basics/acct-team-mgmt/adding-deleting-teams#adding-teams).
To change an existing team's limits:

1. On the **Organization Management** page, click the **TEAMS** tab, and then click the name of the team.
2. Click the **CONCURRENCY LIMITS** tab. The tab has a **Virtual Devices** section and a **Real Devices** section,
   and each one is saved separately. The limits shown are for the data center named in each section.

   <img src={useBaseUrl('img/team-mgmt/ccy-limits-teams-edit.png')} alt="Team CONCURRENCY LIMITS tab with Virtual Devices and Real Devices sections, each with its own update button" width="700"/>

3. To change the team's virtual device limits, set them in the **Virtual Devices** section and click
   **Update Concurrency**:
   - **Total Concurrency limit**: the most virtual device tests the team can run at once, including Linux, Windows,
     Android x86, and the platforms below. This field needs a value.
   - **Platform Limits**: caps for Mac / iOS (x86), Mac / iOS (ARM), and Android (ARM) inside the team's total.
     Mac / iOS (x86) needs a value. Leave Mac / iOS (ARM) or Android (ARM) empty to let the team use up to the
     organization limit.

   The organization maximum for each type is shown under each field as **Org max**. If you enter a platform limit
   higher than the team's Total Concurrency limit, an alert explains that the higher value has no effect.

4. To change the team's real device limit, enter the most public real device tests the team can run at once in
   **Team Real Device Concurrency** in the **Real Devices** section, and click **Update Real Device Concurrency**.

## Viewing Your Available Concurrency

Any user can see the concurrency available to them on the **User Settings** page. Click **ACCOUNT**, then click
**User settings**.

The **My Account** section shows your **Active team** and its Total Concurrency limit, Mac / iOS (x86),
Mac / iOS (ARM), Android (ARM), and Real Device concurrency. If your team has its own limit for a type, you see the
team's limit. Otherwise, you see your organization's limit.

<img src={useBaseUrl('img/team-mgmt/ccy-user-settings.png')} alt="My Account section of User Settings showing the active team's concurrency limits" width="700"/>

## Virtual Cloud Concurrency

Virtual Cloud concurrency covers every test on a Sauce Labs virtual device: desktop browsers, Android Emulators, and
iOS Simulators. It is measured as Total Concurrency, with optional platform limits for Mac / iOS (x86),
Mac / iOS (ARM), and Android (ARM). See [How Concurrency Limits Work](#how-concurrency-limits-work).

### Concurrency API

You can configure your test framework to pull real-time concurrency information for your organization and team.

Use the [Get User Concurrency](/dev/api/accounts/#get-user-concurrency) API endpoint to retrieve a user's current
concurrency usage compared with their organization and team limits.

```bash title="Sample Concurrency Request"
curl -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" --location \
--request GET 'https://api.us-west-1.saucelabs.com/rest/v1.2/users/<username>/concurrency' \
--header 'Content-Type: application/json' | json_pp
```

To retrieve concurrency over time and limits for your organization or teams by resource type, including
`mac_arm_virtual_machine` and `android_arm_virtual_machine`, use the
[Usage Analytics API](/dev/api/usage/#organization-concurrency).

{/* TODO: confirm the Get User Concurrency and team-settings API fields for Mac / iOS (ARM) and Android (ARM)
and document them here and in /dev/api/accounts. */}

### Exceeding Virtual Cloud Concurrency

Organization admins can choose how Virtual Device Cloud tests behave when the organization reaches its purchased
concurrency. There are two concurrency modes.

#### Fixed Concurrency

In Fixed mode, the organization's Total Concurrency can't exceed the contractual limit. When your scheduled or
running tests reach the limit:

- Additional jobs enter the throttling queue (available to Enterprise customers).
- The queue can hold up to your purchased concurrency plus 150 jobs.
- Jobs run in order as concurrency becomes available.
- No burst capacity is allowed.

This mode is recommended for customers who need strict cost control and predictable usage.

#### On-Demand Concurrency

On-Demand mode lets your organization temporarily exceed its contracted concurrency by up to 10%, which adds
elasticity during peak testing periods. When On-Demand is enabled:

- Tests can run at up to 110% of your contracted limit.
- Usage beyond your contractual limit is billable.
- Once the 10% burst limit is reached, additional jobs enter the throttling queue (purchased concurrency plus 150).
- Tests on all virtual platforms (desktop browsers, Android, and iOS, on both Mac and non-Mac virtual machines)
  count toward one Total Concurrency limit. Older plans enforced Mac and non-Mac concurrency as separate limits.
  Platform limits for teams are caps within that total.

This mode is ideal for customers who occasionally need more parallel tests than their contract provides.

#### What Happens When You Reach the Limit

The throttling queue and the On-Demand burst apply to your organization's Total Concurrency. When the organization
reaches its available concurrency, additional tests wait in the throttling queue (available to Enterprise customers)
and run in order as capacity opens up.

Team limits are enforced separately: a team with a limit lower than the organization's can't run more than its
assigned limit, even when the organization has capacity available.

If you switch between Fixed and On-Demand modes, queued jobs may be handled differently. See
[Concurrency Settings](/basics/acct-team-mgmt/org-settings/#concurrency-settings) for how mode changes affect queued
and pending jobs.

## Real Device Cloud Concurrency

If your subscription includes access to the Public Real Device Cloud, your subscription quantity is the number of
tests you can run on Sauce Labs real devices at the same time.

If your organization has private real devices, see how to
[manage and assign your private devices](/basics/acct-team-mgmt/private-device-mgmt).

### Exceeding Public Real Device Cloud Concurrency

If your organization tries to run more tests than your subscription allows, the extra tests wait until a
concurrency slot becomes available. A device request waits up to 15 minutes by default, and you can raise this to
30 minutes in your [Test Configuration Options](/dev/test-configuration-options).

For example, if your Public Real Device Cloud concurrency limit is 5 and you start 10 tests, 5 run immediately and the
other 5 wait until earlier tests finish.
