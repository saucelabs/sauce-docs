---
id: running-tests
title: Running Hosted Orchestration Tests
sidebar_label: Running Tests
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

This page outlines how to run your browser and mobile tests in Hosted Orchestration.

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
- Your Sauce Labs [Username and Access Key](https://app.saucelabs.com/user-settings).
- The SauceCTL client installed. For more information, see [Using the saucectl CLI](../dev/cli/saucectl).
- A Docker image containing your tests. For more information, see [Building Images](./building-images).

## Starting an Execution

You can interact with Hosted Orchestration through the SauceCtl CLI. The following is an example SauceCTL configuration:

<Tabs
     defaultValue="SauceCTL"
     values={[
       {label: 'SauceCTL', value: 'SauceCTL'},
     ]}>
  <TabItem value="SauceCTL">

  ```yaml
    apiVersion: v1alpha
    kind: imagerunner
    sauce:
      region: us-west-1
    suites:
      - name: run sauce test
        image: saucelabs/sl-demo-docker-primary:0.0.1
        imagePullAuth:
          user: $SAUCE_IMAGE_USER
          token: $SAUCE_IMAGE_TOKEN
        entrypoint: "mvn test"
        files:
          - src: "runsauce.json"
            dst: "/workdir/runsauce.json"
        artifacts:
          - "/path/inside/container/file.log"
        env:
          KEY: value
  ```

  Then run with

  ```bash
    saucectl run
  ```

  You should receive a successful output that looks like:

  ```bash
  ⚡  saucectl run
     Running version 0.0.0+unknown
     12:46:56 WRN A new version of saucectl is available (v0.120.1)
     12:46:56 INF Launching workers. concurrency=1
     12:46:56 INF Starting suite. image=mikedonovan1987/java-hosted-execution:pr-1 suite="run sauce test"
     12:46:57 INF Started suite. image=mikedonovan1987/java-hosted-execution:pr-1 runID=056e38a0684a4a99b4478aa73f214e3f suite="run sauce test"
     12:47:06 INF Suites in progress: 1
     12:47:16 INF Suites in progress: 1
     12:47:26 INF Suites in progress: 1
     12:47:36 INF Suites in progress: 1
     12:47:46 INF Suites in progress: 1
     12:47:56 INF Suites in progress: 1
     12:48:06 INF Suites in progress: 1
     12:48:16 INF Suites in progress: 1
     12:48:26 INF Suites in progress: 1
     12:48:27 INF Suite finished. passed=true runID=056e38a0684a4a99b4478aa73f214e3f suite="run sauce test"

       Name                              Duration    Status       Attempts
────────────────────────────────────────────────────────────────────────────
  ✔    run sauce test                       1m30s    Succeeded           1
────────────────────────────────────────────────────────────────────────────
  ✔    All suites have passed               1m30s
  ```
  </TabItem>
</Tabs>

## Configuration Details

Each of the properties supported for running Hosted Orchestration tests through `saucectl` is defined below.

### `apiVersion`

<p><small>| REQUIRED | STRING |</small></p>

Identifies the version of the underlying configuration schema. At this time, `v1alpha` is the only supported value.

```yaml
apiVersion: v1alpha
```


### `kind`

<p><small>| REQUIRED | STRING |</small></p>

Tells SauceCTL this is a Hosted Orchestration job. `imagerunner` is the required value.

```yaml
kind: imagerunner
```


### `image`

<p><small>| REQUIRED | STRING |</small></p>

The location of your Docker image. Takes the format [registry]/[image]:[tag].

```yaml
image: saucelabs/sl-demo-docker-primary:0.0.1
```


### `imagePullAuth`

<p><small>| OPTIONAL | OBJECT |</small></p>

The credentials needed to access an image hosted in a private register.

```yaml
imagePullAuth:
  user: sample_user
  token: sample_token
```


### `entrypoint`

<p><small>| REQUIRED | STRING |</small></p>

The command that is executed once the container is ready.

```yaml
entrypoint: mvn test
```


### `files`

<p><small>| OPTIONAL | ARRAY |</small></p>

Files to be uploaded onto the container. Useful for populating test data that your scripts access.

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



## Getting Results

The results of the Hosted Orchestration job depend on the result of the `entrypoint` command.

<table>
  <tr>
    <td>Result Status</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>Succeeded</td>
    <td>The <code>entrypoint</code> command returns a status code == 0, and the container is terminated successfully.</td>
  </tr>
  <tr>
    <td>Failed</td>
    <td>The <code>entrypoint</code> command returns a non-zero status code, and the container is terminated successfully. A "failed" status is also returned if an error occurs on the container.</td>
  </tr>
</table>
