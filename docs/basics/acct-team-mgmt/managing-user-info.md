---
id: managing-user-info
title: Managing User Information
sidebar_label: Managing User Information
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<p><span className="sauceDBlue">Enterprise Plans only</span></p>

## Updating User Information
Organization admins can update the name, email address, user name, role, and team assignment for any user in their organization. Team admins can update that information for users on their team. If you invite a user via email, you will need to edit their concurrency limit and other account details after they have accepted your invitation and created an account.

1. On Sauce Labs, click **ACCOUNT** and then click **Team Management**.

   <img src={useBaseUrl('img/team-mgmt/team-mgmt-nav.png')} alt="Team management navigation" width="400"/>

2. On the **USERS** tab, click the user name of the user whose information you want to edit.

   <img src={useBaseUrl('img/team-mgmt/users-list-username.jpg')} alt="User details"/>

3. On the **User Details** page, in the **User Information** section, make the necessary changes and then click **UPDATE**.

   <img src={useBaseUrl('img/team-mgmt/user-details-user-info.jpg')} alt="User details"/>

## Filtering Users

Sauce Labs offers several options for filtering your list of users. To apply one or more of the available filters:

1. On Sauce Labs, click **ACCOUNT** and then click **Team Management**.
2. On the **USERS** tab, select the checkboxes of the filters you want to apply. The user list will update accordingly.

### General Filters

| Filter  | Description | Org Admin Options |
| ------------- | ------------- | ------------- |
| Active  | Active user  | Deactivate  |
| Inactive  | The user has been deactivated by the organization admin  | Reactivate  |
| Pending  | The user has been invited via email but has not yet confirmed their invite, or the user was added manually and has not verified their email address  | Deactivate  |

### Team Filters

| Filter  | Description |
| ------------- | ------------- |
| Team name  | Filters by team  |

## Changing a User's Role

:::note
Only an organization admin can change a user’s role.
:::

You can change a user’s role on the **Organization Management** page and also on the **User Details** page.

### Changing a User’s Role - Organization Management
1. On Sauce Labs, click **ACCOUNT** and then click **Team Management**.
2. On the **USERS** tab, select the checkbox of the user you want to deactivate.
3. Above the list of users, in the **Action** dropdown, click **Assign Role** and then click the new role.

   <img src={useBaseUrl('img/team-mgmt/change-role-org-mgmt.jpg')} alt="Change a user's role"/>

### Changing a User’s Role - User Details
1. On Sauce Labs, click **ACCOUNT** and then click **Team Management**.
2. On the **USERS** tab, click the user name of the user whose role you want to change.

   <img src={useBaseUrl('img/team-mgmt/users-list-username.jpg')} alt="Users list"/>

3. On the **User Details** page, in the **User Information** section, click the **ORG. ROLE** dropdown and then click the new role.

   <img src={useBaseUrl('img/team-mgmt/change-role-user-details.jpg')} alt="Change a user's role"/>

4. Click **UPDATE**.

## Regenerating Access Keys

You can regenerate a user's access key on the **Organization Management** page.

1. On Sauce Labs, click **ACCOUNT** and then click **Team Management**.
2. On the **USERS** tab, click the user name of the user whose access key you want to regenerate.

   <img src={useBaseUrl('img/team-mgmt/users-list-username.jpg')} alt="Users list"/>

3. On the **User Details** page, in the **Access Key** section, click **REGENERATE ACCESS KEY**.

   <img src={useBaseUrl('img/team-mgmt/user-details-access-key.jpg')} alt="User Details - Access Key"/>

:::note
Regenerating your access key will update the access key throughout your configuration. Commands containing your old access key will fail.
:::

## User Roles
| Role  | Permissions |
| ------------- | ------------- |
| Organization Admin  |  <ul><li>Create and delete teams, and move teams within an organization</li><li>Manage Organization Settings</li><li>Manage users across the organization:<ul><li>Add and deactivate users</li><li>Reset user passwords</li><li>Change email addresses and names</li><li>Assign user roles</li><li>Move users between teams</li><li>View user activity</li></ul></li><li>Set concurrency allocation for teams</li><li>Sauce Connect Proxy tunnels: <ul><li>Create tunnels for users across the organization to share</li><li>Limit access to shared tunnels</li><li>Stop any and all tunnels</li></ul></li><li>View all jobs in the organization</li></ul> |  
| Team Admin   | <ul><li>Only a user assigned to a team can become a team admin</li><li>Manage the team and users on the team</li><li>View team usage and users assigned to the team</li><li>Sauce Connect Proxy Team tunnels: <ul><li>View shared tunnels and non-shared tunnels created by team members</li><li>Start shared tunnels</li><li>Stop tunnels they have started</li></ul></li><li>Manage users on the team:<ul><li>Reset user passwords</li><li>Change email addresses and names</li><li>Move users between their team and the list of users who are not assigned to any team</li><li>View user activity</li></ul></li><li>View jobs that were run by team members</li><li>View jobs that were run by members of other teams</li></ul>  |      
| Team Member  | <ul><li>Edit personal information such as name, password, and email address</li><li>View jobs that were run by other team members</li><li>View jobs that were run by members of other teams in the organization</li><li>Sauce Connect Proxy tunnels: <ul><li>Start tunnels for individual use or to be shared with other team members</li><li>Stop tunnels they have started</li></ul></li></ul>  |  


In every organization, multiple Organization Admins and/or Team Admins can exist. However, users can only be part of one organization.

For more information on Sauce Connect and IPSec settings available to Organization Admins, see [Security Settings](/basics/acct-team-mgmt/org-settings#security-settings).

## User Settings
The User Settings screen allows you to view and change your username, password, and email address. You can also regenerate an access key, as well as copy a driver string (for more information, see [Regenerating Access Keys](https://docs.saucelabs.com/basics/acct-team-mgmt/managing-user-info/#regenerating-access-keys) and [Create a RemoteWebDriver Instance](https://docs.saucelabs.com/web-apps/automated-testing/selenium/#step-1-create-a-remotewebdriver-instance)). If you are an admin and want to change the settings for users in your org, see [Updating User Information](https://docs.saucelabs.com/basics/acct-team-mgmt/managing-user-info/#updating-user-information).

To access the User Settings screen, on Sauce Labs, click **ACCOUNT** and then click **User settings**.
<img src={useBaseUrl('img/team-mgmt/user-settings-nav.png')} alt="User Settings navigation" width="350"/>

## Password Policy
Sauce Labs supports two-factor authentication. See [Setting Up Single Sign-On](https://docs.saucelabs.com/basics/sso/setting-up-single-sign-on) for more information.

Strong passwords are required, and must include the following:
* One lowercase letter
* One uppercase letter
* One numerical digit
* One special character
* A minimum of 8 characters
* No blank spaces

After five failed login attempts, users will be locked out.


## Additional Resources
