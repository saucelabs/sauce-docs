---
id: user-feedback
title: Submitting User Feedback
sidebar_label: Submitting User Feedback
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


TestFairy offers a convenient "Shake to Feedback" feature that allows users to provide feedback easily while using your application. By shaking their device, users can trigger an email pop up containing comprehensive feedback, along with an attached screenshot that users can scribble on. The feedback message is then sent to designated destinations such as your developer's dashboard, JIRA, Slack, etc., including the user's input, a video recording of the session, and all relevant data collected during the session.

## Using Shake to Feedback

By default, the User Feedback feature is activated by shaking the device. When the TestFairy SDK is integrated, users can shake their device to prompt the feedback issue creation.
When the shake gesture is detected, a feedback form will appear on the screen. Users can fill in details like their email address and a description of the issue they encountered.

The feedback issue will automatically include a screenshot of the app at the moment the user initiated the shake gesture. This screenshot provides valuable context for developers to understand the reported issue. Users can annotate the screenshot to highlight specific areas or provide additional context. Annotating the screenshot can help communicate the issue more effectively.

## Enabling Shake to Feedback in Your Build Settings

To enable the Shake to Feedback feature for your application, follow these steps:

1. Go to Apps and select the app from the list and click Settings.
   <img src={useBaseUrl('/img/test-fairy/enable-bug-1.png')} alt="Enable Shake to Feedback"/>
2. Enable the **In-App Bug Reporting** and click **Save Changes**.
   <img src={useBaseUrl('/img/test-fairy/enable-bug-2.png')} alt="Enable Shake to Feedback"/>