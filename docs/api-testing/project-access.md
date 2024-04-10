---
id: project-access
title: API Testing Project Settings
sidebar_label: Project Settings
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Project settings allow you to view the access to projects that was defined when the project was created, and configure project details such as name, description, and tags, and delete projects. You can also add email addresses to receive notifications about tests in a project.

<img src={useBaseUrl('img/api-testing/projectSettings.png')} alt="Project settings" width="400" />

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
- An understanding of [Organization Management](/basics/acct-team-mgmt/managing-user-info/) if you are an organization admin configuring team access to projects.

:::note
Sauce Labs Organization Management features are available for <span className="sauceGreen">Enterprise Plans only</span>.
:::

## Project Access Levels and User Scenarios

Access to a project is assigned when the project is created. You can assign the following access levels to a project:

- **Team Access**: Available if an organization admin has set up teams in Organization Management. Users must be a member of the assigned team or an organization admin to access the project.
- **Organization Access**: Everyone that can access the organization.

The type of project access users have and can configure for the projects they create is based on the following user scenarios:

- **Team Member**: Users who are a member of a team. They can work in projects with access assigned to the team that they are a member of and also projects with organization-wide access. They cannot view projects with access assigned to teams they are not a member of. When creating a project, they will have the option to set the project access to the team that they are a member of or organization-wide access.
- **Organization Admin**: Organization Admins can create and interact with all data in all projects across their organization.

:::tip
You can view the access set for projects on the Projects page.<br/><img src={useBaseUrl('img/api-testing/accessOrg2.png')} alt="New user UI" width="500" />
:::

## Create a Project

You create projects and define project settings on the Projects page, and edit project settings on the **Settings > General > Project details** page.

1. In **API Testing**, on the **Projects** page, click **Create Project**.
1. Select an option in the **Create from** dropdown.
1. Optionally, select one or more **Tags**, or click **Add custom tag** to add a new tag.
1. Optionally, enter a **Description** of the project.
1. Optionally, enter **Notes** about the project.
1. Select the **Access** level for the project. If you are a team member you can select your team or organization-wide access. If you are an organization admin, you can select any team or organization-wide access.
1. Click **Save**.

### Manage Access to Projects

Suppose an organization admin deletes a team from Sauce Labs [Accounts > Organization Management](/basics/acct-team-mgmt/managing-user-info/) before managing project access in API Testing. In that case, you see a banner at the top of the Projects page that notifies you some projects belong to a deleted team. Clicking on the **Update** brings you to the Settings, where you can assign a new access level to that project.

## Email Notifications

You can configure one or more email addresses to be notified when tests in a project are failing.

Email notifications are triggered for failing tests. When a test starts failing, an email with "Incident started" included in the subject line is sent to each address configured to receive notifications for a project. A new email notification will be sent after 30 minutes if the test is still failing. The follow up email will include "Incident in progress" in the subject line. This notification is sent only if tests run less than every 30 minutes. When test execution passes, an email is sent with "Incident resolved" in the subject line.

To enable email notifications:

1. In **API Testing**, on the **Projects** page, under a project name, click **Settings**.
2. In the left nav, click **Notifications**.
3. In the email address field, enter an address. To add more email addresses, click **+ New Email**.
4. Click **Save changes**.
   <br/><img src={useBaseUrl('img/api-testing/notifications.png')} alt="Dashboard Pic 1.5"/>

:::tip
Use the Fact component in your API tests to control the behavior of email notifications. It can be beneficial when you're testing in multiple environments. For more information, see [Fact](/api-testing/composer/other-components/#fact) and [Use Cases](/api-testing/use-cases/fact/).
:::

## Connectors

See [PagerDuty and Webhook Connectors](/api-testing/integrations/pagerduty-webhooks/) for more information.

## Delete a Project

To delete a project:

1. In **API Testing**, on the **Projects** page, under a project name, click **Settings**.
2. On the **Settings** page, in the left nav, click **Danger Zone**.
3. Click **Delete project**.
