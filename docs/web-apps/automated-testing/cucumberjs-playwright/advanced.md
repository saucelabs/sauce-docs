---
id: advanced
title: Cucumber.js with Playwright Advanced Configuring
sidebar_label: Advanced Configuration
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Advanced, {toc as AdvancedTOC} from '../\_partials/\_advanced.md';
import AdvancedPlaywrightCucumber, {toc as AdvancedPlaywrightCucumberTOC} from '../\_partials/\_advanced-playwright-cucumber.md';
import AdvancedNodejs, {toc as AdvancedNodejsTOC} from '../\_partials/\_advanced-nodejs.md';

<AdvancedNodejs />
<AdvancedPlaywrightCucumber />
<Advanced />

<!-- Using partials breaks table of contents. Using this workaround to get it working again. -->

export const toc = [...AdvancedNodejsTOC, ...AdvancedPlaywrightCucumberTOC, ...AdvancedTOC];
