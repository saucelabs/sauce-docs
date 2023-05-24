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

#### Setting up OKTA in your account

- Login to OKTA, click on 'Admin' and pick 'Add Applications' from the right sidebar:
  ![](https://docs.testfairy.com/img/sso/okta/okta-1.png)
- Type "TestFairy" into the search form:
  ![](https://docs.testfairy.com/img/sso/okta/okta-2.png)
- And click "Add" on the TestFairy app:
  ![](https://docs.testfairy.com/img/sso/okta/okta-3.png)
- Now type in the name of the team in TestFairy (it is also the name of the subdomain):
  ![](https://docs.testfairy.com/img/sso/okta/okta-4.png)
- Next, select authorized users. When done, click "Next":
  ![](https://docs.testfairy.com/img/sso/okta/okta-5.png)
- OKTA-side configuration is done. Now click "Next":
  ![](https://docs.testfairy.com/img/sso/okta/okta-6.png)
- In the "Sign On" menu, click on "View Setup Instructions":
  ![](https://docs.testfairy.com/img/sso/okta/okta-7.png)
- Copy "ID Provided Metadata" from section 4 into your clipboard:
  ![](https://docs.testfairy.com/img/sso/okta/okta-8.png)
- Now login to https://app.testfairy.com, and open the "Preferences" page:
  ![](https://docs.testfairy.com/img/sso/okta/okta-9.png)
- In the 'Security' manu item "SAML/Single Sign-on" section, paste the copied 'ID Provided Metadata' into the text area:
  <!-- ![](/img/sso/okta/security-saml-okta-xml.png) -->
- TestFairy-side configuration is also done:
  ![](https://docs.testfairy.com/img/sso/okta/okta-11.png)

Now, please logout and if SSO is configured into your account, the login page is replaced with a simple `login with sso` button.

![login screenshot](https://docs.testfairy.com/img/sso/sso-login-screenshot.png)

#### [Optional:] Automatically importing groups from OKTA

When managing large teams with OKTA, it is most likely that people are already associated with groups.

For example, say Alice is associated with the following groups in OKTA: ["QA", "QA San Francisco"].
With auto-import of groups, Alice will automatically be associated with the following groups in TestFairy next time she signs in: "okta", "okta-qa", and "okta-qa-san-francisco".
Once removed from group "QA", Alice will be automatically be removed from "okta-qa" group in TestFairy, next time she signs in.

In order to import groups each time a user signs into TestFairy, please follow these instructions.

1. Open the TestFairy app in your OKTA account, select the Sing On tab, and click Edit.
   ![](https://docs.testfairy.com/img/sso/okta/okta1a.png)

2. Click on "Attributes"
   ![](https://docs.testfairy.com/img/sso/okta/okta2.png)

3. Under `Group Attribute Statements`, add a rule with name: "groups", (LOWERCASE!!!) and filter "Matches regex" with value `.*`. (dot asterisk)

![](https://docs.testfairy.com/img/sso/okta/okta3.png)

# FAQ

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
