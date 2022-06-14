---
id: advanced
title: TestCafe Advanced Configuration
sidebar_label: Advanced Configuration
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Advanced from '../_partials/_advanced.md';

### Time Limit Considerations

Execution time for TestCafe tests is limited to a maximum of 30 minutes. If the limit is exceeded, the test terminates and Sauce Control uploads assets (videos, screenshots, logs, etc..) to the Sauce Labs platform.

Consider breaking up longer TestCafe tests to optimize performance and ensure you do not exceed this time limit.

<Advanced />
