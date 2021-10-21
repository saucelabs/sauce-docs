---
id: writing-tests-in-code
title: Writing Tests in Code
sidebar_label: Writing Tests in Code
keywords:
    - api-testing
    - how-to
    - writing-tests
---

import useBaseUrl from '@docusaurus/useBaseUrl';

API Fortress has three unique advantages in the market - magic, the visual composer, and the built in assertions/operations. With that said, you are not bound to them exclusively.

If you are more comfortable using code, that option is available as well.

## Code View

First, the whole test can be seen and edited "naked," without our _glamorous_ UI. Behind the curtains, the test is described using the XML markup language.

To use it, you simply need to look at the top right of the composer. The default is VISUAL COMPOSER, but right next to it is CODE VIEW. Click that.

<img src={useBaseUrl('img/api-fortress/2017/10/code-view-1.png')} alt="code-view-1.png" />

Now you will see the markup language that is the basis of API Fortress.

<img src={useBaseUrl('img/api-fortress/2017/10/code-view-2.png')} alt="code-view-2.png" />

More experienced testers may find this to be the most efficient manner to use the platform. Tip: The best way to learn the markup? Build your tests using the visual composer/magic, then switch to code view and have a look!

## A Groovier Approach

Whether you are using the code view, or the visual composer, one important aspect to note is that all "evaluated" fields are actually able to execute a subset of Groovy commands.

For example, let's take this assertion that verifies whether the "items" element is an array. 

<img src={useBaseUrl('img/api-fortress/2017/10/assert-is.png')} alt="assert-is.png" />

Or in code view: 

```js
<assert-is expression="payload.whatever.items" type="array"/>
```

Now let's say you know something more about this array, such as it should always contain more than 3 elements:

<img src={useBaseUrl('img/api-fortress/2017/10/assert_greater.png')} alt="assert_greater.png" />

Or in code view 

```js
<assert-greater expression="payload.whatever.items.size()" value="3" type="integer"/>
```
Notice how in the _expression_ field we deliberately used the `size()` command to retrieve the size of the object at its left.

## Even More Serious Grooviness

Moreover, Groovy can be put within SET components.

The first scenario is when you want to set a variable that is not a String. The best way to do it is using the Variable Mode "Object." The value, in this case, will be evaluated as Groovy code.

<img src={useBaseUrl('img/api-fortress/2017/10/set_obj.png')} alt="set_obj.png" />

```js
<set var="number" object="otherNumber+50"/>
```

Here we are assuming that otherObject is a predefined numeric variable. When the SET is executed, the _number_ variable will be an integer.

The second scenario is when you want to write extensive logic.

Choose the SET component, then choose the item "Language" in the type drop-down (when using Visual Composer), or enter `lang="java"` when writing it in Code View.

<img src={useBaseUrl('img/api-fortress/2017/10/set.png')} alt="set.png" />

Or in code view:

```js
<set var="myVar" lang="java"> <![CDATA[ def item = payload.whatever.items.find { it -> it.id==11 } return item.amount ]]> </set>
```

## Templating

What about all the fields that are not explicitly evaluated? Like _URL_, _value_, or _POST Body?_ Or the content of a comment? It is often extremely useful to evaluate content on those as well. This is possible using the template syntax. 

<img src={useBaseUrl('img/api-fortress/2017/10/eq.png')} alt="eq.png" />

```js
<assert-equals expression="payload.id" value="${req_id}"/>`
```

This assertion, for example, is evaluating the _req\_id_ variable right within the value.

## A Little Bit of Everything

Let's join everything we've learned into one snippet:

```js
<set var="data" lang="java">
<!\[CDATA\[
  def items = payoad.whatever.items.find{ it-> it.id>100}
  return items.collect{ it -> it.providerId}
\]\]>
</set>
<each expression="data">
  <post url="http://www.example.com/${counter+1}" params="\[:\]" var="payload2" mode="json">
   <postBody contentType="application/json">
     <!\[CDATA\[{"providerId":${\_1}}\]\]>
   </postBody>
  </post>
  <set var="counter" object="counter+1"/>
</each>
```

## Want to learn more about Groovy?

Follow this link to the official documentation: [http://groovy-lang.org/documentation.html](http://groovy-lang.org/documentation.html)

:::caution IMPORTANT!
For security concerns, the cloud version of API Fortress is sandboxed. Meaning many programming language features are disabled. Self-hosted/on-premises eliminates that restraint. While on cloud, if you think a specific feature should be safe to be enabled but is disabled, please contact us and we'll do our best to help you!
:::