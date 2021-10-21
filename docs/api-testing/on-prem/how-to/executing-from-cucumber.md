---
id: executing-from-cucumber
title: Executing from Cucumber
hide_title: true
sidebar_label: Executing from Cucumber
keywords:
    - api-testing
    - how-to
    - cucumber
    - bdd
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<img src={useBaseUrl('img/api-fortress/2019/08/cucumber-black-512.png')} alt="cucumber-black-512.png" />

# Executing from Cucumber

Cucumber is the most common behavior-driven development language for testers. This perfectly dovetails with the capabilities of API Fortress, as both are focused on making testing more intelligent and powerful without adding complication. The Cucumber tool, combined with API Fortress, is a great method of creating smart tests easily.

With the flexibility of the API Fortress, you can easily invoke API Fortress tests within your Cucumber Automation Scripts. Simply make an HTTP request to our webhook to kick off a test from your Cucumber test. Have a link to the report printed out into your console, or print the results directly on the console.

Below, we will show you how to easily integrate an API test into your Cucumber scripts.  
  

##  Walkthrough

First lets walk through the files and method used in the example:  

:::tip
You can find all of the below examples on our [Github](https://github.com/apifortress/cucumber-examples) page.
:::

### `config.json`

This is where you will configure your API Fortress Project names and their associated webhooks. This allows you to invoke the tests by simply passing the Project name in the feature file.

```json reference
https://github.com/apifortress/cucumber-examples/blob/master/config.json
```
    
### `apirun.feature`

This is where you define the scenario and the steps using the Gherkin syntax. In this file you will define the Given, When, Then steps. In this example we pass in an API Fortress Project name in the "Given" step.

```java reference
https://github.com/apifortress/cucumber-examples/blob/master/src/test/resources/hellocucumber/apirun.feature
```

### `Stepdefs.java`

In this example we are using Java, however Cucumber supports many programming languages. The example file contains a few things:
1. `Stepdefs` class
    1. In this class you will define what happens in each step from your feature file (Given, When, Then)
    2. Given - will take in the inputed Api Fortress Project name and call the `getProjInfo` method to get the webhook for this project
    3. When - will take the url of the webhook and call the `callAPI `method running all the API Fortress tests contained within that project
    4. Then - will parse through the response of the API Fortress webhook to provide the amount of failures, links to the API Fortress test results, and will indicate which tests passed and which failed
2. `getProjInfo` method - This method will parse the `config.json` file and match the Project name provided in the Given step to the Project name defined in the config file. This method will then return the associated webhook.    
3. `callAPI` method - This method will take the webhook url from the When step and make a call to the API running all API Fortress tests within that project. This method will return the response from the API.

:::note `Stepdefs.java` Class
<details><summary>Click here to see the full class</summary>

```java reference
https://github.com/apifortress/cucumber-examples/blob/master/src/test/java/hellocucumber/Stepdefs.java
```
</details>
:::