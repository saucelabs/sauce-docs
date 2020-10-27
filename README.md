# Sauce Labs Docs ![BETA](https://img.shields.io/badge/beta!-blue?style=for-the-badge)

<!-- [START badges] -->
[![Sauce Pipeline Browser Tests](https://github.com/saucelabs/sauce-docs/workflows/Sauce%20Pipeline%20Browser%20Tests/badge.svg?branch=master)](https://github.com/saucelabs/sauce-docs/actions)
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
