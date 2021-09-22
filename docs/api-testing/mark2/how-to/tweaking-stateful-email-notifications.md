---
id: tweaking-stateful-email-notifications
title: "Email Notification Adjustments (Environments, Thresholds, Disable)"
sidebar_label: Email Notification Adjustments
keywords:
    - api-testing
    - how-to
    - stateful-email-notifications
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Preamble

With the introduction of stateful email notifications (version=2) the API Fortress mailer will notify you when a test starts failing, and notify you again when the test is back in full working order. The identifier of the incident that allows the system to track the events is the ID of the test itself.  

However, in a multi-environment testing strategy, the ID of the test may not be sufficient anymore, as an incident may relate to different environments. Therefore, the test needs to inform the mailer which environment the execution relates too, so that the incident signature will carry the environment as well.

## The FACT Component

The Fact component can be added to any test, and is meant to add some extra information (facts) about the nature of the execution, and can contain static or dynamic data.

A FACT has an ID (which should be unique within the test), a label (to help the understanding of the fact), and a value (that is a string supporting the template language ${...}).

A specific FACT can be used to control the incident behavior previously discussed.

:::note
The FACT component should be set as high up in the test as possible, as if the test reaches its fail limit before the FACT then it will not be set.
:::

## Use a FACT to Set Alert Environments

Assume that in the variable scope of your test you have a variable called _env_ that contains your environment string (_production, staging, qa_ etc.).

By configuring a FACT in the following way, you can add the environment value to the incident signature:

```yaml
FACT id: environment  
label: The current environment  
value: ${env}
```

<img src={useBaseUrl('img/api-fortress/2019/11/Screen-Shot-2019-11-11-at-11.21.50-AM.png')} alt="screenshot.png"/>

From this moment on, the signature of the incident will be `id_of_the_test` + `value_of_environment`.

For example, you will receive start/end incidents for `test123` in the production environment, and start/end incidents for `test123` in the staging environment, as separate flow of events.

You can use anything as value of the environment, such as domain names, IDs etc.

## Use a FACT to Disable Emails Alerts

A second use-case is disabling email notifications for the test from within the test:  

```yaml
FACT id: disable_alerts   
label: whatever you want here   
value: true
```

<img src={useBaseUrl('img/api-fortress/2019/11/Screen-Shot-2019-11-11-at-11.22.02-AM.png')} alt="screenshot.png"/>

You can use logic within the test to set the FACT component and use that to alter the email notification.

As an example, you could say "IF the env is development, then disable emails for this test":

<img src={useBaseUrl('img/api-fortress/2019/11/Screen-Shot-2019-11-11-at-11.33.57-AM.png')} alt="screenshot.png"/>

## Use a FACT to Set Email Alert Thresholds

Another use-case of the fact component is set an email alert threshold. If you want a test to fail more than once before an email is sent, a FACT called `mail_threshold` can be set in the test:  

<img src={useBaseUrl('img/api-fortress/2020/07/Screen-Shot-2020-07-07-at-12.56.25-PM.png')} alt="screenshot.png"/>

This means the test will need to fail twice in a row before an email alert is sent.  

Given that this can be configured within the test, it offers all the flexibility provided by conditional statements, such as an IF condition on the environment the test is running upon:  

<img src={useBaseUrl('img/api-fortress/2020/07/Screen-Shot-2020-07-07-at-12.59.24-PM.png')} alt="screenshot.png"/>
