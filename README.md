<h1 align="center">
  <p align="center">Sauce Labs Docs</p> 
</h1>

<p align="center">
  <a href="https://twitter.com/saucelabs"><img src="https://img.shields.io/twitter/follow/saucelabs.svg?style=social" alt="Follow Sauce Labs on Twitter"/></a>
  <a href="https://docs.saucelabs.com/contributing/"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs Welcome"></a>
  <a href="https://github.com/saucelabs/sauce-docs/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-green.svg?style=flat"></a>
  <a href="https://gitpod.io/#https://github.com/saucelabs/sauce-docs"><img src="https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod" alt="Gitpod Ready-to-Code"/></a>
  <a href="https://github.com/saucelabs/sauce-docs/actions/workflows/deploy-to-production.yml"><img src="https://github.com/saucelabs/sauce-docs/actions/workflows/deploy-to-production.yml/badge.svg" alt= "Deploy to Production"/></a>
  <a href="https://github.com/saucelabs/sauce-docs/actions/workflows/link-checker.yml"><img src="https://github.com/saucelabs/sauce-docs/actions/workflows/link-checker.yml/badge.svg" alt= "Sauce Docs Link Checker"/>
</p>

<p align="center">
    <img src="https://app.saucelabs.com/browser-matrix/saucy-docs.svg?auth=495eb49379a16a1e211eb5d27444fa76" alt= "Sauce Labs Browser Matrix"/>
</p>

Welcome to the `sauce-docs` repository. This website contains all technical
documentation about Sauce Labs and its products and is built on top of
[Docusaurus](https://docusaurus.io/), a modern static website generator.

**Table of Contents**

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Local Development](#local-development)
    1. [Building the Website](#building-the-website)
4. [Local Linters](#local-linters)
    1. [ESLint and Prettier](#eslint-and-prettier)
    2. [Vale](#vale)
5. [Contributing](#contributing)
    1. [Contributing Guide](#contributing-guide)
    2. [Style Guide](#style-guide)
    3. [Code of Conduct](#code-of-conduct)

## Prerequisites

-   [`git`](https://git-scm.com/downloads)
-   [Node.js](https://nodejs.org/en/download/) `version >= 18` or above (which can be checked by running node -v). You can use nvm for managing multiple Node versions on a single machine installed
-   [Docker](https://docs.docker.com/get-docker/) (optional if you want to deploy locally via a container or to test before you deploy)

## Installation

-   Pull down this repo:

    ```bash
    git clone https://github.com/saucelabs/sauce-docs.git
    ```

-   Change directory to `sauce-docs`:

    ```bash
    cd sauce-docs
    ```

-   Install the dependencies:

    ```
    npm install
    ```

## Local Development

-   Serve the website locally (without Algolia API Key):

    ```
    npm run dev
    ```

    This command builds the site and serves it on your machine's host (http://localhost:3000) and requires no [Algolia API key](https://docusaurus.io/docs/search#connecting-algolia).

-   Start the website locally (with Algolia API Key):

    ```
    npm run start
    ```

    This command starts a local development server and open up a browser window (http://localhost:3000). Most changes perform live updates to your server without having to restart.

### Building the Website

-   Build the website:

    ```
    npm run build
    ```

    This command gathers the static content and places them in a `build` directory; which is compatible with most static content hosting services.

-   Serve the website:

    ```
    npm run serve
    ```

    This command builds the site and serves it on your machine's host (http://localhost:3000).

## Local Linters

To help ensure code quality and improve the content added to documentation, we use the following linters:

-   [ESLint and Prettier](#eslint-and-prettier)
-   [Vale](#vale)

### ESLint and Prettier

The doc site employs two different code quality tools:

-   `eslint`
-   `prettier`

Before each commit, a `lint-staged` task runs. If you encounter no errors feel free to push your changes to your remote branch. However, if you see any `eslint` errors, or if you see any `prettier` responses like the one below, it means you have to run `eslint` and/or `prettier`:

```
Forgot to run prettier?
```

Below are the following commands for both `eslint` and `prettier` that you must run:

```
#eslint
npx eslint <file>/<location> --fix

#prettier
npx prettier --write '<file>/<location>'
```

### Vale

[Vale](https://github.com/errata-ai/vale) is an open source prose linter that checks the content of docs against style guide rules. The goal of a prose linter is to automate style guide checks in docs-as-code environments, so that style issues are detected before deploy or while authoring docs in the code editor.

To help adhere to the documentation style guidelines, and improve the content added to documentation, install Vale and integrate with your code editor.

You can also use Vale with the [command line](https://vale.sh/docs/vale-cli/structure/#quick-start), though using the linter in your editor is more convenient than having to run the commands from the command line.

#### Get Started

1. Use a package manager to install Vale. See [Installation](https://vale.sh/docs/vale-cli/installation/).
1. (Optional) Install the [Vale](https://marketplace.visualstudio.com/items?itemName=errata-ai.vale-server) extension (errata-ai.vale-server) for Visual Studio Code.
1. (Optional) To configure Vale in Visual Studio Code, specify the path to the project directory with the `.vale.ini` file for `vale.valeCLI.config` in the Extension Settings. For example, <span>/Users/yourname/Documents/GitHub/sauce-docs/.vale.ini</span>.
1. Save/edit a file using Visual Studio Code, or run `vale [filename.md]` from the root folder of the repository with the command line.

#### Usage: Vale + VS Code

**Detailed Problems View**

Browse detailed information for each alert, including the file location, style, and rule ID.

<p align="center">
  <img src="/styles/images/DetailedProblemsView.png" />
</p>

**Go To Rule**

Navigate from an in-editor alert to a rule's implementation for the `StylesPath` by clicking **View Rule**.

<p align="center">
  <img src="/styles/images/GoToRule.png" />
</p>

**Quick Fixes**

Fix word usage, capitalization, and more using Quick Fixes (macOS: <kbd>cmd</kbd> + <kbd>.</kbd>, Windows/Linux: <kbd>Ctrl</kbd> + <kbd>.</kbd>). The quick fixes feature depends on the underlying rule implementing an action that VSCode can then trigger.

<p align="center">
  <img src="/styles/images/QuickFixes.png" />
</p>

#### Folder Structure

The following file and folder are stored in the root directory of the [sauce-docs](https://github.com/saucelabs/sauce-docs) repository.

-   `.vale.ini` contains the Vale configuration settings. See [Configuration](https://vale.sh/docs/topics/config/).
-   `styles/sauce` contains the Sauce Labs style guide rules for Vale. See [Styles](https://vale.sh/docs/topics/styles/).

#### Vale Result Types

Vale returns three types of results:

-   **Error** - For branding guidelines, trademark guidelines, and anything that causes content on the documentation site to render incorrectly.
-   **Warning** - For general style guide rules, tenets, and best practices.
-   **Suggestion** - For technical writing style preferences that may require refactoring of documentation or updates to an exceptions list.

## Contributing

The Sauce Labs `sauce-docs` repo is an open source project. Your contributions are highly welcomed.

Before you submit an issue or PR in GitHub, please read the following.

### Contributing Guide

Read our [Contributing Guide](https://docs.saucelabs.com/contributing/) to learn about our development process, how to propose bug fixes and improvements, and how to build and test your changes.

### Style Guide

Review our [Style Guide](https://docs.saucelabs.com/contributing/style-guide/) to learn how to get the most out of your markdown and to ensure you are following our guidelines and conventions.

### Code of Conduct

Sauce Labs has adopted a [Code of Conduct](https://docs.saucelabs.com/contributing/code-of-conduct/) that we expect project participants to adhere to. Please read the full text so that you can understand what actions will and will not be tolerated.
