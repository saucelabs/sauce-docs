---
id: download-artifact
title: saucectl authoring download-artifact
sidebar_label: download-artifact
---

Download an artifact captured during authoring, such as a step screenshot, by its identifier.

The identifier is the last path segment of a step's screenshot URL, as shown by [`saucectl authoring testcases get --show-steps`](/dev/cli/saucectl/authoring/testcases#get). You can also pass the full screenshot URL.

**Alias:** `artifact`

## Usage

```bash
$ saucectl authoring download-artifact <artifact-id> -f <path> [flags]
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
      <td><span className="t-cli">--filename</span></td>
      <td><span className="t-cli">-f</span></td>
      <td><b>Required.</b> Destination file. The download has no content type, so <code>saucectl</code> can't work out a file extension for you.</td>
    </tr>
    <tr>
      <td><span className="t-cli">--force</span></td>
      <td><span className="t-cli">None</span></td>
      <td>Overwrite the destination file if it exists.</td>
    </tr>
  </tbody>
</table>

This command also accepts the [global options](/dev/cli/saucectl/authoring#global-options), such as `--region`.

## Example

```bash
saucectl authoring download-artifact 3f2a9c1e4b5d6e7f8a9b0c1d2e3f4a5b -f step-3.png
```
