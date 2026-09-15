---
id: apple-app-store
title: Apple App Store Integration
sidebar_label: Apple App Store
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Connect Mobile App Distribution to your App Store Connect account using an API key. This first step lets you save and verify the credentials. Publishing iOS builds to App Store Connect from Mobile App Distribution will be enabled in a follow-up release.

:::info
Only Account Owners and Org Admins can configure this integration. Find it under **Settings → Integrations → Apple App Store**.
:::

## Prerequisites

- An [App Store Connect](https://appstoreconnect.apple.com/) account with the role **Admin** or **Account Holder** (only these can create API keys)
- The app(s) you want to publish must already exist in App Store Connect with a known bundle ID

## Generating an API Key

1. Open [App Store Connect → Users and Access → Integrations → App Store Connect API](https://appstoreconnect.apple.com/access/integrations/api).
2. Click **+** to generate a new key. Give it a name (e.g. "Mobile App Distribution Publish") and choose the **App Manager** role (or higher) so it can upload builds.
3. Click **Generate**.
4. **Download the .p8 file immediately.** Apple only allows downloading it once.
5. Note the **Key ID** shown in the table.
6. Note the **Issuer ID** shown at the top of the page (a UUID).

## Connecting Mobile App Distribution

1. Go to **Settings → Integrations → Apple App Store**.
2. Paste the **Issuer ID** and **Key ID**.
3. Upload the **.p8** file.
4. Click **Save Credentials**. Mobile App Distribution generates a JWT and calls App Store Connect to confirm the credentials work. On success, the status shows **Connected**.

## Connection Statuses

| Status | Meaning |
| --- | --- |
| **Not Configured** | No credentials saved |
| **Untested** | Saved but not yet verified |
| **Connected** | Credentials work — Apple accepted the JWT |
| **Failed** | Test failed — see error details and re-upload |

## Security

- The `.p8` private key is **encrypted at rest** using libsodium.
- The key is never displayed or downloadable from the UI after upload.
- JWTs signed for App Store Connect API expire after 20 minutes (Apple's max).
- All credential changes are recorded in the **Audit Log**.

## Troubleshooting

| Error | Fix |
| --- | --- |
| `Invalid .p8 file: missing PEM header` | Make sure you uploaded the `.p8` file Apple gave you, not a converted/re-encoded version. |
| `Authentication failed: Apple rejected the credentials` | Check that the Issuer ID, Key ID, and .p8 file all belong to the same key. They are shown together on the App Store Connect API Keys page. |
| `Authorization failed: this API key does not have permission` | Promote the key's role to **App Manager** or higher in App Store Connect. |
| `Network error contacting App Store Connect` | Outbound HTTPS to `api.appstoreconnect.apple.com` must be allowed. Check firewall / egress rules. |

## What's Next

The **Publish to App Store** action — actually uploading builds — is tracked separately and will use the credentials configured here. Until then, this page lets you make sure your API key is valid and ready.
