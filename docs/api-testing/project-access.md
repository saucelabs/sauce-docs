---
id: project-access
title: API Testing Project Settings
sidebar_label: Project Settings
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Project settings allow you to configure access to projects, project details such as name, description, and tags, and delete projects. You can also add email addresses to receive notifications about tests in a project. 

<img src={useBaseUrl('img/api-fortress/2021/12/projectSettings.png')} alt="Project settings" width="600" />

## What You'll Need

* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
* An understanding of [Account and Team Management](/basics/acct-team-mgmt/managing-user-info/) if you are an organization admin configuring team access to projects. 

## Project Access Levels and User Scenarios

Access to a project is assigned when the project is created. You can assign the following access levels to a project:  

- **Team Access**: Available if an organization admin has set up teams in Team Management. Users must be a member of the assigned team or an organization admin to access the project. 
- **Organization Access**: Users who are a member of any team and organization admins can access the project. Individual users have access only if they created the project. 

The type of project access users have and can configure for the projects they create is based on the following user scenarios:

- **Individual User**: Individual users who are not a member of a team. When these users first log in to API Testing, they will be guided through creating a project and a test.<br/><img src={useBaseUrl('img/api-fortress/2021/12/emptyState.png')} alt="New user UI" width="600" /><br/> When creating a project, access will default to organization-wide access, and individual users will only be able to access the projects they've created.
- **Team Member** Users who are a member of one or more teams. They can work in projects with access assigned to teams that they are a member of and also projects with organization-wide access. They cannot view projects with access assigned to teams they are not a member of. When creating a project, they will have the option to set the project access to a team that they are a member of or organization-wide access. 
- **Organization Admin**: Organization Admins can create and interact with all data in all projects across their organization.

:::tip
You can view the access set for projects on the Projects page.<br/><img src={useBaseUrl('img/api-fortress/2021/12/accessOrg2.png')} alt="New user UI" width="500" />
:::

## Create a Project

You create projects and edit project settings on the **Settings > General > Project details** page.  

1. In **API Testing**, on the **Projects** page, click **Create Project**. 
1. Select an option in the **Create from** dropdown. 
1. Optionally, select one or more **Tags**, or click **Add custom tag** to add a new tag. 
1. Optionally, enter a **Description** of the project. 
1. Optionally, enter **Notes** about the project. 
1. Select the **Access** level for the project. If teams have been set up for your organization and you are an organization admin or a member of one or more teams, you can select a team from the dropdown. Otherwise, the access level defaults to Organization. This selection cannot be changed once the project is saved. 
1. Click **Save**. 

### Managing Access to Projects

Once a project has been created and saved, the Access (team or organization-wide access) is uneditable. If an organization admin deletes a team from Team Management before managing project access in APIT, the Access defaults to Organization, because Access is required. However, the project will still be available only to the original team and does not change to organization-wide access. Consider using one of the following options to update project access. 

You have a few options if you need to change access to a project:

- If access is assigned to a team, in Team Management, you can add or remove team members from the team in Team Management. This  will affect their access to projects assigned to the team. You must be an organization admin to work with teams in Team Management. 
- If access is assigned to an organization and you need to have it limited to a team, you can consider creating a new project with the team access, and then exporting the tests from the project with organization access and importing them to the new project with team access. Then you can either delete the project with organization access, or manage the project by renaming it to indicate it is no longer being used. Make sure to [update any test schedules](/api-testing/schedule-test/) for tests in the project as well so that the tests in the archived project are not automatically run. You need to be a team member of the team you are assigning to the project or an organization admin to do this. 
- If access is assigned to a team and you need to allow organization access to the project, you can manage this change using the previous process for changing from organization to team. You need to be a team member of the team the project access is assigned to and a team member of the team for the new project or an organization admin to do this.

## Email Notifications

You can configure one or more email addresses to be notified when tests in a project are failing. 

Email notifications are triggered for failing tests. When a test starts failing, an email with "Incident started" included in the subject line is sent to each address configured to receive notifications for a project. A new email notification will be sent after 30 minutes if the test is still failing. The follow up email will include "Incident in progress" in the subject line. This notification is sent only if tests run less than every 30 minutes. When test execution passes, an email is sent with "Incident resolved" in the subject line. 

To enable email notifications:

1. In **API Testing**, on the **Projects** page, under a project name, click **Settings**.
2. In the left nav, click **Notifications**.
3. In the email address field, enter an address. To add more email addresses, click **+ New Email**. 
5. Click **Save changes**. 
<br/><img src={useBaseUrl('img/api-testing/notifications.png')} alt="Dashboard Pic 1.5"/>

:::tip
Use the Fact component in your API tests to control the behavior of email notifications. This can be useful if you're testing in multiple environments. For more information, see [Fact](/api-testing/composer/other-components/#fact).
:::

## Connectors

See [PagerDuty and Webhook Connectors](/api-testing/integrations/pagerduty-webhooks/) for more information.

## Deleting a Project

To delete a project:

1. In **API Testing**, on the **Projects** page, under a project name, click **Settings**.
2. On the **Settings** page, in the left nav, click **Danger Zone**.
3. Click **Delete project**.