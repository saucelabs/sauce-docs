---
id: setup
title: Setting Up Your E2E Visual Testing Project
sidebar_label: Setup
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The following doc describes how to set up and test your first Visual E2E Testing Project using Screener Pages.

## Setting Up Your Project

1. When you first [log in to Screener](https://screener.io/login), you'll need to create a new project to add your tests to. Click **Project Actions** > **Add New Project** to open the dialog below.
<img src={useBaseUrl('img/visual/e2e-add-project.png')} alt="Add E2E Project"/>

2. Fill out the **Project Title** field > Click **Save**.
3. The Dashboard will then update with your new Project title.


## Creating New a Test Group

Test Groups allow you to group and organize your tests and reports. You can create as many Test Groups as you'd like.

1. From your Dashboard, create a new Test Group by clicking the **+ Test Group** button.
<img src={useBaseUrl('img/visual/e2e-add-group.jpg')} alt="Add E2E Group" width="350px" />

2. You will be presented with the **Add New Test Group** dialog.
<img src={useBaseUrl('img/visual/e2e-add-group-screener.jpg')} alt="Add E2E Group - Screener" width="500px" />

   * The **Run Tests On Screener** option will be pre-selected, as it is the simplest and quickest way to get started with Screener.
   * The **Run Tests On Client** option allows you to [integrate and run Screener from your existing Selenium WebDriver functional tests](/visual/e2e-testing/integrations/selenium-webdriver).

3. Add a Group Name and a Base URL to what you would like to test, then click **Save**.

  **What is a Base URL?** A Base URL is the starting path for test urls. It includes the protocol and host name. The Sauce Labs website's Base URL, for example would be `https://saucelabs.com/`. Additional pages added will now use this base url automatically, and only need to be `/` and `/about`.

  :::tip
  To access projects behind Basic HTTP Authentication, enter the authentication info into the Base URL. Example format: `https://username:password@your-project.com`.
  :::

4. The Dashboard will then update with the new Test Group. An initial page with the path `/` is automatically added for you.

5. Click **Save** to add the Test Group.


## Adding a Browser

The **Add Browser** dialog will automatically display after adding a Test Group.

<img src={useBaseUrl('img/visual/e2e-add-browser.png')} alt="Add E2E Browser"/>

1. Select your desired **Browser** and **Resolution**.

2. **(Optional)** Select a **Reference Browser**. This option allows you to point to another test in the same Test Group to be used as a baseline and ensure consistency. Useful for:
    * Cross-Browser Testing (e.g., Firefox to reference Chrome)
    * Multi-Environment Testing (e.g., Staging to reference Production)
    * Localization Testing (e.g., FR to reference EN).

3. **(Optional)** Check the **Set Target Environment** checkbox. This option is useful for testing multiple environments, and allows you to customize the base url and associated environment name. For example, you could use this to add different locales, or different urls for each development stage (e.g. Dev vs. Staging).

4. **(Optional)** Check the **Set Validation Options** checkbox. When Screener validates, it categorizes changes into four types, and allows each change type to be enabled or disabled. All change types are enabled by default. The Validation Options allow you to customize what change types you would like to disable, allowing you to ignore all changes of a particular category. The four change types are:
      * Structure (includes inserted or deleted elements).
      * Layout.
      * Style.
      * Content (includes text and media content, such as images).

3. Click **Save** to add the browser to your Test Group.


## Add Pages

The **Add Page** dialog allows you to add any number of pages you'd like to test in a Test Group.

1. Access the Add Page dialog by clicking **Pages**.
<img src={useBaseUrl('img/visual/e2e-add-page-button.png')} alt="E2E Add Page Button" width="225px" />

2. In the **Add Page** input field, enter a path to a Page. Paths should start with a `/` (e.g., `/path/to/page`). URLs outside of the Base URL can also be added, and must start with `http://` or `https://`.
<img src={useBaseUrl('img/visual/e2e-add-page.png')} alt="Add E2E Page" width="450px" />

>**NOTE**: During test runs, all paths will be pre-fixed with the Project's Base URL.

3. When finished adding Pages, click **Save**.

## Running a Test

After you've added all the browsers and pages you'd like to test, you can start your first test run.

1. Click **Run Test** to start a test run for a Test Group.

  <img src={useBaseUrl('img/visual/e2e-run-test-button.png')} alt="Add E2E Browser"/>

>**NOTE**: A Test Group displays the latest test results. Click the History tab to view all previous test runs for the Test Group. You can click on "Run Test" within the Latest tab only.

2. After clicking **Run Test**, you'll see the **History** tab with the browsers queued for their first test run. As the test runs, you will notice each browser cycle through different status messages, starting with the **Queued** state. A test is complete when you see the **Complete** status.
<img src={useBaseUrl('img/visual/e2e-test-complete.png')} alt="E2E Test Complete"/>


## Next Steps
*   [Visual E2E Testing Workflow](/visual/e2e-testing/dashboard-workflow)
*   [Using the Screener Recorder](/visual/e2e-testing/screener-recorder)
*   [Selenium WebDriver/Functional Test Integration](/visual/e2e-testing/integrations/selenium-webdriver)
*   [Visual E2E Testing API Reference](/visual/e2e-testing/api)
