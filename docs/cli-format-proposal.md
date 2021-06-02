---
id: cli-format-proposal
title: CLI Format Proposal
sidebar_label: CLI Format Proposal
---

## Sample Commands

Consensus: Line between commands makes it easier to read. Solution: make these changes using a CSS style.

---
## `edgedriverVersion` (H2 level)

###### **Description**: allows you to specify the Microsoft Edge driver version you want to use for your tests.

###### **Value Type**: string

###### **Example**:

```java
"edgedriverVersion": "90.0.818.51"
```

---
### `geckodriverVersion` (H3 level)

###### **Description**: allows you to specify the Firefox GeckoDriver version. The default geckodriver version varies based on the version of Firefox specified.
###### **Value Type**: string
###### **Example**:
```java
"geckodriverVersion": "0.27.0"
```
---
#### `seleniumVersion` (H4 level)

<p class="cli"><b>Description</b>: Allows you to specify the version of Selenium you want to use for your test. </p>

<p class="cli"><b>Value Type</b>: <i>string</i></p>

<p class="cli"><b>Example</b>:</p>

```java
"seleniumVersion": "3.141.1"
```

## Other style changes needed

Update style for H4 tag so it looks like a heading (currently it's same size as text).

## Heading 2
### Heading 3
#### heading 4

For heading 4, because it is not _that_ much bigger than the body text, I have also added some spacing below that sets it apart a bit, but perhaps there is something we can do to further distinguish it, style-wise?
