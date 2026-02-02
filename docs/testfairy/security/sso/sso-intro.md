---
id: sso-intro
title: SSO
sidebar_label: Getting Started
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Single Sign-on (SSO) enables you to manage users and testers outside of Sauce Labs Mobile App Distribution, providing enhanced security and a streamlined user experience. With Sauce Labs Mobile App Distribution's SAML support (for more information, see [SAML Custom roles](/testfairy/security/sso/saml/)), you can seamlessly integrate with popular SSO providers such as Okta, OneLogin, Ping, Oracle, IBM, and Azure ADFS.

## Integrating Sauce Labs Mobile App Distribution

To integrate Sauce Labs Mobile App Distribution with your preferred SAML/SSO provider, refer to our integration guides for each supported provider below. These guides provide detailed instructions on configuring Sauce Labs Mobile App Distribution with Okta, OneLogin, Ping, Oracle, IBM, and Azure ADFS, respectively :

|                                                                                                                   |                                                         |
| :---------------------------------------------------------------------------------------------------------------: |---------------------------------------------------------|
|           <img src={useBaseUrl('/img/testfairy/acct-mgmt/Okta_Logo.png')} alt="OKTA logo" width="100"/>           | [OKTA](/testfairy/security/sso/okta)                    |
|             <img src={useBaseUrl('/img/testfairy/acct-mgmt/onelogin-logo.png')} alt="onelogin logo"/>             | [OneLogin](/testfairy/security/sso/onelogin)            |
| <img src={useBaseUrl('/img/testfairy/acct-mgmt/azure-logo.png')} alt="Azure active directory logo" width="200" /> | [Azure Active Directory](/testfairy/security/sso/azure) |
|    <img src={useBaseUrl('/img/testfairy/acct-mgmt/google-apps-logo.png')} alt="google apps logo" width="200"/>    | [Google Apps](/testfairy/security/sso/google)           |
|  <img src={useBaseUrl('/img/testfairy/acct-mgmt/pingidentity-logo.png')} alt="pingidentity logo" width="100" />   | [Ping Identity](/testfairy/security/sso/ping-id)        |


Once SSO is properly configured, the Sauce Labs Mobile App Distribution login page will be replaced with a **Login with SSO** button. This button serves as the entry point to authenticate via your SSO provider and gain access to Sauce Labs Mobile App Distribution.
