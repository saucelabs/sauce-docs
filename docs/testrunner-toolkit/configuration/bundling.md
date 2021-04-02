---
id: bundling
title: Test File Bundling
sidebar_label: Test File Bundling
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The `saucectl` command line bundles your root directory (specified in the `rootDir` parameter of your [configuration file](/testrunner-toolkit/configuration.md)) and transmits it to the Sauce Labs cloud or your own infrastructure via Docker, then unpacks the bundle and runs the tests. This functionality is partly what allows Testrunner to operate in a framework-agnostic capacity. However, you can and should manage the inclusion and exclusion of files that get bundled to optimize performance and ensure security.

<img src={useBaseUrl('img/saucectl/uploading-project.png')} alt="Uploading a Project" />

## Exclude Files from the Bundle

The `.sauceignore` file is generated when you run `saucectl new`, allowing you to designate certain files to exclude from bundling.

Add any files that are not direct test dependencies to `.sauceignore` to reduce the size of your bundle, improve test speed, and protect sensitive information.

Examples of what can be included in `.sauceignore`:

```bash
# .sauceignore

# Ignore node_modules
node_modules/

# Ignore all log files
*.log

# Ignore executables/binaries
*.exe
*.bin
**/*/bin

# Ignore media files
*.png
*.jpeg
*.jpg
*.mp4

# Ignore documentation
*.rst
*.md

# Ignore sensitive data
credentials.yml
```

## Including Node Dependencies

The default `.sauceignore` file lists `node_modules/` so locally installed node dependencies are excluded from the bundle. If your tests require node dependencies to run, you can either:

* [Include `node_modules` with your bundle](#remove-node_modules-from-sauceignore) or
* [Set NPM packages in config.yml](#set-npm-packages-in-configyml)

### Remove "node_modules" from `.sauceignore`

Delete or comment out `node_modules/` in your `.sauceignore` file to bundle your node dependencies. For example,

```bash
# Do NOT exclude node_modules from bundle
# node_modules/
```

Node dependencies can increase your bundle by potentially hundreds of megabytes, so consider including only the required dependencies rather than the entire `node_modules` directory. The following sections provide some methods for limiting the scope of dependencies you must include.

#### Install "devDependencies" Only

Consider only installing NPM `devDependencies` if your tests do not require all prod `dependencies`.

```bash
# Only install dev dependencies
npm install --only=dev

saucectl run
```

#### Uninstall Nonessential Dependencies

If your standard install includes dependencies that aren't needed to run your tests, uninstall them prior to bundling.

```bash
# Install node dependencies
npm ci # or "npm install"

# Remove unneeded dependencies
npm uninstall appium
npm uninstall express

saucectl run
```

#### Install Essential Dependencies Individually

If you know that your tests require only specific dependencies, install them individually instead of running `npm install` or `npm ci`.

```bash
# Install individual dependencies
npm install cypress-xpath
npm install @cypress/react

saucectl run
```

### Set NPM Packages in `config.yml`

As an alternative to installing or uninstalling certain dependencies prior to each bundle operation, you can set the list of NPM packages to install in your sauce [configuration file](/testrunner-toolkit/configuration/common-syntax#npm).
