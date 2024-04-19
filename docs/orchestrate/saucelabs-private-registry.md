---
id: saucelabs-private-registry
title: SauceLabs Container Registry
sidebar_label: SauceLabs Container Registry
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

If you don't want to use Docker Hub or your company-provided docker registry, there is an option to store your container images
within SauceLabs infrastructure.

## How do I get access to SauceLabs Container Registry?

In order to join SauceLabs Container Registry, please contact SauceLabs customer support.

## How do I authenticate to SauceLabs Container Registry?

In order to provide the most secure way to access your images, we use short-lived tokens to authenticate you
to SauceLabs Container Registry.

There are two ways of interacting with our container registry:

1. using `saucectl` - for the most common use-cases, it automatically injects short-lived tokens
2. programmatically - for the more demanding use-cases, you must retrieve short-lived token yourself

## How do I access SauceLabs Container Registry using `saucectl`?

### Prerequisites

1. Export `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` environment variables ([learn more about authentication](/docs/dev/api.md#authentication)).
2. Make sure you have the following tools installed:
   - `docker` (or other tool for pushing container images that exposes docker socket)
3. Find out what's your container registry url. For this example let's assume it is `registry.example.com/your-private-registry`.

### Pushing images

To push Docker images, consider using the `saucectl docker push` CLI command. This command simplifies the process by handling
both docker login and docker push operations, eliminating the need for manual authentication.

Example:

```bash
docker build -t registry.example.com/your-private-registry/image-name:tag .
saucectl docker push registry.example.com/your-private-registry/image-name:tag
```

For additional details, please visit the [saucectl docker push documentation](/docs/dev/cli/saucectl/docker/push.md).

:::note
Currently, this method is limited to pushing Docker images only.
:::

:::note
Ensure that your Docker image is prebuilt before using this command.
:::

### Starting a test

If you are using SauceLabs Container Registry, you may start a test without providing credentials to your container
registry. However, you must follow two rules:

1. Account used to start a test must be allowed to generate a short-lived token for the registry you want to use.
2. You must not provide `imagePullAuth` in the configuration file for the container we should authenticate.

If both of those conditions are met, we're going to automatically authenticate your test execution to pull container images.
There's no need to change the way how you execute `saucectl` to start a test - it all happens out of the box.

Example command to start a test:

```bash
saucectl run
```

For additional details, please visit the [saucectl run documentation](/docs/dev/cli/saucectl/run.md).

## How do I access SauceLabs Container Registry programmatically?

In order to access SauceLabs Container Registry programmatically, you will need a username and a short-lived generated token
to be used as a password. The token has a time-to-live of 30 minutes.

To generate a token, use [Sauce Orchestrate API](/docs/dev/api/orchestrate.md) or follow a script below.

### Prerequisites

This sample script is created for \*nix systems.

1. Export `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` environment variables ([learn more about authentication](/docs/dev/api.md#authentication)).
2. Make sure you have the following tools installed:
   - `docker` (or other tool for pushing container images)
   - `jq` (or other tool for parsing json)
   - `curl` (or other tool for making http requests)
3. Find out what's your container registry url.

### Setting environment variables to be used by docker

The code below uses url for US West datacenter. Make sure you use url for the datacenter matching your
registry url. If you're not sure which one to use, contact customer support.

Export useful environment variables:

```bash
export SAUCE_USERNAME="your-username"
export SAUCE_ACCESS_KEY="your-access-key"
export SAUCE_REGISTRY_URL="your-saucelabs-registry-url"
```

Retrieve short-lived token:

```bash
SAUCE_SHORT_LIVED_TOKEN=`curl --silent --user "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" \
  --header "Content-Type: application/json" --data "{\"registry_url\": \"$SAUCE_REGISTRY_URL\"}" \
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
let's assume it is `registry.example.com/your-private-registry`. Now you need to extract the domain name from it,
and use it together with created environment variables to login to your registry:

```bash
echo $DOCKER_PASSWORD | docker login --username $DOCKER_USERNAME --password-stdin registry.example.com
```

### Working with SauceLabs Container Registry

Once you're logged in, you can run any docker commands related to the registry as you'd normally do.

:::note
If you're not able to log in to docker, your token may have already expired - it's valid only for 30 minutes.
Run the first part of the script and try to log in again.
:::

### How many tokens can I generate?

There's no limit to how many tokens can be generated. If you generate a new one, the old one will still be valid
till it's expiration time.
