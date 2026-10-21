---
id: schedules
title: saucectl authoring schedules
sidebar_label: schedules
---

Run test suites created with [Sauce AI for Test Authoring](/sauce-ai/ai-authoring) on a recurring schedule.

**Aliases:** `schedule`, `test-schedules`

## Usage

```bash
$ saucectl authoring schedules [command] [flags]
```

## Commands

| Command | Description |
| --- | --- |
| [`list`](#list) | List test schedules. |
| [`get`](#get) | Show a test schedule. |
| [`create`](#create) | Create a test schedule. |
| [`update`](#update) | Update a test schedule. |
| [`enable`](#enable-and-disable) | Resume a suspended schedule. |
| [`disable`](#enable-and-disable) | Suspend a schedule without deleting it. |
| [`delete`](#delete) | Delete a test schedule. |

All commands also accept the [global options](/dev/cli/saucectl/authoring#global-options), such as `--region`.

## list

List test schedules.

**Alias:** `ls`

```bash
$ saucectl authoring schedules list [flags]
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
      <td>Only these schedule IDs. Repeatable.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--test-suite-id</span></td>
      <td><span className="t-cli">None</span></td>
      <td>Only schedules that run this suite. Repeatable.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--search</span></td>
      <td><span className="t-cli">None</span></td>
      <td>Case-insensitive substring match on the schedule name.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--start-date</span></td>
      <td><span className="t-cli">None</span></td>
      <td>Only schedules created on or after this ISO 8601 date.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--end-date</span></td>
      <td><span className="t-cli">None</span></td>
      <td>Only schedules created on or before this ISO 8601 date.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--user-id</span></td>
      <td><span className="t-cli">None</span></td>
      <td>Filter by the ID of the user who created the schedule.</td>
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
saucectl authoring schedules list
saucectl authoring schedules list --test-suite-id 3f2a9c1e4b5d6e7f8a9b0c1d2e3f4a5b
```

## get

Show a test schedule.

```bash
$ saucectl authoring schedules get <id> [flags]
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
saucectl authoring schedules get 9c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f
```

## create

Create a test schedule that runs one or more test suites.

`--name`, `--cron`, `--timezone`, and at least one `--test-suite-id` are required.

```bash
$ saucectl authoring schedules create [flags]
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
      <td><b>Required.</b> Name of the schedule, 1 to 255 characters.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--cron</span></td>
      <td><span className="t-cli">None</span></td>
      <td><b>Required.</b> Six-field cron expression that starts with seconds. For example, <code>"0 0 6 * * 1-5"</code> runs at 06:00 on weekdays.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--timezone</span></td>
      <td><span className="t-cli">None</span></td>
      <td><b>Required.</b> IANA region/city time zone for the cron expression, for example <code>Europe/Berlin</code> or <code>America/New_York</code>. <code>UTC</code> is not accepted. For a zero offset, use a zone such as <code>Atlantic/Reykjavik</code>.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--test-suite-id</span></td>
      <td><span className="t-cli">None</span></td>
      <td><b>Required.</b> Suite to run. Repeatable.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--running-user-id</span></td>
      <td><span className="t-cli">None</span></td>
      <td>User that the scheduled runs execute as. Default is you.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--state</span></td>
      <td><span className="t-cli">None</span></td>
      <td><code>ENABLED</code> or <code>DISABLED</code> (case-insensitive). Default is <code>ENABLED</code>.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--start-date</span></td>
      <td><span className="t-cli">None</span></td>
      <td>ISO 8601 date before which the schedule doesn't run.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--end-date</span></td>
      <td><span className="t-cli">None</span></td>
      <td>ISO 8601 date after which the schedule stops.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--max-runs</span></td>
      <td><span className="t-cli">None</span></td>
      <td>Maximum number of runs before the schedule disables itself.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--tunnel-name</span></td>
      <td><span className="t-cli">None</span></td>
      <td>Sauce Connect tunnel to route scheduled runs through.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--build</span></td>
      <td><span className="t-cli">None</span></td>
      <td>Build name for scheduled runs.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--out</span></td>
      <td><span className="t-cli">-o</span></td>
      <td>Output format. Options: <code>text</code> (default) and <code>json</code>.</td>
    </tr>
  </tbody>
</table>

```bash
saucectl authoring schedules create --name "Nightly" --cron "0 0 2 * * *" --timezone Europe/Berlin \
    --test-suite-id 3f2a9c1e4b5d6e7f8a9b0c1d2e3f4a5b --build nightly

saucectl authoring schedules create --name "Smoke" --cron "0 */30 * * * *" --timezone America/New_York \
    --test-suite-id 3f2a9c1e4b5d6e7f8a9b0c1d2e3f4a5b --max-runs 10 --state disabled
```

## update

Update a test schedule. Only the settings you specify change. `saucectl` reads the schedule first and sends back its current settings, suites, and state, so an update never erases settings you don't mention.

To change the schedule's suites, either replace the whole list with `--test-suite-id`, or add and remove individual suites with `--add-test-suite-id` and `--remove-test-suite-id`. A schedule must keep at least one suite.

```bash
$ saucectl authoring schedules update <id> [flags]
```

`update` accepts the same settings flags as [`create`](#create): `--name`, `--cron`, `--timezone`, `--running-user-id`, `--state`, `--start-date`, `--end-date`, `--max-runs`, `--tunnel-name`, and `--build`. It also accepts the following flags.

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
      <td><span className="t-cli">--test-suite-id</span></td>
      <td><span className="t-cli">None</span></td>
      <td>Replace the schedule's suites with these. Repeatable.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--add-test-suite-id</span></td>
      <td><span className="t-cli">None</span></td>
      <td>Add this suite to the schedule. Repeatable.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--remove-test-suite-id</span></td>
      <td><span className="t-cli">None</span></td>
      <td>Remove this suite from the schedule. Repeatable.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--unset</span></td>
      <td><span className="t-cli">None</span></td>
      <td>Clear an optional setting. Options: <code>tunnelName</code>, <code>buildName</code>, <code>startDate</code>, <code>endDate</code>, and <code>maxRuns</code>. Repeatable. You can't set and clear the same setting in one command.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--out</span></td>
      <td><span className="t-cli">-o</span></td>
      <td>Output format. Options: <code>text</code> (default) and <code>json</code>.</td>
    </tr>
  </tbody>
</table>

```bash
saucectl authoring schedules update 9c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f --cron "0 0 3 * * *"
saucectl authoring schedules update 9c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f --add-test-suite-id 3f2a9c1e4b5d6e7f8a9b0c1d2e3f4a5b --unset maxRuns
saucectl authoring schedules update 9c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f --unset tunnelName
```

## enable and disable

`enable` resumes a suspended schedule. `disable` suspends a schedule without deleting it. No runs start while a schedule is disabled.

```bash
$ saucectl authoring schedules enable <id> [flags]
$ saucectl authoring schedules disable <id> [flags]
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
saucectl authoring schedules disable 9c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f
saucectl authoring schedules enable 9c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f
```

## delete

Delete a test schedule.

**Alias:** `rm`

```bash
$ saucectl authoring schedules delete <id> [flags]
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
saucectl authoring schedules delete 9c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f --yes
```
