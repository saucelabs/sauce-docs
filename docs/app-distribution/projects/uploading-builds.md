---
id: uploading-builds
title: Uploading Builds
sidebar_label: Uploading Builds
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Upload new builds to distribute your app to testers and team members.

## Supported Formats

- `.ipa` - iOS application archive
- `.apk` - Android application package

## How to Upload

1. Navigate to your project page.
2. Click the **Upload Build** button.
3. **Drag & drop** your build file onto the upload area, or click to browse and select the file (`.ipa` or `.apk`).
4. Add optional release notes to describe what changed in this version.
5. Click **Upload**. The build will be processed and available for installation.

## Build Information

The following metadata is automatically extracted from your build file:

- **App Name** - Display name of the application
- **Package Name** - Bundle identifier (iOS) or package name (Android)
- **Version** - Version string (e.g., 1.2.3)
- **Version Code** - Build number (Android) or bundle version (iOS)
- **Platform** - Automatically detected from file type

## API Upload

You can also upload builds via the API for CI/CD integration. See the [API Reference](/app-distribution/developer/api-reference) for details.

## After Upload

Once uploaded, builds can be deleted, expired, or restored. Deleted and expired builds are automatically purged after a 7-day grace period. See [Build Lifecycle](/app-distribution/projects/build-lifecycle) for details.
