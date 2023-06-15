---
id: landing-pages
title: Landing Pages
sidebar_label: Landing Pages
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Landing pages give testers a convenient location from which they can access apps. Every app has a landing page created automatically, and it can be disabled from the landing page settings page.

<img src={useBaseUrl('/img/test-fairy/app-distribution/landing-pages-on-off.png')} alt="Disable landing page"/>

<img src={useBaseUrl('/img/test-fairy/app-distribution/landing-page-fields.png')} alt="Landing page settings"/>

- **Landing page URL** - The URL is automatically generated for each landing page. The last token of the URL is configurable.

- **App version** - Indicates which version of the app will be shown. You can always choose to show the latest version, always show the auto-update version, or freeze on a specific version.

- **Visibility**

  - Open Beta (Anyone can download) - The landing page is visible to everyone.
  - Closed Beta (Testers required to login) - Users must log in to see the landing page.

- **App Description** - Used to include instructions or other information. It can be formatted in Markdown.

- **Add release notes** - When enabled, automatically includes release notes on the landing page (see [Release Notes](/test-fairy/app-distribution/release-notes)).

- **Add custom CSS** - When enabled, adds a custom CSS to the landing page (see [Landing Page Customization](#landing-page-customization)).

Changes to settings will take effect once you save them. You can preview the changes by clicking **Preview landing page**.

## Recruitment Pages

Recruitment pages allow users to request to join your testing project.

When users sign up, they will appear in your account as "Pending Approval," you will get an email prompting you to approve or reject them. If approved, they will get an email reminding them to download the app.

For recruitment pages to work, visibility must be in `Open Beta` mode.

Users who sign up and are approved will automatically be added to a testers' group called "recruit".

If your app is an iOS app signed with an ad-hoc certificate, users will first get an email asking them to register their device, and only after they register will you get an email with their UDID.

Contact us to enable the option to approve all users who sign up automatically.

## Disabling a Landing Page

If you do not want a landing page, you can disable it on the landing page settings page for that specific app:

<img src={useBaseUrl('/img/test-fairy/app-distribution/landing-pages-on-off.png')} alt="Disable landing page"/>

Disabling the page will not stop the distribution of the app since it still appears on the **testers' dashboard** and is still alive in the system.

## Landing Page Customization

Landing pages created for app distribution can be customized to have the look and feel of your company or brand.

The default landing page that is automatically generated looks like this:
<img src={useBaseUrl('/img/test-fairy/app-distribution/landing-page-customization-areas.png')} alt="Landing page"/>

You can change the following elements via the **Add custom CSS** option in the landing page settings:

- **Page title** - `.testfairy-app-name`
- **Release notes** - `.testfairy-description`
- **Feedback Instructions** - `.community-sub-title.dev`
- **Background** - `.testfairy-background`

Here is an example of CSS code you can use to customize your landing page:

```css

.testfairy-background {background-image: url("https://www.testfairy.com/images/castle-cloud.jpg") !important;}
.testfairy-app-name {color: green;}
.testfairy-description {color: red;}
.community-sub-title.dev {color: blue;}

```

<img src={useBaseUrl('/img/test-fairy/app-distribution/landing-page-customization-css-place.png')} alt="Css editing"/>
