---
id: onelogin
title: OneLogin
sidebar_label: OneLogin 
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

When SSO is configured into your account, the login page is replaced with a **Login with SSO** button.

## Setting Up OneLogin In Your Account

1. Log in to OneLogin, and click **NEW APP**.

1. Enter **TestFairy** in the search box, and select the application.

1. Click **Save**.

1. Enter your TestFairy subdomain (for example, acme) under the **Configuration** tab. Then, click **Save**.

1. Click on **More Actions** and select **SAML Metadata**.

1. Login to TestFairy, and select **Preferences**.

1. Copy the contents of the file you've just downloaded and paste it into the textbox. Click on **Update SAML ID Provider Metadata**.
