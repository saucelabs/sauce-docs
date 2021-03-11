---
id: zephyr-enterprise-integration
title: "Jenkins: Zephyr Enterprise Integration"
sidebar_label: Zephyr Enterprise Integration
keywords:
    - cicd
    - jenkins
    - api-fortress
    - zephyr-enterprise
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Step 1 - Install the Zephyr Enterprise Jenkins Plugin

The first step to exporting data to Zephyr Enterprise is to download and configure the Zephyr Enterprise plugin.

1. From the Jenkins main page, click "Configure" and then "Manage Plugins." 
2. From the "Manage Plugins" window, search for and install "Zephyr Enterprise."

<img src={useBaseUrl('img/api-fortress/2018/05/jenkinsAddons.gif')} alt="Jenkins Add On"/>

## Step 2 - Configure the Zephyr Enterprise Jenkins Plugin

1. Click the "Configure System" option in the "Manage Jenkins" menu.

   <img src={useBaseUrl('img/api-fortress/2018/05/JenkConfig.png')} alt="Jenkins config"/>

2. Scroll down to "Zephyr Server Configuration" and enter your domain and login credentials.

   <img src={useBaseUrl('img/api-fortress/2018/05/Screen-Shot-2018-05-29-at-10.30.39-AM.png')} alt="Jenkins config"/>

3. Click "Test Configuration." If the test is successful, your Jenkins is properly configured to communicate with your Zephyr instance.

## Step 3 – Generate an API Hook

Next, we need to create an API Fortress Webhook to export the test data to Jenkins. 

To do so, head to the Settings panel in API Fortress. This view, seen below, can be accessed from anywhere in the application by clicking the _Gear_ icon in the top right corner of the screen. 

> __Note__: You need Manager access to generate a Webhook. From Settings, click the API Hooks section and generate the hook for your project.

<img src={useBaseUrl('img/api-fortress/2018/04/hook.gif')} alt="Jenkins hook gif"/>

The next step depends on what you’re trying to test. The following steps are going to assume that you wish to run all of the tests in a project. You can also run a single test, or a series of tests with a certain tag. If you would like to learn more about that please contact API Fortress.

To import our data into Jenkins as JUnit, we’ll export it in JUnit format using a query parameter. Since we already have our API hook, we just need to add the parameter to do so.

As it stands, our API hook is as follows:

```http request
https://mastiff.apifortress.com/app/api/rest/v3/86f81b19-2d29-4879-91d9-6dbb2271fec0861
```

The normal command to run all of the tests in the project, per the API Fortress docs is `/tests/run-all` , so we append this on to the end of the API call. 

We also need to request JUnit output via query parameters. First, we need to set _sync_ to _true_, and then we can set _format_ to _JUnit_. In short, we need to append `?sync=true&format=junit`. 

That gives us the final API call:

```http request
https://mastiff.apifortress.com/app/api/rest/v3/86f81b19-2d29-4879-91d9-6dbb2271fec0861/tests/run-all?sync=true&format=junit
```

Great! If we make this API call via a browser or a tool like Postman, we can see our results in JUnit.

## Step 4 – Execute HTTP Call from Jenkins

From the Jenkins dashboard, let’s create a New Item. 

1. Next, we’re going to name and create a Freestyle Project. Click the _OK_ button to proceed.

   <img src={useBaseUrl('img/api-fortress/2018/04/jenkinsSetup.gif')} alt="Jenkins Setup gif"/>

2. Scroll down the page until you see the “_Add Build Step_” pulldown menu. Select “_HTTP Request_.” 
   This option will only be available if you installed the _HTTP Request_ plugin in the previous step. 
   
3. We’re going to paste the API call we created above into the URL line. If we save this configuration, we can run the build and see Jenkins receive our JUnit test results in real time.

4. Next, we’re going to click the “_Advanced_” button. Scroll to the bottom of the newly opened view and enter a filename of your choice into the “_Output Response to File”_ line.

<img src={useBaseUrl('img/api-fortress/2018/04/Screen-Shot-2018-04-03-at-9.56.58-AM-2.png')} alt="output"/>

## Step 5 - Publish JUnit Test Results in Jenkins

Now that we're receiving JUnit data from API Fortress in Jenkins, we need to publish the data so that we can use it further downstream. 

1. Click "Add Post-Build Action"
2. Then click "Publish JUnit Data"

   <img src={useBaseUrl('img/api-fortress/2018/04/junit.gif')} alt="JUnit Gif"/>

3. In the new window, enter the same filename that we saved our JUnit data to in the API call in the previous step.

Now, we’ve enabled Jenkins to execute API Fortress tests and receive the test data in JUnit format. Next, we’re going to allow it to pass this data on to Zephyr.

## Step 6 - Exporting Data to Zephyr

1. Click "Add Post-Build Action"
2. Select "Publish Test Results to Zephyr Enterprise." 
    Since we configured the Zephyr plugin in step 2, Zephyr information should populate automatically from your Zephyr Enterprise instance. 

3. Select the project, release and cycle of your choice and save the build.

   <img src={useBaseUrl('img/api-fortress/2018/05/Screen-Shot-2018-05-29-at-10.30.05-AM.png')} alt="Screen Shot"/>
   
   Test data will now export to Zephyr every time this project is built.
   
   <img src={useBaseUrl('img/api-fortress/2018/05/Screen-Shot-2018-05-29-at-10.31.14-AM.png')} alt="Screen Shot"/>