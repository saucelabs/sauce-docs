## Using Node.js Runtime on Sauce Cloud

Since `saucectl` v0.185.0, you can specify a Node.js runtime version on Sauce Cloud.

Only supported test runners can use configurable Node.js versions. Check the following pages for supported framework versions.

- [Cypress](../cypress.md#supported-testing-platforms)
- [Playwright](../playwright.md#supported-testing-platforms)
- [Playwright-Cucumber](../playwright.md#supported-testing-platforms)
- [TestCafe](../testcafe.md#supported-testing-platforms)

### Supported Node.js Versions

Sauce Labs supports the following Node.js versions:

<table id="table-nodejs">
  <tr>
    <th>Node.js Version</th>
    <th>Alias</th>
    <th>End of Life</th>
    <th>Removal Date</th>
  </tr>
  <tbody>
    <tr>
      <td>22.11.0</td>
      <td>jod, lts</td>
      <td>April 30, 2027</td>
      <td>July 30, 2027</td>
    </tr>
    <tr>
      <td>20.18.1</td>
      <td>iron, maintenance</td>
      <td>April 30, 2026</td>
      <td>July 30, 2026</td>
    </tr>
    <tr>
      <td>20.14.0</td>
      <td />
      <td>April 30, 2026</td>
      <td>July 30, 2026</td>
    </tr>
  </tbody>
</table>
