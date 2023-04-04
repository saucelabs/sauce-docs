---
id: fact
title: Using Fact for Handling Email Notifications
sidebar_label: Improving Email Notifications using Fact
description: Using Fact for Handling Email Notifications
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<!-- A part of a good testing strategy is to create end-to-end tests that resemble common user flows. Consider a scenario where a company has an authentication server. This server, when given the proper user credentials, returns an authentication token. This token is required for all other calls throughout the company's API environment. Without this first API call, none of the other API calls can work. -->

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
- An existing API Testing Project. For details on how to create one, see [API Testing Quickstart](/api-testing/quickstart/).

#### Setting Alert Environments

Assume that in the variable scope of your test, you have a variable called _env_ that contains your environment string (_production, staging, qa_ etc.).

By configuring a Fact in the following way, you can add the environment value to the incident signature:

```yaml
- id: fact
  identifier: environment
  label: environment
  value: ${env}
```

<img src={useBaseUrl('img/api-testing/fact.png')} alt="fact.png" />

From this moment on, the signature of the incident will be `id_of_the_test` + `value_of_environment`.

For example, you will receive start/end incidents for `test123` in the production environment, and start/end incidents for `test123` in the staging environment, as separate flow of events.

You can use anything as a value of the environment, such as domain names and IDs.

#### Disabling Email Notifications

A second use case is disabling email notifications for the test from within the test:

```yaml
Fact id: disable_alerts
label: whatever you want here
value: true
```

<img src={useBaseUrl('img/api-testing/factDisableAlert.png')} alt="factDisableAlert.png" />

You can use logic within the test to set the Fact component and use that to alter the email notification.

As an example, you could say "IF the env is development, then disable emails for this test":

<img src={useBaseUrl('img/api-testing/factAlertDisabled.png')} alt="factAlertDisabled.png" />

#### Setting Email Notification Thresholds

Another use-case of the fact component is set an email alert threshold. If you want a test to fail more than once before an email is sent, a Fact called `mail_threshold` can be set in the test:

<img src={useBaseUrl('img/api-testing/factMultiFailure.png')} alt="factMultiFailure.png" />

This means the test will need to fail twice in a row before an email alert is sent.

Given that this can be configured within the test, it offers all the flexibility provided by conditional statements, such as an IF condition on the environment the test is running upon:

<img src={useBaseUrl('img/api-testing/factMultiFailure2.png')} alt="factMultiFailure2.png" />

```yaml
- id: fact
  identifier: disable_alerts
  label: alerts disabled
  value: 'true'
```

```yaml
- id: fact
  identifier: mail_threshold
  label: multi failure
  value: '2'
```
