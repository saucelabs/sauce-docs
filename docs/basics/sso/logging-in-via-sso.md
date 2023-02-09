---
id: logging-in-via-sso
title: Logging In via SSO
sidebar_label: Logging In via SSO
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<p><span className="sauceDBlue">Enterprise Plans only</span></p>

When using SAML SSO, we have two methods for starting Single Sign-On (SSO): [SP-initiated](#service-provider-sp-initiated-sso) or [IdP-initiated](#identity-provider-idp-initiated-sso).

## Service Provider (SP) initiated SSO

1. Go to [the Sauce Labs login page](https://accounts.saucelabs.com).

2. Click the button **`SSO`**.

<img src={useBaseUrl('img/basics/sso/setup-sso-sso-btn.png')} alt="SSO Login Button" width="500" />

3. Input your company email address and click **`Log in`**.

<img src={useBaseUrl('img/basics/sso/login-sso-input-email.png')} alt="Input SSO Email" width="500" />

4. You will be redirected to your identity provider in order to authenticate with your company credentials.

5. If you are already authenticated at your identity provider, you will be redirected to Sauce Labs dashboard.

:::tip
If new users are not able to log in via SP-initiated flow, most probably your company email domains were not assigned to your organization. Check [here](/basics/sso/setting-up-sso#email-domains) how to do that.
:::

### Deep linking

Copying and pasting links is the quickest way to share pages.

If you paste a link to for example a test results page at Sauce Labs and you are not authenticated. You will be redirected to the Sauce Labs login page.

<img src={useBaseUrl('img/basics/sso/login-sso-login-page.png')} alt="Login Page" width="500" />

2. Follow the steps from [the SP-initiated flow](#service-provider-sp-initiated-sso):

   - Click the button **`SSO`**.
   - Input your company email address.
   - Click the button **`Log in`**.

3. And you will be redirected to the requested page.

## Identity Provider (IdP) initiated SSO

1. Log into your identity provider dashboard, for example Okta.

2. Click on **`Sauce Labs`** tile in your applications catalogue.

<img src={useBaseUrl('img/basics/sso/login-sso-okta-dashboard.png')} alt="Okta Dashboard" width="500" />

3. After successful authentication, you will be redirected to Sauce Labs dashboard.
