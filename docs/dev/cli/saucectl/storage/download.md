---
id: download
title: saucectl storage download
sidebar_label: download
---

Downloads an app file from Sauce Storage.

## Usage

```bash
$ saucectl storage download fileID [flags]
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
      <td><span className="t-cli"><a href="#--filename">--filename</a></span></td>
      <td><span className="t-cli">-f</span></td>
      <td>Saves the file to disk with this name.</td>
    </tr>
    <tr>
      <td><span className="t-cli"><a href="#--region">--region</a></span></td>
      <td><span className="t-cli">-r</span></td>
      <td>The Sauce Labs region. Options are <code>us-west-1</code> (default) and <code>eu-central-1</code>.</td>
    </tr>
  </tbody>
</table>

## Options Details

### <span className="cli">--filename</span>

<div className="cli-desc">
<p><small>| REQUIRED | STRING |</small></p>

Saves the file to disk with this name.

**Shorthand:** `-f <name>`

```bash
saucectl storage download 0244d466-ff99-4fa2-bee0-64afb2c407b0 --filename app.apk
```

</div>

### <span className="cli">--region</span>

<div className="cli-desc">
<p><small>| OPTIONAL | STRING |</small></p>

The Sauce Labs region. Options are `us-west-1` (default) and `eu-central-1`.

**Shorthand:** `-r <region>`

```bash
saucectl storage download 0244d466-ff99-4fa2-bee0-64afb2c407b0 --filename app.apk --region us-west-1
```

</div>
