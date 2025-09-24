---
sidebar_label: Figma
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Figma Integration

You can use the Sauce Visual Figma plugin to set your Figma designs as baselines for visual testing your applications, enabling you to compare your live application screenshots against your original design specifications.

## Introduction

Sauce Visual integrates with Figma through a community plugin that allows you to export design screenshots directly from the plugin's UI.

Before using the Sauce Visual Figma plugin, you'll need:
- a Figma account with access to your design files.
- a Sauce Labs account with Visual Testing enabled.

[//]: # (TODO: Link to examples)

## Quickstart

### Step 1: Install plugin

:::note
If the plugin isn't available, contact your Figma organization admin to [enable the plugin](https://help.figma.com/hc/en-us/articles/4404228724759-Manage-plugins-and-widgets-in-an-organization).
:::

[//]: # (TODO: Update the plugin link)
1. Install the Sauce Visual plugin from the [Figma Community](https://www.figma.com/community/plugins).
2. Run the installed plugin.
3. Click "Get started":

    <img
        style={{ border: '1px solid var(--dark-200)' }}
        src={useBaseUrl('/img/sauce-visual/figma-splash.jpg')} 
        alt="Get started page from Sauce Visual Figma plugin" 
    />


### Step 2: Setup credentials

1. Enter your Sauce Labs credentials [Username and Access Key](https://app.saucelabs.com/user-settings).
2. Select your Sauce Labs data center region.

    <img
        style={{ border: '1px solid var(--dark-200)' }}
        src={useBaseUrl('/img/sauce-visual/figma-connect.jpg')}
        alt="Sauce Labs Connect form"
    />

### Step 3: Export
1. Select the frames and components you want to export as visual baselines.
2. Click **Export to Sauce Labs** to begin the upload process.

<img
    style={{ border: '1px solid var(--dark-200)' }}
    src={useBaseUrl('/img/sauce-visual/figma-export-select.jpg')}
    alt="Select Figma frames and components"
/>

3. Wait for the export to complete

<img
  style={{ border: '1px solid var(--dark-200)' }}
  src={useBaseUrl('/img/sauce-visual/figma-export-uploading.jpg')}
  alt="Uploading selected Figma frames and components to Sauce Labs"
/>

4. Find your build in the [Sauce Labs Visual app](https://app.saucelabs.com/visual/builds/)

<img
    style={{ border: '1px solid var(--dark-200)' }}
    src={useBaseUrl('/img/sauce-visual/figma-export-builds.jpg')}
    alt="Figma visual build in Sauce Labs"
/>

5. [Review](https://docs.saucelabs.com/visual-testing/workflows/review/) your exported designs in the Sauce Labs



## Advanced usage

You can specify metadata to control how your designs are organized and exported to Sauce Labs.

### Build metadata

Build metadata is configured once on the **Export** page and is applied to the entire export:
- **Branch**: The branch name to associate this build with (e.g., `main`, `feature/new-design`)
- **Project**: The project or label to organize this build under (e.g. `web-app`, `mobile-redesign`).


### Snapshot metadata

Snapshot metadata is defined per design element and helps organize test results and match them with the correct baselines.

To update snapshot metadata, click **Update metadata** and repeat the following steps for each element:

1. Select a design element (frame or component).
2. Configure the snapshot metadata:
    - **Snapshot name**: Unique identifier for this specific design element.
    - **Test name**: Name of the test that will compare against this baseline.
    - **Suite name**: Test suite or group this snapshot belongs to.
3. Click **Update** to save the snapshot to the Figma file.
    - This action finalizes the baseline and ensures it will be used in all future test runs and shared with other users.
    - Alternatively, click **Clear** to erase the snapshot from the file, removing it from future tests and visibility for other users.


This metadata ensures your exported Figma designs are properly organized and can be matched with the corresponding tests in your visual testing workflow.
