---
id: fastlane
title: Fastlane
sidebar_label: Fastlane
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Upload a new build to TestFairy using Fastlane. You can find your API Key in the [TestFairy Settings](https://app.testfairy.com/settings/) page.

```
testfairy(
    api_key: "...",
    ipa: "./ipa_file.ipa",
    comment: "Build #{lane_context[SharedValues::BUILD_NUMBER]}",
)
```

```
testfairy(
    api_key: "...",
    apk: "../build/app/outputs/apk/qa/release/app-qa-release.apk",
    comment: "Build #{lane_context[SharedValues::BUILD_NUMBER]}",
)
```

### Parameters

| Key            | 	Description                                                              | Default                      |
|----------------|---------------------------------------------------------------------------|------------------------------|
| api_key        | API Key for TestFairy                                                     |                              |
| ipa            | 	Path to your IPA file for iOS	                                           |                              |
| apk            | 	Path to your APK file for Android	                                       |                              |
| symbols_file   | 	Symbols mapping file	                                                    |                              |
| upload_url     | 	Upload API URL for TestFairy	                                            | https://app.testfairy.com |
| testers_groups | 	Array of tester groups to be notified	                                   | []                           |
| comment        | 	Additional release notes for this upload. Will be added to sent emails 	 | No comment                   |
| notify         | 	Send email to testers	                                                   | off                          |
| timeout        | 	Request timeout in seconds                                               |                              |

### Lane Variables

Actions can communicate with each other using a shared hash lane_context, that can be accessed in other actions, plugins or your lanes: lane_context[SharedValues:XYZ]. The testfairy action generates the following Lane Variables:

| SharedValue                          | Description                                      |
|--------------------------------------|--------------------------------------------------|
| SharedValues::TESTFAIRY_BUILD_URL    | URL for the sessions of the newly uploaded build |
| SharedValues::TESTFAIRY_DOWNLOAD_URL | URL directly to the newly uploaded build         |
| SharedValues::TESTFAIRY_LANDING_PAGE | URL of the build's landing page                  |

### Documentation

To show the documentation in your terminal, run

```bash
fastlane action testfairy
```

### CLI

It is recommended to add the above action into your Fastfile, however sometimes you might want to run one-offs. To do so, you can run the following command from your terminal

```bash
fastlane run testfairy
```

To pass parameters, make use of the : symbol, for example

```bash
fastlane run testfairy parameter1:"value1" parameter2:"value2"
```

It's important to note that the CLI supports primitive types like integers, floats, booleans, and strings. Arrays can be passed as a comma delimited string (e.g. param:"1,2,3"). Hashes are not currently supported.

It is recommended to add all fastlane actions you use to your Fastfile.

You can review this action documentation and code on [docs.fastlane.tools](https://docs.fastlane.tools/actions/testfairy/).
