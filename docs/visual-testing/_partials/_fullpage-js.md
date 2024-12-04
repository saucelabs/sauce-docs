import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import FullPageLimit from './_fullpage-limit.md';
import FullPageLimitation from './_fullpage-limitation.md';
import FullPageDescription from './_fullpage-description.md';

<FullPageDescription/>
By default, only the viewport is captured when `.sauceVisualCheck` is used. You can opt in to capturing the entire page by using the `fullPage` option. It will capture everything by scrolling and stitching multiple screenshots together.

<FullPageLimit />

#### Web

Options:

- `delayAfterScrollMs`: Delay in ms after scrolling and before taking screenshots. The default value is 0. We recommend using this option for lazy loading content.
- `disableCSSAnimation`: Disable CSS animations and the input caret in the app. The default value is true.
- `hideAfterFirstScroll`: One or more CSS selectors that we should remove from the page after the first scroll. Useful for hiding fixed elements such as headers, cookie banners, etc.
- `hideScrollBars`: Hide all scrollbars in the app. The default value is true.
- `scrollLimit`: Limit the number of screenshots taken for scrolling and stitching. The default value is 10. The value needs to be between 1 and 10.

:::note
It's recommended to use the `hideAfterFirstScroll` option for fixed or sticky position elements such as sticky headers or consent banners.
:::

Example:

```ts
await browser.sauceVisualCheck('Long content page', {
  // Enable full page screenshot using the default options
  fullPage: true,
});

await browser.sauceVisualCheck('Long content page', {
  // Enable full page screenshot and customize the behavior
  fullPage: {
    delayAfterScrollMs: 500,
    disableCSSAnimation: false,
    hideAfterFirstScroll: ["#header"],
    hideScrollBars: false,
    scrollLimit: 5
  },
});
```

#### Mobile Native (beta)

Options:

- `delayAfterScrollMs`: Delay in ms after scrolling and before taking screenshots. The default value is 0. We recommend using this option for lazy loading content.
- `nativeClipSelector`: Selector used to identify the first element to which clipping will be applied.
- `scrollElement`: Scrollable element used for scrolling. The default is root element.
- `scrollLimit`: Limit the number of screenshots taken for scrolling and stitching. The default value is 10. The value needs to be between 1 and 10.

:::note
It is recommended to set `scrollElement` to the appropriate scrollable container.
:::

<Tabs>
    <TabItem value="ios" label="iOS">
        ```ts
        await browser.sauceVisualCheck('Long content page', {
            // Enable full page screenshot and customize the behavior
            fullPage: {
                scrollElement: $('//XCUIElementTypeCollectionView'),
                scrollLimit: 5
            },
        });
        ```
    </TabItem>
    <TabItem value="android" label="Android">
        ```ts
        await browser.sauceVisualCheck('Long content page', {
            // Enable full page screenshot and customize the behavior
            fullPage: {
                scrollElement: $('//androidx.recyclerview.widget.RecyclerView'),  
                scrollLimit: 5
            },
        });
        ```
    </TabItem>
</Tabs>

Use only XPath selectors for ignore regions and clipping to an element.

:::note
On iOS, selectors must be contained within the `scrollElement`.
:::

<Tabs>
    <TabItem value="ios" label="iOS">
        ```ts
        await browser.sauceVisualCheck('Ignore regions - Long content page', {
            // Enable full page screenshot and ignore elements
            ignore: [
                { 
                    selector: { 
                        value: '//XCUIElementTypeStaticText[@name="Product Price"]',
                        type: 'XPATH' 
                    }
                }
            ],
            fullPage: {
                scrollElement: $('//XCUIElementTypeCollectionView'),
            },
        });
        ```
    </TabItem>
    <TabItem value="android" label="Android">
        ```ts
        await browser.sauceVisualCheck('Ignore regions - Long content page', {
            // Enable full page screenshot and ignore elements
            ignore: [
                { 
                    selector: {
                        value: '//android.widget.TextView[@content-desc="Product Price"]',
                        type: 'XPATH' 
                    }
                }
            ],
            fullPage: {
                scrollElement: $('//androidx.recyclerview.widget.RecyclerView'),  
            },
        });
        ```
    </TabItem>
</Tabs>

<Tabs>
    <TabItem value="ios" label="iOS">
        ```ts
        await browser.sauceVisualCheck('Clip - Long content page', {
            // Enable full page screenshot and clip to an element
            fullPage: {
                scrollElement: $('//XCUIElementTypeCollectionView'),
                nativeClipSelector: { 
                    value: '//XCUIElementTypeCollectionView/XCUIElementTypeOther',
                    type: 'XPATH' 
                }
            },
        });
        ```
    </TabItem>
    <TabItem value="android" label="Android">
        ```ts
        await browser.sauceVisualCheck('Clip - Long content page', {
            // Enable full page screenshot and clip to an element
            fullPage: {
                scrollElement: $('//androidx.recyclerview.widget.RecyclerView'),
                nativeClipSelector: { 
                    value: '//androidx.recyclerview.widget.RecyclerView[@content-desc="Displays all products of catalog"]',
                    type: 'XPATH' 
                }
            },
        });
        ```
    </TabItem>
</Tabs>

<FullPageLimitation/>
