---
id: tf-connect
title: Test Fairy Connect
sidebar_label: Test Fairy Connect
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

TestFairy Connect is a proxy server installed on-premise, designed to help companies connect their bug-tracking systems behind a firewall (Jira Server) with the TestFairy cloud.

You can install Test Fairy Connect via a Docker image.

## How does it work?

The critical part of TestFairy Connect is the agent service that runs on a system in your firewall, connecting to TestFairy's web app and your bug-tracking system.
<img src={useBaseUrl('/img/testfairy/testing-an-app/bug-tracking/0-overview.png')} alt="Overview"/>

## Installation

Let's configure TestFairy Connect.

It is required only once. Docker will automatically download the latest version.

```sh
docker run -i -t -v $PWD:/etc/testfairy-connect testfairy/testfairy-connect:latest configure
```

:::note
You can replace `$PWD` with a directory of your choice to store your TestFairy Connect configuration.
:::

If there are no issues, you can follow the interactive configuration wizard displayed on the screen.

## Configuration

To configure TestFairy Connect, you will need the following data:

- TestFairy API key. You can find at https://[your-subdomain].testfairy.com/settings/api-key/.
- The URL to your bug system.
- In the case of a Jira basic authentication - valid credentials (`Username` and `API Token`) for the Jira user.
- In the case of a Jira OAuth authentication - admin access to Jira/the ability to manage Application Links (as described in the configuration wizard script).

By default, your configuration file `config.json` is saved to `.testfairy-connect` under the Dockers Image home directory: `~/.testfairy-connect/config.json`.

## Running

Now that you have TestFairy Connect configured, run it with the following:

```sh
docker run -d -v $PWD:/etc/testfairy-connect --restart=always testfairy/testfairy-connect:latest start
```

:::note
You can replace `$PWD` with a directory of your choice to store your TestFairy Connect configuration.
:::

TestFairy Connect will be running in the background, and it is safe to close the ssh connection. Remember that stopping docker or rebooting the server will require you to run the `start` command again.

## Troubleshooting

#### SELinux

If you have permission errors related to your docker volume, you can attach the volume in relaxed SELinux mode or disable SELinux enforcement entirely.

- Use these commands to attach volume in relaxed SELinux mode:
  ```sh
  docker run -i -t -v $PWD:/etc/testfairy-connect:z testfairy/testfairy-connect:latest configure
  docker run -d -v $PWD:/etc/testfairy-connect:z --restart=always testfairy/testfairy-connect:latest start
  ```
- Alternatively, you can disable SELinux altogether by running the following:
  ```sh
  sudo setenforce 0
  ```
