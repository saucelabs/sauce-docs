---
id: upload
title: saucectl storage upload
sidebar_label: saucectl storage upload
---

## Description

Uploads an app file to Sauce Storage and returns a unique file ID assigned to the app. Sauce Storage supports app files in *.apk, *.aab, *.ipa, or *.zip format.

## Usage

<span className="cli">$ saucectl storage upload filename [flags]</span>

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
      <td><span className="t-cli"><a href="#--force">--force</a></span></td>
      <td><span className="t-cli"></span></td>
      <td>Forces the upload to happen, even if there's already a file in storage with a matching checksum.</td>
    </tr>
    <tr>
      <td><span className="t-cli"><a href="#--out">--out</a></span></td>
      <td><span className="t-cli">-o</span></td>
      <td>Output format to the console. Options are <code>text</code> (default) and <code>json</code>.</td>
    </tr>
    <tr>
      <td><span className="t-cli"><a href="#--region">--region</a></span></td>
      <td><span className="t-cli">-r</span></td>
      <td>The Sauce Labs region. Options: us-west-1, eu-central-1. (default "us-west-1")</td>
    </tr>
  </tbody>
</table>

## Options Details

### <span className="cli">--force</span>
<div className="cli-desc">
<p><small>| OPTIONAL | BOOLEAN |</small></p>

Forces the upload to happen, even if there's already a file in storage with a matching checksum.

```bash
saucectl storage upload app.apk --force
```
</div>

### <span className="cli">--out</span>
<div className="cli-desc">
<p><small>| OPTIONAL | STRING |</small></p>

Output format to the console. Options are `text` (default) and `json`.

**Shorthand:** `-o <format>`

```bash
saucectl storage upload app.apk --out json
```
</div>

### <span className="cli">--region</span>
<div className="cli-desc">
<p><small>| OPTIONAL | STRING |</small></p>

The Sauce Labs region. Options: us-west-1, eu-central-1. (default "us-west-1")

**Shorthand:** `-r <region>`

```bash
saucectl storage upload app.apk --region us-west-1
```
</div>
