---
sidebar_label: Python
---

import EnvironmentVariables from '../_partials/_environment-variables.md';
import PythonIntro from '../_partials/_python-shared-intro.md';
import SelectiveDiffing from '../_partials/_selective-diffing.md';
import SelectiveDiffingGlobal from '../_partials/_selective-diffing-global.md';
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

## Advanced usage

### Environment variables

Below are the environment variables available in the Sauce Visual Python plugin. Keep in mind that the variables defined in code / configuration have precedence over these.

<EnvironmentVariables />


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

## Examples

Example projects are available [here](https://github.com/saucelabs/visual-examples/tree/main/python).

