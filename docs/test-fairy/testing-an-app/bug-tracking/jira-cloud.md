---
id: jira-cloud
title: Connecting TestFairy to JIRA Cloud
sidebar_label: Jira Cloud
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 1. Creating a JIRA API Token

1. Log in to [https://id.atlassian.com/manage/api-tokens#](https://id.atlassian.com/manage/api-tokens#) and click on **Create API token**.
   <img src={useBaseUrl('/img/test-fairy/testing-an-app/bug-tracking/jira-create-api.png')} alt="Create Jira API Token"/>

1. Label the new token `TestFairy`.
   <img src={useBaseUrl('/img/test-fairy/testing-an-app/bug-tracking/jira-label.png')} alt="Set TestFairy Jira Key"/>

1. Copy the API Token.
   <img src={useBaseUrl('/img/test-fairy/testing-an-app/bug-tracking/jira-token.png')} alt="Copy the API Token"/>

## 2. Configuring JIRA in Your TestFairy Settings

1. Open your TestFairy account Preferences .
   <img src={useBaseUrl('/img/test-fairy/testing-an-app/bug-tracking/jira-cloud-1.png')} alt="Open TestFairy preferences"/>

2. Choose **Integrations**, scroll to JIRA and press **Add integration**.
   <img src={useBaseUrl('/img/test-fairy/testing-an-app/bug-tracking/jira-cloud-1-1.png')} alt="Jira cloud"/>

3. In the next screen, enter your JIRA Username, API Token, and JIRA URL and press **Update Jira Settings**.
   <img src={useBaseUrl('/img/test-fairy/testing-an-app/bug-tracking/jira-cloud-2.png')} alt="Configure Jira Cloud"/>

## 3. (Optional) Installing the TestFairy Chrome Extension

The TestFairy Chrome Extension is available at [https://chrome.google.com/webstore/detail/testfairy-for-jira/joaafaemekbkgekhjbaldlllcnjifcee](https://chrome.google.com/webstore/detail/testfairy-for-jira/joaafaemekbkgekhjbaldlllcnjifcee). With this Chrome extension, every JIRA issue that has a link to a TestFairy session will contain the proper TestFairy session, timeline, logs, and crash reports embedded in the JIRA issue.

## 4. (Optional) Adding the TestFairy JIRA Add-on to Your Jira Account

If you didn't install the Chrome extension, you could add the TestFairy Jira Add-on to add TestFairy videos to Jira issues.

To install it, follow these steps:

1. Open **JIRA Settings**.
   <img src={useBaseUrl('/img/test-fairy/testing-an-app/bug-tracking/jira-settings.png')} alt="Open Jira Settings"/>

2. Open **Apps**.
   <img src={useBaseUrl('/img/test-fairy/testing-an-app/bug-tracking/jira-settings1.png')} alt="Open Apps"/>

3. In the Apps menu, press **Find new apps**.
   <img src={useBaseUrl('/img/test-fairy/testing-an-app/bug-tracking/jira-find-apps.png')} alt="Find new apps"/>

4. Add **TestFairy for Jira** to your account.
   <img src={useBaseUrl('/img/test-fairy/testing-an-app/bug-tracking/jira-discover.png')} alt="TestFairy for Jira"/>

5. On the first issue created, click on the "3 dots" icon and choose **TestFairy Session**.
   <img src={useBaseUrl('/img/test-fairy/testing-an-app/bug-tracking/jira-3-dots.png')} alt="TestFairy session"/>

   After the installation, the Jira issue looks like the following:

   <img src={useBaseUrl('/img/test-fairy/testing-an-app/bug-tracking/hira6a.png')} alt="Jira ticket"/>
   <img src={useBaseUrl('/img/test-fairy/testing-an-app/bug-tracking/jira5b.png')} alt="Jira popup"/>
   <img src={useBaseUrl('/img/test-fairy/testing-an-app/bug-tracking/jira6c.png')} alt="Application logs"/>

## 5. (Optional) Mapping JIRA Custom Fields

<p><span className="sauceGreen">Highly Recommended</span></p>

The TestFairy JIRA integration allows you to automatically populate any field in JIRA when creating a new issue.
You can do that with standard TestFairy data like app name, version, user, device, etc., or your session attributes, key, and value you push to our SDK in real-time.<br/>

To map Jira custom field follow the steps below:

1. First, you need to connect a JIRA account. Follow the [instructions](#1-creating-a-jira-api-token) above.

2. Choose one of the apps you want to connect to and press **Activate**.
   <img src={useBaseUrl('/img/test-fairy/testing-an-app/bug-tracking/jira-connect-proj-map1.png')} alt="Activate apps"/>

   You can configure the JIRA fields:
   <img src={useBaseUrl('/img/test-fairy/testing-an-app/bug-tracking/jira-proj-fileds-config.png')} alt="Configure Jira fields"/>

3. In the JIRA configuration screen, choose the **Project Key** you want to connect.
   <img src={useBaseUrl('/img/test-fairy/testing-an-app/bug-tracking/jira-project-select.png')} alt="Connect project"/>

4. Next, select the issue type you want to configure.
   <img src={useBaseUrl('/img/test-fairy/testing-an-app/bug-tracking/issue-type-select.png')} alt="Configure issue type"/>

   :::tip
   If you want first to test the connection to the JIRA project, you can press **TEST** to validate the JIRA issue creation. You will get a pop-up window with the response. Make sure you get a valid JIRA link.
   In case you get a **PENDING** response, check the connection configuration.
   <img src={useBaseUrl('/img/test-fairy/testing-an-app/bug-tracking/jira-connect-test-ok.png')} alt="Connection configuration"/>
   :::

   Each **Issue type** has different fields associated with it:

   - **Name** - the field name.
   - **Type** - the type of field as defined in the JIRA system.
   - **Value** - the values from the JIRA system (in addition to predefined fixed values and Dynamic value, see below)
   - **Required?** - specify if the field required or optional.
     <img src={useBaseUrl('/img/test-fairy/testing-an-app/bug-tracking/jira-requiered-fildes-mark.png')} alt="Required fields"/>

When defining fields in the Configure Fields window, follow the below conventions:

- When you choose a field from a drop-down list, this field as is (text) will be populated in the corresponding JIRA field in the issue opened.
  <img src={useBaseUrl('/img/test-fairy/testing-an-app/bug-tracking/jira-values-drop-down.png')} alt="Values drop down"/>

- You can also choose from the fixed predefined values in the list below:
  - `{user.id}` - the UserId of the session running.
  - `{session.timestamp}` - the timestamp of the session.
  - `{session.url}` - the session URL on the TestFairy dashboard.
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
<img src={useBaseUrl('/img/test-fairy/testing-an-app/bug-tracking/jira-fixed-attr-popup.png')} alt="Fixed values"/>

- You can add attributes defined in your app's code to the `Dynamic value` field. The structure of a dynamic field is as follows:
  `{attr.[attribute_name]||[default_value]}`.
- `attribute_name` - is the name of the Teasfairy attribute set in the code by the `TestFairy.setAttribute` function. What passes to the JIRA is the value of this attribute.
- `default_value` - for each attribute, you can set a default value so that if you receive a null or wrong attribute value from the code (not possible in this field in JIRA), the default value will be passed to JIRA instead.

<img src={useBaseUrl('/img/test-fairy/testing-an-app/bug-tracking/jira-dynamic-attr-setattr.png')} alt="Attribute Setting"/>
