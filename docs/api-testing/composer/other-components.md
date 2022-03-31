---
id: other-components
title: Other Test Components
sidebar_label: Other Components
description: Learn to write Sauce Labs API Testing components.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

Here are some other components that you can add to a test using the Composer. To access them, go to a **Project** > **Test** > **Compose** (aka Composer) > Click **Add component** (**+** icon) in the Composer toolbar.

<img src={useBaseUrl('img/api-fortress/2020/09/otherComponents.png')} alt="Other Components" width="600" />

## What You'll Need
* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
* An existing API Testing Project and Test. For details on how to create them, see [API Testing Quickstart](/api-testing/quickstart/).


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
     <td><strong>Value</strong></td>
     <td><p><small>| REQUIRED | STRING |</small></p></td>
    </tr>
  </tbody>
</table>

#### Examples

Here's an example of how you could use a tag in the **Compose** tab.

<img src={useBaseUrl('img/api-fortress/2020/12/tagComposer.png')} alt="tagComposer.jpg"/>

You can also add tags to the test details screen when you create or edit a test.<br/><img src={useBaseUrl('img/api-fortress/2020/12/tagNewtest.png')} alt="Tag Component - create new test"/>

Static tags will be displayed in your **Tests** list.<br/><img src={useBaseUrl('img/api-fortress/2020/12/testsTag.png')} alt="Tests tag.jpg"/>

All tags, dynamic and static will mark the test execution documents. On your project **Dashboard**, you can filter events by tags.<br/><img src={useBaseUrl('img/api-fortress/2020/12/projDashTag.png')} alt="projDashTag.png"/>


</details>



## Set (Variable)

Allows you to set a variable for future uses in the test. For example,  you can save a value retrieved from the response and use it in a subsequent call.

<details><summary><strong>Parameters</strong></summary>

<table id="table-api">
  <tbody>
  <tr>
  <td colSpan='2'>Fields</td>
  </tr>
    <tr>
     <td><strong>Var</strong></td>
     <td><p><small>| REQUIRED | STRING |</small></p></td>
    </tr>
    <tr>
     <td><strong>Variable mode</strong></td>
     <td><p><small>| REQUIRED | STRING, DATA, or LANGUAGE |</small></p></td>
    </tr>
    <tr>
     <td><strong>Value (depends on ‘Variable mode = string’)</strong></td>
     <td><p><small>| REQUIRED | DATA |</small></p></td>
    </tr>
    <tr>
     <td><strong>Data (depends on ‘Variable mode = data’)</strong></td>
     <td><p><small>| REQUIRED | STRING |</small></p></td>
    </tr>
    <tr>
     <td><strong>Lang (depends on ‘Variable mode = language’)</strong></td>
     <td><p><small>| REQUIRED | STRING |</small></p></td>
    </tr>
    <tr>
     <td><strong>Content (depends on ‘Variable mode = language’)</strong></td>
     <td><p><small>| REQUIRED | STRING |</small></p></td>
    </tr>
  </tbody>
</table>

#### Examples

<img src={useBaseUrl('img/api-fortress/2020/12/setvar.jpeg')} alt="Set var" width="450" />

```
Var: artistId
Variable mode: String
Value: _1.id
```

<img src={useBaseUrl('img/api-fortress/2020/12/setvarObject.jpeg')} alt="Set var"/>

```
Var: sobjects
Variable mode: Data
Data: payload.findAll {it.name == ‘bananas’}
```

<img src={useBaseUrl('img/api-fortress/2020/12/setvarJava.jpeg')} alt="Set var"/>

```
Var: queries
Variable mode: Language
Lang: JavaScript
Content: if (payload.id>100) return ‘furniture’
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
     <td><strong>parseVar</strong></td>
     <td><p><small>| REQUIRED | STRING |</small></p><p>The name of the variable you want to parse.</p></td>
    </tr>
    <tr>
     <td><strong>Adapter</strong></td>
     <td><p><small>| REQUIRED | json, xml, etc. |</small></p><p>The parser to use</p></td>
    </tr>
  </tbody>
</table>

<img src={useBaseUrl('img/api-fortress/2020/12/parseComponentUI.jpeg')} alt="Parse component UI" width="500"/>

#### Examples

I have set a variable (which will be a plain string), in this case I have a list of colors.

<img src={useBaseUrl('img/api-fortress/2020/12/parseComponentUI_variable.png')} alt="Parse component variable"/>

Next, we can use the comment component to see what happens if I print “colors[1]” before and after parsing it into JSON.

<img src={useBaseUrl('img/api-fortress/2020/12/parseComponentUI_test.png')} alt="Parse component test"/>

Here are the results of the above test:

<img src={useBaseUrl('img/api-fortress/2020/12/parseComponentUI_results.png')} alt="Parse component test" width="200"/>

As you can see before parsing the string, the test will consider the variable `colors` as one big string so `colors[1]` will print “ as that is the second character in the string. After parsing the string into JSON we can traverse through the variable as a JSON, so `colors[1]` will print the second element in the JSON array blue.

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

<img src={useBaseUrl('img/api-fortress/2020/12/flow_stop.jpg')} alt="flow_stop.jpg"/>

If the statusCode is not `200`, the test will be halt; none of the remaining assertions will be checked.

<img src={useBaseUrl('img/api-fortress/2020/12/flow_wait.jpg')} alt="flow_wait.jpg"/>

In this example, the test will wait 1000 milliseconds before performing the `GET` request.

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
     <td><strong>ID</strong></td>
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
Fact id: environment  
label: The current environment  
value: ${env}
```

<img src={useBaseUrl('img/api-fortress/2019/11/Screen-Shot-2019-11-11-at-11.21.50-AM.png')} alt="screenshot.png" width="400"/>

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

<img src={useBaseUrl('img/api-fortress/2019/11/Screen-Shot-2019-11-11-at-11.22.02-AM.png')} alt="screenshot.png" width="400"/>

You can use logic within the test to set the Fact component and use that to alter the email notification.

As an example, you could say "IF the env is development, then disable emails for this test":

<img src={useBaseUrl('img/api-fortress/2019/11/Screen-Shot-2019-11-11-at-11.33.57-AM.png')} alt="screenshot.png" width="400"/>

#### Setting Email Notification Thresholds

Another use-case of the fact component is set an email alert threshold. If you want a test to fail more than once before an email is sent, a Fact called `mail_threshold` can be set in the test:  

<img src={useBaseUrl('img/api-fortress/2020/07/Screen-Shot-2020-07-07-at-12.56.25-PM.png')} alt="screenshot.png" width="400"/>

This means the test will need to fail twice in a row before an email alert is sent.  

Given that this can be configured within the test, it offers all the flexibility provided by conditional statements, such as an IF condition on the environment the test is running upon:  

<img src={useBaseUrl('img/api-fortress/2020/07/Screen-Shot-2020-07-07-at-12.59.24-PM.png')} alt="screenshot.png" width="400"/>

</details>



## K/V Store

The Key/Value store allows you to create temporary key/value pairs that can be accessed across different tests. The Key/Value store is accessed via the Key/Value Store Component.

:::warning
These Key/Value pairs are temporary. They expire after 24 hours has elapsed since the last update to the value itself.
:::

### Methods

The Key/Value Store component has four methods available for use:
* [**Set**](#basic-workflow): creates a new key/value pair in the Key/Value store. The value is entered in the __Object__ field.<br/><img src={useBaseUrl('img/api-fortress/2018/05/Screen-Shot-2018-05-24-at-10.50.19-AM.png')} alt="screenshot" />
* [**Load**](#basic-workflow): recalls a value from the Key/Value store when provided with a key.<br/><img src={useBaseUrl('img/api-fortress/2018/05/Screen-Shot-2018-05-24-at-10.50.36-AM.png')} alt="screenshot" />
* [**Push**](#pushpop-workflow): adds a value to the end of an existent value **of the datatype "Array"** in the Key/Value store. If no such key exists, it will create a new array containing the passed in value.  The passed in value is entered in the __Object__ field.<br/><img src={useBaseUrl('img/api-fortress/2018/05/Screen-Shot-2018-05-24-at-10.51.09-AM.png')} alt="screenshot" />
* [**Pop**](#pushpop-workflow): removes a value from the end of an existent value **of the datatype "Array"** in the Key/Value store.<br/><img src={useBaseUrl('img/api-fortress/2018/05/Screen-Shot-2018-05-24-at-10.50.52-AM.png')} alt="screenshot" />


### Basic Workflow

Let's take a look at how this workflow works in a practical setting. The first example will be a simple set and retrieve of a value in the Key/Value Store.

1. First, we'll make a `GET` request to an endpoint.<br/><img src={useBaseUrl('img/api-fortress/2018/05/Screen-Shot-2018-05-24-at-1.21.40-PM.png')} alt="screenshot" />
2. Next, we'll add a K/V Store component.<br/><img src={useBaseUrl('img/api-fortress/2018/05/component.png')} alt="component.png" width="400"/>
3. This first K/V Store component (we're going to incorporate several) is going to set the Key/Value pair in the Store, so we're going to use **Set.**<br/><img src={useBaseUrl('img/api-fortress/2018/05/Screen-Shot-2018-05-24-at-1.46.41-PM.png')} alt="screenshot.png" width="500"/>
4. In this case, we're setting the Key "prods" equal to `products[0].name`, which in this case evaluates to "Baseball Cap."
5. Next, we're going to retrieve this Key/Value pair from the store with the **Load** method. In the K/V Store **Load** component, we're going to assign the retrieved value to the variable `kvprods.`<br/><img src={useBaseUrl('img/api-fortress/2018/05/Screen-Shot-2018-05-24-at-1.47.22-PM.png')} alt="screenshot.png" width="400"/>
6. Finally, we'll add in a **Comment** component to ensure that the data was recovered successfully.<br/><img src={useBaseUrl('img/api-fortress/2018/05/Screen-Shot-2018-05-24-at-1.48.01-PM.png')} alt="screenshot.png" width="400"/>
7. When we run the test, we're presented with the following result:<br/><img src={useBaseUrl('img/api-fortress/2018/05/Screen-Shot-2018-05-24-at-1.48.28-PM.png')} alt="screenshot.png" />

Success!

### Push/Pop Workflow

Next, we're going to take a look at how **Push** and **Pop** work. **Push** and **Pop** are both array methods and behave as they normally do outside of this context. **Push** will append a value to the end of an array. **Pop** will remove the last value in an array.

First, we're going to use **Push**. It should be noted that **Pop** works similarly but with the opposite result. **Pop** _also_ assigns the removed value to a variable which can be used in the context of the test, but can no longer be accessed from the Key/Value Store. We'll discuss this further when we take a look at **Pop**.

1. First, we're going to send a `GET` request and assign a key in the Key/Value Store to a value from the response body. In this case, we're going to use "Color," which is an array.<br/><img src={useBaseUrl('img/api-fortress/2018/05/Screen-Shot-2018-05-24-at-1.49.16-PM.png')} alt="screenshot.png" width="500"/>
2. Next, we're going to **Load** and **Comment** this key. We're doing that so we can actually see the change on the test report at the end of this workflow.
3. The next step is to **Push** the new data on to the end of the existing array. In this case, we're pushing the integer _999_ onto the _prods_ array.<br/><img src={useBaseUrl('img/api-fortress/2018/05/Screen-Shot-2018-05-24-at-2.43.53-PM.png')} alt="screenshot.png" width="500" />
4. Finally, we're going to **Load** the modified data into the test from the K/V Store.<br/><img src={useBaseUrl('img/api-fortress/2018/05/Screen-Shot-2018-05-24-at-1.51.48-PM.png')} alt="screenshot.png" width="400"/>
5. When we run the test, we're presented with the following test report.<br/><img src={useBaseUrl('img/api-fortress/2018/05/Screen-Shot-2018-05-24-at-1.51.59-PM.png')} alt="screenshot.png" />

The comments show us clearly that we have pushed the number 999 onto the array stored in the key _prods._

Now, we've added something to the array. Let's remove it with **Pop**!

1. The first step is to introduce a **Pop** K/V Store component.<br/><img src={useBaseUrl('img/api-fortress/2018/05/Screen-Shot-2018-05-24-at-2.31.17-PM.png')} alt="screenshot.png" width="400"/>

  We provide the **Pop** component with the name of the key from the Key/Value Store, and the name of the variable we'd like to assign the popped value to. Remember, **Pop** removes the last value in an array and returns the value itself. In this case, we're going to assign it to a variable called "Popped."
2. Next, we're going to recall the modified key from the Key/Value Store. Then, we're going to Comment both the recalled Key/Value Store value AND the previously popped value.<br/><img src={useBaseUrl('img/api-fortress/2018/05/Screen-Shot-2018-05-24-at-2.28.58-PM.png')} alt="screenshot.png" width="400"/>
3. Review the Test Report, where you can see the full workflow, showing that we first assigned an array to the Key/Value Store with **Set**, then added to that array with **Push**, and then removed the added value with **Pop**. Each time we made a change, we used **Load** to retrieve an updated value from the Key/Value Store.<br/><img src={useBaseUrl('img/api-fortress/2018/05/Screen-Shot-2018-05-24-at-2.29.09-PM.png')} alt="screenshot.png" />

The last two comments show the final state of the array in the Key/Value Store and the popped value itself. The popped value will only be available within the scope of this test run. The array in the Key/Value Store will remain retrievable and until 24 hours after it's most recent modification.

:::note
Use "Set," "Push," and "Pop" to reset the timer. "Load" does not reset the timer.
:::
