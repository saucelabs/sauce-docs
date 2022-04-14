---
id: api-test-automation
title: Different ways to Automate your Tests
sidebar_label: API Testing Automation
description: "The API Testing platform allows you to automate and monitor your testing strategy"
---

import useBaseUrl from '@docusaurus/useBaseUrl';

In API Testing platform there are different ways you can automate and monitor your tests results.

## What You'll Need

* An existing API Testing Project. For details on how to create one, see the [Quickstart](/api-testing/quickstart/) guide.

## Scheduling

The **Schedule** tool, accessible from within each test, allows you to schedule API tests to run as often as you’d like.

Learn more on how to [Schedule a Test](/api-testing/schedule-test)

## CI/CD pipeline

You can also execute your tests in a pipeline using our API Testing CLI tool, `apifctl`

Learn more on how to use the [apifctl tool](/api-testing/integrations/apifctl-cicd-integration) 

## APIs

Our API methods allow you to interact with Sauce Labs API Testing functionality. You can execute tests, view analytics, retrieve project information, and more.

See the full list of [available endpoints](/dev/api/api-testing)

## Connectors

Our **Connector** feature enables you to track your Sauce Labs API Testing results in third-party apps outside of our platform.

Learn more on how to [Create a connector](/api-testing/integrations/pagerduty-webhooks)
