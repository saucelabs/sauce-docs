---
id: saucectl-configuration
title: SauceCTL Configuration
sidebar_label: SauceCTL Configuration
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

This page describes each SauceCTL configuration option and useful commands to use when interacting with Sauce Orchestrate. If you are looking for information about getting started with Sauce Orchestrate see [Getting Started](./getting-started.md)

## Configuration Options

:::note
Not all SauceCTL configuration options are detailed below, only those that pertain to Sauce Orchestrate. For the full list of options see the [SauceCTL Documentation](../dev/cli/saucectl.md)
:::

### `apiVersion`

<p><small>| REQUIRED | STRING |</small></p>

Identifies the version of the underlying configuration schema. At this time, `v1alpha` is the only supported value.

```yaml
apiVersion: v1alpha
```

### `kind`

<p><small>| REQUIRED | STRING |</small></p>

Tells SauceCTL this is a Sauce Orchestrate configuration. `imagerunner` is the required value for Sauce Orchestrate.

```yaml
kind: imagerunner
```

### `workload`

<p><small>| REQUIRED | STRING |</small></p>

Tell Sauce Orchestrate what kind of entrypoint process you will running. This is important for security monitoring. Options are `webdriver` or `other`. For most configurations `webdriver` will be required.

```yaml
kind: imagerunner
```

### `image`

<p><small>| REQUIRED | STRING |</small></p>

The location of your container image. Takes the format [registry]/[image]:[tag].

```yaml
image: saucelabs/sl-demo-docker-primary:0.0.1
```

### `imagePullAuth`

<p><small>| OPTIONAL | OBJECT |</small></p>

The credentials needed to access an image hosted in a private registry. It is highly recommend to not hardcode credentials in your SauceCTL cnofig. Use environment variables instead.

```yaml
imagePullAuth:
  user: $DOCKER_USERNAME
  token: $DOCKER_PASSWORD
```

### `entrypoint`

<p><small>| REQUIRED | STRING |</small></p>

The command that is executed once the container is ready.

```yaml
entrypoint: mvn test
```

### `files`

<p><small>| OPTIONAL | ARRAY |</small></p>

Files to be uploaded onto the container. Useful for populating test data that your scripts access. src and dst must be an absolute path.

```yaml
files:
  - src: "runsauce.json"
    dst: "/workdir/runsauce.json"
```

### `env`

<p><small>| OPTIONAL | ARRAY |</small></p>

Environment variables to be injected into the container. Useful for populating secrets used in your tests. These are not stored anywhere in Sauce Labs.

```yaml
env:
  KEY: value
```

### `artifacts`

<p><small>| OPTIONAL | ARRAY |</small></p>

In order for SauceCTL to download files from the Sauce Orchestrate container two configurations are needed. The first is to tell Orchestrate which files to upload from the container once your entrypoint command finishes.

```yaml
# declared within your suites definition
suites:
  ...
  artifacts:
    - "/workdir/best-practice/target/surefire-reports/*"
```

Then you must tell SauceCTL to download the artifacts to your machine.

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

## SauceCtl Commands

The following commands are useful when interacting with Sauce Orchestrate

### `saucectl run`

The main command to run a Sauce Orchestrate job. Must be executed at the root level of your project. Your project must contain a configuration file located in `.sauce/config.yml`

```bash
saucectl run
```

### `saucectl imagerunner logs`

Get logs of the container from a Sauce Orchestrate run

```bash
saucectl imagerunner logs <runID>
```

### `saucectl imagerunner artifacts`

Get artifacts/files of the container from a Sauce Orchestrate run. Only the files specified in `artifacts` configuration will be downloaded.

```bash
saucectl imagerunner artifacts <runId>`
```
