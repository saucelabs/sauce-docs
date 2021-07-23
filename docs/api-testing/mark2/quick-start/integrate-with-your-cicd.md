---
id: integrate-with-your-cicd
title: "Integrate with CI/CD Platforms"
sidebar_label: "Integrate with CI/CD"
description: "Using the API Fortress API or CLI you can easily and seamlessly integrate continuous API testing powered by API Fortress into your CI/CD pipeline."
---

import useBaseUrl from '@docusaurus/useBaseUrl';

API Fortress is an API-first platform that was built from the ground up for deployment flexibility and non-disruption to existing workflows. Whether you are transitioning to a CI/CD pipeline or have already invested in a CI/CD pipeline, it is easy and seamless to integrate continuous API testing powered by API Fortress into your CI/CD pipeline. We offer a [scheduler](https://apifortress.com/doc/quick-start-guide-schedule-a-test/), APIs, and command-line tools to simplify integrations with your CI/CD pipeline.

## APIs & Webhooks

Find APIs on the API Fortress platform for most features, including data and test execution. You can use that API to easily run a single test, all tests, tests with specific tags, and more. Learn more about this:

- [Jenkins and API Fortress](/api-testing/mark2/ci/jenkins/using-the-api)
- [Bamboo and API Fortress](/api-testing/mark2/ci/connecting-with-bamboo)
- [Comprehensive API docs](/api-testing/mark2/api/using-the-api)
- Search below to the _General Guide_ for all other CI platforms:  
    - Azure DevOps Server
    - TravisCI
    - TeamCity
    - CircleCI
    - Gitlab CI
    - Buddy
    - Wercker
    - And more!

## Command-line Tool (APIF-Auto)

We have also created a command-line tool that is easy to use, and exposes the execution of APIF tests in their local environment. It is also a great way to expose results during the build phase directly in the CI platform.

- [Download APIF-Auto](/api-testing/mark2/ci/apif-auto)
- [Jenkins and APIF-Auto](/api-testing/mark2/ci/jenkins/apif-auto)
- [APIF-Auto General Docs](/api-testing/mark2/ci/apif-auto) - The command-line tool can be used with _any_ CI/CD platform! We are working on creating additional dedicated docs.

## API General Usage Guide

### Step 1 - Install an HTTP Plugin

Depending on your CI/CD platform, you may need to install a plugin that allows for HTTP requests during the build process. API Fortress will need the plugin to execute the tests.

### Step 2 - Generate an API Hook

The first step of integrating API Fortress into your CI/CD process is to grab the generated API hook for the project in question. To do so, go to the Settings panel in API Fortress. This view, seen below, can be accessed from anywhere in the application by clicking the gear icon in the top right corner. Please note that you need Manager access to generate a webhook. From Settings, click the API Hooks section to generate the hook for your project.

<img src={useBaseUrl('img/api-fortress/2018/04/hook.gif')} alt="Hook Gif"/>

The next step depends on what you’re trying to test. The following directions are based on the assumption that you wish to run all of the tests in a project. You can also run a single test, or a series of tests with a certain tag. If you would like to learn more, please contact API Fortress.

As it stands, our API hook is as follows:

```http request
https://mastiff.apifortress.com/app/api/rest/v3/86f81b19-2d29-4879-91d9-6dbb2271fec0861
```

The normal command to run all of the tests in the project, per the API Fortress docs is _/tests/run-all_, so we append this onto the end of the API call. You may need to request a JUnit output. To do that, simply collect a few query parameters. First, set _sync_ to _true_ so that we can set _format_ to _JUnit_. 

In short, we need to append `?sync=true&format=junit` to the webhook call. That gives us the final API call:

```http request 
https://mastiff.apifortress.com/app/api/rest/v3/86f81b19-2d29-4879-91d9-6dbb2271fec0861/tests/run-all?sync=true&format=junit
```

Great! If we make this API call via a browser or a tool like Postman, we can see our results in JUnit. We’re almost there.

### Step 3 - Execute HTTP Calls

From your CI/CD platform’s dashboard, you’ll need to paste the webhook call to the flow. We have more specific docs available, for instance, if you wish to use [Jenkins](/api-testing/mark2/ci/jenkins/using-the-api).

The test results can then be passed along to platforms like qTest or Zephyr in your CI/CD pipeline.
