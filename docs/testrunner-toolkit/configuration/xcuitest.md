---
id: xcuitest
title: "Configuration Syntax: XCUITest"
sidebar_label: XCUITest
---


Please refer to the [Common Configuration Syntax Reference](/testrunner-toolkit/configuration/common-syntax)for information regarding fields such as `apiVersion`, `kind`, `suites`, `sauce`, etc.

## Example Configuration

```yaml reference
https://github.com/saucelabs/saucectl-xcuitest-example/blob/master/.sauce/config.yml
```

## `xcuitest`

__Description__: Details specific to the `xcuitest` configuration.

__Type__: *object*

__Example__:
```yaml
xcuitest:
  app: ./apps/xcuitest/calc.apk
  testApp: ./apps/xcuitest/calc-success.apk
```

### `app`

__Description__: Path to the application. It supports expanded enviornment variable.

__Type__: *string*

__Examples__:
```yaml
  app: ./apps/xcuitest/calc.apk
```

```yaml
  app: $APP
```

### `testApp`

__Description__: Path to the testing application. It supports expanded enviornment variable.

__Type__: *string*

__Examples__:
```yaml
  testApp: ./apps/xcuitest/calc-success.apk
```

```yaml
  testApp: $TEST_APP
```

## `devices`

__Description__: Field for requesting real devices for the test.

You can request a specific device using its ID, or you can specify a set of criteria to choose the first available device that matches the specifications.

When an ID is specified, it supersedes the other settings.

__Type__: *[]object*

__Example__:
```yaml
devices:
  - name: "iPhone 11"
    platformVersion: "14.3"
  - id: iPhone_11_14_5_real_us
```

### `id`

__Description__: Request a specific device by its id. You can look up device IDs in the Sauce Labs app or using our [Get Devices API request](https://docs.saucelabs.com/dev/api/rdc#get-devices).

__Type__:  *string*

__Example__:

```yaml
        id: iPhone_11_14_5_real_us
```

### `name`

__Description__:  Request a device by its name.

__Type__:  *string*

__Example__:

Using complete name:
```yaml
      - name: iPhone 11
```

Using pattern matching:
```yaml
        name: iPhone*
```

### `platformVersion`

__Description__: Request that the device matches a specific platform version. You can use the `*` wildcard to denote flexibility.

__Type__:  *string*

__Example__:

```yaml
        platformVersion: 14.*
```

### `options`

__Description__:  Further specify certain device attributes within the pool of devices that match the `name` and `version` criteria.

__Type__: *object*

#### `carrierConnectivity`

__Description__: Request that the matching device is also connected to a cellular network.

__Type__:  *bool*

__Example__:

```yaml
       carrierConnectivity: true

```

#### `deviceType`

__Description__:  Request that the matching device is a specific type of device. Values:  `ANY`, `TABLET`, or `PHONE`.

__Type__:  *string*

__Example__:

```yaml
        deviceType: PHONE
```

#### `private`

__Description__: Request that the matching device is from your organization's private pool.

__Type__:  *bool*

__Example__:

```yaml
        private: true
```


## `testOptions`

__Description__: A set of parameters allowing you to select tests for the suite based on matching attributes.

__Type__: *object*

__Example__:
```yaml
testOptions:
  class:
    - SwagLabsMobileAppUITests.LoginTests/testSuccessfulLogin
    - SwagLabsMobileAppUITests.LoginTests/testNoUsernameLogin
    - SwagLabsMobileAppUITests.LoginTests
```

### `class`

__Description__: Instructs `saucectl` to only run the specified classes for this test suite. Each class contains `class_name`/`method_name`. If no `method_name` provided, it will run the whole test.

__Type__: *array*

__Example__:
```yaml
  class:
    - SwagLabsMobileAppUITests.LoginTests/testSuccessfulLogin
    - SwagLabsMobileAppUITests.LoginTests/testNoUsernameLogin
    - SwagLabsMobileAppUITests.LoginTests
```