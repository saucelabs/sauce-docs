---
id: advanced
title: TestCafe Advanced Configuration
sidebar_label: Advanced Configuration
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Advanced, {toc as AdvancedTOC} from '../\_partials/\_advanced.md';
import AdvancedTestCafe, {toc as AdvancedTestCafeTOC} from '../\_partials/\_advanced-testcafe.md';
import AdvancedNodejs, {toc as AdvancedNodejsTOC} from '../\_partials/\_advanced-nodejs.md';

<AdvancedNodejs />
<Advanced />
<AdvancedTestCafe />

<!-- Using partials breaks table of contents. Using this workaround to get it working again. -->

export const toc = [...AdvancedNodejsTOC, ...AdvancedTOC, ...AdvancedTestCafeTOC];
