---
id: ping-id
title: Ping Identity
sidebar_label: Ping Identity
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

When SSO is configured into your account, the login page is replaced with a **Login with sso** button.

## Setting Up Ping Identity In Your Account

1. Log in to Ping Identity's admin dashboard. Click on **Add Application** and select **Search Application Catalog**.

1. Type `TestFairy` into the search box and select the application. Click on the "expand" arrow.

1. Click on **Setup**. There is no need to change the configuration.

1. Click on **Continue to Next Step**.

1. Type in the ACS URL and Entity ID. For `ACS URL`, use the following format `https://acme.testfairy.com/login/sso`, and replace 'acme' with your subdomain.

For **Entity ID**, use the same format, **https://acme.testfairy.com**, and again, replace **acme** with your subdomain.

1. Click **Continue to Next Step**.

1. Click **Save & Publish**, and then click on **Finish**.

1. Download **SAML Metadata**.

1. Login to App Distribution, and select **Preferences**.

1. Copy the contents of the file you just downloaded, and paste it into the textbox. Click on **Update SAML ID Provider Metadata**.
