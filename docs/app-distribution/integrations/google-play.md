---
id: google-play
title: Google Play Integration
sidebar_label: Google Play
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Publish APK and AAB builds directly from Mobile App Distribution to your Google Play Console — no need to upload them manually through the web console. Configure once at the organization level and use the **Publish to Google Play** action on any Android build.

:::info
Only Account Owners and Org Admins can configure Google Play. Find it under **Settings → Integrations → Google Play**.
:::

## Prerequisites

- A Google Play Console account with the app already created (matching your project's package name)
- A **service account** in Google Cloud with access to the Play Console
- A JSON key file for that service account

## Setting Up the Service Account

1. Go to [Google Cloud Console](https://console.cloud.google.com/) and create or select a project.
2. Enable the **Google Play Android Developer API**.
3. Go to **IAM & Admin → Service Accounts** and create a new service account.
4. For the new service account, go to the **Keys** tab and click **Add Key → Create new key**. Choose JSON and download the file.
5. Open the [Google Play Console](https://play.google.com/console) → **Users and permissions**.
6. Click **Invite new users** and add the service account's email (looks like `name@project.iam.gserviceaccount.com`).
7. Grant the **Admin** or **Release Manager** role with permission to upload APKs and manage releases.

## Connecting Mobile App Distribution

1. Navigate to **Settings → Integrations → Google Play**.
2. Upload the JSON key file you downloaded.
3. Mobile App Distribution validates the credentials immediately. On success, you'll see the service account email and GCP project ID.

## Publishing a Build

1. Open an Android app and find the build you want to publish (must be APK or AAB).
2. Click the **...** menu on the build row and choose **Publish to Google Play**.
3. Pick a track and a status, then click **Publish**.
4. The publish runs in the background — Mobile App Distribution downloads the file from storage, uploads it to Google Play, and assigns it to the chosen track.
5. Check your **Google Play Console** for the result.

## Tracks

| Track | Audience |
| --- | --- |
| **Internal** | Up to 100 internal testers — fastest review, recommended for first push |
| **Alpha** | Closed testing — invite specific groups |
| **Beta** | Open or closed beta — broader audience |
| **Production** | Live to all Play Store users |

## Statuses

| Status | Meaning |
| --- | --- |
| **Draft** | Created but not published — visible in Play Console for review |
| **In Progress** | Staged rollout (production track only) |
| **Halted** | Rollout paused |
| **Completed** | Release fully rolled out |

## Security

- Service account credentials are **encrypted at rest** using libsodium.
- Credentials are never displayed in the UI after upload.
- All publish actions are logged in the **Audit Log**.

## Troubleshooting

| Error | Fix |
| --- | --- |
| `Package not found` | The app must already exist in your Google Play Console. Service accounts cannot create new apps — only manage existing ones. |
| `The caller does not have permission` | Re-check that the service account is invited in **Play Console → Users and permissions** with sufficient role. |
| `Version code already exists` | Increment your build's `versionCode` in `build.gradle` before uploading. |
| `Invalid credentials` | The JSON key may be expired or revoked. Generate a fresh key in Google Cloud Console. |
