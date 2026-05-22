---
id: appium-images-plugin
title: Finding Elements and Comparing Images with the Appium Images Plugin
sidebar_label: Appium Images Plugin
description: Use the @appium/images-plugin on Sauce Labs Real Devices to find elements by image template and compare images during your Appium tests.
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<p><span className="sauceGreen">Real Devices</span></p>

Sauce Labs supports the [`@appium/images-plugin`](https://github.com/appium/appium/tree/master/packages/images-plugin) on all Real Device Appium images (Appium 2, Appium 3, and the Deque accessibility variants). The plugin extends Appium with two main capabilities:

- **Finding elements by image** — use a base64-encoded template image as a locator strategy (`-image`) to find UI elements that cannot be reliably located through standard accessibility selectors.
- **Comparing images** — use the `compareImages` command to perform feature-based matching, template occurrence lookup, or similarity scoring between two images.

For the full reference of the plugin's behavior and parameters, see the upstream [Appium images-plugin documentation](https://github.com/appium/appium/tree/master/packages/images-plugin).

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up))
- Your Sauce Labs [Username and Access Key](https://app.saucelabs.com/user-settings)
- Familiarity writing and running [Appium tests](/mobile-apps/automated-testing/appium/)
- A Real Device session. See [Appium Versions](/mobile-apps/automated-testing/appium/appium-versions/#real-devices) for the list of supported Appium images.

:::info Real Devices only
The images plugin is currently supported on **Real Devices** only. It is not available on Emulators or Simulators.
:::

## Enabling and Disabling the Plugin

The plugin is controlled by the `imagesPlugin` boolean capability inside `sauce:options`. It is **enabled by default** for all Real Device Appium sessions, so you can use the plugin's commands without any additional configuration.

If you want to be explicit, or if you want to disable the plugin (for example, to avoid loading it when you don't need image features), set the capability as shown below.

<Tabs
groupId="images-plugin-capability"
defaultValue="java"
values={[
{label: 'Java', value: 'java'},
{label: 'Node.js', value: 'js'},
{label: 'Python', value: 'python'},
{label: 'Ruby', value: 'ruby'},
{label: 'C#', value: 'csharp'},
]}>

<TabItem value="java">

<!-- prettier-ignore -->
```java
MutableCapabilities capabilities = new MutableCapabilities();
capabilities.setCapability("platformName", "iOS");
capabilities.setCapability("appium:automationName", "XCUITest");

HashMap<String, Object> sauceOptions = new HashMap<String, Object>();
sauceOptions.put("appiumVersion", "latest"); // any Appium 2 or 3 Real Device image
sauceOptions.put("imagesPlugin", true); // default: true. Set to false to disable.
capabilities.setCapability("sauce:options", sauceOptions);
```

</TabItem>
<TabItem value="js">

<!-- prettier-ignore -->
```js
const capabilities = {
    platformName: 'iOS',
    'appium:automationName': 'XCUITest',
    'sauce:options': {
        appiumVersion: 'latest', // any Appium 2 or 3 Real Device image
        imagesPlugin: true, // default: true. Set to false to disable.
    }
}
```

</TabItem>
<TabItem value="python">

<!-- prettier-ignore -->
```py
capabilities = {
    "platformName": "iOS",
    "appium:automationName": "XCUITest",
    "sauce:options": {
        "appiumVersion": "latest",  # any Appium 2 or 3 Real Device image
        "imagesPlugin": True,  # default: True. Set to False to disable.
    }
}
```

</TabItem>
<TabItem value="ruby">

<!-- prettier-ignore -->
```ruby
capabilities = {
    "platformName" => "iOS",
    "appium:automationName" => "XCUITest",
    "sauce:options" => {
        "appiumVersion" => "latest", # any Appium 2 or 3 Real Device image
        "imagesPlugin" => true, # default: true. Set to false to disable.
    }
}
```

</TabItem>
<TabItem value="csharp">

<!-- prettier-ignore -->
```csharp
AppiumOptions capabilities = new AppiumOptions();
capabilities.AddAdditionalCapability("platformName", "iOS");
capabilities.AddAdditionalCapability("appium:automationName", "XCUITest");

var sauceOptions = new Dictionary<string, object>();
sauceOptions.Add("appiumVersion", "latest"); // any Appium 2 or 3 Real Device image
sauceOptions.Add("imagesPlugin", true); // default: true. Set to false to disable.
capabilities.AddAdditionalCapability("sauce:options", sauceOptions);
```

</TabItem>
</Tabs>

## Finding Elements by Image

When the plugin is enabled, you can locate elements with a base64-encoded template image. Appium captures a screenshot of the current screen and uses template matching to find the region that best matches the template you provide. The returned element behaves like a normal `WebElement` for coordinate-based operations such as `click`, `isDisplayed`, `getSize`, `getLocation`, and `getElementRect`.

<Tabs
groupId="find-by-image"
defaultValue="java"
values={[
{label: 'Java', value: 'java'},
{label: 'Node.js', value: 'js'},
{label: 'Python', value: 'python'},
]}>

<TabItem value="java">

<!-- prettier-ignore -->
```java
import io.appium.java_client.AppiumBy;
import org.openqa.selenium.WebElement;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Base64;

byte[] image = Files.readAllBytes(Paths.get("path/to/element.png"));
String base64 = Base64.getEncoder().encodeToString(image);

WebElement element = driver.findElement(AppiumBy.image(base64));
element.click();
```

</TabItem>
<TabItem value="js">

<!-- prettier-ignore -->
```js
const fs = require('fs');
const template = fs.readFileSync('path/to/element.png').toString('base64');

const element = await driver.findElement('-image', template);
await element.click();
```

</TabItem>
<TabItem value="python">

<!-- prettier-ignore -->
```py
import base64
from appium.webdriver.common.appiumby import AppiumBy

with open('path/to/element.png', 'rb') as f:
    template = base64.b64encode(f.read()).decode()

element = driver.find_element(by=AppiumBy.IMAGE, value=template)
element.click()
```

</TabItem>
</Tabs>

### Tuning Image Match Settings

Image matching behavior is tuned through Appium's `updateSettings` command. The most commonly used settings are:

| Setting | Default | Description |
|---|---|---|
| `imageMatchThreshold` | `0.4` | Confidence threshold between `0` and `1`. Lower the value to allow looser matches. |
| `fixImageTemplateScale` | `false` | When `true`, the plugin scales the template to the device screen scale. Useful for high-DPI devices. |
| `defaultImageTemplateScale` | `1.0` | Default scaling factor applied to the template before matching. |
| `getMatchedImageResult` | `false` | When `true`, the matched element exposes a `visual` attribute containing the base64-encoded match visualization. Useful for debugging. |
| `imageElementTapStrategy` | `"w3cActions"` | Tap API used when clicking image elements. Set to `"touchActions"` for the legacy strategy. |
| `checkForImageElementStaleness` | `true` | When `true`, the plugin re-verifies the image element on the screen before each interaction. |
| `autoUpdateImageElementPosition` | `false` | When `true`, the plugin re-runs the match before each interaction to adjust for elements that may have moved. |

For the full list of settings, see the upstream [find-by-image documentation](https://github.com/appium/appium/blob/master/packages/images-plugin/docs/find-by-image.md).

```js
await driver.updateSettings({
    imageMatchThreshold: 0.5,
    fixImageTemplateScale: true,
    getMatchedImageResult: true,
});
```

## Comparing Images

The plugin also exposes a `compareImages` command with three modes:

- **`matchFeatures`** — feature-based matching, robust to rotation and scaling. Useful for finding the same logo or icon under different conditions.
- **`matchTemplate`** — occurrence lookup; locate where a partial image appears within a larger image. Best when the two images share the same scale and orientation.
- **`getSimilarity`** — compute a similarity score between two equal-sized images. Useful for visual regression checks.

<Tabs
groupId="compare-images"
defaultValue="js"
values={[
{label: 'Node.js', value: 'js'},
{label: 'Python', value: 'python'},
]}>

<TabItem value="js">

<!-- prettier-ignore -->
```js
const fs = require('fs');
const image1 = fs.readFileSync('image1.png').toString('base64');
const image2 = fs.readFileSync('image2.png').toString('base64');

const result = await driver.execute('mobile: compareImages', {
    mode: 'getSimilarity',
    firstImage: image1,
    secondImage: image2,
});
console.log(result.score);
```

</TabItem>
<TabItem value="python">

<!-- prettier-ignore -->
```py
import base64

with open('image1.png', 'rb') as f:
    image1 = base64.b64encode(f.read()).decode()
with open('image2.png', 'rb') as f:
    image2 = base64.b64encode(f.read()).decode()

result = driver.execute_script('mobile: compareImages', {
    'mode': 'getSimilarity',
    'firstImage': image1,
    'secondImage': image2,
})
print(result['score'])
```

</TabItem>
</Tabs>

For the full list of modes and per-mode options (such as `detectorName`, `matchFunc`, `goodMatchesFactor`, and `visualize`), see the upstream [image-comparison documentation](https://github.com/appium/appium/blob/master/packages/images-plugin/docs/image-comparison.md).

## Limitations

- Available on **Real Devices only**. Not currently available on Emulators or Simulators.
- Template matching is sensitive to scaling, rotation, and theming differences. Tune `imageMatchThreshold` and the scaling settings to your app and target device.
- Image elements only support operations that rely on screen coordinates. Text-based attributes (such as `getText`) are not supported on image elements.
