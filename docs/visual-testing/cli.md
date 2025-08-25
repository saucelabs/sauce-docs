---
id: cli
title: Sauce Visual CLI
sidebar_label: Sauce Visual CLI
---

The Sauce Visual CLI (command line interface) allows you to easily interact with Sauce Visual, streamlining your visual testing workflows. With this tool, you can create new builds, mark builds as completed, and retrieve the current status of any build. This simplifies the process of integrating visual testing into your continuous integration and delivery pipelines, ensuring efficient and accurate visual validation of your applications.

## What You'll Need

- A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up))
- Your Sauce Labs [Username and Access Key](https://app.saucelabs.com/user-settings) to be set in `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` environment variables

```sh
export SAUCE_USERNAME=__YOUR_SAUCE_USERNAME__
export SAUCE_ACCESS_KEY=__YOUR_SAUCE_ACCESS_KEY__
```

## System Requirements

- Node.js: Version 18.x or higher
- npx: Included with Node.js (version 10.x or higher)
- Operating System: macOS 10.15+, Linux, or Windows 10/11

## Usage

You can run Sauce Visual CLI using:

`npx @saucelabs/visual [command] [subcommand] [options]`

Run the following command to see the list of available commands:

`npx @saucelabs/visual help`

## Commands

### build create

Creates a Sauce Visual build

Usage: `npx @saucelabs/visual build create [options]`

Example: `npx @saucelabs/visual build create -n "My Build Name"`

#### Required

- `-n`, `--name`: Build name

#### Options

- `-r`, `--region`: The Sauce Labs region. Possible values: `us-west-1`, `eu-central-1`, `us-east-4`. Default: `us-west-1`
- `--branch`: Branch name to associate the build with.
- `--default-branch`: Main branch name to associate the build with. Usually `main` or `master`. Read more [here](https://docs.saucelabs.com/visual-testing/workflows/ci/)
- `-p`, `--project`: Label/project to associate the build with.
- `-c`, `--custom-id`: User-supplied custom ID to associate the build with. For advanced users.

### build finish

Finishes a Sauce Visual build

Usage: `npx @saucelabs/visual build finish [options]`

#### Required

One of the following:

- `-b`, `--build-id`: Build ID to finish. Format: `UUID`
- `-c`, `--custom-id`: Custom ID associated with a build to finish.

#### Options
- `-r`, `--region`: The Sauce Labs region. Possible values: `us-west-1`, `eu-central-1`, `us-east-4`. Default: `us-west-1`

### build status

Fetches status from a Sauce Visual build

Usage: `npx @saucelabs/visual build status [options]`

#### Required

One of the following:

- `-b`, `--build-id`: Build ID. Format: `UUID`
- `-c`, `--custom-id`: Custom ID associated with a build.

#### Options

- `-r`, `--region`: The Sauce Labs region. Possible values: `us-west-1`, `eu-central-1`, `us-east-4`. Default: `us-west-1`

### baselines merge

Merges baselines in a project from one branch to another. Useful for branching behavior in CI environments.

Usage: `npx @saucelabs/visual baselines merge [options]`

#### Required

All the following:

- `-p`, `--project` \<project>       Project name
- `-s`, `--source-branch` \<branch>  Branch from which to copy the baselines
- `-t`, `--target-branch` \<branch>  Branch into which to copy the baselines

#### Options

- `-r`, `--region`: The Sauce Labs region. Possible values: `us-west-1`, `eu-central-1`, `us-east-4`. Default: `us-west-1`


### help

Displays all available commands. In addition to the `help` command there's also the `-h`, `--help` option available for every command to display the available options.

Usage: `npx @saucelabs/visual help`

Example: `npx @saucelabs/visual baselines merge --help`
