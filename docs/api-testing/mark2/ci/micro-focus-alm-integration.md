---
id: micro-focus-alm-integration
title: "Micro Focus ALM - Integrate and See Results"
sidebar_label: Micro Focus ALM
keywords:
    - cicd
    - api-fortress
    - micro-focus-alm
---

One of the key benefits of API Fortress, is the ability to deeply integrate the platform with the tools you use today. Microfocus ALM (application lifecycle management) is another platform that is easy for us to integrate with. There are two options:

1. Directly
2. Through a CI/CD Platform

## Direct Integration with Micro Focus ALM

The results of an API Fortress test can be returned directly into ALM. Micro Focus has clear instructions on that method here::

[Microfocus ALM Documentation (Add Automated Test Results)](https://admhelp.microfocus.com/octane/en/latest/Online/Content/API/how_test-results.htm)

## Using a CI/CD Platform

The second method of adding API Fortress test results to Microfocus ALM is by way of CI/CD platform. API Fortress integrates with any CI platform, and when that CI platform is also connected with ALM you can view the results in your Micro Focus instance.

First, you need to connect your CI/CD platform to ALM, which is detailed at the ALM docs [here](https://admhelp.microfocus.com/octane/en/latest/Online/Content/GetStarted/GetStarted.htm).

Next, The documentation for adding API Fortress to your CI/CD workflow can be found here:

- [APIF-Auto](/api-testing/mark2/ci/apif-auto) - Preferred Method
- [API Fortress and CI/CD (General)](/api-testing/mark2/ci/jenkins/using-the-api)

More Details:

- [APIF-Auto and Jenkins](/api-testing/mark2/ci/jenkins/apif-auto)
- [API Fortress and Jenkins](/api-testing/mark2/ci/jenkins/using-the-api)
- [API Fortress and Bamboo](/api-testing/mark2/ci/connecting-with-bamboo)
