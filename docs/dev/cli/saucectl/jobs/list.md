---
id: list
title: saucectl jobs list
sidebar_label: list
---

Lists jobs from Sauce Labs.

## Usage

```bash
$ saucectl jobs list [flags]
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
      <td><span className="t-cli"><a href="#--out">--out</a></span></td>
      <td><span className="t-cli">-o</span></td>
      <td>Output format to the console. Options: <code>text</code> (default) and <code>json</code>.</td>
    </tr>
    <tr>
      <td><span className="t-cli"><a href="#--region">--region</a></span></td>
      <td><span className="t-cli">-r</span></td>
      <td>The Sauce Labs region. Options are <code>us-west-1</code> (default) and <code>eu-central-1</code>.</td>
    </tr>
    <tr>
      <td><span className="t-cli"><a href="#--page">--page</a></span></td>
      <td><span className="t-cli">-p</span></td>
      <td>Page for pagination. Default is 0.</td>
    </tr>
    <tr>
      <td><span className="t-cli"><a href="#--size">--size</a></span></td>
      <td><span className="t-cli">-s</span></td>
      <td>Per page for pagination. Default is 20.</td>
    </tr>
    <tr>
      <td><span className="t-cli"><a href="#--status">--status</a></span></td>
      <td><span className="t-cli">None</span></td>
      <td>Filter job using status. Options are <code>passed</code>, <code>failed</code>, <code>error</code>, <code>complete</code>, <code>in progress</code>, and <code>queued</code>.</td>
    </tr>
    <tr>
      <td><span className="t-cli"><a href="#--source">--source</a></span></td>
      <td><span className="t-cli">None</span></td>
      <td>Job source from Sauce Labs. Options are <code>vdc</code>, <code>rdc</code>, and <code>api</code>.</td>
    </tr>
  </tbody>
</table>

## Options Details

### <span className="cli">--out</span>

<div className="cli-desc">
<p><small>| OPTIONAL | STRING |</small></p>

Output format to the console. Options are `text` (default) and `json`.

**Shorthand:** `-o <text/json>`

```bash
saucectl jobs list --out json
```

</div>

### <span className="cli">--region</span>

<div className="cli-desc">
<p><small>| OPTIONAL | STRING |</small></p>

The Sauce Labs region. Options are `us-west-1` (default) and `eu-central-1`.

**Shorthand:** `-r <region>`

```bash
saucectl jobs list --region us-west-1
```

</div>

### <span className="cli">--page</span>

<div className="cli-desc">
<p><small>| OPTIONAL | STRING |</small></p>

Page for pagination. Default is 0.

**Shorthand:** `-p <page>`

```bash
saucectl jobs list --page 1
```

</div>

### <span className="cli">--size</span>

<div className="cli-desc">
<p><small>| OPTIONAL | STRING |</small></p>

Per page for pagination. Default is 20.

**Shorthand:** `-s <size>`

```bash
saucectl jobs list --size 20
```

</div>

### <span className="cli">--status</span>

<div className="cli-desc">
<p><small>| OPTIONAL | STRING |</small></p>

Filter job using status. Options: `passed`, `failed`, `error`, `complete`, `in progress`, and `queued`.

```bash
saucectl jobs list --status passed
```

</div>

### <span className="cli">--source</span>

<div className="cli-desc">
<p><small>| OPTIONAL | STRING |</small></p>

Job source from saucelabs. Options: `vdc`, `rdc`, and `api`.

```bash
saucectl jobs list --source vdc
```

</div>
