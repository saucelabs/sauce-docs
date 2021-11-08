---
id: logical-components
title: API Testing Logical Components
sidebar_label: Logical Components
description: Learn to writing logical components using the Sauce Labs API Testing Composer.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## What You'll Need
* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).

## Each

Allows you to iterate over a collection of elements and execute the piece of code for each element.

<details><summary><strong>Parameters</strong></summary>

<table id="table-api">
  <tbody>
  <tr>
  <td colSpan='2'>Fields</td>
  </tr>
    <tr>
     <td><strong>Expression</strong></td>
     <td><p><small>| REQUIRED | EXPRESSION |</small></p><p>The path of the collection you want to iterate on.</p></td>
    </tr>
  </tbody>
</table>

:::note
See the [Expression page](/api-testing/on-prem/reference/expression) for more details.
:::

#### Examples

<img src={useBaseUrl('img/api-fortress/2020/12/1each.jpg')} alt="1each.jpg"/>

The **for each 'legs' collection** checks if 'vector' item is an integer value.

If a collection is nested in another one, you need to refer to them as `_1`, `_2`, and so on.

<img src={useBaseUrl('img/api-fortress/2020/12/nestedEach.jpg')} alt="nestedEach.jpg"/>

The **for each payload.content.flights** collection checks if 'price.amount' is an integer. Then, the **for each legs** array, which is a nested collection within the flights collection, checks if vector item is an integer value.

</details>




## If

Allows you to run a specific piece of code only if a specific condition is met.

<details><summary><strong>Parameters</strong></summary>

<table id="table-api">
  <tbody>
  <tr>
  <td colSpan='2'>Fields</td>
  </tr>
    <tr>
     <td><strong>Expression</strong></td>
     <td><p><small>| REQUIRED | EXPRESSION |</small></p><p>The condition that evaluates whether or not the code must be executed.</p></td>
    </tr>
  </tbody>
</table>

#### Examples

<img src={useBaseUrl('img/api-fortress/2020/12/if.jpg')} alt="if.jpg"/>

If `payload.success` is equal to true then the code within the element is executed, otherwise is skipped.

<img src={useBaseUrl('img/api-fortress/2020/12/ifexists.jpg')} alt="ifexists.jpg"/>

If `_1.intermediate` exists then the code within the element is executed, otherwise is skipped. This is useful when the element is not always present.

</details>


## While

Allows you to run a block of assertions as long as a condition is valid.

<details><summary><strong>Parameters</strong></summary>

<table id="table-api">
  <tbody>
  <tr>
  <td colSpan='2'>Fields</td>
  </tr>
    <tr>
     <td><strong>Expression</strong></td>
     <td><p><small>| REQUIRED | EXPRESSION |</small></p><p>The condition that has to be met for the assertions block to be executed.</p></td>
    </tr>
  </tbody>
</table>

<img src={useBaseUrl('img/api-fortress/2020/12/while.jpg')} alt="while.jpg"/>

</details>



## Other Components

### Flow (Pause/Stop Test)

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

This component is especially useful when combined with the "If" component. See the examples below:

<img src={useBaseUrl('img/api-fortress/2020/12/flow_stop.jpg')} alt="flow_stop.jpg"/>

If the statusCode is not `200`, the test will be halt; none of the remaining assertions will be checked.

<img src={useBaseUrl('img/api-fortress/2020/12/flow_wait.jpg')} alt="flow_wait.jpg"/>

In this example, the test will wait 1000 milliseconds before performing the `GET` request.

</details>



### Tag

This component is used to dynamically tag the resulting document of a test execution. You can easily find a document by searching for the specific tag, in the same way you can find a test by searching for the tag you assigned to it.

In the composer, you will have the 'tag' component as option to be added. In this way, you can add different tags based on dynamic events happening during the test execution, such as a certain value retrieved in the payload. You can assign multiple tags to each test by adding more 'tag' components to it.

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

<img src={useBaseUrl('img/api-fortress/2020/12/tagComposer.jpg')} alt="tagComposer.jpg"/>

Another way to add a tag to your test is in the test details screen during test definition or edit.

<img src={useBaseUrl('img/api-fortress/2020/12/tagNewtest.png')} alt="Tag Component - create new test"/>

Static tags will be displayed in the tests list.

All tags, dynamic and static will mark the test execution documents. In the project dashboard, you have the ability to filter events by tags.

<img src={useBaseUrl('img/api-fortress/2020/12/projDashTag.jpg')} alt="projDashTag.jpg"/>

</details>


### Comment

This assertion allows you to print out (in test reports) information. It can have two sorts of values, as described below.

#### Examples

The first is a normal string value. An example of that would be to explain what a specific WHEN loop is being used for. Similar to when you write comments in code.

```txt
This is a comment
```

The second is useful for test debugging and analysis. You can pass variables into the comments. An example use of this would be to print out the product ID being used in the current loop of a test.

```bash
The value of the ID is ${payload.id}
```

### Set

Allows you to set a variable for future uses in the test. For example,  you can save a value retrieved from the response and use it in a subsequent call.

<details><summary><strong>Parameters</strong></summary>

Name	Type/Value	Required
Var	String	Yes
Variable mode	‘String’, ‘Data’, ‘Language’	Yes
Value (depends on ‘Variable mode = string’)	String	Yes
Data (depends on ‘Variable mode = data’)	Data	Yes
Lang (depends on ‘Variable mode = language’)	‘Groovy’	Yes
Content (depends on ‘Variable mode = language’)	Data	Yes

<img src={useBaseUrl('img/api-fortress/2020/12/setvar.jpeg')} alt="Set var" width="450" />

Var: artistId Variable mode: String Value: _1.id   

<img src={useBaseUrl('img/api-fortress/2020/12/setvarObject.jpeg')} alt="Set var"/>

Var: sobjects Variable mode: Data Data: payload.findAll {it.name == ‘bananas’}  

<img src={useBaseUrl('img/api-fortress/2020/12/setvarJava.jpeg')} alt="Set var"/>

Var: queries Variable mode: Language Lang: Groovy Content: if (payload.id>100) return ‘furniture’

</details>


### Parse


This component allows you to parse a string into structured data, using one of the available parsers.

<details><summary><strong>Parameters</strong></summary>

<img src={useBaseUrl('img/api-fortress/2020/12/parseComponentUI.jpeg')} alt="Parse component UI"/>

parseVar: the name of the variable you want to parse.
Adapter: the parser to use (i.e. json, xml, etc).

#### Examples

I have set a variable (which will be a plain string), in this case I have a list of colors.

<img src={useBaseUrl('img/api-fortress/2020/12/parseComponentUI_variable.png')} alt="Parse component variable"/>

Next, we can use the comment component to see what happens if I print “colors[1]” before and after parsing it into JSON.

<img src={useBaseUrl('img/api-fortress/2020/12/parseComponentUI_test.png')} alt="Parse component test"/>

Here are the results of the above test:

<img src={useBaseUrl('img/api-fortress/2020/12/parseComponentUI_results.png')} alt="Parse component test"/>

As you can see before parsing the string, the test will consider the variable “colors” as one big string so “colors[1]” will print “ as that is the second character in the string. After parsing the string into JSON we can traverse through the variable as a JSON, so “colors[1]” will print the second element in the JSON array blue.

</details>


### K/V Store


<img src={useBaseUrl('img/api-fortress/2018/05/Screen-Shot-2018-05-24-at-1.22.48-PM-1.png')} alt="screenshot" />

The Key/Value store allows API Fortress users to create temporary key/value pairs that can be accessed across different tests. The Key/Value store is accessed via the Key/Value Store Component.

#### Methods

:::warning
These key/value pairs are temporary. They expire after 24 hours has elapsed since the last update to the value itself.
:::

The Key/Value Store Component has four methods available for use.

#### Set

Set will create a new key/value pair in the Key/Value store. The value is entered in the "_Object_" field.

<img src={useBaseUrl('img/api-fortress/2018/05/Screen-Shot-2018-05-24-at-10.50.19-AM.png')} alt="screenshot" />

#### Load

Load will recall a value from the Key/Value store when provided with a key.

<img src={useBaseUrl('img/api-fortress/2018/05/Screen-Shot-2018-05-24-at-10.50.36-AM.png')} alt="screenshot" />

##### Push

Push will add a value to the end of an existent value **of the datatype "Array"** in the Key/Value store. If no such key exists, it will create a new array containing the passed in value.  The passed in value is entered in the "_Object_" field.

<img src={useBaseUrl('img/api-fortress/2018/05/Screen-Shot-2018-05-24-at-10.51.09-AM.png')} alt="screenshot" />

##### Pop

Pop will remove a value from the end of an existent value **of the datatype "Array"** in the Key/Value store.

<img src={useBaseUrl('img/api-fortress/2018/05/Screen-Shot-2018-05-24-at-10.50.52-AM.png')} alt="screenshot" />


#### Basic Workflow

Let's take a look at how this workflow works in a practical setting. The first example will be a simple set and retrieve of a value in the Key/Value Store.

First, we'll make a GET request to an endpoint.

<img src={useBaseUrl('img/api-fortress/2018/05/Screen-Shot-2018-05-24-at-1.21.40-PM.png')} alt="screenshot" />

Next, we'll add a K/V Store component.

<img src={useBaseUrl('img/api-fortress/2018/05/component.png')} alt="component.png" />

This first K/V Store component (we're going to incorporate several) is going to set the Key/Value pair in the Store, so we're going to use "**Set.**"

<img src={useBaseUrl('img/api-fortress/2018/05/Screen-Shot-2018-05-24-at-1.46.41-PM.png')} alt="screenshot.png" />

In this case we're setting the Key "prods" equal to "products\[0\].name", which in this case evaluates to "Baseball Cap."

Next, we're going to retrieve this Key/Value pair from the store with the "**Load**" method. In the K/V Store "**Load**" component, we're going to assign the retrieved value to the variable "kvprods."

<img src={useBaseUrl('img/api-fortress/2018/05/Screen-Shot-2018-05-24-at-1.47.22-PM.png')} alt="screenshot.png" />

Finally, we'll add in a "**Comment**" component to ensure that the data was recovered successfully.

<img src={useBaseUrl('img/api-fortress/2018/05/Screen-Shot-2018-05-24-at-1.48.01-PM.png')} alt="screenshot.png" />

When we run the test, we're presented with the following result:

<img src={useBaseUrl('img/api-fortress/2018/05/Screen-Shot-2018-05-24-at-1.48.28-PM.png')} alt="screenshot.png" />

Success!

#### Push/Pop Workflow

Next, we're going to take a look at how "**Push**" and "**Pop**" work. "**Push**" and "**Pop**" are both array methods and behave as they normally do outside of this context. "**Push**" will append a value to the end of an array. "**Pop**" will remove the last value in an array.

First, we're going to use "**Push**." It should be noted that "**Pop**" works similarly but with the opposite result. "**Pop**" _also_ assigns the removed value to a variable which can be used in the context of the test, but can no longer be accessed from the Key/Value Store. We'll discuss this further when we take a look at "**Pop**."

First, we're going to send a `GET` request and assign a key in the Key/Value Store to a value from the response body. In this case, we're going to use "Color," which is an array.

<img src={useBaseUrl('img/api-fortress/2018/05/Screen-Shot-2018-05-24-at-1.49.16-PM.png')} alt="screenshot.png" />

Next, we're going to "**Load**" and "**Comment**" this key. We're doing that so we can actually see the change on the test report at the end of this workflow.

The next step is to "**Push**" the new data on to the end of the existing array.

<img src={useBaseUrl('img/api-fortress/2018/05/Screen-Shot-2018-05-24-at-2.43.53-PM.png')} alt="screenshot.png" />

In this case, we're pushing the integer _999_ onto the _prods_ array.

Finally, we're going to "**Load**" the modified data into the test from the K/V Store.

<img src={useBaseUrl('img/api-fortress/2018/05/Screen-Shot-2018-05-24-at-1.51.48-PM.png')} alt="screenshot.png" />

When we run the test, we're presented with the following test report.

<img src={useBaseUrl('img/api-fortress/2018/05/Screen-Shot-2018-05-24-at-1.51.59-PM.png')} alt="screenshot.png" />

The comments show us clearly that we have pushed the number 999 onto the array stored in the key _prods._

Now, we've added something to the array. Let's remove it with "**Pop**!"

The first step is to introduce a "**Pop**" K/V Store component.

<img src={useBaseUrl('img/api-fortress/2018/05/Screen-Shot-2018-05-24-at-2.31.17-PM.png')} alt="screenshot.png" />

We provide the "Pop" component with the name of the key from the Key/Value Store, and the name of the variable we'd like to assign the popped value to. Remember, "**Pop**" removes the last value in an array and returns the value itself. In this case, we're going to assign it to a variable called "Popped."

Next, we're going to recall the modified key from the Key/Value Store. Then, we're going to Comment both the recalled Key/Value Store value AND the previously popped value.

<img src={useBaseUrl('img/api-fortress/2018/05/Screen-Shot-2018-05-24-at-2.28.58-PM.png')} alt="screenshot.png" />

In the Test Report, we can clearly see the full workflow. First, we assigned an array to the Key/Value Store with "**Set**." Then, we added to that array with "**Push**." Finally, we removed the added value with "**Pop**." Each time we made a change, we used "**Load**" to retrieve an updated value from the Key/Value Store.

<img src={useBaseUrl('img/api-fortress/2018/05/Screen-Shot-2018-05-24-at-2.29.09-PM.png')} alt="screenshot.png" />

The last two comments show the final state of the array in the Key/Value Store and the popped value itself. The popped value will only be available within the scope of this test run. The array in the Key/Value Store will remain retrievable and until 24 hours after it's most recent modification.

:::note
Use "Set," "Push," and "Pop" to reset the timer. "Load" does not reset the timer.
:::
