---
id: style-guide
title: Style Guide
sidebar_label: Style Guide
description: The Sauce Labs Documentation Style Guide
keywords:
    - contributing
    - style
    - markdown
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Sauce Labs welcomes your contributions to our documentation!
This document describes the options available for creating content for the site,
along with some guidelines and conventions.

## Markdown

This site uses Docusaurus version 2 beta. Docusaurus uses the 
[remarkable Markdown processor](https://github.com/jonschlinkert/remarkable) to convert 
[Github Flavored Markdown](https://guides.github.com/features/mastering-markdown/) into html. 
[Docusaurus Markdown](https://docusaurus.io/docs/markdown-features) supports 
[Basic Markdown Syntax](https://www.markdownguide.org/basic-syntax) and most 
[Extended Syntax](https://www.markdownguide.org/extended-syntax/). You can see which features are supported 
[here](https://www.markdownguide.org/tools/docusaurus/).

## Frontmatter

At the top of each docs page, you need to include these things: 

| Variable | Description |
| ----------- | ----------- |
|`id`|A brief string that uniquely identifies the page within its parent folder. The id and the name of the file should be the same.|
|`title`|The main title of the page. This value will automatically be rendered using the H1 style at the top of the page.
|`sidebar_label`|This is what will appear in the left hand navigation tree for the page.|
|`description` (optional)|This is what appears when the page is referenced in a Google search result.|
|`keywords` (optional)| A list of terms that help categorize the page for SEO purposes.|

It looks like this in the document:
```markdown
---
id: style-guide
title: Style Guide Introduction
sidebar_label: Style Guide
description: The Sauce Labs Documentation Style Guide
keywords:
    - contributing
    - style
    - markdown
---
```

## Introduction

The first paragraph of the documentation should set the user's expectations for what they will find on the page. 
Describe the key benefits to the user, but do not include links.

## Headers

For accessibility and SEO reasons, never have an H4 header that isn't under an H3 header, 
or an H3 header that isn't under an H2 header.

* H1 headers should never be used in a document since the title is automatically generated as an H1.
* H2 headers are used for SEO, so make sure they succinctly represent what a user will find on the page in that section.
* H3 headers are included in the page's table of contents on the right, so make sure the title describes something
a user might want to directly navigate to.
* H4 headers are to emphasize things within a subsection of the page; these can be longer than the other headers 
if needed because they aren't included in the Table of Contents.

Markdown Code:
```markdown
## H2 Header
### H3 Header
#### H4 Header
```

## Content

All words are rendered in the same paragraph even with line breaks, so long as there isn't an empty line.
As such, it is good practice for each line to be less than 120 characters long for readability, when possible.

<table class="code">
  <tbody>
    <tr>
      <td>

**Markdown**

</td>
      <td>

```markdown
This
will
all
be
on
one
line.

The empty line above creates a new paragraph.

This forces a soft return<br />
rather than creating a new paragraph
```

</td>
</tr>
<tr>
<td>

**Display**

</td>
      <td>

This
will
all
be
on
one
line.

The empty line above creates a new paragraph.

This forces a soft return<br />
rather than creating a new paragraph

</td>
    </tr>
  </tbody>
</table>

## Images

All image files should be included in the `sauce-docs/static/img` directory, in a sub-directory that 
corresponds to the referencing directory. (e.g., images for a document in the `sauce-docs/docs/contributing` directory 
would be located in the `sauce-docs/static/img/contributing` directory.

To add an image from that directory, you need to import a special method by placing this line
below the [Frontmatter](#frontmatter), but above the [Introduction](#introduction)

```markdown
import useBaseUrl from '@docusaurus/useBaseUrl';
```

and then reference the image as follows:
```html
<img src={useBaseUrl('img/contributing/my-image.png')} alt="All images should have alt text" width="250"/>
```

## Videos

Any referenced videos need to be from a Sauce Labs YouTube account.
The suggested iframe code structure is as follows:
```html
<iframe width="560" height="315" src="https://www.youtube.com/embed/-RDh1ukLN8w" frameborder="0" allow="accelerometer; 
autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
```

## Tabs

Tabs are a great option when an example is different in different contexts. 
The primary usage of tabs on this site is to illustrate the same example in multiple languages. 
Ideally, these examples will exist in Java, Node.js, Python, Ruby, and C#, and the tabs should be placed in that order.

:::tip
When a page includes multiple sets of tabs, use a `groupId` so when the user selects a particular tab, 
all tabs with that ID will switch to the selected tab.
:::

To use tabs, you need to import two special methods by placing these lines below the [Frontmatter](#frontmatter),
but above the [Introduction](#introduction):
```markdown
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

and then use the tabs as follows:

<table class="code">
  <tbody>
    <tr>
      <td>

**Markdown**

</td>
      <td>

```markdown
<Tabs
  groupId="lang-ex"
  defaultValue="java"
  values={[
    {label: 'Java', value: 'java'},
    {label: 'Node.js', value: 'js'},
  ]}>
 
<TabItem value="java">

This would include information or examples for Java

</TabItem>
<TabItem value="js">

This would include information or examples for JavaScript

</TabItem>
</Tabs>
```

</td>
</tr>
<tr>
<td>

**Display**

</td>
      <td>

<Tabs
groupId="lang-ex"
defaultValue="java"
values={[
{label: 'Java', value: 'java'},
{label: 'Node.js', value: 'js'},
]}>

<TabItem value="java">

This would include information or examples for Java

</TabItem>
<TabItem value="js">

This would include information or examples for JavaScript

</TabItem>
</Tabs>

</td>
    </tr>
  </tbody>
</table>

## Inline Code

To refer to a single class or method name within a sentence, place single backticks around the name.

<table class="code">
  <tbody>
    <tr>
      <td>

**Markdown**

</td>
      <td>

```markdown
This comment refers to the `RemoteWebDriver` class
```

</td>
</tr>
<tr>
<td>

**Display**

</td>
      <td>

This comment refers to the `RemoteWebDriver` class

</td>
    </tr>
  </tbody>
</table>

## Code Blocks

The best way to display code is with code blocks. Markdown will highlight each language differently, so it is helpful
to specify which language you are using, and it's a good idea to include a title with the code block as well.

<table class="code">
  <tbody>
    <tr>
      <td>

**Markdown**

</td>
      <td>

    ```java title="Custom Title"
    RemoteWebDriver driver = new RemoteWebDriver(url, capabilities);
    ```

</td>
</tr>
<tr>
<td>

**Display**

</td>
      <td>

```java title="Custom Title"
RemoteWebDriver driver = new RemoteWebDriver(url, capabilities);
```

</td>
    </tr>
  </tbody>
</table>

## Code References

The Sauce Labs Open Source Team created a plugin for use with Docusaurus to allow us to reference code on Github
rather than duplicating code in this repo. Ideally all code displayed in the Sauce Labs documentation points to code in
one of the `demo-<language>` repos on 
[Sauce Labs Training Github Org](https://github.com/saucelabs-training/?q=demo#org-repositories).
When referencing code, include the language, "reference" and a title indicating what the sample shows.
The URL for the link can be for the entire file, or include specific line numbers at the end.

:::caution
To ensure that code examples do not go stale and can be easily updated, 
all code references should reference a tag instead of 
a branch name or a commit hash. For our `demo-<language>` repos, we are doing semantic versioning with `docs-<version>`.
So, we will create and use `docs-1.0` or `docs-1.1`, etc., as needed.

To create a new tag in one of the Sauce Labs owned repos:
```shell
git tag -a -m 'reference for Sauce Labs documentation' docs-<version>
git push origin --tags
```
:::


<table class="code">
  <tbody>
    <tr>
      <td>

**Markdown**

</td>
      <td>

    ```java reference title="Example Test"
    https://github.com/saucelabs-training/demo-java/blob/docs-1.0/selenium-examples/src/test/java/com/saucedemo/selenium/demo/SauceBindingsTest.java#L39-L43
    ```

</td>
</tr>
<tr>
<td>

**Display**

</td>
      <td>

```java reference title="Example Test"
https://github.com/saucelabs-training/demo-java/blob/docs-1.0/selenium-examples/src/test/java/com/saucedemo/selenium/demo/SauceBindingsTest.java#L39-L43
```

</td>
    </tr>
  </tbody>
</table>

## Expanding Code Blocks

If you have an especially large code block that you'd like to reference on the page, but do not want 
it to take up too much space on the page by default, we encourage the use of `details` elements.

<table class="code">
  <tbody>
    <tr>
      <td>

**HTML**

</td>
      <td>

```html
<details>
  <summary>
    <strong>Click here</strong> to see an example of something hidden by default.
  </summary>
    This is hidden by default!
</details>
```

</td>
</tr>
<tr>
<td>

**Display**

</td>
      <td>
<details>
  <summary>
    <strong>Click here</strong> to see an example of something hidden by default.
  </summary>
    This is hidden by default!
</details>
</td>
    </tr>
  </tbody>
</table>



## Admonitions

There are 4 types of [Docusaurus Admonitions](https://docusaurus.io/docs/markdown-features/admonitions):
* Note - Relevant information.
* Tip - A user should do this.
* Caution - A user should pay attention to this.
* Warning - A user might do something dangerous!

<table class="code">
  <tbody>
    <tr>
      <td>

**Markdown**

</td>
      <td>

```markdown
:::note
Relevant information for you.
:::

:::tip
You should do this.
:::

:::caution
You should probably pay attention to this.
:::

:::warning
You are about to do something dangerous!
:::
```

</td>
</tr>
<tr>
<td>

**Display**

</td>
      <td>

:::note
Relevant information for you.
:::

:::tip
You should do this.
:::

:::caution
You should probably pay attention to this.
:::

:::warning
You are about to do something dangerous!
:::

</td>
    </tr>
  </tbody>
</table>

## Context Limited

There are two ways to provide context for users for when special conditions or limitations apply to 
designated information.

### Badges

Badges are color-coded images that apply to entire pages or large sections of documentation:

Blue badges are used for everything except for deprecated information which is indicated with a Gold badge

<table class="code">
  <tbody>
    <tr>
      <td>

**HTML**

</td>
      <td>

```html
<p><span className="sauceDBlue">BETA</span></p>
<p><span className="sauceDBlue">ENTERPRISE ONLY</span></p>
<p><span className="sauceDBlue">IOS ONLY</span></p>
<p><span className="sauceDBlue">LIVE TESTING ONLY</span></p>
<p><span className="sauceDBlue">EARLY ACCESS</span></p>

<p><span className="sauceGold">DEPRECATED</span></p>
```

</td>
</tr>
<tr>
<td>

**Display**

</td>
      <td>
<p><span className="sauceDBlue">BETA</span></p>
<p><span className="sauceDBlue">ENTERPRISE ONLY</span></p>
<p><span className="sauceDBlue">IOS ONLY</span></p>
<p><span className="sauceDBlue">LIVE TESTING ONLY</span></p>
<p><span className="sauceDBlue">EARLY ACCESS</span></p>

<p><span className="sauceGold">DEPRECATED</span></p>
</td>
    </tr>
  </tbody>
</table>

### Highlighted Text

For information in a subsection or in a table that needs additional context, use a `span` element with
one of the highlight classes. These can also be used to indicate that the content only applies to specific versions of a 
technology.

<table class="code">
  <tbody>
    <tr>
      <td>

**HTML**

</td>
      <td>

```html
<p><span class="highlight sauce-cloud">Sauce Cloud only</span></p>
<p><span class="highlight docker">Docker only</span></p>
<p><span class="highlight cypress">Cypress</span></p>
<p><span class="highlight playwright">Playwright version >= 1.12</span></p>
<p><span class="highlight testcafe">Testcafe</span></p>
<p><span class="highlight puppeteer">Puppeteer only</span></p>
```

</td>
</tr>
<tr>
<td>

**Display**

</td>
      <td>
<p><span class="highlight sauce-cloud">Sauce Cloud only</span></p>
<p><span class="highlight docker">Docker only</span></p>
<p><span class="highlight cypress">Cypress</span></p>
<p><span class="highlight playwright">Playwright version >= 1.12</span></p>
<p><span class="highlight testcafe">Testcafe</span></p>
<p><span class="highlight puppeteer">Puppeteer only</span></p>
</td>
    </tr>
  </tbody>
</table>

## Cards

For overview pages that have 4 categories, we often use these Boxes. Note that you can't use Markdown inside this html.

<table class="code">
  <tbody>
    <tr>
      <td>

**HTML**

</td>
      <td>

```html
<div className="box-wrapper" markdown="1">
    <div className="box box1 card">
        <div className="container">
            <h2>Box 1</h2>
            <p>Box 1 things.</p>
            <ul>
                <li><a href="">Link 1</a></li>
                <li><a href="">Link 2</a></li>
            </ul>
        </div>
    </div>
    <div className="box box2 card">
        <div className="container">
            <h2>Box 2</h2>
            <p>Box 2 things.</p>
            <ul>
                <li><a href="">Link 1</a></li>
            </ul>
        </div>
    </div>
    <div className="box box3 card">
        <div className="container">
            <h2>Box 3</h2>
            <p>Box 3 things, <a href="">Link 1</a>.</p>
            <ul>
                <li><a href="">Link 2</a></li>
            </ul>
        </div>
    </div>
    <div className="box box4 card">
        <div className="container">
            <h2>Box 4</h2>
            <p>Box 4 things.</p>
            <ul>
                <li><a href="">Link 1</a></li>
                <li><a href="">Link 2</a></li>
            </ul>
        </div>
    </div>
</div>
```

</td>
</tr>
<tr>
<td>

**Display**

</td>
      <td>
<div className="box-wrapper" markdown="1">
  <div className="box box1 card">
    <div className="container">
      <h2>Box 1</h2>
      <p>Box 1 things.</p>
      <ul>
        <li><a href="">Link 1</a></li>
        <li><a href="">Link 2</a></li>
      </ul>
    </div>
  </div>
  <div className="box box2 card">
    <div className="container">
      <h2>Box 2</h2>
      <p>Box 2 things.</p>
       <ul>
        <li><a href="">Link 1</a></li>
      </ul>
   </div>
  </div>
  <div className="box box3 card">
    <div className="container">
      <h2>Box 3</h2>
      <p>Box 3 things, <a href="">Link 1</a>.</p>
        <ul>
        <li><a href="">Link 2</a></li>
      </ul>
  </div>
  </div>
  <div className="box box4 card">
    <div className="container">
    <h2>Box 4</h2>
    <p>Box 4 things.</p>
        <ul>
        <li><a href="">Link 1</a></li>
        <li><a href="">Link 2</a></li>
      </ul>
    </div>
  </div>
</div>
</td>
    </tr>
  </tbody>
</table>
