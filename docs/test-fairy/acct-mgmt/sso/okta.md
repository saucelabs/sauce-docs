---
id: okta
title: Okta
sidebar_label: Okta 
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Single Sign-on enables you to manage users and testers outside of TestFairy. A list of permitted users and testers, as well as their passwords, is stored in OKTA. Therefore onboarding a new developer into the team is an easy task.

[Request a Demo](https://www.testfairy.com/contact_us.php).

## Setting Up OKTA In Your Account

1. Login to OKTA, click on **Admin** and pick **Add Applications** from the right sidebar.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/okta-1.png')} alt="add applications"/>

1. Type "TestFairy" into the search form.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/okta-2.png')} alt="search for TestFairy"/>

1. Click **Add** on the TestFairy app.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/okta-3.png')} alt="Add"/>

1. Next, type in the team's name in TestFairy (it is also the subdomain's name).
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/okta-4.png')} alt="Add subdomain"/>

1. Next, select authorized users. When done, click **Next**.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/okta-5.png')} alt="Next button"/>

1. OKTA-side configuration is done. Now click **Done**.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/okta-6.png')} alt="Done button"/>

1. In the `Sign On` menu, click on **View Setup Instructions**.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/okta-7.png')} alt="View Setup Instructions"/>

1. Copy `ID Provided Metadata` from section 4 into your clipboard.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/okta-8.png')} alt="ID Provided Metadata"/>

1. Now login to https://app.testfairy.com, and open the **Preferences**.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/okta-9.png')} alt="Preference link"/>

1. In the `Security` menu item `SAML/Single Sign-on` section, paste the copied `ID Provided Metadata` into the text area.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/security-saml-okta-xml.png')} alt="ID Provided Metadata"/>

1. TestFairy-side configuration is done.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/okta-11.png')} alt="success"/>

Now, log out, and if SSO is configured into your account, the login page is replaced with the `Login with OKTA`.

<img src={useBaseUrl('/img/test-fairy/acct-mgmt/sso-login-screenshot.png')} alt="Login with OKTA button"/>

### (Optional) Automatically Importing Groups From OKTA

When managing large teams with OKTA, it is most likely that people are already associated with groups.

For example, say Alice is associated with the following groups in OKTA: ["QA", "QA San Francisco"].
With auto-import of groups, Alice is automatically associated with the following groups in TestFairy the next time she signs in: "okta", "okta-qa", and "okta-qa-san-francisco".
Once removed from the group "QA", Alice is automatically removed from the "okta-qa" group in TestFairy, the next time she signs in.

To import groups each time a user signs into TestFairy, follow these instructions.

1. Open the TestFairy app in your OKTA account, select **Sing On**, and click **Edit**.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/okta1a.png')} alt="Edit button"/>

2. Click on **Attributes**.
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/okta2.png')} alt="Attributes"/>

3. Under **Group Attribute Statements**, add a rule with the name: "groups" (in **lowercase**) and filter "Matches regex" with value `.*`. (dot asterisk)
   <img src={useBaseUrl('/img/test-fairy/acct-mgmt/okta3.png')} alt="Group Attribute Statements"/>

## FAQ

### What Is My Login URL?

Your user's login at https://yoursubdomain.testfairy.com/login
ACS URL is https://yoursubdomain.testfairy.com/login/sso
Entity ID is https://yoursubdomain.testfairy.com/

### Can TestFairy Reference An XML File?

Yes.

### Can TestFairy Reference IdP Metadata URL?

Yes, however, this is done manually by our support team.

### How Does TestFairy Map Group/Role Memberships?

Mapping is one to many. A TestFairy user can belong to multiple groups.

### What Attributes Need to be Included in the SAML Assertion?

Email is required. Groups are optional; see "importing groups from OKTA" on this page.

### Can TestFairy Store Multiple IdP SAML Certificates At Once?

No.
