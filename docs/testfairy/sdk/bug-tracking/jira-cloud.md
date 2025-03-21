---
id: jira-cloud
title: Connecting App Distribution (TestFairy) to JIRA Cloud
sidebar_label: Jira Cloud
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Creating a Jira API Token

To connect App Distribution to Jira Cloud, you'll need to create an API token in Jira. This token will be used to authenticate App Distribution when accessing your Jira account. Follow these steps to create the API token:

1. Log in to [https://id.atlassian.com/manage/api-tokens#](https://id.atlassian.com/manage/api-tokens#) and click on **Create API token**.
   <img src={useBaseUrl('/img/testfairy/testing-an-app/bug-tracking/jira-create-api.png')} alt="Create Jira API Token"/>

1. Label the new token `TestFairy`.
   <img src={useBaseUrl('/img/testfairy/testing-an-app/bug-tracking/jira-label.png')} alt="Set App Distribution Jira Key"/>

1. Copy the API Token.
   <img src={useBaseUrl('/img/testfairy/testing-an-app/bug-tracking/jira-token.png')} alt="Copy the API Token"/>

## Configuring Jira in Your App Distribution Settings

To connect App Distribution to Jira, you'll need to configure Jira settings in your App Distribution account. Follow these steps to complete the configuration:

1. Open your App Distribution account Preferences .
   <img src={useBaseUrl('/img/testfairy/testing-an-app/bug-tracking/jira-cloud-1.png')} alt="Open App Distribution preferences"/>

2. Choose **Integrations**, scroll to Jira and press **Add integration**.
   <img src={useBaseUrl('/img/testfairy/testing-an-app/bug-tracking/jira-cloud-1-1.png')} alt="Jira cloud"/>

3. Enter your Jira Username, API Token, and JIRA URL in the next screen and press **Update Jira Settings**.
   <img src={useBaseUrl('/img/testfairy/testing-an-app/bug-tracking/jira-cloud-2.png')} alt="Configure Jira Cloud"/>

## (Optional) Installing the App Distribution Chrome Extension

The App Distribution Chrome Extension is available at [https://chrome.google.com/webstore/detail/testfairy-for-jira/joaafaemekbkgekhjbaldlllcnjifcee](https://chrome.google.com/webstore/detail/testfairy-for-jira/joaafaemekbkgekhjbaldlllcnjifcee). With this Chrome extension, every JIRA issue that has a link to a App Distribution session will contain the proper App Distribution session, timeline, logs, and crash reports embedded in the Jira issue. Follow these steps to install the Chrome extension:

## (Optional) Adding the App Distribution Jira Add-on to Your Jira Account

If you choose not to use the App Distribution Chrome Extension, you can add the App Distribution Jira Add-on to your Jira account. This add-on allows you to include App Distribution videos in Jira issues. Follow these steps to add the App Distribution Jira Add-on:


1. Open **Jira Settings**.
   <img src={useBaseUrl('/img/testfairy/testing-an-app/bug-tracking/jira-settings.png')} alt="Open Jira Settings"/>

2. Open **Apps**.
   <img src={useBaseUrl('/img/testfairy/testing-an-app/bug-tracking/jira-settings1.png')} alt="Open Apps"/>

3. In the Apps menu, press **Find new apps**.
   <img src={useBaseUrl('/img/testfairy/testing-an-app/bug-tracking/jira-find-apps.png')} alt="Find new apps"/>

4. Add **App Distribution for Jira** to your account.
   <img src={useBaseUrl('/img/testfairy/testing-an-app/bug-tracking/jira-discover.png')} alt="App Distribution for Jira"/>

5. On the first issue created, click on the "3 dots" icon and choose **App Distribution Session**.
   <img src={useBaseUrl('/img/testfairy/testing-an-app/bug-tracking/jira-3-dots.png')} alt="App Distribution session"/>

   After the installation, the Jira issue looks like the following:

   <img src={useBaseUrl('/img/testfairy/testing-an-app/bug-tracking/hira6a.png')} alt="Jira ticket"/>
   <img src={useBaseUrl('/img/testfairy/testing-an-app/bug-tracking/jira5b.png')} alt="Jira popup"/>
   <img src={useBaseUrl('/img/testfairy/testing-an-app/bug-tracking/jira6c.png')} alt="Application logs"/>

## (Optional) Mapping Jira Custom Fields

<p><span className="sauceGreen">Highly Recommended</span></p>

To leverage the full capabilities of the App Distribution Jira integration, it's recommended to map Jira custom fields. This feature allows you to automatically populate any field in Jira when creating a new issue, using standard App Distribution data or your custom session attributes. Follow these steps to map Jira custom fields:


1. First, you need to connect a Jira account. Follow the [instructions](#creating-a-jira-api-token)
   above.

2. Choose one of the apps you want to connect to and press **Activate**.
   <img src={useBaseUrl('/img/testfairy/testing-an-app/bug-tracking/jira-connect-proj-map1.png')} alt="Activate apps"/>

   You can configure the Jira fields:
   <img src={useBaseUrl('/img/testfairy/testing-an-app/bug-tracking/jira-proj-fileds-config.png')} alt="Configure Jira fields"/>

3. In the Jira configuration screen, choose the **Project Key** you want to connect.
   <img src={useBaseUrl('/img/testfairy/testing-an-app/bug-tracking/jira-project-select.png')} alt="Connect project"/>

4. Next, select the issue type you want to configure.
   <img src={useBaseUrl('/img/testfairy/testing-an-app/bug-tracking/issue-type-select.png')} alt="Configure issue type"/>

   :::tip
   If you want first to test the connection to the Jira project, you can press **TEST** to validate the Jira issue creation. You will get a pop-up window with the response. Make sure you get a valid Jira link.
   In case you get a **PENDING** response, check the connection configuration.
   <img src={useBaseUrl('/img/testfairy/testing-an-app/bug-tracking/jira-connect-test-ok.png')} alt="Connection configuration"/>
   :::

   Each **Issue type** has different fields associated with it:

   - **Name** - the field name.
   - **Type** - the type of field as defined in the JIRA system.
   - **Value** - the values from the JIRA system (in addition to predefined fixed values and Dynamic value, see below)
   - **Required?** - specify if the field required or optional.
     <img src={useBaseUrl('/img/testfairy/testing-an-app/bug-tracking/jira-requiered-fildes-mark.png')} alt="Required fields"/>

When defining fields in the Configure Fields window, follow the below conventions:

- When you choose a field from a drop-down list, this field as is (text) will be populated in the corresponding Jira field in the issue opened.
  <img src={useBaseUrl('/img/testfairy/testing-an-app/bug-tracking/jira-values-drop-down.png')} alt="Values drop down"/>

- You can also choose from the fixed predefined values in the list below:
  - `{user.id}` - the UserId of the session running.
  - `{session.timestamp}` - the timestamp of the session.
  - `{session.url}` - the session URL on the App Distribution dashboard.
  - `{session.ipAddress}` - the IP address of the device running the session.
  - `{device.os}` - the running device OS
  - `{device.model}` - the device model of the handset
  - `{device.osVersion}` - the OS version on the device (if the iPhone is running version IOS 12 value=12)
  - `{app.name}` - the app name.
  - `{app.version}` - the _versionName_ or _CFBundleShortVersionString_ of the build. example: 1.7.0
  - `{app.fullVersion}` - the _versionName_ + (_versionCode_ or _CFBundleVersion_) of the build. example: 1.7.0 (1700)
  - `{feedback.text}` - the feedback message
  - `{feedback.timestamp}` - the timestamp of the feedback (absolute)
  - `{feedback.relTimestamp}` - relative timestamp of the feedback (mm:ss) since the session started

To use these values, add them to the `Dynamic value` field that opens when you select the **Dynamic value** option like so:
<img src={useBaseUrl('/img/testfairy/testing-an-app/bug-tracking/jira-fixed-attr-popup.png')} alt="Fixed values"/>

- You can add attributes defined in your app's code to the `Dynamic value` field. The structure of a dynamic field is as follows:
  `{attr.[attribute_name]||[default_value]}`.
- `attribute_name` - is the name of the Teasfairy attribute set in the code by the `TestFairy.setAttribute` function. What passes to the Jira is the value of this attribute.
- `default_value` - for each attribute, you can set a default value so that if you receive a null or wrong attribute value from the code (impossible in this field in Jira), the default value will be passed to Jira instead.

<img src={useBaseUrl('/img/testfairy/testing-an-app/bug-tracking/jira-dynamic-attr-setattr.png')} alt="Attribute Setting"/>
