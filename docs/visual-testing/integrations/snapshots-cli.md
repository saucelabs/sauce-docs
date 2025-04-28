---
sidebar_label: Sauce Visual Snapshots CLI
---

# Sauce Visual Snapshots CLI

The Sauce Visual Snapshots CLI (command line interface) allows you to create Visual snapshots of provided PDF documents.

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

`npx @saucelabs/visual-snapshots [command] [paths/globs] [options]`

Run the following command to see the list of available commands:

`npx @saucelabs/visual-snapshots help`

## Commands

### pdf

Creates Visual snapshots of each page of provided PDF document

Usage: `npx @saucelabs/visual-snapshots pdf [options]`

Example: `npx @saucelabs/visual-snapshots pdf ./example.pdf ./dir_with_pdfs ./some_dir/**/*.pdf`

#### Required

- `paths/globs`: Paths to PDF files, glob patterns, or paths to directories containing PDF files.
- `-u`, `--user`: Your Sauce Labs username. If not provided, the value of `SAUCE_USERNAME` environment variable will be checked.
- `-k`, `--key`: Your Sauce Labs access key. If not provided, the value of `SAUCE_ACCESS_KEY` environment variable will be checked.

#### Options

- `-r`, `--region`: The Sauce Labs region. Possible values: `us-west-1`, `eu-central-1`, `us-east-4`. If not provided, the value of `SAUCE_REGION` environment variable will be checked. Default: `us-west-1`.
- `-n`, `--build-name`: The name you would like to appear in the Sauce Visual dashboard. If not provided, the value of `SAUCE_VISUAL_BUILD_NAME` environment variable will be checked. Default: `Sauce Visual Build`.
- `-b`, `--branch`: The branch name you would like to associate this build with. We recommend using your current VCS branch in CI. If not provided, the value of `SAUCE_VISUAL_BRANCH` environment variable will be checked. Default: `undefined`.
- `-d`, `--default-branch`: Main branch name to associate the build with. Usually `main` or `master`. Read more [here](/visual-testing/workflows/ci/). If not provided, the value of `SAUCE_VISUAL_DEFAULT_BRANCH` environment variable will be checked. Default: `undefined`.
- `-p`, `--project`: Label/project to associate the build with. If not provided, the value of `SAUCE_VISUAL_PROJECT` environment variable will be checked. Default: `undefined`.
- `--build-id`: For advanced users: A user-supplied Sauce Labs Visual build ID. Can be used to create builds in advance using the GraphQL API. This can be used to parallelize tests with multiple browsers, shard, or more. If not provided, the value of `SAUCE_VISUAL_BUILD_ID` environment variable will be checked. Default: `undefined`.
- `--custom-id`: For advanced users. A user-supplied custom ID to identify this build. Can be used in CI to identify / check / re-check the status of a single build. Usage suggestions: CI pipeline ID. If not provided, the value of `SAUCE_VISUAL_CUSTOM_ID` environment variable will be checked. Default: `undefined`.
- `--suite-name`: The name of the suite you would like to appear in the Sauce Visual dashboard. Default: `undefined` (appears as `Unknown` in the Sauce Visual dashboard). Supports the following parameters: `{filename}, {ext}, {directory}, {directoryRelative}, {page}`. Default: `{directoryRelative}`.
- `--test-name`: The name of the test you would like to appear in the Sauce Visual dashboard. Supports the following parameters: `{filename}, {ext}, {directory}, {directoryRelative}, {page}`. Default: `{filename}{ext}`.
- `--snapshot-name` The name of the snapshot you would like to appear in the Sauce Visual dashboard. Supports the following parameters: `{filename}, {ext}, {directory}, {directoryRelative}, {page}`. Default: `{filename}-page-{page}`.
- `-j`, `--concurrency`: Maximum count of simultaneous uploads. Default: the number of CPUs.

##### Suite name, test name and snapshots name paameters

- `filename` - name of the PDF file without the extension
- `ext` - file extension (_.pdf_)
- `page` - page number, starting from 1
- `directory` - name of the directory the PDF file is located at
- `directoryRelative` - relative path from current working directory to the directory containing the PDF file

### help

Displays all available commands. In addition to the `help` command there's also the `-h`, `--help` option available for every command to display the available options.

Usage: `npx @saucelabs/visual-snapshots help`

Example: `npx @saucelabs/visual-snapshots pdf --help`
