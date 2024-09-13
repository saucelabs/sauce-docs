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

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
- Familiarity with the [API Testing Composer](/api-testing/composer/).

## Tag

The Tag component within the Composer enables you to dynamically tag the resulting document of a test execution. You can add different tags based on dynamic events happening during the test execution, such as a certain value retrieved in the payload. You can assign multiple tags to each test by adding more 'tag' components to it.

This is different from the tags applied when you first [create the test](/api-testing/composer/#create-a-test). That feature enables you to search for that tag(s) filter in your Project **Tests** tab or [**Dashboard**](/api-testing/project-dashboard) tab.

<details>
<summary><strong>Parameters</strong></summary>

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

Static tags will be displayed in your **Tests** list.<br/><img src={useBaseUrl('img/api-testing/testsTag.webp')} alt="Tests tag.jpg"/>

All tags, dynamic and static will mark the test execution documents. On your project **Dashboard**, you can filter events by tags.<br/><img src={useBaseUrl('img/api-testing/projDashTag.webp')} alt="project dashboard tag"/>

</details>
<details>
<summary><strong>Code View Example</strong></summary>

```yaml
- id: tag
  value: Production
```

</details>

## Set (Variable)

In Sauce Labs API Testing you can create variables in several different ways by using `SET (variable)`. This component has different modes that allow you to create variables in different ways, such as `String`, `Data`, and `Language`.

<img src={useBaseUrl('img/api-testing/set-var-component.png')} alt="Set var component" />

<details>
<summary><strong>Parameters</strong></summary>

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

This mode generates a String variable, which can be a static value or a variable taken from the response payload. If it is a static value you just have to write it and the engine will take it as is. If it is a variable the engine will evaluate the variable value every time the test will be executed. Check out [the example](/api-testing/use-cases/set-variable/#mode-string) to learn more about this mode.

**Mode: Data**

Using this mode, the variable will be evaluated (like the Expression field), therefore the variable type can be everything. The variable type will depend on the object being evaluated. In the Data field, you need to enter a single line expression that returns a value. To learn more about this mode, check out [the example](/api-testing/use-cases/set-variable/#mode-data).

**Mode: Language**

This is the most advanced way to create your variables. There are two different options available: `Javascript` and `Template`.

- #### Lang: Javascript

  In this mode you can create your variable by writing a JavaScript script in the `Body` field. It can be a complete script with variable declarations or loops.

- #### Lang: Template

  In this mode you can create your own template in the same way as it is done for Request Body, the advantage here is that you can print the variable to check if all is correct (Body cannot be printed).

You can learn more about this mode by checking out [the example](/api-testing/use-cases/set-variable/#mode-language).

</details>

<details>
<summary><strong>Code View Examples</strong></summary>

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

<details>
<summary><strong>Parameters</strong></summary>

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

Set a variable (which will be a plain string) as a list of colors.

<img src={useBaseUrl('img/api-testing/parseComponentUI_variable.png')} alt="Parse component variable"/>

Next, use the **Comment** component to see what happens if you print “colors[1]” before and after parsing it into JSON.

<img src={useBaseUrl('img/api-testing/parseComponentUI_test.png')} alt="Parse component test"/>

Here are the results of the above test:

<img src={useBaseUrl('img/api-testing/parseComponentUI_results.png')} alt="Parse component test"/>

Before parsing the string, the test will consider the variable `colors` as one big string so `colors[1]` will print `“` as that is the second character in the string. After parsing the string into JSON the system can traverse through the variable as a JSON, so `colors[1]` will print the second element in the JSON array: `blue`.

</details>
<details>
<summary><strong>Code View Examples</strong></summary>

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

<details>
<summary><strong>Parameters</strong></summary>

There are no parameters -- text only.

#### Examples

The first is a normal string value. An example of that would be to explain what a specific WHEN loop is being used for. Similar to when you write comments in code.

```txt
This is a comment
```

The second is useful for test debugging and analysis. You can pass variables into the comments. An example use of this would be to print out the product ID being used in the current loop of a test.

```text
The value of the ID is ${payload.id}
```

</details>

<details>
<summary><strong>Code View Example</strong></summary>

```yaml
- id: comment
  text: This is a comment
```

```yaml
- id: comment
  text: The value of the ID is ${payload.id}
```

</details>

## Flow

This component allows you to pause or stop a test entirely.

<details>
<summary><strong>Parameters</strong></summary>

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

This component is especially useful when combined with the [`If` component](/api-testing/composer/logical-components/#if). See the examples below:

<img src={useBaseUrl('img/api-testing/flow_stop.png')} alt="flow_stop.png"/>

If the statusCode is not `200`, the test will be halted; none of the remaining assertions will be checked.

<img src={useBaseUrl('img/api-testing/flow_wait.png')} alt="flow_wait.png"/>

In this example, the test will wait 1000 milliseconds before performing the `GET` request.

</details>

<details>
<summary><strong>Code View Examples</strong></summary>

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

The Fact component enables you to add information (facts) about the nature of the test execution, along with static or dynamic data. It's used to control the behavior of [Email notifications](/api-testing/project-access/#email-notifications), which (if enabled) alert you to test failures.

Test activity is tracked using test ID number. This may not work if you're testing in multiple environments (i.e., production, staging, QA), as an incident could be environment-specific. When a Fact component is added to a test, it will inform our system which environment the execution relates to so that the incident signature will carry the environment as well.

<details>
<summary><strong>Parameters</strong></summary>

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

Learn how to [improve the email notifications](/api-testing/use-cases/fact/#setting-alert-environments), [disable the notifications](/api-testing/use-cases/fact/#disabling-email-notifications) and [set the thresholds](/api-testing/use-cases/fact/#setting-email-notification-thresholds) by checking the examples.

</details>

<details>
<summary><strong>Code View Examples</strong></summary>

```yaml
- id: fact
  identifier: environment
  label: environment
  value: ${env}
```

</details>

## Call Snippet

:::note
Looking to create or update a snippet? See [Snippets](/api-testing/vault/#snippets).
:::

Creates a Call component that will invoke the snippet. If the snippet changes, all the tests containing the Call component to that snippet will inherit the changes.

## Paste Snippet

This allows you to paste the entire snippet inside the test, which you can then edit as needed. The pasted components will lose any reference to the original snippet.

## K/V Store

The Key/Value store allows you to create temporary key/value pairs that can be accessed across different tests. The Key/Value store is accessed via the Key/Value Store Component.

:::warning
These Key/Value pairs are temporary. They expire after 24 hours has elapsed since the last update to the value itself.
:::

### Methods

The Key/Value Store component has four methods available for use:

- [**Set**](/api-testing/use-cases/key-value/#basic-workflow-set-and-load-methods): creates a new key/value pair in the Key/Value store. The value is entered in the **Data** field.<br/><img src={useBaseUrl('img/api-testing/KeyValueSet.png')} alt="KeyValueSet.png" />
- [**Load**](/api-testing/use-cases/key-value/#basic-workflow-set-and-load-methods): recalls a value from the Key/Value store when provided with a key.<br/><img src={useBaseUrl('img/api-testing/KeyValueLoad.png')} alt="KeyValueLoad.png" />
- [**Push**](/api-testing/use-cases/key-value/#pushpop-workflow): adds a value to the end of an existent value **of the datatype "Array"** in the Key/Value store. If no such key exists, it will create a new array containing the passed in value.  The passed in value is entered in the **Data** field.<br/><img src={useBaseUrl('img/api-testing/KeyValuePush.png')} alt="KeyValuePush.png" />
- [**Pop**](/api-testing/use-cases/key-value/#pushpop-workflow): removes a value from the end of an existent value **of the datatype "Array"** in the Key/Value store.<br/><img src={useBaseUrl('/img/api-testing/KeyValuePop.png')} alt="KeyValuePop.png" />

<details>
<summary><strong>Code View Examples</strong></summary>

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
  object: '[products[0].color]'
```

```yaml
- id: kv
  key:
  action: push
  object:
```

</details>

## More Information

- [Setting up Variables](/api-testing/use-cases/set-variable/)
- [Improving Email Notifications](/api-testing/use-cases/fact/)
- [Variables, Snippets and Files](/api-testing/vault/)
- [Basic workflow using Key/Value Store](/api-testing/use-cases/key-value/)
- [Saving a Token in a Key/Value Store](/api-testing/use-cases/saving-token-kv/)
