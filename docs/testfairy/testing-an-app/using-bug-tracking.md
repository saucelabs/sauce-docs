---
id: using-bug-tracking
title: Using Bug Tracking
sidebar_label: Using Bug Tracking
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Before we start, make sure to connect TestFairy to your bug-tracking account:

- Connect TestFairy to JIRA Cloud /testfairy/testing-an-app/bug-tracking/jira-cloud
- Connect TestFairy to JIRA Server /testfairy/testing-an-app/bug-tracking/jira-server
- Connect TestFairy to GitHub /testfairy/testing-an-app/bug-tracking/github
- Connect TestFairy to Trello /testfairy/testing-an-app/bug-tracking/trello
- Connect to TestFairy Connect (TFC) /testfairy/testing-an-app/bug-tracking/tf-connect
- Connect TestFairy to Micro Focus ALM Octane /testfairy/testing-an-app/bug-tracking/micro-focus

## Shake to Feedback

TestFairy makes feedback as easy as a simple shake of your device.

When using your app with "In-app Feedback" enabled, users can post comprehensive feedback anytime by shaking their device.
An email will pop up on the screen, ready for filling in a report. It also comes with an attached screenshot your tester can scribble on.
Once they send this email, a feedback message is sent to all the relevant destinations (such as your developer's dashboard, JIRA, Slack, etc.) along with their input, the video recording of the session, and all the data collected throughout it.

### Enabling Shake to Feedback in Your Build Settings

1. Choose the app and Build in which you'd like to enable Shake to Feedback
   <img src={useBaseUrl('/img/testfairy/testing-an-app/build-settings.png')} alt="Setting"/>

1. Go to **Bug Reporting** section of the build and check the box for **In-App Bug Reporting** and then **Save changes**.
   <img src={useBaseUrl('/img/testfairy/testing-an-app/bug-report-enabled.png')} alt="In-App Bug Reporting"/>
