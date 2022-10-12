---
id: advanced
title: Playwright Advanced Configuring
sidebar_label: Advanced Configuration
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Advanced, {toc as AdvancedTOC} from '../_partials/_advanced.md';
import AdvancedPlaywright, {toc as AdvancedPlaywrightTOC} from '../_partials/_advanced-playwright.md';
import AdvancedCucumberPlaywright, {toc as AdvancedCucumberPlaywrightTOC} from '../_partials/_advanced-cucumber-playwright.md';

<Advanced />
<AdvancedPlaywright />
<AdvancedCucumberPlaywright />

<!-- Using partials breaks table of contents. Using this workaround to get it working again. -->
export const toc = [...AdvancedTOC, ...AdvancedPlaywrightTOC, ...AdvancedCucumberPlaywrightTOC];