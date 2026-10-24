---
id: authoring
title: saucectl authoring
sidebar_label: saucectl authoring
---

Manage [Sauce AI for Test Authoring](/sauce-ai/ai-authoring) assets from the command line: test cases, test suites, schedules, and variables. You can also author new test cases from a plain-language description.

## Requirements

- `saucectl` version 0.216.0 or later.
- **Sauce AI for Test Authoring**, a paid add-on for Enterprise accounts. `saucectl` checks your entitlement each time you run an `authoring` command.
- Your Sauce Labs credentials, set with [`saucectl configure`](/dev/cli/saucectl/configure/configure) or the `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` environment variables.

## Usage

```bash
$ saucectl authoring [command] [flags]
```

## Commands

| Command | Alias | Description |
| --- | --- | --- |
| [`testcases`](/dev/cli/saucectl/authoring/testcases) | `testcase`, `tc` | Inspect, run, author, and export AI-authored test cases. |
| [`testsuites`](/dev/cli/saucectl/authoring/testsuites) | `testsuite`, `ts` | Group test cases into suites and run them. |
| [`schedules`](/dev/cli/saucectl/authoring/schedules) | `schedule`, `test-schedules` | Run test suites on a recurring schedule. |
| [`variables`](/dev/cli/saucectl/authoring/variables) | `variable`, `var` | Manage shared values available to authored tests. |
| [`download-artifact`](/dev/cli/saucectl/authoring/download-artifact) | `artifact` | Download an artifact captured during authoring, such as a step screenshot. |

## Global Options

These options apply to every `saucectl authoring` command.

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
      <td><span className="t-cli">--region</span></td>
      <td><span className="t-cli">-r</span></td>
      <td>The Sauce Labs region. Options: <code>us-west-1</code> (default), <code>us-east-4</code>, <code>eu-central-1</code>, and <code>asia-south-2</code>.</td>
    </tr>
  </tbody>
</table>

## Common Behavior

- **Output format:** Most commands accept `--out` (`-o`) with `text` (default) or `json`. Use `json` to pipe results into tools such as `jq`.
- **Paging:** List commands return 20 results by default. Use `--skip` and `--limit` to page through results, or `--all` to fetch every result.
- **Confirmation:** Delete commands ask for confirmation before they delete anything. When `saucectl` is not running interactively, such as in a CI job, you must pass `--yes` (`-y`) to confirm.

:::tip
The `authoring` commands start runs and return immediately. To run authored test suites in a pipeline, wait for the results, and fail the pipeline when a test fails, use [`saucectl run`](/dev/cli/saucectl/run) with a `kind: authoring` configuration instead.
:::

## Examples

```bash
saucectl authoring testcases list --tag smoke
saucectl authoring testcases get <test-case-id> --show-steps
saucectl authoring testsuites create --name "Checkout" --test-case <test-case-id>
saucectl authoring variables create --scope org --name password --secret --value-from-env PASSWORD
```
