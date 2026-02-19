---
id: fastlane
title: Fastlane
sidebar_label: Fastlane
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Upload a new build to Sauce Labs Mobile App Distribution using Fastlane and the `fastlane-plugin-mad` plugin. You can find your API Key in the [Sauce Labs Mobile App Distribution Settings](https://app.testfairy.com/settings/) page.

## Installation

```bash
fastlane add_plugin mad
```

Or add the plugin manually to your project's `fastlane/Pluginfile`:

```ruby
gem 'fastlane-plugin-mad'
```

Then run `bundle install` to fetch it.

## Usage

<Tabs>
<TabItem value="ios" label="iOS" default>

```ruby
mad(
    api_key: "your_api_key",
    ipa: "./path/to/app.ipa",
    comment: "Build #{lane_context[SharedValues::BUILD_NUMBER]}",
)
```

</TabItem>
<TabItem value="android" label="Android">

```ruby
mad(
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

:::note
If your server's security settings require users to login before downloading, you must set `landing_page_mode: "closed"`. Otherwise the upload will fail with error code 156.
:::

### Lane Variables

Actions can communicate with each other using a shared hash `lane_context`, that can be accessed in other actions, plugins or your lanes: `lane_context[SharedValues:XYZ]`. The `mad` action generates the following Lane Variables:

| SharedValue                    | Description                                      |
|--------------------------------|--------------------------------------------------|
| `SharedValues::MAD_BUILD_URL`    | URL for the sessions of the newly uploaded build |
| `SharedValues::MAD_DOWNLOAD_URL` | URL directly to the newly uploaded build         |
| `SharedValues::MAD_LANDING_PAGE` | URL of the build's landing page                  |

### Documentation

To show the documentation in your terminal, run

```bash
fastlane action mad
```

### CLI

It is recommended to add the above action into your Fastfile, however sometimes you might want to run one-offs. To do so, you can run the following command from your terminal

```bash
fastlane run mad
```

To pass parameters, make use of the `:` symbol, for example

```bash
fastlane run mad api_key:"your_key" ipa:"./app.ipa"
```

It's important to note that the CLI supports primitive types like integers, floats, booleans, and strings. Arrays can be passed as a comma delimited string (e.g. `param:"1,2,3"`). Hashes are not currently supported.

It is recommended to add all fastlane actions you use to your Fastfile.

You can find the plugin on [RubyGems](https://rubygems.org/gems/fastlane-plugin-mad).
