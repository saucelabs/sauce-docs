## Environment Variable Expansion

All values in your `saucectl` configuration support environment variable expansion. `$var` in `config.yml` will be replaced according to your shell's environment variables. References to undefined variables will be replaced with an empty string.

## Predefined Environment Variables

The following environment variables are available during test execution.

| Environment Variable      | Description                                                                                       |
| ------------------------- | ------------------------------------------------------------------------------------------------- |
| SAUCE_JOB_ID              | Job ID                                                                                            |
| SAUCE_SUITE_NAME          | Suite Name                                                                                        |
| SAUCE_ARTIFACTS_DIRECTORY | Absolute path to the artifacts directory. Files placed in this folder are persisted with the Job. |

## Tailoring Your Test File Bundle

The `saucectl` command line bundles your root directory (`rootDir` parameter of `config.yml`) and transmits it to the Sauce Labs cloud, then unpacks the bundle and runs the tests. This functionality is partly what allows Sauce Control to operate in a framework-agnostic capacity. However, you can and should manage the inclusion and exclusion of files that get bundled to optimize performance and ensure security.

### Excluding Files from the Bundle

The `.sauceignore` file allows you to designate certain files to be excluded from bundling.

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

Sometimes it's easier to do the inverse: Including files for the bundle.

```bash
# Ignore all files by default.
/*

# Re-include files we selectively want as part of the payload by prefixing the lines with '!'.
!/node_modules
!/cypress
!cypress.config.js

# Since the whole '/cypress' folder is now included, this would also include any
# subdirectories that potentially contain auto-generated test artifacts from
# the local dev environment.
# It'd be wasteful to include them in the payload, so let's ignore those subfolders.
/cypress/videos/
/cypress/results/
/cypress/screenshots/
```

### Including Node Dependencies

The default `.sauceignore` file lists `node_modules/` so locally installed node dependencies are excluded from the bundle. If your tests require node dependencies to run, you can either:

- [Include `node_modules` with your bundle](#remove-node_modules-from-sauceignore) or
- [Set NPM packages in config.yml](#set-npm-packages-in-configyml)

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
npm install playwright-xpath

saucectl run
```

### Set NPM Packages in `config.yml`

You can avoid installing or uninstalling dependencies prior to each bundling operation by defining a default set of NPM packages to install in your sauce configuration file using the `npm` parameter, as shown in the following example:

```jsx title= "config.yml npm example"
npm:
  registries:
    - url: https://registry.npmjs.org
  packages:
    "lodash": "4.17.20"
```

Alternatively, you can let `saucectl` selectively include already installed dependencies from the `node_modules` folder.

```jsx title= "config.yml npm dependencies"
npm:
  dependencies:
    - lodash
```

:::caution
This feature is highly experimental.
:::

## Attaching Test Assets

By default, any test assets created by your tests at runtime (such as logs, screenshots or reports) you wish to retain along with your test results must be placed in the `__assets__` directory of your project root folder. On Sauce Labs VMs, this path is relative to the current working directory.

### Attaching entire directories

In situations where you want to preserve the file structure of your assets (e.g. a multi-page HTML report),
you can use the `retain` feature to define a directory to archive and store as a test asset.

### Handling nested assets

Nested assets are stored **flat** in Sauce Labs. A test asset like `__assets__/mylogs/log.txt` would therefore be stored and available for download as `log.txt`.
Please keep that in mind when creating custom assets, as examples like `__assets__/mylogs/log.txt` and `__assets__/myotherlogs/log.txt` would eventually collide when persisted.

There are cases where you may want to override this default behaviour; e.g. your test framework generates
an HTML report and you want to preserve the entire report directory and don't want the individual files to
be flattened and automatically attached as described above. In that case, you can set an environment variable
in your saucectl config to opt out of the default behaviour. When set, the configured output directory
for the test run will be honoured; e.g. it won't be overridden to `__assets__/`.

```yaml title= "example configuration"
artifacts:
  retain:
    report-directory: archived-report.zip

env:
  SAUCE_SYNC_WEB_ASSETS: "true"
```

When configured this way, the directory named `report-directory` will be archived as `archived-report.zip`.
To maintain backwards compatibility with our UI, some asset types (e.g. images, logs, etc.) in `report-directory` will still be automatically copied over to `__assets__/` and attached to the test results.

## Setting up a Proxy

If you need to go through a proxy server, you can set it through the following variables:

- `HTTP_PROXY`: Proxy to use to access HTTP websites
- `HTTPS_PROXY`: Proxy to use to access HTTPS websites
