---
id: logs
title: saucectl imagerunner logs
sidebar_label: logs
---

Fetches the logs from an imagerunner run.

## Usage

```bash
$ saucectl imagerunner logs <runID> [flags]
```

## Available Options

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
      <td><span className="t-cli"><a href="#--live">--live</a></span></td>
      <td><span className="t-cli">None</span></td>
			<td>Tail the live log output from a running Sauce Orchestrate container. Defaults to `false`.</td>
    </tr>
    <tr>
      <td><span className="t-cli"><a href="#--region">--region</a></span></td>
      <td><span className="t-cli">-r</span></td>
      <td>The Sauce Labs region. Options are <code>us-west-1</code> (default) and <code>eu-central-1</code>.</td>
    </tr>
  </tbody>
</table>

## Options Details

### <span className="cli">--live</span>

<div className="cli-desc">
<p><small>| OPTIONAL | BOOLEAN |</small></p>

Tail the live log output from a running Sauce Orchestrate container.

```bash
saucectl imagerunner logs <runID> --live
```

</div>

### <span className="cli">--region</span>

<div className="cli-desc">
<p><small>| OPTIONAL | STRING |</small></p>

The Sauce Labs region. Options are `us-west-1` (default) and `eu-central-1`.

**Shorthand:** `-r <region>`

```bash
saucectl imagerunner logs <runID> --region us-west-1
```

</div>
