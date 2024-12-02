---
sidebar_label: Cross Browser / OS
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BaselineOverridesWDIO from '../_partials/_baseline-overrides-wdio.md';
import BaselineOverridesCSharp from '../_partials/_baseline-overrides-csharp.md';
import BaselineOverridesPython from '../_partials/_baseline-overrides-python.md';
import BaselineOverridesPythonRobot from '../_partials/_baseline-overrides-python-robot.md';

# Cross Browser / OS Visual Testing

When creating a new Snapshot in Sauce Visual we look up the previous snapshot for a configuration using our [baseline matching](/visual-testing/#baseline-matching) behavior. This generally means that running the same tests with the same device configuration (OS, browser, window size, etc.) will find the last snapshot taken with that setup to compare against.

Using the 'Baseline Overrides' feature allows overriding specific, or all, keys during baseline matching. Using these options you can test visual snapshots across devices, operating systems, and browsers.

<figure>
    <img src={useBaseUrl('/img/sauce-visual/cross-browser.png')} alt="Comparing a Chrome baseline vs a Firefox snapshot"/>
    <figcaption style={{textAlign: 'center'}}>Comparing a Chrome baseline vs a Firefox snapshot</figcaption>
</figure>

## Usage

Below are some general steps for getting up and running using cross browser / OS comparisons:

### 1. Configure your browsers

To get the most out of cross browser comparison, you'll want your browser viewports to be equal in dimensions. We recommend doing this in a `before` hook provided by your framework right after the driver is initialized. Below are some examples in a few frameworks with a snippet for applying a uniform value across tests.

:::note NOTE: Setting Browser Dimensions
A browser window cannot be larger than the screen requested in a session, and will often have to be a few hundred pixels smaller in order to account for OS panels, status bars and docks. We recommend targeting a height of ~300px smaller than the smallest requested resolution capability.
:::

For example with the following capabilities tested against:

- Chrome on Windows 11 at 2560x1600
- Firefox on Windows 11 at 2560x1600
- Safari on macOS 13 at 2048x1536

You may want to target a browser height of ~1200px. We'll be using 1920x1200 as our target for the examples below to ensure all browsers can reach the requested size.

<Tabs
    defaultValue="wdio"
    values={[
        { label: 'WDIO', value: 'wdio' },
        { label: 'C#', value: 'csharp' },
        { label: 'Python', value: 'python' },
        { label: 'Python (Robot)', value: 'robot' },
    ]}
>
    <TabItem value="wdio">
        ```js
        // Adding this to the 'before' hook in your 'wdio.conf.ts'
        {
            // ... The rest if your wdio configuration
            before: async (_capabilities, _specs) => {
                // Resize all windows to small, static size
                await browser.setWindowRect(0, 0, 800, 600);
                // Calculate the difference between the window outer and inner dimensions (to account
                // for browser UI elements, etc.
                const [width, height] = await driver.executeScript(`
                    return [window.outerWidth - window.innerWidth + arguments[0],
                          window.outerHeight - window.innerHeight + arguments[1]];
                    `, [1920, 1200]);
                await browser.setWindowRect(0, 0, width, height);
            },
        }
        ```
    </TabItem>
    <TabItem value="csharp">
        ```csharp
        // In a before / Setup of a fixture following driver initialization
        Driver.Manage().Window.Size = new Size(800, 600);
        var dims = (ReadOnlyCollection<object>) Driver.ExecuteScript(
            "return [window.outerWidth - window.innerWidth + arguments[0], window.outerHeight - window.innerHeight + arguments[1]];",
            [1920, 1200]
        );
        Driver.Manage().Window.Size = new Size(Convert.ToInt32(dims[0]), Convert.ToInt32(dims[1]));
        ```

        [//]: # (</object> commented out, but here to prevent mdx parsing in IDE)
    </TabItem>
    <TabItem value="python">
        ```python
        # Call after your driver is initialized in your test setup
        driver.set_window_size(800, 600)
        [width, height] = driver.execute_script(
            'return [window.outerWidth - window.innerWidth + arguments[0], window.outerHeight - '
            'window.innerHeight + arguments[1]];',
            1920,
            1200,
        )
        driver.set_window_size(width, height)
        ```
    </TabItem>
    <TabItem value="robot">
        ```robot
        # Recommended to set in your global setup after opening your browser
        Setup
            Set Window Size    800    600
            ${dims} =    Execute Javascript    return [window.outerWidth - window.innerWidth + 1920, window.outerHeight - window.innerHeight + 1200];
            Set Window Size    ${dims}[0]    ${dims}[1]
        ```
    </TabItem>
</Tabs>

### 2. Set a baseline

With your new configuration use a binding & test framework of your choice create a build for your target browser. For example, if you want to compare all browsers against Chrome you would run a single build with Chrome as the browser under test. When complete, approve any / all snapshots that are a part of that build. This will give us a full set of baselines to compare other browsers against.

### 3. Configure baseline overrides

With the baselines of your target browser saved gather the keys of the baseline run you wish to compare against. You can do this in the UI by navigating into a build, selecting a diff, viewing the snapshot meta, and clicking 'Copy as JSON.'

<video style={{width: '100%', height: 'auto'}} autoPlay loop title="Copy baseline hash keys">
    <source src={useBaseUrl('/img/sauce-visual/snapshot-metadata.webm')}  />
</video>

For cross browser / OS testing you will likely want the following:

- `operatingSystem`
- `operatingSystemVersion`
- `browser`
- `device`

Use the baseline override feature of your binding (see the documentation for your specific binding on the sidebar). A few examples are included below for reference:

<Tabs
    defaultValue="wdio"
    values={[
        { label: 'WDIO', value: 'wdio' },
        { label: 'C#', value: 'csharp' },
        { label: 'Python', value: 'python' },
        { label: 'Python (Robot)', value: 'robot' },
    ]}
>
    <TabItem value="wdio">
        <BaselineOverridesWDIO />
    </TabItem>
    <TabItem value="csharp">
        <BaselineOverridesCSharp />
    </TabItem>
    <TabItem value="python">
        <BaselineOverridesPython />
    </TabItem>
    <TabItem value="robot">
        <BaselineOverridesPythonRobot />
    </TabItem>
</Tabs>

### 4. Run your build

Run a new build for each browser you wish to compare with and optionally approve the snapshots for each browser to allow them to take over their own baselines.

## Limitations

- Scrollbars on Windows generally take up space which can cause invalid / incorrect viewport dimensions for snapshots. You can use workarounds such as [setting the scrollbar width](https://developer.mozilla.org/docs/Web/CSS/scrollbar-width) to disable them temporarily. We'll do our best to do this automatically while using a Sauce Visual runner.
- Browser dimensions need to be the same for the best results. While having a uniform width can cover most cases, having a uniform height will ensure that pages which center content (and do not have enough content to scroll) will match enough to be visually diffed.
