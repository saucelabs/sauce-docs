---
id: real-devices
title: Account and Team Management for TestObject (Legacy)
sidebar_label: TestObject (Legacy)
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Signing into a Real Device Project with TestObject
If you want to set up an account for real device testing with Sauce Labs via TestObject, our legacy platform, or you have an existing TestObject account and want to log in to access real devices, you first need to log into TestObject.

1. Log in to Sauce Labs with your account credentials.
2. To access the TestObject UI from Sauce Labs, in the left panel, click **SAUCE APPS** and then click **Legacy RDC**.

<img src={useBaseUrl('img/team-mgmt/legacy-rdc-nav.png')} alt="TestObject (Legacy) Apps page" width="250"/>

Your real device projects will be listed on the **Apps** page.

<img src={useBaseUrl('img/team-mgmt/legacy-rdc-apps.png')} alt="TestObject (Legacy) navigation" width="450"/>

## Linking a TestObject Account to Sauce Labs Login
Your Real Device Cloud account is automatically linked to your Sauce Labs account based on your Sauce Labs account name. To make sure your TestObject account is linked with your Sauce Labs login:

1. Log in to [TestObject](https://app.testobject.com/#/login) with your TestObject account credentials.
2. In the upper-right corner of the page, click the **Back to Sauce Labs** icon.

<img src={useBaseUrl('img/team-mgmt/legacy-rdc-back-to-sauce.png')} alt="Back to Sauce from TestObject" width="250"/>

This will link your TestObject account with your Sauce Labs account.

## Team Structures for Sauce Labs and TestObject

If you have set up a team on Sauce Labs for working with virtual devices, that same team structure will be mirrored for your TestObject account. However, because the team structure for your virtual device account can have several layers, while the team structure for TestObject accounts is flat, only administrators for your organization will be set up as team admins. All virtual device account team members will be set up as members of the same team for your TestObject account.

## Adding Users to a Team
If you add team members to your Sauce Labs account, they will also be automatically added to your TestObject account.

## Switching to the Sauce Labs UI
To return to the Sauce Labs UI from TestObject, in the upper-right corner of the page, click the **Back to Sauce Labs** icon.
