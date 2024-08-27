---
sidebar_label: Python
---

import EnvironmentVariables from '../_partials/_environment-variables.md';
import PythonIntro from '../_partials/_python-shared-intro.md';
import SelectiveDiffing from '../_partials/_selective-diffing.md';
import FullPageLimit from '../_partials/_fullpage-limit.md';
import SelectiveDiffingRegion from '../_partials/_selective-diffing-region.md';

# Python Integration

## Introduction

<PythonIntro />

A generic `SauceLabsVisual` client is exposed by the package to allow interaction with any Python based tooling. We also offer some additional [framework-specific options](#frameworks) which we'll expand support for over time.

## Frameworks

Currently, we support the following frameworks:

- Robot Framework [(View Docs Here)](/visual-testing/integrations/python-robot-framework/)
- Generic Python Client

:::info
If you're looking for support with additional frameworks, you can submit a feature request on our [Productboard](https://portal.productboard.com/sauceprod/2-sauce-labs-portal/tabs/4-under-consideration/submit-idea) to help us prioritize which SDKs we roll out first.
:::

## Installation

- Install the Sauce Labs Visual python package in your project, and optionally append it to your dependencies.

```sh
pip install saucelabs_visual
```

## Usage

:::note
This client currently requires that you're running an existing Webdriver session on Sauce and can access the session ID for interaction with our Visual API.
:::

For more technical users, we also expose a generic SauceLabsVisual client which can be used to interact with the Visual API for a running Selenium / Webdriver session on Sauce in case your framework is not officially supported yet.

Generally, the workflow would be as follows:

### Step 1 - Import and instantiate the Client

Import the client and store it in a variable you can access globally in your tests / framework:

```python
from saucelabs_visual.client import SauceLabsVisual

client = SauceLabsVisual()
```

### Step 2 - Create the Build

- Either manually or in a `beforeAll` hook that is only triggered once in your framework, create the Visual build that we'll associate all screenshots with.

```python
# Creates a build and stores the build meta in the client instance for processing & interaction later
client.create_build(
    name='My Python Build',
    # Any other named parameters that are available. See the source / docs for more information on
    # options for customizing your build.
    # project="my-project",
    # branch="my-ci-branch",
)
```

### Step 3 - Take a Snapshot

Take a visual snapshot in each test where you'd like to check for visual changes

We recommend creating a helper class / function within your framework of choice to reduce the duplication / need to pass the test metadata (such as test / suite name) into each call.

```python
session_id = 'YOUR_SESSION_ID'  # Get your Selenium session ID from your framework
client.create_snapshot_from_webdriver(
    name="Snapshot Name",
    session_id=session_id,
    # Other optional items to customize your snapshots / associate them with the current test run
    # test_name="TEST_NAME_FROM_YOUR_FRAMEWORK",
    # suite_name="SUITE_NAME_FROM_YOUR_FRAMEWORK",
)
```

### Step 4 - Finish the Build

- Either manually or in an `afterAll` hook that is only triggered once at the end of your framework, finish the Visual build to let Sauce Visual know we're ready to present the results in the UI.

```python
# Finish the currently opened build associated with this instance
client.finish_build()
```

## Visual Snapshot Options & Examples


### Full Page Screenshots

By default, only the current viewport is capture when taking a screenshot. By passing a `FullPageConfig` instance in the `full_page_config` named param you can enable and customize the behavior for our scroll-and-stitch snapshots. View the `FullPageConfig` class in our [visual SDKs](https://github.com/saucelabs/visual-sdks/blob/main/visual-python/src/saucelabs_visual/typing.py) for up to date inline docs for all properties.

<FullPageLimit />

```python
from saucelabs_visual.typing import FullPageConfig
# ...
visual_client.create_snapshot_from_webdriver(
    "Inventory Page",
    session_id=session_id,
    full_page_config=FullPageConfig(
        # Can customize full page behavior by customizing values here. Or omit completely to
        # disable full page screenshots:
        # ex:
        # scrollLimit=10,
        # hideAfterFirstScroll=['.fixed-header', '#cookie-banner']
        # delayAfterScrollMs=200,
    ),
)
```

### DOM Capture

You can use the `capture_dom` named param with a value of `True` to enable DOM capture during a snapshot.

```python
visual_client.create_snapshot_from_webdriver(
    "Inventory Page",
    session_id=session_id,
    capture_dom=True,
)
```

### Clip to an Element

If you'd like to test a specific component or area of a page you can use the `clip_selector` named param in combination with a CSS selector to clip the screenshot and DOM comparison. When enabled, we'll crop the screenshot to the coordinates of the element and constrain our DOM comparison to that area. We accept any `document.querySelector` compatible string / CSS selector as the value.

```python
visual_client.create_snapshot_from_webdriver(
    "Inventory Page",
    session_id=session_id,
    clip_selector='.my-css-selector',
)
```

Alternatively, you can also pass an element directly if you've already queried one from selenium using the `clip_element` named param:

```python
add_to_cart_button = driver.find_element(By.CSS_SELECTOR, '.btn_inventory')
visual_client.create_snapshot_from_webdriver(
    "Inventory Page",
    session_id=session_id,
    clip_element=add_to_cart_button,
)
```

### Ignore Regions

You can ignore one or more areas on the page by using the `ignore_regions` named param. Ignore regions accepts an array of full region definitions (width, height, x & y coordinates). We also support passing elements directly using the `ignore_elements` named param to bypass region calculation / creation. See below for examples for both.

Regions:

```python
from saucelabs_visual.typing import IgnoreRegion
# ...
visual_client.create_snapshot_from_webdriver(
    "Inventory Page",
    session_id=session_id,
    # Use coordinates on a page to create manual regions.
    ignore_regions=[
        IgnoreRegion(x=100, y=100, width=100, height=100)
    ],
)
```

Elements:

```python
from saucelabs_visual.typing import IgnoreElementRegion
# ...
add_to_cart_button = driver.find_element(By.CSS_SELECTOR, '.btn_inventory')
visual_client.create_snapshot_from_webdriver(
    "Inventory Page",
    session_id=session_id,
    # Ignore certain areas of a page using elements / selectors.
    ignore_elements=[
        IgnoreElementRegion(
            # Ignore one or more elements returned by find_elements/find_element.
            element=driver.find_elements(By.CSS_SELECTOR, '.inventory_item_img'),
        ),
        IgnoreElementRegion(
            # Can also pass an element that has been previously found via the driver
            element=add_to_cart_button,
        ),
    ],
)
```

### Selective Diffing

<SelectiveDiffing />

#### Area-specific configuration

<SelectiveDiffingRegion />

Example:
```python
    visual_client.create_snapshot_from_webdriver(
        "login-page",
        session_id=session_id,
        diffing_method=DiffingMethod.BALANCED,        
        capture_dom=True,
        ignore_elements=[
            # Any change will be ignored.
            IgnoreElementRegion(
                element=driver.find_element(By.NAME, "user-name")
                enable_only=[]
            ),
            # Only style changes won't be ignored.
            IgnoreElementRegion(
                element=driver.find_element(By.NAME, "password")
                enable_only=['style']
            ),
        ],
    )
```

## Environment variables

Below are the environment variables available in the Sauce Visual Python plugin. Keep in mind that the variables defined in code / configuration have precedence over these.

<EnvironmentVariables />

## Examples

Example projects are available [here](https://github.com/saucelabs/visual-examples/tree/main/python).

