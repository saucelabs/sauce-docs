---
id: advanced
title: Cypress Advanced Configuration
sidebar_label: Advanced Configuration
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Advanced, {toc as AdvancedTOC} from '../_partials/_advanced.md';
import AdvancedCypressFiltering, {toc as AdvancedCypressFilteringTOC} from '../_partials/_advanced-cypress-filtering.md';

<Advanced />
<AdvancedCypressFiltering />

<!-- Using partials breaks table of contents. Using this workaround to get it working again. -->
export const toc = [...AdvancedTOC, ...AdvancedCypressFilteringTOC];