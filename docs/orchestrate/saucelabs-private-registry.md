---
id: saucelabs-private-registry
title: SauceLabs Container Registry
sidebar_label: SauceLabs Container Registry
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

If you don't want to use Docker Hub or your company-provided docker registry, there is an option to store your images
within SauceLabs infrastructure.

## How do I get access to SauceLabs Container Registry?

In order to join SauceLabs Container Registry, please contact SauceLabs customer support.

## How do I access SauceLabs Container Registry?

In order to access SauceLabs Container Registry you will need a username and a short-lived generated tokens to be used 
as a password. The token has a time-to-live of 5 minutes.

To generate a token, use [Sauce Orchestrate API](https://docs.saucelabs.com/dev/api/performance/)
or follow a script below.

### Prerequisites

This sample script is created for *nix systems.

1. Export `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` environment variables ([learn more about authentication](https://docs.saucelabs.com/dev/api/#authentication)).
2. Make sure you have the following tools installed:
   * `docker` (or other tool for pushing container images)
   * `jq` (or other tool for parsing json)
   * `curl` (or other tool for making http requests)

### Setting environment variables to be used by docker

The code below is using url for US West datacenter. Make sure you use url for the datacenter matching your 
registry url. If you're not sure which one to use, contact customer support.

```bash
SAUCE_SHORT_LIVED_TOKEN=`curl -s -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" \
  --request POST 'https://api.us-west-1.saucelabs.com/v1alpha1/hosted/container-registry/authorization-token'`
export DOCKER_USERNAME=`echo $SAUCE_SHORT_LIVED_TOKEN | jq -r .username`
export DOCKER_PASSWORD=`echo $SAUCE_SHORT_LIVED_TOKEN | jq -r .password`
```

You can always check when your token expires by running this command:
```bash
echo $SAUCE_SHORT_LIVED_TOKEN | jq -r .expires_at
```

### Using short-lived token to log in

Before running this step, make sure you know what's the address of your container registry. For this example 
let's assume it is `registry.example.com/your-private-registry/`. Now you need to extract the domain name from it,
and use it together with created environment variables to login to your registry:

```bash
echo $DOCKER_PASSWORD | docker login --username $DOCKER_LOGIN --password-stdin registry.example.com
```

Once you're logged in, you can run any docker commands related to the registry as you'd normally do.

:::note
If you're not able to log in to docker, your token may have already expired - it's valid only for 5 minutes.
Run the first part of the script and try to log in again.
:::

## How many tokens can I generate?

There's no limit to how many tokens can be generated. If you generate a new one, the old one will still be valid
till it's expiration time.
