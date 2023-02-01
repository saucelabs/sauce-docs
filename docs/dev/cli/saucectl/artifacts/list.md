---
id: list
title: saucectl artifacts list
sidebar_label: saucectl artifacts list
---

## Description

Lists artifacts for a job from Sauce Labs.

## Usage

<span className="cli">$ saucectl artifacts list jobID [flags]</span>

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
  </tbody>
</table>

## Options Details

### <span className="cli">--out</span>

<div className="cli-desc">
<p><small>| REQUIRED | STRING |</small></p>

Save files to target directory. Defaults to current working directory.

**Shorthand:** `-o <text/json>`

```bash
saucectl artifacts list <jobID> --out json
```

</div>

### <span className="cli">--region</span>

<div className="cli-desc">
<p><small>| OPTIONAL | STRING |</small></p>

The Sauce Labs region. Options are `us-west-1` (default) and `eu-central-1`.

**Shorthand:** `-r <region>`

```bash
saucectl artifacts list <jobID> --region us-west-1
```

</div>
