---
id: config-adfs
title: Configuring Active Directory Federation Services (AD FS)
sidebar_label: Configuring Active Directory Federation Services (AD FS)
---

These instructions are for setting up Microsoft's Active Directory Federated Service (AD FS) as an Identity Provider for Sauce Labs SSO using Windows Server 2012 R2 and ADFS 3.0. ADFS 3.0 is also supported on Windows Server 2008R2, but may require additional configuration for that operating system.

## Before You Begin
- Make sure that your Active Directory Domain Service is set up
- Make sure that the Active Directory Federation Services Role is set up

Microsoft has an extensive library of how-to and step-by-step guides for AD FS in their [documentation library](https://docs.microsoft.com/en-us/windows-server/identity/active-directory-federation-services).

## Configuration
1. Log in to the Server Manager application for your Windows Server 2012 R2 instance as an administrator and go to the **Dashboard**.
2. In the **Tools** menu, select **AD FS Management**.
3. In the **Actions** menu, under **AD FS**, select **Add Relying Party Trust**.
This will launch the **Add Relying Party Trust Wizard**.<br></br>
4. In the **Select Data Source** screen, select **Enter Data about the Relying Party Manually**, and then click **Next**.
5. On the **Specify Display Name** screen, enter **Sauce Labs**, and then click **Next**.
6. On the **Choose Profile** screen, select **AD FS profile**, and then click **Next**.
7. On the **Configure Certificate** screen, click **Next**, as this is an optional step.
8. On the **Configure URL** screen, select **Enable Support** for the SAML 2.0 WebSSO Protocol.
9. On the **Configure URL** screen, in the **Relying Party SAML 2.0 SSO Service URL** field, enter **https<span></span>://saucelabs<span></span>.com/sso/acs**, and then click **Next**.
10. On the **Configure Identifiers** screen, select **www.<span></span>saucelabs.com**, click **Add**, and then click **Next**.
11. On the **Configure Multi-factor Authentication Now?** screen, select **I do not want to configure multi-factor authentication settings for this relying trust part at this time**, and then click **Next**.
12. On the **Choose Issuance Authorization Rules** screen, select **Permit all users to access this relying party**, and then click **Next**.
13. On the **Ready to Add Trust** screen, click **Next**.
14. On the **Finish** screen, make sure the option **Open Edit Claims** dialog for this relying party trust when the wizard closes is selected, and then click **Close**.
15. In the **Edit Claims** dialog, make sure the **Issuance Transform Rules** tab is selected, and then click **Add Rule**.
16. In the **Choose Rule Type** screen of the **Add Transform Claim Rule** wizard, select **Send LDAP Attributes as Claims**, and then click **Next**.
17. In the **Configure Claim Rule** screen, in the **Claim Rule Name** field, enter **Email**.
18. In the **Configure Claim Rule** screen, under **Attribute Score**, select **E-mail Addresses**.
19. In the **Configure Claim Rule** screen, under **Mapping of LDAP attributes to outgoing claim types**, select **Email addresses** for **LDAP Attribute**, and **Name ID** for **Outgoing Claim Type**, and then click **Finish**.

You can now check to make sure that Sauce Labs has been added as a Relying Party Trust by going to the AD FS directory on you server, and then navigating to **Trust Relationships > Relying Party Trusts**, where you should see a listing for Sauce Labs. You can then finish configuring Sauce Labs SSO by following the instructions in [Single Sign-On Settings](/basics/acct-team-mgmt/org-settings). If you need more assistance setting up SSO, contact help@saucelabs.com.
