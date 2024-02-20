---
id: push
title: saucectl docker push
sidebar_label: push
---

Push a Docker image to the Sauce Labs Container Registry.

Explore [additional details](/docs/orchestrate/saucelabs-private-registry.md) about the Sauce Labs Container Registry.

## Usage

```bash
$ saucectl docker push image_name [flags]
```

:::note
Please make sure the Docker daemon is running when triggering this CLI.

In order to join the Sauce Labs Container Registry, please contact SauceLabs customer support.
:::

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
      <td><span className="t-cli"><a href="#--timeout">--timeout</a></span></td>
      <td></td>
      <td>Configure the timeout duration for docker push. Default: 5 minutes.</td>
    </tr>
    <tr>
      <td><span className="t-cli"><a href="#--quiet">--quiet</a></span></td>
      <td></td>
      <td>Run silently, suppressing output messages.</td>
    </tr>
    <tr>
      <td><span className="t-cli"><a href="#--region">--region</a></span></td>
      <td><span className="t-cli">-r</span></td>
      <td>The Sauce Labs region. Options are <code>us-west-1</code> (default) and <code>eu-central-1</code>.</td>
    </tr>
  </tbody>
</table>

## Options Details

### <span className="cli">--timeout</span>

<div className="cli-desc">
<p><small>| OPTIONAL | DURATION |</small></p>

Configure the timeout duration for docker push.

```bash
saucectl docker push my_image_name:tag --timeout 10m
```

</div>

### <span className="cli">--quiet</span>

<div className="cli-desc">
<p><small>| OPTIONAL | BOOLEAN |</small></p>

Run silently, suppressing output messages.

```bash
saucectl docker push my_image_name:tag --quiet
```

</div>

### <span className="cli">--region</span>

<div className="cli-desc">
<p><small>| OPTIONAL | STRING |</small></p>

The Sauce Labs authentication region. Options are `us-west-1` (default) and `eu-central-1`.

**Shorthand:** `-r <region>`

```bash
saucectl docker push my_image_name:tag --region us-west-1
```

</div>
