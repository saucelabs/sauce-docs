---
id: deduplication-rules
title: Configure Deduplication Rules
sidebar_label: Configure Deduplication Rules
description: Add custom deduplication rulesets and rules to a project, so Error Reporting groups errors from your callstacks the way your application needs.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Error Reporting groups errors into fingerprints by analyzing their callstacks, a process called deduplication. The same bug can produce slightly different callstacks because of non-determinism, compiler optimizations, or recursion. To group these errors correctly, Error Reporting evaluates each frame of an incoming callstack against a set of rules and decides whether to remove, transform, or keep the frame.

Error Reporting includes rules for common platforms and frameworks out of the box. When your application uses its own frameworks, event dispatchers, or error-handling code, you can add custom rules, so errors with the same root cause are grouped together and different bugs stay separate. For how deduplication works, see [Deduplication](/error-reporting/project-setup/deduplication/).

:::note
Custom deduplication rules are available on the Enterprise plan.
:::

## Introduction to Error Grouping & Fingerprints

Each group of errors is identified by a fingerprint, the primary fault signature that Error Reporting generates from the callstack of an error. All errors with the same fingerprint are grouped together, so you triage and track them as one issue instead of as many separate reports. Deduplication rules decide which frames of the callstack are used to generate the fingerprint.

### How Deduplication Rules Work

Deduplication rules are organized in rulesets:

| Term | Description |
| --- | --- |
| **Backtrace ruleset** | The default ruleset that Error Reporting applies to every incoming callstack. It can't be viewed or edited. |
| **Ruleset** | A named group of rules that you create for a project. Each ruleset can be limited to specific operating systems or languages, and can be enabled or disabled. Rulesets are applied sequentially, in the order they are listed. |
| **Rule** | One or more predicates (IF conditions) that match a frame in the callstack, and the actions to take when they match. If a predicate is omitted, it is considered a wildcard. |

A predicate matches a frame using a regular expression against one of these fields:

| Field | Matches |
| --- | --- |
| **function** | The name of the function. |
| **source** | The name of the source file that the function came from. |
| **object** | The name of the object. |

When a rule matches, its actions change how the frame is used for grouping. For example, an action can rename a function, ignore the current frame, skip frames in the current object file, stop processing after the frame, or add an attribute to the signature values.

:::caution Regular Expression Support
Error Reporting supports "PCRE minus", a subset of the PCRE standard. For the supported syntax, see the [Rust regular expression library documentation](https://docs.rs/regex/latest/regex/).
:::

## Open the Deduplication Settings

Each project has its own deduplication settings and rulesets, which you manage from the project settings.

**Step 1:** In your project, click your profile icon in the top-right corner, and then select **Project Settings & Docs**.

<img src={useBaseUrl('img/error-reporting/error-processing/deduplication/deduplication-rules-1.png')} alt="Project Settings & Docs option in the profile menu" />

**Step 2:** Under **Error processing** in the left menu, click **Deduplication**.

<img src={useBaseUrl('img/error-reporting/error-processing/deduplication/deduplication-rules-2.png')} alt="Deduplication option under Error processing in the Project settings menu" />

The **Deduplication settings** page opens. It shows the information included for grouping, and the rulesets of the project, in the order they are applied. To view the details of a ruleset, click it.

<img src={useBaseUrl('img/error-reporting/error-processing/deduplication/deduplication-rules-3.png')} alt="Deduplication settings page with the Include for grouping toggles and the deduplication rulesets" />

## Configuring Basic Crash Grouping Criteria

Under **Include for grouping**, choose which information from the callstack Error Reporting uses to group errors. Turn on a toggle to include that information in grouping, or turn it off to leave it out.

| Toggle | Includes |
| --- | --- |
| **Executable name** | The name of the executable. |
| **Source file name** | The name of the source file. |
| **Frame associated metadata** | The metadata associated with each frame. |

<img src={useBaseUrl('img/error-reporting/error-processing/deduplication/deduplication-rules-4.png')} alt="Include for grouping toggles for Executable name, Source file name, and Frame associated metadata" />

## Creating and Prioritizing Custom Rulesets

Create a ruleset to group the rules for one part of your application, such as a framework or a platform.

**Step 1:** On the **Deduplication settings** page, click **Add new ruleset**.

<img src={useBaseUrl('img/error-reporting/error-processing/deduplication/deduplication-rules-5.png')} alt="Add new ruleset button on the Deduplication settings page" />

**Step 2:** In the **Create new ruleset** panel, fill in the following fields:

| Sr. No. | Field | Description |
| --- | --- | --- |
| 1 | **Name** | The name of the ruleset. |
| 2 | **Operating systems** | The operating systems that the ruleset applies to. **Any** is selected by default. To include an operating system that isn't listed, enter it in **Other** as a lowercase, space-separated list. |
| 3 | **Languages** | The languages that the ruleset applies to. **Any** is selected by default. To include a language that isn't listed, enter it in **Other** as a lowercase, space-separated list. |
| 4 | **Ruleset enabled for all errors** | Turn on to apply the ruleset to all errors. |

<img src={useBaseUrl('img/error-reporting/error-processing/deduplication/deduplication-rules-6.png')} alt="Create new ruleset panel with numbered Name, Operating systems, Languages, and Ruleset enabled for all errors fields" />

**Step 3:** Add at least one rule to the ruleset. See [Add Rules to a Ruleset](#add-rules-to-a-ruleset).

**Step 4:** Click **Save**.

<img src={useBaseUrl('img/error-reporting/error-processing/deduplication/deduplication-rules-7.png')} alt="Save button in the Create new ruleset panel" />

The ruleset appears under **Deduplication rulesets**. Click it to view its details, including its operating systems, languages, rules, and the **Ruleset testing** field.

<img src={useBaseUrl('img/error-reporting/error-processing/deduplication/deduplication-rules-8.png')} alt="Saved ruleset selected in the list, with its details, rules, and Ruleset testing field" />

### Add Rules to a Ruleset

Rules decide which frames of a callstack Error Reporting uses to group errors. Add a rule for each callstack pattern you want to change, such as frames from an error-handling function that shouldn't be used for grouping.

**Step 1:** In the **Create new ruleset** or **Edit ruleset** panel, click **Add a rule**.

<img src={useBaseUrl('img/error-reporting/error-processing/deduplication/deduplication-rules-9.png')} alt="Add a rule button in the Create new ruleset panel" />

**Step 2:** To add a predicate, click **function**, **object**, or **source**, and enter the regular expression to match. If you omit a predicate, it is considered a wildcard.

<img src={useBaseUrl('img/error-reporting/error-processing/deduplication/deduplication-rules-10.png')} alt="Function, object, source, and Action buttons of a new rule" />

**Step 3:** From the **THEN** dropdown list, select the action to take when the predicates match. To add more actions, click **Action**.

The first predicate appears as **IF**, and each additional predicate appears as **AND**. The following example shows a rule with three predicates and two actions. To remove a predicate or an action, click the **X** next to it.

<img src={useBaseUrl('img/error-reporting/error-processing/deduplication/deduplication-rules-11.png')} alt="Rule with function, object, and source predicates and two THEN actions" />

To change the order of the rules, drag them. To remove a rule, click the delete icon next to it.

#### Rule Examples

The following example shows a more complex rule, with three predicates and the list of all available actions:

<img src={useBaseUrl('img/error-reporting/error-processing/deduplication/deduplication-rules-12.png')} alt="Rule with three predicates and the list of available actions" />

The following example shows a ruleset with two rules. The first rule has three actions: ignoring a frame, skipping frames, and setting a new attribute. The second rule replaces a function name.

<img src={useBaseUrl('img/error-reporting/error-processing/deduplication/deduplication-rules-13.png')} alt="Ruleset with two rules, including a function name replacement" />

### Ruleset Priority

Rulesets are applied sequentially, in the order they are listed under **Deduplication rulesets**. To change the priority of a ruleset, drag it to a new position in the list.

When more than one ruleset can match the same frames, keep this order in mind, and limit each ruleset to the operating systems or languages it is meant for, so its rules apply only to those errors.

## Edit, Disable, or Delete a Ruleset

Disable a ruleset to stop applying its rules without deleting them, for example, while you check how a change affects grouping.

To edit, disable, or delete a ruleset, click the **More options** icon (**⋮**) next to it, and then select **Edit**, **Disable**, or **Delete**. A disabled ruleset appears grayed out in the list.

<img src={useBaseUrl('img/error-reporting/error-processing/deduplication/deduplication-rules-14.png')} alt="More options menu of a ruleset with the Edit, Disable, and Delete options" />

When you select **Edit**, the **Edit ruleset** panel opens. Change the operating systems, languages, or the **Ruleset enabled for all errors** toggle, or click **Add a rule** to add rules, and then click **Save**.

<img src={useBaseUrl('img/error-reporting/error-processing/deduplication/deduplication-rules-15.png')} alt="Edit ruleset panel with the Add a rule button" />

## Test a Ruleset

Before you rely on a ruleset, test it against an error that is already in Error Reporting to preview how the deduplication engine processes its callstack.

**Step 1:** Open the error in the **Debug** view, and copy its instance ID.

**Step 2:** On the **Deduplication settings** page, click the saved ruleset. The **Ruleset testing** field appears in its details.

**Step 3:** Enter the instance ID in the **Ruleset testing** field, and then click **Test**.

<img src={useBaseUrl('img/error-reporting/error-processing/deduplication/deduplication-rules-16.webp')} alt="Ruleset Testing field with an instance ID and the test result" />

## Splitting and Merging Overlapping Errors

When grouping doesn't match your application, the same bug may be split across several fingerprints, or different bugs may share one fingerprint.

- **To split errors that are grouped together**, add a rule that keeps the frames that tell the errors apart, or that adds an attribute to the signature values, so the errors get different fingerprints.
- **To merge errors that are split apart**, add a rule that ignores or skips the frames that differ between them, so the errors get the same fingerprint. To combine existing fingerprints without changing your rules, merge them in the **Triage** view. See [Merge or Unmerge Fingerprints](/error-reporting/triage/other-action/#merge-or-unmerge-fingerprints).

:::note
New rules apply to errors submitted after you save them. To regroup errors that were submitted earlier, reprocess them. See [Reprocess Past Crashes for New Attributes](/error-reporting/project-setup/object-reprocessing/).
:::
