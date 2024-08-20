---
id: list
title: saucectl storage list
sidebar_label: list
---

Returns the list of files that have been uploaded to Sauce Storage.

## Usage

```bash
$ saucectl storage list [flags]
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
      <td><span className="t-cli"><a href="#--name">--name</a></span></td>
      <td><span className="t-cli">-n</span></td>
      <td>The filename (case-insensitive) by which you want to filter.</td>
    </tr>
    <tr>
      <td><span className="t-cli"><a href="#--out">--out</a></span></td>
      <td><span className="t-cli">-o</span></td>
      <td>Output format to the console. Options are <code>text</code> (default) and <code>json</code>.</td>
    </tr>
    <tr>
      <td><span className="t-cli"><a href="#--query">--query</a></span></td>
      <td><span className="t-cli">-q</span></td>
      <td>Any search term (such as app name, file name, description, build number or version) by which you want to filter.</td>
    </tr>
    <tr>
      <td><span className="t-cli"><a href="#--region">--region</a></span></td>
      <td><span className="t-cli">-r</span></td>
      <td>The Sauce Labs region. Options are <code>us-west-1</code> (default) and <code>eu-central-1</code>.</td>
    </tr>
  </tbody>
</table>

## Options Details

### <span className="cli">--name</span>

<div className="cli-desc">
<p><small>| OPTIONAL | STRING |</small></p>

The filename (case-insensitive) by which you want to filter.

**Shorthand:** `-n <name>`

```bash
saucectl storage list --name app.apk
```

</div>

### <span className="cli">--out</span>

<div className="cli-desc">
<p><small>| OPTIONAL | STRING |</small></p>

Output format to the console. Options are `text` (default) and `json`.

**Shorthand:** `-o <format>`

```bash
saucectl storage list --out json
```

</div>

### <span className="cli">--query</span>

<div className="cli-desc">
<p><small>| OPTIONAL | STRING |</small></p>

Any search term (such as app name, file name, description, build number or version) by which you want to filter.

**Shorthand:** `-q <query>`

```bash
saucectl storage list --query myapp
```

</div>

### <span className="cli">--region</span>

<div className="cli-desc">
<p><small>| OPTIONAL | STRING |</small></p>

The Sauce Labs region. Options are `us-west-1` (default) and `eu-central-1`.

**Shorthand:** `-r <region>`

```bash
saucectl storage list --region us-west-1
```

</div>
