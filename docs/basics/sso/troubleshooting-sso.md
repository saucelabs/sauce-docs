---
id: troubleshooting-sso
title: Troubleshooting SSO
sidebar_label: Troubleshooting SSO
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<p><span className="sauceGreen">Enterprise Plans only</span></p>

:::caution
If you have previously implemented the [deprecated SSO integration](/basics/sso-deprecated/setting-up-single-sign-on/) and wish to migrate to the new SSO implementation, follow our [step-by-step migration tutorial](/basics/sso/migration-from-deprecated-sso/).
:::
<br/>

When integrating SAML Single Sign-On (SSO) into your system, it's crucial to ensure that all configurations are correctly set up. This guide provides common troubleshooting tips and steps for debugging SAML SSO authentication issues, particularly using browser-based tools like the Chrome SAML debug extension.

## Common Mistakes in SAML SSO Configuration

### Incorrect Configuration in Identity Provider

- Double-check that you have entered the [correct values](/basics/sso/setting-up-sso#service-provider-saml-requirements) in the SAML app configuration in your identity provider. For ease and accuracy, consider using the preconfigured Sauce Labs app from your [identity provider app catalog](/basics/sso/setting-up-sso#setting-up-identity-provider).

### Incorrect [Name ID Attribute](/basics/sso/setting-up-sso#name-id) Format or Value

- Ensure that the Name ID (also known as SAML_SUBJECT) in your identity provider configuration is set to a valid email address, not a username.
- Verify that the Name ID format is correctly set to `urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress`.

### Misconfiguration on the Identity Provider's Side

- An "Invalid Status code in Response" error indicates an authentication failure from your identity provider, not Sauce Labs.
  <br/><img src={useBaseUrl('img/basics/sso/troubleshooting/invalid-status-code-in-response.png')} alt="Error: Invalid Status code in Response" width="900" />
- The error details can be found in the SAML Response, under the **StatusCode** and **StatusMessage** tags. Use a [SAML debugger](#how-to-debug-saml-sso-authentication) to capture the SAML response. For example, the error below says that you set wrong [Name ID format](/basics/sso/setting-up-sso#name-id).
  <br/><img src={useBaseUrl('img/basics/sso/troubleshooting/saml-response-error.png')} alt="SAML Response Error" width="700" />

### Wrong Metadata Uploaded (Error: "Issuer in Response is invalid")

- This error indicates a mismatch between the Issuer (Identity Provider identifier) in the SAML request and the metadata uploaded to Sauce Labs.
  <br/><img src={useBaseUrl('img/basics/sso/troubleshooting/invalid-metadata-issuer-error.png')} alt="Invalid Metadata Issuer Error" width="550" />
- Re-download the metadata from your identity provider's Sauce Labs SAML app and re-upload it in the [Organization Management](/basics/sso/setting-up-sso#integrating-with-sauce-labs-service-provider) section.

### Service Provider Initiated SSO Email Error

- If this error occurs, check that:

1.  The account with the provided email is part of your Sauce Labs organization with SSO enabled.
2.  Your [company email domains](/basics/sso/setting-up-sso#email-domains) are correctly assigned to your Sauce Labs organization.
3.  SSO is enabled ([step 5 in the integration tutorial](/basics/sso/setting-up-sso#integrating-with-sauce-labs-service-provider)).
    <br/><img src={useBaseUrl('img/basics/sso/troubleshooting/sp-initiated-sso-email-error.png')} alt="SP-initiated SSO email error" width="550" />

### Using Legacy SSO Endpoints

- This error means that your identity provider's Sauce Labs SAML app is configured with legacy SSO endpoints.
  <br/><img src={useBaseUrl('img/basics/sso/troubleshooting/legacy-sso-error.png')} alt="Legacy SSO Error" width="550" />
- Follow the [migration tutorial](/basics/sso/migration-from-deprecated-sso/#migration-tutorial) to ensure you use the [correct endpoints and configuration values](/basics/sso/setting-up-sso#service-provider-saml-requirements).

## How to Debug SAML SSO Authentication?

To effectively debug SAML SSO authentication issues, using browser extensions such as the SAML Tracer can be highly beneficial. Here's a step-by-step guide on how to use it.

### Step 1: Install SAML Tracer

First, you need to install the SAML Tracer extension in your Google Chrome browser.

1. Navigate to the [SAML Tracer page](https://chromewebstore.google.com/detail/saml-tracer/mpdajninpobndbfcldcmbpnnbhibjmch?pli=1) on the Chrome Web Store.
2. Click `Add to Chrome` to install the extension.
3. Once installed, the SAML Tracer icon will appear in your browser’s extension toolbar.

### Step 2: Capture SAML Messages

Begin the SSO login process as usual in your web application.

1. Ensure that the SAML Tracer window is open before you start the SSO process.
2. With SAML Tracer running, proceed with the SSO authentication.
3. As you authenticate, SAML Tracer will capture the HTTP traffic.
4. Look for HTTP requests marked with a `SAML` label, indicating SAML-related traffic.

### Step 3: Analyze SAML Messages

Analyze the captured SAML messages for troubleshooting:

1. In the SAML Tracer window, click on a SAML-labeled HTTP request.
2. Switch to the `SAML` tab in the details pane to view the SAML message.
3. Review the details in the `Summary` tab, including issuer, audience, session index, and any attributes or conditions.
