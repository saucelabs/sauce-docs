---
id: jenkins
title: "Jenkins: Tricentis qTest Integration"
sidebar_label: "Jenkins: Tricentis qTest Integration"
keywords:
    - api-testing
    - integrations
    - jenkins
    - tricentis
    - qTest
    - enterprise
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The following procedure will allow you to integrate API Fortress test results into your qTest instance. By passing JUnit test data through Jenkins and into qTest, your API Fortress test results can be visible in the same space as the rest of your tests.

## Install Jenkins Plugins (qTest)

Log in to your Jenkins account. In order for the qTest integration to work, we need to extend Jenkins with a couple of plugins. First, click “_Manage Jenkins,_” then click “_Manage Plugins_.”

<img src={useBaseUrl('img/api-fortress/2018/04/jenkinsAddons-1.gif')} alt="jenkinsAddons-1.gif"/>

We’re going to need both the _qTest_ plugin, and the _HTTP Request_ plugin. To find the plugins, click the _“Available”_ tab in the Plugins menu and use the filter in the top right corner to search for them. Install both.

## Integrate API Fortress into your CI/CD Process

The first step to integrating API Fortress into your CI/CD process is to grab the generated API hook for the project in question. To do so, head to the Settings panel in API Fortress. This view, seen below, can be accessed from anywhere in the application by clicking the _Gear_ icon in the top right corner of the screen. Please note you need Manager access to generate a webhook. From Settings, click the API Hooks section and generate the hook for your project.

<img src={useBaseUrl('img/api-fortress/2018/04/hook.gif')} alt="hook.gif"/>

The next step depends on what you’re trying to test. The following steps are going to assume that you wish to run all of the tests in a project. You can also run a single test, or a series of tests with a certain tag. If you would like to learn more about that please contact API Fortress.

To import our data into qTest via Jenkins, we’ll export it in JUnit format using a query parameter. Since we already have our API hook, we just need to add the parameter to do so.

As it stands, our API hook is as follows:

```
https://mastiff.apifortress.com/app/api/rest/v3/86f81b19-2d29-4879-91d9-6dbb2271fec0861
```

The normal command to run all of the tests in the project, per the API Fortress docs is _/tests/run-all_, so we append this on to the end of the API call. We also need to request JUnit output via query parameters. First, we need to set _sync_ to _true_, and then we can set _format_ to _JUnit_. In short, we need to append `?sync=true&format=junit`. That gives us the final API call:

```
https://mastiff.apifortress.com/app/api/rest/v3/86f81b19-2d29-4879-91d9-6dbb2271fec0861/tests/run-all?sync=true&format=junit
```

Great! If we make this API call via a browser or a tool like Postman, we can see our results in JUnit. We’re almost there.

## Add API Fortress Step to qTest

From the Jenkins dashboard, let’s create a New Item. Next, we’re going to name and create a Freestyle Project. Click the _OK_ button to proceed.

<img src={useBaseUrl('img/api-fortress/2018/04/jenkinsSetup.gif')} alt="jenkinsSetup.gif"/>

Scroll down the page until you see the “_Add Build Step_” pulldown menu. Select “_HTTP Request_.” This option will only be available if you installed the _HTTP Request_ plugin in the previous step. We’re going to paste the API call we created above into the URL line.

<img src={useBaseUrl('img/api-fortress/2018/04/Screen-Shot-2018-04-03-at-10.50.38-AM-2.png')} alt="Screen-Shot-2018-04-03-at-10.50.38-AM-2.png"/>

Next, we’re going to click the “_Advanced_” button. Scroll to the bottom of the newly opened view and enter a filename of your choice into the “_Output Response to File”_ line.

<img src={useBaseUrl('img/api-fortress/2018/04/Screen-Shot-2018-04-03-at-9.56.58-AM-2.png')} alt="Screen-Shot-2018-04-03-at-9.56.58-AM-2.png"/>

<img src={useBaseUrl('img/api-fortress/2018/04/Screen-Shot-2018-04-03-at-10.50.38-AM-2.png')} alt="Screen-Shot-2018-04-03-at-10.50.38-AM-2.png"/>

In the new window, enter the same filename that we saved our JUnit data to in the API call in the previous step.

Now, we’ve enabled Jenkins to execute API Fortress tests and receive the test data in JUnit format. Next, we’re going to allow it to pass this data on to qTest.

Click on the “_Add Post-Build Action_” pulldown below the build step we just created and select “_Submit JUnit Test Results to qTest.”_

<img src={useBaseUrl('img/api-fortress/2018/04/Screen-Shot-2-1.png')} alt="Screen-Shot-2-1.png"/>

Enter the URL of your qTest instance and your [qTest – Jenkins API Key](https://support.qasymphony.com/hc/en-us/articles/115002955466-Jenkins-and-Bamboo-Integration#11-configure-the-qtest-jenkins-plugin-for-freestyle). Click the “_Retrieve Data_” button to populate the next few menus. Select a project, release, and environment (optional) where you want to push the test results. Choose the final options with regards to how you wish the data to be stored in qTest, and click save.

<img src={useBaseUrl('img/api-fortress/2018/04/Screen-Shot-3.png')} alt="Screen-Shot-3.png"/>

From now on, every time you click “Build Now” with this test, the results will be exported to the qTest Project of your choice automatically.

<img src={useBaseUrl('img/api-fortress/2018/04/manager_APIFortress.png')} alt="manager_APIFortress.png"/>

