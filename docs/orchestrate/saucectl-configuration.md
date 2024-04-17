---
id: saucectl-configuration
title: saucectl Configuration
sidebar_label: saucectl Configuration
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

This page describes each `saucectl` configuration option and commands to use when interacting with Sauce Orchestrate. To get started with Sauce Orchestrate, see [Getting Started](/orchestrate/getting-started/).

## Configuration Options

:::note
Only the `saucectl` configuration options for Sauce Orchestrate are listed below. For the full list of options, see [Using the saucectl CLI](/dev/cli/saucectl/).
:::

### `apiVersion`

<p><small>| REQUIRED | STRING |</small></p>

Identifies the version of the underlying configuration schema. At this time, `v1alpha` is the only supported value.

```yaml
apiVersion: v1alpha
```

### `kind`

<p><small>| REQUIRED | STRING |</small></p>

Tells `saucectl` this is a Sauce Orchestrate configuration. `imagerunner` is the required value for Sauce Orchestrate.

```yaml
kind: imagerunner
```

---

## `sauce`

<p><small>| OPTIONAL | OBJECT |</small></p>

The parent property containing all settings related to how tests are run and identified in the Sauce Labs platform.

:::note
If you do not specify a region in your config file, you must set it when running your command with the `--region` flag.
:::

```yaml
sauce:
  region: eu-central-1
  concurrency: 10
```

---

### `region`

<p><small>| OPTIONAL | STRING/ENUM |</small></p>

Specifies through which Sauce Labs data center tests will run. Valid values are: `us-west-1` or `eu-central-1`.

```yaml
sauce:
  region: eu-central-1
```

---

### `concurrency`

<p><small>| OPTIONAL | INTEGER |</small></p>

Sets the maximum number of suites to run at the same time. If the test defines more suites than the max, excess suites are queued and run in order as each suite completes.

```yaml
sauce:
  concurrency: 3
```

Alternatively, you can override the file setting at runtime by setting the concurrency flag as an inline parameter of the `saucectl run` command:

```bash
saucectl run --ccy 5
```

---

### `tunnel`

<p><small>| OPTIONAL | OBJECT |</small></p>

`saucectl` supports using [Sauce Connect](/secure-connections/sauce-connect/proxy-tunnels/) to establish a secure connection with Sauce Labs. To do so, launch a tunnel; then provide the name and owner (if applicable) in this property.

```yaml
sauce:
  tunnel:
    name: your_tunnel_name
    owner: tunnel_owner_username
```

---

#### `name`

<p><small>| OPTIONAL | STRING |</small></p>

Identifies an active Sauce Connect tunnel to use for secure connectivity to the Sauce Labs cloud.

:::note
This property replaces the former `id` property, which is deprecated.
:::

```yaml
sauce:
  tunnel:
    name: your_tunnel_name
```

---

#### `owner`

<p><small>| OPTIONAL | STRING |</small></p>

Identifies the Sauce Labs user who created the specified tunnel, which is required if the user running the tests did not create the tunnel.

:::note
This property replaces the former `parent` property, which is deprecated.
:::

```yaml
sauce:
  tunnel:
    name: your_tunnel_name
    owner: tunnel_owner_username
```

---

## `suites`

<p><small>| REQUIRED | OBJECT |</small></p>

The set of properties providing details about the test suites to run. May contain multiple suite definitions. See the full [example config](#example-configuration) for an illustration of multiple suite definitions.

---

### `name`

<p><small>| REQUIRED | STRING |</small></p>

The name of the test suite, which will be reflected in the results and related artifacts.

```yaml
suites:
  - name: "saucy test"
```

---

### `workload`

<p><small>| REQUIRED | STRING |</small></p>

Tell Sauce Orchestrate what kind of entrypoint process you are running. `workload` is important for security monitoring. Options are `webdriver` or `other`. For most configurations `webdriver` is required.

```yaml
suites:
  - name: "saucy test"
    workload: webdriver
```
---

### `resourceProfile`

<p><small>| OPTIONAL | STRING |</small></p>

Sets the CPU and memory limits for the container. The format for specifying the limits is as follows: `<CPU><level><memory><level>`.

The larger the level value, the higher the allocated CPU and memory resources. Available options are: `c1m1`, `c2m2`, and `c3m3`. The default value is set to `c1m1`.

```yaml
suites:
  - name: "saucy test"
    resourceProfile: c2m2
```
---

### `image`

<p><small>| REQUIRED | STRING |</small></p>

The location of your container image. Takes the format [registry]/[image]:[tag].

```yaml
suites:
  - name: "saucy test"
    image: saucelabs/sl-demo-docker-primary:0.0.1
```

### `imagePullAuth`

<p><small>| OPTIONAL | OBJECT |</small></p>

The credentials needed to access an image hosted in a private registry. It is highly recommend to not hardcode credentials in your `saucectl` config. Use environment variables instead.

```yaml
suites:
  - name: "saucy test"
    image: saucelabs/sl-demo-docker-primary:0.0.1
    imagePullAuth:
      user: $DOCKER_USERNAME
      token: $DOCKER_PASSWORD
```

### `entrypoint`

<p><small>| REQUIRED | STRING |</small></p>

The command that is executed after the container is ready.

```yaml
suites:
  - name: "saucy test"
    image: saucelabs/sl-demo-docker-primary:0.0.1
    entrypoint: mvn test
```

### `files`

<p><small>| OPTIONAL | ARRAY |</small></p>

Files to be uploaded onto the container. Can be used for populating test data that your scripts access. src and dst must be an absolute path.

```yaml
suites:
  - name: "saucy test"
    image: saucelabs/sl-demo-docker-primary:0.0.1
    files:
      - src: "runsauce.json"
        dst: "/workdir/runsauce.json"
```

### `env`

<p><small>| OPTIONAL | OBJECT |</small></p>

Environment variables to be injected into the container. Can be used for populating secrets used in your tests. These environment variables are not stored anywhere in Sauce Labs.

```yaml
suites:
  - name: "saucy test"
    env:
      KEY: value
```

:::note
Environment variables set with the saucectl `--env` flag will overwrite those specified in the sauce config file.

The order of precedence is as follows: --env flag > root-level environment variables > suite-level environment variables.
:::


### `metadata`

<p><small>| OPTIONAL | OBJECT |</small></p>

Supply additional metadata to the container.

```yaml
suites:
  - name: "saucy test"
    metadata:
      KEY: value
```

:::note
This field's primary use case is for troubleshooting. Unless instructed by a
Sauce Labs employee, setting any random values here will serve you no purpose.
:::

### `services`

<p><small>| OPTIONAL | ARRAY |</small></p>

Define service containers that are required to run alongside the main container
of the suite. The available configuration options for services are similar to
those of the main container.

:::note
A service container may not be up and running by the time your main container
starts. Please take that into account when writing your tests.
:::

```yaml
suites:
  - name: "saucy test"
    services:
      - name: "a service"
        image: your-org/your-service-image:0.0.1
        imagePullAuth:
          user: sauceuser
          token: "123"
        entrypoint: mvn test
        files:
          - src: "runsauce.json"
            dst: "/workdir/runsauce.json"
        env:
          KEY: value
        resourceProfile: c1m1
```


## `artifacts`

<p><small>| OPTIONAL | ARRAY |</small></p>

In order for `saucectl` to download files from the Sauce Orchestrate container two configurations are needed. The first is to tell Orchestrate which files to upload from the container once your entrypoint command finishes.

```yaml
# declared within your suites definition
suites:
  ...
  artifacts:
    - "/workdir/best-practice/target/surefire-reports/*"
```

Then you must tell `saucectl` to download the artifacts to your machine.

```yaml
# declared at the top level of your config.yml
artifacts:
  download:
    when: always
    match:
      - "*"
    directory: ./artifacts
```

:::note
The following limitations are in effect for artifact downloads. They do not apply to files uploaded:

- Must specify an absolute path (starting at the root `/`)
- Max requested volume for parent dir is 10M
- You can only specify up to 10 paths
:::

### `cleanup`

<p><small>| OPTIONAL | BOOLEAN |</small></p>

When set to `true`, all contents of the specified download directory are cleared before any new artifacts from the current test are downloaded.

```yaml
artifacts:
  cleanup: true
```

---

### `download`

<p><small>| OPTIONAL | OBJECT |</small></p>

Specifies the settings related to downloading artifacts from tests run by `saucectl`.

```yaml
artifacts:
  download:
    when: always
    match:
      - junit.xml
    directory: ./artifacts/
```

---

#### `when`

<p><small>| OPTIONAL | STRING |</small></p>

Specifies when and under what circumstances to download artifacts. Valid values are:

- `always`: Always download artifacts.
- `never`: Never download artifacts.
- `pass`: Download artifacts for passing suites only.
- `fail`: Download artifacts for failed suites only.

```yaml
artifacts:
  download:
    when: always
```

---

#### `match`

<p><small>| OPTIONAL | STRING/ARRAY |</small></p>

Specifies which artifacts to download based on whether they match the name or file type pattern provided. Supports the wildcard character `*` (use quotes for best parsing results with wildcard).

```yaml
artifacts:
  download:
    match:
    - junit.xml
    - "*.log"
```

---

#### `directory`

<p><small>| OPTIONAL | STRING |</small></p>

Specifies the path to the folder location in which to download artifacts. A separate subdirectory is generated in this location for each suite for which artifacts are downloaded. The name of the subdirectory will match the suite name. If a directory with the same name already exists, the new one will be suffixed by a serial number.

```yaml
artifacts:
  download:
    directory: ./artifacts/
```

---

## `reporters`

<p><small>| OPTIONAL | OBJECT |</small></p>

Configures additional reporting capabilities provided by `saucectl`.

```yaml
reporters:
  json:
    enabled: true
    filename: saucectl-report.json
```
---

### `json`

<p><small>| OPTIONAL | OBJECT |</small></p>

The JSON reporter creates a single report of all executed saucectl suites.

```yaml
reporters:
  json:
    enabled: true
    filename: saucectl-report.json
    webhookURL: https://my-webhook-url
```

---

#### `enabled`

<p><small>| OPTIONAL | BOOLEAN |</small></p>

Toggles the reporter on/off.

```yaml
reporters:
  json:
    enabled: true
```

---

#### `webhookURL`

<p><small>| OPTIONAL | STRING |</small></p>

Specifies the webhook URL. When saucectl test is finished, it'll send an HTTP POST with a JSON payload to the configured webhook URL.

```yaml
reporters:
  json:
    webhookURL: https://my-webhook-url
```

---

#### `filename`

<p><small>| OPTIONAL | STRING |</small></p>

Specifies the report filename. Defaults to "saucectl-report.json".

```yaml
reporters:
  json:
    filename: my-saucectl-report.json
```

---

## saucectl Commands

The following are some common `saucectl` commands for interacting with Sauce Orchestrate.

### `saucectl run`

The main command to run a Sauce Orchestrate job. Must be executed at the root level of your project. Your project must contain a configuration file located in `.sauce/config.yml`.

```bash
saucectl run
```

### `saucectl imagerunner` Commands

Supported commands:

<table id="table-cli">
  <thead>
    <tr>
      <th>Operation</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
   <tr>
     <td><a href="/dev/cli/saucectl/imagerunner/artifacts-download">Get artifacts</a></td>
     <td>Get artifacts/files of the container from a Sauce Orchestrate run.</td>
   </tr>
   <tr>
     <td><a href="/dev/cli/saucectl/imagerunner/list">List containers</a></td>
     <td>Return the list of Sauce Orchestrate containers.</td>
   </tr>
   <tr>
     <td><a href="/dev/cli/saucectl/imagerunner/logs">Get logs</a></td>
     <td>Fetch the logs from an imagerunner run.</td>
   </tr>
   <tr>
     <td><a href="/dev/cli/saucectl/imagerunner/stop">Stop a container</a></td>
     <td>Stop a running Sauce Orchestrate container.</td>
   </tr>
  </tbody>
</table>