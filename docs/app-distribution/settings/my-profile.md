---
id: my-profile
title: My Profile
sidebar_label: My Profile
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Your **My Profile** page contains your personal account information and settings. From this page, you can view your profile details, set your timezone, manage email notifications, change your password, manage your API key, and view registered devices.

## Access My Profile

**Step 1:** Click the **Profile** icon in the top-right corner and select **My Profile** from the user menu.

<img src={useBaseUrl('/img/app-distribution/my-profile/profile-1.png')} alt="My Profile" width="100%"/>

**Step 2:** The **My Profile** page opens and displays your account settings.

<img src={useBaseUrl('/img/app-distribution/my-profile/profile-2.png')} alt="My Profile" width="100%"/>

### User Information

| Sr. No. | Field | Description |
|---:|---|---|
| 1 | **First Name** | Your first name displayed across the platform. |
| 2 | **Last Name** | Your last name displayed across the platform. |
| 3 | **Email Address** | Your account email address. This field is for reference and cannot be changed. |
| 4 | **Timezone** | Controls how dates and times are displayed across the platform. Select **Auto-detect** to use your browser's timezone, or choose a timezone manually. |

Your organization role and membership date are also displayed at the top of the page.

### Email Settings

The **Email Settings** section lets you control email notifications for new builds and app assignments.

Turn the **Email notifications** toggle on or off, and then click **Update** to save your preference.

<img src={useBaseUrl('/img/app-distribution/my-profile/profile-3.png')} alt="My Profile" width="100%"/>

:::info
Changing this setting does not affect in-app notifications.
:::

### Change Password

You can change your account password from the **Change Password** section.

| Sr. No. | Field | Description |
|---:|---|---|
| 1 | **Current Password** | Enter your current account password. |
| 2 | **New Password** | Enter the new password you want to use. |
| 3 | **Re-Enter New Password** | Enter the new password again to confirm it. |
| 4 | **Update** | Saves the new password. |

<img src={useBaseUrl('/img/app-distribution/my-profile/profile-4.png')} alt="My Profile" width="100%"/>

## API Key

Your API key is available from the **API Credentials** dropdown in the top navigation bar and the **API Key** section on the **My Profile** page.

<img src={useBaseUrl('/img/app-distribution/my-profile/profile-5.png')} alt="My Profile" width="100%"/>

**Step 1:** Click the **eye icon** to view or the **copy icon** to copy your API key.

**Step 2:** Use the API key as the `X-API-Key` header for API requests.

For more information, see the [API Reference](/app-distribution/developer/api-reference).

Click **Regenerate API Key** to create a new key. The old key stops working immediately.

:::caution
Regenerating your API key will invalidate the previous key. Update any scripts or integrations that use it.
:::
