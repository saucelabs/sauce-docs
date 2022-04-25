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
* An existing, published API Test. For details on how to create one, see the [Quickstart](/api-testing/quickstart/).


## Creating a New Test Schedule

:::note
The **Schedule** functionality is available only for published tests. For more information, see [Publish Your Test](/api-testing/quickstart/#publish-your-test).
:::

<<<<<<< HEAD
1. From within the **Compose** tab, click the **Schedule** tab to access the Scheduler.<br/><img src={useBaseUrl('img/api-fortress/2021/02/scheduleTab.png')} alt="Schedule Tab"/>
2. Click **Create Schedule**.<br/><img src={useBaseUrl('img/api-fortress/2021/02/createSchedule.png')} alt="Create Schedule" width="450"/>
=======
1. In the **Composer**, click the **Schedule** tab.<br/><img src={useBaseUrl('img/api-fortress/2021/02/scheduleTab.png')} alt="Schedule Tab"/>
2. Click **Create Schedule**.<br/><img src={useBaseUrl('img/api-fortress/2021/02/createScheduleButton.png')} alt="Create Schedule" width="450"/>
>>>>>>> a4849df6e3c2f98bd295e2c6ba901e80d7c2857f

3. In the **New Schedule** window, enter a **Schedule Name** (**Description** is optional).

<img src={useBaseUrl('img/api-fortress/2021/02/exampleScheduleScreen.png')} alt="Example Schedule"/>

4. Choose a **Time Zone**, but verify that you're using the right one. For example, if you're in Berlin and want to run at your local time, make sure to select `Europe/Berlin` instead of `America/Los Angeles`.
5. Use the **Minute**, **Hour**, **Day**, and **Month** parameters to schedule the frequency at which you'd like your test to run. It will repeat at your configured time and interval.
6. Optionally, you can add a Sauce Connect Proxy tunnel by selecting one from the **No tunnel** dropdown or entering a `key=value` variable override.

:::note
When an `override` variable is declared, its value will be injected into the test when it’s executed. If the variable has already been declared in the Vault or the Globals/Input set, it will be rewritten with the new value.
:::

7. When you're finished, click **Save**. The test will be displayed on the **Schedule** page.<br/><img src={useBaseUrl('img/api-fortress/2021/02/scheduleConfirmScreen.png')} alt="Schedule confirmation" width="450"/>
8. Hover your mouse over the test name to access the **Pause**, **Edit**, and **Delete** options.<br/><img src={useBaseUrl('img/api-fortress/2021/02/scheduleOptions.png')} alt="Scheduler options" width="250"/>

## Editing a Scheduled Test

In your project, on the **Tests** tab, hover your mouse over the test line item. You'll see icons that allow you to apply edits to your actual test and to the schedule.<br/><img src={useBaseUrl('img/api-fortress/2021/02/scheduleIcons.png')} alt="Schedules Icons" width="150"/><br/>
    * Pencil icon: Edit the test (opens the **Compose** tab)
    * Play icon: Run the test manually
    * Calendar icon: Open the scheduler without opening the test first
    * Trash icon: Delete the test

## More Information

* [Email Notifications](/api-testing/project-access/#email-notifications)
* [Webhook Connectors](/api-testing/integrations/pagerduty-webhooks/)
* [Project Dashboard](/api-testing/project-dashboard/)
