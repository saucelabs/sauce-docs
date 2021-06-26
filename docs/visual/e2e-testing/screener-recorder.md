---
id: screener-recorder
title: Recording E2E Live Tests and Test Scripts
sidebar_label: Screener Recorder
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The ***Screener Recorder*** is a Chrome Developer Tools Extension that records live (manual) tests for automated playback in Screener and enables you to debug Screener scripts locally. Use it to record and automate test flows for your web app.

:::tip
After recording a script, you should always play it back within the Screener Recorder to catch potential issues and to help debug.
:::

## Screener Recorder Panel Tour

<img src={useBaseUrl('img/visual/e2e-screener-recorder.png')} alt="E2E Screener Recorder" />

1. **Project & Page Selection**: The top of the panel shows the current selected Project and Page, with dropdowns allowing users to switch Projects. Each recorded script is associated with a specific page.

2. **Record & Playback Controls**: Click the blue **Record** icon to start recording actions on your selected Project and Page combination. This will record manual actions, such as clicks and text inputs.

  During a recording, you can also add custom steps, such as capturing a snapshot. Click the **Play** button to playback the recorded actions. Both the **Record** and **Play** controls reload the page to ensure it is in a clean, reproducible state. If there are existing recorded steps, the Record action will play through them first before starting the recording.

  >**NOTE**: If the page does not reload properly, the Screener Recorder may lose its reference to the active tab. In this case, you will need to manually refresh the page and close/re-open Chrome Developer Tools for the Screener Recorder to function properly.

3. **Recorded Steps**: The steps table lists all recorded steps. Each row represents a single step, and consists of the step type, optional value and locator.

  The left-side of each row has a pause icon which is used to set breakpoints during playback. Multiple breakpoints can be set, enabling users to step-through and debug steps.

  The right-side of each row has an "x" icon which deletes the step.

  All captured states are highlighted in green, with a bolded title, to make it easy to see when Screener will take a snapshot.

  During playback, the current step being played is highlighted in blue.

  :::tip Tips
    * Remember to add a snapshot step for each UI state you want to validate. Snapshot steps need to be added manually.
    * To re-order steps, simply drag/drop the step up or down the list.
    * For ajax loaded content, use the "wait for element" step type to wait for either an existence of an element, or the visibility of an element. Use the jQuery pseudo-selector ":visible" in the element locator field to wait for an element to be visible.
    * An explicit wait time can optionally be added to snapshot steps. This is useful when you want to wait for an animation to finish before capturing the snapshot.
    * To add a new step after another step, click on the step you want to add the new step after. You will see the step details under **Update Step**. Change the details by entering the new step details and click **Add After**.
  :::

4. **Save & More Options**: All steps are automatically saved locally on a users machine until the Save button is clicked. Saving will upload the recorded steps to Screener, which will then play them in the test group's test run.

  The **Save** button is only enabled when there are changes that have not been saved.

  The **More Options** dropdown provides the following additional options:
    * **Clear All Breakpoints**.	Removes all breakpoints in steps.
    * **Revert to Last Saved**. At any point prior to saving, changes can be reverted to the last saved recording.
    * **Delete All Steps**. Delete all recorded steps. This only deletes steps locally, and will not apply permanently until Saved.
    * **Logout**.	Sign out of current Screener account.

5. **Add/Update Step**: The Step form provides users a way to add new or update existing steps. By default, the Step form is set to adding new steps.

  To update an existing step, click on a row in the Recorded Steps table, and the Step form will update to reflect the selected step.

  Many types of steps require the **Element Locator** field. To make it easier to find an element, click the **Finder** (magnifying glass) icon, hover over an element, and right-click to select. This will auto-generate a CSS Selector for the selected element.

  :::caution
  Closing Chrome Developer Tools will also shut down the Screener Recorder.
  :::

## 1. Installation

Click the button below to install Screener Recorder from the Chrome Web Store.
  <p> <a href="https://chrome.google.com/webstore/detail/screener-recorder/jjiijakfdiepgkkbijkcebknloghcoip"><button class="download">Install Screener Recorder</button></a> </p>

After installation, access the Screener Recorder by opening Chrome Developer Tools. An additional tab is added called **Screener Recorder**.


## 2. Signing In

You will need to be logged into Screener (via Sauce Labs), as the Recorder will sync with your Screener account to access your latest projects and scripts.


## 3. Recording Your Test Scripts

To record your a script:

1. Once you're signed in, the Screener Recorder will display the currently selected Project and Page, which should be the new Project you just created. There will be nothing recorded, so you will be presented with an empty list.

  <img src={useBaseUrl('img/visual/e2e-recorder-empty.png')} alt="E2E Recorder Empty" />

  >**NOTE**: Each recorded script is associated with a specific page.

2. Click the **Record** icon to start your first recording. This will load the selected Project/Page url into your current tab in Chrome.

3. When the URL has completed loading, the record icon will change its status to **Recording**, and you can start interacting with the page. Any click and text input actions you perform in the browser will be automatically recorded, and be displayed in the steps list:

  <img src={useBaseUrl('img/visual/e2e-recorder-recording.png')} alt="E2E Recorder Recording" />

  At any point during your recording you can add custom steps by using the **New Step** form to the right of the steps list.

  For example, to capture a particular state, open the Type dropdown under **New Step** and select either "snapshot (cropped)" or "snapshot (full page)". Fill in the form fields for capturing a snapshot, and click "Add Step" at the bottom of the form. This will add the new capture step to the end of the steps list.

4. When you're ready to stop the recording, click the **Stop** icon.


## 4. Playback

After recording a script, you should always play it back within the Screener Recorder to catch potential issues and to help debug.

Click the **Play** icon (next to the **Record** icon) to playback your recording.

<img src={useBaseUrl('img/visual/e2e-recorder-play.png')} alt="E2E Recorder Play" width="75px" />

During playback, the page will reload to ensure it is in a clean state, and the elements being interacted with will automatically scroll into view and highlight in red to help you see what is going on. Any snapshots are also highlighted in white to help you visualize what states will be captured.

## 5. Saving Your Recording

When you are happy with the recording, you can save it by clicking the **Save** icon (see below).

<img src={useBaseUrl('img/visual/e2e-recorder-save.png')} alt="E2E Recorder Save" width="85px" />

This will upload your recorded script to Screener, and the script will be executed on your next test run.

All edited recordings are automatically saved locally to your machine, so you will always have your most recent edits available. You should only click **Save** when you have completed your recording, and you want it to be uploaded to Screener and used in its test run.

If you are unhappy with your recording, you can revert any edited recording to the last saved by clicking the cog icon (next to the Save icon) and selecting **Revert to Last Saved**.

:::tip
To help debug, you can set breakpoints by clicking the **Pause** icon on the left of each step. Step through steps one at a time by setting multiple breakpoints in a row.
:::

## 6. Running a Test With Recording

When you have completed recording your scripts, you can execute a test run within Screener by going to the project Dashboard in the Screener app, and clicking on **Run Test** in the Test Group with your recording.

## Viewing Test Logs

You can view logs for each test run via the History tab for each Test Group. Logs are useful to help debug any errors or timeouts which may occur during a test run.

[Click here](https://code.google.com/p/selenium/wiki/JsonWireProtocol#Response_Status_Codes) to view a list of WebDriver Error Codes, which may be returned in the logs.


## Best Practices and Tips

Below are some tips to help ensure Screener captures snapshots consistently, reducing timing differences caused by animations, asynchronous loading of data, carousels, etc. You'll also find a list of options for ignoring areas from being compared by Screener, by ignoring at the Test Group, Page, or State levels.

### Timing Tips

#### **Wait for Element**
Using the Screener Recorder, you can wait for elements to exist before proceeding to the next step. This is useful for scenarios where content is loaded after the page loads, such as with Ajax calls.

To use, simply add the step type "wait for element", enter a CSS selector to the element(s) you would like to ensure exist, and then click **Add Step**.

<img src={useBaseUrl('img/visual/e2e-wait-for-element.png')} alt="E2E Wait for Element" width="300px"/>


#### **Wait for Visible**
The above "wait for element" step type can also be used to wait for not only the existence of an element in the DOM, but that the element is also visible.

To use, add the step type "wait for element", enter a CSS selector to the element(s) you would like to find, and then append a ":visible" pseudo-class to the end of your CSS selector.

<img src={useBaseUrl('img/visual/e2e-wait-for-visible.png')} alt="E2E Wait for Visible" />


#### **Delay Before Taking Screenshot**
Using the Screener Recorder, you can add a delay before taking a screenshot. This is useful for scenarios such as waiting for an animation to complete.

To use, add the number of milliseconds to wait in the Screenshot step. This field is optional.

<img src={useBaseUrl('img/visual/e2e-delay-screenshot.png')} alt="E2E Delay Screenshot" />


#### **Execute Client-Side JS**
Using the Screener Recorder, you can execute custom client-side JavaScript code to interact with your application-under-test. This is useful for interacting with custom widgets you may have on your website, and recording interactions which cannot otherwise be created using the Recorder.

To use, add the step type "execute script", enter the JS code you would like executed, and then click Add Step.

The example below uses jQuery to pause a carousel, and ensure the carousel has a particular index selected.

<img src={useBaseUrl('img/visual/e2e-execute-script.png')} alt="E2E Execute Script" />


### Ignoring Options

#### **Ignoring Areas Across a Test Group**
You can specify areas for Screener to ignore across an entire Test Group. This is the easiest way to add ignores, and is the most maintainable because it keeps your ignores in one central location.

To use, add a comma-delimited list of css selectors to ignore in the Edit Test Group dialog:

<img src={useBaseUrl('img/visual/e2e-test-group-ignore.png')} alt="E2E Test Group Ignore" />

#### **Ignoring Areas Using the Screener Recorder**
You can specify areas for Screener to ignore within your Screener Recorder script. This provides much more control over when a particular area should be ignored, as this step can be added anywhere in your script. The actual ignoring does not happen until a screenshot takes place.

To use, simply add the step type "ignore", enter a css selector to the element(s) to ignore, and then click Add Step.

<img src={useBaseUrl('img/visual/e2e-recorder-ignore.png')} alt="E2E Recorder Ignore" />

#### **Ignoring Areas in Functional Tests**
When integrating Screener into your Functional Tests, you can specify areas to ignore across the test, or on a specific UI state.

Additional information, syntax and examples can be found in the Functional Tests Integration docs.


### Validation Options

You can specify what types of validation Screener performs on a Test Group by enabling/disabling validation options. This feature allows you to disable content comparison in a locale-to-locale test for example.

To use, select the **Set Validation Options** checkbox in the Add Browser dialog, and select yes or no for each type of validation option.

<img src={useBaseUrl('img/visual/e2e-add-browser-validation-options.png')} alt="E2E Add Browser Validation Options" />

When integrating Screener into your Functional Tests, you can find additional information on how to configure validation options in the Functional Tests Integration docs.
