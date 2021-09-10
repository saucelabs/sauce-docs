---
id: connecting-to-testrail
title: Connecting to Testrail
sidebar_label: Connecting to Testrail
keywords:
    - api
    - api-fortress
    - testrail
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<img src={useBaseUrl('img/api-fortress/2018/06/testrail-apif.png')} alt="testrail-apif.png"/>

Test case managers are often critical to helping modern teams manage cases, plans, and runs. Communication of the test results is key, and that's why API Fortress makes it easy to integrate with many leading platforms today. TestRail is one of them.

API Fortress makes it easy to automate the testing of your APIs, and to trigger those tests to run automatically on a schedule, and during a build process (eg: Jenkins). That test result data can be pushed to your TestRail instance automatically.

Here is a quick guide to setup of how to set it up.

First, click the gear icon in the upper right corner of any view in API Fortress, highlighted in the below image.

<img src={useBaseUrl('img/api-fortress/2018/06/2-1-1024x640.png')} alt="2-1-1024x640.png"/>

Next, we're going to click "Alerts Groups" on the left navigation bar, followed by "+ Alert Group" to create a new group, name it, and finally click the connector button. The GIF below demonstrates this procedure.

<img src={useBaseUrl('img/api-fortress/2018/06/AlertGroup.gif')} alt="AlertGroup.gif"/>

Next, we need to add the TestRail connector to the alert group. Click "+ Connector" and select TestRail in the dropdown that appears.

<img src={useBaseUrl('img/api-fortress/2018/06/Screen-Shot-2018-06-27-at-11.29.36-AM-1024x640.png')} alt="screenshot"/>

Next, we need to define the parameters that we're going to pass to the TestRail connector. Click the pencil icon to edit the parameters, and then fill out the fields in the modal.

<img src={useBaseUrl('img/api-fortress/2018/06/1-1-1024x640.png')} alt="1-1-1024x640.png"/>

* **Username:** Your TestRail Username. 
* **Password:** The password for the TestRail account you're using. 
* **Project_Id:** The ID (an integer) of the TestRail project you'd like the API Fortress results to populate. 
* **Domain:** The subdomain of your TestRail instance. It's the part of the URL that comes between `https://` and `.testrail.io`

Next, we need to add the alert group to the project. Go to the projects view and click the "settings" icon on the project that you'd like to use the connector for.

<img src={useBaseUrl('img/api-fortress/2018/06/4a-1024x640.png')} alt="4a-1024x640.png"/>

In the dropdown that appears, if you begin typing the name of the alert group in the bottom field, it will populate automatically. Select it and click the green check to complete the connection process.

<img src={useBaseUrl('img/api-fortress/2018/06/Screen-Shot-2018-06-27-at-10.57.38-AM-1024x640.png')} alt="screenshot"/>

Your project in API Fortress is now connected with TestRail! It's important to note that **only test results that are generated automatically, either through the scheduler or an API call, will trigger the connector.** Manually executed tests (Run Test button for example) will not trigger the connector.

As soon as a test is triggered automatically, we will see the pass/fail result appear in the project of our choice in TestRail, with a link to the test report in API Fortress. Everything you need to know about your API test results in your TestRail instance.

<img src={useBaseUrl('img/api-fortress/2018/06/5a-1024x640.png')} alt="screenshot"/>
