By default, only the current viewport is captured when `.sauceVisualCheck` is used. You can opt in to capturing the entire page by using the `fullPage` option. It will capture everything by scrolling and stitching multiple screenshots together.

:::note
It's recommended to use the `hideAfterFirstScroll` option for fixed or sticky position elements such as sticky headers or consent banners.
:::

Options:

- `delayAfterScrollMs`: Delay in ms after scrolling and before taking screenshots. The default value is 0. We recommend using this option for lazy loading content.
- `disableCSSAnimation`: Disable CSS animations and the input caret in the app. The default value is true.
- `hideAfterFirstScroll`: Hide elements on the page after first scroll (uses css selectors)
- `hideScrollBars`: Hide all scrollbars in the app. The default value is true.
- `scrollLimit`: Limit the number of screenshots taken for scrolling and stitching. The default value is 10. The value needs to be between 1 and 10.
