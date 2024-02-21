---
id: set-variable
title: saucectl apit vault set-variable
sidebar_label: set-variable
---

Sets/updates a variable in a project's vault.

## Usage

If a `variable_name` is already in the vault, it is updated with the new one; otherwise, it adds a new variable.

```bash
saucectl apit vault set-variable "variable_name" "variable_value" [flags]
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
saucectl apit vault set-variable "variable_name" "variable_value" --project "project_name"
```

</div>

### <span className="cli">--region</span>

<div className="cli-desc">
<p><small>| OPTIONAL | STRING |</small></p>

The Sauce Labs region. Options are `us-west-1` (default) and `eu-central-1`.

**Shorthand:** `-r <region>`

```bash
saucectl apit vault set-variable "variable_name" "variable_value" --region us-west-1
```

</div>
