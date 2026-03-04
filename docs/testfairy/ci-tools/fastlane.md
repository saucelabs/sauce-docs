---
id: fastlane
title: Fastlane
sidebar_label: Fastlane
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Upload a new build to Sauce Labs Mobile App Distribution using Fastlane and the `fastlane-plugin-saucelabs_appdist` plugin. You can find your API Key in the [Sauce Labs Mobile App Distribution Settings](https://app.testfairy.com/settings/) page.

## Installation

```bash
fastlane add_plugin saucelabs_appdist
```

Or add the plugin manually to your project's `fastlane/Pluginfile`:

```ruby
gem 'fastlane-plugin-saucelabs_appdist'
```

Then run `bundle install` to fetch it.

## Usage

<Tabs>
<TabItem value="ios" label="iOS" default>

```ruby
saucelabs_appdist(
    api_key: "your_api_key",
    ipa: "./path/to/app.ipa",
    comment: "Build #{lane_context[SharedValues::BUILD_NUMBER]}",
)
```

</TabItem>
<TabItem value="android" label="Android">

```ruby
saucelabs_appdist(
    api_key: "your_api_key",
    apk: "../build/app/outputs/apk/qa/release/app-qa-release.apk",
    comment: "Build #{lane_context[SharedValues::BUILD_NUMBER]}",
)
```

</TabItem>
</Tabs>

### Parameters

| Key                   | Description                                                    | Default                   |
|-----------------------|----------------------------------------------------------------|---------------------------|
| `api_key`             | API Key for Sauce Labs Mobile App Distribution                 |                           |
| `ipa`                 | Path to your IPA file (iOS)                                    |                           |
| `apk`                 | Path to your APK file (Android)                                |                           |
| `symbols_file`        | Symbols mapping file                                           |                           |
| `upload_url`          | Upload API URL for Sauce Labs Mobile App Distribution          | `https://app.testfairy.com` |
| `testers_groups`      | Array of tester groups to be notified                          | `[]`                      |
| `comment`             | Additional release notes for this upload                       | `No comment provided`     |
| `auto_update`         | Auto-upgrade users (`on`/`off`)                                | `off`                     |
| `notify`              | Send email to testers (`on`/`off`)                             | `off`                     |
| `options`             | Array of options                                               | `[]`                      |
| `custom`              | Custom options string                                          | `""`                      |
| `timeout`             | Request timeout in seconds                                     |                           |
| `tags`                | Custom tags for builds                                         | `[]`                      |
| `metrics`             | Array of metrics to record                                     | `[]`                      |
| `folder_name`         | Dashboard folder name                                          | `""`                      |
| `landing_page_mode`   | Landing page visibility (`open`/`closed`)                      | `open`                    |
| `upload_to_saucelabs` | Upload to Sauce Labs (`on`/`off`)                              | `off`                     |
| `platform`            | Platform override                                              | `""`                      |
| `community_token`     | Custom URL token for the landing page                          | `""`                      |
| `app_description`     | Description text to display on the landing page                | `""`                      |

:::note
If your server's security settings require users to login before downloading, you must set `landing_page_mode: "closed"`. Otherwise the upload will fail with error code 156.
:::

### Lane Variables

The `saucelabs_appdist` action stores the full API response in `lane_context`, which can be accessed in subsequent actions or lanes:

```ruby
lane_context[SharedValues::SAUCELABS_APPDIST_UPLOAD_RESPONSE]
```

The response is a hash containing all fields from the upload API, including:

| Key                                | Description                                       |
|------------------------------------|---------------------------------------------------|
| `status`                           | Upload status (`ok` on success)                   |
| `build_id`                         | ID of the uploaded build                          |
| `project_id`                       | ID of the project                                 |
| `app_name`                         | Name of the uploaded app                          |
| `app_version`                      | Version of the uploaded app                       |
| `file_size`                        | Size of the uploaded file in bytes                |
| `build_url`                        | URL for the sessions of the newly uploaded build  |
| `download_page_url`                | URL of the download page                          |
| `app_url`                          | Direct download URL for the build                 |
| `invite_testers_url`               | URL to invite testers to this build               |
| `icon_url`                         | URL of the app icon                               |
| `options`                          | Configured options for this build                 |
| `platform`                         | Platform (iOS/Android)                            |
| `tags`                             | Tags associated with the build                    |
| `metadata`                         | Metadata associated with the build                |
| `has_testfairy_sdk`                | Whether the app includes the TestFairy SDK        |
| `symbols_download_url`             | URL to download symbols file (if uploaded)        |
| `landing_page_url`                 | URL of the build's landing page                   |
| `build_specific_landing_page_url`  | Landing page URL specific to this build           |
| `attachments`                      | Attachments associated with the build             |
| `landing_page_mode`                | Landing page visibility (`open` or `closed`)      |
| `app_description`                  | Description text displayed on the landing page    |

Example:

```ruby
response = lane_context[SharedValues::SAUCELABS_APPDIST_UPLOAD_RESPONSE]
puts response['build_url']
puts response['app_url']
puts response['landing_page_url']
```

### Documentation

To show the documentation in your terminal, run

```bash
fastlane action saucelabs_appdist
```

### CLI

It is recommended to add the above action into your Fastfile, however sometimes you might want to run one-offs. To do so, you can run the following command from your terminal

```bash
fastlane run saucelabs_appdist
```

To pass parameters, make use of the `:` symbol, for example

```bash
fastlane run saucelabs_appdist api_key:"your_key" ipa:"./app.ipa"
```

It's important to note that the CLI supports primitive types like integers, floats, booleans, and strings. Arrays can be passed as a comma delimited string (e.g. `param:"1,2,3"`). Hashes are not currently supported.

It is recommended to add all fastlane actions you use to your Fastfile.

You can find the plugin on [RubyGems](https://rubygems.org/gems/fastlane-plugin-saucelabs_appdist) and [GitHub](https://github.com/saucelabs/fastlane-plugin-saucelabs_appdist).