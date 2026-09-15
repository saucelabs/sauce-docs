---
id: my-profile
title: My Profile
sidebar_label: My Profile
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Manage your personal settings from **user menu → My Profile**.

## Profile Information

- **First Name / Last Name** — your display name across the platform.
- **Email** — shown for reference. Email cannot be changed.
- **Timezone** — used for displaying dates and times. Set to *Auto-detect* to use your browser's timezone, or choose manually from the list.

## Email Notifications

Toggle **Email notifications** on or off to control whether you receive emails for new builds and app assignments. In-app notifications (bell icon) are not affected by this setting.

You can also opt out by clicking the **Unsubscribe** link at the bottom of any notification email.

## Dashboard Widgets

Choose which sections appear on your home dashboard:

- **Downloads & Platform charts** — visual breakdown of downloads and platform distribution.
- **Recent Apps** — quick access to recently updated apps.
- **Teams sidebar** — team overview panel.

Stat cards (total apps, builds, testers, downloads) are always visible.

## Change Password

Scroll down on the profile page to the **Change Password** section. Enter your current password and a new password (minimum 8 characters). The change takes effect immediately.

## API Key

Your API key is shown in the **API Credentials** dropdown in the top navigation bar. Use it to authenticate API requests (see [API Reference](/app-distribution/developer/api-reference)).

Click **Regenerate** to create a new key. The old key stops working immediately.

:::caution
Regenerating your API key will invalidate the previous key. Update any scripts or integrations that use it.
:::
