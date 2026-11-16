---
id: testcases
title: saucectl authoring testcases
sidebar_label: testcases
---

Inspect, run, author, and export test cases created with [Sauce AI for Test Authoring](/sauce-ai/ai-authoring).

**Aliases:** `testcase`, `tc`

## Usage

```bash
$ saucectl authoring testcases [command] [flags]
```

## Commands

| Command | Description |
| --- | --- |
| [`list`](#list) | List test cases. |
| [`list-tags`](#list-tags) | List every tag in use across your organization's test cases. |
| [`get`](#get) | Show a test case, optionally with its recorded steps. |
| [`generate`](#generate) | Author a new test case from a plain-language description. |
| [`generate-status`](#generate-status) | Show the status of an authoring task, or reattach and wait for it. |
| [`rename`](#rename) | Rename a test case. |
| [`delete`](#delete) | Delete a test case. |
| [`run`](#run) | Start a run of a test case. |
| [`list-runs`](#list-runs) | List the runs of a test case. |
| [`get-run`](#get-run) | Show a single run with its jobs. |
| [`list-code-targets`](#list-code-targets) | List the languages and frameworks a test case can be exported to. |
| [`code`](#code) | Export a test case as source code. |

All commands also accept the [global options](/dev/cli/saucectl/authoring#global-options), such as `--region`.

## list

List test cases.

**Alias:** `ls`

```bash
$ saucectl authoring testcases list [flags]
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
      <td><span className="t-cli">--search</span></td>
      <td><span className="t-cli">None</span></td>
      <td>Case-insensitive substring match on the test case name.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--tag</span></td>
      <td><span className="t-cli">None</span></td>
      <td>Filter by tag (case-sensitive). Repeatable. Returns test cases that have any of the tags.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--test-suite-id</span></td>
      <td><span className="t-cli">None</span></td>
      <td>Filter by test suite ID. Repeatable. Use <code>null</code> for test cases that are not in a suite.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--start-date</span></td>
      <td><span className="t-cli">None</span></td>
      <td>Only test cases created on or after this ISO 8601 date.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--end-date</span></td>
      <td><span className="t-cli">None</span></td>
      <td>Only test cases created on or before this ISO 8601 date.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--user-id</span></td>
      <td><span className="t-cli">None</span></td>
      <td>Filter by the ID of the user who created the test case.</td>
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
saucectl authoring testcases list
saucectl authoring testcases list --search checkout --tag smoke
saucectl authoring testcases list --test-suite-id <test-suite-id> -o json
saucectl authoring testcases list --limit 0
```

## list-tags

List every tag in use across your organization's test cases.

**Alias:** `tags`

```bash
$ saucectl authoring testcases list-tags [flags]
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
saucectl authoring testcases list-tags
```

## get

Show a test case, optionally with the steps recorded in its latest revision.

```bash
$ saucectl authoring testcases get <id> [flags]
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
      <td><span className="t-cli">--revision</span></td>
      <td><span className="t-cli">None</span></td>
      <td>Show this revision instead of the latest.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--show-steps</span></td>
      <td><span className="t-cli">None</span></td>
      <td>Also print the revision's recorded steps.</td>
    </tr>
  </tbody>
</table>

```bash
saucectl authoring testcases get <test-case-id>
saucectl authoring testcases get <test-case-id> --show-steps
saucectl authoring testcases get <test-case-id> -o json | jq '.revisions[-1].steps'
```

## generate

Author a new test case. You describe the user journey, the starting URL, and a target, and an AI agent drives a real browser or device to work out the steps. The result is saved as a test case.

Authoring is asynchronous. Without `--wait`, the command prints the task ID and returns. With `--wait`, it streams each action the agent attempts as it happens. If the wait is interrupted or times out, the task keeps running on Sauce Labs. You can reattach with [`generate-status`](#generate-status).

```bash
$ saucectl authoring testcases generate [flags]
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
      <td><b>Required.</b> Name of the new test case, 1 to 255 characters.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--intent</span></td>
      <td><span className="t-cli">None</span></td>
      <td><b>Required</b> if <code>--intent-file</code> isn't set. Plain-language description of what the test should do, 1 to 20000 characters. Set either <code>--intent</code> or <code>--intent-file</code>. Setting both, or neither, returns an error.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--intent-file</span></td>
      <td><span className="t-cli">None</span></td>
      <td><b>Required</b> if <code>--intent</code> isn't set. Read the description from a file, or use <code>-</code> to read it from standard input.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--target</span></td>
      <td><span className="t-cli">None</span></td>
      <td>Target capabilities as <code>key=value</code> pairs. See <a href="#specify-targets">Specify Targets</a>. Exactly one target is required, set with <code>--target</code> or <code>--target-json</code>.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--target-json</span></td>
      <td><span className="t-cli">None</span></td>
      <td>Target capabilities as a JSON object, or <code>@path</code> to a JSON file. See <a href="#specify-targets">Specify Targets</a>.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--test-url</span></td>
      <td><span className="t-cli">None</span></td>
      <td>Starting URL, up to 2048 characters.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--test-suite-id</span></td>
      <td><span className="t-cli">None</span></td>
      <td>Add the new test case to this suite.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--tag</span></td>
      <td><span className="t-cli">None</span></td>
      <td>Tag for the new test case. Repeatable, up to 20 tags of up to 60 characters each.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--max-steps</span></td>
      <td><span className="t-cli">None</span></td>
      <td>Maximum number of actions the agent can take, 1 to 200. Default is the service default.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--tunnel-name</span></td>
      <td><span className="t-cli">None</span></td>
      <td>Name of an active Sauce Connect tunnel to route the session through.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--generation-timeout</span></td>
      <td><span className="t-cli">None</span></td>
      <td>Time the service can spend authoring the test case, from <code>1m</code> to <code>1h</code>. Default is the service default.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--wait</span></td>
      <td><span className="t-cli">None</span></td>
      <td>Wait for authoring to finish, streaming each action as it happens.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--poll-interval</span></td>
      <td><span className="t-cli">None</span></td>
      <td>How often to check the task status while waiting. Default is <code>3s</code>.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--wait-timeout</span></td>
      <td><span className="t-cli">None</span></td>
      <td>How long <code>saucectl</code> waits before it stops watching. With the default of <code>0</code>, the wait is <code>--generation-timeout</code> plus two minutes, or <code>1h2m</code> if no generation timeout is set.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--out</span></td>
      <td><span className="t-cli">-o</span></td>
      <td>Output format. Options: <code>text</code> (default) and <code>json</code>. With <code>json</code>, progress is not streamed and a single final object is printed.</td>
    </tr>
  </tbody>
</table>

```bash
saucectl authoring testcases generate --name "Login" \
    --intent "Log in as standard_user and verify the inventory page loads" \
    --test-url https://www.saucedemo.com \
    --target browserName=chrome,platformName="Windows 11" --wait

saucectl authoring testcases generate --name "Checkout" --intent-file checkout.txt \
    --target-json @pixel9.json --tag mobile --generation-timeout 15m
```

## generate-status

Show the status of an authoring task started with [`generate`](#generate), or reattach to it and wait for it to finish.

```bash
$ saucectl authoring testcases generate-status <task-id> [flags]
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
      <td><span className="t-cli">--wait</span></td>
      <td><span className="t-cli">None</span></td>
      <td>Wait for the task to finish, streaming each action as it happens.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--poll-interval</span></td>
      <td><span className="t-cli">None</span></td>
      <td>How often to check the task status while waiting. Default is <code>3s</code>.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--wait-timeout</span></td>
      <td><span className="t-cli">None</span></td>
      <td>How long <code>saucectl</code> waits before it stops watching. The default of <code>0</code> means <code>1h2m</code>.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--out</span></td>
      <td><span className="t-cli">-o</span></td>
      <td>Output format. Options: <code>text</code> (default) and <code>json</code>.</td>
    </tr>
  </tbody>
</table>

```bash
saucectl authoring testcases generate-status <task-id>
saucectl authoring testcases generate-status <task-id> --wait
```

## rename

Rename a test case.

```bash
$ saucectl authoring testcases rename <id> <name> [flags]
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
saucectl authoring testcases rename <test-case-id> "Checkout - add two items"
```

## delete

Delete a test case.

**Alias:** `rm`

```bash
$ saucectl authoring testcases delete <id> [flags]
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
      <td><span className="t-cli">--yes</span></td>
      <td><span className="t-cli">-y</span></td>
      <td>Skip the confirmation prompt. Required when <code>saucectl</code> is not running interactively.</td>
    </tr>
  </tbody>
</table>

```bash
saucectl authoring testcases delete <test-case-id> --yes
```

## run

Start a run of a test case against its stored run targets, or against the targets you set with `--target` or `--target-json`. The command returns as soon as the run is accepted. Use [`get-run`](#get-run) to check on it.

To wait for results, report them, and fail a pipeline when a test fails, use [`saucectl run`](/dev/cli/saucectl/run) with a `kind: authoring` configuration instead.

:::note
Without `--tunnel-name`, the run starts with no tunnel, and any tunnel name stored on the test case is cleared.
:::

```bash
$ saucectl authoring testcases run <id> [flags]
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
      <td><span className="t-cli">--target</span></td>
      <td><span className="t-cli">None</span></td>
      <td>Target capabilities as <code>key=value</code> pairs. Repeatable. See <a href="#specify-targets">Specify Targets</a>.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--target-json</span></td>
      <td><span className="t-cli">None</span></td>
      <td>Target capabilities as a JSON object, or <code>@path</code> to a JSON file. Repeatable. See <a href="#specify-targets">Specify Targets</a>.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--build</span></td>
      <td><span className="t-cli">None</span></td>
      <td>Build name to group the run's jobs under, up to 100 characters.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--tunnel-name</span></td>
      <td><span className="t-cli">None</span></td>
      <td>Name of an active Sauce Connect tunnel to route the run through.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--revision</span></td>
      <td><span className="t-cli">None</span></td>
      <td>Run this revision instead of the latest.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--out</span></td>
      <td><span className="t-cli">-o</span></td>
      <td>Output format. Options: <code>text</code> (default) and <code>json</code>.</td>
    </tr>
  </tbody>
</table>

```bash
saucectl authoring testcases run <test-case-id> --build nightly
saucectl authoring testcases run <test-case-id> --target browserName=firefox,platformName="Windows 11"
saucectl authoring testcases run <test-case-id> --target-json @pixel9.json --tunnel-name my-tunnel
```

## list-runs

List the runs of a test case.

**Alias:** `runs`

```bash
$ saucectl authoring testcases list-runs <id> [flags]
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
      <td><span className="t-cli">--start-date</span></td>
      <td><span className="t-cli">None</span></td>
      <td>Only runs created on or after this ISO 8601 date.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--end-date</span></td>
      <td><span className="t-cli">None</span></td>
      <td>Only runs created on or before this ISO 8601 date.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--user-id</span></td>
      <td><span className="t-cli">None</span></td>
      <td>Only runs started by this user ID.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--team-id</span></td>
      <td><span className="t-cli">None</span></td>
      <td>Only runs that belong to this team ID.</td>
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
saucectl authoring testcases list-runs <test-case-id>
saucectl authoring testcases list-runs <test-case-id> --all -o json
```

## get-run

Show a single run of a test case, with its jobs.

```bash
$ saucectl authoring testcases get-run <id> <run-id> [flags]
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
saucectl authoring testcases get-run <test-case-id> <run-id>
```

## list-code-targets

List the languages and frameworks that a test case can be exported to with [`code`](#code). The available targets depend on the test case's platform.

**Alias:** `code-targets`

```bash
$ saucectl authoring testcases list-code-targets <id> [flags]
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
saucectl authoring testcases list-code-targets <test-case-id>
```

## code

Export the latest revision of a test case as source code for a language and framework.

By default, the source code is printed to standard output so that you can redirect it. Use `--filename` to write it to a file, or `--target-dir` to write it to a directory with a filename based on the target's language. Existing files are not overwritten unless you pass `--force`. If you leave out `--target` in an interactive session, `saucectl` prompts you to choose one.

```bash
$ saucectl authoring testcases code <id> [flags]
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
      <td><span className="t-cli">--target</span></td>
      <td><span className="t-cli">None</span></td>
      <td>Code generation target, for example <code>typescript_playwright</code>. See <a href="#list-code-targets">list-code-targets</a>.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--filename</span></td>
      <td><span className="t-cli">-f</span></td>
      <td>Write the source code to this file.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--target-dir</span></td>
      <td><span className="t-cli">-d</span></td>
      <td>Write the source code to this directory, with a filename based on the target.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--force</span></td>
      <td><span className="t-cli">None</span></td>
      <td>Overwrite an existing file.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--out</span></td>
      <td><span className="t-cli">-o</span></td>
      <td>Output format when printing to standard output. Options: <code>text</code> (default, the raw source code) and <code>json</code>.</td>
    </tr>
  </tbody>
</table>

```bash
saucectl authoring testcases code <test-case-id> --target typescript_playwright > login.spec.ts
saucectl authoring testcases code <test-case-id> --target python_selenium -d tests/
saucectl authoring testcases code <test-case-id> --target java_selenium -f LoginTest.java --force
```

## Specify Targets

The `generate` and `run` commands take targets in two forms.

**`--target`** takes comma-separated `key=value` capability pairs, one flag per target:

```bash
--target browserName=chrome,platformName="Windows 11",browserVersion=latest
```

- Dotted keys create nested capabilities, for example `sauce:options.screenResolution=1920x1080`.
- The values `true` and `false` become booleans. All other values stay strings.

**`--target-json`** takes a JSON object, or `@path` to read the object from a file. The object can be either a capabilities object or a full target that includes `isRdc`:

```json
{
  "capabilities": {
    "platformName": "Android",
    "appium:deviceName": "Google Pixel 9"
  },
  "isRdc": true
}
```
