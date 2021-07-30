---
id: org-settings
title: Organization Settings
sidebar_label: Organization Settings
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## General Settings
General settings determine the options available to your users when they create their Sauce Labs accounts.

To access General settings:

1. In Sauce Labs, click **ACCOUNT** and then click **Team Management**.

<img src={useBaseUrl('img/team-mgmt/team-mgmt-nav.png')} alt="Team management navigation" width="400"/>

2. On the **Organization Management** page, in the **ORGANIZATION SETTINGS** section, click **VIEW SETTINGS**.

<img src={useBaseUrl('img/team-mgmt/team-mgmt-view-settings-nav.jpg')} alt="View settings" width="600" />

3. On the **General** tab, you have the following option:

| Option  | Description |
| ------------- | ------------- |
| Require Full Name for Users  | With this option enabled, users must enter both a first name and a last name when creating their accounts.  |

## Security Settings
<p><span className="sauceDBlue">ENTERPRISE PLANS ONLY</span></p>
Sauce Labs security settings allow organization admins to manage how users in their enterprise can run tests.

To access Security settings:
1. In Sauce Labs, click **ACCOUNT** and then click **Team Management**.
2. On the **Organization Management** page, in the **ORGANIZATION SETTINGS** section, click **VIEW SETTINGS**.

<img src={useBaseUrl('img/team-mgmt/team-mgmt-view-settings-nav.jpg')} alt="View settings" width="600" />

3. On the **Security** tab, you have the following options:

| Option | Description |
| ------------- | ------------- |
| Require Sauce Connect Proxy/VPN <p><span className="sauceDBlue">VDC DEVICES ONLY</span></p>  | Sauce Connect Proxy and IPSec VPN provide a secure connection between the Sauce Labs cloud and applications under test that are typically behind a firewall or on a local machine.<br></br><br></br>When this option is set to **Enabled**:<ul><li>All network traffic from virtual platforms (browsers, emulators, and simulators) MUST go through a Sauce Connect Proxy or IPSec VPN tunnel.</li><li>No network traffic can occur outside the tunnel, unless intentionally directed by the user (i.e., exceptions for specific domains can be made with certain Sauce Connect Proxy commands).</li><li>If no Sauce Connect Proxy or IPSec VPN tunnels are available, all tests on virtual browsers, emulators, and simulators will fail.</li></ul>This feature is disabled by default. <br></br><br></br>**NOTE:** This setting DOES NOT apply to the Headless (US-East-1) Data Center.  |
| Require Sauce Connect Proxy/VPN <p><span className="sauceDBlue">RDC PRIVATE DEVICES ONLY</span></p>   | With this setting, which must be configured by Sauce Labs Support on the back end:<ul><li>All network traffic accessed by private real device browsers during your tests MUST go through a Sauce Connect Proxy or IPSec VPN tunnel. Otherwise, they will be blocked from accessing the public internet directly.</li><li>Private real devices will be placed on a special wi-fi network that blocks all network traffic except websites compliant with your network.</li><li>Restriction will be applied to private real devices only (i.e., it won't affect tests on public devices or devices that use SIM cards).</li><li>If no Sauce Connect Proxy or IPSec VPN tunnels are available, private real devices will not have network connectivity; all tests on those devices will fail.</li></ul>This is a static setting that cannot be changed programmatically by organization admins or users. If you’re interested in this configuration, contact your Sauce Labs CSM and they will help you get set up.  |
| Allow Only Organization Admins to Start Sauce Connect Proxy Tunnels  | When this option is set to **Enabled**, all users except organization admins will be prevented from starting new Sauce Connect Proxy tunnels. Users would need to run tests using existing, shared Sauce Connect Proxy tunnels.<br></br><br></br>This feature is disabled by default.  |
| Enable Sauce Connect Proxy/VPN for Public Cloud Devices <p><span className="sauceDBlue">RDC PUBLIC DEVICES ONLY</span></p> | When this option is set to **Enabled**:<ul><li>Your entire organization will be able to run live and automated public cloud real device tests, but they MUST go through a Sauce Connect Proxy or IPSec VPN tunnel.</li><li>If a user tries to run an automated test without Sauce Connect Proxy or IPSec VPN, they'll see an error indicating that there was a failure obtaining a device for their script and the test will fail.</li><li>If a user tries to run a live test without Sauce Connect Proxy or IPSec VPN, they will see an error indicating that they do not have access to public devices and the test will fail.</li><li>If no Sauce Connect Proxy or IPSec VPN tunnels are available, all test attempts on public cloud devices will fail.</li><li>Each time a user initiates a test on a public real device, they'll see a banner that will prompt them to read and agree to risk advisory terms to proceed with testing.</li></ul>This feature is disabled by default. Once you toggle the option to **Enabled**, you'll see the change go into effect in about five minutes. Switching back to **Disabled** will take about one hour to propagate.  |
| Enable Job Visibility Across Teams  | When this option is set to **Enabled**, users across teams will be able to see jobs and builds from all other teams in your organization. If disabled, this option will prevent such cross-team visibility.<br></br><br></br>This feature is enabled by default.  |
| Logout URL  | This option allows you to run custom processes after the user logs out. You can define a secure https:// URL to redirect the user to that URL on logout or if a session times out. If this field is empty, users will be redirected to the default login page.<br></br>Should you decide to use this, you must enter a URL starting with **HTTPS** (HTTP will not work).  |
| Reset All Access Keys  | All users have a unique access key that they use to authenticate to Sauce Labs, which is usually integrated into their test scripts. Clicking **Reset All Access Keys** will invalidate all access keys for your organization, and require users to update their tests scripts with new access keys.<br></br><br></br>**NOTE:** If a user attempts to run a script containing an invalidated access key, the test and any build that contains it will fail. You should only click **Reset All Access Keys** in the event of a major security issue.  |

## Single Sign-On Settings
When you set up SSO with Sauce Labs, you are establishing a connection between the IdP used by your organization, such as Okta or Microsoft's Active Directory, and your Sauce Labs account, that will enable users to log in to Sauce Labs with their IdP credentials.

:::note
For more detailed information about setting up SSO, see [Setting Up Single Sign-On](https://docs.saucelabs.com/basics/sso/setting-up-single-sign-on).
:::

1. In Sauce Labs, click **ACCOUNT** and then click **Team Management**.
2. On the **Organization Management** page, in the **ORGANIZATION SETTINGS** section, click **VIEW SETTINGS**.

<img src={useBaseUrl('img/team-mgmt/team-mgmt-view-settings-nav.jpg')} alt="View settings" width="600" />

3. On the **Organization Settings** page, click the **SINGLE SIGN-ON** tab.

<img src={useBaseUrl('img/team-mgmt/sso-settings-tab.jpg')} alt="SSO Settings tab" width="600" />

4. Enter a **unique identifier string**. The string will be applied to user names to make sure that your users will have unique names associated with your account.
5. Upload the SAML metadata file provided by your IdP that contains the list of your SSO users. Sauce Labs SSO supports most SAML 2.0 metadata files. For more information about specific IdPs, see [Configuring Active Directory Federation Services (AD FS)](https://docs.saucelabs.com/basics/sso/config-adfs) and [Configuring Okta](https://docs.saucelabs.com/basics/sso/config-okta).
6. Under **Enable Single Sign On**, toggle the switch to **Enabled**. For more information about adding new users and SSO considerations, see [Adding and Deactivating Users](https://docs.saucelabs.com/basics/acct-team-mgmt/adding-deactivating-users).

:::note
If the account you're setting up with SSO is not the only account your organization has with Sauce, the **EntityID** field must be unique for each account or the setup will fail. The **EntityID** field is a simple string that can be changed manually in the metadata file prior to upload. If users are added to your IdP after you've set up SSO with Sauce Labs, then Sauce Labs accounts will be created for them the first time they attempt to log in using their SSO credentials.
:::

### SSO Advanced Options
| Option  | Description |
| ------------- | ------------- |
| Default Team Placement  | Assign SSO users to a default team when they are added to Sauce Labs.  |
| Require SSO Login (Recommended)  | Enabling this option will require users to log in to Sauce Labs using their SSO credentials, even if they already have individual Sauce Labs accounts. These users can run test automation using credentials. For more information about adding new users and SSO considerations, see [Adding and Deactivating Users](https://docs.saucelabs.com/basics/acct-team-mgmt/adding-deactivating-users).  |
