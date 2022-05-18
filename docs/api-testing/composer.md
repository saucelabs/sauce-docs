---
id: composer
title: Writing API Tests with the Composer
sidebar_label: Using the Composer
description: Quickly generate and build functional API tests
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The API Testing Composer enables you to quickly generate API functional tests (no coding experience required) and/or code them from scratch. You can reuse these tests as end-to-end integration tests and load (stress) tests. In turn, load tests can be reused as monitors for performance testing.

## What You'll Need
* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
* An existing API Testing Project. For details on how to create one, see [API Testing Quickstart](/api-testing/quickstart/).


## Creating a Test with the Composer

### Create a Test

1. In Sauce Labs, click **API Testing**.

  <img src={useBaseUrl('/img/api-testing/api-testing-nav.png')} alt="Navigating to API Testing" width="400"/>

2. On the **Projects** page:
  * If you have no tests or projects yet, in the **Write your own test** box, click **Use Composer**.

  <img src={useBaseUrl('/img/api-testing/composer-nav.png')} alt="Navigating to the Composer" width="700"/>

  * If you have a project but no tests, on the **Projects** page, click **Write your own test**.

  * If your project has tests, click **Create Test** and then click **From Scratch**.

  <img src={useBaseUrl('/img/api-testing/test-create-from-scratch-nav.png')} alt="Navigating to the New Test window" width="350"/>

4. In the **New Test** box, enter a test name, test description (optional), and tags (optional), and then click **Create Test**.

<img src={useBaseUrl('/img/api-testing/test-create-new-test.png')} alt="New Test window" width="350"/>

:::note
You can use either the **Visual** composer (guides you through building components, with no coding required) or the **Code** composer (requires you to write code from scratch). For this guide, we're using **Visual**.
:::

For more information, see [Input Sets](/api-testing/composer/#input-sets) and [Visual View and Code View](/api-testing/composer/#visual-view-and-code-view).

### Edit a Test
To edit a test at any time, on the **Projects** page, on the **Tests** tab, hover over a test name and then click **Edit Test**.

<img src={useBaseUrl('/img/api-testing/edit-test-nav.png')} alt="Navigating to the test editor" width="300"/>

### Add Test Components
When test components are combined, they act as our test logic. There are three component types available in API Testing:
  * [I/O Request Test Components](/api-testing/composer/io-components)
  * [Assertion Test Components](/api-testing/composer/assertion-components/)
  * [Logical Test Components](/api-testing/composer/logical-components/)

#### Add an I/O Request Test Component
To create a simple `GET` request and validate that response is correct:
  1. In API Testing, on the **Compose** page, click the **Add component** button.

  <img src={useBaseUrl('/img/api-testing/add-component-nav.png')} alt="Navigating to the Add component screen" width="600"/>

  2. In the list of component options, click the **GET** component.

  <img src={useBaseUrl('/img/api-testing/get-request-nav.png')} alt="Navigating to the GET request window" width="400"/>

  3. In the **GET request** window, in the **Url** field, enter **ht<span>tps://</span>api.us-west-1.saucelabs.com/rest/v1/public/tunnels/info/versions**.

  This endpoint will return a JSON response body.
  4. In the **Variable** field, enter **payload**. This variable stores the response, so it can now be referred to as **payload**.

  <img src={useBaseUrl('/img/api-testing/get-request-window.png')} alt="Editing in the GET request window"/>

  5. Leave the rest of the fields blank and then click the **Confirm changes** icon.

  <img src={useBaseUrl('/img/api-testing/get-request-confirm-changes.png')} alt="Confirm changes icon" width="200"/>

  The result should look like the following:

  <img src={useBaseUrl('/img/api-testing/get-request-final.png')} alt="What the GET request should look like" width="600"/>

For more information, see [I/O Request Test Components](/api-testing/composer/io-components/).

#### Add an Assertion Component
1. In API Testing, on the **Compose** page, click the **Add component** button.

  <img src={useBaseUrl('/img/api-testing/add-component-nav.png')} alt="Navigating to the Add component screen" width="600"/>

2. In the list of component options, click the **Assert Exists** component.

  <img src={useBaseUrl('/img/api-testing/assert-exists-nav.png')} alt="Navigating to the Assert exists window"/>

3. In the **Assert exists** window, in the **Expression** field, enter `payload.downloads`. This expression checks for the **downloads** field in the json response body.

4. Leave the rest of the fields blank and click the checkmark to confirm the changes.

  <img src={useBaseUrl('/img/api-testing/assert-exists-window.png')} alt="Confirm changes"  width="600"/>

5. The result should look like the following:

  <img src={useBaseUrl('/img/api-testing/assert-exists-final.png')} alt="What the Assert request should look like" width="500"/>

For more information, see [Assertion Test Components](/api-testing/composer/assertion-components/).

#### Additional Example
In the following example, the expression checks if the `download_url` value inside the Linux object is a valid URL.

1. In API Testing, on the **Compose** page, click the **Add component** button.

2. In the list of component options, click the **Assert Is** component.

3. In the **Assert is** window, in the **Expression** field, enter `payload.downloads`. This expression checks for the **downloads** field in the json response body.

4. Leave the rest of the fields blank and click the checkmark to confirm the changes.

  <img src={useBaseUrl('/img/api-testing/assert-exists-window-2.png')} alt="Confirm changes" width="600"/>

5. The result should look like the following:

  <img src={useBaseUrl('/img/api-testing/assert-exists-final-2.png')} alt="What the Assert request should look like" width="500"/>

### Run the Test
In the Composer, click **Run**.

<img src={useBaseUrl('/img/api-testing/run-test-save-run.png')} alt="Save and Run icons in the Composer" width="500"/>

All test runs appear to the right of the Composer, under the test details and environment sections.

<img src={useBaseUrl('/img/api-testing/test-runs.png')} alt="Test Runs in the Composer" width="350"/>

### Review Test Results
To view your results, in the Composer, in the **Test Runs** list, click the name of the test. This will open the **Test Report Details**. For more information, see [Test Outcome Report](/api-testing/project-dashboard/#test-outcome-report).

## Compose a Request Body
There are several ways you can compose a request body in Sauce Labs API Testing, ranging from simple to complex.

:::note
The included examples use the **POST** method, but all examples can be applied to other methods.
:::

### Copy and Paste the Body
In this method, you copy an existing body and paste it into the call.

1. In the Composer, add a `POST` component and enter the URL and all of the required fields.
    * Url (the url of the resource you want to test) - `https://domain/endpoint`
    * Variable (the name of the variable that contains the response) - `payload`
    * Mode (the response type) - `json`

      <img src={useBaseUrl('/img/api-testing/post-request-window.png')} alt="The POST request window"/>

2. At the bottom of the **POST request** window, click **Add Body**.

    <img src={useBaseUrl('/img/api-testing/post-request-add-body-nav.png')} alt="Navigating to the Post body window"/>

3. Use the following in the Post body fields:
    * Content-Type - `application/json`
    * Content (the body required in your call) - `{"method":"post","url":"http://www.testme.com/api/run/test"}`

      <img src={useBaseUrl('/img/api-testing/post-body-window.png')} alt="The Post body window"/>

4. Click the **Confirm changes** icon and proceed with the test.

### Use Variables in the Request Body

1. In the Composer, add a `POST` component and enter the URL and all of the required fields.
    * Url (the url of the resource you want to test) - `https://domain/endpoint`
    * Variable (the name of the variable that contains the response) - `payload`
    * Mode (the response type) - `json`

      <img src={useBaseUrl('/img/api-testing/post-request-window.png')} alt="The POST request window"/>

2. At the bottom of the **POST request** window, click **Add Body**.

    <img src={useBaseUrl('/img/api-testing/post-request-add-body-nav.png')} alt="Navigating to the Post body window"/>

3. Select the relevant **Content-Type** and enter the following in the **Content** field:

    ```json   
    {
     "user": "${user}",
     "password": "${password}",
     "url": "http://www.testme.com/api/run/test"
    }
    ```

    <img src={useBaseUrl('/img/api-testing/post-body-window-2.png')} alt="The Post body window"/>

    `user` and `password` are not directly passed in the body, but they are variables defined in a data set or stored in the vault (or environments).

4. Click the **Confirm changes** icon and proceed with the test.

### Use a Variable from Another Call

1. Add the call to retrieve the variable from. The following is an example of a common scenario in which you need to perform a login for authentication and retrieve the authentication token required for the following call.
    * Url (the url of the resource you want to test) - `https://domain/login`
    * Variable (the name of the variable that contains the response) - `payload`
    * Mode (the response type) - `json`

      <img src={useBaseUrl('/img/api-testing/get-request-window-2.png')} alt="GET request window"/>

2. At the bottom of the request window, click **Add Header**.

      <img src={useBaseUrl('/img/api-testing/get-request-add-header-nav.png')} alt="Navigating to the Header window"/>

3. In the **Header** window, enter the following:
    * Name - `Authorization`
    * Value (from encoding `username:password` in Base64) - `Basic YWRtaW46cGFzc3dvcmQ=`

      <img src={useBaseUrl('/img/api-testing/get-request-header-window.png')} alt="The Header window"/>

4. Click the **Confirm changes** icon.

5. The response payload from the login call will contain the desired token. Let's use the following as an example response.

    <img src={useBaseUrl('/img/api-testing/response-token.png')} alt="An example response"/>

6. Save the token as a variable using a `SET` component.
    * Var (the variable name) - `token`
    * Variable mode (the variable type) - `String`
    * Value (retrieves the value from the previous payload- `${payload.access_token}`

      <img src={useBaseUrl('/img/api-testing/set-variable-window.png')} alt="The SET Variable window"/>

7. Once the token has been saved as a variable, add the second call and use that token in the request body.
    * Content-Type - `application/json`
    * Content - `{"token":"${token}"}`

      <img src={useBaseUrl('/img/api-testing/post-request-body-token.png')} alt="POST request body"/>

## Using an Object from Another Call

Using an object from another call is a more complex method. Scenarios in which you might use this method include when you need to use an object retrieved from a previous call in the body of a subsequent call.

1. Perform the call you retrieve the object from.

    <img src={useBaseUrl('/img/api-testing/get-request-window-3.png')} alt="GET request window"/>

  The response payload from the call:

    ```json
    {
      "id":123,
      "items":[
          {
            "id":11,
            "name":"stuff1"
          },
          {
            "id":12,
            "name":"stuff2"
          },
          {
            "id":13,
            "name":"stuff3"
          }
      ]
    }
    ```  

2. In this example, you need the object `items` as the body in the subsequent call. So, as a second call, add a `POST` and enter the following as body:

  ```json
  {"items":"${searchPayload.items.asJSON()}"}
  ```

    <img src={useBaseUrl('/img/api-testing/post-body-window-3.png')} alt="POST request body"/>

3. Continue with the test.

## Creating a New Structure to Add as a Body

This method can be used when you need to create a new structure to add as a body, using data from a previous call.

1. Perform the call that retrieves the data you are using. In the following example, using a `GET` returns an array of items.

    <img src={useBaseUrl('/img/api-testing/get-request-window-4.png')} alt="The GET request window"/>

2. The response payload:

  ```json
  {
    "items":[
        {
          "id":11,
          "price":5.99
        },
        {
          "id":12,
          "price":6.99
        },
        {
          "id":13,
          "price":10.99
        },
        {
          "id":14,
          "price":15.99
        }
    ]
  }
  ```  

3. Create the new data structure by adding a `SET` component.
    * Var (the variable name) - `itemsAvailable`
    * Variable mode (the variable type) - `Language`
    * Lang - `Javascript`
    * Content - `payload.items.forEach(function (item) {  item.currency = "$"; }); return payload;`

      <img src={useBaseUrl('/img/api-testing/set-variable-window-2.png')} alt="The SET Variable window"/>

4. Add the `POST` and add the new structure as the `POST` request body.

    <img src={useBaseUrl('/img/api-testing/post-body-window-4.png')} alt="The POST body window" width="600"/>

5. Continue with the test.

    <img src={useBaseUrl('/img/api-testing/new-structure-body.png')} alt="A new structure added as a body" width="600"/>

## Dynamic Dates
Instead of entering dates as static values, which may need to be updated periodically, you can create dynamic dates.

### Create a Future Date

1. Open the Composer and add a **Set** component.

2. Enter/select the following:
    * Var (the variable name) - `futureDate`
    * Variable mode (the variable type) - `String`
    * Value - `${D.format(D.plusDays(D.nowMillis(),35), 'yyyy-MM-DD')}`

      <img src={useBaseUrl('/img/api-testing/create-future-date-variable.png')} alt="The SET Variable window"/>

    * `D.nowMillis()` - Returns the current Unix epoch in milliseconds.
    * `D.plusDays()` - Returns the provided milliseconds, plus the provided number of days (in the example, 35 days were added to today's date).
    * `D.format()` - Creates a timestamp with the given format, using the current timezone (in the example, `yyyy-MM-DD`).

    ```js
    ${D.format(D.plusDays(D.nowMillis(),35), 'yyyy-MM-DD')}
    ```

3. Invoke the variable in your test.

### Create a Past Date

Follow the steps for [Create a Future Date](#create-a-future-date), but replace the string with the following:
  * `D.minusDays()` - Returns the provided milliseconds, minus the provided number of days (in the example, 35 days were subtracted from today's date).

  ```js
  ${D.format(D.minusDays(D.nowMillis(),35), 'yyyy-MM-DD')}
  ```

### Create a Date with a Time Zone

To create a date based on a specified time zone:
  * `D.format()` - Creates a timestamp with the given format, based on the provided time zone ID (the example uses the same date as before, but uses `New York` as the time zone).

  ```js
  ${D.format(D.plusDays(D.nowMillis(),35), 'yyyy-MM-DD','America/New_York')}
  ```

### Convert a Timestamp in Unix Time in Milliseconds

To convert a timestamp from a payload response to milliseconds:
  * `D.parse()` - Parses the provided timestamp and converts it to milliseconds.

  ```js
  ${D.parse(1649094357)}
  ```

For more information, see [Expression Language Extensions](/api-testing/composer/logical-components/#expression-language-extensions).

## Integration Tests

Integration testing is critical for creating a strong API testing strategy. An integration test allows you to create end-to-end tests that resemble common user flows. While only testing individual endpoints is a good start, this method will miss a large number of problems that occur when all services need to work together.

### Token-based Authentication API

Company A has an authentication server. This server, when given the proper user credentials, returns an authentication token. This token is required for all other calls throughout the platform’s API environment. Without this first API call, none of the other API calls can work.

1. To get the token, make a `POST` call to the authorization server.

  <img src={useBaseUrl('/img/api-testing/int-getting-token.png')} alt="POST request to authentication server" width="600"/>

  The request body is the user ID and password. Given proper credentials, the authentication server will return a user token.

  <img src={useBaseUrl('/img/api-testing/int-token.png')} alt="The user token" width="400"/>

  Use this token to make further calls to the application.

2. Add a `Set (variable)` component by entering/selecting the following in the Composer:
    * Var (the variable name) - `access_token`
    * Variable mode (the variable type) - `String`
    * Value - `${authPayload.access_token}`

    <img src={useBaseUrl('/img/api-testing/int-assign-token.png')} alt="Setting the variable"/>

  This step takes the `access_token` variable in the `authPayload` response, and sets it as `access_token`; the response body from the original post call was saved to a variable called `authPayload`. The access key for the token is `access_token`, which can be found by calling `authPayload.access_token`.

  :::note
  The dollar sign and brackets are necessary when referencing variables so that Sauce Labs API Testing knows to interpret what’s between the brackets instead of using it literally.
  :::

  Variables are used to store data temporarily for a test, but you can use the Sauce Labs API Testing Vault for permanent variables. For more information, see [Creating Reusable Variables and Snippets with the Vault](/api-testing/vault)).

3. Make follow-up calls.

  In the following example, the API has a cart function that requires a user token to add items to a cart or view items currently in the cart. Use a `PUT` request to the cart endpoint to update the cart. Use the access token granted by the authentication server to add items to a cart by setting the `token` header to `${access_token}`.

  <img src={useBaseUrl('/img/api-testing/int-set-token-header.png')} alt="Setting the token header"/>

  You can also reuse access tokens:

  <img src={useBaseUrl('/img/api-testing/int-reuse-tokens.png')} alt="Reusing tokens" width="600"/>

###  Test Interactions between Endpoints

In the following example, there is an API endpoint that produces an array of all the available products and another endpoint that shows the details of a specific product based on its ID.

  ```http request
  http://demoapi.apifortress.com/api/retail/product
  http://demoapi.apifortress.com/api/retail/product/${id}
  ```

To create an integration test to test the interaction between the endpoints:

  1. Call the product listing endpoint and assign the response to the `productsPayload` variable.

  2. Add an `each` assertion and reference the `productsPayload.products` object.

  :::note
  In a scenario in which the response contains many products, it may be useful to pick a few at random by using `pick(n)`.
  :::

  3. Test the response payload for the endpoint.

  4. Add a new `Set (variable)` assertion to set the `id` variable as every single `productsPayload.product` that is returned. In the following example, the string is `${_1.id}`. The system uses `_1` automatically when recognizing a subroutine, which makes it easier when there are multiple sub-levels.

    <img src={useBaseUrl('/img/api-testing/int-test-endpoints.png')} alt="Testing interactions between endpoints" width="600"/>

  5. Create a **`GET` request** to the product details endpoint, using the new `id` variable as the **id** parameter. Variables last through the entire test unless overwritten.

  6. Test the response payload for the endpoint.

    <img src={useBaseUrl('/img/api-testing/int-test-response-payload.png')} alt="Testing the response payload"/>

  ```xml
  <get url="http://demoapi.apifortress.com/api/retail/product" params="[:]" var="productsPayload" mode="json">
    <header name="key" value="ABC123"/>
  </get>
  <assert-is expression="productsPayload" type="array" mode="all" comment="payload must be an array"/>
  <comment>
    <![CDATA[pick randomly 5 items from the payload response]]>
  </comment>
  <each expression="productsPayload.pick(5)">
      <comment>
          <![CDATA[product id is: ${_1.id} and product name is: ${_1.name}]]>
      </comment>
      <assert-is expression="_1.id" type="integer" mode="all" comment="id must be an integer value"/>
      <set var="id" value="${_1.id}" lang="java"/>
      <assert-exists expression="_1.name"  mode="all" comment="name must exists"/>
      <assert-is expression="_1.price" type="float" mode="all" comment="price must be a float number"/>
      <assert-exists expression="_1.category"  mode="all" comment="category must exists"/>
      <assert-exists expression="_1.description"  mode="all" comment="description must exists"/>
      <assert-is expression="_1.quantity" type="integer" mode="all" comment="quantity must be an integer value"/>
      <assert-greater expression="_1.quantity" value="0" type="integer" mode="all" comment="quantity must be greater than 0"/>
      <assert-is expression="_1.imageURL" type="url" mode="all" comment="imageURL must be a valid url value"/>
      <assert-is expression="_1.color" type="array" mode="all" comment="color must be an array"/>
      <assert-exists expression="_1.createdAt"  mode="all" comment="createdAt must exists"/>
      <assert-exists expression="_1.updatedAt"  comment="updateAt must exists"/>
      <comment>
          <![CDATA[get product details]]>
      </comment>
      <get url="http://demoapi.apifortress.com/api/retail/product/${id}" params="[:]" var="productPayload" mode="json">
          <header name="key" value="ABC123"/>
      </get>
      <assert-exists expression="productPayload"  mode="all" comment="payload must exist, if not, test does not need to be executed" stoponfail="true"/>
      <comment>
          <![CDATA[product id is: ${productPayload.id} and product name is: ${productPayload.name}]]>
      </comment>
      <assert-equals expression="productPayload.id" value="${id}" type="integer" mode="all" comment="id is the same as the one from the previous call"/>
      <assert-is expression="productPayload.id" type="integer" mode="all" comment="id must be an integer value"/>
      <assert-exists expression="productPayload.name"  mode="all" comment="name must exists"/>
      <assert-is expression="productPayload.price" type="float" mode="all" comment="price must be a float number"/>
      <assert-exists expression="productPayload.category"  mode="all" comment="category must exists"/>
      <assert-exists expression="productPayload.description"  mode="all" comment="description must exists"/>
      <assert-is expression="productPayload.quantity" type="integer" mode="all" comment="quantity must be an integer value"/>
      <assert-greater expression="productPayload.quantity" value="0" type="integer" mode="all" comment="quantity must be greater than 0"/>
      <assert-is expression="productPayload.imageURL" type="url" mode="all" comment="imageURL must be a valid url value"/>
      <assert-is expression="productPayload.color" type="array" mode="all" comment="color must be an array"/>
      <each expression="productPayload.color">
          <assert-exists expression="_2"  mode="all" comment="color array should contain some values"/>
          <assert-in expression="_2" value="['yellow','blue','red','green','brown','orange','gray','pink','black','white']" mode="all" comment="colors must be the expected one"/>
      </each>
      <assert-exists expression="productPayload.createdAt"  mode="all" comment="createdAt must exists"/>
      <assert-exists expression="productPayload.updatedAt"  comment="updateAt must exists"/>
  </each>
  ```

## Testing Metrics
An HTTP response is made of a payload, but also contains contextual information. You can use Sauce Labs API Testing to test the entire response envelope.

When you're making an HTTP request in the composer, you're providing a variable name. That variable will host the entire response payload. For example, if `payload` is the name of that variable, when the operation completes, another variable called `<variable_name>_response` is also created.

Therefore various pieces of information such as HTTP header and metrics are contained in the variable `payload_response`.

By referencing the `payload_response.statusCode` expression you can access the status code.

### Example
In this example, you want to run a branch of code when the status code is `400`:

<img src={useBaseUrl('/img/api-testing/metrics-testing-example.png')} alt="Testing metrics - example" width="600"/>

You can use multiple `if` conditions to check the status codes you need to check, which can be helpful when creating positive and negative tests.

<img src={useBaseUrl('/img/api-testing/metrics-mult-if-cond.png')} alt="Using multiple if conditions" width="600"/>

### Example
To check that a resource shouldn't be cached:

<img src={useBaseUrl('/img/api-testing/metrics-resource-not-cached.png')} alt="Checking that a resource shouldn't be cached" width="600"/>

### Performance Metrics

You can create specific assertions to verify performance metrics.

#### Example
The following is an example in **Code** view.

  ```html
  <assert-less expression="payload_response.metrics.latency" value="350" type="integer"/>

  <assert-less expression="payload_response.metrics.fetch" value="350" type="integer"/>

  <assert-less expression="payload_response.metrics.overall" value="550" type="integer"/>
  ```

* `latency` is the time to first byte.
* `fetch` is the total download time of the payload.
* `overall` is fetch and latency combined.

The following is the same example, but in **Visual** view:

<img src={useBaseUrl('/img/api-testing/metrics-assert-less-visual.png')} alt="An Assert-Less component in Visual view" width="600"/>

### Improving Metrics

The performance of the API can be mission critical in some cases, and cataloging metrics can be as important as collecting them.

The classic approach of creating big tables of HTTP hits with the actual URL being called (and its performance) is certainly accurate, but it's far from being easy to review because URLs contain variables and hardly represent what the action was about.

Sauce Labs API Testing, as a default, works in this classic way, but also gives you the ability to change the footprint of requests based on your organization needs.

#### Example
The following example includes a route with a parameter:

  ```http request
  http://www.whereever.com/[id]/details
  ```

Each individual `REST` run for this route will produce a new line in the metrics view:

  ```http request
  http://www.whereever.com/1/details  
  http://www.whereever.com/2/details  
  http://www.whereever.com/3/details  
  http://www.whereever.com/4/details
  ...  
  ```
To produce a single endpoint for reporting from each one of these calls, you can use a **footprint**.

To reconfigure the footprint, in the test, add a `config` component to the I/O component:  

<img src={useBaseUrl('/img/api-testing/metrics-improve-config.png')} alt="Reconfiguring a footprint" width="600"/>

The `config` component has two fields:  
  * Name - The name you want to assign. In this case, you **MUST** enter `footprint`.
  * Value - The value for the configuration component.

To set up a footprint, enter the URL that's in the I/O component. Any parameterized portion of the URL must be wrapped in square brackets.

The value in this example would be:

  ```http request
  http://www.wherever.com/whatever/[id]/details  
  ```

For each endpoint, you can use more square brackets, one for each variable that could assume multiple values:

  ```http request
  http://www.whereever.com/[whatever]/[id]/details/[colors]/whatever
  ```

When you write the value of the config, for the static part of the endpoint, you can also call a variable as in any I/O operation:

  ```js
  ${protocol}/${domain}/[whatever]/[id]/details/[colors]/whatever
  ```

## Terminology

### Visual View and Code View
This toggle switches between the Visual and Code views in the Composer. You can make calls and add assertions for testing your APIs, and insert variables wherever needed. You can use either, depending on which you're more comfortable with.

#### Visual View
Guides you through creating API tests using automated real-time suggestions via predictive text. No coding experience is required.<br/><img src={useBaseUrl('img/api-fortress/2021/01/visualView.png')} alt="Test Composer Visual view"/>

#### Code View
Enables you to write tests here from scratch, if you feel more comfortable working in code.<br/><img src={useBaseUrl('img/api-fortress/2021/01/codeView.png')} alt="Test Composer Code view"/>

### Add Component
This button displays all available [assertion components](/api-testing/composer/assertion-components/), [I/O components](/api-testing/composer/io-components/), and [logical components](/api-testing/composer/logical-components/).<br/>
<img src={useBaseUrl('img/api-fortress/2021/01/addComponent.png')} alt="Add Component"/>

If a component is not valid for the operation you are conducting, it will not be made available to help avoid mistakes. For instance, if you don’t add a `POST` first, you cannot add a `POST` Body or `POST` Param.

:::note
Sauce Labs free trials may not give you access to all available components.
:::

### Transform Component
Transforms an existing component into another component of the same type.<br/>
<img src={useBaseUrl('img/api-fortress/2021/01/transformComponent.png')} alt="Add Component"/>

### Delete Component
Deletes a selected component from the test while using Visual view.<br/>
<img src={useBaseUrl('img/api-fortress/2021/01/deleteComponent.png')} alt="Delete Component"/>

### Invoke Snippet
Allows you to use a previously created code snippet stored in [The Vault](/api-testing/vault).<br/>
<img src={useBaseUrl('img/api-fortress/2021/01/invokeSnippet.png')} alt="Invoke Snippet"/>

### Export Snippet
Allows you to export a selected code snippet to the vault in order to be re-used later, or in another test.<br/>
<img src={useBaseUrl('img/api-fortress/2021/01/exportSnippet.png')} alt="Export Snippet"/>

### Save Test
Saves your progress.<br/>
<img src={useBaseUrl('img/api-fortress/2021/01/saveTest.png')} alt="Save Test"/>

### Run Test
Executes a test.<br/>
<img src={useBaseUrl('img/api-fortress/2021/01/runTest.png')} alt="Run Test"/>

### Input Sets
Displays the Input Set view where you can store input data sets to reuse within the specific test you're working on.<br/><img src={useBaseUrl('img/api-fortress/2021/01/inputSets.png')} alt="Input Sets" width="500"/>

There are two types of input data sets you can use:
* Global Parameters - Variables that are available within a test, valid for that specific test only.
* Input Set - Group of input variables representing a scenario, valid for that specific test only. The test will be executed once for each input set, overriding the variable values into your test.

<table>
<tr>
<td><strong>Input Set with Visual View</strong></td>
<td> <img src={useBaseUrl('img/api-fortress/2021/01/inputVisual.png')} alt="Input Set Visual View"/> </td>
</tr>
<tr>
<td><strong>Input Set with Code View</strong></td>
<td><img src={useBaseUrl('img/api-fortress/2021/01/inputCode.png')} alt="Input Set Code View"/> </td>
</tr>
</table>

### Unit View
These buttons switch between the Input Set and Unit views.

<br/>
<img src={useBaseUrl('img/api-fortress/2021/01/unitView.png')} alt="Unit View"/>

## More Information
* [Sauce School | API Testing Course and Best Practices](https://training.saucelabs.com/apiTesting/index.html)
* [API Testing Quickstart](/api-testing/quickstart)
