---
id: adding-deactivating-users
title: Adding and Deactivating Users
sidebar_label: Adding and Deactivating Users
---
import useBaseUrl from '@docusaurus/useBaseUrl';

<p><span className="sauceDBlue">ENTERPRISE PLANS ONLY</span></p>

## Adding Users
If you are an organization administrator, you can add users to your organization or team by inviting them via email, or by adding them manually to the organization or team.

When you add a user manually, you assign the user a user name and password. To allow a user to set their own user name and password, invite them via email.

### Adding a User Manually
1. In Sauce Labs, click **ACCOUNT** and then click **Team Management**.

   <img src={useBaseUrl('img/team-mgmt/team-mgmt-nav.png')} alt="Team management navigation" width="400"/>

2. On the **USERS** tab, click the blue plus sign.

   <img src={useBaseUrl('img/team-mgmt/add-new-user-nav.jpg')} alt="Add new user - Blue plus sign" width="700"/>

3. On the **MANUAL ENTRY** tab, enter an email address, user name, password, and optional first and last name for the new user.

   <img src={useBaseUrl('img/team-mgmt/add-new-user-manual.jpg')} alt="Add new user - manually" width="500"/>

4. In the **ADD TO TEAM** dropdown, select the team for the user. If you don't select a team, the user will be added to the default team.  
5. In the **ORG ROLE** dropdown, select an organizational role for the user. The options are Org. Admin, Team Member, and Member. For more information about the permissions associated with each role, see [User Roles](https://docs.saucelabs.com/basics/acct-team-mgmt/managing-user-info/#user-roles).
6. Click **ADD USER**.

### Adding a User Via Email
1. In Sauce Labs, click **ACCOUNT** and then click **Team Management**.
2. On the **USERS** tab, click the blue plus sign.
3. On the **INVITE VIA EMAIL** tab, enter the user's email address, and then select a role from the **USER ROLE** dropdown.

   <img src={useBaseUrl('img/team-mgmt/add-new-user-email.jpg')} alt="Add new user - email" width="500"/>

4. To invite multiple users to the same team, click **Add Another Row** and add the additional users' information.
5. In the **ADD TO TEAM** dropdown, select the team to which to add the user(s).
6. Click **SEND INVITE**.

:::note
If you invite a user by email, you will need to wait until they accept your invitation before you can edit the concurrency settings for their account and associate them with other accounts.  
:::

### SSO Considerations

If SSO and the **Require Single Sign-On** option are enabled for your organization (see [Single Sign-On Settings](https://docs.saucelabs.com/basics/acct-team-mgmt/org-settings/#single-sign-on-settings)), new users will be outside your IdP. This means they will not be able to log in to Sauce Labs using the credentials you provided when you created their account (they will be able to run test automation, however). In this situation, you should add users manually.

If SSO is enabled but the **Require Single Sign-On** option is not, you can add new users manually or invite them via email.

For example, in the following scenarios you may need to add non-SSO users to your Sauce Labs account:

- You have a user account for Jenkins or another CI/CD server that needs to access Sauce Labs, but won't log in via the UI. This option is consistent with the **Require Single Sign-On** option, as that machine or user will never log into the SauceLabs portal.
- You have a group of contractors who will be using your Sauce Labs account, but won't be added to your organization's IdP. This option is NOT consistent with the **Require Single Sign-On** option, as in this case the contractors are likely to need access to the Sauce Labs portal.

## Deactivating Users
You can deactivate users in your account on the **Organization Management** page and also on the **User Details** page.

### Deactivating a User - Organization Management
1. In Sauce Labs, click **ACCOUNT** and then click **Team Management**.
2. On the **USERS** tab, select the check box of the user you want to deactivate.
3. Above the list of users, in the **Action** dropdown, click **Deactivate User**.

   <img src={useBaseUrl('img/team-mgmt/deactivate-user-org-mgmt.jpg')} alt="Deactivate a user in team management"/>

4. In the **Confirm deactivate** box, click **Yes, Deactivate**.

### Deactivating a User - User Details
1. In Sauce Labs, click **ACCOUNT** and then click **Team Management**.
2. On the **USERS** tab, click the user name of the user you want to deactivate.

   <img src={useBaseUrl('img/team-mgmt/users-list-username.jpg')} alt="Deactivate a user in User Details"/>

3. On the **User Details** page, in the **USER NAME** box, click **DEACTIVATE USER**.

   <img src={useBaseUrl('img/team-mgmt/deactivate-user-user-details.jpg')} alt="Deactivate a user in User Details"/>

4. In the **Confirm deactivate** box, click **Yes, Deactivate**.
