---
id: app-build-settings
title: App Build Settings
sidebar_label: App Build Settings
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

To configure your build settings, click **Settings** on the build menu next to the app name and version.

Every build has its settings, but some settings are shared by all builds of an app.

<img src={useBaseUrl('/img/test-fairy/acct-mgmt/build-settings-btn.png')} alt="Settings button" width="800"/>

## App Distribution

<img src={useBaseUrl('/img/test-fairy/acct-mgmt/build-settings-2.png')} alt="app distribution section" width="800"/>

- **App Distribution** - You cannot install the app when disabled and pending invitations expire.

- **[Auto-Update](/test-fairy/app-distribution/auto-update)** - Previous app installations are automatically updated when enabled. The next time a user with an old version opens their app, see a notification that it is installed automatically. No emails are sent regarding this update.

- **[Release Notes](/test-fairy/app-distribution/release-notes)** - Release notes appear in email invitations, landing pages, and the tester dashboard. You can set release notes via Upload API, during manual upload, or on this page.

- **Tags** - You can add tags to each build. They are comma-separated text and can contain spaces.

- **Metadata** - Metadata are details received from Continuous integration (CI) systems that upload the build to the TestFairy dashboard. You cannot edit them.

- **[Landing Page](/test-fairy/app-distribution/landing-pages)** - Click **Configure** to change the landing page for this build.

## Insights

<img src={useBaseUrl('/img/test-fairy/acct-mgmt/build-settings-insights.png')} alt="landing page, configure button" width="800"/>

- **Recording** - Choose whether the recording of sessions is `enabled`, `disabled`, or `enabled only when WiFi is on`. This option is global and overrides all other settings.

- **Session** - This option defines the maximum length of a recorded session.

- **Video** - Changing video settings can help decrease network overload.

- **Metrics**:
  - **Application logcat** - Collects the app logs from the device.

## Bug Reporting

<img src={useBaseUrl('/img/test-fairy/acct-mgmt/build-settings-bugs.png')} alt="bug reporting section" width="800"/>

- **[In-App Bug Reporting](/test-fairy/testing-an-app/testers/user-feedback)** - When enabled, testers can shake their device to open a bug report.

- **Bug System** https://docs.testfairy.com/Bug_Tracking/Overview.html - Indicates which Jira project is connected to the app. You can do the general configuration of bug tracking systems via the **[Bug systems](https://app.testfairy.com/settings/bug-system/)** in **Account preferences**.

## Symbolication

See [Uploading dSyms to TestFairy](/test-fairy/sdk/ios/dsyms).

## More

In iOS, you see the build details as detected by our service. You can see the certificate type you used to sign the app and more information.

<img src={useBaseUrl('/img/test-fairy/acct-mgmt/app-build-settings-6.png')} alt="more section for iOS build"/>

Android shows the build details and the signing certificate hash at the bottom.

<img src={useBaseUrl('/img/test-fairy/acct-mgmt/build-settings-more.png')} alt="more section for android build"/>
