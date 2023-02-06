---
id: private-registry
title: Hosted Orchestration Private Registry
sidebar_label: Private Registry
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

This document describes how to authenticate with your Docker registry provider to pull images.

Authenticated pulls allow access to private Docker images. We support all of the major private registries.

## Registry Token

The first thing you will need to do is create an authorization token from your registry. Instructions vary depending on your provider.

It is highly recommended that you create a unique authorization token in your registry that can only access the images necessary for running your tests.

## Authenticated Pulls

For your Hosted Orchestration request, specify a username and access token and Sauce Labs will attempt to access your image. If we are unable to access your image you will receive an error response explaining what happened.

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

  Then run with:
  ```bash
    saucectl run
  ```
  </TabItem>
</Tabs>
