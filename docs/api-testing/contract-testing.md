---
id: contract-testing
title: API Contract Testing
sidebar_label: API Contract Testing
---

import useBaseUrl from '@docusaurus/useBaseUrl';

An API conversation consists of:
* API consumer (client side) performing a request
* API producer (server side) responding to that request

The conversation needs to follow specific rules that the API producer and API consumer must agree upon. The formal description of these rules is the contract, which is generally presented as a specification file such as [OpenAPI](https://swagger.io/docs/specification/about/).

<img src={useBaseUrl('img/api-fortress/2022/03/api-conversation.png')} alt="API Conversation and Contract" width="300"/>

If this contract is broken by either party, it can lead to bugs and malfunctions. _API Contract Testing_ is the act of validating that the API producer and the API consumer are respecting the contract.

## What You'll Need
* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
* An existing API Testing Project. For details on how to create one, see [API Testing Quickstart](/api-testing/quickstart/).

## Use Cases

Contract testing is a fast, lightweight form of API testing that strictly checks the content and format of requests and responses. This method is ideal for organizations that are:
* Testing APIs during the early stages of design and development
* Creating APIs that are internal and/or have limited number of consumers

<img src={useBaseUrl('img/api-fortress/2022/03/api-consumer-contract.png')} alt="API Conversation and Contract" width="600"/>

## Testing the API Producer Side

Sauce Labs API Testing will validate the API producer (server) side by creating a contract test from your OpenAPI spec file.
<img src={useBaseUrl('img/api-fortress/2022/03/api-producer-contract.png')} alt="API Conversation and Contract" width="500"/>

1. From an API Testing Project, go to the HTTP Client.
2. Import an OpenAPI specification file (v3.0 or higher).
3. From your list of **Snapshots**, choose the API call you'd like to test by clicking on it. The HTTP method, request URL, and anything else specified in the spec file will populate in the HTTP Client fields.
4. Click **Send** to send your request.
5. Click **Generate Test**.

  <p>After you generate your test, you'll be taken to the <strong>Compose</strong> tool. This component, <small><strong>ASSERT VALID JSON SCHEMA</strong></small>, is what we use to store the contract test.</p>
  <img src={useBaseUrl('img/api-fortress/2022/03/assertJSON.png')} alt="API Conversation and Contract" width="600"/>

6. <p>Double-click on the <small><strong>ASSERT VALID JSON SCHEMA</strong></small> component to expand and see the contract validation details.</p>

  <img src={useBaseUrl('img/api-fortress/2022/03/assertJSON_expanded.png')} alt="API Conversation and Contract" width="600"/>

Optionally, you can add further [assertions](/api-testing/composer/) here to your test, which will perform functional testing on top of your contract tests and fully validate the APIs are working as intended.

<details><summary>What is functional testing?</summary>
<i>Functional testing</i> is a more robust, data-driven method that checks the API logic and consumer flows. If your organization is creating a large-scale API program that will have public APIs with third-party consumers, for example, functional testing is ideal. That's where adding functional testing to complement your contract testing strategy can give your development team insight into how accurately your APIs render, and ultimately bring products to market faster.
</details>

After you've run your tests as part of a build (i.e., as part of your CI pipeline) or as a [scheduled test](/api-testing/schedule-test/), you can view your contract test results and events on your [Project Dashboard](/api-testing/project-dashboard/).


## Testing the API Consumer Side

With Sauce Labs API Testing, you'll test the API consumer (client) side in a protected, static environment, where tests are run against mocked (not live) APIs. This allows contract tests to compare isolated API responses to the contract for immediate attention if something is wrong.

1. You'll first need to [generate a webhook URL](/api-testing/integrations/apifctl-cicd-integration/#creating-webhooks) for your API Testing Project, if you don't have one already.

2. From a command-line terminal, start [Piestry](/api-testing/mocking/), our API mocking server, by issuing the launch command below. The `--logger` value will be the webhook URL you generated in the previous step, appended with `/insights/events/_contract`.  
  ```bash
  docker run -v "$(pwd)/myspec:/specs" \
  -p 5000:5000 quay.io/saucelabs/piestry \
  -u /specs/myspec.yaml \
  --logger https://{SAUCE_USERNAME}:{SAUCE_ACCESS_KEY}@{SAUCE_API_ENDPOINT}/{hook_id}/insights/events/_contract
  ```

  <details><summary>Want to run Piestry as part of a build?</summary>

  Alternatively, you can run the command as a [build](/api-testing/project-dashboard/#test-build-reports) by issuing the following launch command instead of the above:
  ```bash
  docker run -v "$(pwd)/myspec:/specs" \
  -p 5000:5000 quay.io/saucelabs/piestry \
  -u /specs/myspec.yaml \
  --logger "https://{SAUCE_USERNAME}:{SAUCE_ACCESS_KEY}@{SAUCE_API_ENDPOINT}/{hook_id}/insights/events/_contract?buildId=build123"
  ```

  Here, the URL is appended by the `buildId` parameter.
  </details>

  Be sure to use the same OpenAPI spec used to test the API producer side. This will activate the contract testing functionality and bind a series of endpoints with a Sauce Labs API Testing project.

  :::tip
  Use the [`--validate-request`](/api-testing/mocking/#validate-request) switch to ensure your requests are compliant with the schema.
  :::

3. At this point, Piestry will have mocked all of the APIs described in the contract. You can now perform API calls to this mock server instead of the actual service. In a production scenario, you would likely run unit tests in your code that will trigger API calls, making sure that instead of the actual service, the mock is being used. As you do that, Piestry will validate the contract for the inbound API calls. Every validated call will produce an entry in the dashboard so you can review the outcome of the test.

4. View the results for both the API Producer and API Consumer tests by checking your Project's [**Dashboard**](/api-testing/project-dashboard/), where you'll see a [log](/api-testing/project-dashboard/#test-logs) specific to contract testing. The report document for the contract test will detail how the request and response appear during the transaction and the nature of any test failures, if applicable.

Sauce Labs API Testing will validate that the API consumer side has complied with the contract specifications.

<img src={useBaseUrl('img/api-fortress/2022/03/api-testing-overview.png')} alt="API Conversation and Contract" width="600"/>
