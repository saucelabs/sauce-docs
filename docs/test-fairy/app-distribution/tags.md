---
id: tags
title: Tags
sidebar_label: Tags
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Tags are text labels that can be attached to builds and used for identification and search. Every build (app version) can have different tags.

## Adding Tags Via Upload API

Using the ' tags ' parameter, you can add tags when uploading the build via the [Upload API](/test-fairy/api-reference/upload-api).

## Adding and Editing Tags

You can add, edit, and delete the tags in the build settings menu once a build is available on your dashboard.

## Displaying Tags to Admins

Tags appear on project pages.

<img src={useBaseUrl('/img/test-fairy/app-distribution/builds-table.png')} alt="tags on project page"/>

Tags are searchable on the dashboard.

## Displaying Tags to Testers

Testers can view tags on the testers' dashboard.

<img src={useBaseUrl('/img/test-fairy/app-distribution/builds-my-view.png')} alt="tags in testers dashboard"/>

Tags are also viewable at the top of every landing page.

<img src={useBaseUrl('/img/test-fairy/app-distribution/landing-page-tags.png')} alt="tags on landing page"/>
