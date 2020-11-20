# Sauce Labs Docs ![BETA](https://img.shields.io/badge/beta!-blue?style=for-the-badge)

<!-- [START badges] -->
![Sauce Pipeline Browser Tests](https://github.com/saucelabs/sauce-docs/workflows/Sauce%20Pipeline%20Browser%20Tests/badge.svg)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.MD) <a href="https://gitpod.io/#https://github.com/saucelabs/sauce-docs"><img src="https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod" alt="Gitpod Ready-to-Code"/></a>
<!-- [END badges] -->

Welcome to the `sauce-docs`, this website contains all technical documentation about Sauce Labs and its products. This site uses [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

__Table of Contents__

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Local Development](#local-development)
4. [Contributing](#contributing)

## Prerequisites

* [`git`](https://git-scm.com/downloads)
* [Node.js](https://nodejs.org/en/download/) `version >= 10.15.1` or above (which can be checked by running node -v). You can use nvm for managing multiple Node versions on a single machine installed
* [Yarn](https://yarnpkg.com/en/) `version >= 1.5` (which can be checked by running yarn version). Yarn is a performant package manager for JavaScript and replaces the npm client. It is not strictly necessary but highly encouraged.
* [Docker](https://docs.docker.com/get-docker/) (optional if you want to deploy locally via a container or to test before you deploy)

## Installation

***

### For Tech Content Team

Before your start, you should have your own GitHub account associated with your Sauce Labs email.

#### Create a sauce-docs Working Directory

1. Submit a Helpdesk ticket to become a member of github.com/saucelabs.
1. Open https://github.com/saucelabs/sauce-docs.
1. In the top right of the screen, click the **Fork** button and choose your personal repo as the target.
1. In the same screen, click the green **Code** button and choose the tab for the protocol of your personal GitHub account (HTTPS or SSH).
    > **NOTE:** You can learn more about generating SSH keys in this [GitHub doc](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/connecting-to-github-with-ssh).

1. Click the clipboard icon to copy the clone address.
1. Open a Terminal shell and navigate to the location that will be your working directory.
    Example: `nancysweeney$ cd GH`
1. Enter the following command to clone your repo in your local working directory:
    `$ git clone <paste clipboard contents here>`

Now you should have successfully pulled the sauce-docs directory into your own remote repo (your personal GitHub account) and onto your own local working directory. You can check by opening Finder to see whether the directory is there.

#### Install Docusaurus

If you haven't installed Yarn, you should do that now.

> **NOTE:** I highly recommend using [Homebrew](https://brew.sh/) to install Yarn.

1. Run this command to install Homebrew, if you do not have it: `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"`
1. Navigate to your sauce-docs root directory (i.e., ` cd GH/sauce-docs`).
1. Run `brew install yarn`.
1. When that completes, close the Terminal window and reopen a new shell.
1. Navigate back to your sauce-docs root directory and run `yarn install` to install the Docusaurus client.
1. Run `yarn start` to test your environment. This should initiate the local server and launch a browser window at `localhost:3000` that is the Sauce Docs front page.

***

* Pull down this repo:

	```bash
	git clone https://github.com/saucelabs/sauce-docs.git
	```

* Change directory to `sauce-docs`:

    ```bash
    cd sauce-docs
    ```

* Install the dependencies:

	```
	yarn install
	```

    > If you have trouble with `yarn`, you can try `npm install` instead.

## Local Development

* Start the website:

	```
	yarn start
	```

	This command starts a local development server and open up a browser window (http://localhost:3000). Most changes perform live updates to your server without having to restart.

* Build the website:

	```
	yarn build
	```

	This command gathers the static content and places them in a `build` directory; which is compatible with most static content hosting services.

* Serve the website:

	```
	yarn serve
	```

	This command builds the site and serves it on your machine's host (http://localhost:3000).


## Contributing

Before you edit the docs, review the [style guide](docs/contributing/style-guide/mkdwn-styles.md) to make sure you maintain or standards. Also, before submitting an issue or PR in GitHub, please review the [code of conduct](docs/contributing/code-of-conduct.md) and or [contribution guide](CONTRIBUTING.MD) for further details.
