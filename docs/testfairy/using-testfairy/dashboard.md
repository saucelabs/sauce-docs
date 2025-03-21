---
id: dashboard
title: Dashboard
sidebar_label: Dashboard
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The App Distribution dashboard lets you view the information about your uploaded apps. The dashboard includes a list of all uploaded apps, their app definitions, the latest sessions recorded in your account, and separate tabs for crashes, feedback, and insights.

You can also upload apps from the dashboard using the **NEW UPLOAD** and manage your users and account preferences.

### DASHBOARD Tab

<img src={useBaseUrl('/img/testfairy/using-tf/dashboard-general.png')} alt="dashboard general"/>

The **DASHBOARD** tab displays the number of test sessions, crashes, apps, testers, and users.

#### Apps Table

The **Apps** table lists all the apps loaded into the system.

The table displays information such as the app name and bundle ID, platform, latest version name and number, and details about the number of sessions, builds, crashes, and issues. You can also view the date the last build was uploaded and the date the latest session was logged.

Clicking a row will open the **Builds** table (see Builds /testfairy/using-testfairy/builds) for more information.

Clicking the link button will open the app's landing page.

#### Recent Sessions

A list of the recent sessions logged in the system.

### **TESTERS** Tab

<img src={useBaseUrl('/img/testfairy/using-tf/dashboard-testers.png')} alt="dashboard testers"/>

The **TESTERS** tab displays your testers and assigned apps. See Managing Testers /testfairy/testing-an-app/testers/managing-testers for more information.

### **CRASHES** Tab

<img src={useBaseUrl('/img/testfairy/using-tf/dashboard-crashes.png')} alt="dashboard crashes"/>

The **CRASHES** tab displays crashes aggregated by stack trace. You can filter the list by app, version, and timeframe.
Each crash is aggregated after symbolication (if possible) and appears on a separate line. Unsymbolicated crashes may appear in different lines, one for each crash.

### **USER FEEDBACK** Tab

<img src={useBaseUrl('/img/testfairy/using-tf/dashboard-feedbacks.png')} alt="dashboard feedbacks"/>

The **USER FEEDBACK** tab displays user feedback submitted using the shake-to-report feature. The feedback is linked to the session in which it was created and contains: - A screenshot. - The text the user entered. - The reporter's email (which can be different from the user identified in the session).

Each issue can be linked to a bug tracking system by clicking the **CREATE BUG** in the **ISSUE** column. Apps already connected to a bug-tracking system will display the issue link/number inside the button.
