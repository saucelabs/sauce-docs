---
id: google-cloud
title: Private Cloud Storage with Google
sidebar_label: Private Cloud Storage
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::note Important
To enable the feature, reach out to support.
:::

TestFairy supplies the ability to provide your own Google Cloud Storage bucket for storing your assets. It includes your apps for distribution and session data.

## Google Cloud Bucket Settings

TestFairy requires buckets created in Google Cloud to have a specific setting before storing data. Namely, the bucket **must** have _Fine-grain_ Access control. It allows TestFairy to manage the privacy level of individual files stored in Google Cloud.

## Service Account Permissions

TestFairy requires credentials for a Service Account from Google Cloud to store asset data. The service account must have access to the storage bucket. While you are free to give this account any other permission, at minimum, TestFairy expects that the following permissions are available to the service account:

- storage.buckets.get
- storage.objects.create
- storage.objects.delete
- storage.object.get

Without these permissions, TestFairy may not work as expected. Export the credentials for the account into JSON format.

## Configuring the Integration

Go to [settings](https://app.testfairy.com/settings/integrations), and select **Google Cloud Storage Integration**.

<img src={useBaseUrl('/img/testfairy/integrations/google-cloud-storage/01.png')} alt="Google Cloud Storage"/>
<img src={useBaseUrl('/img/testfairy/integrations/google-cloud-storage/02.png')} alt="Google Cloud Storage Integration"/>

With the bucket name and JSON credentials in hand, upload the JSON file and fill in the field for the bucket name.
<img src={useBaseUrl('/img/testfairy/integrations/google-cloud-storage/03.png')} alt="bucket name"/>

Once uploaded, TestFairy tests the provided credentials before saving.
<img src={useBaseUrl('/img/testfairy/integrations/google-cloud-storage/04.png')} alt="test the credentials"/>

The associated Project ID and Service account are on the integration page. Verify the account matches the one in Google Cloud Console.
<img src={useBaseUrl('/img/testfairy/integrations/google-cloud-storage/05.png')} alt="verify account"/>

You have configured the integration. Google Storage bucket stores all assets collected by TestFairy, including feedback, session data, crash reports, and uploaded assets.
