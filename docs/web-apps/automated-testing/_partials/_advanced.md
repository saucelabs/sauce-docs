### Predefined Environment Variables

If you're running a test script where you need to communicate a Sauce Labs Job ID to a third-party tool, use the `SAUCE_JOB_ID` environment variable to reference it.

### Tailoring Your Test File Bundle

The `saucectl` command line bundles your root directory (`rootDir` parameter of `config.yml`) and transmits it to the Sauce Labs cloud or your own infrastructure via Docker, then unpacks the bundle and runs the tests. This functionality is partly what allows Sauce Control to operate in a framework-agnostic capacity. However, you can and should manage the inclusion and exclusion of files that get bundled to optimize performance and ensure security.

#### Excluding Files from the Bundle

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

#### Including Node Dependencies

The default `.sauceignore` file lists `node_modules/` so locally installed node dependencies are excluded from the bundle. If your tests require node dependencies to run, you can either:

* [Include `node_modules` with your bundle](#remove-node_modules-from-sauceignore) or
* [Set NPM packages in config.yml](#set-npm-packages-in-configyml)

#### Remove "node_modules" from `.sauceignore`

Delete or comment out `node_modules/` in your `.sauceignore` file to bundle your node dependencies. For example,

```bash
# Do NOT exclude node_modules from bundle
# node_modules/
```

Node dependencies can increase your bundle by potentially hundreds of megabytes, so consider including only the required dependencies rather than the entire `node_modules` directory. The following sections provide some methods for limiting the scope of dependencies you must include.

##### Install "devDependencies" Only

Consider only installing NPM `devDependencies` if your tests do not require all prod `dependencies`.

```bash
# Only install dev dependencies
npm install --only=dev

saucectl run
```

##### Uninstall Nonessential Dependencies

If your standard install includes dependencies that aren't needed to run your tests, uninstall them prior to bundling.

```bash
# Install node dependencies
npm ci # or "npm install"

# Remove unneeded dependencies
npm uninstall appium
npm uninstall express

saucectl run
```

##### Install Essential Dependencies Individually

If you know that your tests require only specific dependencies, install them individually instead of running `npm install` or `npm ci`.

```bash
# Install individual dependencies
npm install playwright-xpath
npm install @playwright/react

saucectl run
```

#### Set NPM Packages in `config.yml`

You can avoid installing or uninstalling dependencies prior to each bundling operation by defining a default set of NPM packages to install in your sauce configuration file using the `npm` parameter, as shown in the following example:

```jsx title= "config.yml npm example"
npm:
  registry: https://registry.npmjs.org
  packages:
    lodash: "4.17.20"
    "@babel/preset-typescript": "7.12"
    "@playwright/react": "^5.0.1"
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

### Attaching Test Assets

Any test assets created by your tests at runtime (such as logs, screenshots or reports) you wish to retain along with your test results must be placed in the `__assets__` directory of your project root folder. On Sauce Labs VMs, this path is relative to the current working directory.

:::note Screenshots not Viewable in UI
Test Screenshots uploaded to Sauce Labs are currently not viewable in Test Results screen of the Sauce Labs UI, but can be retrieved using the [Get Job Asset File](/dev/api/jobs/#get-a-job-asset-file) API. Alternatively, you can use the [artifacts.download](#download) configuration parameter to download test assets to a local file upon completion of your test.
:::

:::note Nested Paths
Nested assets are stored **flat** in Sauce Labs. A test asset like `__assets__/mylogs/log.txt` would therefore be stored and available for download as `log.txt`.
Please keep that in mind when creating custom assets, as examples like `__assets__/mylogs/log.txt` and `__assets__/myotherlogs/log.txt` would eventually collide when persisted.
:::

### Setting up a Proxy

If you need to go through a proxy server, you can set it through the following variables:

* `HTTP_PROXY`: Proxy to use to access HTTP websites
* `HTTPS_PROXY`: Proxy to use to access HTTPS websites


#### Docker Proxy Considerations

When running in docker-mode, `saucectl` still must reach the Sauce Labs platform get the latest docker image available or upload the test package to Sauce Cloud, and the docker container needs to access the tested website and Sauce Labs to upload results.

Therefore, you may be required to set the proxy twice, as shown in the following examples:

``` title= "Example: Windows Powershell"
PS> $Env:HTTP_PROXY=http://my.proxy.org:3128/
PS> $Env:HTTPS_PROXY=http://my.proxy.org:3128/
PS> saucectl run -e HTTP_PROXY=${Env:HTTP_PROXY} -e HTTPS_PROXY=${Env:HTTPS_PROXY}
```

``` title= "Example: Linux/macOS"
$> export HTTP_PROXY=http://my.proxy.org:3128/
$> export HTTPS_PROXY=http://my.proxy.org:3128/
$> saucectl run -e HTTP_PROXY=${HTTP_PROXY} -e HTTPS_PROXY=${HTTPS_PROXY}
```
