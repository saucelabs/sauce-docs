---
id: getting-started
title: Getting Started
sidebar_label: Getting Started
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

This page outlines how to run your browser and mobile tests in Sauce Orchestrate.

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up)).
- Your Sauce Labs [Username and Access Key](https://app.saucelabs.com/user-settings).
- The SauceCTL client installed. For more information, see [Using the saucectl CLI](/dev/cli/saucectl).
- A Docker image containing your tests. More information about building Docker images is found below and in [Building Images](/hosted-orchestration/building-images).
- Access to a Docker registry. Our examples will use [DockerHub](https://hub.docker.com).

## How It Works

Sauce Orchestrate utilizes container technology to package and run your tests within the Sauce Labs cloud.

<b>There are 3 high level steps to using Sauce Orchestrate:</b>

1. Package your test scripts and dependencies within a Docker Image [Go There](#step-1)
2. Push that image to a remote registry accessible by Sauce Labs [Go There](#step-2)
3. Configure SauceCTL to run your image [Go There](#step-4)
4. Use SauceCtl to run your tests within Sauce Orchestrate [Go There](#step-4)

We will be using the [Sauce Labs Demo Java project](https://github.com/saucelabs-training/demo-java) to help walk through the steps.

## 1. Create a Docker Image of Your Tests {#step-1}

If you are already familiar with creating Docker images then there is nothing special about doing it for Sauce Orchestrate! However, if you are unfamiliar or would like a detailed walkthrough then visit our [Building Images](./building-images.md) page for a comprehensive guide on how to build an image.

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
RUN mvn -pl best-practice test -Dtest=DesktopTests; exit 0
```

With this Dockerfile created you can now tell Docker to build it.

```
# execute this command within the root of your project
docker build [docker_user]/demo-java-orchestrate-tutorial:0.0.1 .
```

Note - you will need to replace `[docker_user]` with your registry username.

## 2. Push Image to a Docker Registry {#step-2}

In order for Sauce Labs to access your Docker image it must be accessible in a Docker registry. There are many available registries to choose from and Sauce Labs supports any registry using the standard Docker API. For this example we will use [DockerHub](https://hub.docker.com).

This example pushes the image to a public registry for simplicity. We advise you use a private registry for any proprietary code.

```
docker push [docker_user]/demo-java-orchestrate-tutorial:0.0.1
```

Note - you will need to replace `[docker_user]` with your registry username.

## 3. Configure SauceCTL {#step-3}

To run your tests on Sauce Orchestrate using the image you just created, you will use our developer friendly CLI tool called SauceCTL. If you do not have SauceCTL installed please read our [SauceCTL documentation](/dev/cli/saucectl) first. SauceCTL version 0.136 or later is required to run Sauce Orchestrate.

In order for SauceCTL to understand how to run your project you must create a file called `config.yml` within a `.sauce` located at the root of your project. The sample configuration for the demo java project is located below.

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

The most important configuration options to take note of are the `impage` and `entrypoint`. These tell Sauce Orchestrate the location of your image and which command should be used to run your tests respectively. For more information about the SauceCTL configuration options see [Configuring SauceCTL for Sauce Orchestrate](./configuring-saucectl).

## 4. Run Tests Using SauceCTL {#step-4}

Then run the following command at the root of your project

```bash
  saucectl run
```

You should then see SauceCTL output the status of your job in the command prompt. During the running of your tests you will see some important log statements.

You will see information about the version of SauceCTL, the name of the image being run, the unique identifier (`runID`) for this job, and the status update (`Created` -> `Running`).

```
Running version 0.136.0
09:46:40 INF Launching workers. concurrency=1
09:46:40 INF Starting suite. image=mikedonovan1987/sample-app-web-orchestrate:0.0.2 suite="Demo App Tests"
09:46:44 INF Started suite. image=mikedonovan1987/sample-app-web-orchestrate:0.0.2 runID=19595a78706f411abe3dad4dc7608d5f suite="Demo App Tests"
09:46:50 INF Suites in progress: 1
09:47:00 INF Suites in progress: 1
09:47:00 INF Status change. new=Running old=Created runID=19595a78706f411abe3dad4dc7608d5f
```

From there SauceCTL will wait for your tests to complete. At this point you can check the Sauce Labs UI to see running tests as well. While your tests are running SauceCTL will output the following every couple of seconds

```
09:47:30 INF Suites in progress: 1
```

After your entrypoint command has finished SauceCTL will output the command logs from Sauce Orchestrate and download any artifacts from the container that you configured. The following is an example output.

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

Depending on the return code of your entrypoint command SauceCTL will finish with either a status `Succeeded` or `Failure`. Your test framework most likely already handles this for you but SauceCTL will fail if your entrypoint command returns with a non-zero exit code.
