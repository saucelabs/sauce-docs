---
id: nlp-reference
title: NLP Reference
sidebar_label: NLP Reference
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Windows, Tabs, and Alerts

### Launch a Website

This is usually the first step in a test case, but you can also add this step during the course of a test if you need to open a different website.

<table>
  <tr>
    <td>Action
    </td>
  </tr>
  <tr>
    <td colspan='2'><code>Go to...</code>
    </td>
  </tr>
  <tr>
    <td>Go to
    </td>

  </tr>
  <tr>
    <td>Go to page
    </td>

  </tr>
  <tr>
    <td>Go to site
    </td>

  </tr>
  <tr>
    <td>Go to web page
    </td>

  </tr>
  <tr>
    <td>Go to website
    </td>

  </tr>
  <tr>
    <td colspan='2'><code>Launch...</code>
    </td>
  </tr>
  <tr>
    <td>Launch website
    </td>

  </tr>
  <tr>
    <td colspan='2'><code>Navigate...</code>
    </td>
  </tr>
  <tr>
    <td>Navigate
    </td>

  </tr>
  <tr>
    <td>Navigate page
    </td>

  </tr>
  <tr>
    <td>Navigate site
    </td>

  </tr>
  <tr>
    <td>Navigate to
    </td>

  </tr>
  <tr>
    <td>Navigate to page
    </td>

  </tr>
  <tr>
    <td>Navigate to site
    </td>

  </tr>
  <tr>
    <td>Navigate to website
    </td>

  </tr>
  <tr>
    <td>Navigate web page
    </td>

  </tr>
  <tr>
    <td>Navigate website
    </td>

  </tr>
  <tr>
    <td colspan='2'><code>Open...</code>
    </td>
  </tr>
  <tr>
    <td>Open page
    </td>

  </tr>
  <tr>
    <td>Open site
    </td>

  </tr>
  <tr>
    <td>Open web page
    </td>

  </tr>
  <tr>
    <td>Open website
    </td>

  </tr>
</table>

### Switch to Tab or Window
This command moves focus to another window or tab.

<table>
  <tr>
    <td>Action
    </td>

  </tr>
  <tr>
    <td colspan='2'><code>Switch to...</code>
    </td>
  </tr>
  <tr>
    <td>Switch to 2nd tab
    </td>

  </tr>
  <tr>
    <td>Switch to 2nd window
    </td>

  </tr>
  <tr>
    <td>Switch to 3rd tab
    </td>

  </tr>
  <tr>
    <td>Switch to 3rd window
    </td>

  </tr>
  <tr>
    <td>Switch to new tab
    </td>

  </tr>
  <tr>
    <td>Switch to new window
    </td>

  </tr>
  <tr>
    <td>Switch to original tab
    </td>

  </tr>
  <tr>
    <td>Switch to original window
    </td>

  </tr>
  <tr>
    <td>Switch to window with title [title1]
    </td>

  </tr>
</table>

### Switch to Alert, Confirm, or Prompt
An alert, confirm, or prompt window is different from a normal window, and the `Switch to...` window commands will not work.

When an alert window is encountered, a variable will be created win variables as
`alert_message`. This variable can then be used to verify specific messages, if needed.

<table>
  <tr>
    <td><b>Action</b>
    </td>
  </tr>
  <tr>
    <td><b><code>Switch to alert...</code></b>
    </td>
  </tr>
  <tr>
    <td>Switch to alert and click on accept
    </td>
  </tr>
  <tr>
    <td>Switch to alert and click on cancel
    </td>
  </tr>
  <tr>
    <td>Switch to alert and click on leave
    </td>
  </tr>
  <tr>
    <td>Switch to alert and click on ok
    </td>
  </tr>
  <tr>
    <td>Switch to alert and click on stay
    </td>
  </tr>
  <tr>
    <td>Switch to alert and save message as alert_set1 and click ok
    </td>
  </tr>
  <tr>
    <td><b><code>Switch to confirm...</code></b>
    </td>
  </tr>
  <tr>
    <td>Switch to confirm and click on accept
    </td>
  </tr>
  <tr>
    <td>Switch to confirm and click on cancel
    </td>
  </tr>
  <tr>
    <td>Switch to confirm and click on leave
    </td>
  </tr>
  <tr>
    <td>Switch to confirm and click on ok
    </td>
  </tr>
  <tr>
    <td>Switch to confirm and click on stay
    </td>
  </tr>
  <tr>
    <td><b><code>Switch to prompt...</code></b>
    </td>
  </tr>
  <tr>
    <td>Switch to prompt and click on accept
    </td>
  </tr>
  <tr>
    <td>Switch to prompt and click on cancel
    </td>
  </tr>
  <tr>
    <td>Switch to prompt and click on leave
    </td>
  </tr>
  <tr>
    <td>Switch to prompt and click on ok
    </td>
  </tr>
  <tr>
    <td>Switch to prompt and click on stay
    </td>
  </tr>
</table>

### Set Screen or Window Size
If a window is not displaying at the correct size, you can use the `Set screen size` commands at the beginning of the test case.

<table>
  <tr>
    <td><b>Action</b>
    </td>

  </tr>
  <tr>
    <td colspan='2'><code>Set...</code>
    </td>
  </tr>
  <tr>
    <td>Set screen size - [width] * [height]
    </td>

  </tr>
  <tr>
    <td>Set window size - [width] * [height]
    </td>

  </tr>
</table>

## Click, Press, and Select

<table>
  <tr>
    <td><b>Action</b>
    </td>
  </tr>
  <tr>
    <td><b><code>Click...</code></b>
    </td>
  </tr>
  <tr>
    <td>Click _css{"[selector]"}
    </td>
  </tr>
  <tr>
    <td>Click &#123;xpath: "[address]"&#125;
    </td>
  </tr>
  <tr>
    <td>Click on [exact attribute value]<br/><br/><b>Note:</b> Attribute values are not case sensitive.
    </td>
  </tr>
  <tr>
    <td>Click on radio next to [text]
    </td>
  </tr>
  <tr>
    <td>Click on [text]
    </td>
  </tr>
  <tr>
    <td>Click on [text] after [text]
    </td>
  </tr>
  <tr>
    <td>Click on [text] before [text]
    </td>
  </tr>
  <tr>
    <td>Click on [text] for [text]<br/><br/><b>Note:</b> This is useful when there are multiples of the same button, but there are unique identifiers for each.
    </td>
  </tr>
  <tr>
    <td>Click on [text] radio
    </td>
  </tr>
  <tr>
    <td>Click on [text] radio for [text]
    </td>
  </tr>
  <tr>
    <td>Click on _xy&#123;x, y&#125; of _css&#123;#some_html_node_id&#125;<br/><br/><b>Note:</b> The x, y coordinates are the location on the page of an HTML node.
    </td>
  </tr>
  <tr>
    <td>Click on _xy&#123;x, y&#125; of _xpath&#123;“[//img]”&#125;<br/><br/><b>Note:</b> The x, y coordinates are the location on the page of an image, and the text is the image name.
    </td>
  </tr>
  <tr>
    <td><b><code>Double Click...</code></b>
    </td>
  </tr>
  <tr>
    <td>Double Click on _xy&#123;x, y&#125; of [text]
    </td>
  </tr>
  <tr>
    <td><b><code>Press...</code></b>
    </td>
  </tr>
  <tr>
    <td>Press _css&#123;"[selector]"&#125;
    </td>
  </tr>
  <tr>
    <td>Press &#123;xpath: "[address]"&#125;
    </td>
  </tr>
  <tr>
    <td>Press on radio next to [text]
    </td>
  </tr>
  <tr>
    <td>Press on [text] radio
    </td>
  </tr>
  <tr>
    <td>Press on [text] radio for [text]
    </td>
  </tr>
  <tr>
    <td><b><code>Select...</code></b>
    </td>
  </tr>
  <tr>
    <td>Select _css&#123;"[selector]"&#125;
    </td>
  </tr>
  <tr>
    <td>Select [text]<br/><br/>Example: `Select country`<br/><br/><b>Note:</b> In the example, "country" is the name of a dropdown.
    </td>
  </tr>
  <tr>
    <td>Select [text] from [text]<br/><br/>Example: `Select united states from country`
    </td>
  </tr>
  <tr>
    <td>Select &#123;xpath: "[address]"&#125;
    </td>
  </tr>
</table>

### Hover
In order to capture the full page screenshot of the application, Sauce Labs Low-Code captures multiple screenshots of the page and stitches them together. During this process, the page gets scrolled up and down to capture screenshots of different sections of the page. This might cause certain types of modals/pop-ups that might be on the page to automatically close. Using Hover will freeze the page and prevent popups from closing when scrolled.

<table>
  <tr>
    <td><b>Action</b>
    </td>
  </tr>
  <tr>
    <td><b><code>Hover on...</code></b>
    </td>
  </tr>
  <tr>
    <td>Hover on _css&#123;“[selector]”&#125;
    </td>
  </tr>
  <tr>
    <td>Hover on _xy&#123;x, y&#125; of _xpath&#123;//img[@id=”some_html_node_id”]&#125;
    </td>
  </tr>
  <tr>
    <td>Hover on &#123;xpath: “[address]”&#125;
    </td>
  </tr>
  <tr>
    <td>Hover on [text]
    </td>
  </tr>
  <tr>
    <td><b><code>Hover over...</code></b>
    </td>
  </tr>
  <tr>
    <td>Hover over _css&#123;“[selector]”&#125;
    </td>
  </tr>
  <tr>
    <td>Hover over &#123;xpath: “[address]”&#125;
    </td>
  </tr>
  <tr>
    <td>Hover over [text]
    </td>
  </tr>
</table>

## Enter, Type In, and Fill In

<table>
  <tr>
    <td><b>Action</b>
    </td>
  </tr>
  <tr>
    <td><b><code>Enter...</code></b>
    </td>
  </tr>
  <tr>
    <td>Enter [textbox]<br/><br/>Example: `Enter username`
    </td>
  </tr>
  <tr>
    <td>Enter text in _css&#123;“[selector]”&#125;
    </td>
  </tr>
  <tr>
    <td>Enter text in &#123;xpath: “[address]”&#125;
    </td>
  </tr>
  <tr>
    <td>Enter text in [text]
    </td>
  </tr>
  <tr>
    <td>Enter [textbox] and save as xyz
    </td>
  </tr>
  <tr>
    <td><b><code>Fill in...</code></b>
    </td>
  </tr>
  <tr>
    <td>Fill in [textbox]
    </td>
  </tr>
  <tr>
    <td>Fill in text in _css&#123;“[selector]”&#125;
    </td>
  </tr>
  <tr>
    <td>Fill in text in &#123;xpath: “[address]”&#125;
    </td>
  </tr>
  <tr>
    <td>Fill in text in [text]
    </td>
  </tr>
  <tr>
    <td><b><code>Set text in...</code></b>
    </td>
  </tr>
  <tr>
    <td>Set text in _css&#123;“[selector]”&#125;
    </td>
  </tr>
  <tr>
    <td>Set text in &#123;xpath: “[address]”&#125;
    </td>
  </tr>
  <tr>
    <td>Set text in [text]
    </td>
  </tr>
  <tr>
    <td><b><code>Type in...</code></b>
    </td>
  </tr>
  <tr>
    <td>Type in [textbox]
    </td>
  </tr>
  <tr>
    <td>Type in text in _css&#123;“[selector]”&#125;
    </td>
  </tr>
  <tr>
    <td>Type in text in &#123;xpath: “[address]”&#125;
    </td>
  </tr>
  <tr>
    <td>Type in text in [text]
    </td>
  </tr>
</table>

## `Download file...`

The `Download file by clicking on “[download_label]”` action will insert a **Get Downloaded File** button next to the respective test step. The file will download to the user's local machine.

The default timeout for a file download to start is five minutes, but it can be modified by using the `--downloadTimeout [seconds]` action.

### Example
`Download file by clicking on "text" --downloadTimeout 600`

Once a download starts, the system will wait 30 minutes for it to complete.

You can also modify the download timeout on the **Variables** tab with the `download_complete_timeout` variable. (See [Variables](/dev/low-code/variables) for more information.)

### Example
**Variable:** `download_complete_timeout`
**Value:** `[minutes]`

## `Upload file to...`
The `Upload file to...` actions will upload a specified file to a specified location.

File download and upload are supported on the following browsers:
  * Chrome (local and remote)
  * Firefox (local and remote)
  * Edge (remote) – Supported on the latest Chromium Edge browsers

<table>
  <tr>
    <td><b>Action</b>
    </td>
  </tr>
  <tr>
    <td><b><code>Upload file to...</code></b>
    </td>
  </tr>
  <tr>
    <td>Upload file to _css&#123;“[selector]”&#125;
    </td>
  </tr>
  <tr>
    <td>Upload file to [text]
    </td>
  </tr>
  <tr>
    <td>Upload file to &#123;xpath: “[address]”&#125;
    </td>
  </tr>
</table>

## Assert and Verify
Using `Assert` will cause the test case to fail and stop at the failed step. Using `Verify` will cause the test step to fail, but the execution will continue to the next step.

<table>
  <tr>
    <td><b>Action</b>
    </td>
  </tr>
  <tr>
    <td><b><code>Assert...</code></b>
    </td>
  </tr>
  <tr>
    <td>Assert [text] is visible on the page
    </td>
  </tr>
  <tr>
    <td>Assert image of “text”, “text” is one the page
    </td>
  </tr>
  <tr>
    <td><b><code>Verify...</code></b>
    </td>
  </tr>
  <tr>
    <td>Verify _css&#123;“[selector]”&#125; begins with [text]
    </td>
  </tr>
  <tr>
    <td>Verify _css&#123;“[selector]”&#125; begins with [text] or begins with [text]
    </td>
  </tr>
  <tr>
    <td>Verify _css&#123;“[selector]”&#125; begins with [text] or ends with [text]
    </td>
  </tr>
  <tr>
    <td>Verify _css&#123;“[selector]”&#125; contains [text]
    </td>
  </tr>
  <tr>
    <td>Verify _css&#123;“[selector]”&#125; contains [text] or begins with [text]
    </td>
  </tr>
  <tr>
    <td>Verify _css&#123;“[selector]”&#125; contains [text] or contains [text]
    </td>
  </tr>
  <tr>
    <td>Verify _css&#123;“[selector]”&#125; contains [text] or ends with [text]
    </td>
  </tr>
  <tr>
    <td>Verify _css&#123;“[selector]”&#125; ends with [text]
    </td>
  </tr>
  <tr>
    <td>Verify _css&#123;“[selector]”&#125; ends with [text] or ends with [text]
    </td>
  </tr>
  <tr>
    <td>Verify _css&#123;“[selector]”&#125; is _css&#123;“[selector]”&#125;
    </td>
  </tr>
  <tr>
    <td>Verify _css&#123;“[selector]”&#125; is disabled
    </td>
  </tr>
  <tr>
    <td>Verify _css&#123;“[selector]”&#125; is enabled
    </td>
  </tr>
  <tr>
    <td>Verify _css&#123;“[selector]”&#125; is not visible
    </td>
  </tr>
  <tr>
    <td>Verify _css&#123;“[selector]”&#125; is visible
    </td>
  </tr>
  <tr>
    <td>Verify [text] is on the page<br/><br/><b>Note:</b>Can be used to wait until an element is loaded on the screen. Once it is loaded, the validation continues. If the element is not loaded within the timeout duration, the validation will fail and an error message will state that the element was not found. By default, the timeout is 8 seconds, but you can modify it: `Verify [some text] is on the screen --timeout 30`
    </td>
  </tr>
  <tr>
    <td>Verify &#123;xpath: “[address]”&#125; background-color is #ffffff
    </td>
  </tr>
  <tr>
    <td>Verify &#123;xpath: “[address]”&#125; begins with [text]<br/><br/>Example: `Verify &#123;xpath: "[//img[@class='gb_Wa']"&#125; begins with [google]`
    </td>
  </tr>
  <tr>
    <td>Verify &#123;xpath: “[address]”&#125; begins with [text] or begins with [text]
    </td>
  </tr>
  <tr>
    <td>Verify &#123;xpath: “[address]”&#125; begins with [text] or ends with [text]
    </td>
  </tr>
  <tr>
    <td>Verify &#123;xpath: “[address]”&#125; color is [#e01719]<br/><br/><b>Note:</b> Any CSS attribute value can be validated using the xpath of the element (width, height, font-family, text-align, font-size, display, color, background-color, etc.).<br/><br/>Example: `Verify &#123;xpath: "[//img[@class='gb_Wa']"&#125; color is [#e01719]`
    </td>
  </tr>
  <tr>
    <td>Verify &#123;xpath: “[address]”&#125; contains [text]
    </td>
  </tr>
  <tr>
    <td>Verify &#123;xpath: “[address]”&#125; contains [text] or begins with [text]
    </td>
  </tr>
  <tr>
    <td>Verify &#123;xpath: “[address]”&#125; contains [text] or contains [text]
    </td>
  </tr>
  <tr>
    <td>Verify &#123;xpath: “[address]”&#125; contains [text] or ends with [text]
    </td>
  </tr>
  <tr>
    <td>Verify &#123;xpath: “[address]”&#125; ends with [text]
    </td>
  </tr>
  <tr>
    <td>Verify &#123;xpath: “[address]”&#125; ends with [text] or ends with [text]
    </td>
  </tr>
  <tr>
    <td>Verify &#123;xpath: “[address]”&#125; font-size 26px
    </td>
  </tr>
  <tr>
    <td>Verify &#123;xpath: “[address]”&#125; is &#123;xpath: “[address]”&#125;
    </td>
  </tr>
  <tr>
    <td>Verify &#123;xpath: “[address]”&#125; is disabled
    </td>
  </tr>
  <tr>
    <td>Verify &#123;xpath: “[address]”&#125; is enabled
    </td>
  </tr>
  <tr>
    <td>Verify &#123;xpath: “[address]”&#125; is not visible
    </td>
  </tr>
  <tr>
    <td>Verify &#123;xpath: “[address]”&#125; is visible
    </td>
  </tr>
  <tr>
    <td>Verify $&#123;var_name&#125; is on the screen<br/><br/><b>Note:</b>Used to verify if a saved variable exists on the screen.
    </td>
  </tr>
  <tr>
    <td>Verify $&#123;var_name&#125; on the page<br/><br/><b>Note:</b>Used to verify if a saved variable exists on the page.
    </td>
  </tr>
  <tr>
    <td>Verify alert is exists
    </td>
  </tr>
  <tr>
    <td>Verify new tab exists
    </td>
  </tr>
  <tr>
    <td>Verify new window exists<br/><br/><b>Note:</b> Used to check if a new window appears.
    </td>
  </tr>
  <tr>
    <td>Verify pop up is exists<br/><br/><b>Note:</b> Used to check if a new pop-up appears.
    </td>
  </tr>
  <tr>
    <td>Verify tab is exists<br/><br/><b>Note:</b> Used to check if a new tab appears.
    </td>
  </tr>
  <tr>
    <td>Verify the current url is [url]<br/><br/><b>Note:</b> Used to verify the URL of the current window when a user navigates to another URL or window.<br/><br/>Example: `Verify the current URL is https://www.test.com/`
    </td>
  </tr>
  <tr>
    <td>Verify url is [url]
    </td>
  </tr>
  <tr>
    <td>Verify variable $$&#123;var_name$&#125; is [text]<br/><br/><b>Note:</b> Verify if a saved variable matches with some text. Can also be used to verify the value saved for a variable.<br/><br/>Example: `Verify variable $$&#123;variableName$&#125; is [someText]`
    </td>
  </tr>
  <tr>
    <td>Verify window is exists
    </td>
  </tr>
</table>

## Conditional Actions
Conditional actions are executed if certain conditions are true, and can be used instead of `verify` if additional actions are to be performed after the initial action.

<table>
  <tr>
    <td><b>Action</b>
    </td>
  </tr>
  <tr>
    <td><b><code>if...</code></b>
    </td>
  </tr>
  <tr>
    <td>if &#123;xpath: “[address]”&#125; is visible, click on [exact attribute value]
    </td>
  </tr>
  <tr>
    <td>if [condition], continue
    </td>
  </tr>
  <tr>
    <td>if [condition], run block [block_name]
    </td>
  </tr>
  <tr>
    <td>if current url is [url], enter [text]<br/><br/>Example: `if current url is https://www.wikipedia.org/, click on English`
    </td>
  </tr>
</table>

## Looping Actions
### Blocks
Blocks can be used to loop through commands as many times as required.

<table>
  <tr>
    <td><b>Action</b>
    </td>
  </tr>
  <tr>
    <td><b><code>Begin...</code></b>
    </td>
  </tr>
  <tr>
    <td>Begin block [block_name]
    </td>
  </tr>
  <tr>
    <td>Begin script _bash with ${input_var}
    </td>
  </tr>
  <tr>
    <td>Begin script _js with ${input_var}
    </td>
  </tr>
  <tr>
    <td>Begin script _py with ${input_var}
    </td>
  </tr>
  <tr>
    <td><b><code>run...</code></b>
    </td>
  </tr>
  <tr>
    <td>run ${block_name} for [number] times
    </td>
  </tr>
  <tr>
    <td>run ${block_name} for [number] rows
    </td>
  </tr>
  <tr>
    <td>run ${block_name} for all rows
    </td>
  </tr>
  <tr>
    <td>run ${block_name} until [text] on the screen
    </td>
  </tr>
</table>

#### Example
`begin block <block_name>{instruction1}{instruction2}...end block`
`run ${block_name} for {number} times`

To run through multiple data sets for input in each loop, use separate data files with multiple data. After uploading the data file, link it to the relevant test case. In the following example, each row of data will correspond to an iteration of the loop.

<img src={useBaseUrl('/img/dev/low-code/looping-blocks-example.png')} alt="An example of looping blocks"/>

### Nested Blocks
Nested blocks are blocks within blocks. You can have a single or multiple levels of nesting blocks.

#### Example
```
Run ${block1} for all rows
Begin block block1
enter username
enter password
Run ${block2}

Begin block block2
enter username
enter password
end block

end block
```
### Flows
Flows are similar to methods or functions, in which a user can create a block of code that can be reused across test cases. Flows can also be nested inside blocks.

<table>
  <tr>
    <td><b>Action</b>
    </td>
  </tr>
  <tr>
    <td><b><code>Run ${flow_name}...</code></b>
    </td>
  </tr>
  <tr>
    <td>Run ${flow_name} for [number] times
    </td>
  </tr>
  <tr>
    <td>Run ${flow_name} for all rows
    </td>
  </tr>
</table>

### Decision-Making Actions
Decision-making actions can only be used with block and flow actions.

#### `if...`
An `if` action is used to decide whether a certain action or block of actions will be executed.

<table>
  <tr>
    <td><b>Action</b>
    </td>
  </tr>
  <tr>
    <td><b><code>if...</code></b>
    </td>
  </tr>
  <tr>
    <td>if &#123;xpath: “[address]”&#125; is visible, click on [exact attribute value]
    </td>
  </tr>
  <tr>
    <td>if [condition], continue
    </td>
  </tr>
  <tr>
    <td>if [condition], run block [block_name]
    </td>
  </tr>
  <tr>
    <td>if current url is [url], enter [text]
    </td>
  </tr>
</table>

#### Example

```
if {xpath: “//a[@class=’page-title-action’]”} is visible, run ${Create_User} for all rows
Begin block Create_User
click “Add New”
enter “Username”
enter “First Name”
enter “Last Name”
click on createusersub
end block
```

If the given xpath is visible, the user will be created.

### `if...else...`

In an `if...else...` action, if a condition is true, a block of statements will be executed; if the condition is false, the else part will be executed.

#### Example

```
if {xpath: “//select[@id=’rolle’]”} is visible, run ${subscribe}
else, run ${Help}
Begin block Help
click on “Help”
end block
```

In this example, the `if` condition is not satisfied so the `else` part is executed.

### Nested `if...` Actions

`if...else...` actions can be nested inside other if or else actions.

<img src={useBaseUrl('/img/dev/low-code/if-else-example.png')} alt="An example of an if...else... action"/>

### `else...if...`

The `else...if...` (or `elif`) statement is useful when you need to check multiple conditions, or to avoid nesting `if...else...` blocks.

#### Syntax
```
if (condition1) run ${block1}
 //These statements would execute if the condition1 is true
elif(condition2) run ${block2}
//These statements would execute if the condition2 is true and condition1 is
False
End block
Else, run ${else_block}
 //These statements would execute if all the conditions return false
End block
End block
```

<img src={useBaseUrl('/img/dev/low-code/else-if-example.png')} alt="An example of an else...if... action"/>

In this example, if the condition is not satisfied and `block login1` is not executed, then the control moves to the `elif` action. Here the condition is satisfied and `block login2` is executed.

### Data-Driven Parsing

<img src={useBaseUrl('/img/dev/low-code/dd-parsing-example.png')} alt="An example of a data-driven parsing action"/>

In this example, `run${block1} for all rows` will iterate through all rows in the data file. When the condition matches the current row, only that `if block` will be executed. Any subsequent `elif`/`else` actions won’t be executed, as well as any conditions that do not match.

#### `if...continue...`
In an `if...continue...` action, when the `if` condition is satisfied, the control jumps to the beginning of the loop for the next iteration.

## Wait Actions

<table>
  <tr>
    <td><b>Action</b>
    </td>
  </tr>
  <tr>
    <td><b><code>Wait...</code></b>
    </td>
  </tr>
  <tr>
    <td>Wait [number] secs
    </td>
  </tr>
  <tr>
    <td>Wait for [number] seconds
    </td>
  </tr>
  <tr>
    <td>Wait for [number] secs
    </td>
  </tr>
  <tr>
    <td>Wait until _css&#123;“[selector]”&#125; is exists
    </td>
  </tr>
  <tr>
    <td>Wait until _css&#123;“[selector]”&#125; is visible
    </td>
  </tr>
  <tr>
    <td>Wait until &#123;xpath: “[address]”&#125; is exists
    </td>
  </tr>
  <tr>
    <td>Wait until &#123;xpath: “[address]”&#125; is visible
    </td>
  </tr>
  <tr>
    <td>Wait until [text] is exists
    </td>
  </tr>
  <tr>
    <td>Wait until [text] is visible
    </td>
  </tr>
</table>

## Upload Actions
Files should be uploaded to the **Artifacts** section.

<table>
  <tr>
    <td><b>Action</b>
    </td>
  </tr>
  <tr>
    <td><b><code>Upload...</code></b>
    </td>
  </tr>
  <tr>
    <td>Upload file to _css&#123;“[selector]”&#125;
    </td>
  </tr>
  <tr>
    <td>Upload file to [text]
    </td>
  </tr>
  <tr>
    <td>Upload file to &#123;xpath: “[address]”&#125;
    </td>
  </tr>
</table>

## Screenshot Actions

<table>
  <tr>
    <td><b>Action</b>
    </td>
  </tr>
  <tr>
    <td>Take screenshot
    </td>
  </tr>
  <tr>
    <td>Capture screenshot
    </td>
  </tr>
</table>

## Table Instructions
The following action works for HTML tables with simple `table-tr-td` tags, not nested. It identifies the cell below the first column for which the value of the second column matches.

`Action on "FirstColumnName" Where SecondColumnName [operator] SecondColumnValue`

### `Click on...`
Examples with different operators:
  * `Click on "Move" Where Winning % is 55.71`
  * `Click on "Black" Where Black Elo is not undefined`
  * `Click on "White" Where White Elo greater than 2700`
  * `Click on "Move" Where Winning % lesser than 55`
  * `Click on "White" Where White Elo begins with I`
  * `Click on "Wins" Where Move starts with g`
  * `Click on "Black" Where Date ends with ?`
  * `Click on "White" Where Date contains 1994`
  * `Click on "White" Where White Elo != undefined`
  * `Click on "Move" where Winning % > 55`
  * `Click on "Move" Where Winning % < 55`
  * `Click on "Move" Where Winning % <= 55`
  * `Click on "Move" Where Wins >= 70060`
  * `Click on "Move" Where Wins = 70060`

### `Enter text...`
In the following example, “Review” is the column name.

`Enter text in "Review" Where Location is Austin`

### `Click on radio...`
In the following example, “No” is the column name.

`Click on radio in "No" Where Location is Austin`

### Click on checkbox. . .
In the following example, “Choose” is the column name.

`Click on checkbox in "Choose" Where Name is Anki`

### Dropdown Selection
In the following example, “Books” is the column name, and the value to choose is designated in test data.

`Choose "Books" Where Name is SKM`

In the following example, “The Shining” is the value in the dropdown. The column in which this comes up does not need to be specified.

`Choose "The Shining" Where Name is Anki`

### Click/Enter Text Based on Row Number
#### Examples
`Click on "Move" Where row is 3`
`Click on "Move" Where row is last`

### Get the Table Row Count
This will return the count of the number of rows in the table.

#### Example
`Get table row count as variable_Name`
