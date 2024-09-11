---
id: symbols-file
title: Upload/download Symbols file
sidebar_label: Upload/download Symbols file
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Uploading Symbols Files

To ensure accurate symbolication and better management of your app's debug information, it's recommended to upload mapping files (symbols) through the API. Follow these steps to attach the file during the app upload process:

### 1. Prepare the Symbols File

Ensure you have the mapping file (symbols) that corresponds to your app version. This file is crucial for decoding crash reports and understanding stack traces.

### 2. Upload the File via API

You can upload the mapping file by using the API provided by Sauce Labs. Here's a general approach:

- **Endpoint:** Use the appropriate API endpoint for uploading your app. For example:

- **Attachment:** Include the mapping file `symbols_file` as part of your app submission. For instance:

Android:

```bash
curl https://upload.testfairy.com/api/upload \
 -F api_key='your_api_key' \
 -F file=@sample.apk \
 -F symbols_file=@mappings.txt
```

IOS:

```bash
curl https://upload.testfairy.com/api/upload \
 -F api_key='your_api_key' \
 -F file=@sample.ipa \
 -F symbols_file=@sample.dSYM.zip
```

### Accessing Your Symbols File

After a successful upload via the API, the response will include a URL to download your Symbols file.

Here’s an example of the relevant portion of the API response:

```json
{
  "status": "ok",
  ...
  "symbols_download_url": "https://mobile.testfairy.com/api/xxx/projects/xxx/builds/xxx/symbols/download/",
  ...
}
```

## Accessing Symbols File Through the Dashboard

To download your symbols file through the TestFairy dashboard, follow these steps:

1. **Log In to Your Dashboard**

   Log in to your [Sauce Labs dashboard](https://mobile.saucelabs.com).

2. **Navigate to Uploaded Apps**

   From the apps list, find the app that has the symbols file attached to it.

3. **Access App Details**

   - Locate the app in the list and click on the gear icon (⚙️) at the end of the row.

4. **Download Symbols File**

   - In the details page, click on **More**.
   - If a symbols file has been uploaded, you will see a **Download** link.
   - Click the **Download** link to retrieve your symbols file.

By following these steps, you can easily access and download your symbols file from the dashboard.

<img src={useBaseUrl('/img/testfairy/app-distribution/download-symbols-file-dashboard.png')} alt="Download Symbols file"/>
