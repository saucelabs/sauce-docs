# Sauce Labs Docs

Welcome to the `sauce-docs`, this website contains all technical documentation with regards to Sauce Labs and all of its products. This site is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

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
* Install the dependencies:
	```
	yarn
	```

## Local Development

* Start the website:
	```
	yarn start
	```

	This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

* Build the website:
	```
	yarn build
	```

	This command generates static content into the `build` directory and can be served using any static contents hosting service.


## Contributing

Before you edit the docs, review the the [style guide](docs/mkdwn-styles.md) to make sure you maintain or standards. Also, before submiting an issue or PR in GitHub, please review the [code of conduct](docs/code-of-conduct.md) for further details.
