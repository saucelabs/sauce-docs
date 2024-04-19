---
id: micro-focus
title: Connecting Micro Focus ALM Octane to TestFairy
sidebar_label: Micro Focus ALM Octane
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Micro Focus ALM Octane a web-based application lifecycle management and quality management solution designed to streamline software delivery and testing processes. By integrating Micro Focus ALM Octane with TestFairy, you can efficiently manage your testing processes, streamline bug tracking, and ensure a smooth collaboration between development and testing teams.

## Integration Steps

1. Go to your [Integrations](https://app.testfairy.com/settings/integrations/) page.

2. Scoll the list to the **Micro Focus ALM Octane** and press the **Add Integration**.
   <img src={useBaseUrl('/img/testfairy/testing-an-app/bug-tracking/ALM-1.png')} alt="Micro Focus ALM Octane"/>

3. Next, go to your `ALM Octane` workspace and navigate to the **API ACCESS**. You can use an existing API Access if you have its `API key(Client ID)` and `API password (Client secret)` or create a new one.
   <img src={useBaseUrl('/img/testfairy/testing-an-app/bug-tracking/ALM-2.png')} alt="API Access"/>

4. Copy the `API key(Client ID)` and `API password (Client secret)` from your workspace to the Bug System Configuration screen fields.
   <img src={useBaseUrl('/img/testfairy/testing-an-app/bug-tracking/ALM-2_1.png')} alt="API Key and API password"/>

5. Copy your workspace number (you can find it in the workspace URL after `?admin&p=`).
   The link in the URL field should be: `https://almoctane-eur.saas.microfocus.com/api/shared_spaces/[INSERT WORKSPACE NUMBER HERE]/`.

6. Press **Save** to save the configuration.
   <img src={useBaseUrl('/img/testfairy/testing-an-app/bug-tracking/ALM-3.png')} alt="Save configuration"/>

7. Scroll down and press **Activate** for the app you want to connect to a workspace.

8. In the window, select the target workspace for your issues in the `Project Key` field and **Save Changes**.
   <img src={useBaseUrl('/img/testfairy/testing-an-app/bug-tracking/ALM-4.png')} alt="Select project key"/>

9. When you return to the apps screen, the workspace is mapped to the app.
   <img src={useBaseUrl('/img/testfairy/testing-an-app/bug-tracking/ALM-5.png')} alt="Project mapping"/>

Congratulations! You have successfully integrated Micro Focus ALM Octane with TestFairy, and you can now manage your testing processes and issues more efficiently.
