---
sidebar_label: Python (Robot Framework)
---

import EnvironmentVariables from '../_partials/_environment-variables.md';
import PythonIntro from '../_partials/_python-shared-intro.md';
import FullPageLimit from '../_partials/_fullpage-limit.md';
import SelectiveDiffing from '../_partials/_selective-diffing.md';
import SelectiveDiffingGlobal from '../_partials/_selective-diffing-global.md';
import SelectiveDiffingRegion from '../_partials/_selective-diffing-region.md';
import Frames from '../_partials/_frames.md';

# Python (Robot Framework) Integration

## Introduction

<PythonIntro />

This integration relies on the [SeleniumLibrary](https://github.com/robotframework/SeleniumLibrary) package provided by Robot Framework for automatic detection of the current session. View our [Robot Framework example on GitHub](https://github.com/saucelabs/visual-examples/tree/main/python/robot-framework/) for a fully-functional example for reference.

## Usage

### Step 1 - Install the Visual Package

Add the Sauce Visual package and optionally add it to your `requirements`.

```sh
pip install saucelabs_visual
```

### Step 2 - Create Your Setup and Teardown

Create top-level (in a parent folder that includes no test cases) setup and teardowns with the `Create Visual Build` and `Finish Visual Build` keywords, respectively. All of your tests should be nested in directories under this to allow it to act like a global setup / teardown.

`<parent_dir>/__init__.robot`

```robot
*** Settings ***
# This can also be imported in a robot.resource file and referenced here instead if you prefer.
# See our example repo for more details.
Library    saucelabs_visual.frameworks.robot.SauceLabsVisual

# Supply a name to recognize your build in the Sauce Labs Visual dashboard
Suite Setup    Create Visual Build    name=Sauce Labs Visual -- Robot Framework
Suite Teardown    Finish Visual Build
```

### Step 3 - Add Tests

Add visual tests in your test / suite files using the `Visual Snapshot` keyword followed by the name for your snapshot

```robot
*** Settings ***
# We recommend putting this in your resource.robot file instead, but have omitted that here to keep the example short.
Library           saucelabs_visual.frameworks.robot.SauceLabsVisual

Invalid Login
    # ... Opening a selenium session, and your other assertions
    Visual Snapshot    My Snapshot Name
    # ...
```

### Step 4 - Configure your Sauce Labs credentials

Sauce Visual relies on environment variables for authentications.<br />
Both `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` need to be set prior starting your Python tests.

Username and Access Key can be retrieved from https://app.saucelabs.com/user-settings.

```sh
export SAUCE_USERNAME=__YOUR_SAUCE_USER_NAME__
export SAUCE_ACCESS_KEY=__YOUR_SAUCE_ACCESS_KEY__
```

### Step 5 - Run the tests

Upon executing your tests for the first time under this step, a visual baseline is automatically created in our system. This baseline serves as the standard for all subsequent tests. As new tests are run, they are compared to this original baseline, with any deviations highlighted to signal visual changes. These comparisons are integral for detecting any unintended visual modifications early in your development cycle. All test builds, including the initial baseline and subsequent runs, can be monitored and managed through the Sauce Labs platform at [Sauce Visual Builds](https://app.saucelabs.com/visual/builds).

Remember, the baseline is established during the initial run, and any subsequent visual differences detected will be marked for review.

## Visual Snapshot Options & Examples

### Full Page Screenshots

By default, only the current viewport is capture when taking a screenshot. Full page screenshots can be enabled by using the `full_page_config` named param with a visual snapshot. By either passing `True`, or a configuration object if you wish to customize the behavior we'll scroll and stitch together multiple screenshots until the full document has been captured.

You can customize the behavior by using the following options:

| Property                  | Default | Example                                                           | Description                                                                                                                                                            |
|:--------------------------|:--------|:------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `delay_after_scroll_ms`   | `0`     | `300`                                                             | Delay in ms after scrolling and before taking screenshots. The default value is 0. We recommend using this option for lazy loading content.                            |
| `disable_css_animation`   | `True`  | `False`                                                           | Disable CSS animations and the input caret in the app. The default value is true.                                                                                      |
| `hide_after_first_scroll` | `[]`    | `['.your-class-name','#an-id-example','div.more-specific-class']` | One or more CSS selectors that we should remove from the page after the first scroll. Useful for hiding fixed elements such as headers, cookie banners, etc. |
| `hide_scroll_bars` <span className="sauceGold">Deprecated</span>       | `True`  | `False`                                                           | Use `hide_scroll_bars` from `Visual Snapshot` instead |
| `scroll_limit`            | `10`    | `5`                                                               | Limit the number of screenshots taken for scrolling and stitching. The default value is 10. The value needs to be between 1 and 10.                                    |

<FullPageLimit />

```robot
Test Name
    # Enabling with the default behavior
    Visual Snapshot    My Snapshot Name    full_page_config=True
    # Customizing the full page snapshot behavior
    Visual Snapshot    My Snapshot Name    full_page_config={"hide_after_first_scroll": ['.fixed-header','.cookie-banner']}
```

### DOM Capture

You can use the `capture_dom` named param with a value of `True` to enable DOM capture during a snapshot.

```robot
Test Name
    Visual Snapshot    My Snapshot Name    capture_dom=True
```

### Clip to an Element

If you'd like to test a specific component or area of a page you can use the `clip_selector` named param in combination with a CSS selector to clip the screenshot and DOM comparison. When enabled, we'll crop the screenshot to the coordinates of the element and constrain our DOM comparison to that area. We accept any `document.querySelector` compatible string / CSS selector as the value.

```robot
Test Name
    # Using a class. Note, omit any quotes around the value.
    Visual Snapshot    My Snapshot Name    clip_selector=.some-class-name
```

### Ignore Regions

You can ignore one or more areas on the page by using the `ignore_regions` named param. Ignore regions in Robot accepts an array of full region definitions (screen coordinates) in addition to SeleniumLibrary selectors, and WebElement objects. See below for a few examples.

```robot
Test Name
    # Multiple options can be passed into the array and can contain a mix of any of the below options. However, when using objects you'll need to take special care when passing lists so the value is an actual object. See the WebElement example at the bottom for an example.

    # Ignore one or more areas of the page using a coordinates object.
    Visual Snapshot    My Snapshot Name    ignore_regions=[{"x": 200, "y": 200, "width": 200, "height": 200}]

    # Ignore one or more areas of the page using a SeleniumLibrary selector.
    # See Locating Elements in the SeleniumLibrary docs for more information:
    # https://robotframework.org/SeleniumLibrary/SeleniumLibrary.html#Locating%20elements
    Visual Snapshot    My Snapshot Name    ignore_regions=['id:example-id', 'class:example-class-name', 'css:div#example']

    # Ignore one or more areas of the page using WebElement objects from SeleniumLibrary
    # Get a WebElement object and store it in a variable
    ${button} =     Get Webelement    class:btn_inventory
    ${images} =     Get Webelement    class:inventory_item_img
    # Merge multiple / single elements into a list. If you want to use `Get Webelements` to ignore multiple elements on a page at once you can use Robot's `Collections` library to merge those lists into a single one to pass here.
    ${elements} =    Create List    ${button}    ${images}
    Visual Snapshot    Valid Login (Simple)    full_page_config=True    capture_dom=True    ignore_elements=${elements}
```

### Selective Diffing

<SelectiveDiffing />

#### Area-specific configuration

<SelectiveDiffingRegion />

Example:
```robot
    # Capture snapshot with selective regions
    ${username_element}     Get Webelements     id:user-name
    ${password_element}     Get Webelements     id:password
    # Ignore all changes on ${username_element}
    ${ignore_username} =    Visual Ignore Element       ${username_element}     diffing_options={}
    # Only checks for style changes on ${password_element}
    ${ignore_password} =    Visual Ignore Element       ${password_element}     diffing_options={"style":True}
    ${ignore_regions} =     Create List     ${ignore_username}      ${ignore_password}
    Visual Snapshot     Login Page     capture_dom=True        ignore_regions=${ignore_regions}        diffing_method=BALANCED

```

### Frames

<Frames/>

Example:

```robot
Test Name
    Select Frame    index=0
    Visual Snapshot    My Snapshot Name    full_page_config=True
```

## Environment variables

Below are the environment variables available in the Sauce Visual Python plugin. Keep in mind that the variables defined or overridden in Robot have precedence over these.

<EnvironmentVariables />

## Examples

Example projects are available [here](https://github.com/saucelabs/visual-examples/blob/main/python/robot-framework).
