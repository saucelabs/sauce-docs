---
id: org-settings
title: Organization Settings
sidebar_label: Organization Settings
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## General Settings

General settings determine the options available to your users when they create their Sauce Labs accounts.

To access General settings:

1. On Sauce Labs, click **ACCOUNT** and then click **Organization Management**.

<img src={useBaseUrl('img/team-mgmt/team-mgmt-nav.png')} alt="Organization management navigation" width="400"/>

2. On the **Organization Management** page, in the **ORGANIZATION SETTINGS** section, click **VIEW SETTINGS**.

<img src={useBaseUrl('img/team-mgmt/team-mgmt-view-settings-nav.jpg')} alt="View settings" width="600" />

3. On the **General** tab, you have the following option:

| Option                      | Description                                                                                                |
| --------------------------- | ---------------------------------------------------------------------------------------------------------- |
| Require Full Name for Users | With this option enabled, users must enter both a first name and a last name when creating their accounts. |

## Security Settings

<p><span className="sauceGreen">Enterprise Plans only</span></p>
Sauce Labs security settings allow organization admins to manage how users and service accounts in their enterprise can run tests.

To access Security settings:

1. On Sauce Labs, click **ACCOUNT** and then click **Organization Management**.
2. On the **Organization Management** page, in the **ORGANIZATION SETTINGS** section, click **VIEW SETTINGS**.

<img src={useBaseUrl('img/team-mgmt/team-mgmt-view-settings-nav.jpg')} alt="View settings" width="600" />

3. On the **Security** tab, you have the following options:

| Option                                                                                                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Require Sauce Connect Proxy/VPN                                                                                            | Sauce Connect Proxy and IPSec VPN provide a secure connection between the Sauce Labs cloud and apps under test that are typically behind a firewall or on a local machine.<br></br><br></br>When this option is set to **Enabled**:<ul><li>All network traffic from real devices, virtual platforms (browsers, emulators, and simulators) MUST go through a Sauce Connect Proxy or IPSec VPN tunnel.</li><li>No network traffic can occur outside the tunnel, unless intentionally directed by the user (i.e., exceptions for specific domains can be made with certain Sauce Connect Proxy commands).</li><li>If no Sauce Connect Proxy or IPSec VPN tunnels are available, all tests on real devices, virtual browsers, emulators, and simulators will fail.</li></ul>This feature is disabled by default. <br></br><br></br> |
| Allow Only Organization Admins to Start Sauce Connect Proxy Tunnels                                                        | When this option is set to **Enabled**, all users except organization admins will be prevented from starting new Sauce Connect Proxy tunnels. Users would need to run tests using existing, shared Sauce Connect Proxy tunnels.<br></br><br></br>This feature is disabled by default.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Enable Sauce Connect Proxy/VPN for Public Cloud Devices <p><span className="sauceGreen">RDC PUBLIC DEVICES ONLY</span></p> | When this option is set to **Enabled**:<ul><li>An organization admin must accept the waiver before toggling this option on.</li><li>All users will be allowed to use Sauce Connect Proxy tunnels for the Real Device Public Cloud.</li></ul>This feature is disabled by default because a waiver must be accepted by an organization admin in order to enable it.                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Enable Job Visibility Across Teams                                                                                         | When this option is set to **Enabled**, users and service accounts across teams will be able to see jobs and builds from all other teams in your organization. If **Disabled**, users and service accounts will only be able to see jobs and builds from their team.<br></br><br></br>This feature is enabled by default.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Logout URL                                                                                                                 | This option allows you to run custom processes after the user logs out. You can define a secure https:// URL to redirect the user to that URL on logout or if a session times out. If this field is empty, users will be redirected to the default login page.<br></br>Should you decide to use this, you must enter a URL starting with **HTTPS** (HTTP will not work).                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Reset All Access Keys                                                                                                      | All users have a unique access key that they use to authenticate to Sauce Labs, which is usually integrated into their test scripts. Clicking **Reset All Access Keys** will invalidate access keys for all users in your organization, and require users to update their tests scripts with new access keys. You should only click **Reset All Access Keys** in the event of a major security issue.<br/><br/> **Note:** This action does not affect [service accounts](/basics/acct-team-mgmt/managing-service-accounts/). It will only rotate access keys for user accounts.                                                                                                                                                                                                                                                 |

## Concurrency Settings
:::note
Customers on legacy plans or those that requested specific terms may not have access to these settings in the Dashboard.If you are unsure about your concurrency plan or billing implications, please consult your Sauce Labs Account Manager.
:::

Organization Admins can now manage how their Sauce Labs Virtual Device Cloud (VDC) concurrency behaves under peak load.
The **Concurrency** tab (available only to Orgs on **Fixed** or **On-Demand** plans) provides a toggle between strict concurrency limits and temporary burst capacity.

<img src={useBaseUrl('img/basics/acct-team-mgmt/service-accounts/concurrency1.png')} alt="AI Insights View" width="700"/>

**Fixed Concurrency** enforces your organization’s contractual concurrency limits without allowing any burst capacity. When this mode is active, your tests cannot exceed the number of concurrent sessions included in your contract. Any additional jobs that attempt to run are placed into the throttling queue, which is available to Enterprise customers. Fixed Concurrency is generally recommended for organizations that need strict control over usage and predictable testing costs.

**On-Demand Concurrency** allows your organization to temporarily exceed its contracted concurrency by up to 10%, enabling tests to run at up to 110% of your purchased limit. Any usage beyond the contractual threshold is billed according to your agreement. This mode also closes previous multi-resource features ensuring that Mac and non-Mac concurrency limits are enforced consistently. Once the 110% capacity is reached, additional jobs enter the throttling queue. When switching from Fixed to On-Demand, users are shown a confirmation modal that explains the potential cost implications of enabling burst capacity.

Changing concurrency mode applies immediately to the entire organization.
When the toggle is switched:
* A confirmation dialog explains the impacts on running and scheduled jobs.
* Mode changes are logged with timestamp and actor for auditability.
* Queued jobs may begin running immediately if On-Demand is enabled and headroom is available.
* Jobs that exceeded the Fixed limit will remain queued once switching back to Fixed.

<img src={useBaseUrl('img/basics/acct-team-mgmt/service-accounts/concurrency2.png')} alt="AI Insights View" width="700"/>

### Who Can Access This Feature?

Only Organization Admins can view or modify concurrency mode settings.
The following customers do not have access to the Concurrency tab:
* Legacy plan customers
* Limited plan customers (e.g., JPMC)

:::note
Some customers with older plans may see this tab or may be migrated into the new naming system. If you are unsure about your concurrency plan or billing implications, please consult your Sauce Labs Account Manager.
:::


## Single Sign-On Settings (Deprecated Flow)

<p><span className="sauceGold">Deprecated</span></p>

:::caution
This SSO flow has been `deprecated`. Use this documentation only if your organization was not migrated to the new SSO.

If you do not have any SSO integrations set up at Sauce Labs and you wish to establish a new integration, see [Setting Up SSO](/basics/sso/setting-up-sso) to get started.

If you have previously implemented the deprecated SSO integration and wish to migrate to the new SSO implementation, see the [step-by-step migration guide](/basics/sso/migration-from-deprecated-sso/).
:::

When you set up SSO with Sauce Labs, you are establishing a connection between the IdP used by your organization, such as Okta or Microsoft's Active Directory, and your Sauce Labs account, that will enable users to log in to Sauce Labs with their IdP credentials.

:::note
For more detailed information about setting up SSO, see [Setting Up Single Sign-On (Deprecated Flow)](/basics/sso-deprecated/setting-up-single-sign-on).
:::

1. On Sauce Labs, click **ACCOUNT** and then click **Organization Management**.
2. On the **Organization Management** page, in the **ORGANIZATION SETTINGS** section, click **VIEW SETTINGS**.

<img src={useBaseUrl('img/team-mgmt/team-mgmt-view-settings-nav.jpg')} alt="View settings" width="600" />

3. On the **Organization Settings** page, click the **SINGLE SIGN-ON** tab.

<img src={useBaseUrl('img/team-mgmt/sso-settings-tab.png')} alt="SSO Settings tab" width="600" />

4. Enter a **unique identifier string**. The string will be applied to user names to make sure that your users will have unique names associated with your account.
5. Upload the SAML metadata file provided by your IdP that contains the list of your SSO users. Sauce Labs SSO supports most SAML 2.0 metadata files. For more information about specific IdPs, see [Configuring Active Directory Federation Services (AD FS)](/basics/sso-deprecated/config-adfs) and [Configuring Okta](/basics/sso-deprecated/config-okta).
6. Under **Enable Single Sign On**, toggle the switch to **Enabled**. For more information about adding new users and SSO considerations, see [Adding and Deactivating Users](/basics/acct-team-mgmt/adding-deactivating-users).

:::note
If the account you're setting up with SSO is not the only account your organization has with Sauce, the **EntityID** field must be unique for each account or the setup will fail. The **EntityID** field is a simple string that can be changed manually in the metadata file prior to upload. If users are added to your IdP after you've set up SSO with Sauce Labs, then Sauce Labs accounts will be created for them the first time they attempt to log in using their SSO credentials.
:::

### SSO Advanced Options

| Option                          | Description                                                                                                                                                                                                                                                                                                                                                              |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Default Team Placement          | Assign SSO users to a default team when they are added to Sauce Labs.                                                                                                                                                                                                                                                                                                    |
| Require SSO Login (Recommended) | Enabling this option will require users to log in to Sauce Labs using their SSO credentials, even if they already have individual Sauce Labs accounts. These users can run test automation using credentials. For more information about adding new users and SSO considerations, see [Adding and Deactivating Users](/basics/acct-team-mgmt/adding-deactivating-users). |
