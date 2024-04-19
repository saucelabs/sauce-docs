---
sidebar_label: Python
---

import EnterpriseNote from '../\_partials/\_enterprise-note.md'
import EnvironmentVariables from '../\_partials/\_environment-variables.md';

# Python Integration

<EnterpriseNote />

## Introduction

This document assumes an existing Python 3+ project. Alternatively, you can take a look to our [example repository](#examples) for quick-start projects.

Sauce Visual plugin for Python provides an interface for interacting with Sauce Labs Visual and a running Selenium session on Sauce.

A generic `SauceLabsVisual` client is exposed by the package to allow interaction with any Python based tooling. We also offer some additional [framework-specific options](#frameworks) which we'll expand support for over time.

## Installation

- Install the Sauce Labs Visual python package in your project, and optionally append it to your dependencies.

```sh
pip install saucelabs_visual
```

## Frameworks

### Robot Framework

This integration relies on the [SeleniumLibrary](https://github.com/robotframework/SeleniumLibrary) package provided by Robot Framework for automatic detection of the current session. View our [Robot Framework example on GitHub](https://github.com/saucelabs/visual-examples/tree/main/python/robot-framework/) for a fully-functional example for reference.

- Step 1: Add the Sauce Visual package

```sh
pip install saucelabs_visual
```

- Step 2: Create top-level (in a parent folder that includes no test cases) setup and teardowns with the `Create Visual Build` and `Finish Visual Build` keywords, respectively. All of your tests should be nested in directories under this to allow it to act like a global setup / teardown.

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

- Step 3: Add visual tests in your test / suite files using the `Visual Snapshot` keyword followed by the name for your snapshot

```robot
*** Settings ***
# We recommend putting this in your resource.robot file instead, but have omitted that here to keep the example short.
Library           saucelabs_visual.frameworks.robot.SauceLabsVisual

Invalid Login
    # ... Opening a selenium session, and your other assertions
    Visual Snapshot    My Snapshot Name
    # ...
```

- Step 4: Configure your Sauce Labs credentials

Sauce Visual relies on environment variables for authentications.<br />
Both `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` need to be set prior starting your Python tests.

Username and Access Key can be retrieved from https://app.saucelabs.com/user-settings.

```sh
export SAUCE_USERNAME=__YOUR_SAUCE_USER_NAME__
export SAUCE_ACCESS_KEY=__YOUR_SAUCE_ACCESS_KEY__
```

- Step 5: Run the tests

Upon executing your tests for the first time under this step, a visual baseline is automatically created in our system. This baseline serves as the standard for all subsequent tests. As new tests are run, they are compared to this original baseline, with any deviations highlighted to signal visual changes. These comparisons are integral for detecting any unintended visual modifications early in your development cycle. All test builds, including the initial baseline and subsequent runs, can be monitored and managed through the Sauce Labs platform at [Sauce Visual Builds](https://app.saucelabs.com/visual/builds).

Remember, the baseline is established during the initial run, and any subsequent visual differences detected will be marked for review.

### Generic / Framework Agnostic

:::info
If you're looking for support with additional frameworks, you can submit a feature request on our [Productboard](https://portal.productboard.com/sauceprod/2-sauce-labs-portal/tabs/4-under-consideration/submit-idea) to help us prioritize which SDKs we roll out first.
:::

:::note
This client currently requires that you're running an existing WDIO session on Sauce and can access the session ID for interaction with our Visual API.
:::

For more technical users, we also expose a generic SauceLabsVisual client which can be used to interact with the Visual API for a running Selenium / WDIO session on Sauce in case your framework is not officially supported yet.

Generally, the workflow would be as follows:

- Import and instantiate the client, and keep the instance somewhere globally, so you can access it.

```python
from saucelabs_visual.client import SauceLabsVisual

client = SauceLabsVisual()
```

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

- Take a visual snapshot in each test where you'd like to check for visual changes

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

- Either manually or in an `afterAll` hook that is only triggered once at the end of your framework, finish the Visual build to let Sauce Visual know we're ready to present the results in the UI.

```python
# Finish the currently opened build associated with this instance
client.finish_build()
```

## Environment variables

Below are the environment variables available in the Sauce Visual Python plugin:

<EnvironmentVariables />

## Examples

Example projects are available [here](https://github.com/saucelabs/visual-examples/tree/main/python).
