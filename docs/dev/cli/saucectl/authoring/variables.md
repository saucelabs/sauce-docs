---
id: variables
title: saucectl authoring variables
sidebar_label: variables
---

Manage [Data Variables](/sauce-ai/test-authoring/data-variables), the shared values such as usernames, passwords, and URLs that authored tests can reference.

Every variable belongs to one of four scopes: `org`, `team`, `testSuite`, or `testCase`. Org variables are visible to every team in your organization. Variables in the other scopes are visible only to the team that owns them. Only the owning team can update or delete a variable.

**Aliases:** `variable`, `var`

## Usage

```bash
$ saucectl authoring variables [command] [flags]
```

## Commands

| Command | Description |
| --- | --- |
| [`list`](#list) | List variables. |
| [`get`](#get) | Show a variable. |
| [`create`](#create) | Create a variable. |
| [`update`](#update) | Change a variable's name, description, value, or secret setting. |
| [`delete`](#delete) | Delete a variable. |

All commands also accept the [global options](/dev/cli/saucectl/authoring#global-options), such as `--region`.

:::note
A secret variable's value is stored separately and is never returned by any command.
:::

## list

List variables.

**Alias:** `ls`

```bash
$ saucectl authoring variables list [flags]
```

<table id="table-cli">
  <thead>
    <tr>
      <th width="30%">Flag</th>
      <th width="10%">Shorthand</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span className="t-cli">--out</span></td>
      <td><span className="t-cli">-o</span></td>
      <td>Output format. Options: <code>text</code> (default) and <code>json</code>.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--scope</span></td>
      <td><span className="t-cli">None</span></td>
      <td>Filter by scope. Options: <code>org</code>, <code>team</code>, <code>testSuite</code>, and <code>testCase</code>.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--test-suite-id</span></td>
      <td><span className="t-cli">None</span></td>
      <td>Suite ID. Required with <code>--scope testSuite</code>.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--test-case-id</span></td>
      <td><span className="t-cli">None</span></td>
      <td>Test case ID. Required with <code>--scope testCase</code>.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--search</span></td>
      <td><span className="t-cli">None</span></td>
      <td>Case-insensitive substring match on the variable name.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--skip</span></td>
      <td><span className="t-cli">None</span></td>
      <td>Number of results to skip. Default is <code>0</code>.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--limit</span></td>
      <td><span className="t-cli">None</span></td>
      <td>Maximum number of results to return, from <code>1</code> to <code>200</code>. Default is <code>20</code>. Unlike other list commands, <code>0</code> is not supported.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--all</span></td>
      <td><span className="t-cli">None</span></td>
      <td>Return every result, fetching all pages. <code>--limit</code> is ignored.</td>
    </tr>
  </tbody>
</table>

```bash
saucectl authoring variables list --scope org
saucectl authoring variables list --scope testSuite --test-suite-id <test-suite-id>
saucectl authoring variables list --search pass -o json
```

## get

Show a variable.

```bash
$ saucectl authoring variables get <id> [flags]
```

<table id="table-cli">
  <thead>
    <tr>
      <th width="30%">Flag</th>
      <th width="10%">Shorthand</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span className="t-cli">--out</span></td>
      <td><span className="t-cli">-o</span></td>
      <td>Output format. Options: <code>text</code> (default) and <code>json</code>.</td>
    </tr>
  </tbody>
</table>

```bash
saucectl authoring variables get <variable-id>
```

## create

Create a variable in the `org`, `team`, `testSuite`, or `testCase` scope.

Supply the value with exactly one of `--value`, `--value-from-env`, or `--value-from-file`. If you supply none of them, an interactive session prompts for the value, masking the input for `--secret`. A non-interactive session fails.

:::caution
A value passed with `--value` is visible in your shell history and the process list. For secrets, use `--value-from-env` or `--value-from-file`.
:::

```bash
$ saucectl authoring variables create [flags]
```

<table id="table-cli">
  <thead>
    <tr>
      <th width="30%">Flag</th>
      <th width="10%">Shorthand</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span className="t-cli">--scope</span></td>
      <td><span className="t-cli">None</span></td>
      <td><b>Required.</b> Options: <code>org</code>, <code>team</code>, <code>testSuite</code>, and <code>testCase</code>.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--name</span></td>
      <td><span className="t-cli">None</span></td>
      <td><b>Required.</b> Lowercase letters, digits, and underscores only, 1 to 255 characters.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--test-suite-id</span></td>
      <td><span className="t-cli">None</span></td>
      <td>Suite ID. Required with <code>--scope testSuite</code>.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--test-case-id</span></td>
      <td><span className="t-cli">None</span></td>
      <td>Test case ID. Required with <code>--scope testCase</code>.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--value</span></td>
      <td><span className="t-cli">None</span></td>
      <td>The value.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--value-from-env</span></td>
      <td><span className="t-cli">None</span></td>
      <td>Read the value from this environment variable.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--value-from-file</span></td>
      <td><span className="t-cli">None</span></td>
      <td>Read the value from this file, or use <code>-</code> to read it from standard input. One trailing newline is removed.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--secret</span></td>
      <td><span className="t-cli">None</span></td>
      <td>Mark the value as secret. It is never displayed again.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--description</span></td>
      <td><span className="t-cli">None</span></td>
      <td>Description, up to 1000 characters.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--out</span></td>
      <td><span className="t-cli">-o</span></td>
      <td>Output format. Options: <code>text</code> (default) and <code>json</code>.</td>
    </tr>
  </tbody>
</table>

```bash
saucectl authoring variables create --scope org --name password --secret --value-from-env SAUCE_DEMO_PASSWORD
echo -n "standard_user" | saucectl authoring variables create --scope team --name username --value-from-file -
saucectl authoring variables create --scope testCase --test-case-id <test-case-id> --name coupon --value SAVE10
```

## update

Change a variable's name, description, value, or secret setting. Only the flags you specify change, and you must specify at least one.

Updates are protected against concurrent edits. By default, `saucectl` reads the variable first and sends its current version with the update, so if someone else changes the variable in between, the update is refused instead of overwriting their change. To check against a version you read earlier, pass `--expected-last-update`.

```bash
$ saucectl authoring variables update <id> [flags]
```

<table id="table-cli">
  <thead>
    <tr>
      <th width="30%">Flag</th>
      <th width="10%">Shorthand</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span className="t-cli">--name</span></td>
      <td><span className="t-cli">None</span></td>
      <td>New name. Lowercase letters, digits, and underscores only.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--description</span></td>
      <td><span className="t-cli">None</span></td>
      <td>New description, up to 1000 characters.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--value</span></td>
      <td><span className="t-cli">None</span></td>
      <td>New value.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--value-from-env</span></td>
      <td><span className="t-cli">None</span></td>
      <td>Read the new value from this environment variable.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--value-from-file</span></td>
      <td><span className="t-cli">None</span></td>
      <td>Read the new value from this file, or use <code>-</code> to read it from standard input. One trailing newline is removed.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--secret</span></td>
      <td><span className="t-cli">None</span></td>
      <td>Set whether the value is secret, with <code>--secret=true</code> or <code>--secret=false</code>. If you don't supply a new value, the existing value is moved between normal and secret storage.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--expected-last-update</span></td>
      <td><span className="t-cli">None</span></td>
      <td>The <code>lastUpdate</code> value from an earlier read. The update fails if the variable has changed since then. Default is to read the current value first.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--out</span></td>
      <td><span className="t-cli">-o</span></td>
      <td>Output format. Options: <code>text</code> (default) and <code>json</code>.</td>
    </tr>
  </tbody>
</table>

```bash
saucectl authoring variables update <variable-id> --value-from-env NEW_PASSWORD
saucectl authoring variables update <variable-id> --secret=true
saucectl authoring variables update <variable-id> --description "Rotated 2026-09" \
    --expected-last-update <last-update>
```

## delete

Delete a variable. If the variable is secret, its stored value is deleted too.

**Alias:** `rm`

```bash
$ saucectl authoring variables delete <id> [flags]
```

<table id="table-cli">
  <thead>
    <tr>
      <th width="30%">Flag</th>
      <th width="10%">Shorthand</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span className="t-cli">--expected-last-update</span></td>
      <td><span className="t-cli">None</span></td>
      <td>The <code>lastUpdate</code> value from an earlier read. The delete fails if the variable has changed since then. Default is the current value.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--yes</span></td>
      <td><span className="t-cli">-y</span></td>
      <td>Skip the confirmation prompt. Required when <code>saucectl</code> is not running interactively.</td>
    </tr>
  </tbody>
</table>

```bash
saucectl authoring variables delete <variable-id>
saucectl authoring variables delete <variable-id> --yes --expected-last-update <last-update>
```
