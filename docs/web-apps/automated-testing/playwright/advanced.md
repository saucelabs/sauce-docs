---
id: advanced
title: Playwright Advanced Configuring
sidebar_label: Advanced Configuration
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Advanced, {toc as AdvancedTOC} from '../_partials/_advanced.md';

<Advanced />

<!-- Using partials breaks table of contents. Using this workaround to get it working again. -->
export const toc = [...AdvancedTOC];

## Filtering tests using substring

Playwright supports filtering tests using `grep` and `grepInvert` options. For more details, check [grep](./yaml.md#grep) and [grepInvert](./yaml.md#grepinvert).
