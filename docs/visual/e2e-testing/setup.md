---
id: setup
title: Setting Up Your E2E Visual Testing Project
sidebar_label: Project Setup
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Here's how to set up your first Visual E2E Testing project:

1. When you first log in to Screener, you'll be asked to create a new project to add your tests to. Click the **Add New Project** dialog:

The following steps show how to set up and test your first Project using Screener Pages.

## Setting Up Your Project

1. When you first [log in to Screener](https://screener.io/login), you'll be asked to create a new project to add your tests to. Click the **Add New Project** dialog:
<img src={useBaseUrl('img/visual/e2e-add-project.png')} alt="Add E2E Project"/>

2. Add a **Project Title** and click **Save**.

3. The Dashboard will update with the new Project.


## Creating New a Test Group

A Test Group allows you to group and organize your tests and reports. You can create as many Test Groups as you'd like to organize your tests.

Create a new Test Group by clicking + Test Group button in the Dashboard:
<img src={useBaseUrl('img/visual/e2e-add-group.png')} alt="Add E2E Group"/>

You will be presented with the Add New Test Group dialog:
<img src={useBaseUrl('img/visual/e2e-add-group.png')} alt="Add E2E Group - Screener"/>

The **Run Tests On Screener** option is pre-selected, as it is the simplest and quickest way to get started with Screener. (The **Run Tests On Client** option allows you to [integrate and run Screener from your existing Selenium/Webdriver functional tests](https://screener.io/docs/webdriver).)

Add a Group Name and a Base Url to what you would like to test, and click **Save**.

The Dashboard will then update with the new Test Group. An initial page with the path "/" is automatically added for you.

**What is a Base Url?**:  A Base Url is the starting path for test urls. It includes the protocol and host name; for example it would be "https://screener.io" for Screener. Additional pages added will now use this base url automatically, and only need to be "/" and "/docs".

**Tip:** To access projects behind Basic HTTP Authentication, enter the authentication info into the Base Url. Example format: "https://username:password@your-project.com".

Click **Save** to add the Test Group.


## Adding a Browser

The Add Browser dialog will automatically display after adding a Test Group:
<img src={useBaseUrl('img/visual/e2e-add-browser.png')} alt="Add E2E Browser"/>

Select your desired browser and resolution.

Click **Save** to add the browser to your Test Group.

**Reference Browser**: This option allows you to point to another test in the same Test Group to be used as a baseline and ensure consistency. Useful for:

*   Cross-Browser Testing (e.g. Firefox to reference Chrome)
*   Multi-Environment Testing (e.g. Staging to reference Production)
*   Localization Testing (e.g. FR to reference EN).

**Set Target Environment:** This option is useful for testing multiple environments, and allows you to customize the base url and associated environment name. For example, you could use this to add different locales, or different urls for each development stage (e.g. Dev vs. Staging).

**Set Validation Options:** When Screener validates, it categorizes changes into 4 types, and allows each change type to be enabled or disabled. All change types are enabled by default. The Validation Options allow you to customize what change types you would like to disable, allowing you to ignore all changes of a particular category. The four change types are:

*   Structure - this includes inserted or deleted elements
*   Layout
*   Style
*   Content - this includes text and media content, such as images


## Add Pages

The Add Page dialog allows you to add any number of pages you'd like to test in a Test Group.

Access the Add Page dialog by clicking on **Pages**.

<img src={useBaseUrl('img/visual/e2e-add-page-button.png')} alt="E2E Add Page Button"/>

In the **Add Page** input field, enter a path to a Page. Paths should start with a "/" (i.e. /path/to/page). Urls outside of the Base Url can also be added, and must start with "http://" or "https://".

<img src={useBaseUrl('img/visual/e2e-add-page.png')} alt="Add E2E Page"/>

>**NOTE**: During test runs, all paths will be pre-fixed with the Project's Base Url.

When finished adding pages, click the **Save** button to add Pages, or **Cancel** to undo your changes.

## Running a Test

After you have added all the browsers and pages you'd like to test, you can start your first test run. Click on **Run Test** to start a test run for a Test Group.

<img src={useBaseUrl('img/visual/e2e-run-test-button.png')} alt="Add E2E Browser"/>

**Note:** A Test Group displays the latest test results. Click the History tab to view all previous test runs for the Test Group. You can click on "Run Test" within the Latest tab only.

After clicking **Run Test**, you will see the **History** tab with the browsers queued for their first test run. As the test runs, you will notice each browser cycle through different status messages, starting with the **Queued** state.

A test is complete when you see the "Complete" status.
