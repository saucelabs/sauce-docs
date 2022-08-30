## Filtering Tests

With [cypress-grep](https://github.com/cypress-io/cypress-grep) you can add tags to test descriptions, then filter your tests with the tags or keywords.

```javascript
	it('.type() - type into a DOM element', { tags: ['smoke'] }, () => {
    cy.get('.action-email')
        .type('fake@email.com').should('have.value', 'fake@email.com')
  })
```
For integration and setup details, see [saucectl-cypress-example(v1alpha)](https://github.com/saucelabs/saucectl-cypress-example/tree/main/v1alpha/examples/cypress-grep) and [saucectl-cypress-example(v1)](https://github.com/saucelabs/saucectl-cypress-example/tree/main/v1/examples/cypress-grep).

### Filtering Tests Using Tags

You can pass env var `grepTags` to filter tests by tag.

```bash
saucectl run --env grepTags=@smoke
```

### Filtering Tests Using Keywords

You can pass env var `grep` to filter tests by keyword.

```bash
saucectl run --env grep=".type()"
```