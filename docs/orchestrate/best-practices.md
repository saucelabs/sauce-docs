---
id: best-practices
title: Best Practices
sidebar_label: Best Practices
---

import useBaseUrl from '@docusaurus/useBaseUrl';

This page describes best practices for using container images in Sauce Orchestrate.

## Building Efficient Java Images

Java is one of the most popular programming languages available and is widely used for Selenium and Appium test projects. Here are some tips and tricks to get your Java project working with Sauce Orchestrate. For this documentation page we will assume that Docker is being used.

### Ensure Proper Base Image

The best practice for creating a container image is to start with a base image. When building Java images you will want to choose a base image that contains the proper JDK and Maven version your project requires. There are many available base images to choose from. In our sample Java repository you can see we have chosen `FROM maven:3.6.3-jdk-8`. This means we will use JDK 8 and Maven 3.6.3.

In order to know which JDK and Maven version to choose run the following commands on your local environment where you know your tests run successfully.

```bash
java --version
openjdk 17.0.5 2022-10-18
OpenJDK Runtime Environment Temurin-17.0.5+8 (build 17.0.5+8)
OpenJDK 64-Bit Server VM Temurin-17.0.5+8 (build 17.0.5+8, mixed mode, sharing)

mvn -v
Apache Maven 3.6.3 (cecedd343002696d0abb50b32b541b8a6ba2883f)
Maven home: /usr/local/Cellar/maven/3.6.3_1/libexec
Java version: 15.0.1, vendor: N/A, runtime: /usr/local/Cellar/openjdk/15.0.1/libexec/openjdk.jdk/Contents/Home
Default locale: en_US, platform encoding: UTF-8
OS name: "mac os x", version: "10.16", arch: "x86_64", family: "mac"
```

### Bundle all Dependencies in Your Image

A major benefit of using container images is that all dependencies can be included in the image. This means your tests can run faster because they do not need to include the step of downloading dependencies. This can also be important if you have dependencies located in a private maven repository.

In order to download all dependencies as part of building your image add the following lines to the end of your Dockerfile

```yaml showLineNumbers
ENV MAVEN_CONFIG "$USER_HOME_DIR/.m2"
RUN mvn clean test; exit 0
```

To realize the performance gain from doing this, in your `entrypoint` command configuration in saucectl make sure to run Maven in offline mode.

```yaml
  entrypoint: mvn test -o
```

### Add Maven settings.xml file

Maven includes support for a global settings file. This is normally used to configure global dependencies and registry locations. If your project requires the global settings.xml file be present then you must ensure that file exists in your container image.

The Maven settings.xml file is generally found in the home directory of your local dev environment. In order to copy the settings.xml file located in your home directory you need to update your Dockerfile and where you run the `docker build` command from.

Add the following to your Dockerfile:

```yaml showLineNumbers
COPY ~/.m2/settings.xml ~/.m2
```

Then run `docker build` from your home directory:

```bash
cd ~
docker build -t [docker_user]]/sample-image:0.0.1 -f [path/to/Dockerfile]
```

:::note
Replace `[docker_user]` with your Dockerhub username. Replace `[path/to/Dockerfile]` with the location of your project's Dockerfile.
:::

## Handling Sensitive Data {#sensitive-data}

Sauce Orchestrate has multiple ways to use sensitive data in your container. The first is through the `files` configuration.

`files` enables you to upload files into your running container rather than include them in your image. This is recommended for any test data and any settings needed for your team framework. A common use case for this is to include settings file such as an AWS configuration file with sensitive credentials in it.

To upload files onto the container use the `files` configuration option in your saucectl config.yml

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
    # files to be injected into the running container
    files:
      - src: "~/.aws/credentials"
        dst: "/root/.aws"
    artifacts:
      - "/workdir/best-practice/target/surefire-reports/*"

artifacts:
  download:
    when: always
    match:
      - "*"
    directory: ./artifacts
```

Another way to handle sensitive data is through the `env` configuration option. This inserts environment variables into the running container.

To insert environment variables use the `env` configuration option in your saucectl config.yml

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
    # environment variables to be injected
    env:
      KEY: val
    artifacts:
      - "/workdir/best-practice/target/surefire-reports/*"

artifacts:
  download:
    when: always
    match:
      - "*"
    directory: ./artifacts
```

## Troubleshooting Issues Locally

If you run into issues running your image in Sauce Orchestrate and the logs/artifacts are not helpful enough, then the next step to take is to run the image locally to make sure everything works. When running the image locally we first need to start the container with a shell open.

```bash
docker run -it --entrypoint sh [docker_user]/[sample_image]
```

:::note
Replace `[docker_user]` with your username and `[sample_image]` with the name of your image.
:::

This command will start a container based on your specified image with a shell open. From here you can try to run your entrypoint command and navigate around the contents of your image.

## Sauce Credentials

It is highly recommended to not hardcode your Sauce Credentials in your test scripts. For convenience purposes we automatically inject your Sauce Credentials into the running Sauce Orchestrate container under the following environment variable names:

- `SAUCE_USERNAME`
- `SAUCE_ACCESS_KEY`
