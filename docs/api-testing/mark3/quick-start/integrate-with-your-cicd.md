---
id: integrate-with-your-cicd
title: "Integrate with CI/CD Platforms"
sidebar_label: "Integrate with CI/CD"
description: "Using the API Fortress API or CLI you can easily and seamlessly integrate continuous API testing powered by API Fortress into your CI/CD pipeline."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

API Fortress is an API-first platform that was built from the ground up for deployment flexibility and non-disruption to existing workflows. Whether you are transitioning to a CI/CD pipeline or have already invested in a CI/CD pipeline, it is easy and seamless to integrate continuous API testing powered by API Fortress into your CI/CD pipeline. We offer a [scheduler](https://apifortress.com/doc/quick-start-guide-schedule-a-test/), APIs, and command-line tools to simplify integrations with your CI/CD pipeline.

## APIs & Webhooks

Find APIs on the API Fortress platform for most features, including data and test execution. You can use that API to easily run a single test, all tests, tests with specific tags, and more.

## Command-line Tool (APIF-Auto)

We have also created a command-line tool that is easy to use, and exposes the execution of APIF tests in their local environment. It is also a great way to expose results during the build phase directly in the CI platform.

- [Download APIF-Auto](/api-testing/mark2/ci/apif-auto)
- [Jenkins and APIF-Auto](/api-testing/mark2/ci/jenkins/apif-auto)
- [APIF-Auto General Docs](/api-testing/mark2/ci/apif-auto) - The command-line tool can be used with _any_ CI/CD platform! We are working on creating additional dedicated docs.

## API General Usage Guide

### Step 1 - Install an HTTP Plugin

Depending on your CI/CD platform, you may need to install a plugin that allows for HTTP requests during the build process. API Fortress will need the plugin to execute the tests.

### Step 2 - Generate an API Hook

The first step of integrating API Fortress into your CI/CD process is to grab the generated API hook for the project in question. 

To generate an API hook:

1. Go to the Settings panel in API Fortress.
   <img src={useBaseUrl('img/api-fortress/2021/03/settings.png')} alt="Settings Tab"/>
   
   You can also access this view using the gear icon from the project view.
   <img src={useBaseUrl('img/api-fortress/2021/03/gearIcon.png')} alt="Gear icon from project view"/>

1. Next, select _Connector_ then _Create Connector_
   <img src={useBaseUrl('img/api-fortress/2021/03/createConnector.png')} alt="Create Connector Buttons"/>
   
1. In the dropdown menu, select `WebHook`
   <img src={useBaseUrl('img/api-fortress/2021/03/chooseWebHook.png')} alt="Choose WebHook Option"/>
   
:::warning Example Test Disclaimer
The next steps depend on what you’re trying to test. The following directions are based on the assumption that you wish to run all of the tests in a project. You can also run a single test, or a series of tests with a certain tag. If you would like to learn more, please contact API Fortress.
:::

Consider the following example API hook:

```http request
https://mastiff.apifortress.com/app/api/rest/v3/86f81b19-2d29-4879-91d9-6dbb2271fec0861
```

The normal command to run all of the tests in the project, per the API Fortress docs is `/tests/run-all_\`, so we append this to the API call like so:

```http request 
https://mastiff.apifortress.com/app/api/rest/v3/86f81b19-2d29-4879-91d9-6dbb2271fec0861/tests/run-all
```

#### JUnit Reporting
You may need to request a JUnit output. To do that, simply collect a few query parameters. 

* First, set _sync_ to _true_ so that we can set _format_ to _JUnit_.
* Then, append `?sync=true&format=junit` to the WebHook call. 
  
This gives us the final API call:

```http request
https://mastiff.apifortress.com/app/api/rest/v3/86f81b19-2d29-4879-91d9-6dbb2271fec0861/tests/run-all/tests/run-all?sync=true&format=junit
```

Finally, save the WebHook by selecting the _Save Changes_ button:
<img src={useBaseUrl('img/api-fortress/2021/03/finishedWebHook.png')} alt="Finished WebHook"/>


Great! If we make this API call via a browser or a tool like Postman, we can see our results in JUnit. We’re almost there.

### Step 3 - Execute HTTP Calls

From your CI/CD platform’s dashboard, you’ll need to paste the webhook call to the flow. We have more specific docs available, for instance, if you wish to use [Jenkins](/api-testing/mark2/ci/jenkins/using-the-api).

The test results can then be passed along to platforms like qTest or Zephyr in your CI/CD pipeline.

## Additional Topics


- [Jenkins and API Fortress](/api-testing/mark2/ci/jenkins/using-the-api)
- [Bamboo and API Fortress](/api-testing/mark2/ci/connecting-with-bamboo)
- [Comprehensive API docs](/api-testing/mark2/api/using-the-api)
