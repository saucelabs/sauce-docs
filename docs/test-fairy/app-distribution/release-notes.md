---
id: release-notes
title: Managing Release Notes
sidebar_label: Managing Release Notes
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

You can update release notes:

- [During upload](#during-upload)
- [In build settings](#in-build-settings)
- [Via Upload API](#via-upload-api)
- [Using Jenkins](#using-jenkins)

## During Upload

When uploading a new app or version on the dashboard, enter the release notes on the last screen after the app is uploaded.

<img src={useBaseUrl('/img/test-fairy/app-distribution/upload-release-notes.png')} alt="Add release notes during upload"/>

## In Build Settings

After an app or new build is uploaded, open the build settings and modify the release notes under **App Distribution**.

<img src={useBaseUrl('/img/test-fairy/app-distribution/settings-release-notes.png')} alt="Release notes in build settings"/>

## Via Upload API

The recommended way to upload apps is to use the upload API (see [Upload API](/test-fairy/api-reference/upload-api) for more information).

To add release notes, use the `comment` field.

For example:

```bash
curl https://upload.testfairy.com/api/upload \
    -F api_key='your_api_key' \
    -F file=@sample.apk \
    -F symbols_file=@sample_mapping.txt \
    -F testers_groups='friends,beta' \
    -F notify='on'\
    -F comment='Put Release Notes Here'
```

## Using Jenkins

By default, the [Jenkins plugin](https://wiki.jenkins.io/display/JENKINS/TestFairy+Plugin) uses the comments included in every commit in a pretty standard way. To add your release notes, create a text file in the following location:

```bash
$JENKINS_HOME/jobs/$JOB_NAME/builds/$BUILD_ID/testfairy_change_log
```

The content of this file will override the default changelog.

## Stylizing Release Notes

Builds can include Markdown in the release notes and in the app description that appears in email invitations, landing pages, and testers' dashboard tooltips.
