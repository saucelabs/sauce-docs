import FullPageDescription from './_fullpage-description.md';

<FullPageDescription />

Example:

```ts
await browser.sauceVisualCheck('Long content page', {
  // Enable full page screenshots using the default options
  fullPage: true,
});

await browser.sauceVisualCheck('Long content page', {
  // Enable full page screenshots and customize the behavior
  fullPage: {
    delayAfterScrollMs: 500,
    hideAfterFirstScroll: ["#header"],
  },
});
```
