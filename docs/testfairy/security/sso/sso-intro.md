---
id: sso-intro
title: SSO
sidebar_label: Getting Started
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Single Sign-on (SSO) enables you to manage users and testers outside of TestFairy, providing enhanced security and a streamlined user experience. With TestFairy's SAML support, you can seamlessly integrate with popular SSO providers such as Okta, OneLogin, Ping, Oracle, IBM, and Azure ADFS.

## Integrating TestFairy

To integrate TestFairy with your preferred SAML/SSO provider, refer to our integration guides for each supported provider below. These guides provide detailed instructions on configuring TestFairy with Okta, OneLogin, Ping, Oracle, IBM, and Azure ADFS, respectively :

|                                                                                                                   |                                                         |
| :---------------------------------------------------------------------------------------------------------------: |---------------------------------------------------------|
|           <img src={useBaseUrl('/img/testfairy/acct-mgmt/Okta_Logo.png')} alt="OKTA logo" width="100"/>           | [OKTA](/testfairy/security/sso/okta)                    |
|             <img src={useBaseUrl('/img/testfairy/acct-mgmt/onelogin-logo.png')} alt="onelogin logo"/>             | [OneLogin](/testfairy/security/sso/onelogin)            |
| <img src={useBaseUrl('/img/testfairy/acct-mgmt/azure-logo.png')} alt="Azure active directory logo" width="200" /> | [Azure Active Directory](/testfairy/security/sso/azure) |
|    <img src={useBaseUrl('/img/testfairy/acct-mgmt/google-apps-logo.png')} alt="google apps logo" width="200"/>    | [Google Apps](/testfairy/security/sso/google)           |
|  <img src={useBaseUrl('/img/testfairy/acct-mgmt/pingidentity-logo.png')} alt="pingidentity logo" width="100" />   | [Ping Identity](/testfairy/security/sso/ping-id)        |

Once SSO is properly configured, the TestFairy login page will be replaced with a **Login with SSO** button. This button serves as the entry point to authenticate via your SSO provider and gain access to TestFairy.
