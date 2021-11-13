---
id: schedule-a-test
title: Schedule a Test
sidebar_label: Schedule a Test
description: "With Sauce Labs API Testing, you can schedule a test to run as often as you’d like, with granular control as to when it runs."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

With API Testing on Sauce Labs, you can schedule tests to run as often as you’d like, with granular control as to when it runs. Let’s take a look at how it works.

## What You'll Need

* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
* An existing API Testing Project and Test. For details on how to create them, see [API Testing Quickstart](/api-testing/quickstart/).

### Step 1: Publish the Working Copy

Our API Testing interface has a unique working copy/published copy system. This allows you to edit a test without affecting the live, currently active version.

1. Once you've finish editing your test, navigate to the **Unpublished changes** section, where it states that your test is currently unpublished.<br/>
<img src={useBaseUrl('img/api-fortress/2021/02/unpublished.png')} alt="Unpublished Test" width="200" />
2. Hover your mouse over the section to reveal the **Clear** and **Publish** buttons.<br/>
<img src={useBaseUrl('img/api-fortress/2021/02/publishButton.png')} alt="Publish Test Button" width="200"/>
3. Click the **Publish** button to publish your working copy.<br/>
<img src={useBaseUrl('img/api-fortress/2021/02/published.png')} alt="Published Test" width="200"/>

### Step 2: Create a New Schedule

1. Click the **Schedule** tab to access the Scheduler.<br/><img src={useBaseUrl('img/api-fortress/2021/02/scheduleTab.png')} alt="Schedule Tab"/>
1. Click **Create Schedule**.<br/><img src={useBaseUrl('img/api-fortress/2021/02/createSchedule.png')} alt="Create Schedule" width="500"/>
1. When the **New Schedule** window appears, enter your desired schedule name, scheduled time (and time zone) configuration. Optionally, you can add a Sauce Connect Proxy tunnel by selecting one from the **No tunnel** dropdown. When you're finished, click **Save**.<br/><img src={useBaseUrl('img/api-fortress/2021/02/exampleSchedule.png')} alt="Example Schedule"/>
1. You'll be taken back to the **Schedule** page. Confirm that test you've scheduled has populated in the nav.<br/><img src={useBaseUrl('img/api-fortress/2021/02/scheduleConfirm.png')} alt="Schedule confirmation" width="450"/>
1. If you hover your mouse over it, you can see the options to **Pause**, **Edit**, or **Delete** the schedule.<br/><img src={useBaseUrl('img/api-fortress/2021/02/scheduleOptions.png')} alt="Scheduler options" width="250"/>

### Step 3: Edit the Schedule

1. Return to your Project's dashboard. You'll see that an icon has appeared next to the test you've just scheduled:<br/><img src={useBaseUrl('img/api-fortress/2021/02/schedules.png')} alt="Schedules icon"/>

1. If you hover your mouse over that test's line item, you'll be able to see icons that allow you to  add/override values, delete the schedule, or run the test immediately:<br/><img src={useBaseUrl('img/api-fortress/2021/02/scheduleIcons.png')} alt="Schedules Icons"/>
