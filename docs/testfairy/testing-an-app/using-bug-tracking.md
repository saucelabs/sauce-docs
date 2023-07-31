---
id: using-bug-tracking
title: Using Bug Tracking
sidebar_label: Using Bug Tracking
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


Bug tracking is an essential part of the software development process to identify, document, and resolve issues in a systematic manner. TestFairy offers integration with various bug-tracking platforms, enabling seamless communication between testers and developers. 

Before utilizing the bug-tracking features in TestFairy, ensure that you connect your TestFairy account to your preferred bug-tracking platform. TestFairy supports the following bug-tracking integrations:

- [JIRA Cloud](/testfairy/testing-an-app/bug-tracking/jira-cloud/)
- [JIRA Server](/testfairy/testing-an-app/bug-tracking/jira-server/)
- [GitHub] (/testfairy/testing-an-app/bug-tracking/github/)
- [Trello] (/testfairy/testing-an-app/bug-tracking/trello/)
- [Connect (TFC)](/testfairy/testing-an-app/bug-tracking/tf-connect/)
- [Micro Focus ALM Octane](/testfairy/testing-an-app/bug-tracking/micro-focus/)

Ensure that you follow the relevant documentation to establish a secure and authenticated connection between TestFairy and your bug-tracking platform.

## Shake to Feedback

TestFairy offers a convenient "Shake to Feedback" feature that allows users to provide feedback easily while using your application. By shaking their device, users can trigger an email pop up containing comprehensive feedback, along with an attached screenshot that users can scribble on. The feedback message is then sent to designated destinations such as your developer's dashboard, JIRA, Slack, etc., including the user's input, a video recording of the session, and all relevant data collected during the session.

## Enabling Shake to Feedback in Your Build Settings

To enable the Shake to Feedback feature for your application, follow these steps:

1. Choose the app and Build in which you'd like to enable Shake to Feedback
   <img src={useBaseUrl('/img/testfairy/testing-an-app/build-settings.png')} alt="Setting"/>

1. Go to **Bug Reporting** section of the build and check the box for **In-App Bug Reporting** and then **Save changes**.
   <img src={useBaseUrl('/img/testfairy/testing-an-app/bug-report-enabled.png')} alt="In-App Bug Reporting"/>
