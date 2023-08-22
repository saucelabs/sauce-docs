---
id: package-installation
title: Package Installation
sidebar_label: Package Installation
description: Instructions for installing Backtrace's packages.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

Follow the instructions below to install Backtrace's packages using your preferred package manager.

## What You'll Need

- A Backtrace account ([log in](https://backtrace.io/login) or sign up for a [free trial license](https://backtrace.io/sign-up)).
- Your subdomain name (used to connect to your Backtrace instance). For example, `https://example-subdomain.sp.backtrace.io`.
- A Backtrace project and a [submission token](/error-reporting/project-setup/submission-url).

## Linux (RHEL)

To install Backtrace packages, first install Backtrace's RPM mirror by running the following command:

```shell
$ curl -s https://<LICENSE>:@packagecloud.io/install/repositories/backtrace/stork/script.rpm.sh | sudo bash
```

Replace `<LICENSE>` with your license number. Contact us, if you haven't received your license yet.

This configures `yum` to pull from Backtrace's RPM mirror. To verify the proper `yum` configuration, run the following commands:

```shell
# Clean and update yum package listing
$ sudo yum clean; sudo yum update

# Confirm that the backtrace-* packages are available
$ yum list ^backtrace-*
backtrace-coresnap
backtrace-coronerd
backtrace-coroner
backtrace-ptrace
backtrace-hydra
[...]
```

To install the desired packages, use the following command:

```shell
# Install packages
$ yum install backtrace-<package-name>
```

## Debian-Based Systems (Including Ubuntu)

To install Backtrace packages, first install Backtrace's APT mirror by running the following command:

```shell
$ curl -s https://<LICENSE>:@packagecloud.io/install/repositories/backtrace/stork/script.deb.sh | sudo bash
```

Replace `<LICENSE>` with your license number. Contact us, if you haven't received your license yet.

This configures `apt` to pull from Backtrace's APT mirror. To verify proper `apt` configuration, run the following commands:

```shell
# Clean and update apt package listing
$ apt-get clean; apt-get update

# Confirm that backtrace-* packages are available
$ apt-cache search ^backtrace-*
backtrace-coresnap
backtrace-coronerd
backtrace-coroner
backtrace-ptrace
backtrace-hydra
[...]
```

To install the necessary packages, use the following command:

```shell
# Install packages (on machines which submit snapshots)
$ apt-get install backtrace-<package-name>
```

## FreeBSD

Refer to the [dedicated page for FreeBSD](/error-reporting/platform-integrations/coresnap/setup) for installation instructions.
