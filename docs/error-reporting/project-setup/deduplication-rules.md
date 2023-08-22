---
id: deduplication-rules
title: Customizing Deduplication Rules
sidebar_label: Customizing Deduplication Rules
description: Backtrace offers customers the ability to upload their symbols directly to our systems, or to retrieve symbols from your managed private symbol server on demand.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

Backtrace provides a programmable callstack based fingerprinting system, more commonly called our deduplication system. You can find more detailed information about our deduplication system here.

In summary, this system allows Backtrace to group errors where root cause can be extrapolated from the contents of one or more faulting callstacks. A callstack may have differences for the same bug due to reasons like non-determinism, optimizations and recursion. To account for this, Backtrace built a programmable rules based system that can efficiently evaluate each frame in a callstack to decide if it needs removal or transformation to be normalized for more accurate grouping. We have developed a set of rules that are provided out of the box from common frameworks and platforms. (We call this the Backtrace Ruleset).

## Feature Overview

Backtrace customers on the Enterprise plan can now easily add their own rulesets and rules to best fit their individual use cases and environments. Features include:

- Manage rulesets for a project. A ruleset is evaluated for an incoming callstack to a specified project, and consists of a set of rules for evaluation and an optional language or OS that the rules apply to.
- Manage rules in a ruleset: A rule consists of a reg-ex that can be evaluated on a given frame in a callstack, and a set of actions that should occur if the expression evaluates to true. The actions are extensive, including ability to rename functions, skip frames in current object file, ignore current frame, terminate after frame, add attribute to signature values, and more. The point is that you can create rules to normalize for various optimizations and code paths for a given callstack, optionally limiting to specific language or operating systems.
- Test rulesets to preview actions they would take on an incoming callstack.

## Feature Details

Deduplication rules can be access under Project Settings.

### Deduplication Settings for a Project

Under Project Settings, you'll see a Deduplication section. This section will list for you the named rulesets that are associated with the project, in order of their execution. You will see a default and un-editable ruleset, called the Backtrace Ruleset. These are rules we automatically process for all incoming callstacks (Note you can't view or manage this - it's part of our secret sauce!). You can add and manage additional custom rulesets for the project. See a screenshot below for an out of the box view of project with no custom deduplication rules.

<img src={useBaseUrl('img/error-reporting/project-settings/deduplication-config.png')} alt="deduplication config" />

### Create a Custom Ruleset

Click **Add new ruleset** to create a new ruleset.

<img src={useBaseUrl('img/error-reporting/project-settings/add-new-dedup-ruleset.png')} alt="add new deduplication ruleset" />

As you can see, each ruleset consists of a name, an optional set or languages or OS that the rules within should apply to, an enable/disable toggle, and the ability to add a set of rules that should be evaluated.

### Manage Rules in Rulesets

A rule consists of a set of predicates (IF statements), and a set of actions to take IF the statements evaluate TRUE.
The IF statements evaluate matches against functions, objects, or sources using regex:

- Function is the name of the function.
- Source is the name of the source file that the function came from.
- Object is the name of the object.

Click **Add a rule** to add a new rule.

:::caution Regex Support
Backtrace supports "PCRE minus", a subset of the PCRE standard.
You can find the library at [https://docs.rs/regex/latest/regex/](https://docs.rs/regex/latest/regex/).
:::

<img src={useBaseUrl('img/error-reporting/project-settings/dedup-ruleset.png')} alt="ruleset" />

### More Examples of Rules

Below is an example of a more complex rule, with three predicates and a list of all available actions:

<img src={useBaseUrl('img/error-reporting/project-settings/dedup-ruleset-examples.png')} alt="examples" />

The second example shows two rules for a rule set. The first rule has 3 actions, including ignoring and skipping frames, and setting a new attribute. The second rule shows how to perform a replacement of a function name.

<img src={useBaseUrl('img/error-reporting/project-settings/ruleset-replace-example.png')} alt="ruleset replace example" />

### Enable and Disable

You can quickly enable or disable rules in the toggle menu.

<img src={useBaseUrl('img/error-reporting/project-settings/disable-dedup-rules.webp')} alt="disable deduplication rules" />

### Ruleset Testing

After creating a ruleset, you can test the output of the deduplication engine with an existing crash report (or error) in the system. Just enter the Instance ID of the crash report in the Ruleset Testing field. (You can get an instance ID from the Debug view. You will see the Ruleset Testing field after you have saved a Ruleset).

<img src={useBaseUrl('img/error-reporting/project-settings/dedup-ruleset-testing.webp')} alt="deduplication ruleset testing" />
