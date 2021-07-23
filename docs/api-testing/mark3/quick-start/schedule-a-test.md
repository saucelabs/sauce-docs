---
id: schedule-a-test
title: Schedule a Test
sidebar_label: Schedule a Test
description: "Introduction In API Fortress, it is simple to schedule a test to run as often as you’d like, from any location you choose (based on account type), and with granular control as to when it runs. Let’s take a look at how it works. Step 1: Publish the Working Copy API Fortress has a unique."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Introduction

In API Fortress, it is simple to schedule a test to run as often as you’d like, from any location you choose (based on account type), and with granular control as to when it runs. Let’s take a look at how it works.

### Step 1: Publish the Working Copy

API Fortress has a unique working copy/published copy system. This system allows you to edit a test without affecting the live, currently active version. You can learn more about it [here](/api-testing/mark2/learn-more/the-working-copy-published-tests). 

1. First you need to publish your working copy. After you finish editing your test, navigate to the section to the right where it states that your test is currently unpublished. Click the "Publish" button:
   
   | Unpublished Test                                                                             | Button Appears after Hovering                                                                     | Successfully Published Test                                                                |
   |----------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------|
   | <img src={useBaseUrl('img/api-fortress/2021/02/unpublished.png')} alt="Unpublished Test"/>   | <img src={useBaseUrl('img/api-fortress/2021/02/publishButton.png')} alt="Publish Test Button"/>   | <img src={useBaseUrl('img/api-fortress/2021/02/published.png')} alt="Published Test"/>     |


### Step 2: Create a New Schedule

1. You can now access the Scheduler from the Test Project Panel:
   <img src={useBaseUrl('img/api-fortress/2021/02/createSchedule.png')} alt="Create Schedule"/>

1. Click **+ Create Schedule** and the **New Schedule** window appears. Fill in the necessary details and select **Save** when finished.
   <img src={useBaseUrl('img/api-fortress/2021/02/exampleSchedule.png')} alt="Example Schedule"/>

### Step 3: Edit the Schedule

1. Once you save the schedule, an icon appears next to each individual test:
   <img src={useBaseUrl('img/api-fortress/2021/02/schedules.png')} alt="Schedules icon"/>

1. You can add/override values, delete the schedule, or run the test immediately by clicking on the following icons:
   <img src={useBaseUrl('img/api-fortress/2021/02/scheduleIcons.png')} alt="Schedules Icons"/>