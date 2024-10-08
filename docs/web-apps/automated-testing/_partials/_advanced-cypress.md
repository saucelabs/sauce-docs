## Filtering Tests

With [cypress-grep](https://github.com/cypress-io/cypress-grep) you can add tags to test descriptions, then filter your tests with the tags or keywords.

```javascript
    it('.type() - type into a DOM element', { tags: ['smoke'] }, () => {
      cy.get('.action-email')
        .type('fake@email.com').should('have.value', 'fake@email.com')
    })
```

For integration and setup details, see [saucectl-cypress-example(v1)](https://github.com/saucelabs/saucectl-cypress-example/tree/main/v1/examples/cypress-grep) for Cypress 10 and above.

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

### Filtering Tests Using Cucumber Tags

When running Cypress test along with Cucumber, you can use tags to select which test should run using [Cucumber's tag expressions](https://cucumber.io/docs/cucumber/api/?lang=javascript#tags).

```
saucectl run --env CYPRESS_TAGS="(@smoke or @ui) and (not @slow)"
```

## Component Testing

`saucectl` doesn't currently support Component Testing.
