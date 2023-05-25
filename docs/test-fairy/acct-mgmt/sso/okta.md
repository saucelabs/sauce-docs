---
id: okta
title: Okta
sidebar_label: Okta 
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Single Sign-on enables you to manage users and testers outside of TestFairy. A list of permitted users and testers, as well as their passwords, is stored in OKTA. Therefore onboarding a new developer into the team is an easy task.

Talk to us! Visit here to [Request a Demo](https://www.testfairy.com/contact_us.php).

## Setting up OKTA in your account

1. Login to OKTA, click on **Admin** and pick **Add Applications** from the right sidebar.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/okta-1.png')} alt=""/>

1. Type "TestFairy" into the search form.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/okta-2.png')} alt=""/>

1. Click **Add** on the TestFairy app.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/okta-3.png')} alt=""/>

1. Next, type in the name of the team in TestFairy (it is also the name of the subdomain).
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/okta-4.png')} alt=""/>

1. Next, select authorized users. When done, click **Next**.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/okta-5.png')} alt=""/>

1. OKTA-side configuration is done. Now click **Next**.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/okta-6.png')} alt=""/>

1. In the `Sign On` menu, click on **View Setup Instructions**.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/okta-7.png')} alt=""/>

1. Copy `ID Provided Metadata` from section 4 into your clipboard.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/okta-8.png')} alt=""/>

1. Now login to https://app.testfairy.com, and open the **Preferences**.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/okta-9.png')} alt=""/>

1. In the `Security` manu item `SAML/Single Sign-on` section, paste the copied `ID Provided Metadata` into the text area.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/security-saml-okta-xml.png')} alt=""/>

1. TestFairy-side configuration is done.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/okta-11.png')} alt=""/>

Now, please logout and if SSO is configured into your account, the login page is replaced with a simple `Login with OKTA`.

<img src={useBaseUrl('/img/test-fairy/acct-mgmt/sso-login-screenshot.png')} alt=""/>

### (Optional) Automatically importing groups from OKTA

When managing large teams with OKTA, it is most likely that people are already associated with groups.

For example, say Alice is associated with the following groups in OKTA: ["QA", "QA San Francisco"].
With auto-import of groups, Alice will automatically be associated with the following groups in TestFairy next time she signs in: "okta", "okta-qa", and "okta-qa-san-francisco".
Once removed from group "QA", Alice will be automatically removed from "okta-qa" group in TestFairy, next time she signs in.

In order to import groups each time a user signs into TestFairy, please follow these instructions.

1. Open the TestFairy app in your OKTA account, select **Sing On**, and click **Edit**.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/okta1a.png')} alt=""/>

2. Click on **Attributes**.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/okta2.png')} alt=""/>

3. Under **Group Attribute Statements**, add a rule with name: "groups", (LOWERCASE!!!) and filter "Matches regex" with value `.*`. (dot asterisk)
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/okta3.png')} alt=""/>

## FAQ

### What is my login URL?

Your users will login at https://yoursubdomain.testfairy.com/login
ACS URL is https://yoursubdomain.testfairy.com/login/sso
Entity ID is https://yoursubdomain.testfairy.com/

### Can TestFairy reference an XML file?

Yes.

### Can TestFairy reference IdP metadata URL?

Yes, however at the moment this would be done manually by our support team.

### How does TestFairy map group/role memberships?

Mapping is one to many. A TestFairy user can belong to multiple groups.

### What attributes need to be included in the SAML assertion?

Email is required. Groups are optional, see "importing groups from OKTA" in this page.

### Can TestFairy store multiple IdP SAML certificates at once?

No.
