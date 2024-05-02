---
id: saml-sso
title: Single Sign-On with SAML
sidebar_label: SAML Single Sign-On
description: Configure Backtrace to allow users to authenticate with single sign-on (SSO) via a SAML identity provider.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Identity Provider Configuration

First, the identity provider configuration should be completed. The following settings are required:

| Settings              | Expected Value                                               |
| --------------------- | ------------------------------------------------------------ |
| **EntityID** (Issuer) | `https://saml.backtrace.io` (for Backtrace hosted instances) |
| **NameID**            | Your primary email address                                   |

## Configure SSO

:::note On-premise (self-hosted)
This functionality requires on premise deployments to install and run the **backtrace-saml** package and service.
:::

1. As an admin user, go to **Organization settings** > **Single sign-on**.
1. Enter the following configuration settings:
   - **Entity ID (issuer)**: ID for the service provider (Backtrace). By default, hosted Backtrace tenants will have a value of `https://saml.backtrace.io` for the Entity ID. This setting needs to be the same in your identity provider's configuration.
   - **SSO URL**: URL pointing to the identity provider.
   - **Callback URL**: URL for the identity provider to post the SAML payload to the service provider (Backtrace). The required format is: https:<span>//saml.backtrace.io/api/sso/saml/\{backtrace hostname} </span>. For example: https:<span>//saml.backtrace.io/api/sso/saml/organization.sp.backtrace.io </span>
   - **User provisioning (optional)**: User provisioning, if enabled, allows the SAML SSO service to create a Backtrace user on the return of a successful assertion from the identity provider.
   - **Admin contact (optional)**: The email contact that will display upon SSO login failure, to direct users to appropriate SSO resources within the organization.
   - **SAML request private key (optional)**: Identity provider's private key for signing SAML requests. Includes signature algorithm and private key.
   - **Certificate (optional)**: Identity provider's public signing certificate used to validate the signatures of SAML Responses. Includes public certificate and private key.
   - **Private key (optional)**: Private key that will be used to attempt to decrypt any encrypted assertions from the identity provider.

Once the configuration is saved, click **Test configuration** to verify the configuration.

### User Management and Authentication

In **Organization settings** > **Users**, admin users can edit users' authentication method. If SSO is configured, existing users will be able to sign in via SSO and their specified authentication method, if it's different than saml. If a user's authentication method is set to SAML, then they will only be able to sign in via SSO.

## Troubleshooting

Verify the following:

- Encrypted assertions are disabled within your SAML identity provider configuration.
- Your primary email address is used as the NameID format.
- Your certificates are properly configured within `saml.json` and have the proper CNAMES for your **backtrace-saml** host.
- On-premise: If you see the "Failed to login - Internal Error" error message, make sure the IP address of your **backtrace-saml** service host is listed within the authenticated section of `coronerd.conf`.
