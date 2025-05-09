---
id: managing-service-accounts
title: Managing Service Accounts
sidebar_label: Managing Service Accounts
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<p><span className="sauceYellow">Available as Beta only</span></p>

## Overview

Service accounts are non-human accounts designed for automated processes such as CI/CD pipelines and integrations.

:::tip
Throughout this documentation, non-human accounts will always be referred to as **service accounts**. In contrast, accounts associated with individual users and linked to an email address will be referred to as **users** or **user accounts**.
:::

Service accounts can be managed by any team administrator in their active team or any organization administrator.

Unlike user accounts, service accounts:

- Are not tied to a specific user and remain functional even if the creator is deleted.
- Cannot switch teams after creation.

Key characteristics:

- **No UI or SAML SSO Sign-In:** Service accounts cannot log in to the Sauce Labs UI or via SAML Single Sign-On.
- **No Email Notifications:** They do not have an email address and will not receive notifications.
- **Credentials for Automation:** They use a username and access key for API access and running tests as user accounts.
- **Team Assignment:** Once created, a service account is tied to a specific team and cannot be reassigned.
- **Limited Permissions:** Service accounts have limited permissions compared to user accounts, amongst others they **cannot**:
  - manage teams and accounts ([Accounts API](/dev/api/accounts/))
  - manage tunnels with Sauce Trusted Connection ([Sauce Connect API](/dev/api/connect/), [SC CLI 4](/dev/cli/sauce-connect-proxy), [SC CLI 5](/dev/cli/sauce-connect-5))
  - manage private real devices ([Private Real Device API](/dev/api/rdc/#private-real-device-management))
  - use the [API Testing API](/dev/api/api-testing/)
  - submit a crash in the [Crash/Error Reporting](/dev/api/error-reporting/)
  - use the [Virtual USB CLI](/dev/cli/virtual-usb/)

## Creating a Service Account

### As a Team Administrator

1. Click the **Account icon** <img src={useBaseUrl('img/basics/acct-team-mgmt/service-accounts/account-icon.png')} alt="Account Icon" /> in the top-right corner and select **Team management**.
2. Navigate to the **Service Accounts** tab.
3. Click **+ New Service Account**.
4. Enter a **Display name** and verify the **Assigned Team**:
   - The username is auto-generated based on the display name.
   - You can update the display name later, but the username remains fixed.
   - The service account is automatically assigned to your active team and cannot be reassigned later.
     <img src={useBaseUrl('img/basics/acct-team-mgmt/service-accounts/creation-modal-team-admin-step-1.png')} alt="Service Account Creation - Step 1"/>
5. Copy and securely store the username and the access key.
   - **Important:** The access key is available only during this step and cannot be retrieved later.
     <img src={useBaseUrl('img/basics/acct-team-mgmt/service-accounts/creation-modal-team-admin-step-2.png')} alt="Service Account Creation - Step 2"/>

### As an Organization Administrator

1. Click the **Account icon** <img src={useBaseUrl('img/basics/acct-team-mgmt/service-accounts/account-icon.png')} alt="Account Icon"/> in the top-right corner and select **Organization management**.
2. Click the **Service Accounts** tab to manage all service accounts across your entire organization.
   - Alternatively, to manage service accounts for a specific team, select that team from the **Teams** tab and then click the **Service Accounts** tab.
3. Click **+ New Service Account**.
4. Enter a **Display name** and choose the appropriate **Assigned Team**:
   - The username is auto-generated based on the display name.
   - You can update the display name later, but the username remains fixed.
   - When managing service accounts at the organization level, you can assign the account to any team but it cannot be reassigned later.
     <img src={useBaseUrl('img/basics/acct-team-mgmt/service-accounts/creation-modal-org-admin-step-1.png')} alt="Service Account Creation - Step 1"/>
5. Copy and securely store the username and the access key.
   - **Important:** The access key is available only during this step and cannot be retrieved later.
     <img src={useBaseUrl('img/basics/acct-team-mgmt/service-accounts/creation-modal-org-admin-step-2.png')} alt="Service Account Creation - Step 2"/>

## Managing Service Accounts

### Accessing the Service Account Details View

- **Team Administrators:** Can manage service accounts only in their active team. Use [the team assignment dropdown list](/basics/acct-team-mgmt/switching-active-team) to switch teams.
- **Organization Administrators:** Can manage service accounts across any team.

#### As a Team Administrator

1. Click the **Account icon** <img src={useBaseUrl('img/basics/acct-team-mgmt/service-accounts/account-icon.png')} alt="Account Icon" /> in the top-right corner and select **Team management**.
2. Click the **Service Account** tab.
3. Click on the username of the service account you want to manage.

#### As an Organization Administrator

1. Click the **Account icon** <img src={useBaseUrl('img/basics/acct-team-mgmt/service-accounts/account-icon.png')} alt="Account Icon"/> in the top-right corner and select **Organization management**.
2. Click the **Service Accounts** tab to manage all service accounts across your entire organization.
   - Alternatively, to manage service accounts for a specific team, select that team from the **Teams** tab and then click the **Service Accounts**
3. Click on the username of the service account you want to manage.

### Deleting a Service Account

1. Open the [service account details view](#accessing-the-service-account-details-view).
2. Click the delete button.
   <br/><img src={useBaseUrl('img/basics/acct-team-mgmt/service-accounts/delete-button.png')} alt="Delete button"/>
3. Confirm the deletion.

### Deleting Service Accounts in Bulk

1. Open the [service account details view](#accessing-the-service-account-details-view).
2. Select the checkboxes next to the service accounts you want to delete.
3. From the dropdown menu, choose **Delete service accounts**.
   <br/><img src={useBaseUrl('img/basics/acct-team-mgmt/service-accounts/delete-service-accounts-dropdown.png')} alt="Delete service accounts dropdown"/>

### Resetting the Access Key

1. Open the [service account details view](#accessing-the-service-account-details-view).
2. Click the reset access key button.
   <br/><img src={useBaseUrl('img/basics/acct-team-mgmt/service-accounts/reset-access-key-button.png')} alt="Reset access key button"/>
3. Confirm the reset action.
4. Copy and securely store the new access key.
   - **Important:** The access key is available only during this step and cannot be retrieved later.
     <img src={useBaseUrl('img/basics/acct-team-mgmt/service-accounts/reset-access-key-step-2.png')} alt="Reset access key - Step 2"/>

### Updating the Display Name

1. Open the [service account details view](#accessing-the-service-account-details-view).
2. Edit the display name field.
   <br/><img src={useBaseUrl('img/basics/acct-team-mgmt/service-accounts/update-display-name.png')} alt="Update display name"/>
3. Click the **Update** to save your changes.
   <br/><img src={useBaseUrl('img/basics/acct-team-mgmt/service-accounts/update-button.png')} alt="Update button"/>

:::note
Changing the display name does not affect the auto-generated username.
:::

## Running Tests as a Service Account

You can run tests as a service account in the same way you would with a user account - use the service account's username and access key.

### Viewing Test Results

Jobs run by service accounts are displayed on the [Automated Test Results page](/test-results/viewing-test-results/#automated-test-results). The visibility and permissions for jobs and builds run by service accounts are the same as those for user accounts:

- **When "Job Visibility Across Teams" is enabled** in the [Organization Security Settings](/basics/acct-team-mgmt/org-settings/#security-settings):
  Users and service accounts across all teams in your organization can view jobs and builds from any team.
- **When "Job Visibility Across Teams" is disabled:**
  Users and service accounts can only view jobs and builds associated with their active team.

### Using Sauce Connect Proxy with a Service Account

If you plan to run tests through a [Sauce Connect Proxy tunnel](/secure-connections/), be mindful of tunnel sharing options. Service accounts cannot create or manage tunnels, so you must use a tunnel that has been shared with the service account’s assigned team. For detailed configuration instructions, refer to the [shared tunnels section](/secure-connections/sauce-connect-5/guides/overview/#shared-tunnels).
