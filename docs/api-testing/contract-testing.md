---
id: contract-testing
title: API Contract Testing
sidebar_label: API Contract Testing
---

import useBaseUrl from '@docusaurus/useBaseUrl';

An API conversation consists of:
* API consumer (client side) performing a request
* API producer (server side) responding to that request<br/><img src={useBaseUrl('img/api-fortress/2022/03/api-conversation.png')} alt="API Conversation and Contract" width="300"/>

The conversation needs to follow specific rules that the API producer and API consumer must agree upon. The formal description of these rules is the contract, which is generally presented as a specification file such as [OpenAPI](https://swagger.io/docs/specification/about/).

If this contract is broken by either party, it can lead to bugs and malfunctions. _API Contract Testing_ is the act of validating that the API producer and the API consumer are respecting the contract. That’s where Sauce Labs API Testing comes in.

## What You'll Need
* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
* An existing API Testing Project. For details on how to create one, see [API Testing Quickstart](/api-testing/quickstart/).


## Use Cases

Contract testing is a fast, lightweight form of API testing that strictly checks the content and format of requests and responses. This method is ideal for:
* Testing APIs during the early stages of design and development
* Organizations creating APIs that are internal and/or have limited number of consumers

This is typically done in a protected, static environment, where tests are run against mocked (not live) APIs, allowing contract tests to compare isolated API responses to the contract for immediate attention if something is wrong.

<img src={useBaseUrl('img/api-fortress/2022/03/api-consumer-contract.png')} alt="API Conversation and Contract" width="600"/>

## Testing the API Producer Side
To test the producer (server) side:
1. From an API Testing Project, go to the HTTP Client.
2. Import an OpenAPI specification file (v3.0 or higher).
3. From your list of **Snapshots**, choose the API call you'd like to test by clicking on it. The HTTP method, request URL, and anything else specified in the spec file will populate in the HTTP Client fields.
4. Click **Send** to send your request.
5. Click **Generate Test**.

Sauce Labs API Testing will validate the API producer side by creating a contract tests from your OpenAPI spec file.
<img src={useBaseUrl('img/api-fortress/2022/03/api-producer-contract.png')} alt="API Conversation and Contract" width="500"/>

After you generate your test, you'll be taken to the **Compose** tool. Optionally, you can add further [assertions](/api-testing/composer/) to your test, which will perform functional end-to-end testing on top of your contract tests and fully validate the APIs are working as intended.

<details><summary>What is functional testing?</summary>
<i>Functional (end-to-end) testing</i> is a more robust, data-driven method that checks the API logic and consumer flows. If your organization is creating a large-scale API program that will have public APIs with third-party consumers, for example, functional testing is ideal. That's where adding functional testing to complement your contract testing strategy can give your development team insight into how accurately your APIs render, and ultimately bring products to market faster.
</details>

You can view your contract test's results and events on your [Project Dashboard](/api-testing/project-dashboard/).

## Testing the API Consumer Side
To test the API consumer (client) side:
1. From a command-line terminal, start [Piestry](/api-testing/mocking/), our API mocking server, with the same OpenAPI spec used to test the API producer side. This will activate the contract testing functionality and bind a series of endpoints with a Sauce Labs API Testing project. Use the launch command listed under [Usage](/api-testing/mocking/#usage).
2. Start our [API Testing Logger](/api-testing/logger/) by issuing:
  ```bash
  docker run -v "$(pwd)/myspec:/specs" \
  -p 5000:5000 quay.io/saucelabs/piestry \
  -u /specs/myspec.yaml \
  --logger https://{SAUCE_USERNAME}:{SAUCE_ACCESS_KEY}@{SAUCE_API_ENDPOINT}/{hook_id}/insights/events/_contract
  ```

  The execution will create a [log](/api-testing/project-dashboard/#test-logs) in your [Project Dashboard](/api-testing/project-dashboard/) that's specific to contract testing.

  Alternatively, you can run the command as a [build](/api-testing/project-dashboard/#test-build-reports) by issuing the following:
  ```bash
  docker run -v "$(pwd)/myspec:/specs" \
  -p 5000:5000 quay.io/saucelabs/piestry \
  -u /specs/myspec.yaml \
  --logger https://{SAUCE_USERNAME}:{SAUCE_ACCESS_KEY}@{SAUCE_API_ENDPOINT}/{hook_id}/insights/events/_contract?buildId=build123
  ```

  Replace `build123` with your preferred build name. This execution will generate a build in your [Project Dashboard](/api-testing/project-dashboard/), in addition to starting the Logger.

:::tip
Use the [`--validate-request`](/api-testing/mocking/#validate-request) switch to ensure your requests are compliant with the schema.
:::

3. Run your unit tests against your client software, making sure the API URLs are pointing to the mocks provided by [Piestry](/api-testing/mocking/).

Sauce Labs API Testing will validate that the API consumer side has complied with the contract specifications.

<img src={useBaseUrl('img/api-fortress/2022/03/api-testing-overview.png')} alt="API Conversation and Contract" width="600"/>
