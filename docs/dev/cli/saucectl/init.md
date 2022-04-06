---
id: init
title: saucectl init
sidebar_label: saucectl init
---

## Description

Generate a configuration file for use in running tests through `saucectl`.

## Usage

<span className="cli">$ saucectl init [OPTIONS]</span>

## Extended Description

This bootstrapping command generates a configuration file for the framework of your choice in the format required by `saucectl`.

You can run the command with no options to initiate **interactive mode**, where you are iteratively prompted for each relevant property value. Alternatively, you can specify relevant property values by entering them as inline options in the command.

In either case, the command generates a `.sauce/config.yml` folder and file in the location from which the command is run. If you have an existing project directory for your framework, it is advised that you run this command from the project root.

## Alternative Configuration Editing

* If you are implementing a more complex set of properties, you can manually edit your `config.yml` file. Comprehensive descriptions for all supported properties are provided by framework:
    * [Cypress YAML](/web-apps/automated-testing/cypress/yaml)
    * [Playwright YAML](/web-apps/automated-testing/playwright/yaml)
    * [TestCafe YAML](/web-apps/automated-testing/testcafe/yaml)
    * [Puppeteer YAML](/web-apps/automated-testing/puppeteer/yaml)
    * [Espresso YAML](/mobile-apps/automated-testing/espresso-xcuitest/espresso)
    * [XCUITest YAML](/mobile-apps/automated-testing/espresso-xcuitest/xcuitest)

## Options Summary

<table id="table-cli">
  <thead>
    <tr>
      <th width="30%">Key</th>
      <th width="10%">Shorthand</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
     <td><span className="t-cli"><a href="#--accesskey">--accessKey</a></span></td>
     <td><span className="t-cli">-a</span></td>
     <td>A valid Sauce Labs account access key.</td>
    </tr>
    <tr>
     <td><span className="t-cli"><a href="#--app-string">--app</a></span></td>
     <td></td>
     <td>The path to a valid mobile application to test.</td>
    </tr>
    <tr>
     <td><span className="t-cli"><a href="#--artifactsdownloadwhen">--artifacts.download.when</a></span></td>
     <td><span className="t-cli">-f</span></td>
     <td>The framework for which this configuration is intended.</td>
    </tr>
    <tr>
     <td><span className="t-cli"><a href="#--browsername">--browserName</a></span></td>
     <td><span className="t-cli">-b</span></td>
     <td>The browser in which web-app tests will run.</td>
    </tr>
    <tr>
     <td><span className="t-cli"><a href="#--cypress-config">--cypress.config</a></span></td>
     <td></td>
     <td>The path to the Cypress configuration file.</td>
    </tr>
    <tr>
     <td><span className="t-cli"><a href="#--device">--device</a></span></td>
     <td></td>
     <td>The set of desired characteristics to match when finding a device.</td>
    </tr>
    <tr>
     <td><span className="t-cli"><a href="#--emulator">--emulator</a></span></td>
     <td></td>
     <td>The set of desired characteristics to match when finding an emulator.</td>
    </tr>
    <tr>
     <td><span className="t-cli"><a href="#--framework">--framework</a></span></td>
     <td><span className="t-cli">-f</span></td>
     <td>The framework for which this configuration is intended.</td>
    </tr>
    <tr>
     <td><span className="t-cli"><a href="#--frameworkversion">--frameworkVersion</a></span></td>
     <td><span className="t-cli">-v</span></td>
     <td>The version of the framework that is compatible with the tests to be run.</td>
    </tr>
    <tr>
     <td><span className="t-cli"><a href="#--help">--help</a></span></td>
     <td><span className="t-cli">-h</span></td>
     <td>Usage information for the <code>init</code> command.</td>
    </tr>
    <tr>
     <td><span className="t-cli"><a href="#--platformname">--platformName</a></span></td>
     <td><span className="t-cli">-p</span></td>
     <td>The operation system and verseion on which tests will be run.</td>
    </tr>
    <tr>
     <td><span className="t-cli"><a href="#--region">--region</a></span></td>
     <td><span className="t-cli">-r</span></td>
     <td>The Sauce Labs data center associated with the testing account.</td>
    </tr>
    <tr>
     <td><span className="t-cli"><a href="#--testapp">--testApp</a></span></td>
     <td><span className="t-cli">-t</span></td>
     <td>The path to the mobile testing application.</td>
    </tr>
    <tr>
     <td><span className="t-cli"><a href="#--username">--username</a></span></td>
     <td><span className="t-cli">-u</span></td>
     <td>A valid Sauce Labs user account.</td>
    </tr>
  </tbody>
</table>

## Options Details


### <span className="cli">--accessKey</span>
<div className="cli-desc">
<p><small>| OPTIONAL | STRING |</small></p>

The authentication access key associated with the Sauce Labs user account making this request. If you have not set your authentication credentials as environment parameters or generated a `credentials.yml` file, this value is required.

**Shorthand:** `-a `

</div>

### <span className="cli">--app</span>
<div className="cli-desc">
<p><small>| OPTIONAL | STRING | <span className="sauceDBlue">Espresso/XCUITest Only</span> |</small></p>

The path to a valid mobile application to test.

</div>

### <span className="cli">--artifacts.download.when</span>

<div className="cli-desc">
<p><small>| OPTIONAL | STRING |</small></p>

Specifies when and under what circumstances to download artifacts. Valid values are:

* `always`: Always download artifacts.
* `never`: Never download artifacts.
* `pass`: Download artifacts for passing suites only.
* `fail`: Download artifacts for failed suites only. (default value)

</div>

### <span className="cli">--browserName</span>
<div className="cli-desc">
<p><small>| REQUIRED | STRING | <span className="sauceDBlue">Web-app Only</span> |</small></p>

The name of the browser in which to run tests.

**Shorthand:** `-b `

</div>

### <span className="cli">--cypress.config</span>
<div className="cli-desc">
<p><small>| REQUIRED | STRING | <span className="sauceDBlue">Cypress Only</span> |</small></p>

The file path to the Cypress configuration file (typically `cypress.json`).

</div>

### <span className="cli">--device</span>
<div className="cli-desc">
<p><small>| OPTIONAL | STRING | <span className="sauceDBlue">Espresso/XCUITest Only</span> |</small></p>

Find a real device for this test by matching a set of one or more device characteristics:

|Characteristic|Description|Example|
|---|---|---|
|`id`| Specify a device by its ID. Using this selection flag ignores all other characteristics and is not advised because availability of a specific device is uncertain and could cause your test to time out.| ```--device "id=HTC_U11_real_us"```|
|`name`|Find a device based on a partial name in order to increase likelihood of availability of similar devices.|```--device "name=HTC.*"```|
|`platformVersion`|Find a device based on its platform version.|```--device "platformVersion=8.0"```|
|`carrierConnectivity`|The selected device must be connected to a cellular network. |```--device "carrierConnectivity=true"```|
|`deviceType`|The selected device must be a particular type (`PHONE`, `TABLET`, or `ANY`).|```--device "deviceType=PHONE"```|
|`private`|The selected device must be private.|```--device "private=true"```|

You can specify a combination of device characteristics within this flag:

```bash
--device "name=HTC.*,platformVersion=8.0.0,carrierConnectivity=true"
```

</div>

### <span className="cli">--emulator</span>
<div className="cli-desc">
<p><small>| OPTIONAL | STRING | <span className="sauceDBlue">Espresso Only</span> |</small></p>

Specify a virtual device for the test by matching a set of one or more emulator characteristics.

|Characteristic|Description|Example|
|---|---|---|
|`name`|Specify all or part of the emulator name. [Supported VMD List](https://app.saucelabs.com/live/web-testing/virtual) |```--emulator "name=Android.*"```|
|`platformVersion`|Specify the emulator platform version.|```--emulator "platformVersion=7.1"```|
|`orientation`|Specify how the emulator should be oriented for the test (`portrait` or `landscape`). |```--emulator "orientation=portrait"```|

You can specify a combination of emulator characteristics within this flag:

```bash
--emulator "name=Samsung Galaxy S8 FHD GoogleAPI Emulator,platformVersion=7.1"
```

</div>

### <span className="cli">--framework</span>
<div className="cli-desc">
<p><small>| REQUIRED | STRING |</small></p>

The framework for which this configuration is intended.

**Shorthand:** `-f `

</div>

### <span className="cli">--frameworkVersion</span>
<div className="cli-desc">
<p><small>| REQUIRED | STRING | <span className="sauceDBlue">Web-app Only</span> |</small></p>

The version of the framework that is compatible with the tests defined in this configuration.

**Shorthand:** `-v `

</div>

### <span className="cli">--help</span>

<div className="cli-desc">

Usage information for the `init` command.

**Shorthand:** `-h`

</div>

### <span className="cli">--platformName</span>
<div className="cli-desc">
<p><small>| OPTIONAL | STRING | <span className="sauceDBlue">Web-app Only</span> |</small></p>

A specific operating system and version on which to run the specified browser and test suite.

:::note
You can optionally specify `docker` here as the platform.
:::

**Shorthand:** `-p `

</div>

### <span className="cli">--region</span>
<div className="cli-desc">
<p><small>| REQUIRED | STRING |</small></p>

Specifies the Sauce Labs data center through which tests will run. Valid values are: `us-west-1` (default) or `eu-central-1`.

**Shorthand:** `-r `

</div>

### <span className="cli">--testApp</span>
<div className="cli-desc">
<p><small>| REQUIRED | STRING | <span className="sauceDBlue">Espresso/XCUITest Only</span> |</small></p>

The path to the mobile testing application.

**Shorthand:** `-t `

</div>

### <span className="cli">--username</span>
<div className="cli-desc">
<p><small>| OPTIONAL | STRING |</small></p>

A valid Sauce Labs user account. If you have not set your authentication credentials as environment parameters or generated a `credentials.yml` file, this value is required.

**Shorthand:** `-u `

</div>

## Examples

### Interactive Example

```bash
$ saucectl init
12:13:20 INF Start Init Command
? Select region: us-west-1
? Select framework:  [Use arrows to move, type to filter]
> cypress
 playwright
 puppeteer
 testcafe
 espresso
 xcuitest
```

### Batch Example

```bash
$ saucectl init -r us-west-1 -f cypress -b chrome
```
