---
id: multi-site
title: Multiple Accounts
sidebar_label: Multiple Accounts
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Multiple Accounts (Multi-Site Configuration)

A **Multi-Site configuration** is designed for a single customer requiring separate, isolated environments for different internal organizations or divisions. While sharing the same underlying database and storage, each organization operates independently, ensuring their applications and testers remain distinct and unaware of each other.

## Key Benefits

- **Data Isolation**: Each organization's data and activity are kept separate.
- **Shared Resources**: Efficient utilization of a single database and storage backend.
- **Centralized Authentication**: Leverages a single SAML login for all organizations.
- **Simplified Access**: Users within a specific organization are automatically directed to their appropriate account upon SSO login  
  _e.g., `mygamecompany.testfairy.com`_.

## Conceptual Overview

Think of it as a **"layer of organizations"** within your dedicated server, similar to a **"Level of Business (LoB)"** structure. For example:

> **My Game Company** could have:  
> - US Studio  
> - EU Studio  
> - Australia Studio  

All operating under a single SSO server and unified domain, ensuring a seamless and consistent login experience regardless of the user's organizational affiliation.


## How to Manage a Multi-Site Instance

### Create an Account/Site:

To create an organization called “**_Account_**” in our platform, follow these steps:

1. Simply click on the “**Create New Account”** button in the top left corner of the website:  
   <img src={useBaseUrl('/img/testfairy/using-tf/create-new-account.png')} alt="video disabled"/>
2. This will open a pop-up window to choose an **Account Name** and define the login option:

   <img src={useBaseUrl('/img/testfairy/using-tf/new-account-creation-form.png')} alt="video disabled"/>

   **Site Owner/ Site Manager**

   That’s it\! Your account is created, and you can log in by clicking on the “Login Account→” button:

<img src={useBaseUrl('/img/testfairy/using-tf/login-to-account-view.png')} alt="video disabled"/>

### Switching between Accounts/Sites:

After creating multiple sites/accounts, the **Site Owner/ Site Manager** can switch between sites, as they can view the site manager layout.  
**Site admin** can only switch between the sites if it has been added to multiple sites.  
This can be easily accomplished with the following steps:

1. Under the Account menu on the top right corner, select Switch Accounts menu

   <img src={useBaseUrl('/img/testfairy/using-tf/switch-accounts.png')} alt="video disabled"/>

2. Choose the new account and click Switch.

   <img src={useBaseUrl('/img/testfairy/using-tf/account-switch-dropdown-list.png')} alt="video disabled"/>

### Deleting an Account/Site:

An account can be deleted by clicking the three dots next to "Login Account," as shown in the image below: <img src={useBaseUrl('/img/testfairy/using-tf/delete-account.jpeg')} alt="Icon" /> Please note that the option to delete an account **is only displayed** once no apps exist. To delete an account, please remove ALL apps from it first. If there are many apps, please submit a Support Request ticket to the Mobile App Distribution team.

Other notes to consider:

- You must have at least two site accounts for these dots to appear.
- This action also deletes team members.

## Users and Roles

### View as Tester:

View as Tester feature allows Admins to masquerade through the Testers dashboard easily by clicking the icon<img src={useBaseUrl('/img/testfairy/using-tf/ic_woman.png')} alt="Icon Woman" style={{display: 'inline', width: '0.5in'}}/>in the [beta testers tab](https://mobile.saucelabs.com/testers) for a specific tester if it is enabled, like the image below:  
<img src={useBaseUrl('/img/testfairy/using-tf/account-switch-dropdown-list.png')} alt="video disabled"/>
This feature will behave differently based on the Instance Type:

- Public cloud:
  - This is only enabled in Public Cloud when the Enterprise has the “_View as a tester”_ feature.
  - When enabled, it will only list the apps for the tester that are related to that Enterprise instance, as a tester can be assigned to multiple Enterprises with the same account.
- Private Cloud:
  - This is enabled by default for Private Instances.
  - Single-Site
    - When clicked, the icon will list all the tester's apps for the Admin, as the tester only has one organization in single-site mode.
  - Multi-Site
    - As a tester can have an account associated with multiple organizations, it will only list the tester's apps for the current logged-in organization.

## Roles

It is essential first to understand that all accounts are divided into two categories:

- Users
  - A user is a member who can view all apps in the account, download these apps, upload new versions, and more.
  - The list of members in Account \> Team includes only Users, never Beta Testers, though a User can also be a Tester (for this organization and other organizations).
- Testers
  - Testers are humans who can only download an app. They cannot invite other humans and can only download apps via email invitation, landing page, or tester’s dashboard (logging in through mobile will automatically take them to this dashboard).

| Role                                                                                             | Explanation                                                                                                                    |
|:-------------------------------------------------------------------------------------------------| :----------------------------------------------------------------------------------------------------------------------------- |
| "Member" (managed through Sauce IAM)                                                             | Users with read-only access. Can view and download apps but cannot upload, delete, or modify. Does not have an API key.        |
| "Admin" (separated from Sauce IAM)                                                               | Users with read-write access. Can upload apps, delete apps, download apps, and use the REST API with their API key.            |
| "Organization Admin" (managed through Sauce IAM) or "Account Manager" (separated from Sauce IAM) | Same as Admin, but can also invite and manage other users in the account. Usually only a few users have this role.             |
| "Account Owner"                                                                                  | A single user who owns the entire organization. Has full permissions. Cannot be deleted.                                       |
| "Site Manager"                                                                                   | Only applicable for Private Cloud + Multi-Site. Can create and manage organizations within the same private instance.          |

:::warning API Access and Service Accounts
For programmatic API access (CI/CD pipelines, automation scripts, integrations), create dedicated **service accounts** with the **Admin** role. The **Member** role does not receive an API key and has read-only access. Do not use Site Manager, Account Owner, Account Manager, or personal accounts for automated API access. See [Service Accounts and API Keys](/testfairy/security/service-accounts) for detailed guidance.
:::

### How to see the current user roles?

You can find the user roles based on how your team is currently managed:

- **Through Sauce Labs’ IAM**

  - You can see user roles by clicking on Account \-\> Team, which will redirect you to the [Team Management | Sauce Labs](https://app.saucelabs.com/team-management/users) page. User Roles are visible in the picture:

  <img src={useBaseUrl('/img/testfairy/using-tf/account-user-roles.jpeg')} alt="video disabled"/>

- **Separated from Sauce Labs’ IAM**

  - In this case, you can see the current user roles by clicking the **_Account-Teams_** menu, which will redirect you to the [Teams](https://mobile.saucelabs.com/settings/cpanel/) page, and the user roles are listed below:
  - In Multi-Site **Teams, it** is titled **_Admin Management_**

        <img src={useBaseUrl('/img/testfairy/using-tf/own-account-user-roles.png')} alt="video disabled"/>

    s an “Account Manager” or “Account Owner” must invite all the users acting as developers on the account. They must explicitly provide the email addresses of people uploading apps, etc.
