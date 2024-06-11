---
id: getting-started
title: Getting Started with Orchestrate
sidebar_label: Getting Started with Orchestrate
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

<p><span className="sauceGreen">Paid Add-On</span></p>

This page outlines how to run your browser and mobile tests in Sauce Orchestrate.

## What You'll Need

:::caution
Make sure your organization is enrolled to use Sauce Orchestrate, otherwise you will encounter an error. If you are not enrolled, contact your Customer Success Manager or Support at help@saucelabs.com.
:::

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
- Your Sauce Labs [Username and Access Key](https://app.saucelabs.com/user-settings).
- The `saucectl` client installed. For more information, see [Using the saucectl CLI](/dev/cli/saucectl).
- A container image containing your tests. More information about building container images is found below and in [Building Images](/orchestrate/building-images).
- Access to a Docker registry. Our examples will use [DockerHub](https://hub.docker.com).

## How It Works

Sauce Orchestrate utilizes container technology to package and run your tests in the Sauce Labs cloud.

To use Sauce Orchestrate:

1. Package your test scripts and dependencies in a container Image. For more information, see [Create a Container Image of Your Tests](#1-create-a-container-image-of-your-tests).
2. Push that image to a remote registry accessible by Sauce Labs. For more information, see [Push Image to a Docker Registry](#2-push-image-to-a-docker-registry).
3. Configure `saucectl` to run your image. For more information, see [Configure saucectl](#3-configure-saucectl).
4. Use `saucectl` to run your tests in Sauce Orchestrate. For more information, see [Run Tests Using saucectl](#4-run-tests-using-saucectl).

We will be using the [Sauce Labs Demo Java project](https://github.com/saucelabs-training/demo-java) to help walk through the steps.

## Can I try it without creating my own project?

In order to make it easier to try Sauce Orchestrate on your own, we've prepared [few examples for most popular languages
and frameworks](https://github.com/saucelabs/saucectl-imagerunner-example).

## 1. Create a Container Image of Your Tests

If you are already familiar with creating container images then there is nothing special about doing it for Sauce Orchestrate. However, if you are unfamiliar or would like a detailed walkthrough, see [Building Docker Images](/orchestrate/building-images/) page for a comprehensive guide on how to build an image.

Within the demo-java project you will find a sample Dockerfile, which is a file used to define the contents of your image:

```yaml showLineNumbers
# specify the base image to match your environment requirements
FROM maven:3.6.3-jdk-8
ARG USER_HOME_DIR="/root"
WORKDIR /workdir

# copy the project code
COPY . .

# install necessary dependencies
ENV MAVEN_CONFIG "$USER_HOME_DIR/.m2"
RUN mvn clean test; exit 0
```

With this Dockerfile created you can now tell Docker to build it.

```
# execute this command within the root of your project
docker build -t [docker_user]/demo-java-orchestrate-tutorial:0.0.1 .
```

:::note
You will need to replace `[docker_user]` with your registry username.
:::

## 2. Push Image to a Docker Registry

In order for Sauce Labs to access your container image it must be accessible in a Docker registry. There are many available registries to choose from and Sauce Labs supports any registry using the standard Docker API. For this example we will use [DockerHub](https://hub.docker.com).

This example pushes the image to a public registry for simplicity. We advise you use a private registry for any proprietary code.

```
docker push [docker_user]/demo-java-orchestrate-tutorial:0.0.1
```

:::note
You will need to replace `[docker_user]` with your registry username.
:::

## 3. Configure saucectl

To run your tests on Sauce Orchestrate using the image you just created, you will use our developer friendly CLI tool called `saucectl`. If you do not have `saucectl` installed, see [Using the saucectl CLI](/dev/cli/saucectl). `saucectl` version 0.136 or later is required to run Sauce Orchestrate.

In order for `saucectl` to understand how to run your project you must create a file called `config.yml` in `.sauce` located at the root of your project. The sample configuration for the demo Java project is located below.

```yaml showLineNumbers
apiVersion: v1alpha
kind: imagerunner
sauce:
  region: us-west-1
suites:
- name: Desktop Tests
  workload: webdriver
  image: [docker_user]/demo-java-orchestrate-tutorial:0.0.1
  # the command to run your tests
  entrypoint: mvn -o test -pl best-practice -Dtest=DesktopTests
  artifacts:
    - "/workdir/best-practice/target/surefire-reports/*"

artifacts:
  download:
    when: always
    match:
      - "*"
    directory: ./artifacts
```

The most important configuration options to take note of are the `image` and `entrypoint`. These tell Sauce Orchestrate the location of your image and which command should be used to run your tests respectively. For more information about the `saucectl` configuration options see [saucectl Configuration](/orchestrate/saucectl-configuration/).

## 4. Run Tests Using saucectl

Run the following command at the root of your project:

```bash
  saucectl run
```

You should then see `saucectl` output the status of your job in the command prompt. During the running of your tests you will see some important log statements.

You will see information about the version of `saucectl`, the name of the image being run, the unique identifier (`runID`) for this job, and the status update (`Created` -> `Running`).

```
Running version 0.136.0
09:46:40 INF Launching workers. concurrency=1
09:46:40 INF Starting suite. image=mikedonovan1987/sample-app-web-orchestrate:0.0.2 suite="Demo App Tests"
09:46:44 INF Started suite. image=mikedonovan1987/sample-app-web-orchestrate:0.0.2 runID=19595a78706f411abe3dad4dc7608d5f suite="Demo App Tests"
09:46:50 INF Suites in progress: 1
09:47:00 INF Suites in progress: 1
09:47:00 INF Status change. new=Running old=Created runID=19595a78706f411abe3dad4dc7608d5f
```

`saucectl` will wait for your tests to complete. You can check the Sauce Labs UI to see running tests as well. While your tests are running `saucectl` will output the following every couple of seconds

```
09:47:30 INF Suites in progress: 1
```

After your entrypoint command has finished `saucectl` will output the command logs from Sauce Orchestrate and download any artifacts from the container that you configured. The following is an example output.

```
...
[INFO] Results:
[INFO]
[INFO] Tests run: 12, Failures: 0, Errors: 0, Skipped: 0
[INFO]
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time:  40.937 s
[INFO] Finished at: 2023-04-24T13:59:36Z
[INFO] ------------------------------------------------------------------------

### CONSOLE END ###
10:00:00 INF Downloading artifacts archive
10:00:02 INF Suites in progress: 0

       Name                              Duration    Status       Attempts
────────────────────────────────────────────────────────────────────────────
  ✔    Desktop Tests                         1m3s    Succeeded           1
────────────────────────────────────────────────────────────────────────────
  ✔    All suites have passed               1m20s
```

Depending on the return code of your entrypoint command `saucectl` will finish with either a status `Succeeded` or `Failure`. Your test framework most likely already handles this for you but `saucectl` will fail if your entrypoint command returns with a non-zero exit code.
