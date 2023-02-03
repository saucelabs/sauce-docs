---
id: building-images
title: Building Docker Images
sidebar_label: Building Images
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';


## Overview
Sauce Labs supports Docker, providing you with a powerful way to orchestrate tests. In order to use Hosted Orchestration you will need to package your test code and all of its dependencies as a Docker image and publish it to a Docker container registry so that your tests can be run in the Sauce Labs infrastructure.

## System Requirements

You can build and push images locally via Docker ([Installation Requirements](https://docs.docker.com/engine/install/#supported-platforms)) or as part of your CI process. System requirements vary depending on your intention, so the following reference serves as a general guide.

## Building and Pushing Images

### Prerequisites

- A working Docker installation. For more information, see [Docker's Getting Started documentation](https://docs.docker.com/get-started/).

### Creating a Dockerfile

To create a custom image, you must create a Dockerfile, which is a text document containing commands that Docker uses to assemble an image.

#### Example

```
FROM python:3
WORKDIR /demo-python
COPY test-requirements.txt /demo-python
RUN pip install -r test-requirements.txt
COPY ./tests/ /demo-python/tests/
```

### Choosing and Setting a Base Image

Before you create a custom image, you must choose another image from which to extend the custom image. Docker Hub has official, pre-built images for most popular languages and frameworks. Given a particular language or framework, there are many image variants from which to choose. These variants are specified by Docker tags.

For example, if you want to use version 3.5 of the official Alpine image, the full image name is `alpine:3.5`.

In your Dockerfile, extend the base image by using the FROM instruction.

```
FROM golang:1.8.0
```

### Installing Additional Tools
To install any additional tools or execute other commands, use the RUN instruction.

```
RUN apt-get update && apt-get install -y netcat
RUN go get github.com/jstemmer/go-junit-report
```

### Adding Other Files and Directories
To add files and directories that are not present in package managers, use the ADD instruction.

```
ADD ./workdir/contacts /usr/bin/contacts
ADD ./db/migrations /migrations
```

### Build Image
After all of the required tools are specified in the Dockerfile it is possible to build the image.

```
docker build <path-to-dockerfile>
```
You’ll see how all commands specified in the Dockerfile are executed. If there are any errors they’ll be displayed and you’ll need to fix them before continuing. If the build is successful you’ll have something like this at the very end:

```
...
Successfully built e32703162dd4
```

Congratulations, you’ve just built your first image! Now we need to store it somewhere to make it available for Sauce Labs.

## Pushing to a Registry

To allow Sauce Labs to use your custom image, store it in a public Docker Registry. The easiest mechanism is to create an account on Docker Hub because Docker Hub allows you to store unlimited public images for free. If your organization is already using Docker Hub, you can use your existing account.

:::note
To use an image with the Sauce Labs Hosted Orchestration you must have a public repository. If you want to keep your image private, refer to the Using Docker Authenticated Pulls document for instructions.
:::

The example uses Docker Hub, but it is possible to use different registries, if you prefer. Adapt the example based on the registry you are using.

:::note
Docker Hub images, by default, are public; to keep images private, you need to use a private repository. For more information, see [Creating a private repository](https://docs.docker.com/docker-hub/repos/#creating-a-private-repository).
:::

### Preparing the Image for the Registry

Log in to Docker Hub with your account and create a new repository on the **Add repository** page. It is best practice to use a pattern similar to `<project-name>-<container-name>` for a repository name (for example, `sl-demo-docker-primary`).

Next, rebuild your image using your account and repository name:

```
$ docker build -t saucelabs/sl-demo-docker-primary:0.0.1 <path-to-dockerfile>
```

The `-t` key specifies the name and tag of the new image:

  * saucelabs - The account in Docker Hub
  * sl-demo-docker-primary - The repository name
  * 0.0.1 - The tag (version) of the image. Always update the tag if you change something in a Dockerfile, or you might have unpredictable results.

### Pushing the Image to the Registry

Push the image to Docker Hub:

```
$ docker login
$ docker push saucelabs/sl-demo-docker-primary:0.0.1
```

:::note
First, we use docker login to authenticate in Docker Hub. If you use a registry other than Docker Hub, refer to the related documentation about how to push images to that registry.
:::

### Using your Image in Sauce Labs
After the image is successfully pushed, it is available for use in Hosted Orchestration. Create a SauceCTL configuration like the one below. For more information on running tests see [Running Tests](/hosted-orchestration/running-tests).

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

  This only works if the config name follows a specific pattern and resides in a subfolder, for example `.sauce/config.yml`.

  If the config name does not follow that pattern, you have to point to the config file explicitly, for example `saucectl run -c myconfig.yml`.

  </TabItem>
</Tabs>


## CI Integrations

The recommended approach for building images is to integrate this as a step in your existing CI pipelines. Below are examples for various CI providers you can reference.

### Github Actions

The Sauce Labs demo repos contain GitHub Action code for building images.

  * [Java](https://github.com/saucelabs-training/demo-java)
  * [Python](https://github.com/saucelabs-training/demo-python)
  * [Javascript](https://github.com/saucelabs-training/demo-js)
  * [Ruby](https://github.com/saucelabs-training/demo-ruby)
