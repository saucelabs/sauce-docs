---
id: builds
title: Builds
sidebar_label: Builds
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The **Builds** page displays a list of all the builds for the app. For each build, you can view the following information:

<img src={useBaseUrl('/img/test-fairy/using-tf/builds-table.png')} alt="builds table"/>

- **VERSION** - The build name and version.

- **SESSIONS** - The number of sessions logged for the build. The number is linked to the **INSIGHTS** tab.

- **CRASHES** - The number of logged crashes for the build version. The number is linked to the **CRASHES** tab.

- **DOWNLOADS** - The number of downloads for the build.

- **FEEDBACKS** - The amount of feedback received for the build. The number is linked to the **FEEDBACK** tab.

- **UPLOADED** - When the build is uploaded.

- **TAGS** - Tags can be edited in the build settings menu and are searchable.

- **BUILD STATUS**

  - Build is not loaded into the system <img src={useBaseUrl('/img/test-fairy/using-tf/status-icon-app-not-uploaded.png')} alt="builds not loaded"/>
  - Video is disabled <img src={useBaseUrl('/img/test-fairy/using-tf/status-icon-no-video.png')} alt="video disabled"/>
  - Build is defined as auto-update <img src={useBaseUrl('/img/test-fairy/using-tf/status-icon-auto-update.png')} alt="builds not defined"/>
  - Build has metadata <img src={useBaseUrl('/img/test-fairy/using-tf/status-icon-metadata.png')} alt="builds has metadata"/>
  - Build has release notes <img src={useBaseUrl('/img/test-fairy/using-tf/status-icon-comment.png')} alt="builds has release notes"/>
  - Build distribution is disabled <img src={useBaseUrl('/img/test-fairy/using-tf/ic_close_black_36.png')} alt="build distribution is disabled"/>
  - Build was signed with a different certificate than the previous build <img src={useBaseUrl('/img/test-fairy/using-tf/ic_error_red_48dp.png')} alt="builds signed with different certificate"/>
  - Build does not contain the TestFairy SDK <img src={useBaseUrl('/img/test-fairy/using-tf/status-icon-no-sdk.png')} alt="build without TestFairy SDK"/>

- Settings button - Opens the **Build Settings** menu.

Builds that are starred (<img src={useBaseUrl('/img/test-fairy/using-tf/star-yellow.png')} alt="build stared"/>) are displayed at the top of the table regardless of the upload order.

### Tags

Tags are labels attached to builds for identification that provide additional searchable information. Tag text may contain spaces and more than one word.

You can add tags to a build during upload using the Upload API or edit them in the **Build Settings** menu. They are searchable in the `Search` box at the top of the **Builds** page.

### Metadata

Metadata is specific information about a build. It is defined when the build is uploaded via Upload API and cannot be changed after it is uploaded.

The metadata format is **metadata.key=value** (for example, `metadata.branch=master`). Only the value is searchable in the `Search` box at the top of the **Builds** table.

### Deleting Builds and Apps

To delete a build from the system, select the checkbox and, in the **More Actions…** dropdown list, click **Delete Build**.

To delete an app, select all of its builds and, in the **More Actions…** dropdown list, click **Delete Build**.
