---
id: hiding-webview
title: Hiding Webview Elements from Video
sidebar_label: Hiding Webview Elements
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

TestFairy enables developers to hide specific HTML elements from a recorded video in any `UIWebView` or `WKWebView` in their application. As the developer, you may hide one or more elements from the video for security and privacy reasons.

For example, you may prevent all information related to credit card data from appearing in the session.

## Syntax

To hide an element from video, all you need to do is call the static instance method `hideWebViewElements` in the `TestFairy` class, passing in a CSS selector to target your element:

```css
[TestFairy hideWebViewElements:@"body"];
[TestFairy hideWebViewElements:@"div#username,div#password"];
[TestFairy hideWebViewElements:@".col-12,h1 .header"];
```

TestFairy finds any `UIWebView` or `WKWebView` in the view hierarchy and hides a given HTML element based on a valid CSS selector.

### Example

Below is a screen taken from a demo video: on the left, you can see what an app usually looks like; on the right is a screenshot taken with the HTML elements hidden.

<img src={useBaseUrl('/img/testfairy/sdk/iphone-with-fields.png')} alt="iphone no hidden HTML elements" width="400"/>
<img src={useBaseUrl('/img/testfairy/sdk/iphone-no-fields.png')} alt="iphone hidden HTML elements" width="400"/>

:::note

- Elements are hidden from screenshots before they are uploaded.
- You may use `hideWebViewElements` with multiple comma-separated selectors.
- You may add more selectors anytime by calling `hideWebViewElements` again.

:::
