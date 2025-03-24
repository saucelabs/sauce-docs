---
id: google-uploading
title: Uploading to Google Play Store
sidebar_label: Uploading to Google Play Store
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::note Important
To enable the feature, reach out to support.
:::

Sauce Mobile App Distribution allows you to upload your production app directory to the Google Play Store.

## Configuring the Integration

Go to [settings](https://app.testfairy.com/settings/integrations), and select **Google Play Store**.
<img src={useBaseUrl('/img/testfairy/integrations/google-play/03.png')} alt="google play store"/>

You need to upload credentials from Google Play to upload apps. You can get the service account credentials by entering your Google Play Console and Setup > API access. There is a Service account listed in that section. You need to use the same account and generate JSON Credentials for this account from Google Cloud
<img src={useBaseUrl('/img/testfairy/integrations/google-play/01.png')} alt="API access"/>

Once you have the JSON credentials, return to the settings page, and upload the JSON file.
<img src={useBaseUrl('/img/testfairy/integrations/google-play/04.png')} alt="Google Play Store integration"/>

Once uploaded, you can see the associated Project ID and Service account on the integration page. Verify the account matches the one in Google Play Console.
<img src={useBaseUrl('/img/testfairy/integrations/google-play/05.png')} alt="confirm account"/>

You have configured the integration for upload.

## Uploading

From any build page, click **Upload**.
<img src={useBaseUrl('/img/testfairy/integrations/google-play/07.png')} alt="upload button"/>

You see an upload dialog summarizing what will be uploaded to Google Play Store.
<img src={useBaseUrl('/img/testfairy/integrations/google-play/08.png')} alt="Google Play Store summary"/>

:::caution
Sauce Mobile App Distribution does not publish your app publically; it only uploads the build to the store in a draft state. The app owner in Google must publish the app itself publically.
:::

After uploading, the dialog displays the uploaded state of the app.
<img src={useBaseUrl('/img/testfairy/integrations/google-play/10.png')} alt="uploaded state"/>

If you go into Google Play Console, your app is listed on the Release Overview page.
<img src={useBaseUrl('/img/testfairy/integrations/google-play/11.png')} alt="Release Overview"/>
