---
id: advanced
title: Cypress Advanced Configuration
sidebar_label: Advanced Configuration
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Advanced, {toc as AdvancedTOC} from '../_partials/_advanced.md';
import TOCInline from '@theme/TOCInline';

<Advanced />

<!-- Using partials breaks table of contents. Using this workaround to get it working again. -->
export const toc = [...AdvancedTOC];

<TOCInline toc={toc} />

## Filtering tests using substring

With the [cypress-grep](https://github.com/cypress-io/cypress-grep) you can add tags to test descriptions and filter tests with the tags or keywords in the title.

```javascript
	it('.type() - type into a DOM element', { tags: ['smoke'] }, () => {
    cy.get('.action-email')
        .type('fake@email.com').should('have.value', 'fake@email.com')
  })
```
For the integration and setup, you can check more details in [saucectl-cypress-example(v1alpha)](https://github.com/saucelabs/saucectl-cypress-example/tree/main/v1alpha/examples/cypress-grep) and [saucectl-cypress-example(v1)](https://github.com/saucelabs/saucectl-cypress-example/tree/main/v1/examples/cypress-grep)

### Filtering tests using tags

You can pass env var `grepTags` to filter tests by tags.

```bash
saucectl run --env grepTags=@smoke
```

### Filtering test using keywords in the title

You can pass env var `grep` to filter tests by keywords.

```bash
saucectl run --env grep=".type()"
```

