---
id: landing-pages
title: Landing Pages
sidebar_label: Landing Pages
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Landing pages provide a convenient location for testers to access apps. Each app has an automatically created landing page, which can be managed through the landing page settings page.

<img src={useBaseUrl('/img/testfairy/app-distribution/landing-pages-on-off.png')} alt="Disable landing page"/>

<img src={useBaseUrl('/img/testfairy/app-distribution/landing-page-fields.png')} alt="Landing page settings"/>

- **Landing page URL** - The URL is automatically generated for each landing page. The last token of the URL is configurable.

- **App version** - The app version displayed on the landing page indicates which version of the app will be shown. You can choose to show the latest version or freeze the landing page on a specific version.

- **Visibility**

  - Open Beta (Anyone can download) - In this mode, the landing page is visible to everyone. Anyone can access and download the app.
  - Closed Beta (Testers required to login) - In closed beta mode, users must log in to see the landing page. This allows for a controlled testing environment.

- **App Description** - The app description field is used to provide instructions or other information about the app. It supports Markdown formatting for enhanced presentation.

- **Add release notes** - Enabling this option automatically includes release notes on the landing page. These release notes can be managed separately (see Release Notes /testfairy/app-distribution/release-notes).

- **Add custom CSS** - When enabled, you can add custom CSS to the landing page, allowing you to customize its appearance and align it with your company or brand (see Landing Page Customization landing-page-customization).

Changes to settings will take effect once you save them. You can preview the changes by clicking **Preview landing page**.

## Recruitment Pages

Recruitment pages allow users to request to join your testing project.

When users sign up, they will appear in your account as "Pending Approval," you will get an email prompting you to approve or reject them. If approved, they will get an email reminding them to download the app.

For recruitment pages to work, visibility must be in `Open Beta` mode.

Users who sign up and are approved will automatically be added to a testers' group called "recruit".

If your app is an iOS app signed with an ad-hoc certificate, users will first get an email asking them to register their device, and only after they register will you get an email with their UDID.

:::note
Contact us to enable the option to automatically approve all users who sign up.
:::

## Disabling a Landing Page

If you do not want a landing page, you can disable it on the landing page settings page for that specific app:

<img src={useBaseUrl('/img/testfairy/app-distribution/landing-pages-on-off.png')} alt="Disable landing page"/>

Disabling the page will not stop the distribution of the app since it still appears on the **testers' dashboard** and is still alive in the system.

## Landing Page Customization

Landing pages created for app distribution can be customized to match your company or brand's look and feel.

The default landing page that is automatically generated looks like this:
<img src={useBaseUrl('/img/testfairy/app-distribution/landing-page-customization-areas.png')} alt="Landing page"/>

By utilizing the **Add custom CSS** option in the landing page settings, you can modify the following elements:

- **Page title** - `.testfairy-app-name`
- **Release notes** - `.testfairy-description`
- **Feedback Instructions** - `.community-sub-title.dev`
- **Background** - `.testfairy-background`

Here's an example of CSS code that you can use to customize your landing page:

```css

.testfairy-background {background-image: url("https://www.testfairy.com/images/castle-cloud.jpg") !important;}
.testfairy-app-name {color: green;}
.testfairy-description {color: red;}
.community-sub-title.dev {color: blue;}

```

<img src={useBaseUrl('/img/testfairy/app-distribution/landing-page-customization-css-place.png')} alt="Css editing"/>
