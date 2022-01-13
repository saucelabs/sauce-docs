---
id: schedule-test
title: Scheduling API Tests
sidebar_label: Scheduling Tests
description: "With Sauce Labs API Testing, you can schedule tests to run as often as you’d like, with granular control as to when they run."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The **Schedule** tool, accessible from within each test, allows you to schedule API tests to run as often as you’d like, with granular control as to when it runs. Let’s take a look at how it works.

## What You'll Need

* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
* An existing API Testing Project and Test. For details on how to create them, see the [Quickstart](/api-testing/quickstart/) guide.


## Publish the Working Copy

Our API Testing interface has a unique _Working Copy_ / _Published Copy_ system that allows you to edit a test without affecting the live, currently active version.

1. Once you've finish editing your test, navigate to the **Unpublished changes** section, where it states that your test is currently unpublished.<br/>
<img src={useBaseUrl('img/api-fortress/2021/02/unpublished.png')} alt="Unpublished Test" width="200" />
2. Hover your mouse over the section to reveal the **Clear** and **Publish** buttons.<br/>
<img src={useBaseUrl('img/api-fortress/2021/02/publishButton.png')} alt="Publish Test Button" width="200"/>
3. Click the **Publish** button to publish your working copy.<br/>
<img src={useBaseUrl('img/api-fortress/2021/02/published.png')} alt="Published Test" width="200"/>

## Create a New Schedule

4. Click the **Schedule** tab to access the Scheduler.<br/><img src={useBaseUrl('img/api-fortress/2021/02/scheduleTab.png')} alt="Schedule Tab"/>
5. Click **Create Schedule**.<br/><img src={useBaseUrl('img/api-fortress/2021/02/createSchedule.png')} alt="Create Schedule" width="450"/>

  The **New Schedule** window will appear.<br/><img src={useBaseUrl('img/api-fortress/2021/02/exampleSchedule.png')} alt="Example Schedule"/>
6. Enter a **Schedule Name** (**Description** is optional).
7. Choose a **Time Zone** to specify when you'd like test will run. Double-check that you're using the right one (i.e., if you're in Berlin and want to run at your local time, make sure to select `Europe/Berlin` instead of `America/Los Angeles`)!
8. Use the **Minute**, **Hour**, **Day**, and **Month** parameters to schedule the frequency at which you'd like your test to run. It will repeat at your configured time and interval.
9. Optionally, you can add a Sauce Connect Proxy tunnel by selecting one from the **No tunnel** dropdown and/or enter a `key=value` variable override.
10. When you're finished, click **Save**.
11. You'll be taken back to the **Schedule** page. The test you've scheduled should populate in the nav.<br/><img src={useBaseUrl('img/api-fortress/2021/02/scheduleConfirm.png')} alt="Schedule confirmation" width="450"/>
12. If you hover your mouse over it, you can see the options to **Pause**, **Edit**, or **Delete** the schedule.<br/><img src={useBaseUrl('img/api-fortress/2021/02/scheduleOptions.png')} alt="Scheduler options" width="250"/>

## Editing the Schedule

If you need to edit the schedule or any other part of the test, here's a shortcut:
1. Go to your the **Tests** tab of your Project.
1. Hover your mouse over the test line item. You'll see icons that allow you to apply edits to your actual test and to the schedule.<br/><img src={useBaseUrl('img/api-fortress/2021/02/scheduleIcons.png')} alt="Schedules Icons" width="150"/><br/>
   From left to right:
    * Pencil icon: Edits the test (opens the **Compose** tab).
    * Play icon: Runs the test manually.
    * Calendar icon: Opens the scheduler directly without opening the test first.
    * Trash icon: Deletes the test.
