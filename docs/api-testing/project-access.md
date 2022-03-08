---
id: project-access
title: API Testing Project Settings
sidebar_label: Settings
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Your Project **Settings** allow you to control user visibility permissions, set email notifications, delete a Project, and edit details such as name, description, and tags.

<img src={useBaseUrl('img/api-fortress/2021/12/projectSettings.png')} alt="Project Settings" width="600" />


## What You'll Need

* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
* An existing API Testing Project. For details on how to create one, see [API Testing Quickstart](/api-testing/quickstart/).


## General

Under **Settings** > **General**, you can edit your Project's details (Name, Tag(s), Description, Notes), and view your Access setting.

### Access

Access is assigned when you first create a Project. You can set the Project to be accessible to your Team (if you're part of one) or entire Organization.

<img src={useBaseUrl('img/api-fortress/2021/12/accessOrg1.png')} alt="New user UI" width="300" />

You cannot edit Access once it's been set.

#### User Scenarios

* **New User** (no Team Assignments or Projects): upon logging in to API Testing, they'll be guided through creating a Project and Test(s).<br/><img src={useBaseUrl('img/api-fortress/2021/12/emptyState.png')} alt="New user UI" width="500" /><br/> This user would have the option to set Organization-wide Project access and would only be able to see the Projects that they created.
* **Team Member**: a user belonging to a Team can create and interact with their own Team's Projects and Organization-wide Projects. They cannot view Projects with Access restricted to an outside Team. When creating a Project, they'll have the option to set Access to be Team-specific and Organization-wide.
* **Organization Admin**: can create and interact with all data in all Projects across their Organization.

:::note
You can also view the Access level from your Projects page.<br/><img src={useBaseUrl('img/api-fortress/2021/12/accessOrg2.png')} alt="New user UI" width="500" />
:::


## Email Notifications

Email notifications will alert you when a test starts failing, and notify you again when the test is back in full working order. The incident identifier number, used to track the events, will be the same as the test ID.

To enable this feature:
1. Go to **Settings**.
1. Click **Email Notifications**.
1. Enter an email address.
1. Click **Save Changes**.<br/><img src={useBaseUrl('img/api-fortress/2021/02/dash-1.5.png')} alt="Dashboard Pic 1.5"/>

:::tip
Use the [Fact component](/api-testing/composer/other-components/#fact) in your API tests to control the behavior of email notifications. This can be useful if you're testing in multiple environments.
:::


## Connectors

See [Connectors](/api-testing/integrations/pagerduty-webhooks/).


## Delete Project

Go to **Settings** > **Danger Zone** > **Delete project**.
