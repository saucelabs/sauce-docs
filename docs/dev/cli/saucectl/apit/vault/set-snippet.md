---
id: set-snippet
title: saucectl apit vault set-snippet
sidebar_label: set-snippet
---

Sets/updates a snippet in a project's vault.

## Usage

When a `snippet_name` exists in the vault, it will be replaced with the new content. If it does not exist, a new snippet is created. You can update or add a snippet by either specifying a file that contains the snippet or by using "-" to input the snippet directly from the standard input stream (stdin).

To update or add from a file:

```bash
saucectl apit vault set-snippet "snippet_name" "file_name" [flags]
```

To update or add via stdin:

```bash
cat "file_name" | saucectl apit vault set-snippet "snippet_name" - [flags]
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
      <td><span className="t-cli"><a href="#--project">--project</a></span></td>
      <td><span className="t-cli">None</span></td>
      <td>Select a vault by project name.</td>
    </tr>
    <tr>
      <td><span className="t-cli"><a href="#--region">--region</a></span></td>
      <td><span className="t-cli">-r</span></td>
      <td>The Sauce Labs region. Options are <code>us-west-1</code> (default) and <code>eu-central-1</code>.</td>
    </tr>
  </tbody>
</table>

## Options Details

### <span className="cli">--project</span>

<div className="cli-desc">
<p><small>| OPTIONAL | STRING |</small></p>

Specifies the project by its name using `--project`, or omits `--project` to select from a list of available projects.

```bash
saucectl apit vault set-snippet "snippet_name" "file_name" --project "project_name"
```

or

```bash
cat "file_name" | saucectl apit vault set-snippet "snippet_name" - --project "project_name"
```

</div>

### <span className="cli">--region</span>

<div className="cli-desc">
<p><small>| OPTIONAL | STRING |</small></p>

The Sauce Labs region. Options are `us-west-1` (default) and `eu-central-1`.

**Shorthand:** `-r <region>`

```bash
saucectl apit vault set-snippet "snippet_name" "file_name" --region us-west-1
```

or

```bash
cat "file_name" | saucectl apit vault set-snippet "snippet_name" - --region us-west-1
```

</div>
