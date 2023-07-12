---
id: tags
title: Tags
sidebar_label: Tags
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Tags are text labels that can be attached to builds to aid in identification and search. They provide a convenient way to categorize and organize builds within your application.

## Adding Tags Via Upload API

When uploading a build using the Upload API /testfairy/api-reference/upload-api, you have the option to include tags using the 'tags' parameter. This allows you to assign relevant labels to the build during the upload process.

## Adding and Editing Tags

Once a build is available on your dashboard, you can easily manage its tags. In the build settings menu, you have the ability to add, edit, or delete tags associated with the build. This flexibility ensures that your tags remain up-to-date and reflect the current state of your application.

## Displaying Tags to Admins

Tags are prominently displayed on project pages, providing administrators with a clear overview of the tags associated with each build. This visibility enables efficient management and tracking of different versions of your application.
Tags are also searchable on the dashboard, allowing admins to quickly find specific builds based on their assigned tags. This search functionality further streamlines the navigation and organization of your project:

<img src={useBaseUrl('/img/testfairy/app-distribution/builds-table.png')} alt="tags on project page"/>

## Displaying Tags to Testers

Testers can conveniently view the tags assigned to builds on their dashboard. By displaying tags in this location, testers gain insights into the categorization and characteristics of each build they are testing.

<img src={useBaseUrl('/img/testfairy/app-distribution/builds-my-view.png')} alt="tags in testers dashboard"/>

Tags are prominently displayed at the top of every landing page. This ensures that testers have easy access to the tags associated with the build they are currently testing, providing them with a quick reference and aiding in their testing efforts.
<img src={useBaseUrl('/img/testfairy/app-distribution/landing-page-tags.png')} alt="tags on landing page"/>
