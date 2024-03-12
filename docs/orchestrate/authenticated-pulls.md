---
id: authenticated-pulls
title: Using Authenticated Pulls
sidebar_label: Authenticated Pulls
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

This document describes how to push a container image to an authenticated registry and then subsequently use that image in Sauce Orchestrate.

## Registry Token

The first thing you will need to do is create an authorization token from your registry. Instructions vary depending on your provider. For this example we will use DockerHub.

For more information, see [Creating and Managing Access Tokens](https://docs.docker.com/docker-hub/access-tokens/) in the Docker documentation.

It is highly recommended that you create a unique authorization token in your registry that can only access the images necessary for running your tests.

## Pushing Your Image

To make your image accessible for Sauce Orchestrate it must first be pushed to a remote registry.

First you must login to docker hub

```bash
docker login
```

You will be prompted for your username and access token that you created.

Now that you are logged in you can push your image

```bash
docker push [docker_user]/demo-java-orchestrate-tutorial:0.0.1
```

Note - you will need to replace `[docker_user]` with your registry username.

## Using Your Private Image

To use your private image in Sauce Orchestrate, update your saucectl config file, specifying a username and access token, and Sauce Labs will attempt to access your image. If we are unable to access your image you will receive an error response explaining what happened.

```yaml showLineNumbers
apiVersion: v1alpha
kind: imagerunner
sauce:
  region: us-west-1
suites:
  - name: Desktop Tests
    workload: webdriver
    image: [docker_user]/demo-java-orchestrate-tutorial:0.0.1
    # your docker hub credentials go here
    imagePullAuth:
      user: $SAUCE_IMAGE_USER
      token: $SAUCE_IMAGE_TOKEN
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

## Using SauceLabs Container Registry?

We provide a dedicated solution for storing container images within our infrastructure. If you're already using it -
feel free to check out [additional documentation about it](https://docs.saucelabs.com/orchestrate/saucelabs-private-registry/),
if not - reach out to SauceLabs customer support to learn more.
