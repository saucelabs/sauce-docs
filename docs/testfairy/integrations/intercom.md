---
id: intercom
title: Intercom
sidebar_label: Intercom
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

1. Login to [Intercom Developer Hub](https://app.intercom.com/a/apps/_/developer-hub), create a new app.

   - Click **New App**.
   - Enter `App Name`.
   - Select your `workspace` or create one if needed.
   - (Optional) Select **Internal Integration**.
   - Click **Create app**.
     <img src={useBaseUrl('/img/testfairy/integrations/intercom_1.png')} alt="create new app"/>

2. Select your newly created app

   - Go to Authentication.
   - Copy your `Access Token`. You'll need it for the next step.
   - Allow the following permissions: `Write users and companies` and `Write conversations`.
     <img src={useBaseUrl('/img/testfairy/integrations/intercom_3.png')} alt="permissions"/>

3. In App Distribution, go to Preferences > [Integrations](https://app.testfairy.com/settings/integrations/) > Add integration (next to the Intercom row).
   <img src={useBaseUrl('/img/testfairy/integrations/intercom_4.png')} alt="Add integration"/>

4. Paste the Intercom `Access Token` into the input field and click **Save Settings**.
   <img src={useBaseUrl('/img/testfairy/integrations/intercom_5.png')} alt="Access token"/>

5. (Optional) Install the [App Distribution Chrome Extension](https://chrome.google.com/webstore/detail/testfairy-for-jira/joaafaemekbkgekhjbaldlllcnjifcee)

You've added the Intercom integration to App Distribution and will receive new feedback directly in Intercom.
