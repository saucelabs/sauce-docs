---
sidebar_label: Baseline Management (BETA)
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Baseline Management

The Baseline Management feature lets you oversee the approved visual snapshots from your tests.
It allows you to track visual regressions through time and check baselines for different branches and projects.
Additionally, you can view the baseline history, download images, and view associated build details.

While logged in to Sauce Labs, you can access this feature by clicking "Visual -> Baselines" in the side navigation.

<img src={useBaseUrl('img/sauce-visual/baselines-navigation.jpg')} alt="Baselines navigation item" />

## Baselines Page

The Baselines page allows you to view all accepted snapshots in a project and branch.
Select a Project at the top and then Branch to view baselines.
If these are not set for your tests, all baselines will be displayed together under the `(not set)` option.

You can further filter baselines by OS, browser, or device. Options to sort and group are also available.

<img src={useBaseUrl('img/sauce-visual/baselines-page.jpg')} alt="Baselines page results" />

## Baseline History View

Baseline History allows you to view and manage historical snapshots of a single test baseline.
This view opens after you click on any snapshot from the Baselines page.

<img src={useBaseUrl('img/sauce-visual/baseline-history.jpg')} alt="Baseline history view displaying a snapshot with list of changes in time" />

Once inside the Baseline History view, you can perform the following actions by clicking the `...` button on any item in the list:

- **Set as New Baseline**: Mark older approvals of a snapshot as the new baseline for visual comparison.
- **Download Image**: Download individual snapshot for local viewing or archiving.
- **View Build**: Access visual build details where a certain version of the snapshot was approved.

<img src={useBaseUrl('img/sauce-visual/baseline-history-options.jpg')} alt="Baseline history options dropdown showing three options" />

## Accessing Baseline History from Diff Overlay

For easier reviewing experience and navigating to and from baselines, the test runs with pre-approved baselines will show a link to Baseline history at the top.

<img src={useBaseUrl('img/sauce-visual/build-overlay-history.jpg')} alt="Build run displaying a link to Baseline history at the top" />
