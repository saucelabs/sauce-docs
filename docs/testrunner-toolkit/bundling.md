---
id: bundling
title: Bundling Test Files
sidebar_label: CLI Reference
---

The [saucectl command line interface](saucectl) runs tests (Cypress, TestCafe, Playwright, ...) by bundling up your root directory, sending the bundle to the Sauce Labs cloud (or in your own infrastructure via Docker), unpacking the bundle and then running the tests. This page explains how bundling works and how you can reduce the size of your bundle for improved performance.

## Bundling

The Sauce Labs config.yml has a parameter called "rootDir" that specifies the directory that needs to be bundled ([see configuration documentation](configuration.md))

(TODO: add a screengrab of the bundling in action)

## sauceignore

The `.sauceignore` file is a file that is generated when you run `saucectl new`. It tells saucectl which files should be excluded from bundling. It works the same way as other ignore files (`.gitignore`, `.hgignore`, `.dockerignore`, etc...). See https://git-scm.com/docs/gitignore for reference.

If your project has files that are not needed to run your tests, add those files to `.sauceignore` to reduce the size of your bundle and improve test speed.

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
```

## Node Dependencies

By default, `node_modules/` is included in `.sauceignore` so that locally installed node dependencies are not included in the bundle. If node dependencies are needed for tests to run, you have two options: [1. Include `node_modules` with your bundle](#including-node_modules-in-bundle) or [2. Set NPM packages in config.yml](#set-npm-packages-in-configyml)

### Including "node_modules" in bundle

In your `.sauceignore`, delete or comment out the entry `node_modules/` to make SauceCtl include your `node_modules/` so that your node dependencies are included with your bundle.

```bash
# Do NOT exclude node_modules from bundle
# 
```

Since node dependencies can be quite large (potentially hundreds of megabytes) you may wish to follow some of these tips to reduce the size

#### 1. Only install "devDependencies"

You may only need `devDependencies` and not need prod `dependencies`. Try only installing NPM dev dependencies.

```bash
# Only install dev dependencies
npm install --only=dev

saucectl run
```

#### 2. Remove unneeded dependencies prior to bundling

If there are dependencies that aren't needed to run your tests, you can uninstall them prior to bundling

```bash
# Install node dependencies
npm ci # or "npm install"

# Remove any unneeded dependencies
npm uninstall appium
npm uninstall express

saucectl run
```

#### 3. Only install dependencies that are needed

If you only need a few dependencies to run your tests, you can just install those dependencies individually, instead of running `npm install` or `npm ci`

```bash
# Install individual dependencies
npm install cypress-xpath
npm install @cypress/react

saucectl run
```

### Set NPM packages in config.yml

You can hardcode a list of NPM packages you wish to have installed in your sauce config yml. [See documentation](configuration#npm)