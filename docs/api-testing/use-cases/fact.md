---
id: fact
title: Using Fact for Handling Email Notifications
sidebar_label: Improving Email Notifications using Fact
description: Using Fact for Handling Email Notifications
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The **Fact** component is used to control the behavior of Email notifications, which (if enabled) alert you to test failures. It enables you to add information about the nature of the test execution.

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
- An existing API Testing Project. For details on how to create one, see [API Testing Quickstart](/api-testing/quickstart/).
- Your email address already saved in the [Notifications](/api-testing/project-access/#email-notifications) section.
- Familiarity with the [API Testing Composer](/api-testing/composer/).

## Setting Alert Environments

Testing activity is tracked using a test ID number. This may not work if you're testing in multiple environments, as an incident could be environment-specific. When a Fact component is added to a test, it will inform our system which environment the execution relates to so that the incident signature will carry the environment as well.

Assume that you are running the same test in _staging_ and _production_, you will get an email notification the first time the test fails in one of the two environments. This does not allow you to know which environment the test fails in. The same will happens when the test starts working again.

By configuring a **Fact** (together with **Tag**), you can add the environment value to the incident signature, and from that moment on the signature of the incident will be `id_of_the_test` + `value_of_environment`.
In this way, you will get a separate notification for each environment the test fails in: for example, you will receive start/end incidents for `test123` in the production environment, and start/end incidents for `test123` in the staging environment, as a separate flow of events.

Assume that in the variable scope of your test, you have a variable called _env_ that contains your environment string (_production, staging, qa_ etc.).

By configuring a Fact in the following way, you can add the environment value to the incident signature:

<img src={useBaseUrl('img/api-testing/fact.png')} alt="fact component" />

```yaml
- id: fact
  identifier: environment
  label: environment
  value: ${env}
```

### Use Case: Setting Alert Environments

1. In Composer, in the **Input Set**, set the default environment as `staging`.

   <img src={useBaseUrl('img/api-testing/fact-examples/set-environment.png')} alt="set environment" width="450" />

   ```yaml
     - id: global
       children:
         - id: variable
           name: env
           value: staging
   ```

   With this setting, the test will be executed against the `staging` environment by default.

2. In the **Unit**, set the **Fact** component to add the environment value to the incident signature.

   <img src={useBaseUrl('img/api-testing/fact-examples/fact-component.png')} alt="fact component" />

   ```yaml
     - id: fact
       identifier: environment
       label: environment
       value: ${env}
   ```

3. Add **Tag** component to set the environment as tag in the email notifications.

   <img src={useBaseUrl('img/api-testing/fact-examples/tag.png')} alt="tag component" />

   ```yaml
     - id: tag
       value: ${env}
   ```

4. Add the **GET** request.

   - Url - for example `http://demoapi.apifortress.com/api/retail/product`
   - Variable - for example `payload`
   - Mode - for example `json`

   <img src={useBaseUrl('img/api-testing/fact-examples/get.png')} alt="get request" />

   ```yaml
     - id: get
       children: []
       url: http://demoapi.apifortress.com/api/retail/product
       var: payload
       mode: json
   ```

5. Click **Save**.

6. Click **Publish**, then exit the Composer.

7. From the Test list, **Run** the test.

   The test is meant to fail, so you will get the email notification with `staging` tag in the subject.

8. Click **Environments** (defaults to **No environment**).

9. Select **Add item**.

10. Enter a name for your environment, for example `production`, then click **Confirm**.

11. Click **Create variable**.

    - Key - for example `env`
    - Value - for example `production`

    <img src={useBaseUrl('img/api-testing/fact-examples/environment2.png')} alt="set new environment"/>

12. Click **Confirm**.

13. **Run** the test with the environment active: you will get the email notification with the `production` tag in the subject.

14. Double-click on the test to edit it.

15. Select **Add Child Component** below the GET component.

16. Add **Request Header**.

    - Name - for example `key`
    - Value - for example `ABC123`

    <img src={useBaseUrl('img/api-testing/fact-examples/req-header.png')} alt="request header"/>

17. Click **Save**.

18. Click **Publish**, then exit the Composer.

19. From the Test list, **Run** the test without any environment.

    This time the test will pass, so you will get the email notification that resolves the incident with `staging` tag in the subject.

20. Select the `production` environment.

21. Click **Run**.

    The test will pass and you will get the email notification that resolves the incident with the `production` tag in the subject.

:::note Schedule with Environments
In the example test was run manually, but it works in the same way when you schedule it:

- Add one schedule without adding any variable in the **Overrides**: the test will be executed with `staging` value as the environment.
- Create a second schedule adding `env` as key and `production` as value in **Overrides**: the test will be executed with `production` value as the environment.
  :::

## Disabling Email Notifications

The **Fact** component can also be used to disable email notifications:

```yaml
  - id: fact
    identifier: disable_alerts
    label: alerts disabled
    value: "true"
```

<img src={useBaseUrl('img/api-testing/factDisableAlert.png')} alt="factDisableAlert.png" />

You can use logic in the test to set the Fact component and use that to alter the email notification.

As an example, you could say "IF the env is development, then disable emails for this test":

<img src={useBaseUrl('img/api-testing/factAlertDisabled.png')} alt="factAlertDisabled.png" />

:::warning Important
`Identifier` must be equal to `disable_alerts`.
:::

### Use Case: Disabling Email Notifications

1. In Composer, add the **Fact** component.

   <img src={useBaseUrl('img/api-testing/factDisableAlert.png')} alt="factDisableAlert.png" />

   ```yaml
     - id: fact
       identifier: disable_alerts
       label: alerts disabled
       value: "true"
   ```

2. Add the **GET** request.

   - Url - for example `http://demoapi.apifortress.com/api/retail/product`
   - Variable - for example `payload`
   - Mode - for example `json`

   <img src={useBaseUrl('img/api-testing/fact-examples/get.png')} alt="get request" />

   ```yaml
     - id: get
       children: []
       url: http://demoapi.apifortress.com/api/retail/product
       var: payload
       mode: json
   ```

3. Click **Save**.

4. Click **Publish**, then exit the Composer.

5. From the Test list, **Run** the test.
   The notifications are disabled, so you won't receive an email notification.

6. Double-click on the test to edit it and change the value for **Fact** from `true` to `false`.

   <img src={useBaseUrl('img/api-testing/fact-examples/disable-alerts-false.png')} alt="disable alerts false" />

   ```yaml
     - id: fact
       identifier: disable_alerts
       label: alerts disabled
       value: "false"
   ```

7. Click **Save**.

8. Click **Publish**, then exit the Composer.

9. From the Test list, **Run** the test.

The notifications are now activated, so you will receive an email notification.

:::note
In the example we ran the test manually, but the behavior is the same when you schedule it.
:::

## Setting Email Notification Thresholds

You can use the **Fact** component to set the email alert threshold: if you want a test to fail more than once before an email is sent, a Fact called `mail_threshold` can be set in the test:

<img src={useBaseUrl('img/api-testing/factMultiFailure.png')} alt="factMultiFailure.png" />

```yaml
- id: fact
  identifier: mail_threshold
  label: multi failure
  value: "2"
```

The above example means the test will need to fail twice in a row before an email alert is sent.

Given that this can be configured in the test, it offers all the flexibility provided by conditional statements, such as an **If** condition on the environment the test is running upon:

<img src={useBaseUrl('img/api-testing/factMultiFailure2.png')} alt="factMultiFailure2.png" />

```yaml
- id: if
  children:
    - id: fact
      identifier: mail_threshold
      label: multi failure
      value: "2"
  expression: env=="development"
```

### Use Case: Setting Email Notification Thresholds

1. In the Composer, add the **Fact** component.

   <img src={useBaseUrl('img/api-testing/fact-examples/threshold.png')} alt="fact threshold" />

   ```yaml
     - id: fact
       identifier: mail_threshold
       label: threshold
       value: "3"
   ```

2. Add the **GET** request.

   - Url - for example `http://demoapi.apifortress.com/api/retail/product`
   - Variable - for example `payload`
   - Mode - for example `json`

   <img src={useBaseUrl('img/api-testing/fact-examples/get.png')} alt="get request" />

   ```yaml
     - id: get
       children: []
       url: http://demoapi.apifortress.com/api/retail/product
       var: payload
       mode: json
   ```

3. Click **Save**.

4. Click **Publish**, then exit the Composer.

5. From the Test list, **Run** the test twice in a row: you will not receive any email notification.

6. **Run** the test one more time: you reached the threshold value therefore you will receive the email notification.

:::note
The example considers a scenario where you run the test manually, but you can accomplish the same results by scheduling the test.
:::
