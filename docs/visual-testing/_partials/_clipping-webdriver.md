import ClippingDescription from './_clipping-description.md'

<ClippingDescription />

Example:

```ts
await browser.sauceVisualCheck('Visible Sale Banner', {
  // A document.querySelector compatible selector that we should crop the screenshot to
  clipSelector: '.your-css-selector',
})
```
