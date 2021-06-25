---
id: acct-team-mgmt
title: Account and Team Management
sidebar_label: Account and Team Management
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Teams Management allows you to create Teams for your Account, add users to your Teams, specify user roles, and specify which projects users have access to. In addition, you can assign a user to be an administrator for your Screener Account.


## 1. Add an Account Name
Before you can add teams to your account, you must give your account a name. This name is globally unique in Screener.
<img src={useBaseUrl('img/visual/component-add-account-name.png')} alt="Component Add Account Name" />

>**NOTE**: Your account will be named "My Account" temporarily until you name your account.


## 2. User Roles
Before you create a team, it is useful to understand the different user roles in Screener. The table below identifies the features that are accessible for each role.

<table>
  <tr>
   <td><strong> </strong>
   </td>
   <td><strong>Viewer</strong>
   </td>
   <td><strong>Tester</strong>
   </td>
   <td><strong>Administrator</strong>
   </td>
   <td><strong>Account Owner</strong>
   </td>
  </tr>
  <tr>
   <td>View Projects & UI States
   </td>
   <td>x
   </td>
   <td>x
   </td>
   <td>x
   </td>
   <td>x
   </td>
  </tr>
  <tr>
   <td>Change Status of UI States
   </td>
   <td>
   </td>
   <td>x
   </td>
   <td>x
   </td>
   <td>x
   </td>
  </tr>
  <tr>
   <td>Run Tests
   </td>
   <td>
   </td>
   <td>x
   </td>
   <td>x
   </td>
   <td>x
   </td>
  </tr>
  <tr>
   <td>Manage Test Groups
   </td>
   <td>
   </td>
   <td>x
   </td>
   <td>x
   </td>
   <td>x
   </td>
  </tr>
  <tr>
   <td>Manage Integrations
   </td>
   <td>
   </td>
   <td>x
   </td>
   <td>x
   </td>
   <td>x
   </td>
  </tr>
  <tr>
   <td>Manage Projects
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>x
   </td>
   <td>x
   </td>
  </tr>
  <tr>
   <td>Manage Teams
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>x
   </td>
   <td>x
   </td>
  </tr>
  <tr>
   <td>Manage Billing Information
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>x
   </td>
  </tr>
</table>


>**NOTE**: Every Screener user has an individual account, and will be the Account Owner for their own account. When a user is added to a team in another user's account, they will have access to the project(s) as defined by their role in the team.

>**NOTE**: When a user is added as an Administrator, this user will have access to all projects within the account. There is no option to add a specific project to the team that has an Administrator role. Administrators have access to add/edit/delete projects.

>**NOTE**: If a user is assigned to more than 1 team with different roles, and there is a common project(s) between the teams, the highest role/permissions will be assigned to the user.


## 3. Create a Team
Creating a team will allow you to specify which users have access to a specific projects. You will then assign a role to the team, allowing all users in the team to have certain permissions.

To add a new Team, click on the **+ Team** button.
<img src={useBaseUrl('img/visual/component-add-team-button.png')} alt="Component Add Team Button" />

Enter a team name, select the appropriate user role, and click **Save**.
<img src={useBaseUrl('img/visual/component-add-team.png')} alt="Component Add Team" />


## 4. Add Users to a Team
After a team is created, you can add users to a team. Click on the team you wish to add a user to, and click on **Assign Users**.

<img src={useBaseUrl('img/visual/component-add-user-button.png')} alt="Component Add User Button" width="300px" />

The **Manage Team Users** dialog will appear. Type the user's email address into the text box and click **Add User**. At this point, Screener will check to see if the user already exists in the system. If the user already exists, their email address will be added to the list of users below. If the user does not exist, you will be asked to invite the user by clicking **Click to Invite User**.
<img src={useBaseUrl('img/visual/component-add-user-team.png')} alt="Component Add User Team" />

You will see the user added to the list. For new users, you will see **To Be Invited** beside the user's email address. This highlights new users to the system. Click **Save** to save the user to the team.
<img src={useBaseUrl('img/visual/component-add-user-team-save.png')} alt="Component Add User Team Save" />

>**NOTE**: For new users who are invited to join Screener, they will receive an invitation email. They can follow the instructions in the email to complete the registration process. When they are registered, they will have access to your project(s).


## 5. Assign Projects to a Team
Assigning projects to a team allows users of the team to have access to the specified projects. To add a project to a team, in the **Team Management** page, click on the team you wish to add a project to, and click on **Assign Projects**.
<img src={useBaseUrl('img/visual/component-add-project-team.png')} alt="Component Add Project Team" width="300px" />

The **Manage Team Projects** dialog will appear. Select the project(s) you wish to add and click **Save**.
<img src={useBaseUrl('img/visual/component-add-project-team-save.png')} alt="Component Add Project Team Save" />

## 6. Administer Another Account

When a user is given administrative access to another user's account, he will have access to manage all teams and projects in the other Account. In addition, all Screener users have their own Account, so an administrator needs to pay attention to which Account they are adding a Team or Project to.

When creating a new Project in another account you are an administrator for, you will have the option to select which account to add the Project to.

<img src={useBaseUrl('img/visual/component-add-project-another-account.png')} alt="Component Add Project Another Account" width="450px" />

When Managing Teams, a user who has the administrator role in another account can select the Account to view all teams in that specific Account.
<img src={useBaseUrl('img/visual/component-add-team-another-account.png')} alt="Component Add Team Another Account" />
