---
id: project-access
title: API Testing Project Settings
sidebar_label: Settings
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Project settings allow you to control user visibility permissions, set email notifications, delete projects, and edit details such as name, description, and tags.

<img src={useBaseUrl('img/api-fortress/2021/12/projectSettings.png')} alt="Project settings" width="600" />

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
- An existing API Testing project. For details on how to create one, see [API Testing Quickstart](/api-testing/quickstart/).

## General

In API Testing, on the Projects page, under a project name, click **Settings**. On the Settings page you can edit project details (Name, Tag(s), Description, and Notes), and view the project's access setting.

### Access

Access is assigned when you create a project. You can set the project to be accessible to your team (if you're part of one) or to the entire organization.

<img src={useBaseUrl('img/api-fortress/2021/12/accessOrg1.png')} alt="New user UI" width="300" />

You cannot edit project access once it has been set.

#### User Scenarios

- **New User** (no team assignments or projects): When this user first logs in to API Testing, they will be guided through creating a project and a test.<br/><img src={useBaseUrl('img/api-fortress/2021/12/emptyState.png')} alt="New user UI" width="500" /><br/> They will have the option to set organization-wide project access and will only be able to see the projects they created.
- **Team Member**: This user belongs to a team and can create and interact with their team's projects and organization-wide projects. They cannot view projects with access restricted to an outside team. When creating a project, they will have the option to set access to be team-specific and organization-wide.
- **Organization Admin**: This user can create and interact with all data in all projects across their organization.

:::note
You can also view access settings from your projects page.<br/><img src={useBaseUrl('img/api-fortress/2021/12/accessOrg2.png')} alt="New user UI" width="500" />
:::

## Email Notifications

:::note IMPORTANT
The email notification mechanism we have in place consist in an email notification when the test starts failing (the subject of the email will contain "Incident started"). A new email notification will be sent after 30 minutes if the test is still failing (the subject of the email will contain "Incident in progress"). This notification is sent only if your tests run less then every 30 minutes. As soon as the test execution passes, you will be notified via email (the subject of the email will contain "Incident resolved").
:::

To enable email notifications:

1. In **API Testing**, on the **Projects** page, under a project name, click **Settings**.
2. In the left nav, click **Notifications**.
3. In the email address field, enter an address and then click **Save changes**.<br/><img src={useBaseUrl('img/api-fortress/2021/02/dash-1.5.png')} alt="Dashboard Pic 1.5"/>

:::tip
Use the Fact component in your API tests to control the behavior of email notifications. This can be useful if you're testing in multiple environments. For more information, see [Fact](/api-testing/composer/other-components/#fact).
:::

## Connectors

See [Connectors](/api-testing/integrations/pagerduty-webhooks/).

## Deleting a Project

To delete a project:

1. In **API Testing**, on the **Projects** page, under a project name, click **Settings**.
2. On the **Settings** page, in the left nav, click **Danger Zone**.
3. Click **Delete project**.
