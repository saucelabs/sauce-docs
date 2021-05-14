<h1 align="center">
  <p align="center">Sauce Labs Docs</p>
  <a href="https://docs.saucelabs.com"><img src="/static/img/QA_Bot_EXPORT.png" alt="QA Sauce Bot" width="300"> </a>
</h1>

<p align="center">
  <a href="https://twitter.com/saucelabs"><img src="https://img.shields.io/twitter/follow/saucelabs.svg?style=social" align="right" alt="Twitter Follow"/></a>
  <a href="CONTRIBUTING.md#pull-requests"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs Welcome"></a>
  <a href="#license"><img src="https://img.shields.io/github/license/sourcerer-io/hall-of-fame.svg?colorB=ff0000"></a>
  <a href="https://gitpod.io/#https://github.com/saucelabs/sauce-docs"><img src="https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod" alt="Gitpod Ready-to-Code"/></a>
  <a href="https://github.com/saucelabs/sauce-docs/workflows/Sauce%20Pipeline%20Browser%20Tests"><img src="https://github.com/saucelabs/sauce-docs/workflows/Sauce%20Pipeline%20Browser%20Tests/badge.svg" alt= "Sauce Pipeline Browser Tests"/></a>
  <img src=https://app.saucelabs.com/buildstatus/saucy-docs?auth=e1fb7e1761377a8a8596cb777487e10d2c914142c83f1a45cd038344708f9aae" alt= "Sauce Test Status"/>
	  
</p>

<p align="center">
	<img src=https://app.saucelabs.com/browser-matrix/saucy-docs.svg?auth=e1fb7e1761377a8a8596cb777487e10d2c914142c83f1a45cd038344708f9aae" alt= "Sauce Browser Matrix"/>
</p>
		
Welcome to the `sauce-docs`, this website contains all technical documentation about Sauce Labs and its products. This site uses [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

__Table of Contents__

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Local Development](#local-development)
	1. [Building the Website](#building-the-website)
5. [Contributing](#contributing)

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
	npm install
	```

## Local Development

* Serve the website locally (without Algolia API Key):

   ```
   npm run dev
   ```

	This command builds the site and serves it on your machine's host (http://localhost:3000) and requires no [Algolia API key](https://github.com/saucelabs/sauce-docs/blob/master/docusaurus.config.js#L150-L156).
	
* Start the website locally (with Algolia API Key):

	```
	npm run start
	```

	This command starts a local development server and open up a browser window (http://localhost:3000). Most changes perform live updates to your server without having to restart.

### Building the Website

* Build the website:

	```
	npm run build
	```

	This command gathers the static content and places them in a `build` directory; which is compatible with most static content hosting services.

* Serve the website:

	```
	npm run serve
	```

	This command builds the site and serves it on your machine's host (http://localhost:3000).



## Contributing

Before you edit the docs, review the [style guide](docs/contributing/style-guide/mkdwn-styles.md) to make sure you maintain or standards. Also, before submitting an issue or PR in GitHub, please review the [code of conduct](docs/contributing/code-of-conduct.md) and or [contribution guide](CONTRIBUTING.MD) for further details.
