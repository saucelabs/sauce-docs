---
id: upload-api
title: Upload API
sidebar_label: Upload API
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Streamline your build process and upload APKs or IPAs directly to TestFairy.

### Usage

[Command line uploader](https://github.com/testfairy/command-line-uploader/blob/master/testfairy-uploader.sh)

[Jenkins](https://plugins.jenkins.io/TestFairy)

[Gradle](https://github.com/testfairy/testfairy-gradle-plugin)

[fastlane](https://docs.fastlane.tools/actions/testfairy/)

[CircleCI](https://circleci.com/docs/2.0/deploying-ios/#uploading-to-testfairy)

[Bitrise](https://www.bitrise.io/integrations/steps/testfairy-deploy)

[Visual Studio Team Services](/testfairy/ci-tools/vs-team)

[NetBeans](http://plugins.netbeans.org/plugin/52087/)

[Bamboo](/testfairy/ci-tools/bamboo)

[TeamCity](/testfairy/ci-tools/team-city)

[GitLab](/testfairy/ci-tools/gitlab)

[Lumberyard](/testfairy/platforms/lumberyard)

### Upload API

<details>
<summary><span className="api post">POST</span><code>https://upload.testfairy.com/api/upload/</code></summary>
<p></p>

#### Parameters

<table id="table-api">
 <tbody>
 <tr>
 <td><code>api_key</code></td>
 <td><p><small>| REQUIRED |</small></p><p>Your API application key. See https://app.testfairy.com/settings for details.</p></td>
 </tr>
 </tbody>
 <tbody>
 <tr>
 <td><code>file</code></td>
 <td><p><small>| REQUIRED |</small></p><p>Android Package Kit (APK), Android App Bundle (AAB), iOS package App Store (IPA), or ZIP (MacOS) file data.</p></td>
 </tr>
 </tbody>
 <tbody>
 <tr>
 <td><code>symbols_file</code></td>
 <td><p><small>| OPTIONAL |</small></p><p>Symbols mapping file. For iOS, this is a path to the <strong>zipped</strong> symbols file (dSYM). For Android, this is the path to the <strong>.txt</strong> file</p></td>
 </tr>
 </tbody>
 <tbody>
 <tr>
 <td><code>groups</code></td>
 <td><p><small>| OPTIONAL |</small></p><p>Comma-separated list of tester groups that get permission to download this app.</p></td>
 </tr>
 </tbody>
 <tbody>
 <tr>
 <td><code>notify</code></td>
 <td><p><small>| OPTIONAL |</small></p><p>Send email to all users in 'groups'. It can be <code>on</code> or <code>off</code>. Default is <code>off</code>.</p></td>
 </tr>
 </tbody>
 <tbody>
 <tr>
 <td><code>release_notes</code></td>
 <td><p><small>| OPTIONAL |</small></p><p>Release notes for this upload. This text adds to emails and landing pages.</p></td>
 </tr>
 </tbody>
 <tbody>
 <tr>
 <td><code>auto_update</code></td>
 <td><p><small>| OPTIONAL |</small></p><p>Allows to upgrade all users to the current version. It can be <code>on</code> or <code>off</code>. Default is <code>off</code>.</p></td>
 </tr>
 </tbody>
 <tbody>
 <tr>
 <td><code>tags</code></td>
 <td><p><small>| OPTIONAL |</small></p><p>Set of comma-separated tags to be displayed and searched upon.</p></td>
 </tr>
 </tbody>
 <tbody>
 <tr>
 <td><code>folder_name</code></td>
 <td><p><small>| OPTIONAL |</small></p><p>Name of the dashboard folder that contains this app</p></td>
 </tr>
 </tbody>
 <tbody>
 <tr>
 <td><code>landing_page_mode</code></td>
 <td><p><small>| OPTIONAL |</small></p><p>Landing page mode. It can be <code>open</code> or <code>closed</code>. Default is <code>open</code>.</p></td>
 </tr>
 </tbody>
 <tbody>
 <tr>
 <td><code>upload_to_saucelabs</code></td>
 <td><p><small>| OPTIONAL |</small></p><p>Upload file directly to Sauce Labs. It can be <code>on</code> or <code>off</code>. Default is <code>off</code>.</p></td>
 </tr>
 </tbody>
 <tbody>
 <tr>
 <td><code>platform</code></td>
 <td><p><small>| OPTIONAL |</small></p><p>In case the app is not iOS or Android, which are detected automatically, use this to mark an app for specific desktop or console platforms. Values can be "Xbox", "PlayStation", "switch", "windows", "macos". This feature is not enabled by default. Contact support for more information.</p></td>
 </tr>
 </tbody>
</table>

<Tabs
groupId="params"
defaultValue="required"
values={[
{label: 'Required Params', value: 'required'},
{label: 'Optional Params', value: 'optional'},
]}>

<TabItem value="required">

```bash title="Sample Request with Required Params"
curl https://upload.testfairy.com/api/upload -F api_key='your_api_key' -F file=@sample.apk
```

</TabItem>

<TabItem value="optional">

```bash title="Sample Request with Optional Params"
curl https://upload.testfairy.com/api/upload \
 -F api_key='your_api_key' \
 -F file=@sample.apk \
 -F symbols_file=@sample_mapping.txt \
 -F groups='friends,beta' \
 -F notify='on' \
 -F release_notes='stabilitty fixes, improvement in ui' \
 -F tags='production, english
```

</TabItem>
</Tabs>

#### Responses

In the case of an error, TestFairy returns a JSON with `status` => `fail` and `code` with one of the values listed below. TestFairy supplies an additional human-readable error message to detail the cause of the specific error.

<table id="table-api">
 <tbody>
 <tr>
 <td><code>200</code></td>
 <td colSpan='2'>Success.</td>
 </tr>
 </tbody>
 <tbody>
 <tr>
 <td><code>1</code></td>
 <td colSpan='2'>Parameter 'xxx' is missing.</td>
 </tr>
 </tbody>
 <tbody>
 <tr>
 <td><code>5</code></td>
 <td colSpan='2'>Invalid API key.</td>
 </tr>
 </tbody>
 <tbody>
 <tr>
 <td><code>105</code></td>
 <td colSpan='2'>Invalid file.</td>
 </tr>
 </tbody>

</table>

```json title="Sample Response"
{
 "status": "ok",
 "app_name": "Jigsaw Puzzlers",
 "app_version": "0.9.5",
 "app_url": "https://app.testfairy.com/download/6CWKJCHD60PPVWYJHGM4AADJQYA4SDR0/filename.apk",
 "landing_page_url": "https://tsfr.io/3tajti",
}
```

</details>

### Where Can I Find My API Key?

To get your API KEY, open your account preferences at https://app.testfairy.com/settings/ and click on **Upload API Key**.

### How Can I Create a New API Key?

To create a new API KEY, click on **Regenerate API Key** on your account preferences page.

### Why Is My API Key Empty?

In cases TestFairy identifies that by mistake, you initialize the SDK by using your API KEY instead of using your APP TOKEN, TestFairy automatically reset the API KEY to protect your privacy. In this case, change the SDK initialization to use the APP TOKEN and create a new API KEY.

### Can I Add Custom Metadata?

Yes. Any POST parameter prefixed with "metadata." in the name is considered custom data and stored along with the upload. For example, consider this command:

```bash
curl https://upload.testfairy.com/api/upload \
 -F api_key='your_api_key' \
 -F file=@sample.apk \
 -F metadata.branch=master \
 -F metadata.locale=us-en
```

Metadata is displayed and can be searched on in App Versions page by clicking on an app from the Dashboard. You can also view them on a single version's settings page.

### Can I attach the symbols file to my app to download it later?

Yes! You can attach your dSYM zipped for iOS / Text file .txt for Android app while uploading the app. Check out the [Upload/Download Symbols file] documentation for more details.

[Upload/Download Symbols file]: /testfairy/app-distribution/symbols-file/
