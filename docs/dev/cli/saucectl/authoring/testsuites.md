---
id: testsuites
title: saucectl authoring testsuites
sidebar_label: testsuites
---

Group test cases created with [Sauce AI for Test Authoring](/sauce-ai/ai-authoring) into suites, and run every test case in a suite at once.

**Aliases:** `testsuite`, `ts`

## Usage

```bash
$ saucectl authoring testsuites [command] [flags]
```

## Commands

| Command | Description |
| --- | --- |
| [`list`](#list) | List test suites. |
| [`get`](#get) | Show a test suite. |
| [`create`](#create) | Create a test suite. |
| [`update`](#update) | Update a test suite's name, tags, or test cases. |
| [`delete`](#delete) | Delete a test suite. |
| [`run`](#run) | Queue a run of every test case in a suite. |

All commands also accept the [global options](/dev/cli/saucectl/authoring#global-options), such as `--region`.

## list

List test suites.

**Alias:** `ls`

```bash
$ saucectl authoring testsuites list [flags]
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
      <td><span className="t-cli">--id</span></td>
      <td><span className="t-cli">None</span></td>
      <td>Only these suite IDs. Repeatable.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--search</span></td>
      <td><span className="t-cli">None</span></td>
      <td>Case-insensitive substring match on the suite name.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--start-date</span></td>
      <td><span className="t-cli">None</span></td>
      <td>Only suites created on or after this ISO 8601 date.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--end-date</span></td>
      <td><span className="t-cli">None</span></td>
      <td>Only suites created on or before this ISO 8601 date.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--user-id</span></td>
      <td><span className="t-cli">None</span></td>
      <td>Filter by the ID of the user who created the suite.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--team-id</span></td>
      <td><span className="t-cli">None</span></td>
      <td>Filter by team ID.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--skip</span></td>
      <td><span className="t-cli">None</span></td>
      <td>Number of results to skip. Default is <code>0</code>.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--limit</span></td>
      <td><span className="t-cli">None</span></td>
      <td>Maximum number of results to return. Default is <code>20</code>. Use <code>0</code> to return only the total count.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--all</span></td>
      <td><span className="t-cli">None</span></td>
      <td>Return every result, fetching all pages. <code>--limit</code> is ignored.</td>
    </tr>
  </tbody>
</table>

```bash
saucectl authoring testsuites list
saucectl authoring testsuites list --search regression -o json
```

## get

Show a test suite.

```bash
$ saucectl authoring testsuites get <id> [flags]
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
saucectl authoring testsuites get 3f2a9c1e4b5d6e7f8a9b0c1d2e3f4a5b
```

## create

Create a test suite.

```bash
$ saucectl authoring testsuites create [flags]
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
      <td><b>Required.</b> Name of the suite, 1 to 255 characters.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--tag</span></td>
      <td><span className="t-cli">None</span></td>
      <td>Tag for the suite. Repeatable.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--test-case</span></td>
      <td><span className="t-cli">None</span></td>
      <td>ID of a test case to include. Repeatable.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--out</span></td>
      <td><span className="t-cli">-o</span></td>
      <td>Output format. Options: <code>text</code> (default) and <code>json</code>.</td>
    </tr>
  </tbody>
</table>

```bash
saucectl authoring testsuites create --name "Checkout Regression" --tag smoke \
    --test-case 6a882c1dc8b4482c166e96c9 --test-case 6a6b903c0405fb400076b2ba
```

## update

Update a test suite's name, tags, or test cases. You must specify at least one change.

To change the suite's test cases, either replace the whole list with `--test-case`, or add and remove individual test cases with `--add-test-case` and `--remove-test-case`. You can't combine the two forms.

```bash
$ saucectl authoring testsuites update <id> [flags]
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
      <td>New name for the suite.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--tag</span></td>
      <td><span className="t-cli">None</span></td>
      <td>Replace the suite's tags with these. Repeatable.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--test-case</span></td>
      <td><span className="t-cli">None</span></td>
      <td>Replace the suite's test cases with these test case IDs. Repeatable.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--add-test-case</span></td>
      <td><span className="t-cli">None</span></td>
      <td>Add this test case ID to the suite. Repeatable.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--remove-test-case</span></td>
      <td><span className="t-cli">None</span></td>
      <td>Remove this test case ID from the suite. Repeatable.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--out</span></td>
      <td><span className="t-cli">-o</span></td>
      <td>Output format. Options: <code>text</code> (default) and <code>json</code>.</td>
    </tr>
  </tbody>
</table>

```bash
saucectl authoring testsuites update 3f2a9c1e4b5d6e7f8a9b0c1d2e3f4a5b --name "Checkout Regression v2"
saucectl authoring testsuites update 3f2a9c1e4b5d6e7f8a9b0c1d2e3f4a5b --add-test-case 6a882c1dc8b4482c166e96c9
saucectl authoring testsuites update 3f2a9c1e4b5d6e7f8a9b0c1d2e3f4a5b --remove-test-case 6a6b903c0405fb400076b2ba
```

## delete

Delete a test suite. The suite's test cases are kept and are no longer assigned to a suite, unless you pass `--delete-test-cases`, which deletes every test case in the suite too.

**Alias:** `rm`

```bash
$ saucectl authoring testsuites delete <id> [flags]
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
      <td><span className="t-cli">--delete-test-cases</span></td>
      <td><span className="t-cli">None</span></td>
      <td>Also delete every test case in the suite.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--yes</span></td>
      <td><span className="t-cli">-y</span></td>
      <td>Skip the confirmation prompt. Required when <code>saucectl</code> is not running interactively.</td>
    </tr>
  </tbody>
</table>

```bash
saucectl authoring testsuites delete 3f2a9c1e4b5d6e7f8a9b0c1d2e3f4a5b
saucectl authoring testsuites delete 3f2a9c1e4b5d6e7f8a9b0c1d2e3f4a5b --delete-test-cases --yes
```

## run

Queue a run of every test case in a suite. The command reports only how many runs were queued. It doesn't return run IDs, so you can't follow the results from this command.

To wait for results and fail a pipeline when a test fails, use [`saucectl run`](/dev/cli/saucectl/run) with a `kind: authoring` configuration instead.

```bash
$ saucectl authoring testsuites run <id> [flags]
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
      <td><span className="t-cli">--build</span></td>
      <td><span className="t-cli">None</span></td>
      <td>Build name to group the runs under.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--out</span></td>
      <td><span className="t-cli">-o</span></td>
      <td>Output format. Options: <code>text</code> (default) and <code>json</code>.</td>
    </tr>
  </tbody>
</table>

```bash
saucectl authoring testsuites run 3f2a9c1e4b5d6e7f8a9b0c1d2e3f4a5b --build nightly
```
