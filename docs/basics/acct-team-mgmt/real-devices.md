---
id: real-devices
title: Account and Team Management for Real Devices
sidebar_label: Real Devices
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Select your preferred platform – Sauce Labs or TestObject (Legacy):

<Tabs
  defaultValue="sauce"
  values={[
    {label: 'Sauce Labs UI', value: 'sauce'},
    {label: 'TestObject UI (Legacy)', value: 'testobject'},
  ]}>

<TabItem value="sauce">

## Signing into a Real Device Project with Sauce Labs
If you want to set up an account for real device testing with Sauce Labs, or you have an existing account and want to log in to access real devices, you first need to log into Sauce Labs.

1. Sign up for a real device testing account with Sauce Labs (see [Pricing Plans](https://saucelabs.com/pricing) for more information).
2. On the Sauce Labs login page, enter your credentials and then click **Sign In**.

<img src={useBaseUrl('img/insights/ninjabot.png')} alt="Ninja!" width="650"/>

3. Click **AUTOMATED** and then click **Test Results**.
4. On the **Test Results** page, click the **Real Devices** radio button.

<img src={useBaseUrl('img/insights/ninjabot.png')} alt="Ninja!" width="650"/>

## Adding Users and Teams to Real Device Accounts
If you are the owner of a real device account, you can add other team members to your account through email invitations, or manually via the Sauce Labs UI. For information about adding users and teams, see [Adding and Deactivating Users](/basics/acct-team-mgmt/adding-deactivating-users) and [Adding and Deleting Teams](/basics/acct-team-mgmt/adding-deleting-teams).

## Linking Real Device Accounts to Sauce Labs Logins
Your Real Device Cloud account is automatically linked to your Sauce Labs account based on your Sauce Labs account name. To make sure your RDC account is linked with your Sauce Labs login:

1. Log in to Sauce Labs with your account credentials.
2. Click **AUTOMATED** and then click **Test Results**.
3. On the **Test Results** page, click the **Real Devices** radio button.

<img src={useBaseUrl('img/insights/ninjabot.png')} alt="Ninja!" width="650"/>

This will automatically link your Sauce Labs account with the Real Device Cloud account.

### Team Structures for Sauce Labs and Real Device Accounts

If you have set up a team on Sauce Labs for working with virtual devices, that same team structure will be mirrored for your real device cloud account. However, because the team structure for your virtual device account can have several layers, while the team structure for real device accounts is flat, only administrators for your organization will be set up as team admins. All virtual device account team members will be set up as members of the same team for your real device account.

## Adding Users to a Team
If you add team members to your Sauce Labs account, they will also be automatically added to your real device cloud account. For information about adding users to a team, see [Assigning and Removing Users from Teams](/basics/acct-team-mgmt/assigning-removing-users-teams).

</TabItem>

<TabItem value="testobject">

## Signing into a Real Device Project with TestObject
If you want to set up an account for real device testing with Sauce Labs via TestObject, our legacy platform, or you have an existing TestObject account and want to log in to access real devices, you first need to log into TestObject.

1. Log in to Sauce Labs with your account credentials.
2. To access the TestObject UI from Sauce Labs, in the left panel, click **SAUCE APPS** and then click **Legacy RDC**.

<img src={useBaseUrl('img/team-mgmt/legacy-rdc-nav.png')} alt="TestObject (Legacy) Apps page" width="250"/>

Your real device projects will be listed on the **Apps** page.

<img src={useBaseUrl('img/team-mgmt/legacy-rdc-apps.png')} alt="TestObject (Legacy) navigation" width="450"/>

## Adding Users and Teams in TestObject
If you are the owner of a real device account, you can add other team members to your account through email invitations.

## Linking TestObject Accounts to Sauce Labs Logins
Your Real Device Cloud account is automatically linked to your Sauce Labs account based on your Sauce Labs account name. To make sure your TestObject account is linked with your Sauce Labs login:

1. Log in to [TestObject](https://app.testobject.com/#/login) with your TestObject account credentials.
2. In the upper-right corner of the page, click the **Back to Sauce Labs** icon.

<img src={useBaseUrl('img/team-mgmt/legacy-rdc-back-to-sauce.png')} alt="Back to Sauce from TestObject" width="250"/>

This will link your TestObject account with your Sauce Labs account.

## Team Structures for Sauce Labs and TestObject

If you have set up a team on Sauce Labs for working with virtual devices, that same team structure will be mirrored for your TestObject account. However, because the team structure for your virtual device account can have several layers, while the team structure for TestObject accounts is flat, only administrators for your organization will be set up as team admins. All virtual device account team members will be set up as members of the same team for your TestObject account.

## Adding Users to a Team
If you add team members to your Sauce Labs account, they will also be automatically added to your TestObject account. If you add users to your TestObject account directly, they will not also be added to your Sauce Labs account.

To add users directly to your TestObject account:

1. Log in to [TestObject](https://app.testobject.com/#/login) with your TestObject account credentials.
2. In the upper-right corner of the page, click the user profile icon, and then click **Account Settings.**

<img src={useBaseUrl('img/insights/ninjabot.png')} alt="Ninja!" width="650"/>

3. Click the **Team** tab.

Enter the email address of the person you want to add to your team, and click Invite.

This will send an email with a temporary password to that team member, and your new team member can log in and set their own password and user information. This will also create the new user's real device cloud account, so there is no need for them to log into saucelabs.com and then create the link between their accounts as described in the section above.

Please visit the following page a deeper dive on configuring user access settings

Switching to the Sauce Labs UI
To return to the Sauce Labs UI from TestObject, click the Back to Sauce Labs button.

</TabItem>
</Tabs>
