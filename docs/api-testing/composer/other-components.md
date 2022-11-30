---
id: other-components
title: Other Test Components
sidebar_label: Other Components
description: Learn to write Sauce Labs API Testing components.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

Here are some other components that you can add to a test using the Composer. This guide describes each component and shows you how to add them to tests. To learn how to access the components and create a test using the Composer see [Writing API Tests with the Composer](/api-testing/composer/).

<img src={useBaseUrl('img/api-testing/otherComponents.png')} alt="Other Components" />

## What You'll Need
* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
* Familiarity with the [API Testing Composer](/api-testing/composer/).

## Tag

The Tag component within the Composer enables you to dynamically tag the resulting document of a test execution. You can add different tags based on dynamic events happening during the test execution, such as a certain value retrieved in the payload. You can assign multiple tags to each test by adding more 'tag' components to it.

This is different from the tags applied when you first [create the test](/api-testing/composer/#create-a-composer-test). That feature enables you to search for that tag(s) filter in your Project **Tests** tab or [**Dashboard**](/api-testing/project-dashboard) tab.

<details><summary><strong>Parameters</strong></summary>

<table id="table-api">
  <tbody>
  <tr>
  <td colSpan='2'>Fields</td>
  </tr>
    <tr>
     <td><strong>Tag</strong></td>
     <td><p><small>| REQUIRED | STRING |</small></p></td>
    </tr>
  </tbody>
</table>

#### Examples

Here's an example of how you could use a tag in the Composer tab.

<img src={useBaseUrl('img/api-testing/tagComposer.png')} alt="tagComposer.jpg"/>

You can also add tags to the test details screen when you create or edit a test.<br/><img src={useBaseUrl('img/api-testing/tagNewtest.png')} alt="Tag Component - create new test"/>

Static tags will be displayed in your **Tests** list.<br/><img src={useBaseUrl('img/api-testing/testsTag.png')} alt="Tests tag.jpg"/>

All tags, dynamic and static will mark the test execution documents. On your project **Dashboard**, you can filter events by tags.<br/><img src={useBaseUrl('img/api-testing/projDashTag.png')} alt="projDashTag.png"/>

</details>
<details><summary><strong>Code View Example</strong></summary>

```yaml
- id: tag
  value: Production
```
</details>

## Set (Variable)

In Sauce Labs API Testing you can create variables in several different ways by using `SET (variable)`. This component has different modes that allow you to create variables in different ways, such as `String`, `Data`, and `Language`.

<img src={useBaseUrl('img/api-testing/set-var-component.png')} alt="Set var component" />

<details><summary><strong>Parameters</strong></summary>

<table id="table-api">
  <tbody>
  <tr>
  <td colSpan='2'>Fields</td>
  </tr>
    <tr>
     <td><strong>Variable</strong></td>
     <td><p><small>| REQUIRED | STRING |</small></p></td>
    </tr>
    <tr>
     <td><strong>Mode</strong></td>
     <td><p><small>| REQUIRED | STRING, DATA, or LANGUAGE |</small></p></td>
    </tr>
    <tr>
     <td><strong>Value (depends on ‘Mode = String’)</strong></td>
     <td><p><small>| REQUIRED | DATA |</small></p></td>
    </tr>
    <tr>
     <td><strong>Data (depends on ‘Mode = Data’)</strong></td>
     <td><p><small>| REQUIRED | DATA |</small></p></td>
    </tr>
    <tr>
     <td><strong>Lang (depends on ‘Mode = Language’)</strong></td>
     <td><p><small>| REQUIRED | JAVASCRIPT or TEMPLATE |</small></p></td>
    </tr>
    <tr>
     <td><strong>Body (depends on ‘Mode = Language’)</strong></td>
     <td><p><small>| REQUIRED | DATA |</small></p></td>
    </tr>
  </tbody>
</table>

**Mode: String**

This mode generates a String variable, which can be a static value or a variable taken from the response payload. If it is a static value you just have to write it and the engine will take it as is.

Consider the following example:

<img src={useBaseUrl('img/api-testing/set-string.png')} alt="Set static string" />

```
Variable: product
Mode: String
Value: t-shirt
```

In the above example the variable `product` will always have the value `t-shirt`.

If you want to make it dynamic and let the engine evaluate the value every time the test will be executed, you have to write it in ${...} brackets.

Consider the following response payload and let’s say it has been stored in the `payload` variable:

```json
{
  "id": 1,
  "name": "Baseball Cap",
  "price": 29.99,
  "category": "1",
  "description": "This is product 1!",
  "quantity": 5,
  "imageURL": "http://image.com",
  "color": [
    "blue",
    "yellow"
  ],
  "createdAt": "2021-11-28T21:58:43.461Z",
  "updatedAt": "2021-11-28T21:58:43.461Z"
}
```
If you write the following:

<img src={useBaseUrl('img/api-testing/set-var-dynamic.png')} alt="Set dynamic value"/>

```
Variable: product
Mode: String
Value:${payload.name}
```

The engine will evaluate the variable value every time the test will be executed. In the above scenario the variable `product` will contain the value `Baseball Cap` but if the response is the following:

```json
{
  "id": 2,
  "name": "Long Sleeve Shirt",
  "price": 39.99,
  "category": "1",
  "description": "This is product 2!",
  "quantity": 7,
  "imageURL": "http://image.com",
  "color": [
    "blue",
    "yellow",
    "red"
  ],
  "createdAt": "2021-11-28T21:58:43.461Z",
  "updatedAt": "2021-11-28T21:58:43.461Z"
}
```

The value will be `Long Sleeve Shirt`, without changing your test.

**Mode: Data**

Using this mode, the variable will be evaluated (like the Expression field), therefore the variable type can be everything. The variable type will depend on the object being evaluated.
In the Data field, you need to enter a single line expression that returns a value.

For example, you can create a new array in this way:

<img src={useBaseUrl('img/api-testing/set-data-array.png')} alt="Set array"/>  

```
Variable: product
Mode: Data
Data: ["Bluetooth Headphones","Long Sleeve Shirt","Baseball Cap"]
```
Then, you can iterate over it using the `each` component or you can invoke a specific item using `${products[1]}` where the number inside the square brackets identifies the position of the item you want to reach out, starting from 0.

Now, let's consider the example below and imagine we have the JSON payload stored in the `payload` variable:

```json
[
  {
    "id": 1,
    "name": "Baseball Cap",
    "price": 29.99,
    "category": "1",
    "description": "This is product 1!",
    "quantity": 5,
    "imageURL": "http://image.com",
    "color": [
      "blue",
      "yellow"
    ],
    "createdAt": "2021-11-28T21:58:43.461Z",
    "updatedAt": "2021-11-28T21:58:43.461Z"
  },
  {
    "id": 2,
    "name": "Long Sleeve Shirt",
    "price": 39.99,
    "category": "1",
    "description": "This is product 2!",
    "quantity": 7,
    "imageURL": "http://image.com",
    "color": [
      "blue",
      "yellow",
      "red"
    ],
    "createdAt": "2021-11-28T21:58:43.461Z",
    "updatedAt": "2021-11-28T21:58:43.461Z"
  },
  {
    "id": 3,
    "name": "Bluetooth Headphones",
    "price": 49.99,
    "category": "1",
    "description": "This is product 3!",
    "quantity": 50,
    "imageURL": "http://image.com",
    "color": [
      "green",
      "yellow"
    ],
    "createdAt": "2021-11-28T21:58:43.462Z",
    "updatedAt": "2021-11-28T21:58:43.462Z"
  }
]
```

If you write the following:

<img src={useBaseUrl('img/api-testing/set-data.png')} alt="Set data"/>

```
Variable: product
Mode: Data
Data: payload.filter(it=>it.name=='Bluetooth Headphones')
```

It will return the following object:

```json
{
  "id": 3,
  "name": "Bluetooth Headphones",
  "price": 49.99,
  "category": "1",
  "description": "This is product 3!",
  "quantity": 50,
  "imageURL": "http://image.com",
  "color": [
    "green",
    "yellow"
  ],
  "createdAt": "2021-11-28T21:58:43.462Z",
  "updatedAt": "2021-11-28T21:58:43.462Z"
}
```

**Mode: Language**

This is the most advanced way to create your variables. There are two different options available: `Javascript` and `Template`.

#### Lang: Javascript

In this mode you can create your variable by writing a Javascript script in the `Body` field. It can be a complete script with variable declarations or loops.

For example, you have a JWT token stored in the `token` variable and we need to decode it and return the JSON payload it was generated from:

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTgyMzY1NjgsImV4cCI6MTY4OTc3MjU2OCwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoiam9obi5kb2VAZXhhbXBsZS5jb20iLCJOYW1lIjoiSm9obiIsIlN1cm5hbWUiOiJEb2UiLCJFbWFpbCI6ImpvaG4uZG9lQGV4YW1wbGUuY29tIiwiUm9sZSI6WyJNYW5hZ2VyIiwiUHJvamVjdCBBZG1pbmlzdHJhdG9yIl19.DN7vKPlHkAy1hwYOYpUKDwkV0yD-KS2pdoc76aKPhm8
```

To achieve this, you need to write the following script inside the `Body` field:

```javascript
var pieces = token.split('.')
var b64payload = pieces[1]
var decoded = Buffer.from(b64payload,'base64').toString()
var json = JSON.parse(decoded)
return json
```

<img src={useBaseUrl('img/api-testing/set-javascript.png')} alt="Set javascript"/>

That’s producing the following JSON:

```json
{
    "iat": 1658236568,
    "exp": 1689772568,
    "aud": "www.example.com",
    "sub": "john.doe@example.com",
    "Name": "John",
    "Surname": "Doe",
    "Email": "john.doe@example.com",
    "Role": ["Manager", "Project Administrator"]
}
```

Then, you can retrieve all the keys as `jsonData.iat` where `jsonData` is the variable name you entered in the `Variable` field.

#### Lang: Template

In this mode you can create your own template in the same way as it is done for Request Body, the advantage here is that you can print the variable in order to check if all is correct (Body cannot be printed).

For example, if you need to add a new product in your database, you can create the body for the (PUT) request and paste the Body in the `Body` field and print it in a `Comment`.

```json
{
    "id": 4,
    "name": "T-Shirt",
    "price": ${price},
    "category": "1",
    "description": "This is product ${id}!",
    "quantity": 5,
    "imageURL": "http://image.com",
    "color": ["red", "green"],
    "createdAt": "${D.format (D.nowMillis(), 'yyyy-MM-DD')}",
    "updatedAt": "${D.format (D.nowMillis(), 'yyyy-MM-DD')}T${D.format(D.nowMillis(), 'HH:mm:ssz')}"
}
```
<img src={useBaseUrl('img/api-testing/set-template.png')} alt="Set template"/>

</details>

<details><summary><strong>Code View Examples</strong></summary>

```yaml
- id: set
  var: product
  mode: string
  value: t-shirt
```

```yaml
- id: set
  var: product
  mode: string
  value: ${payload.name}
```

```yaml
- id: set
  var: product
  mode: object
  object: '["Bluetooth Headphones","Long Sleeve Shirt","Baseball Cap"]'
```

```yaml
- id: set
  var: product
  mode: object
  object: payload.filter(it=>it.name=='Bluetooth Headphones')
```

```yaml
- id: set
  var: jsonData
  mode: lang
  lang: javascript
  body: |-
    var pieces = token.split('.')
    var b64payload = pieces[1]
    var decoded = Buffer.from(b64payload,'base64').toString()
    var json = JSON.parse(decoded)
    return json
```

```yaml
- id: set
  var: new_product
  mode: lang
  lang: template
  body: >-
    {
        "id": 4,
        "name": "T-Shirt",
        "price": ${price},
        "category": "1",
        "description": "This is product ${id}!",
        "quantity": 5,
        "imageURL": "http://image.com",
        "color": ["red", "green"],
        "createdAt": "${D.format (D.nowMillis(), 'yyyy-MM-DD')}",
        "updatedAt": "${D.format (D.nowMillis(), 'yyyy-MM-DD')}T${D.format(D.nowMillis(), 'HH:mm:ssz')}"
    }
```
</details>


## Parse

This component allows you to parse a string into structured data, using one of the available parsers.

<details><summary><strong>Parameters</strong></summary>

<table id="table-api">
  <tbody>
  <tr>
  <td colSpan='2'>Fields</td>
  </tr>
    <tr>
     <td><strong>Variable</strong></td>
     <td><p><small>| REQUIRED | STRING |</small></p><p>The name of the variable you want to parse.</p></td>
    </tr>
    <tr>
     <td><strong>Adapter</strong></td>
     <td><p><small>| REQUIRED | json, xml, etc. |</small></p><p>The parser to use</p></td>
    </tr>
  </tbody>
</table>

<img src={useBaseUrl('img/api-testing/parseComponentUI.png')} alt="Parse component UI" />

#### Examples

I have set a variable (which will be a plain string), in this case I have a list of colors.

<img src={useBaseUrl('img/api-testing/parseComponentUI_variable.png')} alt="Parse component variable"/>

Next, we can use the comment component to see what happens if I print “colors[1]” before and after parsing it into JSON.

<img src={useBaseUrl('img/api-testing/parseComponentUI_test.png')} alt="Parse component test"/>

Here are the results of the above test:

<img src={useBaseUrl('img/api-testing/parseComponentUI_results.png')} alt="Parse component test"/>

As you can see before parsing the string, the test will consider the variable `colors` as one big string so `colors[1]` will print “ as that is the second character in the string. After parsing the string into JSON we can traverse through the variable as a JSON, so `colors[1]` will print the second element in the JSON array blue.

</details>
<details><summary><strong>Code View Examples</strong></summary>

```yaml
- id: parse
  var: varName
  adapter: json
```

```yaml
- id: parse
  var: fileName
  adapter: csv
```
</details>

## Comment

This assertion allows you to print out (in test reports) information. It can have two sorts of values, as described below.

<details><summary><strong>Parameters</strong></summary>

There are no parameters -- text only.

#### Examples

The first is a normal string value. An example of that would be to explain what a specific WHEN loop is being used for. Similar to when you write comments in code.

```txt
This is a comment
```

The second is useful for test debugging and analysis. You can pass variables into the comments. An example use of this would be to print out the product ID being used in the current loop of a test.

```bash
The value of the ID is ${payload.id}
```

</details>

<details><summary><strong>Code View Example</strong></summary>

```yaml
- id: comment
  text: This is a comment
```
</details>

## Flow

This component allows you to pause or stop a test entirely.

<details><summary><strong>Parameters</strong></summary>

<table id="table-api">
  <tbody>
  <tr>
  <td colSpan='2'>Fields</td>
  </tr>
    <tr>
     <td><strong>Command</strong></td>
     <td><p><small>| REQUIRED | 'stop', 'wait' |</small></p><p>This parameter defines the action you want to take. 'Stop' will stop the test. 'Wait' will pause the test for a number of milliseconds defined in the 'Value' parameter.</p></td>
    </tr>
    <tr>
     <td><strong>Value</strong></td>
     <td><p><small>| REQUIRED | INTEGER |</small></p><p>Depends on 'Command = wait'. The number of milliseconds you want to pause the test for.</p></td>
    </tr>
  </tbody>
</table>

#### Examples

This component is especially useful when combined with the [`If` component](#if). See the examples below:

<img src={useBaseUrl('img/api-testing/flow_stop.png')} alt="flow_stop.png"/>

If the statusCode is not `200`, the test will be halted; none of the remaining assertions will be checked.

<img src={useBaseUrl('img/api-testing/flow_wait.png')} alt="flow_wait.png"/>

In this example, the test will wait 1000 milliseconds before performing the `GET` request.

</details>

<details><summary><strong>Code View Examples</strong></summary>

```yaml
- id: flow
  command: stop
```

```yaml
- id: flow
  command: wait
  value: 1000
```
</details>

## Fact

The Fact component enables you to add information (facts) about the nature of the test execution, along with static or dynamic data. It's used to control the behavior of [Email notifications](/api-testing/project-dashboard/#email-notifications), which (if enabled) alert you to test failures.

Test activity is tracked using test ID number. This may not work if you're testing in multiple environments (i.e., production, staging, QA), as an incident could be environment-specific. When a Fact component is added to a test, it will inform our system which environment the execution relates to so that the incident signature will carry the environment as well.

<details><summary><strong>Parameters</strong></summary>

<table id="table-api">
  <tbody>
  <tr>
  <td colSpan='2'>Fields</td>
  </tr>
    <tr>
     <td><strong>Identifier</strong></td>
     <td><p><small>| REQUIRED | STRING |</small></p><p>Should be unique within the test.</p></td>
    </tr>
    <tr>
     <td><strong>Label</strong></td>
     <td><p><small>| REQUIRED |</small></p><p>To provide an understanding of the Fact.</p></td>
    </tr>
    <tr>
     <td><strong>Value</strong></td>
     <td><p><small>| REQUIRED | STRING |</small></p><p>String value that supports the template language (i.e., <code>$&#123;...&#125;</code>). </p></td>
    </tr>
  </tbody>
</table>


:::caution
The Fact component should be set as high up in the test as possible. If the test fails before it reaches the Fact, then it will not be set.
:::

<br/>


**Examples/Uses Cases**

#### Setting Alert Environments

Assume that in the variable scope of your test, you have a variable called _env_ that contains your environment string (_production, staging, qa_ etc.).

By configuring a Fact in the following way, you can add the environment value to the incident signature:

```yaml
Identifier: environment  
label: The current environment  
value: ${env}
```

<img src={useBaseUrl('img/api-testing/fact.png')} alt="fact.png" />

From this moment on, the signature of the incident will be `id_of_the_test` + `value_of_environment`.

For example, you will receive start/end incidents for `test123` in the production environment, and start/end incidents for `test123` in the staging environment, as separate flow of events.

You can use anything as a value of the environment, such as domain names and IDs.


#### Disabling Email Notifications

A second use case is disabling email notifications for the test from within the test:  

```yaml
Fact id: disable_alerts   
label: whatever you want here   
value: true
```

<img src={useBaseUrl('img/api-testing/factDisableAlert.png')} alt="factDisableAlert.png" />

You can use logic within the test to set the Fact component and use that to alter the email notification.

As an example, you could say "IF the env is development, then disable emails for this test":

<img src={useBaseUrl('img/api-testing/factAlertDisabled.png')} alt="factAlertDisabled.png" />

#### Setting Email Notification Thresholds

Another use-case of the fact component is set an email alert threshold. If you want a test to fail more than once before an email is sent, a Fact called `mail_threshold` can be set in the test:  

<img src={useBaseUrl('img/api-testing/factMultiFailure.png')} alt="factMultiFailure.png" />

This means the test will need to fail twice in a row before an email alert is sent.  

Given that this can be configured within the test, it offers all the flexibility provided by conditional statements, such as an IF condition on the environment the test is running upon:  

<img src={useBaseUrl('img/api-testing/factMultiFailure2.png')} alt="factMultiFailure2.png" />

</details>

<details><summary><strong>Code View Examples</strong></summary>

```yaml
- id: fact
  identifier: environment
  label: environment
  value: ${env}
```

```yaml
- id: fact
  identifier: disable_alerts
  label: alerts disabled
  value: "true"
```

```yaml
- id: fact
  identifier: mail_threshold
  label: multi failure
  value: "2"
```
</details>

## Snippets

When you save a snippet from the **Composer**, it will be saved in the project [Vault](/api-testing/vault/). While you cannot save a snippet from the **Composer** to the **Company Vault**, you can export there using the import/export feature (see screenshot below).<br/><img src={useBaseUrl('img/api-fortress/2021/04/exportSnippet.png')} alt="Snippet"/>

### Create a Snippet

1. Open a project.
1. Open a test.
1. Click the first component you want to include. 
1. Hold down the **`Ctrl + Shift`** keys and click the last component you want to include. This will highlight your snippet selection.
1. Click **Save Snippet**.
1. Give the snippet a name.
1. Click **Save Snippet**.

<img src={useBaseUrl('img/api-testing/createSnippet.png')} alt="Creating a Snippet"/>

<img src={useBaseUrl('img/api-testing/snippetDetails.png')} alt="Snippet Details"/>
That's it! Now that your snippet has been created, you can use it in every test within the Project.

#### Updating Snippet

1. Open a project.
1. In the left panel, click **Vault**, then click **Code Snippets**.
1. Click any of the fields and begin typing to edit the details.
1. Click **Save**.

### Call Snippet

Creates a Call component that will invoke the snippet. If the snippet changes, all the tests containing the Call component to that snippet will inherit the changes.

### Paste Snippet

This allows you to paste the entire snippet inside the test, which you can then edit as needed. The pasted components will lose any reference to the original snippet.

## K/V Store

The Key/Value store allows you to create temporary key/value pairs that can be accessed across different tests. The Key/Value store is accessed via the Key/Value Store Component.

:::warning
These Key/Value pairs are temporary. They expire after 24 hours has elapsed since the last update to the value itself.
:::

### Methods

The Key/Value Store component has four methods available for use:
* [**Set**](#basic-workflow): creates a new key/value pair in the Key/Value store. The value is entered in the __Data__ field.<br/><img src={useBaseUrl('img/api-testing/KeyValueSet.png')} alt="KeyValueSet.png" />
* [**Load**](#basic-workflow): recalls a value from the Key/Value store when provided with a key.<br/><img src={useBaseUrl('img/api-testing/KeyValueLoad.png')} alt="KeyValueLoad.png" />
* [**Push**](#pushpop-workflow): adds a value to the end of an existent value **of the datatype "Array"** in the Key/Value store. If no such key exists, it will create a new array containing the passed in value.  The passed in value is entered in the __Data__ field.<br/><img src={useBaseUrl('img/api-testing/KeyValuePush.png')} alt="KeyValuePush.png" />
* [**Pop**](#pushpop-workflow): removes a value from the end of an existent value **of the datatype "Array"** in the Key/Value store.<br/><img src={useBaseUrl('/img/api-testing/KeyValuePop.png')} alt="KeyValuePop.png" />

<details><summary><strong>Code View Examples</strong></summary>

```yaml
- id: kv
  key: 
  action: load
  var: 
```

```yaml
- id: kv
  key: prods
  action: load
  var: kvprods
```

```yaml
- id: kv
  key: 
  action: pop
  var: 
```

```yaml
- id: kv
  key: 
  action: set
  object: 
```

```yaml
- id: kv
  key: adasd
  action: set
  object: products[0].name
```

```yaml
- id: kv
  key: prods
  action: set
  object: "[products[0].color]"
```

```yaml
- id: kv
  key: 
  action: push
  object: 
```
</details>


### Basic Workflow

Let's take a look at how this workflow works in a practical setting. The first example will be a simple set and retrieve of a value in the Key/Value Store.

1. First, we'll make a `GET` request to an endpoint.<br/><img src={useBaseUrl('img/api-testing/KVBasicWorkflow1.png')} alt="KVBasicWorkflow1.png" />
2. Next, we'll add a K/V Store component.<br/><img src={useBaseUrl('img/api-testing/KVBasicWorkflow2.png')} alt="KVBasicWorkflow2.png" />
3. This first K/V Store component (we're going to incorporate several) is going to set the Key/Value pair in the Store, so we're going to use **Set**<br/><img src={useBaseUrl('img/api-testing/KVBasicWorkflow3.png')} alt="KVBasicWorkflow3.png"/>
4. In this case, we're setting the Key prods equal to `products[0].name`, which in this case evaluates to Baseball Cap.
5. Next, we're going to retrieve this Key/Value pair from the store with the **Load** method. In the K/V Store **Load** component, we're going to assign the retrieved value to the variable `kvprods.`<br/><img src={useBaseUrl('img/api-testing/KVBasicWorkflow4.png')} alt="KVBasicWorkflow4.png"/>
6. Finally, we'll add in a **Comment** component to ensure that the data was recovered successfully.<br/><img src={useBaseUrl('img/api-testing/Screen-Shot-2018-05-24-at-1.48.01-PM1.png')} alt="Add Comment component" />
7. When we run the test, we're presented with the following result:<br/><img src={useBaseUrl('img/api-testing/Screen-Shot-2018-05-24-at-1.48.28-PM.png')} alt="Test Results.png" />

Success!

### Push/Pop Workflow

Next, we're going to take a look at how **Push** and **Pop** work. **Push** and **Pop** are both array methods and behave as they normally do outside of this context. **Push** will append a value to the end of an array. **Pop** will remove the last value in an array.

First, we're going to use **Push**. It should be noted that **Pop** works similarly but with the opposite result. **Pop** _also_ assigns the removed value to a variable which can be used in the context of the test, but can no longer be accessed from the Key/Value Store. We'll discuss this further when we take a look at **Pop**.

1. First, we're going to send a `GET` request and assign a key in the Key/Value Store to a value from the response body. In this case, we're going to use Color, which is an array.<br/><img src={useBaseUrl('img/api-testing/Screen-Shot-2018-05-24-at-1.49.16-PM.png')} alt="Assign a key"/>
2. Next, we're going to **Load** and **Comment** this key. We're doing that so we can actually see the change on the test report at the end of this workflow.
3. The next step is to **Push** the new data on to the end of the existing array. In this case, we're pushing the integer _999_ onto the _prods_ array.<br/><img src={useBaseUrl('img/api-testing/Screen-Shot-2018-05-24-at-2.43.53-PM.png')} alt="Push data"  />
4. Finally, we're going to **Load** the modified data into the test from the K/V Store.<br/><img src={useBaseUrl('img/api-testing/Screen-Shot-2018-05-24-at-1.51.48-PM.png')} alt="Load data" />
5. When we run the test, we're presented with the following test report.<br/><img src={useBaseUrl('img/api-testing/Screen-Shot-2018-05-24-at-1.51.59-PM.png')} alt="Test Report" />

The comments show us clearly that we have pushed the number 999 onto the array stored in the key _prods._

Now, we've added something to the array. Let's remove it with **Pop**!

1. The first step is to introduce a **Pop** K/V Store component.<br/><img src={useBaseUrl('img/api-testing/Screen-Shot-2018-05-24-at-2.31.17-PM.png')} alt="screenshot.png" />

  We provide the **Pop** component with the name of the key from the Key/Value Store, and the name of the variable we'd like to assign the popped value to. Remember, **Pop** removes the last value in an array and returns the value itself. In this case, we're going to assign it to a variable called Popped.
2. Next, we're going to recall the modified key from the Key/Value Store. Then, we're going to Comment both the recalled Key/Value Store value AND the previously popped value.<br/><img src={useBaseUrl('img/api-testing/Screen-Shot-2018-05-24-at-2.28.58-PM.png')} alt="screenshot.png" />
3. Review the Test Report, where you can see the full workflow, showing that we first assigned an array to the Key/Value Store with **Set**, then added to that array with **Push**, and then removed the added value with **Pop**. Each time we made a change, we used **Load** to retrieve an updated value from the Key/Value Store.<br/><img src={useBaseUrl('img/api-testing/Screen-Shot-2018-05-24-at-2.29.09-PM.png')} alt="screenshot.png" />

The last two comments show the final state of the array in the Key/Value Store and the popped value itself. The popped value will only be available within the scope of this test run. The array in the Key/Value Store will remain retrievable and until 24 hours after it's most recent modification.

:::note
Use Set, Push, and Pop to reset the timer. Load does not reset the timer.
:::
