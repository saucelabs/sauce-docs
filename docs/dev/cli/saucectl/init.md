---
id: init
title: saucectl init
sidebar_label: saucectl init
---

Generate a configuration file for use in running tests through `saucectl`.

## Usage

```bash
$ saucectl init <framework> [OPTIONS]
```

## Extended Description

This bootstrapping command generates a configuration file for the framework of your choice in the format required by `saucectl`.

You can run the command with no options to initiate **interactive mode**, where you are iteratively prompted for each relevant property value. Alternatively, you can specify relevant property values by entering them as inline options in the command.

In either case, the command generates a `.sauce/config.yml` folder and file in the location from which the command is run. If you have an existing project directory for your framework, it is advised that you run this command from the project root.

## Alternative Configuration Editing

- If you are implementing a more complex set of properties, you can manually edit your `config.yml` file. Comprehensive descriptions for all supported properties are provided by framework:
  - [Cypress YAML](/web-apps/automated-testing/cypress/yaml)
  - [Playwright YAML](/web-apps/automated-testing/playwright/yaml)
  - [TestCafe YAML](/web-apps/automated-testing/testcafe/yaml)
  - [Espresso YAML](/mobile-apps/automated-testing/espresso-xcuitest/espresso)
  - [XCUITest YAML](/mobile-apps/automated-testing/espresso-xcuitest/xcuitest)

## Global Options Summary

These global options can be specified across all frameworks.

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
     <td><span className="t-cli"><a href="#--help">--help</a></span></td>
     <td><span className="t-cli">-h</span></td>
     <td>Usage information for the <code>init</code> command.</td>
    </tr>
    <tr>
     <td><span className="t-cli"><a href="#--no-prompt">--no-prompt</a></span></td>
     <td></td>
     <td>Disable interactive prompts.</td>
    </tr>
    <tr>
     <td><span className="t-cli"><a href="#--region">--region</a></span></td>
     <td><span className="t-cli">-r</span></td>
     <td>The Sauce Labs data center associated with the testing account.</td>
    </tr>
  </tbody>
</table>

## Global Options Details

### <span className="cli">--help</span>

<div className="cli-desc">

Usage information for the `init` command.

**Shorthand:** `-h`

</div>

### <span className="cli">--no-prompt</span>

<div className="cli-desc">

Disables the interactive mode. You'll have to specify most values for initialization
via CLI flags, since there'll be no more prompts for inputs.

</div>

### <span className="cli">--region</span>

<div className="cli-desc">
<p><small>| REQUIRED | STRING |</small></p>

Specifies the Sauce Labs data center through which tests will run. Valid values are: `us-west-1` (default) or `eu-central-1`.

**Shorthand:** `-r `

</div>

## Cypress Options Summary

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
     <td><span className="t-cli"><a href="#--artifacts-when">--artifacts-when</a></span></td>
     <td></td>
     <td>When to download artifacts.</td>
    </tr>
    <tr>
     <td><span className="t-cli"><a href="#--browser">--browser</a></span></td>
     <td></td>
     <td>Browser name.</td>
    </tr>
    <tr>
     <td><span className="t-cli"><a href="#--cypress-config">--cypress-config</a></span></td>
     <td></td>
     <td>Path to the cypress config file.</td>
    </tr>
    <tr>
     <td><span className="t-cli"><a href="#--platform">--platform</a></span></td>
     <td></td>
     <td>OS name and version, such as Windows 11 or macOS 13.</td>
    </tr>
    <tr>
     <td><span className="t-cli"><a href="#--version">--version</a></span></td>
     <td></td>
     <td>Cypress version.</td>
    </tr>
  </tbody>
</table>

## Cypress Option Details

### <span className="cli">--artifacts-when</span>

<div className="cli-desc">
<p><small>| OPTIONAL |</small></p>

Specifies when and under what circumstances to download artifacts. Valid values are:

- `always`: Always download artifacts.
- `never`: Never download artifacts.
- `pass`: Download artifacts for passing suites only.
- `fail`: Download artifacts for failed suites only. (default value)

</div>

### <span className="cli">--browser</span>

<div className="cli-desc">
<p><small>| REQUIRED |</small></p>

The name of the browser in which to run tests.
</div>

### <span className="cli">--cypress-config</span>

<div className="cli-desc">
<p><small>| REQUIRED |</small></p>

The file path to the Cypress configuration file (typically `cypress.config.js` or `cypress.config.ts`).

</div>

### <span className="cli">--platform</span>

<div className="cli-desc">
<p><small>| REQUIRED |</small></p>

A specific operating system and version on which to run the specified browser and test suite,
such as Windows 11 or macOS 13.

</div>

### <span className="cli">--version</span>

<div className="cli-desc">
<p><small>| REQUIRED |</small></p>

The version of Cypress that is compatible with the tests defined in this configuration.

</div>


## Espresso Options Summary

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
     <td><span className="t-cli"><a href="#--app">--app</a></span></td>
     <td></td>
     <td>Path to the application under test.</td>
    </tr>
    <tr>
     <td><span className="t-cli"><a href="#--artifacts-when">--artifacts-when</a></span></td>
     <td></td>
     <td>When to download artifacts.</td>
    </tr>
    <tr>
     <td><span className="t-cli"><a href="#--device">--device</a></span></td>
     <td></td>
     <td>Real device to use for testing.</td>
    </tr>
    <tr>
     <td><span className="t-cli"><a href="#--emulator">--emulator</a></span></td>
     <td></td>
     <td>Android emulator to use for testing.</td>
    </tr>
    <tr>
     <td><span className="t-cli"><a href="#--other-apps">--other-apps</a></span></td>
     <td></td>
     <td>Path to additional applications.</td>
    </tr>
    <tr>
     <td><span className="t-cli"><a href="#--test-app">--test-app</a></span></td>
     <td></td>
     <td>Path to the test application.</td>
    </tr>
  </tbody>
</table>


## Espresso Option Details

### <span className="cli">--app</span>

<div className="cli-desc">
<p><small>| REQUIRED |</small></p>

The path to a valid mobile application to test.
</div>

### <span className="cli">--artifacts-when</span>

<div className="cli-desc">
<p><small>| OPTIONAL |</small></p>

Specifies when and under what circumstances to download artifacts. Valid values are:

- `always`: Always download artifacts.
- `never`: Never download artifacts.
- `pass`: Download artifacts for passing suites only.
- `fail`: Download artifacts for failed suites only. (default value)

</div>

### <span className="cli">--device</span>

<div className="cli-desc">
<p><small>| OPTIONAL |</small></p>

Find a real device for this test by matching a set of one or more device characteristics.
More details on static and dynamic device allocation can be found [here](/mobile-apps/supported-devices/#static-and-dynamic-device-allocation).

| Characteristic        | Description                                                                                                                                                                                              | Example                               |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| `id`                  | Specify a device by its ID. Using this selection flag ignores all other characteristics and is not advised because availability of a specific device is uncertain and could cause your test to time out. | `--device "id=HTC_U11_real_us"`       |
| `name`                | Find a device based on a partial name in order to increase likelihood of availability of similar devices.                                                                                                | `--device "name=HTC.*"`               |
| `platformVersion`     | Find a device based on its platform version.                                                                                                                                                             | `--device "platformVersion=8.0"`      |
| `carrierConnectivity` | The selected device must be connected to a cellular network.                                                                                                                                             | `--device "carrierConnectivity=true"` |
| `deviceType`          | The selected device must be a particular type (`PHONE`, `TABLET`, or `ANY`).                                                                                                                             | `--device "deviceType=PHONE"`         |
| `private`             | The selected device must be private.                                                                                                                                                                     | `--device "private=true"`             |

You can specify a combination of device characteristics within this flag:

```bash
--device "name=HTC.*,platformVersion=8.0.0,carrierConnectivity=true"
```

</div>

### <span className="cli">--emulator</span>

<div className="cli-desc">
<p><small>| OPTIONAL |</small></p>

Specify a virtual device for the test by matching a set of one or more emulator characteristics.

| Characteristic    | Description                                                                                                        | Example                             |
| ----------------- | ------------------------------------------------------------------------------------------------------------------ | ----------------------------------- |
| `name`            | Specify all or part of the emulator name. [Supported VMD List](https://app.saucelabs.com/live/web-testing/virtual) | `--emulator "name=Android.*"`       |
| `platformVersions` | Specify the emulator platform version.                                                                             | `--emulator "platformVersions=7.1"`  |
| `orientation`     | Specify how the emulator should be oriented for the test (`portrait` or `landscape`).                              | `--emulator "orientation=portrait"` |

You can specify a combination of emulator characteristics within this flag:

```bash
--emulator "name=Samsung Galaxy S8 FHD GoogleAPI Emulator,platformVersions=7.1"
```

</div>

### <span className="cli">--other-apps</span>

<div className="cli-desc">
<p><small>| OPTIONAL |</small></p>

The path(s) to additional applications that need to be installed along with the main app.

</div>

### <span className="cli">--test-app</span>

<div className="cli-desc">
<p><small>| REQUIRED |</small></p>

The path to the mobile testing application.

</div>


## Playwright Options Summary

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
     <td><span className="t-cli"><a href="#--artifacts-when">--artifacts-when</a></span></td>
     <td></td>
     <td>When to download artifacts.</td>
    </tr>
    <tr>
     <td><span className="t-cli"><a href="#--browser">--browser</a></span></td>
     <td></td>
     <td>Browser name.</td>
    </tr>
    <tr>
     <td><span className="t-cli"><a href="#--platform">--platform</a></span></td>
     <td></td>
     <td>OS name and version, such as Windows 11 or macOS 13.</td>
    </tr>
    <tr>
     <td><span className="t-cli"><a href="#--project">--project</a></span></td>
     <td></td>
     <td>Playwright project name.</td>
    </tr>
    <tr>
     <td><span className="t-cli"><a href="#--test-match">--test-match</a></span></td>
     <td></td>
     <td>Test file pattern to match against.</td>
    </tr>
    <tr>
     <td><span className="t-cli"><a href="#--version">--version</a></span></td>
     <td></td>
     <td>Playwright version.</td>
    </tr>
  </tbody>
</table>

## Playwright Option Details

### <span className="cli">--artifacts-when</span>

<div className="cli-desc">
<p><small>| OPTIONAL |</small></p>

Specifies when and under what circumstances to download artifacts. Valid values are:

- `always`: Always download artifacts.
- `never`: Never download artifacts.
- `pass`: Download artifacts for passing suites only.
- `fail`: Download artifacts for failed suites only. (default value)

</div>

### <span className="cli">--browser</span>

<div className="cli-desc">
<p><small>| REQUIRED |</small></p>

The name of the browser in which to run tests.
</div>

### <span className="cli">--platform</span>

<div className="cli-desc">
<p><small>| REQUIRED |</small></p>

A specific operating system and version on which to run the specified browser and test suite,
such as Windows 11 or macOS 13.

</div>

### <span className="cli">--project</span>

<div className="cli-desc">
<p><small>| OPTIONAL |</small></p>

If your Playwright config file (`playwright.config.js/ts`) contains projects,
you **must** specify which project you want to run. This flag is not required otherwise.

</div>

### <span className="cli">--test-match</span>

<div className="cli-desc">
<p><small>| OPTIONAL |</small></p>

Which test files to match against for the purpose of testing.
Defaults to `.*.spec.js`.

</div>

### <span className="cli">--version</span>

<div className="cli-desc">
<p><small>| REQUIRED |</small></p>

The version of Playwright that is compatible with the tests defined in this configuration.

</div>

## TestCafe Options Summary

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
     <td><span className="t-cli"><a href="#--artifacts-when">--artifacts-when</a></span></td>
     <td></td>
     <td>When to download artifacts.</td>
    </tr>
    <tr>
     <td><span className="t-cli"><a href="#--browser">--browser</a></span></td>
     <td></td>
     <td>Browser name.</td>
    </tr>
    <tr>
     <td><span className="t-cli"><a href="#--platform">--platform</a></span></td>
     <td></td>
     <td>OS name and version, such as Windows 11 or macOS 13.</td>
    </tr>
    <tr>
     <td><span className="t-cli"><a href="#--version">--version</a></span></td>
     <td></td>
     <td>TestCafe version.</td>
    </tr>
  </tbody>
</table>

## TestCafe Option Details

### <span className="cli">--artifacts-when</span>

<div className="cli-desc">
<p><small>| OPTIONAL |</small></p>

Specifies when and under what circumstances to download artifacts. Valid values are:

- `always`: Always download artifacts.
- `never`: Never download artifacts.
- `pass`: Download artifacts for passing suites only.
- `fail`: Download artifacts for failed suites only. (default value)

</div>

### <span className="cli">--browser</span>

<div className="cli-desc">
<p><small>| REQUIRED |</small></p>

The name of the browser in which to run tests.
</div>

### <span className="cli">--platform</span>

<div className="cli-desc">
<p><small>| REQUIRED |</small></p>

A specific operating system and version on which to run the specified browser and test suite,
such as Windows 11 or macOS 13.

</div>

### <span className="cli">--version</span>

<div className="cli-desc">
<p><small>| REQUIRED |</small></p>

The version of TestCafe that is compatible with the tests defined in this configuration.

</div>


## XCUITest Options Summary

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
     <td><span className="t-cli"><a href="#--app">--app</a></span></td>
     <td></td>
     <td>Path to the application under test.</td>
    </tr>
    <tr>
     <td><span className="t-cli"><a href="#--artifacts-when">--artifacts-when</a></span></td>
     <td></td>
     <td>When to download artifacts.</td>
    </tr>
    <tr>
     <td><span className="t-cli"><a href="#--device">--device</a></span></td>
     <td></td>
     <td>Real device to use for testing.</td>
    </tr>
    <tr>
     <td><span className="t-cli"><a href="#--other-apps">--other-apps</a></span></td>
     <td></td>
     <td>Path to additional applications.</td>
    </tr>
    <tr>
     <td><span className="t-cli"><a href="#--simulator">--simulator</a></span></td>
     <td></td>
     <td>The iOS simulator to use for testing.</td>
    </tr>
    <tr>
     <td><span className="t-cli"><a href="#--test-app">--test-app</a></span></td>
     <td></td>
     <td>Path to the test application.</td>
    </tr>
  </tbody>
</table>


## XCUITest Option Details

### <span className="cli">--app</span>

<div className="cli-desc">
<p><small>| REQUIRED |</small></p>

The path to a valid mobile application to test.
</div>

### <span className="cli">--artifacts-when</span>

<div className="cli-desc">
<p><small>| OPTIONAL |</small></p>

Specifies when and under what circumstances to download artifacts. Valid values are:

- `always`: Always download artifacts.
- `never`: Never download artifacts.
- `pass`: Download artifacts for passing suites only.
- `fail`: Download artifacts for failed suites only. (default value)

</div>

### <span className="cli">--device</span>

<div className="cli-desc">
<p><small>| OPTIONAL |</small></p>

Find a real device for this test by matching a set of one or more device characteristics.
More details on static and dynamic device allocation can be found [here](/mobile-apps/supported-devices/#static-and-dynamic-device-allocation).

| Characteristic        | Description                                                                                                                                                                                              | Example                               |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| `id`                  | Specify a device by its ID. Using this selection flag ignores all other characteristics and is not advised because availability of a specific device is uncertain and could cause your test to time out. | `--device "id=iPhone_15_Pro_real_sjc1"`       |
| `name`                | Find a device based on a partial name in order to increase likelihood of availability of similar devices.                                                                                                | `--device "name=iPhone.*"`               |
| `platformVersion`     | Find a device based on the version of the iOS operating system.                                                                                                                                                             | `--device "platformVersion=16.0"`      |
| `carrierConnectivity` | The selected device must be connected to a cellular network.                                                                                                                                             | `--device "carrierConnectivity=true"` |
| `deviceType`          | The selected device must be a particular type (`PHONE`, `TABLET`, or `ANY`).                                                                                                                             | `--device "deviceType=PHONE"`         |
| `private`             | The selected device must be private.                                                                                                                                                                     | `--device "private=true"`             |

You can specify a combination of device characteristics within this flag:

```bash
--device "name=iPhone.*,platformVersion=16.0,carrierConnectivity=true"
```

</div>

### <span className="cli">--simulator</span>

<div className="cli-desc">
<p><small>| OPTIONAL |</small></p>

Specify a virtual device for the test by matching a set of one or more simulator characteristics.

| Characteristic    | Description                                                                                                        | Example                             |
| ----------------- | ------------------------------------------------------------------------------------------------------------------ | ----------------------------------- |
| `name`            | Specify all or part of the simulator name. [Supported VMD List](https://app.saucelabs.com/live/web-testing/virtual) | `--simulator "name=iPhone.*"`       |
| `platformVersions` | Specify the simulator platform version.                                                                             | `--simulator "platformVersions=16.0"`  |
| `orientation`     | Specify how the simulator should be oriented for the test (`portrait` or `landscape`).                              | `--simulator "orientation=portrait"` |

You can specify a combination of simulator characteristics within this flag:

```bash
--simulator "name=iPhone 14 Simulator,platformVersions=16.0"
```

</div>

### <span className="cli">--other-apps</span>

<div className="cli-desc">
<p><small>| OPTIONAL |</small></p>

The path(s) to additional applications that need to be installed along with the main app.

</div>

### <span className="cli">--test-app</span>

<div className="cli-desc">
<p><small>| REQUIRED |</small></p>

The path to the mobile testing application.

</div>
