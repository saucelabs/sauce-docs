---
id: okta
title: Okta
sidebar_label: Okta 
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

1. Login to OKTA, click on **Admin** and pick **Add Applications** from the right sidebar.
1. Type "TestFairy" into the search form
1. Click **Add** on the TestFairy app.
1. Next, type in the team's name in TestFairy (it is also the subdomain's name).
1. Next, select authorized users. When done, click **Next**.
1. OKTA-side configuration is done. Now click **Done**.
1. In the **Sign On** menu, click on **View Setup Instructions**.
1. Copy `ID Provided Metadata` from section 4 into your clipboard.
1. Now login to https://app.testfairy.com, and open the **Preferences**.
1. In the **Security** menu item **SAML/Single Sign-on** section, paste the copied `ID Provided Metadata` into the text area.
1. TestFairy-side configuration is done.
   Now, log out, and if SSO is configured into your account, the login page is replaced with **Login with OKTA**.

### (Optional) Automatically Importing Groups From OKTA

When managing large teams with OKTA, it is most likely that people are already associated with groups.

For example, say Alice is associated with the following groups in OKTA: ["QA", "QA San Francisco"]. With auto-import of groups, Alice is automatically associated with the following groups in Sauce Mobile App Distribution the next time she signs in: "okta", "okta-qa", and "okta-qa-san-francisco". Once removed from the group "QA", Alice is automatically removed from the "okta-qa" group in Sauce Mobile App Distribution, the next time she signs in.

To import groups each time a user signs into Sauce Mobile App Distribution:

1. Open the Sauce Mobile App Distribution app in your OKTA account, select **Sign On**, and click **Edit**.
1. Click on **Attributes**.
1. Under **Group Attribute Statements**, add a rule with the name: "groups" (in **lowercase**) and filter "Matches regex" with value `.*`. (dot asterisk).
1. Note: We recommend adding at least one **Attribute Statement** (e.g., email), as shown below. Failing to do so may prevent SAML from including group data in the response. 

<img src={useBaseUrl('img/test-fairy/security/okta-groups-attributes.png')} alt="Okta groups attributes" width="700"/>
