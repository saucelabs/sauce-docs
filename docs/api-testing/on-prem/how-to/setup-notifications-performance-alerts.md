---
id: setup-notifications-performance-alerts
title: "Setup Notifications (Performance Alerts)"
sidebar_label: "Setup Notifications (Performance Alerts)"
keywords:
    - api-testing
    - how-to
    - notifications
    - performance-alerts
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Performance is the first thing that people think of when they are concerned about their APIs. By scheduling accuracy tests to run automatically, the data from those executions can then be used for proper insight into how the API is performing globally.

## Step 1. Go to the Dashboard

<img src={useBaseUrl('img/api-fortress/2020/10/dashboard1.jpg')} alt="dashboard1.jpg" />

## Step 2. Click on Metrics

<img src={useBaseUrl('img/api-fortress/2020/10/step2.jpg')} alt="step2.jpg" />

## Step 3. Click on a Footprint

<img src={useBaseUrl('img/api-fortress/2020/10/step3.jpg')} alt="step3.jpg" />

## Step 4. Click on the Bell to Add a Monitor

<img src={useBaseUrl('img/api-fortress/2020/10/step4.jpg')} alt="step4.jpg" />

## Step 5. Fill in the Information

<img src={useBaseUrl('img/api-fortress/2020/10/step5.jpg')} alt="step5.jpg" />

Enter the name of the alert, select the type of monitor (latency or fetch), and the max value for the trigger. Latency is the time it takes to ping the endpoint and receive a response. Fetch is the time it takes to download the response itself. Large responses will lead to large fetch times, so be aware of this when setting a number. Values are in milliseconds.