---
id: download
title: saucectl artifacts download
sidebar_label: download
---

Downloads artifacts for a job from Sauce Labs.

## Usage

```bash
$ saucectl artifacts download jobID globPattern [flags]
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
      <td><span className="t-cli"><a href="#--target-dir">--target-dir</a></span></td>
      <td><span className="t-cli">None</span></td>
      <td>Save files to target directory. Defaults to current working directory.</td>
    </tr>
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

### <span className="cli">--target-dir</span>

<div className="cli-desc">
<p><small>| OPTIONAL | STRING |</small></p>

Save files to target directory. Defaults to current working directory.

```bash
saucectl artifacts download <jobID> <globPattern> --target-dir my-artifacts-dir
```

</div>

### <span className="cli">--out</span>

<div className="cli-desc">
<p><small>| OPTIONAL | STRING |</small></p>

Specifies the output format for the console. Options include: "text" or "json". The default setting is "text".

**Shorthand:** `-o <text/json>`

```bash
saucectl artifacts download <jobID> <globPattern> --out json
```

</div>

### <span className="cli">--region</span>

<div className="cli-desc">
<p><small>| OPTIONAL | STRING |</small></p>

The Sauce Labs region. Options are `us-west-1` (default) and `eu-central-1`.

**Shorthand:** `-r <region>`

```bash
saucectl artifacts download <jobID> <globPattern> --region us-west-1
```

</div>
